// app/services/knockdown-ceiling-repair/page.jsx
// "Same or better" than deployed page — SEO + sales oriented
// - Strong metadata
// - JSON-LD: Service, HowTo (process), FAQPage, BreadcrumbList
// - Tailwind styling
// - Only working internal links: /quote, /services/*
// - Replace the image src with your real photo(s)

import Link from "next/link";

export const metadata = {
  title:
    "Knockdown Ceiling Repair — Calgary | Texture Matching, Water Damage Fix",
  description:
    "Professional knockdown ceiling repair in Calgary: water stains, cracks, pot‑light holes, texture mismatch. Dust‑controlled, paint‑ready. Fast quotes.",
  alternates: { canonical: "/services/knockdown-ceiling-repair" },
  openGraph: {
    title: "Knockdown Ceiling Repair — Calgary",
    description:
      "Seamless knockdown texture repairs: patch, blend, prime & paint with HEPA dust control. Get a fast quote today.",
    url: "/services/knockdown-ceiling-repair",
    type: "article",
  },
};

export default function KnockdownRepairPage() {
  const PHONE_NUMBER =
    process.env.NEXT_PUBLIC_PHONE_NUMBER || "(825) 365-3770";
  const PHONE_HREF = "tel:" + PHONE_NUMBER.replace(/[^0-9]/g, "");

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Knockdown ceiling repair",
    areaServed: { "@type": "City", name: "Calgary, AB" },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Popcorn Ceiling Removal Calgary",
      telephone: PHONE_NUMBER,
      url: "https://popcorn-ceiling-removal-calgaryfinal.pages.dev/",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ceiling & Interior Finishes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Knockdown texture patch & blend",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water‑stain cut‑out + stain‑block prime",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prime & paint finish coat",
          },
        },
      ],
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How we repair knockdown ceilings",
    supply: [
      { "@type": "HowToSupply", name: "Drywall patch" },
      { "@type": "HowToSupply", name: "Joint compound" },
      { "@type": "HowToSupply", name: "Primer & ceiling paint" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Taping knives & hawk" },
      { "@type": "HowToTool", name: "Texture sprayer / knockdown knife" },
      { "@type": "HowToTool", name: "HEPA dust control" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Protect",
        text: "Cover floors, fixtures, and vents; set up containment.",
      },
      {
        "@type": "HowToStep",
        name: "Remove",
        text: "Cut out failed areas and loose texture.",
      },
      {
        "@type": "HowToStep",
        name: "Rebuild",
        text: "Patch drywall, tape, and skim for flatness.",
      },
      {
        "@type": "HowToStep",
        name: "Re‑texture",
        text: "Match knockdown pattern/thickness and feather edges.",
      },
      {
        "@type": "HowToStep",
        name: "Prime & paint",
        text: "Stain‑block prime and finish coat to uniform sheen.",
      },
      {
        "@type": "HowToStep",
        name: "Final tidy",
        text: "Cleanup and walk‑through.",
      },
    ],
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Services", item: "/services" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Knockdown Ceiling Repair",
        item: "/services/knockdown-ceiling-repair",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you match my existing knockdown texture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We dial in the pattern and thickness with small test samples, then feather into the surrounding field for an invisible blend.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle water stains and leaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After the leak is fixed, we cut out compromised board, patch, re‑texture, and use a stain‑blocking primer so yellowing doesn’t return.",
        },
      },
      {
        "@type": "Question",
        name: "How messy is it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We isolate work zones with poly, protect floors, and use HEPA dust control. We tidy before we leave.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small patches are often same‑day. Larger repairs may take 1–2 visits for drying and paint.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — optional prime and finish coat for a uniform, bright ceiling.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium text-slate-600">
              Ceiling Texture Specialists
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">
              Knockdown Ceiling Repair in{" "}
              <span className="text-red-600">Calgary</span>
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Water stains, cracks, pot‑light cutouts, or texture mismatch — we
              blend knockdown ceilings so the patch disappears. Dust‑controlled.
              Paint‑ready. Clear pricing.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
              {[
                "Licensed & Insured",
                "HEPA Dust Control",
                "Texture Match Guarantee",
                "Itemized Quotes",
              ].map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
              >
                Get My Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-slate-300 text-slate-800 hover:bg-slate-50"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            {/* Replace with your real knockdown repair image */}
            <img
              src="/images/images/knockdown/hero-knockdown.jpg" ///Users/alex/popcorn-ceiling-removal-calgary1/public/images/images/knockdown/hero-knockdown.jpg
              alt="Knockdown ceiling repair in Calgary — technician blending the texture"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE REPAIR */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">What we repair</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-800">
            {[
              [
                "Water stains & leaks",
                "Cut‑out + patch, stain‑block primer, knockdown re‑texture, paint to uniform finish.",
              ],
              [
                "Cracks & joints",
                "Stabilize substrate, tape & mud, re‑texture to match thickness and pattern.",
              ],
              [
                "Pot light / electrical",
                "Patch holes after new pot lights or fixture moves; can coordinate electrician.",
              ],
              [
                "Texture mismatch",
                "Blend feathered texture into existing field so the transition is invisible.",
              ],
              [
                "Holes & dents",
                "From small dents to large cut‑outs; rebuild, sand with HEPA, and re‑texture.",
              ],
              [
                "Yellowing / smoke",
                "Clean, seal, and repaint for a bright, even ceiling tone.",
              ],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="font-medium">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-12 lg:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Our repair process
          </h2>

          <ol className="mt-6 grid lg:grid-cols-6 gap-4 text-slate-700">
            {[
              ["Protect", "Floor protection, poly containment, vent masking."],
              ["Remove", "Cut out failed areas and loose texture."],
              ["Rebuild", "Patch drywall, tape, and skim for flatness."],
              [
                "Re‑texture",
                "Match knockdown pattern and thickness; feather edges.",
              ],
              ["Prime", "Stain‑block and unify the surface."],
              ["Paint", "Consistent sheen and color across the repair."],
            ].map(([title, copy], i) => (
              <li
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="text-sm text-slate-500">Step {i + 1}</div>
                <div className="mt-1 font-medium">{title}</div>
                <p className="mt-2 text-sm leading-relaxed">{copy}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Start my quote
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING GUIDE */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Typical pricing
          </h2>
          <p className="mt-3 text-slate-700">
            Share a photo and rough dimensions for a quick, accurate quote.
          </p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              [
                "Small patch",
                "$150–$350",
                "Single spot repair (e.g., small leak or dent).",
              ],
              [
                "Medium repair",
                "$350–$750",
                "Multiple patches or larger cut‑outs; blending and paint.",
              ],
              [
                "Large repair",
                "Custom",
                "Extensive water damage or many fixtures; priced from photos.",
              ],
            ].map(([tier, price, desc]) => (
              <div
                key={tier}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="text-sm text-slate-500">{tier}</div>
                <div className="mt-1 font-semibold">{price}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Get pricing & dates
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES (existing routes only) */}
      <section className="bg-slate-50 py-12 lg:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Related Calgary services
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-800">
            {[
              ["Popcorn Ceiling Removal", "/services/popcorn-ceiling-removal"],
              [
                "Drywall Installation & Repair",
                "/services/drywall-installation",
              ],
              ["Ceiling & Interior Painting", "/services/interior-painting"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="underline hover:no-underline">
                  {label} — Learn more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ (visible content mirrors JSON-LD) */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {[
              [
                "What is knockdown ceiling repair?",
                "We remove damaged areas, rebuild the substrate, and re‑apply a knockdown texture to match your existing pattern. Then we prime and paint for a uniform look.",
              ],
              [
                "Can you match my texture?",
                "Yes — we adjust thickness and pattern with tests before blending. The transition should be invisible from normal viewing height.",
              ],
              [
                "Is it messy?",
                "We set up containment, protect floors, and use HEPA dust control. We tidy the area before we leave.",
              ],
              [
                "How long does it take?",
                "Small patches are often same‑day; larger jobs may take 1–2 visits for drying and paint.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="font-medium">{q}</div>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Book knockdown repair
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
