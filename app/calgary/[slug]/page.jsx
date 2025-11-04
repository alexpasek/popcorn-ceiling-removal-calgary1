// app/calgary/[slug]/page.jsx
import Link from "next/link";
import Script from "next/script";
import { SITE } from "@/data/site";

// Edit this list to match your grid on the home page
const NEIGHBOURHOODS = [
  "Beltline",
  "Kensington",
  "Bridgeland",
  "Inglewood",
  "Mission",
  "Marda Loop",
  "Altadore",
  "Mount Royal",
  "Signal Hill",
  "West Springs",
  "Tuscany",
  "Arbour Lake",
  "Varsity",
  "Brentwood",
  "Bowness",
  "Panorama Hills",
  "Evergreen",
  "Shawnessy",
  "Somerset",
  "Mahogany",
  "Auburn Bay",
  "Cranston",
  "Seton",
  "McKenzie Towne",
  "McKenzie Lake",
];

const SLUG_ALIASES = {
  "marda-loop": "Marda Loop",
  "mckenzie-towne": "McKenzie Towne",
  "mckenzie-lake": "McKenzie Lake",
};

const toSlug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const fromSlug = (slug) =>
  SLUG_ALIASES[slug] ||
  slug
    .split("-")
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");

// Prebuild neighbourhood pages so they don’t 404 on static deploys
export async function generateStaticParams() {
  return NEIGHBOURHOODS.map((n) => ({ slug: toSlug(n) }));
}

// Shared CTA (force brand-red so globals can’t turn it black)
const BTN =
  "inline-flex items-center justify-center rounded-xl !bg-red-600 !text-white px-4 py-2 font-semibold shadow-sm transition hover:!bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:!ring-red-600/30";

export async function generateMetadata({ params }) {
  const area = fromSlug(params.slug);
  const city = SITE?.city || "Calgary";
  return {
    title: `${area} — Popcorn Ceiling Removal, Drywall & Painting in ${city}`,
    description: `Serving ${area}, ${city}: popcorn ceiling removal, drywall installation & repair, wallpaper removal, and interior painting with clean prep and dust control.`,
    alternates: { canonical: `/calgary/${params.slug}/` },
    openGraph: {
      title: `${area} — Popcorn Ceiling Removal, Drywall & Painting in ${city}`,
      description: `Smooth ceilings and clean walls in ${area}. Dust control, tidy prep, Level 5 smooth options, and on-time results.`,
      type: "article",
    },
  };
}

export default function Page({ params }) {
  const area = fromSlug(params.slug);
  const city = SITE?.city || "Calgary";
  const phone = SITE?.phone || "+1 (825) 365-3770";
  const phoneHref = SITE?.phoneHref || "tel:+18253653770";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Home finishing services in ${area}`,
    areaServed: { "@type": "AdministrativeArea", name: `${area}, ${city}` },
    provider: {
      "@type": "LocalBusiness",
      name: SITE?.brand || "EPF Pro Services",
      telephone: phone,
    },
  };

  return (
    <section className="container-x py-12">
      <Script id="neighbourhood-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Breadcrumbs */}
      <nav className="text-sm text-muted">
        <Link href="/">Home</Link>
        <span className="px-1">/</span>
        <Link href="/calgary/">Calgary</Link>
        <span className="px-1">/</span>
        <span className="text-ink">{area}</span>
      </nav>

      {/* Force readable text colors in prose */}
      <div className="prose max-w-none mt-4 prose-headings:text-ink prose-p:text-ink prose-strong:text-ink">
        <h1>{area} — Popcorn Ceiling Removal, Drywall &amp; Painting</h1>
        <p>
          We serve {area} with clean, modern finishes:{" "}
          <Link
            href="/services/popcorn-ceiling-removal-calgary"
            className="link-primary"
          >
            popcorn ceiling removal
          </Link>
          ,{" "}
          <Link href="/services/drywall-installation" className="link-primary">
            drywall installation &amp; repair
          </Link>
          ,{" "}
          <Link href="/services/wallpaper-removal" className="link-primary">
            wallpaper removal
          </Link>
          , and{" "}
          <Link href="/services/interior-painting" className="link-primary">
            interior painting
          </Link>
          . Expect dust control, careful prep, and a smooth, paint-ready result.
        </p>
        <ul>
          <li>
            <strong>Dust-smart methods:</strong> sealed work areas, protected
            floors, and proper ventilation.
          </li>
          <li>
            <strong>Level 5 smooth (optional):</strong> skim coat and detail
            sanding for ultra-flat ceilings and walls.
          </li>
          <li>
            <strong>One-team convenience:</strong> prime and paint options after
            repairs and installs.
          </li>
        </ul>
      </div>

      {/* CTAs */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={phoneHref} className={BTN}>
          Call {phone}
        </a>
        <Link href="/quote/" className={BTN}>
          Get a fast quote
        </Link>
      </div>

      {/* Extra local copy */}
      <div className="prose max-w-none mt-10 prose-headings:text-ink prose-p:text-ink">
        <h2>Working Around {area}</h2>
        <p>
          We regularly work in and around {area}, including nearby communities
          like Kensington, Bridgeland, Inglewood, Mission, West Springs,
          Tuscany, and Cranston. If you have lighting updates or small framing
          changes, we schedule drywall and ceiling work to keep your project
          moving.
        </p>
        <h3>Popular Services in {area}</h3>
        <ul>
          <li>
            <Link
              href="/services/popcorn-ceiling-removal-calgary"
              className="link-primary"
            >
              Popcorn ceiling removal
            </Link>{" "}
            with skim coat and primer for a modern, smooth look.
          </li>
          <li>
            <Link
              href="/services/drywall-installation"
              className="link-primary"
            >
              Drywall repair
            </Link>{" "}
            for cracks, seams, and water damage; full installs for basements and
            renovations.
          </li>
          <li>
            <Link href="/services/wallpaper-removal" className="link-primary">
              Wallpaper removal
            </Link>{" "}
            with adhesive cleanup and the right primer.
          </li>
          <li>
            <Link href="/services/interior-painting" className="link-primary">
              Interior painting
            </Link>{" "}
            with straight cut-lines and durable finishes.
          </li>
        </ul>
      </div>
    </section>
  );
}
