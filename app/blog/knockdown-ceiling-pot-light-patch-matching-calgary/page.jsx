import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("knockdown-ceiling-pot-light-patch-matching-calgary");

const POT_LIGHT_ISSUES = [
  "Old openings leave cut-out lines that must be patched flat before texture is applied.",
  "New fixture layouts create several small repair zones that can look inconsistent if they are textured one by one.",
  "Ceiling paint often has to be blended wider than the patch because sheen differences show around pot lights.",
  "Matching the surrounding knockdown pattern matters more on open ceilings with lots of natural light.",
];

const PLANNING_POINTS = [
  "Count every old and new opening before the quote so the ceiling is priced as one repair scope, not a surprise add-on.",
  "Take room-wide photos, not just close-ups, because light layout affects how visible the patches will be.",
  "Expect wider paint blending when the fixtures sit in the main sightline of the room.",
  "If there are many openings, the crew may recommend handling the full field together for a cleaner final look.",
];

const CLUSTER_SUPPORT = [
  "This topic explains fixture-cutout repairs, one of the most common reasons homeowners need knockdown blending.",
  "Texture matching explains how the pattern side of that repair works.",
  "Pricing explains why several openings can move the job from a small repair into a larger custom quote.",
  "The service page is where you go once the scope is clear and you are ready to book the repair.",
];

const RELATED_LINKS = [
  {
    label: "Matching knockdown texture guide",
    href: "/blog/matching-knockdown-ceiling-texture-calgary",
  },
  {
    label: "Knockdown repair cost guide",
    href: "/blog/knockdown-ceiling-repair-cost-calgary-2026",
  },
  {
    label: "Calgary ceiling texture repair",
    href: "/calgary/ceiling-texture-repair/",
  },
  {
    label: "Water-damage repair guide",
    href: "/blog/knockdown-ceiling-water-damage-repair-calgary",
  },
];

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

export default function Page() {
  const brand = SITE?.brand || "Popcorn Ceiling Removal Calgary";
  const city = SITE?.city || "Calgary, AB";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE.domain}${post.href}/`,
    image: [`${SITE.domain}${post.image}`],
    author: { "@type": "Organization", name: brand },
    publisher: {
      "@type": "Organization",
      name: brand,
      logo: { "@type": "ImageObject", url: `${SITE.domain}/logo.jpg` },
    },
  };

  return (
    <main className="bg-white">
      <Script id="knockdown-potlight-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link href="/blog" className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 font-semibold text-red-700">
                Blog
              </Link>
              <span className="text-muted">{post.dateLabel}</span>
              <span className="text-muted">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted">
              Pot-light moves and ceiling fixture changes leave more than small holes. They change the repair pattern,
              paint blending, and how visible the ceiling texture looks after the work is done in {city}.
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
            <img
              src={post.image}
              alt={post.imageAlt}
              className="mb-8 w-full rounded-2xl border border-red-100 bg-white"
            />

            <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-li:text-ink">
              <h2>Why pot-light repairs show so easily</h2>
              <p>
                Pot-light openings sit in highly visible parts of the ceiling and are usually surrounded by clean paint,
                direct light, and repeating texture patterns. That makes mismatched repairs stand out quickly.
              </p>

              <h2>Common problems after fixture changes</h2>
              <ul>
                {POT_LIGHT_ISSUES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>What a proper repair should include</h2>
              <p>
                The patch should be rebuilt flat, re-textured to match the surrounding knockdown pattern, and repainted
                so the sheen stays even around the fixture line. If the ceiling has several openings, the crew may need
                to treat the whole area as one blended repair rather than several isolated spots.
              </p>

              <h2>Planning the repair before work starts</h2>
              <p>
                Pot-light jobs go more smoothly when the ceiling is scoped as a full visual field instead of a set of
                isolated holes. That helps the contractor price texture blending and repainting more accurately.
              </p>
              <ul>
                {PLANNING_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Why this matters for homeowners</h2>
              <p>
                This article covers fixture-change repairs, which are different from leak repairs but still depend on
                the same texture-matching and paint-blending process.
              </p>
              <ul>
                {CLUSTER_SUPPORT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>How this connects to the rest of the repair work</h2>
              <p>
                Pot-light repairs are one of the clearest examples of why{" "}
                <Link href="/blog/matching-knockdown-ceiling-texture-calgary">
                  texture matching
                </Link>{" "}
                matters. If you are budgeting the work, compare it against our{" "}
                <Link href="/blog/knockdown-ceiling-repair-cost-calgary-2026">
                  knockdown repair pricing guide
                </Link>
                . If you need the repair done, go straight to{" "}
                <Link href="/calgary/ceiling-texture-repair/">knockdown ceiling repair</Link>.
              </p>

              <h2>Related scenario: leak stains and water-damage repairs</h2>
              <p>
                If your ceiling issue started with a stain or a soft spot rather than fixture work, read our{" "}
                <Link href="/blog/knockdown-ceiling-water-damage-repair-calgary">
                  water-damage repair guide
                </Link>
                . That article covers how hidden moisture changes patch scope before the texture is even matched.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Best next step</h3>
              <p className="mt-3 text-sm text-muted">
                If the ceiling has several fixture changes, send photos of the whole room rather than one cut-out so the
                repair scope is priced correctly.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Related reading</h3>
              <div className="mt-4 grid gap-3 text-sm">
                {RELATED_LINKS.map((item) => (
                  <Link key={item.href} className="btn border" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">Serving {city} with ceiling cut-out and texture blending repairs.</p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">Helpful context</div>
              <p className="mt-2 text-sm text-muted">
                This page covers ceiling openings, fixture moves, and multi-patch repairs that need matching work
                after electrical changes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
