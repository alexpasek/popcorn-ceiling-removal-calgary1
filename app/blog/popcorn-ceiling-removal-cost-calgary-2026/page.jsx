import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("popcorn-ceiling-removal-cost-calgary-2026");

export const metadata = {
  title: `${post.title} | ${SITE.brand}`,
  description: post.description,
  alternates: { canonical: `${SITE.domain}${post.href}/` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `${SITE.domain}${post.href}/`,
    type: "article",
    images: [
      {
        url: `${SITE.domain}${post.image}`,
        width: 1200,
        height: 630,
        alt: post.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
  },
};

const COST_ROWS = [
  {
    scope: "Removal and cleanup only",
    range: "$2.50 to $3.50 per sq. ft.",
    notes:
      "Best fit for flatter ceilings in decent condition when the follow-up finish work is limited.",
  },
  {
    scope: "Removal, skim coat, and detail sanding",
    range: "$5.00+ per sq. ft.",
    notes:
      "Common for homeowners who want a smooth, modern ceiling instead of a scraped but uneven surface.",
  },
  {
    scope: "Removal, repairs, and primer-ready finish",
    range: "$6.00+ per sq. ft.",
    notes:
      "Typical when cracks, patches, stains, or joint issues need extra attention before paint.",
  },
  {
    scope: "Suspected asbestos texture",
    range: "Quoted separately",
    notes:
      "Testing, containment, and specialist abatement are separate from a standard removal quote and can change the timeline substantially.",
  },
];

const SAMPLE_PROJECTS = [
  {
    project: "Small bedroom ceiling",
    size: "100 to 140 sq. ft.",
    budget: "$1,800+",
  },
  {
    project: "Average living room",
    size: "200 to 300 sq. ft.",
    budget: "$1,800+",
  },
  {
    project: "Main floor open area",
    size: "600 to 900 sq. ft.",
    budget: "$1,800 to $5,400+",
  },
];

const PRICE_FACTORS = [
  "Ceiling height, vaults, bulkheads, and hard-to-reach edges.",
  "How much furniture protection, floor masking, and dust control the crew needs to set up.",
  "Water damage, cracks, old repairs, peeling tape, or patching that shows up once the texture is removed.",
  "Whether the quote includes skim coating, detail sanding, primer, or final painting.",
  "The number of vents, smoke detectors, ceiling fixtures, and cut-ins that slow prep and cleanup.",
  "Age of the home and whether asbestos testing is recommended before disturbance.",
];

const QUOTE_CHECKLIST = [
  "Is the price removal only, or does it include skim coat and sanding?",
  "Are minor repairs included or billed after the texture comes down?",
  "Does the quote include primer, paint-ready prep, and debris disposal?",
  "What protection is used for floors, walls, vents, and furniture?",
  "If the home is older, who handles asbestos testing before work starts?",
];

const FAQS = [
  {
    q: "What is the average popcorn ceiling removal cost in Calgary in 2026?",
    a: "Most Calgary projects land between $2.50 and $3.50 per square foot for basic removal, while smooth-finish work with skim coating and sanding often starts around $5.00 per square foot.",
  },
  {
    q: "Why are some quotes much higher than others?",
    a: "The biggest differences are usually prep time, ceiling condition, height, repairs, and whether the quote includes a true smooth finish instead of scrape-only removal.",
  },
  {
    q: "Does asbestos affect the price?",
    a: "Yes. If the ceiling texture is suspected to contain asbestos, testing and any required abatement are separate from standard popcorn removal pricing.",
  },
  {
    q: "Is painting included after popcorn ceiling removal?",
    a: "Not always. Some quotes stop at sanding and cleanup, while others include primer and a paint-ready finish. It should be listed clearly in writing.",
  },
];

export default function Page() {
  const city = SITE?.city || "Calgary, AB";
  const brand = SITE?.brand || "Popcorn Ceiling Removal Calgary";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE.domain}${post.href}/`,
    image: [`${SITE.domain}${post.image}`],
    author: {
      "@type": "Organization",
      name: brand,
    },
    publisher: {
      "@type": "Organization",
      name: brand,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.domain}/logo.jpg`,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="bg-white">
      <Script id="popcorn-cost-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="popcorn-cost-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 font-semibold text-red-700"
              >
                Blog
              </Link>
              <span className="text-muted">{post.dateLabel}</span>
              <span className="text-muted">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted">
              If you are budgeting a ceiling update in {city}, the real price
              depends on whether you need scrape-only removal or a full smooth
              finish with repairs, sanding, and primer. This guide gives you a
              realistic 2026 planning range before you request quotes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {post.tags.map((tag) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-red-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
      </section>

      <section className="container-x -mt-10 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card p-6 md:p-10">
            <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-li:text-ink">
              <h2>Typical 2026 Calgary cost ranges</h2>
              <p>
                In Calgary, the biggest cost gap is between basic removal and a
                proper smooth ceiling finish. Many low quotes cover scraping and
                cleanup, but not the skim coating, detail sanding, or primer
                that actually make the ceiling look finished under natural
                light.
              </p>

              <div className="not-prose mt-6 space-y-4">
                {COST_ROWS.map((item) => (
                  <div
                    key={item.scope}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-ink">
                          {item.scope}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{item.notes}</p>
                      </div>
                      <div className="text-sm font-semibold text-red-700 md:pl-6">
                        {item.range}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Rough project budgets by ceiling size</h2>
              <p>
                These are planning ranges, not fixed bids. Actual quotes move
                up or down based on access, condition, and finish level.
              </p>

              <div className="not-prose mt-6 grid gap-4 md:grid-cols-3">
                {SAMPLE_PROJECTS.map((item) => (
                  <div
                    key={item.project}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-ink">
                      {item.project}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.size}</p>
                    <p className="mt-4 text-lg font-bold text-red-700">
                      {item.budget}
                    </p>
                  </div>
                ))}
              </div>

              <h2>What changes the quote the most?</h2>
              <p>
                Popcorn ceiling removal sounds simple, but the final number is
                usually driven by prep and finishing work rather than the scrape
                itself.
              </p>
              <ul>
                {PRICE_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Older Calgary homes need an extra check</h2>
              <p>
                If the home was built before the early 1990s, asbestos testing
                may be recommended before disturbing the ceiling texture. That
                does not automatically mean the project is a problem, but it
                does mean the quote needs to separate standard removal from any
                required testing or abatement work.
              </p>

              <h2>How to compare quotes properly</h2>
              <p>
                The cleanest way to compare contractors is to make sure every
                quote answers the same scope questions in writing:
              </p>
              <ul>
                {QUOTE_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>What most homeowners actually want</h2>
              <p>
                In practice, most homeowners do not just want the texture gone.
                They want a bright, smooth ceiling that looks consistent after
                primer and paint. That is why removal plus skim coat and sanding
                is usually the real comparison point, not scrape-only pricing.
              </p>

              <h2>Need a Calgary quote?</h2>
              <p>
                If you want a firm price for your ceiling, see our{" "}
                <Link href="/services/popcorn-ceiling-removal-calgary">
                  popcorn ceiling removal service
                </Link>{" "}
                or request a <Link href="/quote">fast quote</Link>. We can
                price the removal, repairs, and smooth finish scope clearly so
                there are fewer surprises once work starts.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Quick answer</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Basic removal typically runs $2.50 to $3.50 per sq. ft.</li>
                <li>Smooth-finish projects typically start around $5.00 per sq. ft.</li>
                <li>Repairs with primer-ready finishing usually start around $6.00 per sq. ft.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Useful links</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <Link className="btn border" href="/services/popcorn-ceiling-removal-calgary">
                  Popcorn ceiling removal
                </Link>
                <Link className="btn btn-primary" href="/quote">
                  Get a fast quote
                </Link>
                <Link className="btn border" href="/blog/drywall-installation-intent-calgary">
                  Drywall article
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">
                Serving {city} with same-week quote availability.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">
                Pricing note
              </div>
              <p className="mt-2 text-sm text-muted">
                These are planning ranges for 2026 budgeting. Final pricing
                still depends on room access, repairs, prep, and whether the
                finish is scrape-only or fully smoothed.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="card p-6 md:p-8">
          <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-li:text-ink">
            <h2>Popcorn ceiling removal cost FAQ</h2>
            {FAQS.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
