/**
 * CIRE — inquiry notifier
 * ---------------------------------------------------------------------------
 * Polls the three inquiry collections in Firestore and emails you when
 * something new arrives: a short plain-text summary in the body, and a
 * formatted PDF attached with the full detail.
 *
 * Runs on Google Apps Script's free tier. No Blaze plan, no Cloud Functions,
 * no third-party service holding your data.
 *
 * SETUP — see README.md in this folder. In short:
 *   1. Create a service account with the "Cloud Datastore User" role.
 *   2. Paste its JSON key into Script Properties as FIREBASE_SA_KEY.
 *   3. Set RECIPIENT_EMAIL below.
 *   4. Run setUp() once, then install a 5-minute time-driven trigger on poll().
 *
 * The service account key is a credential. It lives in Script Properties and
 * nowhere else — never commit it, never paste it into a chat.
 */

// ── Configuration ──────────────────────────────────────────────────────────

/** Where notifications go. */
var RECIPIENT_EMAIL = 'cireconglomerate@gmail.com';

var PROJECT_ID = 'cire-conglomerate';

/** Collection id → the label used in notifications. */
var COLLECTIONS = {
  request_access: 'Access Request',
  concierge_inquiry: 'Concierge Inquiry',
  brilliance_inquiry: 'Brilliance Inquiry',
};

/**
 * Field → heading, grouped into the sections that appear in the PDF.
 *
 * The three forms are very different shapes — Concierge writes ~31 fields,
 * Brilliance 8, Access Request 7 — so the PDF renders only the fields a given
 * inquiry actually has. Anything not listed here still appears, under
 * "Additional", so a new form field can never go missing from a notification.
 */
var SECTIONS = [
  { title: 'Contact', fields: {
      name: 'Name', email: 'Email', phone: 'Phone',
      company: 'Company', referral: 'Referred by', instagram: 'Instagram',
  }},
  { title: 'Request', fields: {
      interest: 'Interested in', message: 'Message',
      goldTone: 'Gold tone', products: 'Products',
      category: 'Category', model: 'Model', color: 'Colour',
      vehicleCount: 'Vehicles', budget: 'Budget', experience: 'Experience',
  }},
  { title: 'Schedule', fields: {
      dateStart: 'Start date', dateEnd: 'End date',
      timeStart: 'Start time', timeEnd: 'End time',
      timingFlexible: 'Flexible timing', twentyFourHour: '24-hour booking',
  }},
  { title: 'Delivery', fields: {
      delivery: 'Delivery', location: 'Location',
      deliveryLocation: 'Delivery location', outOfState: 'Out of state',
  }},
  { title: 'Driver & Insurance', fields: {
      driverAge: 'Driver age', licenseType: 'Licence type',
      fullCoverage: 'Full coverage', insuranceState: 'Insurance state',
      insuranceCountry: 'Insurance country',
      addDriverName: 'Additional driver', addDriverAge: 'Additional driver age',
  }},
  { title: 'Add-ons', fields: { addons: 'Add-ons' } },
];

/** Never rendered as ordinary rows — handled separately or not shown. */
var SKIP_FIELDS = { timestamp: 1, locationData: 1 };

// ── Entry points ───────────────────────────────────────────────────────────

/**
 * Run once by hand before installing the trigger. Marks everything currently
 * in Firestore as already-seen, so the first scheduled run does not email you
 * the entire back catalogue.
 */
function setUp() {
  var now = new Date().toISOString();
  var props = PropertiesService.getScriptProperties();
  Object.keys(COLLECTIONS).forEach(function (name) {
    props.setProperty('lastSeen_' + name, now);
  });
  Logger.log('Watermark set to %s for: %s', now, Object.keys(COLLECTIONS).join(', '));
}

/** The function the time-driven trigger calls. */
function poll() {
  var token = getAccessToken_();
  var props = PropertiesService.getScriptProperties();
  var found = [];

  Object.keys(COLLECTIONS).forEach(function (name) {
    var since = props.getProperty('lastSeen_' + name) || new Date(0).toISOString();
    var docs = querySince_(token, name, since);

    docs.forEach(function (doc) {
      found.push({ collection: name, label: COLLECTIONS[name],
                   fields: doc.fields, created: doc.created });
    });

    /* Advance the watermark only past documents actually seen. If the notify
       step throws, the next run picks these up again rather than losing them. */
    if (docs.length) {
      props.setProperty('lastSeen_' + name, docs[docs.length - 1].created);
    }
  });

  if (!found.length) return;

  notify_(found);
  Logger.log('Notified about %s new inquir%s', found.length,
             found.length === 1 ? 'y' : 'ies');
}

