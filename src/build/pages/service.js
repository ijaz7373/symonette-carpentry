const { business, services, testimonials } = require("../data");
const { icon } = require("../icons");
const { url } = require("../url");
const {
  head,
  header,
  footer,
  pageHero,
  processSection,
  testimonialsSection,
  faqSection,
  contactForm,
} = require("../components");

// Service pages live one level deep (services/<slug>.html), so they default
// to a "../" base to reach the site root.
function render(service, base = "../") {
  const u = (p) => url(base, p);
  const related = services.filter((s) => s.slug !== service.slug);
  const relatedLinks = related
    .map((s) => `<a href="${u(`/services/${s.slug}.html`)}">${s.name}</a>`)
    .join("");

  const serviceTestimonials = testimonials.filter((t) => t.service === service.name);
  const testimonialList = serviceTestimonials.length ? serviceTestimonials : testimonials.slice(0, 3);

  const galleryFigures = service.galleryKeys
    .map(
      (key) =>
        `<img src="${u(`/assets/images/gallery/${key}.webp`)}" alt="${service.name} project in ${business.primaryCity}, FL" loading="lazy" width="550" height="733" style="border-radius:var(--radius-md);box-shadow:var(--shadow-sm);width:100%;aspect-ratio:3/4;object-fit:cover;" />`
    )
    .join("");

  const galleryBlock = service.galleryKeys.length
    ? `<section class="section section--cream">
        <div class="container">
          <div class="section-head center">
            <span class="eyebrow">Recent Work</span>
            <h2>${service.name} Projects</h2>
          </div>
          <div class="grid grid-3">${galleryFigures}</div>
        </div>
      </section>`
    : "";

  const [narrative1, narrative2, narrative3] = service.narrativeImages.map(u);

  return `${head(
    {
      title: `${service.name} in ${business.primaryCity}, FL | ${business.name}`,
      description: `${service.intro}`,
      path: `/services/${service.slug}`,
      ogImage: service.heroImage,
    },
    base
  )}
<body>
${header("", base)}
<main id="main">
  ${pageHero(
    {
      eyebrow: `${service.shortName} Carpentry Experts`,
      title: `${service.name} In ${business.primaryCity}`,
      lede: service.intro,
      image: service.heroImage,
      crumb: `Services / ${service.name}`,
    },
    base
  )}

  <section class="section">
    <div class="container">
      <div class="two-col-text">
        <img src="${narrative1}" alt="${service.name}" loading="lazy" width="700" height="525" />
        <div class="text-block">
          <span class="eyebrow">What Is ${service.name}?</span>
          <h2>Built Around Your Home, Not Off The Shelf</h2>
          <p class="lede">${service.whatIs}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="container">
      <div class="two-col-text reverse">
        <div class="text-block">
          <span class="eyebrow">When Is It Necessary?</span>
          <h2>Signs It's Time To Call</h2>
          <p class="lede">${service.whenNecessary}</p>
        </div>
        <img src="${narrative2}" alt="${service.name} signs and considerations" loading="lazy" width="700" height="525" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="two-col-text">
        <img src="${narrative3}" alt="${service.name} requirements" loading="lazy" width="700" height="525" />
        <div class="text-block">
          <span class="eyebrow">What's Required</span>
          <h2>What Goes Into The Job</h2>
          <p class="lede">${service.requirements}</p>
          <a class="btn btn-primary" href="${u("/contact.html")}">Get Free Quote ${icon("arrowRight")}</a>
        </div>
      </div>
    </div>
  </section>

  ${galleryBlock}

  ${processSection(`3 Step Process For Your ${service.name} Needs`, "The Process", service.name.toLowerCase(), base)}

  ${testimonialsSection(testimonialList, `What Our ${service.shortName} Customers Say`)}

  ${faqSection(service.faqs)}

  <section class="section section--cream">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Explore More</span>
        <h2>Other Carpentry Services</h2>
      </div>
      <div class="related-services" style="justify-content:center;">${relatedLinks}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Get In Touch</span>
        <h2>Request A Free ${service.shortName} Quote</h2>
        <p class="lede">${business.phone} &middot; ${business.email}</p>
      </div>
      <div style="max-width:640px;margin:0 auto;">
        ${contactForm({ heading: `Get A Free ${service.shortName} Quote` })}
      </div>
    </div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
