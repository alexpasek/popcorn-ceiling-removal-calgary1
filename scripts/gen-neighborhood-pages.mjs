import fs from "node:fs";
import path from "node:path";

const NEIGHBORHOODS = [
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

const root = path.resolve("app/calgary");

const tpl = (name) => `// app/calgary/${name}/page.jsx
export const dynamic = "force-static";

function toTitle(slug){
  return slug.split("-").map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(" ");
}

export default function Page(){
  const title = toTitle("${name}");
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 30, margin: "0 0 8px" }}>
        Popcorn Ceiling Removal in {title}
      </h1>
      <p>We service {title} with dust-controlled popcorn ceiling removal.</p>
      <p style={{ marginTop: 16 }}>
        <a href="/get-quote" style={{ background: "#000", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none" }}>
          Get a Quote
        </a>
      </p>
      <p style={{ marginTop: 12 }}>
        <a href="/calgary">← All neighborhoods</a>
      </p>
    </main>
  );
}
`;

fs.mkdirSync(root, { recursive: true });

for (const n of NEIGHBORHOODS) {
    const dir = path.join(root, n);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "page.jsx");
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, tpl(n), "utf8");
        console.log("Created:", file);
    } else {
        console.log("Skipped (exists):", file);
    }
}
console.log("Done.");