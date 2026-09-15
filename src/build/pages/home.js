const { business, services, homeFAQs } = require("../data");
const { galleryItems } = require("../gallery-data");
const { icon } = require("../icons");
const { url } = require("../url");
const {
  head,
  header,
  footer,
  trustBar,
  processSection,
  testimonialsSection,
  faqSection,
  ctaBanner,
  serviceAreasSection,
  contactForm,
  galleryGrid,
} = require("../components");

function render(base = "") {
  const u = (p) => url(base, p);
  const serviceCards = services
    .map(
      (s) => `<div class="service-card">
        <div class="thumb"><img src="${u(s.heroImage)}" alt="${s.name} in Hollywood, FL" loading="lazy" width="500" height="375" /></div>
        <div class="body">
          <h3>${s.name}</h3>
          <p>${s.cardText}</p>
          <a class="card-link" href="${u(`/services/${s.slug}.html`)}">Learn More ${icon("arrowRight")}</a>
        </div>
      </div>`
    )
    .join("");

  const previewImages = galleryItems.slice(0, 8);

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

  <section class="hero" style="background-image:linear-gradient(180deg, rgba(11, 20, 32, 0.72), rgba(11, 20, 32, 0.88)), url('${u("/assets/images/gallery/09-kitchen-cabinetry.webp")}')">
    <div class="container hero-inner">
      <span class="hero-badge">${icon("star")} ${business.jobsCompleted} Customers &middot; One Standard: Excellence</span>
      <h1>Carpentry In ${business.primaryCity} Homeowners Trust</h1>
      <p class="lede">From custom kitchens to backyard fences, Symonette Carpentry brings ${business.yearsExperience} years of precise craftsmanship to every project across Broward &amp; Palm Beach counties.</p>
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
  </section>

  ${trustBar()}

  <section class="section" id="services">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Our Services</span>
        <h2>Carpentry Services Built to Last</h2>
        <p class="lede">Six specialties, one standard of craftsmanship — every project measured, built, and finished to fit your home.</p>
      </div>
      <div class="grid grid-3">${serviceCards}</div>
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
          <h2>Reliable Carpentry, Built on Reputation</h2>
          <p class="lede">${business.primaryCity}, Florida homeowners often need reliable carpentry for repairs, upgrades, and custom projects. With ${business.yearsExperience} years of experience and ${business.jobsCompleted} completed jobs, ${business.name} is trusted across Hollywood and Broward County.</p>
          <ul class="about-list">
            <li>${icon("check")}<span>From coastal homes to inland neighborhoods, we build for South Florida's climate.</span></li>
            <li>${icon("check")}<span>Licensed, insured, and focused on clear communication from quote to completion.</span></li>
            <li>${icon("check")}<span>Every estimate is free, honest, and delivered in person.</span></li>
          </ul>
          <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
        </div>
      </div>
    </div>
  </section>

  ${processSection("Our Simple 3 Step Process", "The Process", "carpentry", base)}

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

  ${faqSection(homeFAQs)}

  ${serviceAreasSection()}

  <section class="section" id="contact">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Get In Touch</span>
        <h2>Request A Free Quote</h2>
        <p class="lede">${business.phone} &middot; ${business.email}</p>
      </div>
      <div style="max-width:640px;margin:0 auto;">
        ${contactForm({ heading: "Tell Us About Your Project" })}
      </div>
    </div>
  </section>

  <div class="container"><hr style="border:none;border-top:1px solid var(--line-200);margin:0 0 64px;" /></div>

</main>
${footer(base)}
`;
}

module.exports = { render };
