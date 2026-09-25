/* Generate carousel-sized thumbnails.

   The carousels render each item at 130x136 on a phone and 200x210 on desktop,
   but were being handed the full-resolution product images (~1200x1450). A
   decoded bitmap costs width * height * 4 bytes regardless of how small it is
   drawn, so 266 carousel images came to roughly 1GB of bitmap - far past what
   mobile Safari allows a tab, which is why the page appeared to "refresh"
   itself mid-cycle. It was being discarded and reloaded.

   300px wide is ~2.3x the phone's 130px slot and 1.5x desktop's 200px, which
   is plenty for a moving marquee, and drops the bitmap cost by ~90%.
   The gallery modal still loads the full-resolution original. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "public");
const WIDTH = 300;
const QUALITY = 82;
const SUFFIX = "-thumb.webp";

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.webp$/i.test(e.name) && !e.name.endsWith(SUFFIX)) out.push(p);
  }
  return out;
}

(async () => {
  const files = walk(ROOT);
  let made = 0, skipped = 0, srcBytes = 0, thumbBytes = 0;

  for (const src of files) {
    const dst = src.replace(/\.webp$/i, SUFFIX);
    const sStat = fs.statSync(src);
    srcBytes += sStat.size;

    if (fs.existsSync(dst) && fs.statSync(dst).mtimeMs >= sStat.mtimeMs) {
      thumbBytes += fs.statSync(dst).size; skipped++; continue;
    }
    await sharp(src, { limitInputPixels: false })
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, alphaQuality: 100, effort: 5 })
      .toFile(dst);
    thumbBytes += fs.statSync(dst).size;
    made++;
  }

  const mb = (b) => (b / 1048576).toFixed(1) + "MB";
  console.log(`thumbs created=${made} reused=${skipped}`);
  console.log(`originals ${mb(srcBytes)} -> thumbs ${mb(thumbBytes)}`);
})();
