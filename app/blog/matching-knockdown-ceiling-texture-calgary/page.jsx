import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("matching-knockdown-ceiling-texture-calgary");

const MATCHING_STEPS = [
  "Check how heavy the existing texture sits on the ceiling and where the high spots break.",
  "Rebuild the patch flat first so the texture is sitting on the right base, not hiding a low spot.",
  "Test the spray pattern and knockdown timing before blending the full repair.",
  "Feather the edge wider than the obvious patch so the transition disappears under paint.",
  "Prime and repaint enough of the ceiling to prevent sheen flashing around the repair.",
];

const FAILURE_SIGNS = [
  "The patch is flatter or heavier than the rest of the ceiling.",
  "The repair edge shows a visible ring in side light.",
  "Paint sheen changes around the blended area.",
  "The crew patched the drywall but did not rebuild the texture pattern properly.",
];

const MATCHING_FACTORS = [
  "Texture height: some ceilings have a tighter, lower knockdown while others sit heavier and wider.",
  "Knockdown timing: the sprayed mud has to be flattened at the right point, or the islands look too sharp or too collapsed.",
  "Ceiling age: older repairs, smoke staining, and yellowing can make the surrounding finish harder to blend.",
  "Lighting: window wash and pot lights expose bad patch rings faster than flat overhead light.",
];

const CLUSTER_SUPPORT = [
  "Pricing questions are covered in the knockdown repair cost guide.",
  "Leak-related rebuild scope is covered in the water-damage repair article.",
  "Fixture-cutout repairs are covered in the pot-light patch matching article.",
  "All of those topics still lead back to the same service decision: whether the ceiling needs a full knockdown repair crew.",
];

const RELATED_LINKS = [
  {
    label: "Knockdown ceiling repair service",
    href: "/services/knockdown-ceiling-repair",
  },
  {
    label: "2026 knockdown repair cost guide",
    href: "/blog/knockdown-ceiling-repair-cost-calgary-2026",
  },
  {
    label: "Water-damage knockdown repairs",
    href: "/blog/knockdown-ceiling-water-damage-repair-calgary",
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
    author: { "@type": "Organization", name: brand },
    publisher: {
      "@type": "Organization",
      name: brand,
      logo: { "@type": "ImageObject", url: `${SITE.domain}/logo.jpg` },
    },
  };

  return (
    <main className="bg-white">
      <Script id="matching-knockdown-schema" type="application/ld+json">
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
              Matching knockdown texture is the part of ceiling repair most homeowners notice first. In {city},
              a good result depends on patch flatness, pattern timing, feathered edges, and paint blending.
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
              <h2>What matching knockdown texture really means</h2>
              <p>
                Matching knockdown texture is not just spraying mud onto a patch. The repaired area has to sit at the
                same depth, break light the same way, and blend into the existing ceiling without showing a hard edge.
                That is why the best Calgary knockdown repairs focus on texture shape and paint finish together.
              </p>

              <h2>The five parts of a clean texture match</h2>
              <ul>
                {MATCHING_STEPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>What changes the match from ceiling to ceiling?</h2>
              <p>
                No two Calgary ceilings age the same way. Even when the texture style is still knockdown, the amount
                of buildup, the age of the paint, and the lighting in the room can all change how the repair needs to
                be handled.
              </p>
              <ul>
                {MATCHING_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Why many ceiling patches still look obvious</h2>
              <p>
                The patch often fails before the texture step. If the drywall base is low, rounded, or overfilled, the
                knockdown will never sit like the surrounding field. Side lighting from windows makes this more obvious
                in many Calgary homes.
              </p>
              <ul>
                {FAILURE_SIGNS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>When to call a repair specialist</h2>
              <p>
                If the problem involves water damage, multiple old patches, or cut-outs around fixtures, the repair
                usually needs more than a quick spray texture touch-up. A proper{" "}
                <Link href="/services/knockdown-ceiling-repair">knockdown ceiling repair service</Link> can rebuild
                the base, test the pattern, and blend the repair before paint.
              </p>

              <h2>Calgary-specific considerations</h2>
              <p>
                Drying conditions shift fast with season and indoor humidity. Texture timing changes with that. A crew
                that already works on Calgary ceilings will usually know how to adjust knockdown timing so the pattern
                does not collapse or stay too sharp.
              </p>

              <h2>Why paint blending matters as much as texture</h2>
              <p>
                Many homeowners think the texture match is the whole job. In practice, the last visible problem is
                often paint sheen. If the primer flashes differently or the ceiling paint is blended too tightly, the
                patch can still show even when the knockdown pattern is close. That is why strong repair crews talk
                about texture matching and paint blending as one scope.
              </p>

              <h2>Related guides that help with the same repair</h2>
              <p>
                This page focuses on how texture is matched. The related articles below cover the two most common
                reasons Calgary homeowners end up needing that work in the first place: leaks and fixture changes.
              </p>
              <ul>
                {CLUSTER_SUPPORT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Need pricing too?</h2>
              <p>
                If you are comparing scope and budget, start with our{" "}
                <Link href="/blog/knockdown-ceiling-repair-cost-calgary-2026">
                  knockdown ceiling repair cost guide
                </Link>
                . If you already know the ceiling needs work, request a{" "}
                <Link href="/quote">fast quote</Link> or see the full{" "}
                <Link href="/services/knockdown-ceiling-repair">service page</Link>.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Key takeaway</h3>
              <p className="mt-3 text-sm text-muted">
                Texture matching is really a repair-plus-finishing problem. The pattern, edge feathering, primer, and
                paint all have to work together.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Why this matters</h3>
              <p className="mt-3 text-sm text-muted">
                This article explains what a good texture match should look like before you compare pricing, leak
                repairs, or pot-light patch work.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Cluster links</h3>
              <div className="mt-4 grid gap-3 text-sm">
                {RELATED_LINKS.map((item) => (
                  <Link key={item.href} className="btn border" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">What to look for</div>
              <p className="mt-2 text-sm text-muted">
                The best indicator of a strong knockdown repair crew is not a low price. It is consistent pattern
                matching, flat patch prep, and a clear paint-blending plan.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
