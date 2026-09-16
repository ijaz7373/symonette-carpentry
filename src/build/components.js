const { business, services, processSteps, testimonials } = require("./data");
const { icon } = require("./icons");
const { url } = require("./url");

const YEAR = new Date().getFullYear();

function head({ title, description, path, ogImage }, base = "") {
  const canonical = `https://symonettecarpentry.org${path}`;
  const u = (p) => url(base, p);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />
<link rel="icon" type="image/png" sizes="32x32" href="${u("/assets/images/brand/favicon-32.png")}" />
<link rel="icon" type="image/png" sizes="16x16" href="${u("/assets/images/brand/favicon-16.png")}" />
<link rel="apple-touch-icon" href="${u("/assets/images/brand/logo-192.png")}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="https://symonettecarpentry.org${ogImage || "/assets/images/brand/logo-512.png"}" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preload" href="${u("/assets/fonts/poppins-700.woff2")}" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="${u("/assets/fonts/inter-400.woff2")}" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="${u("/assets/css/style.css")}" />
<script type="application/ld+json">${JSON.stringify(localBusinessSchema())}</script>
</head>
`;
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: "Hallandale Beach",
      addressRegion: "FL",
      postalCode: "33009",
      addressCountry: "US",
    },
    areaServed: business.serviceAreas,
    openingHoursSpecification: business.hours
      .filter(([, hrs]) => hrs !== "Closed")
      .map(([day]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: "09:00",
        closes: "17:00",
      })),
  };
}

function header(activePath, base = "") {
  const u = (p) => url(base, p);
  const isActive = (p) => (activePath === p ? " active" : "");
  const serviceLinks = services
    .map((s) => `<a href="${u(`/services/${s.slug}.html`)}">${s.name}</a>`)
    .join("");

  return `<a class="skip-link" href="#main">Skip to main content</a>
<div class="topbar">
  <div class="container">
    <div class="topbar-contact">
      <a href="${business.phoneHref}">${icon("phone")} ${business.phone}</a>
      <a href="${business.emailHref}">${icon("mail")} ${business.email}</a>
    </div>
    <div class="topbar-social">
      <a href="${business.social.facebook}" aria-label="Facebook">${icon("facebook")}</a>
      <a href="${business.social.instagram}" aria-label="Instagram">${icon("instagram")}</a>
    </div>
  </div>
</div>
<header class="site-header" id="site-header">
  <div class="container header-bar">
    <a href="${u("/index.html")}" class="brand">
      <img src="${u("/assets/images/brand/logo.webp")}" alt="${business.name} logo" width="42" height="42" />
      <span class="brand-name">${business.name}<span>Est. Craftsmanship</span></span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="siteNav" aria-label="Toggle navigation menu">
      <span></span><span></span><span></span>
    </button>
    <nav id="siteNav" class="site-nav" aria-label="Primary">
      <ul class="nav-list">
        <li><a class="nav-link${isActive("/index.html")}" href="${u("/index.html")}">Home</a></li>
        <li class="has-dropdown">
          <button class="dropdown-toggle" data-toggle="servicesMenu" aria-expanded="false">Services ${icon("chevronDown")}</button>
          <div class="dropdown-menu" id="servicesMenu" hidden>
            ${serviceLinks}
          </div>
        </li>
        <li><a class="nav-link${isActive("/gallery.html")}" href="${u("/gallery.html")}">Gallery</a></li>
        <li><a class="nav-link${isActive("/reviews.html")}" href="${u("/reviews.html")}">Reviews</a></li>
        <li><a class="nav-link${isActive("/contact.html")}" href="${u("/contact.html")}">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
`;
}

function footer(base = "") {
  const u = (p) => url(base, p);
  const serviceLinks = services
    .map((s) => `<li><a href="${u(`/services/${s.slug}.html`)}">${s.name}</a></li>`)
    .join("");
  const areaItems = business.serviceAreas.map((a) => `<li>${a}</li>`).join("");

  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="${u("/index.html")}" class="brand">
        <img src="${u("/assets/images/brand/logo.webp")}" alt="${business.name} logo" width="42" height="42" />
        <span>${business.name}</span>
      </a>
      <p>Custom carpentry for kitchens, bathrooms, doors, flooring, fences, and sheds — proudly serving Hollywood, FL and Broward &amp; Palm Beach counties for ${business.yearsExperience} years.</p>
      <div class="social-row">
        <a href="${business.social.facebook}" aria-label="Symonette Carpentry on Facebook">${icon("facebook")}</a>
        <a href="${business.social.instagram}" aria-label="Symonette Carpentry on Instagram">${icon("instagram")}</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Business</h4>
      <ul>
        <li><a href="${u("/index.html")}">Home</a></li>
        <li><a href="${u("/gallery.html")}">Gallery</a></li>
        <li><a href="${u("/contact.html")}">Contact</a></li>
        <li><a href="${u("/reviews.html")}">Review Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>${serviceLinks}</ul>
    </div>
    <div class="footer-col areas">
      <h4>Service Areas</h4>
      <ul>${areaItems}</ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; ${YEAR} ${business.name}. All rights reserved.</span>
    <div class="footer-legal">
      <a href="${u("/privacy-policy.html")}">Privacy Policy</a>
      <a href="${u("/terms.html")}">Terms &amp; Conditions</a>
    </div>
  </div>
</footer>
<script type="module" src="${u("/assets/js/main.js")}"></script>
</body>
</html>
`;
}

