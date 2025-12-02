import Link from "next/link";
import Script from "next/script";
import ServiceGallery from "@/components/ServiceGallery";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Popcorn Ceiling Removal in Calgary — Clean, Smooth, Paint‑Ready",
  description:
    "Popcorn ceiling removal in Calgary with dust control, full protection, skim coat, detail sanding, and primer for a smooth, paint‑ready finish. Same‑week quotes.",
  openGraph: {
    title: "Popcorn Ceiling Removal in Calgary — Clean, Smooth, Paint‑Ready",
    description:
      "Multi‑step popcorn removal with clean prep, dust control, and Level 5 smooth options. Serving all Calgary neighbourhoods.",
    type: "article",
  },
  alternates: { canonical: "/services/popcorn-ceiling-removal-calgary" },
};

const IMAGES = [
  "/images/services/popcorn/1.jpg",
  "/images/services/popcorn/2.jpg",
  "/images/services/popcorn/3.jpg",
];

// Shared CTA styles to match front page (brand red buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const city = SITE?.city || "Calgary";
  const brand = SITE?.brand || "Popcorn Ceiling Removal Pro";
  const phoneHref = SITE?.phoneHref || "tel:+1";
  const phone = SITE?.phone || "(000) 000‑0000";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Popcorn Ceiling Removal",
    serviceType: "Ceiling texture removal",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: { "@type": "LocalBusiness", name: brand, telephone: phone },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does popcorn ceiling removal take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most rooms are completed within 1–2 days including drying times; larger areas and repairs may take longer.",
        },
      },
      {
        "@type": "Question",
        name: "Do you control dust and protect the home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We seal off spaces, protect floors and fixtures with poly and tape, and use wet‑scrape and dust‑smart methods.",
        },
      },
      {
        "@type": "Question",
        name: "What about asbestos testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your home was built before the early 1990s, testing may be recommended depending on local rules. We can pause and you can arrange testing before any disturbance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you paint after removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we can prime and paint after skim coating and sanding so you get a continuous, clean finish.",
        },
      },
    ],
  };

  return (
    <section className="container-x py-12">
      {/* JSON‑LD for Service + FAQ */}
      <Script id="popcorn-service-ld" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="popcorn-faq-ld" type="application/ld+json">
        {JSON.stringify(jsonLdFAQ)}
      </Script>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/80 via-white to-white" />
        <div className="px-6 py-10 md:px-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-ink/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />{" "}
            Dust control • Skim coat • Paint‑ready
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Popcorn Ceiling Removal in {city}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
            Our clean, multi‑step process leaves ceilings smooth and
            paint‑ready. We seal, wet‑scrape to minimize dust, skim coat, detail
            sand, and prime for a fresh, modern look.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={phoneHref} className={BTN}>
              Call {phone}
            </a>
            <Link href="/quote/" className={BTN}>
              Get a fast quote
            </Link>
            <span className="text-xs text-muted">
              Straight pricing • Tidy work • Calgary crew
            </span>
          </div>
        </div>

        {/* QUICK HIGHLIGHTS */}
        <div className="grid gap-3 border-t bg-white/70 p-4 md:grid-cols-3 md:p-6">
          {[
            {
              title: "Full Protection",
              desc: "Poly + tape, fixtures covered; vents sealed.",
            },
            {
              title: "Wet‑Scrape Method",
              desc: "Minimizes dust while removing texture.",
            },
            {
              title: "Level 5 Smooth",
              desc: "Skim coat + detail sanding for premium finish.",
            },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-10">
        <ServiceGallery images={IMAGES} />
      </div>

      {/* PROCESS */}
      <div className="mt-10">
        <div className="prose">
          <h2>Our Calgary‑Proven Process</h2>
        </div>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Protection",
              d: "Poly & tape; vents sealed; fixtures covered.",
            },
            {
              n: "02",
              t: "Wet‑Scrape",
              d: "Removes texture while minimizing dust.",
            },
            {
              n: "03",
              t: "Repairs",
              d: "Fill, patch, and corner/bead fixes as needed.",
            },
            {
              n: "04",
              t: "Skim Coat",
              d: "Creates a uniform plane for smooth results.",
            },
            {
              n: "05",
              t: "Detail Sanding",
              d: "Checks under raking light for flatness.",
            },
            {
              n: "06",
              t: "Prime & Paint‑Ready",
              d: "Primer applied; ready for finishing paint.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border p-5 shadow-sm">
              <div className="text-xs font-bold text-muted">{s.n}</div>
              <div className="mt-1 text-lg font-semibold text-ink">{s.t}</div>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* LOCAL AREAS */}
      <div className="prose mt-10">
        <h2>Serving All {city} Neighbourhoods</h2>
        <p>
          We work across {city}, including Beltline, Kensington (Hillhurst /
          Sunnyside), Bridgeland, Inglewood, Mission, Marda Loop / Altadore,
          Mount Royal, Signal Hill, West Springs, Tuscany, Arbour Lake, Varsity,
          Brentwood, Bowness, Panorama Hills, Evergreen, Shawnessy, Somerset,
          Mahogany, Auburn Bay, Cranston, Seton, McKenzie Towne, McKenzie Lake,
          and more.
        </p>
        <p>
          Not sure if we cover your area?{" "}
          <a href={phoneHref} className="link-primary">
            Call {phone}
          </a>{" "}
          and we’ll confirm right away.
        </p>
      </div>

      {/* FAQ (onsite visible) */}
      <div className="prose mt-10">
        <h2>Popcorn Removal FAQs</h2>
        <details>
          <summary>Is this messy?</summary>
          <p>
            We prepare and seal the work area and use wet‑scrape and dust‑smart
            methods. Cleanup is part of our process.
          </p>
        </details>
        <details>
          <summary>Can you paint after removal?</summary>
          <p>
            Yes. We can prime and paint so you get a single, clean hand‑off.
          </p>
        </details>
        <details>
          <summary>What if I suspect asbestos?</summary>
          <p>
            If your home is older, testing may be recommended before disturbance
            depending on local rules. If needed, we pause and you can arrange
            testing.
          </p>
        </details>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">
              Ready for smooth, modern ceilings in {city}?
            </p>
            <p className="text-sm text-muted">
              Straight pricing, tidy work, and on‑time results from a Calgary
              crew.
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
      </div>
    </section>
  );
}
