# AgriBridge — Agricultural Commodity Trading & Supply Website

A clean, modern, ultra-fast loading landing website for **AgriBridge**, connecting verified agricultural producers and established supply origins with import markets worldwide.

## Features
- **Pages**:
  - `index.html`: Home page featuring hero presentation, active commodity portfolio, 3 core pillars (Grains, Pulses, Oilseeds), global trade corridor map, and trust proofs.
  - `about.html`: About page detailing the direct sourcing model, verified partner guarantee, GAFTA/FOSFA inspection pipeline, and market segments served.
  - `contact.html`: Comprehensive Request for Quotation (RFQ) form with commodity selector, volume, Incoterms, destination port, plus trading desk contact points and trading FAQs.
- **Design & Performance**:
  - Pure modern semantic HTML5 and CSS3 custom properties (CSS variables).
  - Atmospheric background with subtle organic gradients and glowing grain tones.
  - Zero heavy JavaScript frameworks (< 5KB lightweight ES script for mobile drawer navigation and client-side RFQ validation).
  - Preconnected, high-performance web typography (`Outfit` and `Plus Jakarta Sans`).
  - Fully responsive across mobile, tablet, and widescreen desktop displays.

## Local Preview
You can preview the site immediately using any static web server:

```bash
# Using Python
python3 -m http.server 8080

# Or using npx serve
npx serve .
```
Then open `http://localhost:8080` in your browser.

## Deployment
Because the site is pure static HTML/CSS/JS, it can be deployed with zero configuration to:
- **Vercel** (`npx vercel`)
- **Netlify** (`npx netlify deploy`)
- **Cloudflare Pages** / **GitHub Pages**
- Any standard Apache/Nginx web server or S3 bucket.