function pageHero({ eyebrow, title, lede, image, crumb }, base = "") {
  const u = (p) => url(base, p);
  const gradient = "linear-gradient(180deg, rgba(23, 19, 15, 0.78), rgba(23, 19, 15, 0.9))";
  const bg = image ? `${gradient}, url('${u(image)}')` : gradient;
  return `<section class="page-hero" style="background-image:${bg}">
  <div class="container">
    <p class="breadcrumb"><a href="${u("/index.html")}">Home</a> / ${crumb}</p>
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ""}
    <div class="page-hero-cta">
      <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
      <a class="btn btn-outline" href="${business.phoneHref}">${icon("phone")} ${business.phone}</a>
    </div>
  </div>
</section>
`;
}

function trustBar() {
  const { trustPoints } = require("./data");
  const items = trustPoints
    .map(
      (t) => `<div class="trust-item">${icon(t.icon)}<div><strong>${t.stat}</strong><span>${t.label}</span></div></div>`
    )
    .join("");
  return `<section class="trust-bar"><div class="container trust-grid">${items}</div></section>`;
}

function processSection(heading = "Our Simple 3 Step Process", eyebrow = "The Process", context = "carpentry", base = "") {
  const u = (p) => url(base, p);
  const steps = processSteps
    .map(
      (s, i) => `<div class="process-step">
        <span class="num">${i + 1}</span>
        <h3>${s.title}</h3>
        <p>${s.text.replace(/carpentry needs|project/, context + " needs")}</p>
        <a class="card-link" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
      </div>`
    )
    .join("");
  return `<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${heading}</h2>
    </div>
    <div class="process-grid">${steps}</div>
  </div>
</section>
`;
}

function starsRow() {
  return `<div class="stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>`;
}

function testimonialsSection(list = testimonials, heading = "What Our Customers Say About Us") {
  const slides = list
    .map(
      (t) => `<div class="testimonial-slide">
        <span class="quote-icon">${icon("quote")}</span>
        ${starsRow()}
        <p class="quote">&ldquo;${t.quote}&rdquo;</p>
        <div class="testimonial-author">
          <span class="testimonial-avatar">${t.name.charAt(0)}</span>
          <div><strong>${t.name}</strong><span>${t.location} &middot; ${t.service}</span></div>
        </div>
      </div>`
    )
    .join("");
  return `<section class="section section--cream">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Testimonials</span>
      <h2>${heading}</h2>
    </div>
    <div class="testimonial-carousel">
      <div class="testimonial-track">${slides}</div>
      <div class="carousel-controls">
        <button class="carousel-arrow carousel-prev" aria-label="Previous testimonial">${icon("chevronLeft")}</button>
        <div class="carousel-dots"></div>
        <button class="carousel-arrow carousel-next" aria-label="Next testimonial">${icon("chevronRight")}</button>
      </div>
    </div>
  </div>
</section>
`;
}

