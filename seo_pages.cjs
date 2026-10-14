/* Post-build: everything about the photos - their pages, alt text, sizes, sitemap entries and
   the copyright embedded in the files (tools/embed_xmp.py --dist, the last build step) - is
   derived from CAROUSEL_PRODUCTS in index.html and the image files, at build time. To swap a
   photo, replace the file (same path) or change its path in CAROUSEL_PRODUCTS, then build and
   deploy. Nothing else.

   Post-build: give each division its own address, so Google can list it as a sub-link
   under cireconglomerate.com the way it lists "Jewelry" and "Watches" under a jeweller.

   The site is one page and every division lives behind ?folder=, which Google treats as
   the same page with the same title and description - nothing to list separately. This
   writes a copy of the built index.html per division with its own title, description,
   canonical address, share card, structured data and crawlable text. firebase.json's
   cleanUrls serves dist/concierge/automotive.html at /concierge/automotive.

   For a visitor the page is the full desktop: the first thing in <head> swaps the address
   to the matching /?folder= deep link, exactly as if they had followed one. That runs
   before anything else parses, so every relative asset path resolves against / as it
   always has, and the app's own deep-link boot opens the folder.

   The same trick gives every product its own address (/sophisticated-brilliance/beast) and
   every photo of it too (/sophisticated-brilliance/beast/front), generated from the
   CAROUSEL_PRODUCTS list in index.html: the shim opens /?file=<product>&image=<photo>, the
   noscript body and structured data carry the photo, its alt text, its size and its licence.
   Also written: /licensing, an image sitemap, and image-alt.js (the alt text the app puts on
   its own gallery images). dist/.image-scope.json lists the photos for tools/embed_xmp.py,
   which stamps the copyright into the files themselves.

   Only dist/ is written. Edit PAGES to change the copy. */
const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "dist");
const ORIGIN = "https://cireconglomerate.com";
const IG_CIRE = "https://www.instagram.com/cireconglomerate";

const inventory = JSON.parse(fs.readFileSync(path.join(__dirname, "public/concierge_inventory.json"), "utf8"));
const makesOf = (category) => {
  const makes = new Set();
  for (const item of inventory) {
    if (item.category !== category) continue;
    const m = String(item.vehicle_info).match(/'Make':\s*'([^']+)'/);
    if (m) makes.add(m[1]);
  }
  return [...makes];
};
const namesOf = (category) => inventory.filter((i) => i.category === category).map((i) => i.name);

