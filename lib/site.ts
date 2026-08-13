export const site = {
  name: "Adnan Ayaz Khan",
  /** Canonical domain — update to the real deployment URL before going live. */
  url: "https://your-valid-deployment-url.com",,
  firstName: "Adnan",
  initials: "AK",
  role: "Full Stack Engineer & AI Systems",
  tagline:
    "I'm Adnan, a full-stack engineer focused on designing scalable, maintainable systems and turning complex ideas into production-ready products — from architecture and AI infrastructure to the final interaction.",
  email: "adnanayaz479@gmail.com",
  phone: "+92 335 9740228",
  phoneHref: "tel:+923359740228",
  location: "Pakistan · GMT +5",
  socials: {
    linkedin: "https://linkedin.com/in/adnan-ayaz-awan",
    github: "https://github.com/AdnanAyaz1",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" }
] as const;
