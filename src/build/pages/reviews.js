const { business, testimonials } = require("../data");
const { icon } = require("../icons");
const { head, header, footer, pageHero, testimonialsSection, starsRow } = require("../components");

function render(base = "") {
  return `${head(
    {
      title: `Customer Reviews | ${business.name}`,
      description: `Read what homeowners across Hollywood, FL say about ${business.name}, and leave your own feedback after a completed project.`,
      path: "/reviews",
    },
    base
  )}
<body>
${header("/reviews.html", base)}
<main id="main">
  ${pageHero(
    {
      eyebrow: "Reviews",
      title: "What Our Customers Say About Us",
      lede: `${business.jobsCompleted} completed jobs and counting — here's some of the feedback that keeps us going.`,
      crumb: "Reviews",
    },
    base
  )}

  ${testimonialsSection(testimonials, "Recent Customer Feedback")}

  <section class="section section--cream">
    <div class="container">
      <div style="max-width:640px;margin:0 auto;text-align:center;" class="section-head center">
        <span class="eyebrow">How Did We Do?</span>
        <h2>Leave Us A Review</h2>
        <p class="lede">Just finished a project with us? We'd love to hear about your experience.</p>
      </div>
      <div class="form-card" style="max-width:640px;margin:0 auto;">
        <form class="contact-form" name="review" method="POST" action="/" data-ajax-form data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="review" />
          <p class="hp-field"><label>Don't fill this out: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
          <div class="form-grid">
            <div class="field">
              <label for="rating">Please Rate Us *</label>
              <select id="rating" name="rating" required>
                <option value="">Choose a rating</option>
                <option>&#9733;&#9733;&#9733;&#9733;&#9733; (5 Stars)</option>
                <option>&#9733;&#9733;&#9733;&#9733; (4 Stars)</option>
                <option>&#9733;&#9733;&#9733; (3 Stars)</option>
                <option>&#9733;&#9733; (2 Stars)</option>
                <option>&#9733; (1 Star)</option>
              </select>
            </div>
            <div class="field">
              <label for="rname">Name (optional)</label>
              <input type="text" id="rname" name="name" autocomplete="name" />
            </div>
            <div class="field">
              <label for="remail">Email (optional)</label>
              <input type="email" id="remail" name="email" autocomplete="email" />
            </div>
            <div class="field">
              <label for="rfeedback">Your Feedback — what can we do to improve?</label>
              <textarea id="rfeedback" name="feedback"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="margin-top:22px;">Submit Feedback</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