const PAGES = [
  {
    path: "sophisticated-brilliance",
    folder: "sophisticated-brilliance",
    title: "Sophisticated Brilliance | Luxury Fine-Jewelry Maison | CIRE Conglomerate",
    description:
      "Sophisticated Brilliance is a luxury fine-jewelry maison and art house, distinguished by its signature king and queen chess piece insignia. Luxury in its final form. Timelessness over ostentation. Discover Transcendence of Man, our debut collection of wearable art. Presented by CIRE Conglomerate.",
    cardTitle: "Sophisticated Brilliance | CIRE Conglomerate",
    cardDescription: "Luxury in its final form. Discover Transcendence of Man, our debut collection of wearable art.",
    image: "https://sophisticatedbrilliance.com/collections/transcendence-of-man/og-cover.jpg?v=5",
    imageSize: 1200,
    about: { "@id": "https://sophisticatedbrilliance.com/#org" },
    body: `<h1>Sophisticated Brilliance</h1>
      <p><strong>Sophisticated Brilliance</strong> is a luxury fine-jewelry maison and art house, distinguished by its signature king and queen chess piece insignia. <em>Luxury in its final form.</em> Timelessness over ostentation. Every creation doubles as wearable art and a financial asset, merging the intricacies of traditional fine jewelry with the progressive nature of hip-hop jewelry.</p>
      <p>Debut collection: <a href="https://sophisticatedbrilliance.com/collections/transcendence-of-man">Transcendence of Man</a>: Beast (Pendant I), Metamorphosis (Pendant II), Humble (Pendant III), The Nails (Earrings) and Celestial Scars (Cuban chain).</p>
      <p>Visit <a href="https://sophisticatedbrilliance.com/">sophisticatedbrilliance.com</a> · Instagram <a href="https://www.instagram.com/sophisticatedbrilliance">@sophisticatedbrilliance</a></p>`,
  },
  {
    path: "sophisticated-ignorance",
    folder: "sophisticated-ignorance",
    title: "Sophisticated Ignorance | High-Fashion Menswear Maison | CIRE Conglomerate",
    description:
      "Sophisticated Ignorance is a high-fashion menswear and lifestyle maison, blurring the boundaries between streetwear and refined tailoring. New-Vieux Riche luxury distinguished by its signature chess piece insignia, from Pawn to King, inviting clients to ascend the ranks of distinction. Presented by CIRE Conglomerate.",
    cardTitle: "Sophisticated Ignorance | CIRE Conglomerate",
    cardDescription: "From Pawn to King. Power Perfected in Position.",
    image: "https://sophisticatedignorance.co/og-cover.png?v=5",
    imageSize: 1200,
    about: { "@id": "https://sophisticatedignorance.co/#org" },
    body: `<h1>Sophisticated Ignorance</h1>
      <p><strong>Sophisticated Ignorance</strong> is a high-fashion menswear and lifestyle maison, blurring the boundaries between streetwear and refined tailoring. <em>New-Vieux Riche luxury</em> distinguished by its signature chess piece insignia, from Pawn to King, inviting clients to ascend the ranks of distinction.</p>
      <ul>
        <li>Foundations (Pawn): The Architecture of Self</li>
        <li>Fortifications (Rook): The Shield of Style</li>
        <li>Relics (Bishop): The Creed of Craft</li>
        <li>Dominion (Knight): The Path of Conquest</li>
        <li>Adornments (Queen): The Reign of Detail</li>
        <li>Crownworks (King): The Pinnacle of Refinement</li>
      </ul>
      <p>Visit <a href="https://sophisticatedignorance.co/">sophisticatedignorance.co</a> · Instagram <a href="https://www.instagram.com/sophisticatedignorance.co">@sophisticatedignorance.co</a></p>`,
  },
  {
    path: "concierge/automotive",
    folder: "concierge-automotive",
    title: "CIRE Concierge Automotive | Exotic & Luxury Car Rentals",
    description: `CIRE Concierge arranges exotic and luxury car rentals for private clients, from ${makesOf("automotive").slice(0, 5).join(", ")} and more, with hotel pickup, security and event coordination on request. Presented by CIRE Conglomerate.`,
    cardTitle: "CIRE Concierge | Automotive",
    cardDescription: "Exotic and luxury car rentals, arranged for private clients.",
    image: `${ORIGIN}/og-cover.png?v=3`,
    imageSize: 1024,
    about: { "@id": `${ORIGIN}/#concierge` },
    body: `<h1>CIRE Concierge: Automotive</h1>
      <p>CIRE Concierge &amp; Hospitality, the private client services division of CIRE Conglomerate, arranges exotic and luxury car rentals, with hospitality add-ons including hotel pickup, multiple-car arrivals, security, photography and event coordination.</p>
      <p>Marques in the current collection: ${makesOf("automotive").join(", ")}.</p>
      <ul>${namesOf("automotive").map((n) => `<li>${n}</li>`).join("")}</ul>
      <p>All rentals are subject to partner approval, insurance verification, deposit requirements and a final rental agreement.</p>`,
  },
  {
    path: "concierge/maritime",
    folder: "concierge-maritime",
    title: "CIRE Concierge Maritime | Private Yacht Charters",
    description:
      "CIRE Concierge arranges private yacht charters for events, weekend getaways and sunset cruises, crewed by captain and steward. Presented by CIRE Conglomerate.",
    cardTitle: "CIRE Concierge | Maritime",
    cardDescription: "Private yacht charters, arranged for private clients.",
    image: `${ORIGIN}/og-cover.png?v=3`,
    imageSize: 1024,
    about: { "@id": `${ORIGIN}/#concierge` },
    body: `<h1>CIRE Concierge: Maritime</h1>
      <p>CIRE Concierge &amp; Hospitality, the private client services division of CIRE Conglomerate, arranges private yacht charters for private events, weekend getaways and sunset cruises.</p>
      <ul>${namesOf("maritime").map((n) => `<li>${n}</li>`).join("")}</ul>
      <p>Charters are subject to a signed charter agreement and the weather.</p>`,
  },
];

