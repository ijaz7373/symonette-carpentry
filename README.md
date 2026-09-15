# Symonette Carpentry — Website

A from-scratch, performance-first redesign of symonettecarpentry.org. Static HTML/CSS + a small self-hosted TypeScript bundle — no framework, no runtime dependencies, no third-party requests (fonts, images, and icons are all self-hosted).

## What's here

- **Pages** (everything except the service-area pages, per request): Home, Gallery, Contact, Reviews, Privacy Policy, Terms, and 6 individual service pages (Kitchen, Bathroom, Door, Flooring, Fence, Shed Carpentry). The live site also had 6 empty placeholder service pages (`service-7` … `service-12`) — those were never built out on the original site and were intentionally not recreated.
- **Business facts** (name, phone, address, hours, service list, service areas) were pulled from the live site.
- **Descriptive copy** (the "What is X / When is it necessary / What's required" sections and all FAQs) was written from scratch — the source site's service pages only had Lorem Ipsum placeholder text there.
- **Images**: all photos are the real ones downloaded from the current site — the founder photo, the 6 service category photos, and 11 real completed-project photos are all original assets, converted to WebP and resized. One supplemental Unsplash photo was added for the Flooring page/gallery category, since the source site had no project photo for that category. Originals are kept untouched in `assets/images/original/` for reference.
- **Testimonials are placeholder content.** The live site's testimonial widget loads reviews dynamically from a third-party app and had no actual review text to copy — replace the entries in `src/build/data.js` (`testimonials` array) with real Google/Facebook reviews before launch.
- **Social links** (Facebook/Instagram icons in the header/footer) point to `#` — drop in the real profile URLs in `src/build/data.js` (`business.social`).

## Project structure

```
src/ts/main.ts          → all client-side interactivity (nav, accordion, gallery/lightbox, testimonial carousel, form handling)
src/build/               → the static site generator (plain Node, not shipped to the browser)
  data.js                → business facts, services, FAQs, testimonials
  gallery-data.js        → gallery photo list + categories
  icons.js               → inline SVG icon set
  components.js          → shared header/footer/section builders
  pages/*.js             → one file per page
  generate.js            → writes the final .html files to the project root
assets/
  css/style.css          → single stylesheet, no external CSS
  fonts/                 → self-hosted Inter + Poppins (woff2, latin subset only)
  images/                → optimized WebP images (brand, services, gallery)
  js/main.js             → compiled output of src/ts/main.ts (generated, don't hand-edit)
index.html, gallery.html, contact.html, reviews.html,
privacy-policy.html, terms.html, services/*.html   → generated output (don't hand-edit directly — edit the source in src/build/ and rebuild)
```

## Building

```bash
npm install       # once, installs the TypeScript compiler
npm run build     # compiles src/ts → assets/js, then regenerates every .html page
npm run serve     # serves the project root at http://localhost:5173 for local preview
```

Never hand-edit the generated `.html` files or `assets/js/main.js` — edit the source under `src/` and re-run `npm run build`. `npm run build:ts` alone recompiles TypeScript only; `npm run build:html` alone regenerates the HTML only.

## Deployment & the contact/review forms

The contact form and the "Leave Us A Review" form use `data-netlify="true"` markup, which means **if you deploy to Netlify, both forms work immediately with zero backend** — submissions land in your Netlify dashboard and can be forwarded to email. If you deploy elsewhere (Vercel, S3, your own server, etc.), you'll need to either point the form's `action` at your own endpoint (e.g. Formspree, a serverless function) or remove the `data-netlify` attribute and wire up your own handler in `src/build/components.js`. The JS in `main.ts` already does progressive-enhancement AJAX submission with a fallback to plain form POST, so it degrades gracefully either way.

## Performance choices

- No CSS/JS framework; one ~32KB stylesheet, one ~12KB JS bundle, both loaded with no render-blocking third-party requests.
- Fonts (Inter + Poppins) are self-hosted, latin-subset only, `font-display: swap`.
- All images are WebP, sized to their actual display dimensions, with `loading="lazy"` below the fold.
- No icon font or icon library — icons are inline SVG.
- No external map/embed iframes on the Contact page (a lightweight "Get Directions" link is used instead).
