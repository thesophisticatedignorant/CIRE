/* Pad product imagery onto a common 4:5 canvas.
   Colorways of the same garment were shot at different aspect ratios (the
   Cornerstone alone had three), and `object-fit: contain` preserves aspect —
   so cycling colorways resized and repositioned the garment. No CSS can fix
   that; the canvases have to agree.

   Padding is transparent and centred, so nothing is cropped and nothing is
   rescaled: each garment keeps its own pixels, just on a consistent frame.
   Both the .png source and its .webp twin are rewritten, so re-running
   `npm run assets:webp` stays consistent.

   Idempotent — an image already at the target ratio is left alone. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOTS = ["public/Foundations", "public/Fortifications", "public/Relics"];
const TARGET = 4 / 5;      // width / height
const TOLERANCE = 0.005;
const QUALITY = 88;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.png$/i.test(e.name)) out.push(p);
  }
  return out;
}

(async () => {
  const dryRun = process.argv.includes("--dry-run");
  const files = ROOTS.flatMap((r) => walk(r));
  let padded = 0, already = 0;

  for (const png of files) {
    const meta = await sharp(png).metadata();
    const ratio = meta.width / meta.height;
    if (Math.abs(ratio - TARGET) < TOLERANCE) { already++; continue; }

    // Grow the short side only; never scale or crop the original pixels.
    let w = meta.width, h = meta.height;
    if (ratio > TARGET) h = Math.round(w / TARGET);   // too wide -> add height
    else w = Math.round(h * TARGET);                  // too tall -> add width

    console.log(
      `${dryRun ? "[dry-run] " : ""}${path.relative("public", png)}  ` +
      `${meta.width}x${meta.height} (${ratio.toFixed(3)}) -> ${w}x${h} (${TARGET.toFixed(3)})`,
    );
    if (dryRun) { padded++; continue; }

    const canvas = {
      width: w, height: h, fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    };
    const buf = await sharp(png, { limitInputPixels: false })
      .resize(canvas).png().toBuffer();
    fs.writeFileSync(png, buf);

    await sharp(buf, { limitInputPixels: false })
      .webp({ quality: QUALITY, alphaQuality: 100, effort: 5 })
      .toFile(png.replace(/\.png$/i, ".webp"));

    padded++;
  }

  console.log(`\n${dryRun ? "would pad" : "padded"}: ${padded}   already 4:5: ${already}`);
})().catch((e) => { console.error(e); process.exit(1); });
