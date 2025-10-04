// app/calgary/[neighborhood]/page.tsx
import { notFound } from "next/navigation";

export const dynamic = "force-static"; // ✅ force SSG
export const dynamicParams = false; // ✅ only the params we return below
export const revalidate = false; // no ISR

// ❌ do NOT export: runtime = "edge"
// ❌ do NOT call cookies(), headers(), unstable_noStore(), etc.

const SLUGS = [
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
] as const;

type Neighborhood = (typeof SLUGS)[number];

export function generateStaticParams() {
  return SLUGS.map((neighborhood) => ({ neighborhood }));
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

export default function Page({ params }: { params: { neighborhood: string } }) {
  const slug = params.neighborhood;
  if (!SLUGS.includes(slug as Neighborhood)) notFound();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Popcorn Ceiling Removal in {titleFromSlug(slug)}
      </h1>
      <p style={{ marginBottom: 16 }}>
        We service {titleFromSlug(slug)} with dust-controlled popcorn ceiling
        removal.
      </p>
      <a
        href="/get-quote"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: 10,
          background: "black",
          color: "white",
          textDecoration: "none",
        }}
      >
        Get a Quote
      </a>
    </main>
  );
}
