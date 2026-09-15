// Real completed-project photography (downloaded from the live site) plus one
// supplemental Unsplash photo for the Flooring category, which had no project
// photo of its own on the source site.
const galleryItems = [
  {
    file: "/assets/images/gallery/09-kitchen-cabinetry.webp",
    cat: "kitchen",
    title: "Custom Kitchen Cabinetry",
  },
  {
    file: "/assets/images/gallery/02-bathroom-vanity.webp",
    cat: "bathroom",
    title: "Bathroom Vanity Build",
  },
  {
    file: "/assets/images/gallery/03-marble-shower.webp",
    cat: "bathroom",
    title: "Marble Shower Surround",
  },
  {
    file: "/assets/images/gallery/06-bathroom-marble-suite.webp",
    cat: "bathroom",
    title: "Full Bathroom Remodel",
  },
  {
    file: "/assets/images/gallery/07-glass-shower-door.webp",
    cat: "bathroom",
    title: "Frameless Glass Shower",
  },
  {
    file: "/assets/images/gallery/11-shower-corner.webp",
    cat: "bathroom",
    title: "Corner Shower Detail",
  },
  {
    file: "/assets/images/gallery/01-barn-door-bathroom.webp",
    cat: "door",
    title: "Sliding Barn Door Install",
  },
  {
    file: "/assets/images/gallery/08-exterior-door.webp",
    cat: "door",
    title: "Interior Door Replacement",
  },
  {
    file: "/assets/images/gallery/05-fence-gate.webp",
    cat: "fence",
    title: "Wood Fence & Gate",
  },
  {
    file: "/assets/images/gallery/10-privacy-fence.webp",
    cat: "fence",
    title: "Privacy Fence Installation",
  },
  {
    file: "/assets/images/gallery/04-custom-shed.webp",
    cat: "shed",
    title: "Custom Storage Shed",
  },
  {
    file: "/assets/images/services/flooring-hero-unsplash.webp",
    cat: "flooring",
    title: "Hardwood Flooring Finish",
  },
];

const filterCategories = [
  { key: "all", label: "All Projects" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bathroom", label: "Bathroom" },
  { key: "door", label: "Door" },
  { key: "flooring", label: "Flooring" },
  { key: "fence", label: "Fence" },
  { key: "shed", label: "Shed" },
];

module.exports = { galleryItems, filterCategories };