/* The first thing in <head> on every generated page: swap the address to the app's deep
   link before anything else parses, so relative asset paths resolve against / as always
   and the app's own boot opens the folder, product or photo. Any query string the visit
   arrived with (fbclid, utm_*, gclid from a share card or an ad) is carried over rather
   than treated as a deep link of its own; a link that already names a folder, file or
   window is left exactly as it is. */
function shimScript(target) {
  const query = target.replace(/^\/\?/, "");
  return `<head>
    <script>
      (function () {
        var q = new URLSearchParams(location.search);
        if (q.has("file") || q.has("folder") || q.has("window")) return;
        var s = new URLSearchParams("${query}");
        q.forEach(function (v, k) { if (!s.has(k)) s.append(k, v); });
        history.replaceState(null, "", "/?" + s + location.hash);
      })();
    </script>`;
}

// JSON inside <script> must not be able to close the element.
const ldJson = (value) => JSON.stringify(value, null, 2).replace(/</g, "\\u003c");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

function setTag(html, re, replacement, label, file) {
  if (!re.test(html)) throw new Error(`seo_pages: ${label} not found while building ${file}`);
  return html.replace(re, () => replacement);
}

// The app reads its gallery alt text from this; the script has to be on every page that boots it.
const ALT_SCRIPT = `<script src="/image-alt.js" defer></script>`;
const injectAltScript = (html, file) => {
  if (html.includes(ALT_SCRIPT)) return html;
  return setTag(html, /<\/head>/, `  ${ALT_SCRIPT}\n  </head>`, "</head>", file);
};
const base = injectAltScript(fs.readFileSync(path.join(DIST, "index.html"), "utf8"), "index.html");
fs.writeFileSync(path.join(DIST, "index.html"), base);
const siblings = PAGES.map((p) => {
  const name = p.title.split(" | ")[0];
  return `<a href="${ORIGIN}/${p.path}">${name}</a>`;
});

for (const p of PAGES) {
  const url = `${ORIGIN}/${p.path}`;
  const file = `${p.path}.html`;
  let html = base;

  html = html.replace(/<head>/, () => shimScript(`/?folder=${p.folder}`));
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${p.title.replace(/&/g, "&amp;")}</title>`, "title", file);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(p.description)}" />`, "description", file);
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical", file);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url", file);
  for (const k of ["og:title", "twitter:title"]) {
    const attr = k.startsWith("og") ? "property" : "name";
    html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${esc(p.cardTitle)}" />`, k, file);
  }
  for (const k of ["og:description", "twitter:description"]) {
    const attr = k.startsWith("og") ? "property" : "name";
    html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${esc(p.cardDescription)}" />`, k, file);
  }
  for (const k of ["og:image", "twitter:image"]) {
    const attr = k.startsWith("og") ? "property" : "name";
    html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${p.image}" />`, k, file);
  }
  for (const k of ["og:image:width", "og:image:height"]) {
    html = setTag(html, new RegExp(`<meta property="${k}" content="[^"]*" \\/>`), `<meta property="${k}" content="${p.imageSize}" />`, k, file);
  }
  // Taken from the image's own extension, so a card that changes format cannot be
  // announced as the wrong one (the base page says image/png).
  const imageType = /\.jpe?g(\?|$)/i.test(p.image) ? "image/jpeg" : "image/png";
  html = setTag(html, /<meta property="og:image:type" content="[^"]*" \/>/, `<meta property="og:image:type" content="${imageType}" />`, "og:image:type", file);
  html = setTag(html, /<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${esc(p.title.split(" | ")[0])}" />`, "og:image:alt", file);

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: p.title,
        description: p.description,
        isPartOf: { "@id": `${ORIGIN}/#website` },
        about: p.about,
        publisher: { "@id": `${ORIGIN}/#org`, sameAs: [IG_CIRE] },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CIRE Conglomerate", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: p.title.split(" | ")[0], item: url },
        ],
      },
    ],
  };
  html = html.replace("</head>", () =>
    `  <script type="application/ld+json">\n${ldJson(ld)}\n    </script>\n  </head>`
  );

  html = html.replace(
    /<body([^>]*)>/,
    (_, attrs) => `<body${attrs}>
    <noscript>
      ${p.body}
      <p>A house of <a href="${ORIGIN}/">CIRE Conglomerate</a>: ${siblings.join(" · ")}</p>
    </noscript>`
  );

  const out = path.join(DIST, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}
