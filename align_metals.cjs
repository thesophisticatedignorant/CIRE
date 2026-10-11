/* Make the metal treatments of a shot land identically.

   The renders were delivered at inconsistent camera scales - yellow
   Metamorphosis Front came in a ninth smaller than rose and white, white Beast
   Front two percent smaller than rose and yellow. Measuring the subject by
   luminance cannot settle this, because the three metals are genuinely
   different brightnesses and any fixed threshold measures a different thing in
   each. Edges do not care about colour, so alignment is done on an edge map by
   correlation against the rose frame.

   Validated against a known-good pair: white and rose of Humble on Celestial
   Scars align at scale 1.000, correlation 0.977.

   Coarse-to-fine: three refinement passes rather than a dense grid.
   Rose is the reference and is never resampled. */
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
const N = 240;            // edge-map resolution for the correlation search
const NB = 760;           // and a finer one for measuring boxes, so the scale
                          // is not quantised by a coarse grid (1px of 240 is
                          // 0.4%, which left a visible 1.3% residual)
const MIN_CORR = 0.28;    // below this the frames are too unalike to trust
const SNAP = 0.004;       // treat as already aligned

async function emap(file, size = N) {
  const { data } = await sharp(file).flatten({ background: "#000" }).greyscale()
    .convolve({ width: 3, height: 3, kernel: [-1,-1,-1,-1,8,-1,-1,-1,-1] })
    .resize(size, size, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  return Float64Array.from(data);
}
function norm(a) {
  let m = 0; for (const v of a) m += v; m /= a.length;
  const b = Float64Array.from(a, (v) => v - m);
  let ss = 0; for (const v of b) ss += v * v;
  const s = Math.sqrt(ss) || 1;
  for (let i = 0; i < b.length; i++) b[i] /= s;
  return b;
}
function warp(src, s, dx, dy) {
  const out = new Float64Array(N * N), c = (N - 1) / 2;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const sx = (x - c - dx) / s + c, sy = (y - c - dy) / s + c;
    const x0 = Math.floor(sx), y0 = Math.floor(sy);
    if (x0 < 0 || y0 < 0 || x0 + 1 >= N || y0 + 1 >= N) continue;
    const fx = sx - x0, fy = sy - y0;
    out[y * N + x] =
      src[y0*N+x0]*(1-fx)*(1-fy) + src[y0*N+x0+1]*fx*(1-fy) +
      src[(y0+1)*N+x0]*(1-fx)*fy + src[(y0+1)*N+x0+1]*fx*fy;
  }
  return out;
}
function dot(a, b) { let t = 0; for (let i = 0; i < a.length; i++) t += a[i] * b[i]; return t; }

/* Bounding box of the strongest edges. Reliable when the frame is the piece
   alone on black; confounded when a velvet bust form is in shot, because how
   much of it reads above the noise depends on what the metal reflects. */
