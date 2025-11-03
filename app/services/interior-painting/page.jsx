import Link from "next/link";
import Script from "next/script";
import ServiceGallery from "@/components/ServiceGallery";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Interior Painting in Calgary — Clean Lines, Durable Finishes",
  description:
    "Interior painting in Calgary: ceilings, walls, trim, and doors with premium primers and paints. Clean lines, smooth finishes, dust‑smart prep, and tidy job sites. Same‑week quotes.",
  openGraph: {
    title: "Interior Painting in Calgary — Clean Lines, Durable Finishes",
    description:
      "Professional interior painting across Calgary. Careful prep, straight cut lines, durable finishes, and reliable schedules.",
    type: "article",
  },
  alternates: { canonical: "/services/painting/" },
};

const IMAGES = [
  "/images/services/painting/1.jpg",
  "/images/services/painting/2.jpg",
  "/images/services/painting/3.jpg",
];

// Shared CTA styles to match front page (brand red buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const city = SITE?.city || "Calgary";
  const brand = SITE?.brand || "Painting Pro";
  const phoneHref = SITE?.phoneHref || "tel:+1";
  const phone = SITE?.phone || "(000) 000‑0000";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Painting",
    serviceType: "Residential painting",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: { "@type": "LocalBusiness", name: brand, telephone: phone },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many coats do you apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most walls receive two finish coats over primer as needed. Trim and doors are finished for durability and smoothness.",
        },
      },
      {
        "@type": "Question",
        name: "Will there be strong paint smells?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can use low‑VOC paints on request and ventilate work areas. Smell is typically minimal and fades after drying.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with color matching?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can match existing colors or apply sample patches so you can see options in your light.",
        },
      },
      {
        "@type": "Question",
        name: "Do you move furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We ask that smaller items be cleared before arrival. We can assist with larger pieces and will protect floors and furnishings.",
        },
      },
    ],
  };

  return (
    <section className="container-x py-12">
      {/* JSON‑LD for Service + FAQ */}
      <Script id="painting-service-ld" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="painting-faq-ld" type="application/ld+json">
        {JSON.stringify(jsonLdFAQ)}
      </Script>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/80 via-white to-white" />
        <div className="px-6 py-10 md:px-10 md:py-14">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-ink/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />{" "}
            Clean lines • Durable finishes • Low‑VOC options
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Interior Painting in {city}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
            Ceilings, walls, trim, and doors painted with premium primers and
            paints. Careful prep, straight cut‑lines, and smooth, even coverage
            for a fresh, modern look.
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
              title: "Ceilings, Walls & Trim",
              desc: "Crisp cut‑lines, smooth rolling, consistent sheen.",
            },
            {
              title: "Prep That Matters",
              desc: "Filling, sanding, caulking, and proper priming where needed.",
            },
            {
              title: "Durable Finishes",
              desc: "Premium paints for scuff resistance and washability.",
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

      {/* WHAT WE PAINT & PREP */}
      <div className="prose mt-10">
        <h2>What We Paint &amp; How We Prep</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ul>
            <li>
              <strong>Surfaces:</strong> ceilings, walls, trim, doors, and
              feature walls.
            </li>
            <li>
              <strong>Repairs:</strong> nail pops, cracks, dents, minor drywall
              repairs before painting.
            </li>
            <li>
              <strong>Priming:</strong> stain‑blocking, color‑to‑color changes,
              and fresh drywall priming.
            </li>
          </ul>
          <ul>
            <li>
              <strong>Detailing:</strong> sanding, caulking, and sharp cut‑lines
              for a professional edge.
            </li>
            <li>
              <strong>Finishes:</strong> matte, eggshell, satin, semi‑gloss
              depending on room use.
            </li>
            <li>
              <strong>Low‑VOC options:</strong> ask for low‑odor paints for
              sensitive spaces.
            </li>
          </ul>
        </div>
      </div>

      {/* PROCESS */}
      <div className="mt-10">
        <div className="prose">
          <h2>Our Calgary‑Proven Painting Process</h2>
        </div>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Protect & Prep",
              d: "Floors covered; fixtures masked; light drywall fixes.",
            },
            {
              n: "02",
              t: "Prime",
              d: "As needed for adhesion, stain blocking, or color change.",
            },
            {
              n: "03",
              t: "Cut & Roll",
              d: "Straight cut‑lines, even rolling, correct mil thickness.",
            },
            {
              n: "04",
              t: "Second Coat",
              d: "Uniform color and sheen; detail checks.",
            },
            {
              n: "05",
              t: "Cleanup",
              d: "Masking removed, rooms tidied, and a final walkthrough.",
            },
            {
              n: "06",
              t: "Optional Trim/Door Finish",
              d: "Durable enamel for high‑touch areas.",
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
        <h2>Painting FAQs</h2>
        <details>
          <summary>How long does a typical room take?</summary>
          <p>
            Most single rooms can be completed in 1–2 days depending on prep and
            drying times. Whole‑home projects are scheduled in phases.
          </p>
        </details>
        <details>
          <summary>Do you help with color selection?</summary>
          <p>
            Yes—bring inspiration photos and we’ll apply test patches so you can
            see colors in your light.
          </p>
        </details>
        <details>
          <summary>Can you paint ceilings and trim too?</summary>
          <p>
            Absolutely. We can paint ceilings first, then walls and trim/doors
            for a complete finish.
          </p>
        </details>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">
              Ready for a fresh, modern finish in {city}?
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
