export const CALGARY_NEIGHBORHOODS = [
  "Beltline",
  "Kensington",
  "Sunnyside",
  "Bridgeland",
  "Inglewood",
  "Mission",
  "Mount Royal",
  "Hillhurst",
  "Crescent Heights",
  "Altadore",
  "Signal Hill",
  "West Springs",
  "Aspen Woods",
  "Varsity",
  "Brentwood",
  "Dalhousie",
  "Arbour Lake",
  "Tuscany",
  "Mahogany",
  "Seton",
];

export const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export const fromSlug = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