function faqSection(items, heading = "Frequently Asked Questions") {
  const rows = items
    .map(
      (f, i) => `<div class="accordion-item">
        <button class="accordion-trigger" data-toggle="faq-${i}" aria-expanded="false" aria-controls="faq-${i}">
          <span>${f.q}</span><span class="plus"></span>
        </button>
        <div class="accordion-panel" id="faq-${i}" hidden><p>${f.a}</p></div>
      </div>`
    )
    .join("");
  return `<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Frequently Asked Questions</span>
      <h2>${heading}</h2>
    </div>
    <div class="accordion">${rows}</div>
  </div>
</section>
`;
}

function ctaBanner(text = "Ready to start your project?", base = "") {
  const u = (p) => url(base, p);
  return `<section class="section--tight">
  <div class="container">
    <div class="cta-banner">
      <div>
        <h2>${text}</h2>
        <p style="margin:0;">Free, no-obligation estimates &middot; ${business.phone}</p>
      </div>
      <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
    </div>
  </div>
</section>
`;
}

function serviceAreasSection() {
  const chips = business.serviceAreas.map((a) => `<span class="area-chip">${a}</span>`).join("");
  return `<section class="section section--navy">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Service Areas</span>
      <h2>Proudly Serving South Florida</h2>
      <p class="lede">Based in Hallandale Beach and centered on Hollywood, FL, our crew works throughout Broward and Palm Beach counties.</p>
    </div>
    <div class="area-chips">${chips}</div>
  </div>
</section>
`;
}

function contactForm({ heading = "Request A Free Quote", serviceOptions = true, compact = false } = {}) {
  const options = serviceOptions
    ? `<div class="field">
        <label for="service">Service Needed</label>
        <select id="service" name="service">
          <option value="">Select a service</option>
          ${services.map((s) => `<option value="${s.name}">${s.name}</option>`).join("")}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>`
    : "";

  return `<div class="form-card">
  <h3>${heading}</h3>
  <p style="color:var(--ink-500);font-size:0.92rem;margin-bottom:20px;">${business.phone} &middot; ${business.email}</p>
  <form class="contact-form" name="quote-request" method="POST" action="/" data-ajax-form data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="quote-request" />
    <p class="hp-field"><label>Don't fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
    <div class="form-grid${compact ? "" : " two-col"}">
      <div class="field">
        <label for="name">Full Name *</label>
        <input type="text" id="name" name="name" required autocomplete="name" />
      </div>
      <div class="field">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" required autocomplete="tel" />
      </div>
    </div>
    <div class="form-grid" style="margin-top:18px;">
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" autocomplete="email" />
      </div>
      ${options}
      <div class="field">
        <label for="message">Short message about your needs *</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div class="field checkbox">
        <input type="checkbox" id="consent" name="consent" required />
        <label for="consent">I consent to receive marketing and appointment-related text messages from ${business.name} at ${business.phone}. Message &amp; data rates may apply. Reply STOP to opt out.</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-block" style="margin-top:22px;">Send Request</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form>
</div>
`;
}

function galleryGrid(items, { withFilters = false } = {}, base = "") {
  const { filterCategories } = require("./gallery-data");
  const u = (p) => url(base, p);
  const filters = withFilters
    ? `<div class="gallery-filters">${filterCategories
        .map(
          (f, i) =>
            `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${f.key}">${f.label}</button>`
        )
        .join("")}</div>`
    : "";

  const cards = items
    .map(
      (item) => `<figure class="gallery-item" data-category="${item.cat}">
        <button class="gallery-trigger" data-full="${u(item.file)}" data-caption="${item.title}">
          <img src="${u(item.file)}" alt="${item.title}" loading="lazy" width="550" height="733" />
          <span class="tag">${item.cat}</span>
        </button>
      </figure>`
    )
    .join("");

  return `${filters}<div class="gallery-grid" id="galleryGrid">${cards}</div>
  <div class="lightbox" id="lightbox" hidden>
    <div class="lightbox-content">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close">${icon("close")}</button>
      <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous image">${icon("chevronLeft")}</button>
      <img id="lightboxImg" src="" alt="" />
      <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next image">${icon("chevronRight")}</button>
      <p class="lightbox-caption" id="lightboxCaption"></p>
    </div>
  </div>
`;
}

module.exports = {
  head,
  header,
  footer,
  galleryGrid,
  pageHero,
  trustBar,
  processSection,
  testimonialsSection,
  faqSection,
  ctaBanner,
  serviceAreasSection,
  contactForm,
  starsRow,
};
