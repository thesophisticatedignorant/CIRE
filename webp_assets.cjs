/* Generate a WebP twin for every PNG under public/.
   The originals stay put: the runtime swap in index.html falls back to them
   if a .webp is missing or fails to decode, so this is purely additive. */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "public");
const MAX_DIM = 1800;   // generous for a 2x tablet; nothing is shown larger
const QUALITY = 88;     // product photography - keep the fidelity up

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.png$/i.test(e.name)) out.push(p);
  }
  return out;
}

(async () => {
  const pngs = walk(ROOT);
  let done = 0, skipped = 0, failed = 0, pngBytes = 0, webpBytes = 0;

  for (const src of pngs) {
    const dst = src.replace(/\.png$/i, ".webp");
    const sStat = fs.statSync(src);
    pngBytes += sStat.size;
    if (fs.existsSync(dst) && fs.statSync(dst).mtimeMs >= sStat.mtimeMs) {
      webpBytes += fs.statSync(dst).size; skipped++; continue;
    }
    try {
      const img = sharp(src, { limitInputPixels: false });
      const meta = await img.metadata();
      const resize = (meta.width > MAX_DIM || meta.height > MAX_DIM)
        ? { width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true }
        : null;
      let pipe = img;
      if (resize) pipe = pipe.resize(resize);
      await pipe.webp({ quality: QUALITY, alphaQuality: 100, effort: 5 }).toFile(dst);
      webpBytes += fs.statSync(dst).size;
      done++;
    } catch (err) {
      failed++;
      console.error("FAILED", path.relative(ROOT, src), err.message);
    }
    if ((done + skipped) % 50 === 0) console.log(`  ...${done + skipped}/${pngs.length}`);
  }

  const mb = (b) => (b / 1048576).toFixed(1) + "MB";
  console.log(`\nconverted=${done} skipped=${skipped} failed=${failed}`);
  console.log(`PNG total ${mb(pngBytes)}  ->  WebP total ${mb(webpBytes)}  (${(100 - webpBytes / pngBytes * 100).toFixed(1)}% smaller)`);
})();
