// Resolves a root-relative path ("/assets/x.css") against a page's base prefix
// so the same templates work both at a domain root and under a GitHub Pages
// project subpath (e.g. https://user.github.io/repo/).
function url(base, p) {
  if (/^https?:\/\//.test(p) || p === "#") return p;
  return (base || "") + p.replace(/^\//, "");
}

module.exports = { url };
