import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("knockdown-ceiling-water-damage-repair-calgary");

const WATER_DAMAGE_STEPS = [
  "Confirm the leak source is fixed before any cosmetic work begins.",
  "Cut out softened drywall or damaged tape instead of coating over it.",
  "Rebuild the patch flat and dry before re-texturing.",
  "Use stain-block primer so yellowing does not flash back through paint.",
  "Blend the knockdown texture wider than the damaged spot.",
];

const HIDDEN_DAMAGE_SIGNS = [
  "Soft drywall around the stain line.",
  "Sagging paper or bubbled paint at the edge of the affected area.",
  "Failed seams or cracking beside the obvious leak spot.",
  "A larger yellow ring returning after previous repaint attempts.",
];

const CLUSTER_SUPPORT = [
  "Leak repairs explain why some knockdown jobs expand after the ceiling is opened.",
  "Texture matching explains how the rebuilt area should be blended.",
  "Pricing explains how expanded repair scope changes the final quote.",
  "The service page is the action page when the ceiling needs real repair work, not just more paint.",
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
    label: "Knockdown ceiling repair service",
    href: "/services/knockdown-ceiling-repair",
  },
  {
    label: "Pot-light patch matching guide",
    href: "/blog/knockdown-ceiling-pot-light-patch-matching-calgary",
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
      <Script id="knockdown-water-schema" type="application/ld+json">
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
              Leak damage changes more than the paint color. Soft drywall, stained paper, and failed tape all affect
              how a knockdown ceiling repair has to be rebuilt and matched in {city}.
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
              <h2>Water damage repairs are rarely surface-only</h2>
              <p>
                A stained ceiling often looks like a paint problem, but the real issue is usually the drywall core,
                tape, or corner of the patch area. If those are weak, a texture-only repair will not last or blend.
              </p>

              <h2>What the repair process should include</h2>
              <ul>
                {WATER_DAMAGE_STEPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Why leak repairs are harder to blend</h2>
              <p>
                Water damage often creates a larger affected zone than the visible stain. Once the crew opens the
                ceiling, the repair area can grow. That changes both the cost and the texture-matching scope.
              </p>

              <h2>Signs the damage may be larger than it looks</h2>
              <p>
                A clean-looking stain does not always mean a small repair. In many Calgary homes, the visible mark is
                just the center of the real problem area.
              </p>
              <ul>
                {HIDDEN_DAMAGE_SIGNS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Why this matters for homeowners</h2>
              <p>
                Water-damage repairs are one of the most common reasons homeowners need knockdown ceiling work. This
                article shows why leak repairs affect patch size, texture blending, and final pricing all at once.
              </p>
              <ul>
                {CLUSTER_SUPPORT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>How this passes back to the service page</h2>
              <p>
                If your ceiling has staining, sagging, or old patch rings, the best next step is a proper{" "}
                <Link href="/services/knockdown-ceiling-repair">knockdown ceiling repair assessment</Link>. From there
                you can compare scope against our{" "}
                <Link href="/blog/knockdown-ceiling-repair-cost-calgary-2026">
                  2026 pricing guide
                </Link>
                .
              </p>

              <h2>Texture matching still matters after the drywall fix</h2>
              <p>
                Once the leak is handled, the success of the job still depends on texture matching. If you want to see
                how that part works, read our{" "}
                <Link href="/blog/matching-knockdown-ceiling-texture-calgary">
                  knockdown texture matching guide
                </Link>
                .
              </p>

              <h2>Related scenario: fixture changes and ceiling cut-outs</h2>
              <p>
                Not every repair starts with a leak. If the patch came from electrical work, new lights, or fixture
                changes, see our{" "}
                <Link href="/blog/knockdown-ceiling-pot-light-patch-matching-calgary">
                  pot-light patch matching guide
                </Link>
                .
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Quick note</h3>
              <p className="mt-3 text-sm text-muted">
                Water damage repairs often expand after the ceiling is opened. That is normal and should be reflected
                in the quote.
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
              <p className="mt-4 text-xs text-muted">Serving {city} with leak-related ceiling repairs.</p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">Helpful context</div>
              <p className="mt-2 text-sm text-muted">
                This page covers the hidden-scope side of repairs that start with stains, soft drywall, and old leak
                marks.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
