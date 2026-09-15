// Minimal inline SVG icon set (stroke-based, currentColor) — no icon font, no external requests.
const base = (inner, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${inner}</svg>`;

const icons = {
  phone: base(
    `<path d="M6.6 10.2c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C11.6 20.3 3.7 12.4 3.7 2.7c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.2Z"/>`
  ),
  mail: base(
    `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`
  ),
  mapPin: base(
    `<path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>`
  ),
  check: base(`<polyline points="4 12 9 17 20 6"/>`, 'stroke-width="2.6"'),
  checkCircle: base(
    `<circle cx="12" cy="12" r="9"/><polyline points="8.5 12.5 11 15 15.5 9"/>`
  ),
  star: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.8l-5.8 3.1 1.1-6.5-4.8-4.6 6.6-.9L12 2.5Z"/></svg>`,
  arrowRight: base(`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`),
  close: base(`<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>`),
  chevronLeft: base(`<polyline points="15 6 9 12 15 18"/>`),
  chevronRight: base(`<polyline points="9 6 15 12 9 18"/>`),
  chevronDown: base(`<polyline points="6 9 12 15 18 9"/>`, 'class="chev"'),
  shield: base(`<path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z"/>`),
  award: base(
    `<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5"/>`
  ),
  clock: base(`<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>`),
  users: base(
    `<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.3c2.7.4 4.5 2.4 4.5 5.7"/>`
  ),
  file: base(
    `<path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v5h5"/><path d="M9 13h6M9 17h6M9 9h2"/>`
  ),
  ruler: base(
    `<path d="M3 16 16 3l5 5L8 21H3v-5Z"/><path d="m13 6 2 2M10 9l2 2M7 12l2 2"/>`
  ),
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15 8.5h2.5V5.2c-.4-.1-1.8-.2-3.1-.2-3 0-4.9 1.8-4.9 5.1v2.4H6.8v3.6h2.7V21h3.6v-4.9h2.8l.4-3.6h-3.2v-2c0-1 .3-1.8 1.9-1.8Z"/></svg>`,
  instagram: base(
    `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/>`
  ),
  calendar: base(
    `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>`
  ),
  hammer: base(
    `<path d="M9.5 15.5 3 22"/><path d="m14 5 5 5-2.5 2.5L11 7Z"/><path d="m11 7-3 3 5 5 3-3"/>`
  ),
  droplet: base(
    `<path d="M12 3c3.5 4 6 7.4 6 10.5a6 6 0 1 1-12 0C6 10.4 8.5 7 12 3Z"/>`
  ),
  door: base(
    `<rect x="5" y="2.5" width="14" height="19" rx="1.5"/><path d="M9 12h.01"/><path d="M5 21.5h14"/>`
  ),
  layers: base(
    `<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>`
  ),
  fence: base(
    `<path d="M5 3v18M12 3v18M19 3v18"/><path d="M2 8h6M9 8h6M16 8h6M2 15h6M9 15h6M16 15h6"/>`
  ),
  home: base(
    `<path d="m3 11 9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>`
  ),
  play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 8.5v7l6-3.5-6-3.5Z"/></svg>`,
  quote: `<svg viewBox="0 0 32 24" fill="currentColor" aria-hidden="true"><path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8c-4.8 1.6-6.4 4-6.4 7.2h6.4V24H0Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 4.8c-4.8 1.6-6.4 4-6.4 7.2H32V24H17.6Z"/></svg>`,
};

function icon(name, extraClass) {
  const svg = icons[name] || icons.check;
  if (!extraClass) return svg;
  return svg.replace("<svg ", `<svg class="${extraClass}" `);
}

module.exports = { icon };