// ── Firestore ──────────────────────────────────────────────────────────────

/**
 * Mints a Google OAuth access token from the service account key by signing a
 * JWT. Apps Script can do RS256 natively, so this needs no external library.
 */
function getAccessToken_() {
  /* Tokens are valid for an hour, so minting one per run burnt a UrlFetch call
     every five minutes for no reason - 288 a day against the daily quota. Cache
     it for 55 minutes and reuse, leaving a 5 minute margin before expiry. */
  var cache = CacheService.getScriptCache();
  var cached = cache.get('sa_access_token');
  if (cached) return cached;

  var raw = PropertiesService.getScriptProperties().getProperty('FIREBASE_SA_KEY');
  if (!raw) throw new Error('FIREBASE_SA_KEY is not set in Script Properties. See README.md.');

  var key = JSON.parse(raw);
  var now = Math.floor(Date.now() / 1000);

  var b64 = function (obj) {
    return Utilities.base64EncodeWebSafe(JSON.stringify(obj)).replace(/=+$/, '');
  };
  var unsigned = b64({ alg: 'RS256', typ: 'JWT' }) + '.' + b64({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  });
  var signature = Utilities.computeRsaSha256Signature(unsigned, key.private_key);
  var jwt = unsigned + '.' + Utilities.base64EncodeWebSafe(signature).replace(/=+$/, '');

  var res = UrlFetchApp.fetch('https://oauth2.googleapis.com/token', {
    method: 'post',
    payload: {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    },
    muteHttpExceptions: true,
  });

  var body = JSON.parse(res.getContentText());
  if (!body.access_token) {
    throw new Error('Could not get an access token: ' + res.getContentText());
  }
  cache.put('sa_access_token', body.access_token, 3300);
  return body.access_token;
}

/** Returns documents created after `since`, oldest first. */
function querySince_(token, collection, since) {
  var url = 'https://firestore.googleapis.com/v1/projects/' + PROJECT_ID +
            '/databases/(default)/documents:runQuery';

  var query = {
    structuredQuery: {
      from: [{ collectionId: collection }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'timestamp' },
          op: 'GREATER_THAN',
          value: { timestampValue: since },
        },
      },
      orderBy: [{ field: { fieldPath: 'timestamp' }, direction: 'ASCENDING' }],
      limit: 50,
    },
  };

  var res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token },
    payload: JSON.stringify(query),
    muteHttpExceptions: true,
  });

  if (res.getResponseCode() !== 200) {
    throw new Error('Firestore query failed for ' + collection + ': ' + res.getContentText());
  }

  var out = [];
  (JSON.parse(res.getContentText()) || []).forEach(function (row) {
    if (!row.document) return; // read-only rows carry only a readTime
    var f = row.document.fields || {};
    out.push({
      fields: flatten_(f),
      created: (f.timestamp && f.timestamp.timestampValue) || row.document.createTime,
    });
  });
  return out;
}

/** Firestore wraps every value in a type tag; unwrap into plain JS. */
function flatten_(fields) {
  var out = {};
  Object.keys(fields).forEach(function (k) { out[k] = unwrap_(fields[k]); });
  return out;
}

function unwrap_(v) {
  if (v === null || v === undefined) return '';
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue ? 'Yes' : 'No';
  if ('timestampValue' in v) return v.timestampValue;
  if ('nullValue' in v) return '';
  if ('arrayValue' in v) return ((v.arrayValue && v.arrayValue.values) || []).map(unwrap_);
  if ('mapValue' in v) return flatten_((v.mapValue && v.mapValue.fields) || {});
  return '';
}

// ── Notification ───────────────────────────────────────────────────────────

function notify_(items) {
  var subject = items.length === 1
    ? 'CIRE — new ' + items[0].label + ' from ' + (items[0].fields.name || 'unknown')
    : 'CIRE — ' + items.length + ' new inquiries';

  /* The body stays short so it is readable on a lock screen; the PDF carries
     the detail. */
  var body = items.map(function (it) {
    return '• ' + it.label + ' — ' + (it.fields.name || it.fields.email || 'unknown') +
           '\n  ' + formatDate_(it.created);
  }).join('\n\n');

  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd-HHmm');
  var pdf = Utilities.newBlob(buildHtml_(items), 'text/html')
                     .getAs('application/pdf')
                     .setName('CIRE-inquiries-' + stamp + '.pdf');

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: subject,
    body: body + '\n\nFull detail is attached.\n\nFirestore console:\n' +
          'https://console.firebase.google.com/project/' + PROJECT_ID + '/firestore',
    attachments: [pdf],
  });
}

