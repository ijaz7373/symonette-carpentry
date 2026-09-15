const { business } = require("../data");
const { icon } = require("../icons");
const { url } = require("../url");
const { head, header, footer } = require("../components");

// 404.html can be hit from any depth, so unlike the other pages it needs
// root-anchored links rather than page-relative ones. `base` here should be
// the site's real deploy prefix (e.g. "/" for a custom domain or user-root
// GitHub Pages site, "/repo-name/" for a GitHub Pages *project* site).
function render(base = "/") {
  const u = (p) => url(base, p);
  return `${head(
    {
      title: `Page Not Found | ${business.name}`,
      description: "The page you're looking for couldn't be found.",
      path: "/404",
    },
    base
  )}
<body>
${header("", base)}
<main id="main">
  <section class="section" style="text-align:center;padding:120px 0;">
    <div class="container">
      <span class="eyebrow">404</span>
      <h1>Page Not Found</h1>
      <p class="lede" style="max-width:480px;margin:0 auto 28px;">The page you're looking for may have moved. Try the homepage, or give us a call.</p>
      <div class="hero-cta" style="justify-content:center;">
        <a class="btn btn-primary" href="${u("/index.html")}">Back To Home ${icon("arrowRight")}</a>
        <a class="btn btn-outline" href="${business.phoneHref}">${icon("phone")} ${business.phone}</a>
      </div>
    </div>
  </section>
</main>
${footer(base)}
`;
}

module.exports = { render };
