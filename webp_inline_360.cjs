/* Re-encode the base64 images embedded in the 360 viewers as WebP.
   Each viewer inlines its frames as data: URIs, so they never went through the
   public/ WebP pass - three of them are loaded twice by the carousel, which is
   where the bulk of the page weight was hiding. Same pixels, WebP bytes. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const RE = /data:image\/png;base64,([A-Za-z0-9+/=]+)/g;
const QUALITY = 88;

(async () => {
  const files = process.argv.slice(2);
  for (const file of files) {
    const before = fs.statSync(file).size;
    let html = fs.readFileSync(file, "utf8");

    const matches = [...html.matchAll(RE)];
    if (!matches.length) { console.log(`skip (no png payloads): ${file}`); continue; }

    const replacements = [];
    for (const m of matches) {
      const webp = await sharp(Buffer.from(m[1], "base64"), { limitInputPixels: false })
        .webp({ quality: QUALITY, alphaQuality: 100, effort: 5 })
        .toBuffer();
      replacements.push([m[0], "data:image/webp;base64," + webp.toString("base64")]);
    }
    for (const [from, to] of replacements) html = html.replace(from, to);

    fs.writeFileSync(file, html);
    const after = fs.statSync(file).size;
    const mb = (b) => (b / 1048576).toFixed(1);
    console.log(
      `${path.basename(file)}: ${mb(before)}MB -> ${mb(after)}MB ` +
      `(${(100 - after / before * 100).toFixed(0)}% smaller, ${matches.length} frames)`,
    );
  }
})().catch((e) => { console.error(e); process.exit(1); });