console.log(`seo_pages: wrote ${PAGES.map((p) => "/" + p.path).join(", ")}`);

/* ---------- A page per product and per photo ---------- */

// Pull the CAROUSEL_PRODUCTS array literal out of the built index.html and evaluate it
// on its own, so the pages can never drift from what the app shows.
function readProducts() {
  const key = "window.CAROUSEL_PRODUCTS = [";
  const at = base.indexOf(key);
  if (at < 0) throw new Error("seo_pages: window.CAROUSEL_PRODUCTS not found in dist/index.html");
  const start = at + key.length - 1;
  let depth = 0, quote = null, end = -1;
  for (let i = start; i < base.length; i++) {
    const c = base[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "[") depth++;
    else if (c === "]" && --depth === 0) { end = i; break; }
  }
  if (end < 0) throw new Error("seo_pages: CAROUSEL_PRODUCTS has no closing ];");
  const list = require("vm").runInNewContext("(" + base.slice(start, end + 1) + ")", {});
  if (!Array.isArray(list) || !list.length) throw new Error("seo_pages: CAROUSEL_PRODUCTS is empty");
  return list;
}

const slugify = (s) =>
  String(s).toLowerCase().replace(/&/g, "and").replace(/['’.]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const BRANDS = {
  "sophisticated-brilliance": { name: "Sophisticated Brilliance", site: "https://sophisticatedbrilliance.com/", org: "https://sophisticatedbrilliance.com/#org" },
  "sophisticated-ignorance": { name: "Sophisticated Ignorance", site: "https://sophisticatedignorance.co/", org: "https://sophisticatedignorance.co/#org" },
};
const SB_PIECE = { Beast: "Pendant I", Metamorphosis: "Pendant II", Humble: "Pendant III", "The Nails": "Earrings", "Celestial Scars": "Cuban chain" };
const METALS = [
  { name: "Rose", abbrev: "RG", metal: "Rose Gold", prefix: "" },
  { name: "Yellow", abbrev: "YG", metal: "Yellow Gold", prefix: "yellow-gold" },
  { name: "White", abbrev: "WG", metal: "White Gold", prefix: "white-gold" },
];
const SI_TIERS = ["Foundations", "Fortifications", "Relics", "Dominion", "Adornments", "Crownworks"];
const SI_PIECES = ["Pawn", "Rook", "Bishop", "Knight", "Queen", "King"];
const LOWER_WORDS = new Set(["on", "n"]);

const pieceTypeOf = (name) => {
  if (!SB_PIECE[name]) throw new Error(`seo_pages: no piece type for Sophisticated Brilliance product "${name}"`);
  return SB_PIECE[name];
};
const tierOf = (imgPath) => {
  const i = SI_TIERS.indexOf(imgPath.split("/")[0]);
  if (i < 0) throw new Error(`seo_pages: no tier for ${imgPath}`);
  return { tier: SI_TIERS[i], piece: SI_PIECES[i] };
};
const siDisplayName = (name) => name.replace(/ - /g, ", ");

const titleCase = (label) =>
  label.split(" ").map((w) => (LOWER_WORDS.has(w.toLowerCase()) ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())).join(" ");

function viewLabelOf(imgPath, product) {
  let label = path.basename(imgPath).replace(/\.[^.]+$/, "").replace(/^RG /, "");
  const [baseName, colour] = product.name.split(" - ");
  const strip = [baseName, baseName.replace(/^The /i, "")];
  if (colour) strip.push(colour);
  for (const w of strip) label = label.replace(new RegExp(`(^|[^A-Za-z0-9])${escRe(w)}(?![A-Za-z0-9])`, "gi"), "$1 ");
  label = label.replace(/(^|\s)-+(?=\s|$)/g, " ").replace(/\s+/g, " ").trim();
  // A bare number ("Intersect 3" once the name is gone) says nothing about the shot.
  if (/^\d+$/.test(label)) label = `View ${label}`;
  // "on" is lowercase mid-phrase ("on Celestial Scars") but not in "Head On".
  return titleCase(label).replace(/^Head on$/, "Head On");
}

const decodeEntities = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&(nbsp|mdash|ndash|hellip|rsquo|lsquo|rdquo|ldquo|copy|reg|lt|gt|quot|apos|amp);/g, (_, n) =>
      ({ nbsp: " ", mdash: "—", ndash: "–", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", copy: "©", reg: "®", lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" })[n]);
