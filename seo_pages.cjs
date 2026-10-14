/* Post-build: give each division its own address, so Google can list it as a sub-link
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

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

function setTag(html, re, replacement, label, file) {
  if (!re.test(html)) throw new Error(`seo_pages: ${label} not found while building ${file}`);
  return html.replace(re, replacement);
}

const base = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const siblings = PAGES.map((p) => {
  const name = p.title.split(" | ")[0];
  return `<a href="${ORIGIN}/${p.path}">${name}</a>`;
});

for (const p of PAGES) {
  const url = `${ORIGIN}/${p.path}`;
  const file = `${p.path}.html`;
  let html = base;

  html = html.replace(
    /<head>/,
    `<head>
    <script>
      /* Open this division's folder. Swaps the address to the /?folder= deep link before
         anything else parses (see seo_pages.cjs); a link that already carries its own
         query string is left alone. */
      if (!location.search) history.replaceState(null, "", "/?folder=${p.folder}" + location.hash);
    </script>`
  );
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
  html = html.replace(
    "</head>",
    `  <script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n    </script>\n  </head>`
  );

  html = html.replace(
    /<body([^>]*)>/,
    `<body$1>
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
