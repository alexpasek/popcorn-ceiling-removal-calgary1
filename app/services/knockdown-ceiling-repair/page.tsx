// app/services/knockdown-ceiling-repair/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // re-build at most once per day

// === SEO metadata (Next.js App Router) ===
export const metadata: Metadata = {
  title:
    "Knockdown Ceiling Repair Calgary | Texture Matching & Water Damage Fix",
  description:
    "Expert knockdown ceiling repair in Calgary: water stains, cracks, texture matching, pot light patches. Dust-controlled, paint-ready finish. Free estimates.",
  keywords: [
    "knockdown ceiling repair Calgary",
    "ceiling texture repair Calgary",
    "texture matching Calgary",
    "water stain ceiling repair Calgary",
    "pot light patch Calgary",
  ],
  alternates: { canonical: "/services/knockdown-ceiling-repair" },
  openGraph: {
    title:
      "Knockdown Ceiling Repair Calgary | Texture Matching & Water Damage Fix",
    description:
      "Calgary pros for knockdown texture repair: stains, cracks, holes, and blend-to-match finishing. Fast, tidy, and paint-ready.",
    url: "/services/knockdown-ceiling-repair",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const PHONE = process.env.NEXT_PUBLIC_PHONE || "(403) 000-0000";
const PHONE_TEL = "+1" + PHONE.replace(/[^\d]/g, "");

const neighborhoods = [
  "altadore",
  "arbour-lake",
  "aspen-woods",
  "beltline",
  "brentwood",
  "bridgeland",
  "crescent-heights",
  "dalhousie",
  "hillhurst",
  "inglewood",
  "kensington",
  "mahogany",
  "mission",
  "mount-royal",
  "seton",
  "signal-hill",
  "sunnyside",
  "tuscany",
  "varsity",
  "west-springs",
];

export default function Page() {
  const siteName = "Popcorn Ceiling Removal PRO Calgary";
  const businessUrl = "https://popcorn-ceiling-removal-calgaryfinal.pages.dev"; // update if you have a custom domain

  // --- JSON-LD: Service ---
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Knockdown Ceiling Repair",
    serviceType: "Ceiling texture repair",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      url: businessUrl,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "CAD",
      },
      availability: "https://schema.org/InStock",
    },
  } as const;

  // --- JSON-LD: FAQ ---
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is knockdown ceiling repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We patch holes, cracks, and water-damaged areas, then re-apply knockdown texture and blend to match the surrounding ceiling before priming and painting.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match my existing texture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom texture samples on-site until the pattern and thickness match your existing ceiling, then feather the edges for a seamless look.",
        },
      },
      {
        "@type": "Question",
        name: "Do you fix water stains and leaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once the source of the leak is resolved, we cut out compromised drywall, treat staining, patch, re-texture, and finish with a stain-blocking primer and paint.",
        },
      },
      {
        "@type": "Question",
        name: "Is the process dusty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use plastic containment, floor protection, and HEPA dust control. Work areas are cleaned before we leave.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you complete small repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many small patches are completed same-day. Larger areas may require an overnight dry time before paint.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also paint the ceiling after the repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can prime and paint to a uniform finish, or hand it back to your painter—your choice.",
        },
      },
    ],
  } as const;

  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Ceiling Texture Specialists
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
          Knockdown Ceiling Repair in Calgary
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Water stains, cracks, pot-light cutouts, or mismatched texture—our
          Calgary team repairs and blends knockdown ceilings so the patch
          disappears. Dust-controlled. Paint-ready.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-2xl border px-5 py-3 text-base font-medium hover:bg-gray-50"
          >
            Call {PHONE}
          </a>
          <Link
            href="/quote"
            className="rounded-2xl bg-black text-white px-5 py-3 text-base font-semibold hover:opacity-90"
          >
            Get a Free Estimate
          </Link>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Licensed & Insured • HEPA Dust Control • Texture Match Guarantee
        </div>
      </section>

      {/* What we repair */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">What We Repair</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Water stains & leaks",
              desc: "Cut-out + patch, stain block primer, knockdown re-texture, paint to uniform finish.",
            },
            {
              title: "Cracks & joints",
              desc: "Stabilize substrate, tape & mud, re-texture to match thickness and pattern.",
            },
            {
              title: "Pot light / electrical",
              desc: "Patch holes after new pot lights or fixture moves; option to coordinate electrician.",
            },
            {
              title: "Texture mismatch",
              desc: "Blend feathered texture into existing field so the transition is invisible.",
            },
            {
              title: "Holes & dents",
              desc: "From small dents to large cut-outs, we rebuild, sand with HEPA, and re-texture.",
            },
            {
              title: "Yellowing / smoke",
              desc: "Clean, seal, and repaint for a bright, even ceiling tone.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border p-5 bg-white">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Why Calgary Homeowners Choose Us
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
          <li className="rounded-2xl border p-4">
            HEPA dust control & full room protection
          </li>
          <li className="rounded-2xl border p-4">
            True knockdown texture match (samples on-site)
          </li>
          <li className="rounded-2xl border p-4">
            Same-day small patches; quick turnaround
          </li>
          <li className="rounded-2xl border p-4">
            Prime & paint option for a uniform finish
          </li>
          <li className="rounded-2xl border p-4">
            Clear, itemized quotes and friendly crew
          </li>
          <li className="rounded-2xl border p-4">
            Fully insured, excellent local references
          </li>
        </ul>
      </section>

      {/* Our process */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Our Repair Process</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-decimal list-inside text-gray-700 text-sm">
          <li className="rounded-2xl border p-4">
            Protect: floor covering, poly containment, vent masking.
          </li>
          <li className="rounded-2xl border p-4">
            Remove: cut out failed areas and loose texture.
          </li>
          <li className="rounded-2xl border p-4">
            Rebuild: patch drywall, tape, and skim for flatness.
          </li>
          <li className="rounded-2xl border p-4">
            Re-texture: match knockdown pattern and thickness; feather edges.
          </li>
          <li className="rounded-2xl border p-4">
            Finish: stain-block primer and paint to a consistent sheen.
          </li>
        </ol>
      </section>

      {/* Pricing signals (non-binding) */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Typical Pricing</h2>
        <p className="mt-4 text-gray-700 text-sm">
          Small patches often from <strong>$150–$350</strong>. Larger cut-outs
          and water-damage repairs vary by size and access. For accurate
          pricing, share a photo and rough dimensions and we can quote quickly.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link
            href="/quote"
            className="rounded-2xl bg-black text-white px-5 py-3 text-sm font-semibold hover:opacity-90"
          >
            Get a Free Estimate
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-gray-50"
          >
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Related services (internal links) */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Related Calgary Services
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/services/popcorn-ceiling-removal",
              title: "Popcorn Ceiling Removal",
            },
            {
              href: "/services/drywall-installation",
              title: "Drywall Repairs & Installation",
            },
            {
              href: "/services/interior-painting",
              title: "Ceiling & Interior Painting",
            },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border p-5 hover:bg-gray-50"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Areas we serve: deep internal links to city pages */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Areas We Serve in Calgary
        </h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {neighborhoods.map((slug) => (
            <Link
              key={slug}
              href={`/calgary/${slug}`}
              className="rounded-xl border px-3 py-2 hover:bg-gray-50"
              aria-label={`Knockdown ceiling repair in ${slug.replace(
                "-",
                " "
              )}`}
            >
              {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ visible content (pairs with JSON-LD) */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y rounded-2xl border">
          {[
            {
              q: "What is knockdown ceiling repair?",
              a: "We remove damaged areas, patch drywall, and re-apply a knockdown texture that blends invisibly with your existing ceiling, then prime and paint.",
            },
            {
              q: "Can you match my existing texture?",
              a: "Yes—our techs dial in pattern and thickness with test samples before blending into the surrounding field.",
            },
            {
              q: "Do you handle water stains and leaks?",
              a: "After the leak is fixed, we cut out compromised board, patch, re-texture, and use a stain-blocking primer so yellowing does not return.",
            },
            {
              q: "Is it messy?",
              a: "We isolate work zones with poly, protect floors, and use HEPA dust control. We tidy the area before we leave.",
            },
            {
              q: "How long does it take?",
              a: "Small patches are often same-day. Larger repairs may take 1–2 visits for drying and paint.",
            },
            {
              q: "Do you also paint?",
              a: "Yes—optional prime and finish coat for a uniform, bright ceiling.",
            },
          ].map((item, i) => (
            <details key={i} className="p-5 group">
              <summary className="cursor-pointer font-medium list-none">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <div className="rounded-3xl border p-8 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a seamless knockdown repair?
          </h2>
          <p className="mt-2 text-gray-600">
            Send a couple of photos and we will quote fast.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/quote"
              className="rounded-2xl bg-black text-white px-6 py-3 text-base font-semibold hover:opacity-90"
            >
              Get My Free Quote
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-2xl border px-6 py-3 text-base font-medium hover:bg-gray-50"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Image SEO notes (replace with your actual images)
        - Use web-optimized JPG/WEBP around 1600–2000px width
        - Example alt text: "Knockdown ceiling repair in Calgary — water stain patch before and after"
        - Add your images to a gallery component if desired
      */}
    </main>
  );
}
