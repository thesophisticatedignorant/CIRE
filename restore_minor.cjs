const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const seoTags = `
    <!-- Google Site Verification -->
    <meta name="google-site-verification" content="1e8bdcab3c438db1" />

    <!-- SEO Meta Tags -->
    <meta name="description" content="CIRE is an ultra-exclusive, invite-only digital luxury conglomerate. Experience the epitome of opulence through our curated collection of high-end real estate, automotive, aviation, and marine assets. Accessible only to verified connoisseurs of the Sophisticated Ignorance lifestyle." />
    <meta name="keywords" content="CIRE, CIRE Conglomerate, luxury, exclusive, invite-only, real estate, automotive, aviation, marine, Sophisticated Ignorance" />
    <meta name="author" content="CIRE Conglomerate" />

    <!-- Open Graph Meta Tags (for social sharing & AI overview) -->
    <meta property="og:title" content="CIRE | The Pinnacle of Exclusive Digital Luxury" />
    <meta property="og:description" content="CIRE is an ultra-exclusive, invite-only digital luxury conglomerate. Experience the epitome of opulence through our curated collection." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://cireconglomerate.com" />
    <meta property="og:image" content="https://cireconglomerate.com/blackscale%20CIRE%20logo.png" />
    <meta property="og:site_name" content="CIRE Conglomerate" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="CIRE | The Pinnacle of Exclusive Digital Luxury" />
    <meta name="twitter:description" content="CIRE is an ultra-exclusive, invite-only digital luxury conglomerate. Experience the epitome of opulence through our curated collection." />
    <meta name="twitter:image" content="https://cireconglomerate.com/blackscale%20CIRE%20logo.png" />

    <!-- Structured Data (JSON-LD) for Google Search and AI Overview -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CIRE Conglomerate",
      "url": "https://cireconglomerate.com",
      "logo": "https://cireconglomerate.com/blackscale%20CIRE%20logo.png",
      "description": "An ultra-exclusive, invite-only digital luxury conglomerate encompassing real estate, automotive, aviation, and marine assets.",
      "sameAs": [
        "https://www.instagram.com/thesophisticatedignorant"
      ]
    }
    </script>
`;

if (!html.includes('google-site-verification')) {
    html = html.replace(/<title>CIRE Conglomerate \| The Pinnacle of Luxury<\/title>/, '<title>CIRE Conglomerate | The Pinnacle of Luxury</title>\n' + seoTags);
}

fs.writeFileSync('index.html', html);
