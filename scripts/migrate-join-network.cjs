#!/usr/bin/env node
/**
 * One-off migration: move contact details out of join_network documents.
 *
 * Documents written before the public/private split carry `email`, `ig` and
 * `locationData` on the document itself. The map needs to read these documents,
 * and Firestore rules cannot hide individual fields — so those fields have to
 * move to join_network/{id}/private/contact, which no rule grants read access
 * to, before reads can safely be reopened.
 *
 * For each document that still has them, this:
 *   1. writes email / ig / locationData into the private subcollection
 *      (merging, so re-running is harmless), then
 *   2. deletes those three fields from the parent document.
 *
 * The node fields the map actually plots — name, colour, lat/lon, city,
 * country — are left exactly as they are.
 *
 * USAGE
 *   node scripts/migrate-join-network.cjs --dry-run   # report only, no writes
 *   node scripts/migrate-join-network.cjs             # apply
 *
 * Needs a service account key. Either:
 *   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
 * or pass it:
 *   node scripts/migrate-join-network.cjs --key /path/to/key.json
 *
 * The same key the inquiry notifier uses works here — see notifications/README.md.
 * Service accounts bypass security rules, so this runs fine while reads are closed.
 */

const path = require('path');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const keyFlag = args.indexOf('--key');
const KEY_PATH = keyFlag !== -1 ? args[keyFlag + 1] : process.env.GOOGLE_APPLICATION_CREDENTIALS;

const PROJECT_ID = 'cire-conglomerate';
const COLLECTION = 'join_network';
const PRIVATE_FIELDS = ['email', 'ig', 'instagram', 'locationData'];

if (!KEY_PATH) {
  console.error(
    'No service account key.\n' +
    '  node scripts/migrate-join-network.cjs --key /path/to/key.json\n' +
    'or set GOOGLE_APPLICATION_CREDENTIALS.',
  );
  process.exit(1);
}

let admin;
try {
  admin = require('firebase-admin');
} catch (e) {
  console.error('firebase-admin is not installed. Run:\n  npm i -D firebase-admin');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(require(path.resolve(KEY_PATH))),
  projectId: PROJECT_ID,
});

const db = admin.firestore();
const { FieldValue } = admin.firestore;

(async () => {
  const snap = await db.collection(COLLECTION).get();
  console.log(`${snap.size} document(s) in ${COLLECTION}`);

  let migrated = 0;
  let clean = 0;

  for (const doc of snap.docs) {
    const data = doc.data();
    const present = PRIVATE_FIELDS.filter((f) => data[f] !== undefined);

    if (!present.length) {
      clean++;
      continue;
    }

    console.log(
      `${DRY_RUN ? '[dry-run] ' : ''}${doc.id}  moving: ${present.join(', ')}`,
    );

    if (!DRY_RUN) {
      const contact = {};
      present.forEach((f) => {
        // Normalise the two spellings the form has used for the handle.
        contact[f === 'ig' ? 'instagram' : f] = data[f];
      });
      contact.migratedAt = FieldValue.serverTimestamp();

      // Write the private copy FIRST, so a crash between the two steps leaves
      // the data duplicated rather than lost.
      await doc.ref.collection('private').doc('contact').set(contact, { merge: true });

      const strip = {};
      present.forEach((f) => { strip[f] = FieldValue.delete(); });
      await doc.ref.update(strip);
    }

    migrated++;
  }

  console.log(
    `\n${DRY_RUN ? 'Would migrate' : 'Migrated'}: ${migrated}   already clean: ${clean}`,
  );

  if (!DRY_RUN && migrated) {
    console.log(
      '\nNext: set `allow read: if true;` on join_network in firestore.rules\n' +
      'and redeploy to restore the map pins:\n' +
      '  npx -y firebase-tools deploy --only firestore:rules',
    );
  }
  process.exit(0);
})().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
