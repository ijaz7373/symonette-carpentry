const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const { services, business } = require("./data");

function write(relPath, contents) {
  const fullPath = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents, "utf8");
  console.log("wrote", relPath, `(${(contents.length / 1024).toFixed(1)} KB)`);
}

function main() {
  write("index.html", require("./pages/home").render());
  write("gallery.html", require("./pages/gallery").render());
  write("contact.html", require("./pages/contact").render());
  write("reviews.html", require("./pages/reviews").render());
  write("privacy-policy.html", require("./pages/privacy-policy").render());
  write("terms.html", require("./pages/terms").render());

  const serviceRenderer = require("./pages/service");
  services.forEach((s) => {
    write(`services/${s.slug}.html`, serviceRenderer.render(s));
  });

  write(
    "robots.txt",
    `User-agent: *\nAllow: /\nSitemap: https://symonettecarpentry.org/sitemap.xml\n`
  );

  const urls = [
    "/index.html",
    "/gallery.html",
    "/contact.html",
    "/reviews.html",
    "/privacy-policy.html",
    "/terms.html",
    ...services.map((s) => `/services/${s.slug}.html`),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>https://symonettecarpentry.org${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
  write("sitemap.xml", sitemap);

  // 404.html can be hit from any depth, so it needs a root-anchored prefix
  // rather than a page-relative one. Override via SITE_BASE_PATH when the
  // deploy target changes (e.g. "/" for a custom domain, "/repo-name/" for
  // a GitHub Pages project site).
  const deployPrefix = process.env.SITE_BASE_PATH || "/symonette-carpentry/";
  write("404.html", require("./pages/not-found").render(deployPrefix));

  console.log(`\nBuild complete for ${business.name}.`);
}

main();
