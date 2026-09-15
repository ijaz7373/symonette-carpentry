// Central content data for the Symonette Carpentry site.
// Facts (name, phone, address, hours, service list, service areas) are sourced
// from the live symonettecarpentry.org site. Descriptive copy has been
// rewritten from scratch (the original service pages only had Lorem Ipsum body text).

const business = {
  name: "Symonette Carpentry",
  tagline: "Carpentry Services You Can Rely On",
  phone: "(954) 639-3408",
  phoneHref: "tel:+19546393408",
  email: "info@symonettecarpentry.org",
  emailHref: "mailto:info@symonettecarpentry.org",
  addressLine1: "600 Parkview Drive",
  addressLine2: "Hallandale Beach, FL 33009",
  primaryCity: "Hollywood",
  yearsExperience: "20+",
  jobsCompleted: "6,000+",
  hours: [
    ["Monday", "9:00 AM – 5:00 PM"],
    ["Tuesday", "9:00 AM – 5:00 PM"],
    ["Wednesday", "9:00 AM – 5:00 PM"],
    ["Thursday", "9:00 AM – 5:00 PM"],
    ["Friday", "9:00 AM – 5:00 PM"],
    ["Saturday", "9:00 AM – 5:00 PM"],
    ["Sunday", "Closed"],
  ],
  serviceAreas: [
    "Hollywood",
    "Fort Lauderdale",
    "Pompano Beach",
    "Lighthouse Point",
    "Coral Springs",
    "Parkland",
    "Deerfield Beach",
    "Boca Raton",
    "Delray Beach",
    "Boynton Beach",
    "Lake Worth",
    "West Palm Beach",
    "Riviera Beach",
    "Stuart",
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
};

// Six real services (the live site also had six placeholder "service-7..12"
// pages with no content — those are intentionally not recreated).
const services = [
  {
    slug: "kitchen-carpentry",
    key: "kitchen",
    name: "Kitchen Carpentry",
    shortName: "Kitchen",
    heroImage: "/assets/images/services/category-kitchen.webp",
    cardText:
      "Custom cabinets, islands, and detailed woodwork built for daily use and long-term performance.",
    intro:
      "For kitchen carpentry in Hollywood, FL, Symonette Carpentry delivers custom solutions that blend style and function. From cabinets to detailed woodwork, every kitchen upgrade is built for long-lasting performance and daily use. Homeowners choose us for precise craftsmanship and dependable service that transforms kitchen spaces beautifully.",
    whatIs:
      "Kitchen carpentry covers the custom woodwork that shapes the room you use the most — cabinetry, islands, open shelving, pantry built-ins, crown molding, and trim. Rather than installing generic, off-the-shelf boxes, we build and fit cabinetry to your exact layout, measuring around plumbing, appliances, and outlets so every drawer, door, and countertop transition lines up cleanly.",
    whenNecessary:
      "Most homeowners come to us when cabinets are warped, water-damaged, or simply outdated; when a remodel opens up the layout and stock cabinetry no longer fits; or when they're finishing a new addition and want cabinetry built to match the rest of the home. It's also common after a flood, termite damage, or when selling a home and wanting a kitchen that shows well.",
    requirements:
      "A solid kitchen carpentry project starts with an in-person measurement — cabinet boxes, plumbing rough-ins, appliance cutouts, and electrical all need to be accounted for before a single board is cut. We'll talk through wood species and finish (painted shaker, stained hardwood, or laminate), soft-close hardware, and any structural changes needed if walls or soffits are coming down. Most kitchens are ready in a few weeks depending on scope.",
    galleryKeys: ["09-kitchen-cabinetry"],
    faqs: [
      {
        q: "Can you match new cabinets to my home's existing trim and doors?",
        a: "Yes. We regularly match stain color, door profile, and hardware style so new cabinetry looks original to the house rather than added on.",
      },
      {
        q: "Do you build custom kitchen islands?",
        a: "Absolutely — islands are one of our most requested kitchen projects, built to your exact footprint with room for seating, storage, or appliances.",
      },
      {
        q: "How long does a full kitchen cabinet replacement take?",
        a: "Most full kitchens take two to four weeks from final measurement to installation, depending on cabinet count and finish selections.",
      },
    ],
  },
  {
    slug: "bathroom-carpentry",
    key: "bathroom",
    name: "Bathroom Carpentry",
    shortName: "Bathroom",
    heroImage: "/assets/images/services/category-bathroom.webp",
    cardText:
      "Vanities, storage, and finish carpentry that hold up to daily moisture without losing their looks.",
    intro:
      "For bathroom carpentry in Hollywood, FL, Symonette Carpentry delivers durable, custom solutions. From vanities to storage and woodwork, each project enhances style and function. Homeowners trust our reliable service and quality results for beautiful, practical bathrooms.",
    whatIs:
      "Bathroom carpentry covers vanities, linen cabinets, shower niches and trim, medicine cabinet surrounds, and any built-in storage that has to survive daily humidity without warping or peeling. We build with moisture-resistant materials and finish everything so seams and edges stay sealed against water.",
    whenNecessary:
      "Look for swollen or soft cabinet bases, doors that no longer close square, or a vanity that was never sized right for the room. Bathroom carpentry is also the right call during a full remodel, when adding a second vanity, or when converting a tub to a walk-in shower and the surrounding woodwork and trim need to be rebuilt to match.",
    requirements:
      "Because bathrooms combine plumbing, tile, and wood in a tight footprint, we coordinate cabinet dimensions with your sink, faucet, and countertop before building. We'll also confirm ventilation is adequate for the materials chosen — proper airflow is what keeps new cabinetry from suffering the same moisture damage as the old.",
    galleryKeys: [
      "01-barn-door-bathroom",
      "02-bathroom-vanity",
      "03-marble-shower",
      "06-bathroom-marble-suite",
      "07-glass-shower-door",
      "11-shower-corner",
    ],
    faqs: [
      {
        q: "What materials hold up best to bathroom humidity?",
        a: "We typically recommend moisture-resistant plywood boxes with a fully sealed finish, paired with solid wood or MDF doors depending on your budget and style.",
      },
      {
        q: "Can you build a vanity for an odd-shaped or small bathroom?",
        a: "Yes — custom vanities are built to your exact wall dimensions, which is often the only way to make an awkward layout work well.",
      },
      {
        q: "Do you also handle the surrounding trim and shower woodwork?",
        a: "We do. Door casing, shower niches, and trim are finished as part of the same project so everything matches.",
      },
    ],
  },
  {
    slug: "door-carpentry",
    key: "door",
    name: "Door Carpentry",
    shortName: "Door",
    heroImage: "/assets/images/services/category-door.webp",
    cardText:
      "Installation, repair, and replacement for interior and exterior doors built to fit and last.",
    intro:
      "For door carpentry in Hollywood, FL, Symonette Carpentry offers reliable, high-quality solutions. From installation to repairs and replacements, every project improves security, function, and appearance with doors built to fit and last.",
    whatIs:
      "Door carpentry covers interior and exterior door installation, framing, and repair — including hanging new slab doors, building or repairing door jambs, adjusting doors that stick or drag, and fitting hardware like hinges, deadbolts, and closers. It also includes specialty installs such as sliding barn doors and French doors.",
    whenNecessary:
      "A door needs attention when it sticks, won't latch, lets in drafts or light around the frame, or has a jamb that's cracked or rotted from water exposure. Replacement is also common after a break-in, during a remodel, or when upgrading to a more secure and energy-efficient exterior door.",
    requirements:
      "Doors have to be plumb, level, and square to operate correctly, so we check the full frame — not just the slab — before installing. For exterior doors we also confirm proper flashing and weatherproofing, and for security upgrades we'll talk through hardware grade and strike plate reinforcement.",
    galleryKeys: ["01-barn-door-bathroom", "08-exterior-door"],
    faqs: [
      {
        q: "My door sticks in humid weather — can that be fixed without replacing it?",
        a: "Often, yes. Planing the door edge, adjusting hinges, or correcting a slightly out-of-square frame can solve seasonal sticking without a full replacement.",
      },
      {
        q: "Do you install sliding barn doors?",
        a: "Yes, including the hardware track, header support, and door itself — a popular option for closets, pantries, and connecting rooms.",
      },
      {
        q: "Can you replace just the door and keep the existing frame?",
        a: "Sometimes — it depends on whether the current frame is square and in good condition. We'll assess that during your free estimate.",
      },
    ],
  },
  {
    slug: "flooring",
    key: "flooring",
    name: "Flooring",
    shortName: "Flooring",
    heroImage: "/assets/images/services/category-flooring.webp",
    cardText:
      "Hardwood, laminate, and floating floor installation and repair for lasting, everyday durability.",
    intro:
      "For flooring in Hollywood, FL, Symonette Carpentry delivers durable, high-quality results that enhance style and function. From installation to repairs, every project is built for long-lasting performance and daily use homeowners can trust.",
    whatIs:
      "Our flooring work covers installation and repair of hardwood, engineered wood, and laminate floors, plus the trim carpentry that finishes a room — baseboards, transition strips, and thresholds between rooms. We prep the subfloor first, since that's what determines how flat and quiet the finished floor will be.",
    whenNecessary:
      "Common triggers are visible gaps, cupping or warping from moisture, scratched or worn finish that's beyond refinishing, or simply wanting to replace worn carpet or tile with wood flooring. New flooring is also typically installed alongside a kitchen or whole-home remodel.",
    requirements:
      "Subfloor condition and moisture levels have to be checked before installation — laying new flooring over an uneven or damp subfloor is the most common cause of early failure. We'll also help you choose plank width and finish based on the room's traffic and light exposure.",
    galleryKeys: [],
    faqs: [
      {
        q: "Can you install hardwood over an existing floor?",
        a: "In many cases yes, provided the existing surface is flat, stable, and moisture-free. We check subfloor condition during the estimate before confirming.",
      },
      {
        q: "How long does a typical room take to floor?",
        a: "A single room is often completed in one to two days; whole-home projects usually take about a week depending on square footage.",
      },
      {
        q: "Do you repair squeaky or damaged sections of existing hardwood?",
        a: "Yes — we can replace damaged boards and re-secure squeaky sections to match the surrounding floor.",
      },
    ],
  },
  {
    slug: "fence-carpentry",
    key: "fence",
    name: "Fence Carpentry",
    shortName: "Fence",
    heroImage: "/assets/images/services/category-fence.webp",
    cardText:
      "Wood fences and gates built for privacy, security, and curb appeal that last through Florida weather.",
    intro:
      "For fence carpentry in Hollywood, FL, Symonette Carpentry delivers durable, high-quality solutions. From installation to repairs, each project improves privacy, security, and curb appeal with strong, long-lasting fences built to fit your property.",
    whatIs:
      "Fence carpentry covers wood fence and gate construction — post setting, rail framing, picket installation, and gate hardware — built to your property line and the height and style you want, from privacy fencing to open picket styles.",
    whenNecessary:
      "Leaning posts, split or missing pickets, and gates that no longer latch are the usual signs a fence needs repair or replacement. New fencing is also common after a survey reveals property lines, for pool code compliance, or simply to add privacy and keep pets or kids contained.",
    requirements:
      "We confirm property lines and any HOA or local height requirements before setting posts, and use pressure-treated lumber set below frost-free depth for South Florida soil so posts stay solid for years rather than shifting after the first storm season.",
    galleryKeys: ["05-fence-gate", "10-privacy-fence"],
    faqs: [
      {
        q: "What wood holds up best to South Florida weather?",
        a: "Pressure-treated pine is the standard for durability and value here; we can also discuss cedar for a different look and natural resistance to rot.",
      },
      {
        q: "Can you match a new section of fence to my existing one?",
        a: "Yes, we match height, picket spacing, and style so repairs or extensions blend in with what's already there.",
      },
      {
        q: "Do you handle gate hardware and self-closing latches for pool code?",
        a: "We do — self-closing, self-latching hardware can be added to meet local pool safety requirements.",
      },
    ],
  },
  {
    slug: "shed-carpentry",
    key: "shed",
    name: "Shed Carpentry",
    shortName: "Shed",
    heroImage: "/assets/images/services/category-shed.webp",
    cardText:
      "Custom-built storage sheds sized and finished to add real, long-lasting value to your property.",
    intro:
      "For shed carpentry in Hollywood, FL, Symonette Carpentry provides durable, custom-built solutions. From new sheds to replacements, every project adds storage, function, and value with strong, long-lasting results homeowners trust.",
    whatIs:
      "Shed carpentry covers custom-built storage sheds — framing, siding, roofing, doors, and windows — sized and finished to fit your yard rather than a one-size-fits-all kit. We build on a proper foundation base so the structure stays square and dry over time.",
    whenNecessary:
      "A new or replacement shed makes sense when an old one is rotting, leaning, or too small, or when you simply need dedicated storage for tools, a mower, or seasonal items that's sturdier than a plastic kit shed.",
    requirements:
      "We'll confirm setback requirements from property lines and, depending on size, whether a permit applies in your city before building. A level, well-drained base is set first, then the shed is framed and finished to match or complement your home's exterior.",
    galleryKeys: ["04-custom-shed"],
    faqs: [
      {
        q: "Do I need a permit for a new shed?",
        a: "It depends on the size and your city's rules — we check local requirements as part of the estimate so there are no surprises.",
      },
      {
        q: "Can the shed be built to match my house's siding and color?",
        a: "Yes, matching the shed to your home's exterior is a common request and something we plan for during design.",
      },
      {
        q: "How long does it take to build a shed on-site?",
        a: "Most standard-size sheds are completed within three to five days once the base is prepared.",
      },
    ],
  },
];

const processSteps = [
  {
    title: "Contact Us",
    text: "Start by completing the “Get a Free Quote” form on our website to share your carpentry needs with us so we can take care of you.",
  },
  {
    title: "Schedule Your Estimate",
    text: "Next, we'll arrange a property visit at a time that works for you to provide an in-person estimate for your project.",
  },
  {
    title: "Get The Job Done",
    text: "After you approve our estimate, we'll schedule a date to complete the job. Our team will work hard to exceed your expectations.",
  },
];

const homeFAQs = [
  {
    q: "Can you provide references from past clients?",
    a: "Absolutely — we can provide references from past clients. You can also read reviews and testimonials from our satisfied customers on our website, and we're happy to share contact information for specific past clients on request.",
  },
  {
    q: "What sets you apart from other contractors in the area?",
    a: "At Symonette Carpentry, we distinguish ourselves through meticulous attention to detail, a dedication to quality, and a personalized approach. We prioritize client communication to seamlessly bring their vision to life.",
  },
  {
    q: "What types of services do you offer?",
    a: "We specialize in kitchen carpentry, bathroom carpentry, door carpentry, flooring, fence carpentry, and shed carpentry — serving Hollywood, FL and the surrounding communities.",
  },
  {
    q: "Is there a fee for a consultation or estimate?",
    a: "No — Symonette Carpentry offers complimentary, no-obligation estimates to all prospective clients.",
  },
];

// Testimonial copy is representative placeholder content (the source site's
// testimonial widget loads reviews dynamically and had no static text to reuse).
// Swap these for real Google/Facebook reviews before launch.
const testimonials = [
  {
    name: "Denise R.",
    location: "Hollywood, FL",
    service: "Kitchen Carpentry",
    quote:
      "Our kitchen cabinets were falling apart and Symonette Carpentry rebuilt the whole space. The joinery is flawless and everything closes like it's brand new.",
  },
  {
    name: "Marcus T.",
    location: "Pompano Beach, FL",
    service: "Fence Carpentry",
    quote:
      "They replaced our entire backyard fence in two days. Posts are rock solid and they even matched the gate to our existing side fence perfectly.",
  },
  {
    name: "Angela P.",
    location: "Fort Lauderdale, FL",
    service: "Bathroom Carpentry",
    quote:
      "The new vanity fits our small bathroom so much better than the old one. Clean lines, soft-close doors, and they left the job site spotless every day.",
  },
  {
    name: "Robert K.",
    location: "Coral Springs, FL",
    service: "Door Carpentry",
    quote:
      "Our front door had been sticking for years. Turned out to be the frame, not the door — they fixed it properly instead of just planing it down again.",
  },
  {
    name: "Yvonne S.",
    location: "Deerfield Beach, FL",
    service: "Shed Carpentry",
    quote:
      "Built us a custom shed that matches our house siding exactly. Sturdier than anything we could have bought as a kit, and it looks like it belongs there.",
  },
  {
    name: "Charles D.",
    location: "Boca Raton, FL",
    service: "Flooring",
    quote:
      "Installed hardwood through our whole downstairs. Not a single squeak, and they were upfront about timeline and cost from the first estimate.",
  },
];

const trustPoints = [
  { icon: "award", stat: business.yearsExperience, label: "Years of Experience" },
  { icon: "users", stat: business.jobsCompleted, label: "Jobs Completed" },
  { icon: "shield", stat: "Licensed", label: "& Fully Insured" },
  { icon: "file", stat: "Free", label: "On-Site Estimates" },
];

module.exports = { business, services, processSteps, homeFAQs, testimonials, trustPoints };
