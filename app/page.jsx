import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import ServiceCard from "@/components/ServiceCard";
import NeighborhoodGrid from "@/components/NeighborhoodGrid";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Popcorn Ceiling Removal Calgary | Smooth, Dust-Controlled Ceilings",
  description: SITE.description,
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Popcorn Ceiling Removal Calgary",
    description: SITE.description,
    url: SITE.domain,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title: "Popcorn Ceiling Removal Calgary",
    description: SITE.description,
  },
};


// Shared CTA styles (match front page brand buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl !bg-red-600 !text-white px-4 py-2 font-semibold shadow-sm transition hover:!bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:!ring-red-600/30";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const phoneHref = SITE?.phoneHref || "tel:+18253653770";
  const phone = SITE?.phone || "+1 (825) 365‑3770";
  const brand = SITE?.brand || "Popcorn Ceiling Removal Calgary";
  const city = SITE?.city || "Calgary";

  const aggregate = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#business`,
    name: brand,
    url: SITE.domain,
    telephone: phone,
    image: `${SITE.domain}/logo.jpg`,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE?.address?.street,
      addressLocality: SITE?.address?.city,
      addressRegion: SITE?.address?.region,
      postalCode: SITE?.address?.postalCode,
      addressCountry: SITE?.address?.country,
    },
    geo:
      SITE?.geo && typeof SITE.geo.lat === "number" && typeof SITE.geo.lng === "number"
        ? { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng }
        : undefined,
    areaServed: (SITE?.serviceAreas || []).map((name) => ({ "@type": "Place", name })),
    sameAs: Object.values(SITE?.socials || {}).filter(Boolean),
    openingHours: "Mo-Sa 08:00-18:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can you start in Calgary? ",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small and medium jobs are usually scheduled within a few days. Larger projects are typically booked within 1–2 weeks depending on scope.",
        },
      },
      {
        "@type": "Question",
        name: "Do you control dust and protect the home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We seal, cover floors and fixtures, and use dust‑smart methods for drywall, popcorn removal, and sanding.",
        },
      },
      {
        "@type": "Question",
        name: "Do you paint after drywall and popcorn removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we can prime and paint for a single, clean hand‑off so your space is fully finished.",
        },
      },
    ],
  };

  const neighbourhoods = [
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

  const toSlug = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      {/* JSON-LD */}
      <Script id="home-aggregate-ld" type="application/ld+json">
        {JSON.stringify(aggregate)}
      </Script>
      <Script id="home-faq-ld" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>
    
      {/* HERO (keep your existing hero component) */}
      <Hero />

      {/* TRUST STRIP / CTA BAR */}
      <section className="container-x py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold text-ink">
              4.9 ★★★★★ • Calgary homeowners
            </div>
            <div className="text-xs text-muted">
              Dust control • Level 5 smooth • On‑time results
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={phoneHref} className={BTN}>
              Call {phone}
            </a>
            <Link href="/quote/" className={BTN}>
              Get a fast quote
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID (internal links for SEO) */}
      <section className="container-x py-12">
        <h2 className="text-2xl font-bold text-ink">Our Services</h2>
        <p className="mt-2 max-w-3xl text-muted">
          We deliver smooth ceilings and clean finishes across {city}. Choose a
          service to learn more and see examples, pricing guidance, and FAQs.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Popcorn Ceiling Removal"
            href="/services/popcorn-ceiling-removal-calgary"
          >
            Clean scraping, skim coat, sanding & modern, paint‑ready ceilings.
          </ServiceCard>
          <ServiceCard
            title="Drywall Installation & Repair"
            href="/services/drywall-installation"
          >
            Full installs, patches, taping, mudding, sanding — paint‑ready.
          </ServiceCard>
          <ServiceCard
            title="Wallpaper Removal"
            href="/services/wallpaper-removal"
          >
            Safe stripping, adhesive cleanup, repairs, primer — paint‑ready.
          </ServiceCard>
          <ServiceCard
            title="Interior Painting"
            href="/services/interior-painting"
          >
            Ceilings, walls, trim & doors. Sharp cut‑lines, durable finishes.
          </ServiceCard>
          <ServiceCard
            title="Knockdown Ceiling Repair"
            href="/services/knockdown-ceiling-repair/"
          >
            Ceiling patching, re‑texturing, and blending for a seamless look.
          </ServiceCard>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="container-x py-12">
        <h2 className="text-2xl font-bold text-ink">Before & After</h2>
        <div className="mt-4 max-w-3xl mx-auto">
          <BeforeAfter
            before="/images/before-after/before.jpg"
            after="/images/before-after/after.jpg"
            alt="Popcorn ceiling before and smooth after"
          />
        </div>
      </section>

      {/* LOCAL SEO COPY WITH INTERNAL LINKS */}
      <section className="container-x py-12">
        <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-strong:text-ink">
          <h2>
            Calgary Popcorn Ceiling Removal, Drywall, and Painting — Done Right
          </h2>
          <p>
            We help {city} homeowners modernize their spaces with{" "}
            <Link href="/services/popcorn-ceiling-removal-calgary/" className="link-primary">
              popcorn ceiling removal
            </Link>
            ,{" "}
            <Link href="/services/drywall-installation/" className="link-primary">
              drywall installation & repair
            </Link>
            ,{" "}
            <Link href="/services/wallpaper-removal/" className="link-primary">
              wallpaper removal
            </Link>
            , and{" "}
            <Link href="/services/interior-painting/" className="link-primary">
              interior painting
            </Link>
            . Expect clean prep, dust‑smart sanding, straight lines, and a
            smooth, paint‑ready finish.
          </p>
          <p>
            From character homes in Kensington and Inglewood to newer builds in
            Mahogany and Cranston, our Calgary crew protects your home, keeps a
            tidy site, and communicates clearly so your project finishes on
            time.
          </p>
          <ul>
            <li>
              <strong>Dust control & protection:</strong> sealed areas, covered
              floors, and proper ventilation.
            </li>
            <li>
              <strong>Level 5 smooth options:</strong> skim coating for
              ultra‑flat ceilings and walls.
            </li>
            <li>
              <strong>One‑team convenience:</strong> prime and paint available
              after repairs and installs.
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESS CARDS */}
      <section className="container-x py-12">
        <h2 className="text-2xl font-bold text-ink">How We Work</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Quick Quote",
              d: "Text photos or book a visit; transparent pricing and schedule.",
            },
            {
              n: "02",
              t: "Protect & Prep",
              d: "Floors covered; fixtures masked; clean cut‑outs; tidy site.",
            },
            {
              n: "03",
              t: "Repair or Install",
              d: "Drywall, popcorn removal, wallpaper removal as needed.",
            },
            {
              n: "04",
              t: "Sand & Check",
              d: "Smooth, even surfaces; checks under raking light.",
            },
            {
              n: "05",
              t: "Prime & Paint",
              d: "Optional finishing for a single, clean hand‑off.",
            },
            {
              n: "06",
              t: "Walkthrough",
              d: "We review results with you and tidy up the space.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border p-5 shadow-sm">
              <div className="text-xs font-bold text-muted">{s.n}</div>
              <div className="mt-1 text-lg font-semibold text-ink">{s.t}</div>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>


      {/* REVIEWS PREVIEW */}
      <section className="container-x py-12">
        <h2 className="text-2xl font-bold text-ink">
          What Calgary Homeowners Say
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              q: "They removed popcorn in two days and left the place spotless. Ceilings look brand new.",
              n: "Sophie — Mahogany",
            },
            {
              q: "Drywall repair and painting were perfect. Communication was great throughout.",
              n: "Ryan — Kensington",
            },
            {
              q: "Wallpaper gone, walls primed and painted — fast and super clean work.",
              n: "Marta — Cranston",
            },
          ].map((r, i) => (
            <figure
              key={i}
              className="rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="text-amber-500">★★★★★</div>
              <blockquote className="mt-2 text-sm text-ink">{r.q}</blockquote>
              <figcaption className="mt-2 text-xs text-muted">{r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/*  popular NEIGHBOURHOOD GRID (your original component, keep for depth) */}
      <NeighborhoodGrid />

      {/* FINAL CTA */}
      <section className="container-x py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border bg-white p-6 shadow-sm">
          <div>
            <p className="text-lg font-semibold text-ink">
              Ready for smooth ceilings and clean finishes in {city}?
            </p>
            <p className="text-sm text-muted">
              Straight pricing • Tidy work • Calgary crew
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={phoneHref} className={BTN}>
              Call {phone}
            </a>
            <Link href="/quote/" className={BTN}>
              Get a fast quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