function edgeBox(a, frac = 0.004, size = N) {
  const sorted = Float64Array.from(a).sort();
  const thr = sorted[Math.floor(sorted.length * (1 - frac))] || 1;
  const N = size;
  let minX = N, minY = N, maxX = -1, maxY = -1;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    if (a[y * N + x] >= thr) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
  return { w: maxX - minX + 1, h: maxY - minY + 1, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
}

function search(ref, odd) {
  let best = { s: 1, dx: 0, dy: 0, c: dot(ref, norm(warp(odd, 1, 0, 0))) };
  let sStep = 0.05, pStep = 8, sSpan = 0.40, pSpan = 24;
  for (let pass = 0; pass < 4; pass++) {
    const c0 = best;
    for (let s = c0.s - sSpan; s <= c0.s + sSpan + 1e-9; s += sStep) {
      if (s < 0.5 || s > 2) continue;
      for (let dx = c0.dx - pSpan; dx <= c0.dx + pSpan; dx += pStep)
        for (let dy = c0.dy - pSpan; dy <= c0.dy + pSpan; dy += pStep) {
          const c = dot(ref, norm(warp(odd, s, dx, dy)));
          if (c > best.c) best = { s, dx, dy, c };
        }
    }
    sSpan = sStep; pSpan = pStep; sStep /= 4; pStep = Math.max(1, pStep / 4);
  }
  return best;
}

(async () => {
  const dryRun = process.argv.includes("--dry-run");
  let fixed = 0, aligned = 0, unsure = [];

  for (const root of ROOTS) {
    const rose = path.join(root, "Rose");
    if (!fs.existsSync(rose)) continue;
    for (const f of fs.readdirSync(rose).filter((x) => /\.png$/i.test(x))) {
      const desc = f.replace(/^RG /, "").replace(/\.png$/i, "");
      const refRaw = await emap(path.join(rose, f));
      const ref = norm(refRaw);

      for (const [dir, pre] of [["White", "WG"], ["Yellow", "YG"]]) {
        const file = path.join(root, dir, `${pre} ${desc}.png`);
        if (!fs.existsSync(file)) continue;
        const oddRaw = await emap(file);

        /* Two independent measures, each trusted only where it is sound.
           If the bounding boxes scale by the same factor in both axes they are
           bounding the same object, and the ratio is the answer directly.
           Where they disagree - a bust form in shot - fall back to correlating
           the edge maps, which does not care what the box contains. */
        // Boxes measured on the fine grid, then expressed in the coarse one
        // so the shift maths below stays in a single coordinate system.
        const k2 = N / NB;
        const rbF = edgeBox(await emap(path.join(rose, f), NB), 0.004, NB);
        const obF = edgeBox(await emap(file, NB), 0.004, NB);
        const rb = { w: rbF.w * k2, h: rbF.h * k2, cx: rbF.cx * k2, cy: rbF.cy * k2 };
        const ob = { w: obF.w * k2, h: obF.h * k2, cx: obF.cx * k2, cy: obF.cy * k2 };
        const wR = ob.w / rb.w, hR = ob.h / rb.h;
        const axesAgree = Math.abs(wR - hR) / ((wR + hR) / 2) < 0.03;

        /* When the axes disagree it is usually because something spans the
           frame in one direction - the velvet bust fills the height of the
           on-chain shots whatever the jewellery does, pinning that ratio at
           ~1.00 while the other carries the real difference. An axis pinned
           at unity while the other moves is not evidence of agreement; it is
           evidence that axis is saturated. Trust the axis that moved. */
        // 4%, not 1%: how much of the bust reads above the noise shifts a
        // little with the metal, so a saturated axis lands near unity rather
        // than exactly on it (1.021 for yellow Humble on Celestial Scars).
        const pinnedW = Math.abs(wR - 1) < 0.04, pinnedH = Math.abs(hR - 1) < 0.04;
        const oneAxisPinned = !axesAgree && (pinnedW !== pinnedH);

        let best;
        if (axesAgree || oneAxisPinned) {
          /* Some renders differ slightly in aspect as well as scale - yellow
             Metamorphosis Front is 0.4930 against rose's 0.4866 - so no single
             factor can match both axes, and averaging them splits the error
             across both. Match the dominant dimension exactly instead: that is
             the extent the eye tracks when the metal is toggled, and the
             residual lands on the short side where it is least visible. */
          const s2 = oneAxisPinned
            ? 1 / (pinnedH ? wR : hR)          // the axis that actually moved
            : (rb.h >= rb.w ? 1 / hR : 1 / wR); // otherwise the dominant one
          /* The scaled frame is composited centred, so the subject centre
             lands at c + (ob - c) * s. Solve the residual shift from there,
             not from the origin. */
          const c = (N - 1) / 2;
          best = {
            s: s2,
            dx: rb.cx - (c + (ob.cx - c) * s2),
            dy: rb.cy - (c + (ob.cy - c) * s2),
            c: 1, how: "box",
          };
        } else {
          best = { ...search(ref, oddRaw), how: "corr" };
        }
        const label = `${path.basename(root).replace(" Studio Photography", "")}/${pre} ${desc}`;

        if (best.how === "corr" && best.c < MIN_CORR) { unsure.push(`${label}  corr ${best.c.toFixed(2)}`); continue; }
        const shiftPx = Math.hypot(best.dx, best.dy);
        if (Math.abs(best.s - 1) < SNAP && shiftPx < 1) { aligned++; continue; }

        console.log(`${dryRun ? "[dry-run] " : ""}${label}  scale ${best.s.toFixed(3)}  shift (${best.dx.toFixed(1)}, ${best.dy.toFixed(1)})/240  via ${best.how}${best.how === "corr" ? " " + best.c.toFixed(2) : ""}`);

        if (!dryRun) {
          const m = await sharp(file).metadata();
          const k = m.width / N;
          const nw = Math.round(m.width * best.s), nh = Math.round(m.height * best.s);
          const scaled = await sharp(file).resize(nw, nh, { kernel: "lanczos3" }).png().toBuffer();
          // place so the content moves by the solved shift, canvas unchanged
          let left = Math.round((m.width - nw) / 2 + best.dx * k);
          let top = Math.round((m.height - nh) / 2 + best.dy * k);

          /* Scaling up makes the frame larger than the canvas, so take only
             the part that lands on it rather than asking sharp to composite
             something oversized. */
          let sx = 0, sy = 0, cw = nw, ch = nh;
          if (left < 0) { sx = -left; cw += left; left = 0; }
          if (top < 0) { sy = -top; ch += top; top = 0; }
          if (left + cw > m.width) cw = m.width - left;
          if (top + ch > m.height) ch = m.height - top;

          const piece = (sx || sy || cw !== nw || ch !== nh)
            ? await sharp(scaled).extract({ left: sx, top: sy, width: cw, height: ch }).png().toBuffer()
            : scaled;

          const out = await sharp({ create: { width: m.width, height: m.height, channels: 4,
                                              background: { r: 0, g: 0, b: 0, alpha: 0 } } })
            .composite([{ input: piece, left, top }]).png().toBuffer();
          fs.writeFileSync(file, out);
          await sharp(out).webp({ quality: 88 }).toFile(file.replace(/\.png$/i, ".webp"));
        }
        fixed++;
      }
    }
  }
  console.log(`\n${dryRun ? "would realign" : "realigned"}: ${fixed}   already aligned: ${aligned}   too dissimilar to judge: ${unsure.length}`);
  unsure.forEach((u) => console.log("   " + u));
})();
