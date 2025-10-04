// app/calgary/_data.js
export const NEIGHBORHOODS = [
    "beltline",
    "kensington",
    "sunnyside",
    "bridgeland",
    "inglewood",
    "mission",
    "mount-royal",
    "hillhurst",
    "crescent-heights",
    "altadore",
    "signal-hill",
    "west-springs",
    "aspen-woods",
    "varsity",
    "brentwood",
    "dalhousie",
    "arbour-lake",
    "tuscany",
    "mahogany",
    "seton",
];

export function toTitle(slug) {
    return slug
        .split("-")
        .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
        .join(" ");
}