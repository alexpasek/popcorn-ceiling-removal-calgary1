import Link from "next/link";
import Script from "next/script";
import { SITE } from "@/data/site";

const AREAS = [
  "Beltline",
  "Altadore",
  "Mount Royal",
  "Mission",
  "Bridgeland",
  "Hillhurst",
  "Kensington",
  "Signal Hill",
  "West Springs",
  "Aspen Woods",
  "Tuscany",
  "Arbour Lake",
  "Varsity",
  "Brentwood",
  "Mahogany",
  "Seton",
];

const REPAIR_TYPES = [
  "Water stains and leak-damaged ceiling sections",
  "Cut-outs after pot-light and electrical changes",
  "Failed seams, cracks, and patch halos",
  "Texture mismatches that flash after paint",
];

const PROCESS = [
  {
    n: "01",
    title: "Assess The Repair Scope",
    text: "We review whether the issue is a small patch match or a wider ceiling repair that needs broader blending.",
  },
  {
    n: "02",
    title: "Protect The Room",
    text: "Floors, fixtures, and openings are masked so repair work can happen without turning the room into a mess.",
  },
  {
    n: "03",
    title: "Rebuild The Base",
    text: "Damaged board, tape, seams, and patch areas are corrected flat before texture matching begins.",
  },
  {
    n: "04",
    title: "Blend The Texture",
    text: "We match the knockdown pattern and feather the transition so the repaired zone does not stand out.",
  },
];

const FAQS = [
  {
    q: "Can you match existing knockdown ceiling texture?",
    a: "Yes. The match depends on rebuilding the patch flat first, then controlling the texture depth, timing, and feathering so the transition disappears under paint.",
  },
  {
    q: "When does a repair become a larger texturing job?",
    a: "If the surrounding ceiling is inconsistent, heavily damaged, or already being updated after popcorn removal, the repair can expand into a broader knockdown ceiling texturing scope.",
  },
  {
    q: "Do you repair water-damaged textured ceilings in Calgary?",
    a: "Yes. Once the leak source is fixed, the damaged drywall or tape can be cut out, rebuilt, stain blocked, retextured, and left ready for the next finish step.",
  },
  {
    q: "Where do you offer ceiling texture repair in Calgary?",
    a: `We work across Calgary, including ${AREAS.join(", ")}, plus nearby communities when the project fits our service area.`,
  },
];