/**
 * Builds the PDF.
 *
 * Deliberately a document rather than a spreadsheet. Flattening these three
 * forms into one sheet would mean ~40 columns, of which an Access Request fills
 * 7 and a Brilliance inquiry 8 — most of every row would be empty cells. A
 * sectioned document renders only the fields an inquiry actually has, so each
 * one reads as a page rather than a sparse line.
 */
function buildHtml_(items) {
  var css =
    'body{font-family:Helvetica,Arial,sans-serif;color:#1c1c1e;font-size:11pt;margin:0}' +
    '.doc{padding:28pt 34pt}' +
    'h1{font-size:15pt;letter-spacing:.18em;text-transform:uppercase;margin:0 0 2pt;font-weight:700}' +
    '.meta{color:#8e8e93;font-size:8.5pt;letter-spacing:.06em;margin-bottom:20pt}' +
    '.inq{border-top:1.5pt solid #1c1c1e;padding-top:10pt;margin-bottom:22pt;page-break-inside:avoid}' +
    '.inq h2{font-size:12pt;margin:0 0 1pt;font-weight:700}' +
    '.when{color:#8e8e93;font-size:8.5pt;margin-bottom:10pt}' +
    'h3{font-size:8.5pt;letter-spacing:.12em;text-transform:uppercase;color:#8e8e93;' +
    'margin:12pt 0 4pt;border-bottom:.5pt solid #d8d8dc;padding-bottom:2pt}' +
    'table{width:100%;border-collapse:collapse}' +
    'td{padding:3pt 0;vertical-align:top;font-size:10pt}' +
    'td.k{width:34%;color:#6c6c70}' +
    'td.v{font-weight:500}';

  var html = ['<html><head><meta charset="utf-8"><style>', css, '</style></head><body><div class="doc">',
              '<h1>CIRE Conglomerate</h1>',
              '<div class="meta">Inquiry report &middot; ', esc_(formatDate_(new Date().toISOString())),
              ' &middot; ', items.length, items.length === 1 ? ' entry' : ' entries', '</div>'];

  items.forEach(function (it) {
    html.push('<div class="inq"><h2>', esc_(it.label), '</h2>');
    html.push('<div class="when">Received ', esc_(formatDate_(it.created)), '</div>');

    var rendered = {};
    SECTIONS.forEach(function (section) {
      var rows = [];
      Object.keys(section.fields).forEach(function (key) {
        var val = it.fields[key];
        if (val === undefined || val === '' ||
            (Object.prototype.toString.call(val) === '[object Array]' && !val.length)) return;
        rendered[key] = 1;
        rows.push('<tr><td class="k">' + esc_(section.fields[key]) +
                  '</td><td class="v">' + esc_(format_(val)) + '</td></tr>');
      });
      if (rows.length) {
        html.push('<h3>', esc_(section.title), '</h3><table>', rows.join(''), '</table>');
      }
    });

    // Anything a form starts sending later still shows up rather than vanishing.
    var extra = [];
    Object.keys(it.fields).forEach(function (key) {
      if (rendered[key] || SKIP_FIELDS[key]) return;
      var val = it.fields[key];
      if (val === undefined || val === '') return;
      extra.push('<tr><td class="k">' + esc_(key) +
                 '</td><td class="v">' + esc_(format_(val)) + '</td></tr>');
    });

    var loc = it.fields.locationData;
    if (loc && loc.city) {
      extra.push('<tr><td class="k">Origin</td><td class="v">' +
                 esc_([loc.city, loc.regionName, loc.country].filter(Boolean).join(', ')) +
                 '</td></tr>');
    }
    if (extra.length) {
      html.push('<h3>Additional</h3><table>', extra.join(''), '</table>');
    }

    html.push('</div>');
  });

  html.push('</div></body></html>');
  return html.join('');
}

// ── Helpers ────────────────────────────────────────────────────────────────

function format_(v) {
  if (Object.prototype.toString.call(v) === '[object Array]') return v.join(', ');
  if (v && typeof v === 'object') {
    return Object.keys(v)
      .filter(function (k) { return v[k] !== '' && v[k] !== 'No'; })
      .map(function (k) { return k + ': ' + v[k]; })
      .join(', ');
  }
  return String(v);
}

function formatDate_(iso) {
  try {
    return Utilities.formatDate(new Date(iso), Session.getScriptTimeZone(),
                                'd MMM yyyy, h:mm a');
  } catch (e) {
    return String(iso);
  }
}

function esc_(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
