import Link from "next/link";
import Script from "next/script";
import ServiceGallery from "@/components/ServiceGallery";
import { SITE } from "@/data/site";

export const metadata = {
  title:
    "Drywall Installation & Repair in Calgary — Smooth, Paint‑Ready Results",
  description:
    "Drywall installation and repair in Calgary: basements, ceilings, water damage, patch & match, taping, mudding, sanding, and Level 5 smooth finishes. Same‑week quotes and clean dust control.",
  openGraph: {
    title:
      "Drywall Installation & Repair in Calgary — Smooth, Paint‑Ready Results",
    description:
      "Drywall pros serving all Calgary neighbourhoods. Clean prep, dust control, smooth finishes, and on‑time results.",
    type: "article",
  },
  alternates: { canonical: "/services/drywall/" },
};

const IMAGES = [
  "/images/services/drywall/1.jpg",
  "/images/services/drywall/2.jpg",
  "/images/services/drywall/3.jpg",
];

// Shared CTA styles to match front page (brand red buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30 active:opacity-100";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const city = SITE?.city || "Calgary";
  const brand = SITE?.brand || "Drywall Pro";
  const phoneHref = SITE?.phoneHref || "tel:+1";
  const phone = SITE?.phone || "(000) 000‑0000";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drywall Installation & Repair",
    serviceType: "Drywall services",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: { "@type": "LocalBusiness", name: brand, telephone: phone },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you start my drywall project in Calgary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most small and medium drywall repairs can be scheduled within a few days. Full installations are typically booked within 1–2 weeks, depending on scope.",
        },
      },
      {
        "@type": "Question",
        name: "Do you control dust during sanding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We protect floors and furniture and use smart dust‑control practices. We sand to a smooth, paint‑ready finish.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match existing textures and corners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We handle knockdown, orange peel, and smooth finishes, plus crisp corners with beads where needed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you paint after drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we can prime and paint after drywall so you get one clean, continuous finish.",
        },
      },
      {
        "@type": "Question",
        name: "Is a permit required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small repairs usually don’t need permits. For larger renovations or basement developments, we follow local rules and can coordinate if needed.",
        },
      },
    ],
  };

  return (
    <section className="container-x py-12">
      {/* JSON-LD for Service + FAQ */}
      <Script id="drywall-service-ld" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="drywall-faq-ld" type="application/ld+json">
        {JSON.stringify(jsonLdFAQ)}
      </Script>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/70 via-white to-white" />
        <div className="px-6 py-10 md:px-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-ink/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
            Same‑week quotes • Dust control • Level 5 smooth
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Drywall Installation &amp; Repair in {city}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
            Clean prep, straight boards, tight seams, careful sanding, and a
            smooth, paint‑ready finish. From small patches to full room installs
            — we make walls and ceilings look brand new.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={phoneHref} className={BTN}>
              Call {phone}
            </a>
            <Link href="/quote/" className={BTN}>
              Get a fast quote
            </Link>
            <span className="text-xs text-muted">
              No pressure • Straight pricing • Clean job
            </span>
          </div>
        </div>

        {/* QUICK HIGHLIGHTS */}
        <div className="grid gap-3 border-t bg-white/70 p-4 md:grid-cols-3 md:p-6">
          {[
            {
              title: "Repairs & Patch‑Match",
              desc: "Water damage, cracks, dents, bad seams, corners.",
            },
            {
              title: "Installations",
              desc: "Basements, ceilings, partitions, bulkheads, features.",
            },
            {
              title: "Prime & Paint",
              desc: "Optional finishing for one continuous result.",
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

      {/* WHAT WE FIX */}
      <div className="prose mt-10">
        <h2>What We Fix &amp; Build</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ul>
            <li>
              <strong>Repairs &amp; patching:</strong> water damage, popped
              screws, dents, holes, bad seams, corner beads.
            </li>
            <li>
              <strong>Ceiling work:</strong> smooth finish or matching
              knockdown/orange‑peel textures; pot‑light changes.
            </li>
            <li>
              <strong>Level 5 smooth:</strong> skim coat for ultra‑flat, premium
              paint results.
            </li>
          </ul>
          <ul>
            <li>
              <strong>Installations:</strong> basements, new rooms, bulkheads,
              sound‑reducing assemblies.
            </li>
            <li>
              <strong>Taping &amp; mudding:</strong> crisp seams, tight corners,
              consistent coats and sanding.
            </li>
            <li>
              <strong>Prime &amp; paint:</strong> optional finishing for a
              single, clean hand‑off.
            </li>
          </ul>
        </div>
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
              t: "Quick Quote",
              d: "Text photos or request a visit. We confirm scope, schedule, and prep.",
            },
            {
              n: "02",
              t: "Protect & Prep",
              d: "Floors and fixtures covered. Clean cuts and framing as needed.",
            },
            {
              n: "03",
              t: "Install & Fasten",
              d: "Straight boards, proper spacing and fastening for longevity.",
            },
            {
              n: "04",
              t: "Tape & Mud",
              d: "Tight seams, corners, beads; consistent coats for a flat plane.",
            },
            {
              n: "05",
              t: "Sand & Check",
              d: "Smooth, paint‑ready surface; light checks under raking light.",
            },
            {
              n: "06",
              t: "Prime & Finish",
              d: "Optional painting to wrap your project cleanly.",
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
          <a href={phoneHref} className={BTN}>
            Call {phone}
          </a>{" "}
          and we’ll confirm right away.
        </p>
      </div>

      {/* FAQ */}
      <div className="prose mt-10">
        <h2>Drywall FAQs</h2>
        <details>
          <summary>How long does a typical repair take?</summary>
          <p>
            Small patches are often completed in a day or two. Larger installs
            run several days to allow proper drying between coats.
          </p>
        </details>
        <details>
          <summary>Will the repair be invisible after painting?</summary>
          <p>
            That’s our goal. With proper prep, taping, mudding, and sanding, the
            surface blends in once primed and painted.
          </p>
        </details>
        <details>
          <summary>
            Can you coordinate around lighting or framing changes?
          </summary>
          <p>
            Yes—we can plan drywall work around pot‑light changes or minor
            framing adjustments to keep your project moving smoothly.
          </p>
        </details>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">
              Ready for smooth, paint‑ready drywall in {city}?
            </p>
            <p className="text-sm text-muted">
              Clear pricing, tidy work, and on‑time results from a Calgary crew.
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
