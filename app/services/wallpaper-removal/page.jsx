import Link from "next/link";
import Script from "next/script";
import ServiceGallery from "@/components/ServiceGallery";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Wallpaper Removal in Calgary — Clean, Paint‑Ready Walls",
  description:
    "Wallpaper removal in Calgary with safe stripping, adhesive cleanup, wall repairs, skim coat, sanding, and primer for a smooth, paint‑ready surface. Same‑week quotes.",
  openGraph: {
    title: "Wallpaper Removal in Calgary — Clean, Paint‑Ready Walls",
    description:
      "Careful removal, glue removal, patch & skim, detail sanding, and primer. Calgary crew with tidy prep and straight pricing.",
    type: "article",
  },
  alternates: { canonical: "/services/wallpaper/" },
};

const IMAGES = [
  "/images/services/wallpaper/1.jpg",
  "/images/services/wallpaper/2.jpg",
  "/images/services/wallpaper/3.jpg",
];

// Shared CTA styles to match front page (brand red buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const city = SITE?.city || "Calgary";
  const brand = SITE?.brand || "Wallpaper Removal Pro";
  const phoneHref = SITE?.phoneHref || "tel:+1";
  const phone = SITE?.phone || "(000) 000‑0000";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wallpaper Removal",
    serviceType: "Wallcovering removal",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: { "@type": "LocalBusiness", name: brand, telephone: phone },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will wallpaper removal damage my drywall or plaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We test first, then use the right method (scoring, soak, steamer, or enzyme). We patch, skim, and sand as needed so the surface is smooth and paint‑ready.",
        },
      },
      {
        "@type": "Question",
        name: "How messy is the process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We protect floors and fixtures, control moisture, bag debris, and leave the space tidy. Adhesive is removed before priming.",
        },
      },
      {
        "@type": "Question",
        name: "Do you prime after removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We apply the correct primer (often acrylic bonding or stain‑blocking) after glue removal and repairs so the wall is ready for paint.",
        },
      },
      {
        "@type": "Question",
        name: "Can you also paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We can prime and paint right after removal for a single, clean hand‑off.",
        },
      },
    ],
  };

  return (
    <section className="container-x py-12">
      {/* JSON‑LD for Service + FAQ */}
      <Script id="wallpaper-service-ld" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="wallpaper-faq-ld" type="application/ld+json">
        {JSON.stringify(jsonLdFAQ)}
      </Script>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/80 via-white to-white" />
        <div className="px-6 py-10 md:px-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-ink/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />{" "}
            Glue removal • Skim coat • Paint‑ready
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Wallpaper Removal in {city}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
            We carefully remove wallpaper, clean adhesive, repair surface
            defects, skim and sand, and apply the right primer so walls are
            smooth and ready for fresh paint.
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
              title: "Adhesive Removal",
              desc: "Proper cleanup so paint adheres and sheens stay even.",
            },
            {
              title: "Repairs & Skim",
              desc: "Fix torn paper, dings, seams; skim for a uniform plane.",
            },
            {
              title: "Right Primer",
              desc: "Bonding or stain‑blocking primer matched to your surface.",
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

      {/* WHAT WE DO */}
      <div className="prose mt-10">
        <h2>What We Remove &amp; How We Prep</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ul>
            <li>
              <strong>Types:</strong> traditional paper, vinyl, fabric,
              peel‑&‑stick, and multi‑layer wallcoverings.
            </li>
            <li>
              <strong>Methods:</strong> scoring, soak and scrape, steamer,
              enzyme‑based removers.
            </li>
            <li>
              <strong>Repairs:</strong> torn paper fixes, skim coating, corner
              bead touch‑ups.
            </li>
          </ul>
          <ul>
            <li>
              <strong>Adhesive cleanup:</strong> remove paste residue to prevent
              flashing and peeling.
            </li>
            <li>
              <strong>Priming:</strong> bonding/stain‑blockers suited to drywall
              or plaster.
            </li>
            <li>
              <strong>Paint‑ready:</strong> we can roll primer and finish coats
              for a single hand‑off.
            </li>
          </ul>
        </div>
      </div>

      {/* PROCESS */}
      <div className="mt-10">
        <div className="prose">
          <h2>Our Calgary‑Proven Removal Process</h2>
        </div>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Protect & Test",
              d: "Cover floors & fixtures, test a section to choose the safest method.",
            },
            {
              n: "02",
              t: "Strip",
              d: "Score as needed; soak/steam to release; careful scraping.",
            },
            {
              n: "03",
              t: "Glue Cleanup",
              d: "Remove paste residue so primer and paint bond properly.",
            },
            {
              n: "04",
              t: "Repairs",
              d: "Patch defects, fix torn paper, skim for a uniform plane.",
            },
            {
              n: "05",
              t: "Detail Sand",
              d: "Smooth and check under raking light.",
            },
            {
              n: "06",
              t: "Prime & Paint‑Ready",
              d: "Bonding/stain‑blocking primer applied; ready for color.",
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
        <h2>Wallpaper Removal FAQs</h2>
        <details>
          <summary>Can you remove stubborn vinyl or multiple layers?</summary>
          <p>
            Yes. We test and choose the safest approach (often scoring and
            controlled steam) to release layers without gouging the substrate.
          </p>
        </details>
        <details>
          <summary>Will the wall be ready for paint when you leave?</summary>
          <p>
            Yes—after glue cleanup, repairs, skim and sanding, we can prime the
            walls so they are paint‑ready or we can finish the paint for you.
          </p>
        </details>
        <details>
          <summary>Is there a lot of odor?</summary>
          <p>
            We ventilate and choose modern removers with low odor. Any smell
            dissipates after drying and priming.
          </p>
        </details>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">
              Ready to reveal smooth, paint‑ready walls in {city}?
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
