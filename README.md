# AgriBridge — Agricultural Commodity Trading & Supply Website

A clean, modern, ultra-fast loading landing website for **AgriBridge**, connecting verified agricultural producers and established supply origins with import markets worldwide.

## Features
- **Pages**:
  - `index.html`: Home page featuring hero presentation, active commodity portfolio, 3 core pillars (Grains, Pulses, Oilseeds), global trade corridor map, and trust proofs.
  - `about.html`: About page detailing the direct sourcing model, verified partner guarantee, GAFTA/FOSFA inspection pipeline, and market segments served.
  - `contact.html`: Comprehensive Request for Quotation (RFQ) form with commodity selector, volume, Incoterms, destination port, plus trading desk contact points and trading FAQs.
- **Design & Performance**:
  - Color palette directly borrowed from the official AgriBridge logo (Burgundy `#700000`, Wheat Amber `#d99b38`, and Rich Charcoal `#18191a`).
  - Pure vector SVG logo integration across headers, footers, and favicon.
  - Atmospheric background with subtle organic gradients and glowing grain tones.
  - Ultra-lightweight interaction script (< 5KB ES module for mobile drawer navigation and client-side RFQ validation).
  - Preconnected, high-performance web typography (`Outfit` and `Plus Jakarta Sans`).
  - Fully responsive across mobile, tablet, and widescreen desktop displays.

## Local Preview
Preview the site immediately using the preview script:

```bash
# Build & preview production dist
npm run build
npm run preview

# Or standard dev preview
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

## Cloudflare Pages Deployment

This repository is optimized for **Cloudflare Pages**. When connecting this repository in Cloudflare:

| Setting | Value |
| :--- | :--- |
| **Framework preset** | None / Static HTML |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

### Cloudflare Optimizations Included:
- **`_headers`**: Automatic HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`) and long-lived immutable caching for `/assets/*`, `/css/*`, and `/js/*`.
- **`_redirects`**: Clean URL rewrites (`/about` &rarr; `/about.html`, `/contact` &rarr; `/contact.html`).