export const metadata = {
  title: "Ceiling Texture Repair Calgary | Knockdown Matching",
  description:
    "Ceiling texture repair in Calgary for knockdown patching, water-damage repairs, pot-light cut-outs, and texture matching.",
  alternates: { canonical: `${SITE.domain}/calgary/ceiling-texture-repair/` },
  openGraph: {
    title: "Ceiling Texture Repair Calgary | Knockdown Matching",
    description:
      "Calgary ceiling texture repair for knockdown matching, repair-first prep, and clean finish-ready results.",
    url: `${SITE.domain}/calgary/ceiling-texture-repair/`,
    type: "article",
    images: [
      {
        url: `${SITE.domain}/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00004.jpg`,
        width: 1200,
        height: 630,
        alt: "Ceiling texture repair in Calgary",
      },
    ],
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ceiling Texture Repair in Calgary",
    serviceType: "Knockdown ceiling repair and texture matching",
    provider: { "@type": "LocalBusiness", name: SITE.brand, "@id": `${SITE.domain}/#business` },
    areaServed: { "@type": "City", name: "Calgary, AB" },
    image: [`${SITE.domain}/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00004.jpg`],
    url: `${SITE.domain}/calgary/ceiling-texture-repair/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
      { "@type": "ListItem", position: 2, name: "Calgary", item: `${SITE.domain}/calgary/` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ceiling Texture Repair",
        item: `${SITE.domain}/calgary/ceiling-texture-repair/`,
      },
    ],
  };

  return (
    <main className="bg-white text-ink">
      <Script id="calgary-ceiling-repair-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="calgary-ceiling-repair-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="calgary-ceiling-repair-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <section className="container-x py-6 md:py-10">
        <div className="mx-auto max-w-[1120px]">
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/calgary/" className="hover:underline">
              Calgary
            </Link>{" "}
            / <span className="text-ink">Ceiling Texture Repair</span>
          </nav>

          <div className="mt-4 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="border bg-[#f4f5f7] p-6 sm:p-8 md:p-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A93325]">
                Calgary Ceiling Texture Repair
              </p>
              <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[3rem]">
                Ceiling Texture Repair in Calgary
              </h1>
              <p className="mt-5 text-[15px] leading-7 text-muted">
                This page supports Calgary search intent around damaged textured ceilings, patch blending, and
                knockdown ceiling repair. If the ceiling needs matching work before it can look clean again, this is the
                local repair page that supports the main{" "}
                <Link href="/calgary/knockdown-ceiling-texture/" className="link-primary">
                  knockdown ceiling texture Calgary
                </Link>{" "}
                page.
              </p>

              <ul className="mt-6 space-y-3">
                {REPAIR_TYPES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink">
                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-[#C73E2C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#A93325] px-5 text-sm font-semibold text-white transition hover:bg-[#8B2A1F]"
                >
                  Call now {SITE.phone}
                </a>
                <Link
                  href="/quote/"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#94a3b8] bg-white px-5 text-sm font-semibold text-ink transition hover:bg-[#fafafa]"
                >
                  Get a free estimate
                </Link>
              </div>
            </div>

            <div className="overflow-hidden border bg-[#e5e7eb]">
              <img
                src="/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00004.jpg"
                alt="Ceiling texture repair and knockdown matching in Calgary"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-8 md:py-14">
        <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              When this local repair page matters
            </h2>
            <div className="mt-4 h-[2px] w-10 bg-[#C73E2C]" />
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Some homeowners are not looking for a full new ceiling finish. They are looking for a repair that blends
              into the existing ceiling without obvious patch edges, mismatched texture, or paint flashing. That is the
              role of this page inside the cluster.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              If the repair scope grows into a broader finish decision, the next step is the main{" "}
              <Link href="/calgary/knockdown-ceiling-texture/" className="link-primary">
                Calgary knockdown ceilings
              </Link>{" "}
              page. If the job stays repair-focused, this page supports that local commercial intent directly.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              We also maintain the broader service page at{" "}
              <Link href="/services/knockdown-ceiling-repair/" className="link-primary">
                /services/knockdown-ceiling-repair
              </Link>
              , but this local Calgary version is the better fit for cluster authority and local service relevance.
            </p>
          </div>

          <div className="border bg-[#f8fafc] p-6">
            <h3 className="text-[15px] font-semibold text-ink">Best supporting blog paths into this page</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              <li>
                <Link href="/blog/how-to-match-knockdown-ceiling-texture/" className="link-primary">
                  How to match knockdown ceiling texture
                </Link>
              </li>
              <li>
                <Link href="/blog/knockdown-ceiling-repair-cost-calgary-2026/" className="link-primary">
                  Knockdown ceiling repair cost in Calgary
                </Link>
              </li>
              <li>
                <Link href="/blog/knockdown-ceiling-water-damage-repair-calgary/" className="link-primary">
                  Knockdown ceiling water-damage repair
                </Link>
              </li>
              <li>
                <Link href="/blog/knockdown-ceiling-pot-light-patch-matching-calgary/" className="link-primary">
                  Pot-light patch matching guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] py-10 md:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              Our Calgary repair process
            </h2>
            <div className="mt-4 h-[2px] w-10 bg-[#C73E2C]" />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {PROCESS.map((step) => (
                <div key={step.n} className="border bg-white p-5">
                  <div className="text-[1.5rem] font-semibold leading-none text-[#cbd5e1]">{step.n}</div>
                  <h3 className="mt-3 text-[15px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.4rem]">
            Calgary areas we support
          </h2>
          <div className="mt-4 h-[2px] w-10 bg-[#C73E2C]" />
          <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-muted">
            This local repair page supports Calgary searches for textured ceiling repair and matching work across{" "}
            {AREAS.join(", ")}. It exists to strengthen local coverage around repair intent while still linking back to
            the broader knockdown money page when the job becomes a bigger finish project.
          </p>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <h2 className="text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              Ceiling Texture Repair FAQs
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-10 bg-[#C73E2C]" />
          </div>

          <div className="mt-8 border-t border-[#cbd5e1]">
            {FAQS.map((item, index) => (
              <details key={item.q} className="border-b border-[#cbd5e1] py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[1.05rem] font-semibold leading-7 text-ink marker:content-none">
                  <span>{item.q}</span>
                  <span className="text-[#64748b]">{index === 0 ? "-" : "+"}</span>
                </summary>
                <p className="mt-4 text-[15px] leading-7 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
