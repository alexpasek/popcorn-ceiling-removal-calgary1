// app/services/knockdown-ceiling-repair/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import MobileCTA from "@/components/MobileCTA";

export const revalidate = 86400; // re-build at most once per day

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

// ✅ Use brand primary to match your existing MobileCTA (bg-primary-600)
const btnPrimary =
  "inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";
const btnSecondary =
  "inline-flex items-center justify-center rounded-2xl border border-primary-600 text-primary-700 px-6 py-3 text-base font-medium hover:bg-primary-50";

export default function Page() {
  const siteName = "Popcorn Ceiling Removal PRO Calgary";
  const businessUrl = "https://popcorn-ceiling-removal-calgaryfinal.pages.dev";

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Knockdown Ceiling Repair",
    serviceType: "Ceiling texture repair",
    areaServed: { "@type": "City", name: "Calgary" },
    provider: { "@type": "LocalBusiness", name: siteName, url: businessUrl },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* HERO — split layout with image */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="text-left">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Ceiling Texture Specialists
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Knockdown Ceiling Repair in Calgary
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Water stains, cracks, pot-light cutouts, or mismatched texture—our
            Calgary team blends knockdown ceilings so the patch disappears.
            Dust-controlled. Paint-ready.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/quote" className={btnPrimary}>
              Get My Free Quote
            </Link>
            <a href={`tel:${PHONE_TEL}`} className={btnSecondary}>
              Call {PHONE}
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Licensed & Insured • HEPA Dust Control • Texture Match Guarantee
          </div>
        </div>

        {/* Right-side hero image (replace with your real image) */}
        <div className="rounded-3xl overflow-hidden border">
          <img
            src="/images/knockdown/hero-knockdown.jpg"
            alt="Knockdown ceiling repair in Calgary — technician blending texture"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      {/* BEFORE / AFTER STRIP */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Before &amp; After</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              srcBefore: "/images/knockdown/before-water-stain.jpg",
              srcAfter: "/images/knockdown/after-water-stain.jpg",
              alt: "Water stain repair — before and after",
            },
            {
              srcBefore: "/images/knockdown/before-potlight.jpg",
              srcAfter: "/images/knockdown/after-potlight.jpg",
              alt: "Pot light patch — before and after",
            },
            {
              srcBefore: "/images/knockdown/before-crack.jpg",
              srcAfter: "/images/knockdown/after-crack.jpg",
              alt: "Ceiling crack repair — before and after",
            },
          ].map((g, i) => (
            <figure
              key={i}
              className="rounded-2xl overflow-hidden border bg-white"
            >
              <div className="grid grid-cols-2">
                <img
                  src={g.srcBefore}
                  alt={`${g.alt} — before`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={g.srcAfter}
                  alt={`${g.alt} — after`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-gray-600">
                Matched knockdown texture and paint-ready finish.
              </figcaption>
            </figure>
          ))}
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

      {/* Trust / badges */}
      <section className="mt-12 rounded-2xl border p-5 bg-white">
        <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <li>✔ Texture Match Guarantee</li>
          <li>✔ 100% Satisfaction</li>
          <li>✔ Clean Worksite & HEPA Dust Control</li>
          <li>✔ Clear, Itemized Quotes</li>
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
          <li className="rounded-2xl border p-4">
            Final tidy: site cleanup and walk-through.
          </li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Typical Pricing</h2>
        <p className="mt-4 text-gray-700 text-sm">
          Small patches often from <strong>$150–$350</strong>. Larger cut-outs
          and water-damage repairs vary by size and access. For accurate
          pricing, share a photo and rough dimensions and we can quote quickly.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link href="/quote" className={btnPrimary}>
            Start My Quote
          </Link>
          <a href={`tel:${PHONE_TEL}`} className={btnSecondary}>
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Related services */}
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

      {/* Areas we serve */}
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
                /-/g,
                " "
              )}`}
            >
              {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y rounded-2xl border bg-white">
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

      {/* Final conversion block */}
      <section className="mt-12 text-center">
        <div className="rounded-3xl border p-8 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to book a repair?
          </h2>
          <p className="mt-2 text-gray-600">
            Send a couple of photos and we’ll confirm price & schedule.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link href="/quote" className={btnPrimary}>
              Book Knockdown Repair
            </Link>
            <a href={`tel:${PHONE_TEL}`} className={btnSecondary}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* spacer so sticky bar doesn't cover content on mobile */}
      <div className="h-14 md:hidden" aria-hidden />

      {/* ✅ Render the sticky mobile CTA (already used on other pages) */}
      <MobileCTA />
    </main>
  );
}
