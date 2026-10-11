/* Scale and centre the subject itself, not just the canvas it sits on.

   normalize_aspect makes every canvas agree. That is not enough: the renders
   were produced at inconsistent camera scales, so the piece inside the canvas
   still changed size between metal treatments and between slides. Measured on
   the delivered set, Metamorphosis Front was 88.6% of frame height in rose and
   white but 76.9% in yellow - the same object, a ninth smaller - and the five
   Beast slides ranged from 82% to 99%.

   No CSS reaches inside an image, so the pixels have to be corrected.

   For each frame: find the subject's bounding box, scale it so that box fits a
   fixed share of the canvas, and composite it centred. Tall subjects end up
   limited by height and wide ones by width, so each occupies the same frame
   while keeping its own proportions - nothing is stretched or cropped.

   Detection is a luminance threshold against the black backdrop. It is stable:
   between thresholds of 4 and 40 the measured box moves about six pixels in
   1265, so the exact value is not delicate.

   Idempotent - a frame already at the target is left alone. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOTS = [
  "public/Beast Studio Photography",
  "public/Celestial Scars Studio Photography",
  "public/Humble Studio Photography",
  "public/Metamorphosis Studio Photography",
  "public/The Nails Studio Photography",
];
const CANVAS = 1402;     // square, matching the normalised aspect
const TARGET = 0.88;     // share of the canvas the subject's box may occupy
const THRESHOLD = 12;    // luminance above the backdrop
const TOLERANCE = 0.004; // leave a frame alone if it is already this close

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.png$/i.test(e.name)) out.push(p);
  }
  return out;
}

async function subjectBox(file) {
  const { data, info } = await sharp(file)
    .flatten({ background: "#000" })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * c;
      if ((data[o] + data[o + 1] + data[o + 2]) / 3 > THRESHOLD) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return null; // nothing above the backdrop
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

(async () => {
  const dryRun = process.argv.includes("--dry-run");
  const files = ROOTS.flatMap((r) => walk(r));
  let changed = 0, already = 0, skipped = 0;

  for (const png of files) {
    const box = await subjectBox(png);
    if (!box) { skipped++; continue; }

    const scale = Math.min((TARGET * CANVAS) / box.width, (TARGET * CANVAS) / box.height);
    const nw = Math.max(1, Math.round(box.width * scale));
    const nh = Math.max(1, Math.round(box.height * scale));

    const meta = await sharp(png).metadata();
    const occupied = Math.max(box.width / meta.width, box.height / meta.height);
    const centred =
      Math.abs((box.left + box.width / 2) / meta.width - 0.5) < TOLERANCE &&
      Math.abs((box.top + box.height / 2) / meta.height - 0.5) < TOLERANCE;
    if (Math.abs(occupied - TARGET) < TOLERANCE && centred && meta.width === CANVAS) {
      already++;
      continue;
    }

    console.log(
      `${dryRun ? "[dry-run] " : ""}${path.relative("public", png)}  ` +
      `box ${box.width}x${box.height} (${(occupied * 100).toFixed(1)}% of frame) -> ${nw}x${nh} (${(TARGET * 100).toFixed(0)}%)`,
    );

    if (!dryRun) {
      const subject = await sharp(png)
        .extract(box)
        .resize(nw, nh, { fit: "fill", kernel: "lanczos3" })
        .png()
        .toBuffer();

      const out = await sharp({
        create: { width: CANVAS, height: CANVAS, channels: 4,
                  background: { r: 0, g: 0, b: 0, alpha: 0 } },
      })
        .composite([{ input: subject, gravity: "centre" }])
        .png()
        .toBuffer();

      fs.writeFileSync(png, out);
      // Keep the WebP twin in step so assets:webp stays consistent.
      const webp = png.replace(/\.png$/i, ".webp");
      await sharp(out).webp({ quality: 88 }).toFile(webp);
    }
    changed++;
  }

  console.log(`\n${dryRun ? "would normalise" : "normalised"}: ${changed}   already on target: ${already}   no subject found: ${skipped}`);
})();