function plainDescription(htmlText) {
  const text = decodeEntities(String(htmlText).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
  if (text.length <= 220) return text;
  const cut = text.slice(0, 220);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.\-–—]+$/, "") + "…";
}

// Real pixel size from the file's own header: WebP (VP8, VP8L, VP8X), PNG and JPEG.
function imageInfo(file) {
  const b = fs.readFileSync(file);
  const fail = () => { throw new Error(`seo_pages: cannot read the size of ${file}`); };
  if (b.length > 30 && b.toString("latin1", 0, 4) === "RIFF" && b.toString("latin1", 8, 12) === "WEBP") {
    const fourcc = b.toString("latin1", 12, 16);
    if (fourcc === "VP8 " && b[23] === 0x9d && b[24] === 0x01 && b[25] === 0x2a)
      return { type: "image/webp", width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (fourcc === "VP8L" && b[20] === 0x2f) {
      const bits = b.readUInt32LE(21);
      return { type: "image/webp", width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (fourcc === "VP8X")
      return { type: "image/webp", width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
    fail();
  }
  if (b.length > 24 && b.toString("latin1", 1, 4) === "PNG")
    return { type: "image/png", width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m))
        return { type: "image/jpeg", height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return fail();
}

const absImage = (p) => `${ORIGIN}/` + p.split("/").map(encodeURIComponent).join("/");
const buildDate = new Date().toISOString().slice(0, 10);

// Build the model: every product, every plain-image entry of it.
const products = readProducts().map((raw) => {
  const brand = BRANDS[raw.collection];
  if (!brand) throw new Error(`seo_pages: unknown collection "${raw.collection}" on ${raw.name}`);
  const sb = raw.collection === "sophisticated-brilliance";
  const paths = (raw.images || []).map((m) => (typeof m === "string" ? m : m && m.src)).filter((m) => typeof m === "string" && /\.(webp|png|jpe?g)$/i.test(m));
  const pieceType = sb ? pieceTypeOf(raw.name) : null;
  const tier = sb ? null : tierOf(paths[0]);
  const display = sb ? raw.name : siDisplayName(raw.name);
  const slug = slugify(raw.name);
  const url = `${ORIGIN}/${raw.collection}/${slug}`;
  const used = new Set();
  const read = (p) => {
    const file = path.join(DIST, p);
    if (!fs.existsSync(file)) throw new Error(`seo_pages: image file missing for ${raw.name}: ${p}`);
    return imageInfo(file);
  };
  const make = (p, view, metal, n) => {
    const alt = sb
      ? `${raw.name} ${pieceType} in ${metal.toLowerCase()}, ${view}: Transcendence of Man, the debut wearable art collection of Sophisticated Brilliance, the luxury fine-jewelry maison of CIRE Conglomerate`
      : `${display}, ${view}: ${tier.tier} (${tier.piece}) tier of Sophisticated Ignorance, the New-Vieux Riche high-fashion menswear maison of CIRE Conglomerate`;
    const caption = sb
      ? `${alt}. Luxury in its final form: fine jewelry and wearable art distinguished by the king and queen chess piece insignia. © 2026 CIRE Conglomerate.`
      : `${alt}. New-Vieux Riche luxury, from Pawn to King. Power Perfected in Position. © 2026 CIRE Conglomerate.`;
    const slugOf = METALS.find((m) => m.metal === metal);
    const imSlug = (slugOf && slugOf.prefix ? slugOf.prefix + "-" : "") + slugify(view);
    if (used.has(imSlug)) throw new Error(`seo_pages: ${raw.name} has two photos at ${imSlug}`);
    used.add(imSlug);
    return { path: p, abs: absImage(p), view, metal, alt, caption, slug: imSlug, url: `${url}/${imSlug}`, ...read(p) };
  };
  const images = paths.map((p, n) => {
    let view = viewLabelOf(p, raw) || `View ${n + 1}`;
    const baseView = view;
    for (let k = 2; used.has(slugify(view)); k++) view = `${baseView} ${k}`;
    return make(p, view, "Rose Gold", n);
  });
  if (sb) {
    // The same swap the app's metal toggle makes; a metal only appears where the file exists.
    const roseCount = images.length;
    for (const m of METALS.slice(1)) {
      for (let n = 0; n < roseCount; n++) {
        const derived = images[n].path.replace(/Rose|Yellow|White/g, m.name).replace(/RG |YG |WG /g, m.abbrev + " ");
        if (fs.existsSync(path.join(DIST, derived))) images.push(make(derived, images[n].view, m.metal, n));
      }
    }
  }
  if (!images.length) throw new Error(`seo_pages: ${raw.name} has no plain images`);
  return { raw, brand, brandPath: raw.collection, sb, pieceType, tier, display, slug, url, images, desc: plainDescription(raw.description) };
});

const productTitle = (p) =>
  p.sb ? `${p.raw.name} | ${p.pieceType} | Transcendence of Man | Sophisticated Brilliance` : `${p.display} | ${p.tier.tier} | Sophisticated Ignorance`;
const imageTitle = (p, im) =>
  p.sb
    ? `${p.raw.name} ${p.pieceType}, ${im.metal}, ${im.view} | Transcendence of Man | Sophisticated Brilliance`
    : `${p.display}, ${im.view} | ${p.tier.tier} | Sophisticated Ignorance`;

// Reuses the same tag-by-tag rewrite as the division pages. `img` is optional: the
// licensing page keeps the site's own share card.
function writePage({ file, shim, title, description, cardTitle, cardDescription, img, ld, body }) {
  const url = `${ORIGIN}/${file.replace(/\.html$/, "")}`;
  let html = base.replace(/<head>/, () => shimScript(shim));
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title.replace(/&/g, "&amp;")}</title>`, "title", file);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`, "description", file);
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical", file);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url", file);
  for (const k of ["og:title", "twitter:title"]) {
    const attr = k.startsWith("og") ? "property" : "name";
    html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${esc(cardTitle)}" />`, k, file);
  }
  for (const k of ["og:description", "twitter:description"]) {
    const attr = k.startsWith("og") ? "property" : "name";
    html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${esc(cardDescription)}" />`, k, file);
  }
  if (img) {
    for (const k of ["og:image", "twitter:image"]) {
      const attr = k.startsWith("og") ? "property" : "name";
      html = setTag(html, new RegExp(`<meta ${attr}="${k}" content="[^"]*" \\/>`), `<meta ${attr}="${k}" content="${img.abs}" />`, k, file);
    }
    html = setTag(html, /<meta property="og:image:width" content="[^"]*" \/>/, `<meta property="og:image:width" content="${img.width}" />`, "og:image:width", file);
    html = setTag(html, /<meta property="og:image:height" content="[^"]*" \/>/, `<meta property="og:image:height" content="${img.height}" />`, "og:image:height", file);
    html = setTag(html, /<meta property="og:image:type" content="[^"]*" \/>/, `<meta property="og:image:type" content="${img.type}" />`, "og:image:type", file);
    html = setTag(html, /<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${esc(img.alt)}" />`, "og:image:alt", file);
  }
  html = html.replace("</head>", () =>
    `  <script type="application/ld+json">\n${ldJson({ "@context": "https://schema.org", "@graph": ld })}\n    </script>\n  </head>`
  );
  html = html.replace(/<body([^>]*)>/, (_, attrs) => `<body${attrs}>\n    <noscript>\n      ${body}\n    </noscript>`);
  const out = path.join(DIST, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return url;
}

const ORG = { "@type": "Organization", "@id": `${ORIGIN}/#org`, name: "CIRE Conglomerate" };
const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
});
const footerLinks = (p) =>
  `<p><a href="${ORIGIN}/${p.brandPath}">${p.brand.name}</a> · <a href="${ORIGIN}/licensing">Image licensing</a> · <a href="${p.brand.site}">${p.brand.site.replace(/^https:\/\/|\/$/g, "")}</a></p>`;

const itemEntity = (p) =>
  p.sb
    ? {
        "@type": "VisualArtwork",
        "@id": `${p.url}#item`,
        name: p.raw.name,
        alternateName: `${p.raw.name}, ${p.pieceType} of the Transcendence of Man collection by Sophisticated Brilliance`,
        artform: "Fine jewelry",
        description: p.desc,
        creator: { "@id": p.brand.org },
        material: METALS.filter((m) => p.images.some((im) => im.metal === m.metal)).map((m) => m.metal.replace("Gold", "gold")),
        image: p.images.map((im) => im.abs),
      }
    : {
        "@type": "CreativeWork",
        "@id": `${p.url}#item`,
        name: p.display,
        genre: "Menswear",
        description: p.desc,
        creator: { "@id": p.brand.org },
        image: p.images.map((im) => im.abs),
      };

const urls = []; // every generated address, for the sitemap and the checks
const sitemapEntries = []; // { loc, images: [abs] }
const altMap = {};
const scope = [];

for (const p of products) {
  const pTitle = productTitle(p);
  const pFirst = pTitle.split(" | ")[0];
  const fileParam = encodeURIComponent(p.raw.name);
  const prodCrumbs = [["CIRE Conglomerate", `${ORIGIN}/`], [p.brand.name, `${ORIGIN}/${p.brandPath}`], [pFirst, p.url]];

  const prodUrl = writePage({
    file: `${p.brandPath}/${p.slug}.html`,
    shim: `/?file=${fileParam}`,
    title: pTitle,
    description: `${p.desc} Presented by CIRE Conglomerate.`,
    cardTitle: pTitle,
    cardDescription: p.images[0].alt + ".",
    img: p.images[0],
    ld: [itemEntity(p), crumbs(prodCrumbs)],
    body: `<h1>${escHtml(pFirst)}</h1>
      ${p.images.map((im) => `<a href="${im.url}"><img src="${im.abs}" alt="${esc(im.alt)}" width="${im.width}" height="${im.height}" loading="lazy"></a>`).join("\n      ")}
      <p>${escHtml(p.desc)}</p>
      ${footerLinks(p)}`,
  });
  urls.push(prodUrl);
  sitemapEntries.push({ loc: prodUrl, images: p.images.map((im) => im.abs) });

  for (const im of p.images) {
    const iTitle = imageTitle(p, im);
    const iFirst = iTitle.split(" | ")[0];
    const imageUrl = writePage({
      file: `${p.brandPath}/${p.slug}/${im.slug}.html`,
      shim: `/?file=${fileParam}&image=${encodeURIComponent(im.path)}`,
      title: iTitle,
      description: im.alt + ".",
      cardTitle: iTitle,
      cardDescription: im.alt + ".",
      img: im,
      ld: [
        {
          "@type": "ImageObject",
          "@id": `${im.url}#image`,
          contentUrl: im.abs,
          url: im.url,
          name: iFirst,
          caption: im.caption,
          description: im.caption,
          representativeOfPage: true,
          width: im.width,
          height: im.height,
          encodingFormat: im.type,
          creator: ORG,
          creditText: "CIRE Conglomerate",
          copyrightNotice: "© 2026 CIRE Conglomerate",
          copyrightHolder: ORG,
          copyrightYear: 2026,
          license: `${ORIGIN}/licensing`,
          acquireLicensePage: `${ORIGIN}/licensing`,
          about: { "@id": `${p.url}#item` },
        },
        itemEntity(p),
        crumbs([...prodCrumbs, [iFirst, im.url]]),
      ],
      body: `<h1>${escHtml(iFirst)}</h1>
      <img src="${im.abs}" alt="${esc(im.alt)}" width="${im.width}" height="${im.height}">
      <p>${escHtml(im.alt)}.</p>
      <p><a href="${p.url}">${escHtml(pFirst)}</a></p>
      <ul>${p.images.filter((o) => o !== im).map((o) => `<li><a href="${o.url}">${escHtml(o.metal ? `${o.metal}, ${o.view}` : o.view)}</a></li>`).join("")}</ul>
      ${footerLinks(p)}`,
    });
    urls.push(imageUrl);
    sitemapEntries.push({ loc: imageUrl, images: [im.abs] });
    altMap[im.path] = im.alt;
    scope.push({ path: im.path, title: iFirst, description: im.alt });
  }
}

/* ---------- Licensing ---------- */
{
  const title = "Image Licensing | CIRE Conglomerate";
  const description =
    "All imagery of Sophisticated Brilliance and Sophisticated Ignorance is © 2026 CIRE Conglomerate. Editorial and commercial licensing is available on request.";
  const url = `${ORIGIN}/licensing`;
  writePage({
    file: "licensing.html",
    shim: "/?window=popup-inquiry&topic=Image%20Licensing",
    title,
    description,
    cardTitle: title,
    cardDescription: description,
    ld: [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": `${ORIGIN}/#website` }, publisher: { "@id": `${ORIGIN}/#org` } },
      crumbs([["CIRE Conglomerate", `${ORIGIN}/`], ["Image Licensing", url]]),
    ],
    body: `<h1>Image Licensing</h1>
      <p>All product and brand imagery on cireconglomerate.com is © 2026 CIRE Conglomerate, all rights reserved. No reproduction without a licence. Editorial and commercial licences are available on request through the enquiry form (Interest: Image Licensing).</p>
      <p><a href="${ORIGIN}/">Back to CIRE Conglomerate</a></p>`,
  });
}

/* ---------- Image sitemap ---------- */
{
  const existing = fs.readFileSync(path.join(__dirname, "public/sitemap.xml"), "utf8");
  const blocks = [...existing.matchAll(/<url>[\s\S]*?<\/url>/g)].map((m) => m[0]);
  if (!blocks.length) throw new Error("seo_pages: public/sitemap.xml has no <url> entries");
  const own = (loc, images) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${buildDate}</lastmod>\n` +
    images.map((i) => `    <image:image>\n      <image:loc>${i.replace(/&/g, "&amp;")}</image:loc>\n    </image:image>\n`).join("") +
    `  </url>`;
  const all = [
    ...blocks.map((b) => "  " + b),
    own(`${ORIGIN}/licensing`, []),
    ...sitemapEntries.map((e) => own(e.loc, e.images)),
  ];
  fs.writeFileSync(
    path.join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${all.join("\n")}\n</urlset>\n`
  );
}

fs.writeFileSync(path.join(DIST, "image-alt.js"), `window.CIRE_IMAGE_ALT = ${JSON.stringify(altMap)};\n`);
fs.writeFileSync(path.join(DIST, ".image-scope.json"), JSON.stringify(scope, null, 2) + "\n");

const dupes = urls.length - new Set(urls).size;
if (dupes) throw new Error(`seo_pages: ${dupes} generated pages share a URL`);
console.log(`seo_pages: wrote ${products.length} product pages, ${scope.length} image pages, /licensing, sitemap.xml, image-alt.js`);
