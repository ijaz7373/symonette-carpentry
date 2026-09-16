const { business, services, processSteps, homeFAQs } = require("../data");
const { galleryItems } = require("../gallery-data");
const { icon } = require("../icons");
const { url } = require("../url");
const {
  head,
  header,
  footer,
  trustBar,
  testimonialsSection,
  serviceAreasSection,
  contactForm,
  galleryGrid,
} = require("../components");

function render(base = "") {
  const u = (p) => url(base, p);

  const serviceCards = services
    .map(
      (s) => `<div class="service-icon-card">
        <span class="icon-circle">${icon(s.icon)}</span>
        <h3>${s.name}</h3>
        <p>${s.cardText}</p>
        <a class="card-link" href="${u(`/services/${s.slug}.html`)}">Learn More ${icon("arrowRight")}</a>
      </div>`
    )
    .join("");

  const timelineSteps = processSteps
    .map(
      (s, i) => `<div class="timeline-item">
        <span class="timeline-num">${i + 1}</span>
        <div><h3>${s.title}</h3><p>${s.text}</p></div>
      </div>`
    )
    .join("");

  const marqueeItems = [
    "Free On-Site Estimates",
    "Licensed & Fully Insured",
    `${business.yearsExperience} Years Experience`,
    `${business.jobsCompleted} Jobs Completed`,
  ];
  const marqueeRow = marqueeItems.map((m) => `<span>${m}</span>`).join("");

  const handsOnCaptions = [
    "Crafted residential carpentry with thoughtful detailing",
    "Complete home woodwork and installation projects",
    "Solid, long-lasting results with a clean finish",
  ]
    .map((c) => `<div class="hands-on-caption"><p>${c}</p></div>`)
    .join("");

  const previewImages = galleryItems.slice(0, 6);

  return `${head(
    {
      title: `${business.name} | Kitchen, Bathroom & Fence Carpentry in Hollywood, FL`,
      description: `${business.name} in Hollywood, FL offers expert kitchen, bathroom, door, flooring, fence, and shed carpentry. ${business.yearsExperience} years, ${business.jobsCompleted} jobs completed. Free estimates.`,
      path: "/",
    },
    base
  )}
<body>
${header("/index.html", base)}
<main id="main">

  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-inner">
          <span class="hero-badge">${icon("star")} ${business.jobsCompleted} Customers &middot; One Standard: Excellence</span>
          <h1>Expert Carpentry For Timeless Living</h1>
          <p class="lede">From custom kitchens to backyard fences, Symonette Carpentry brings ${business.yearsExperience} years of precise craftsmanship to every project across Hollywood, FL and Broward &amp; Palm Beach counties.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
            <a class="btn btn-outline" href="${business.phoneHref}">${icon("phone")} ${business.phone}</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><strong>${business.yearsExperience}</strong><span>Years Experience</span></div>
            <div class="hero-stat"><strong>${business.jobsCompleted}</strong><span>Jobs Completed</span></div>
            <div class="hero-stat"><strong>Free</strong><span>On-Site Estimates</span></div>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-media-frame">
            <img src="${u("/assets/images/brand/hero-deck.webp")}" alt="Symonette Carpentry carpenter measuring wood decking on a custom deck build" width="1400" height="933" />
          </div>
          <div class="hero-media-badge">
            <span class="icon-circle icon-circle--sm">${icon("award")}</span>
            <div><strong>${business.yearsExperience}</strong><span>Years of Craftsmanship</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${trustBar()}

  <section class="section" id="services">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">What We Do</span>
        <h2>Complete Carpentry Solutions For Modern Homes</h2>
        <p class="lede">Six specialties, one standard of craftsmanship — every project measured, built, and finished to fit your home.</p>
      </div>
      <div class="grid grid-3">${serviceCards}</div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="container">
      <div class="timeline-layout">
        <div class="timeline-media">
          <img src="${u("/assets/images/stock/workshop3.webp")}" alt="Carpentry crew building an outdoor wood structure" width="1000" height="666" loading="lazy" />
        </div>
        <div>
          <span class="eyebrow">How We Work</span>
          <h2>Smooth Workflow For Perfect Woodwork</h2>
          <div class="timeline-list">${timelineSteps}</div>
        </div>
      </div>
    </div>
  </section>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">${marqueeRow}${marqueeRow}</div>
  </div>

  <section class="section hands-on">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Hands-On Craftsmanship</span>
        <h2>Real Projects, Built By Hand</h2>
        <p class="lede">Every job is measured, built, and finished on-site by our own crew — no subcontractors, no shortcuts.</p>
      </div>
      <div class="hands-on-media">
        <img src="${u("/assets/images/stock/workshop1.webp")}" alt="Woodworking workshop bench and hand tools" loading="lazy" width="1000" height="666" style="width:100%;height:520px;object-fit:cover;" />
      </div>
      <div class="hands-on-captions">${handsOnCaptions}</div>
    </div>
  </section>

  <section class="section section--cream" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-media">
          <img src="${u("/assets/images/brand/founder.webp")}" alt="Founder of Symonette Carpentry on a job site" width="900" height="1143" />
          <div class="badge"><strong>${business.yearsExperience}</strong><span>Years in Business</span></div>
        </div>
        <div>
          <span class="eyebrow">About Us</span>
          <h2>Reliable Carpentry, Built On Reputation</h2>
          <p class="lede">${business.primaryCity}, Florida homeowners often need reliable carpentry for repairs, upgrades, and custom projects. With ${business.yearsExperience} years of experience and ${business.jobsCompleted} completed jobs, ${business.name} is trusted across Hollywood and Broward County.</p>
          <ul class="about-list">
            <li>${icon("shield")}<span><strong>Licensed &amp; Fully Insured</strong> — every project covered from start to finish.</span></li>
            <li>${icon("file")}<span><strong>Free On-Site Estimates</strong> — honest pricing, no obligation.</span></li>
          </ul>
          <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="gallery">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Photo Gallery</span>
        <h2>See Why Our Customers Love Us</h2>
      </div>
      ${galleryGrid(previewImages, {}, base)}
      <div style="text-align:center;margin-top:32px;">
        <a class="btn btn-outline" href="${u("/gallery.html")}">View Full Gallery ${icon("arrowRight")}</a>
      </div>
    </div>
  </section>

  ${testimonialsSection()}

  <section class="section section--cream">
    <div class="container">
      <div class="faq-cta-grid">
        <div>
          <span class="eyebrow">Frequently Asked Questions</span>
          <h2 style="margin-bottom:28px;">Got Any Questions?</h2>
          <div class="accordion">${homeFAQs
            .map(
              (f, i) => `<div class="accordion-item">
                <button class="accordion-trigger" data-toggle="hfaq-${i}" aria-expanded="false" aria-controls="hfaq-${i}">
                  <span>${f.q}</span><span class="plus"></span>
                </button>
                <div class="accordion-panel" id="hfaq-${i}" hidden><p>${f.a}</p></div>
              </div>`
            )
            .join("")}</div>
        </div>
        <div class="faq-cta-card">
          <span class="icon-circle">${icon("hammer")}</span>
          <h3>Still Have Questions?</h3>
          <p>Tell us about your project and we'll give you a straight answer — plus a free, no-obligation estimate.</p>
          <a class="btn btn-primary btn-block" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
          <p style="margin-top:18px;font-size:0.9rem;color:rgba(255,255,255,0.7);">Or call us directly at <a href="${business.phoneHref}" style="color:var(--white);font-weight:700;">${business.phone}</a></p>
        </div>
      </div>
    </div>
  </section>

  ${serviceAreasSection()}

  <section class="section">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Get In Touch</span>
        <h2>Trust, Care &amp; Support — Contact Our Carpenter</h2>
        <p class="lede">${business.phone} &middot; ${business.email}</p>
      </div>
      <div class="contact-split">
        <div class="contact-split-media">
          <img src="${u("/assets/images/stock/measure1.webp")}" alt="Carpenter measuring plywood for a Symonette Carpentry project" />
          <div class="contact-split-info">
            <span class="info-chip">${icon("mapPin")} ${business.addressLine1}, ${business.addressLine2}</span>
            <span class="info-chip">${icon("clock")} Mon&ndash;Sat, 9:00am &ndash; 5:00pm</span>
          </div>
        </div>
        ${contactForm({ heading: "Request A Free Quote" })}
      </div>
    </div>
  </section>

</main>
${footer(base)}
`;
}

module.exports = { render };
