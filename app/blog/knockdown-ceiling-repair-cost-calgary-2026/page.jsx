import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("knockdown-ceiling-repair-cost-calgary-2026");

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
    scope: "Small patch",
    range: "$300 to $700",
    notes:
      "Typical for a single localized repair like a small leak stain, dent, or minor cut-out with texture blending.",
  },
  {
    scope: "Medium repair",
    range: "$700 to $1,500",
    notes:
      "Common when the damaged area is larger, there are multiple patches, or the job includes priming and paint blending.",
  },
  {
    scope: "Large or complex repair",
    range: "Custom quote",
    notes:
      "Used for widespread water damage, multiple fixture openings, failed seams, or ceilings that need more rebuild work before texture can be matched.",
  },
];

const SAMPLE_PROJECTS = [
  {
    project: "Small water stain patch",
    size: "Single spot repair",
    budget: "$300 to $700",
  },
  {
    project: "Pot-light or cut-out repair",
    size: "One or more openings",
    budget: "$700 to $1,500",
  },
  {
    project: "Large water-damage repair",
    size: "Multiple affected sections",
    budget: "Custom quote",
  },
];

const PRICE_FACTORS = [
  "How difficult the existing knockdown texture is to match in thickness and pattern.",
  "Whether the substrate needs patching, taping, skim work, or stain-block primer before re-texturing.",
  "How much paint blending is needed to avoid a visible flash or sheen difference after the repair.",
  "Ceiling height, furniture protection, access issues, and the amount of containment required.",
  "Whether the damage is from an old leak, smoke staining, cracking, or recent electrical changes like pot lights.",
];

const AUTHORITY_SIGNALS = [
  "Texture-match testing before the full repair is sprayed and knocked down.",
  "Clear scope for patching, priming, and painting so there is no surprise add-on after the cut-out is opened.",
  "Dust control, floor protection, and clean edge feathering that keeps the repair from telegraphing through paint.",
  "Recent Calgary repair work on water damage, fixture changes, seams, and blended ceiling patches.",
];

const FAQS = [
  {
    q: "What does knockdown ceiling repair cost in Calgary in 2026?",
    a: "Small knockdown ceiling repairs in Calgary often land around $300 to $700, medium repairs around $700 to $1,500, and larger water-damage or multi-area repairs are usually custom quoted from photos or an on-site visit.",
  },
  {
    q: "Why is texture matching sometimes more expensive than a basic drywall patch?",
    a: "The texture has to be rebuilt and blended so the repair disappears from normal viewing height. That extra matching, feathering, priming, and paint correction is what raises the price.",
  },
  {
    q: "Does painting affect the cost?",
    a: "Yes. Some repairs stop at texture and primer, while others include paint blending or a full ceiling coat so the sheen stays uniform.",
  },
  {
    q: "Can water damage change the quote?",
    a: "Yes. Once the damaged material is opened up, the crew may need extra cut-out, patching, stain-blocking, or wider texture blending than a surface-only repair.",
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
      <Script id="knockdown-cost-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="knockdown-cost-faq-schema" type="application/ld+json">
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
              If you need a texture patch, water-damage repair, or pot-light
              cut-out fixed in {city}, the price depends on how much drywall
              rebuilding, texture matching, priming, and paint blending the
              ceiling actually needs.
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
              <h2>Typical 2026 Calgary knockdown repair pricing</h2>
              <p>
                Knockdown ceiling repair is priced differently from full ceiling
                refinishing. Most Calgary quotes are based on the size of the
                damaged area, how difficult the texture is to match, and whether
                the repair stops at texture or includes primer and paint.
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

              <h2>Example repair budgets</h2>
              <p>
                These are common planning ranges for Calgary homeowners trying
                to compare ceiling repair quotes before booking a visit.
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

              <h2>What pushes the repair cost up?</h2>
              <p>
                The quote usually climbs when the problem is not just the
                visible texture. Once the ceiling is opened, the crew may need
                to rebuild the substrate, seal staining, and widen the blend so
                the patch disappears.
              </p>
              <ul>
                {PRICE_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>What to look for before you hire a knockdown repair crew</h2>
              <p>
                Knockdown repair is a detail-driven trade. A clean result comes
                from process, not guesswork. These are the signs worth looking
                for when comparing contractors in {city}:
              </p>
              <ul>
                {AUTHORITY_SIGNALS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>When a custom quote makes sense</h2>
              <p>
                Large leak repairs, several fixture changes, or ceilings with
                multiple failed seams usually need a photo review or site visit.
                That is normal. The goal is to price the full repair properly,
                not just the first visible patch.
              </p>

              <h2>Need a Calgary knockdown repair quote?</h2>
              <p>
                If you want repair pricing based on your actual texture and
                damage, visit our{" "}
                <Link href="/calgary/ceiling-texture-repair/">
                  Calgary ceiling texture repair
                </Link>{" "}
                or request a <Link href="/quote">fast quote</Link>. We focus on
                patching, texture matching, priming, and paint-ready handoff so
                the repair blends into the existing ceiling.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Quick answer</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Small knockdown repairs often land around $300 to $700.</li>
                <li>Medium repairs commonly land around $700 to $1,500.</li>
                <li>Large water-damage or multi-area repairs are custom quoted.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Useful links</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <Link className="btn border" href="/calgary/ceiling-texture-repair/">
                  Knockdown ceiling repair
                </Link>
                <Link className="btn btn-primary" href="/quote">
                  Get a fast quote
                </Link>
                <Link className="btn border" href="/blog/matching-knockdown-ceiling-texture-calgary">
                  Texture matching guide
                </Link>
                <Link className="btn border" href="/blog/popcorn-ceiling-removal-cost-calgary-2026">
                  Popcorn cost guide
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">
                Serving {city} with repair-focused quotes.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">
                Why pricing varies
              </div>
              <p className="mt-2 text-sm text-muted">
                The biggest differences are texture matching difficulty, water
                damage repair scope, primer requirements, and whether ceiling
                paint blending is included.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="card p-6 md:p-8">
          <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-li:text-ink">
            <h2>Knockdown ceiling repair cost FAQ</h2>
            {FAQS.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
            <h3>Related Calgary knockdown reading</h3>
            <p>
              If you want to understand why some patches blend better than others, read our{" "}
              <Link href="/blog/matching-knockdown-ceiling-texture-calgary">
                matching knockdown ceiling texture guide
              </Link>
              . For leak-related work, see our{" "}
              <Link href="/blog/knockdown-ceiling-water-damage-repair-calgary">
                water-damage repair article
              </Link>
              . For fixture changes, see our{" "}
              <Link href="/blog/knockdown-ceiling-pot-light-patch-matching-calgary">
                pot-light patch matching guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
