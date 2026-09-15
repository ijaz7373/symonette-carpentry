const { business } = require("../data");
const { icon } = require("../icons");
const { url } = require("../url");
const { head, header, footer, pageHero, contactForm } = require("../components");

function render(base = "") {
  const u = (p) => url(base, p);
  const fullAddress = `${business.addressLine1}, ${business.addressLine2}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const hoursRows = business.hours
    .map(([day, hrs]) => `<tr><td>${day}</td><td>${hrs}</td></tr>`)
    .join("");

  return `${head(
    {
      title: `Contact Us | ${business.name} | ${business.phone}`,
      description: `Request a free carpentry estimate from ${business.name} in Hollywood, FL. Call ${business.phone} or send us your project details online.`,
      path: "/contact",
    },
    base
  )}
<body>
${header("/contact.html", base)}
<main id="main">
  ${pageHero(
    {
      eyebrow: "Contact Us",
      title: "Request A Carpentry Quote",
      lede: "Tell us about your project and we'll schedule a free, in-person estimate — no obligation, no pressure.",
      crumb: "Contact",
    },
    base
  )}

  <section class="section">
    <div class="container">
      <div class="contact-layout">
        <div>
          <div class="info-card">
            <h3>Get In Touch</h3>
            <div class="info-row">
              ${icon("phone")}
              <div><strong>Call or Text</strong><a href="${business.phoneHref}">${business.phone}</a></div>
            </div>
            <div class="info-row">
              ${icon("mail")}
              <div><strong>Email</strong><a href="${business.emailHref}">${business.email}</a></div>
            </div>
            <div class="info-row">
              ${icon("mapPin")}
              <div><strong>Address</strong><span>${business.addressLine1}<br />${business.addressLine2}</span></div>
            </div>
            <div class="info-row">
              ${icon("clock")}
              <div style="width:100%;">
                <strong>Business Hours</strong>
                <table class="hours-table">${hoursRows}</table>
              </div>
            </div>
            <div class="social-row">
              <a href="${business.social.facebook}" aria-label="Facebook">${icon("facebook")}</a>
              <a href="${business.social.instagram}" aria-label="Instagram">${icon("instagram")}</a>
            </div>
          </div>
          <div class="map-frame" style="background-image:linear-gradient(160deg, rgba(11,20,32,.15), rgba(11,20,32,.75)), url('${u("/assets/images/gallery/10-privacy-fence.webp")}')">
            <a href="${directionsUrl}" target="_blank" rel="noopener">${icon("mapPin")} Get Directions</a>
          </div>
        </div>
        <div>${contactForm({ heading: "Get A Free Quote", compact: true })}</div>
      </div>
    </div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
