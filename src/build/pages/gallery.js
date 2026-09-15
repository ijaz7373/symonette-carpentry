const { business } = require("../data");
const { galleryItems } = require("../gallery-data");
const { head, header, footer, pageHero, ctaBanner, galleryGrid } = require("../components");

function render(base = "") {
  return `${head(
    {
      title: `Project Gallery | ${business.name}`,
      description: `Browse completed kitchen, bathroom, door, flooring, fence, and shed carpentry projects by ${business.name} in Hollywood, FL.`,
      path: "/gallery",
    },
    base
  )}
<body>
${header("/gallery.html", base)}
<main id="main">
  ${pageHero(
    {
      eyebrow: "Photo Gallery",
      title: "See Why Our Customers Love Us",
      lede: "A look at real, completed carpentry projects across Hollywood, FL and the surrounding communities. Filter by category or click any photo to view it larger.",
      crumb: "Gallery",
    },
    base
  )}

  <section class="section">
    <div class="container">
      ${galleryGrid(galleryItems, { withFilters: true }, base)}
    </div>
  </section>

  <section class="section--tight">
    <div class="container">${ctaBanner("Like what you see? Let's talk about your project.", base)}</div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
