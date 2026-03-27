import Link from "next/link";
import Script from "next/script";
import { getBlogPost } from "@/data/blogPosts";
import { SITE } from "@/data/site";

const post = getBlogPost("drywall-installation-intent-calgary");

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

const INTENT_SIGNALS = [
  "What does drywall installation cost in Calgary?",
  "How long will hanging, taping, and finishing take?",
  "Do we need full installation or targeted repair?",
  "What finish level is right for the space?",
];

const AUTHORITY_FLOW = [
  "Clear scope and written measurements before work begins.",
  "Licensed and insured installers with recent local projects.",
  "Dust control, protection, and a clean daily wrap-up plan.",
  "Finish standards explained (Level 4 or Level 5) with samples.",
  "Transparent timeline and a single point of contact.",
];

const PROJECT_FLOW = [
  {
    title: "Walkthrough and intent check",
    desc: "We confirm goals, budget, and timeline, then map out what is install vs repair.",
  },
  {
    title: "Prep and protection",
    desc: "Floors, vents, and adjacent rooms are protected for a clean jobsite.",
  },
  {
    title: "Hang and secure",
    desc: "Board layout is planned to reduce seams and improve strength.",
  },
  {
    title: "Tape, mud, and sand",
    desc: "Multiple coats with drying time for a smooth, paint ready finish.",
  },
  {
    title: "Prime and handoff",
    desc: "Final check for flatness, corners, and fastener patterns.",
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

  return (
    <main className="bg-white">
      <Script id="drywall-intent-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-3xl">
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
            <p className="mt-4 text-lg text-muted">{post.description}</p>
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
              <h2>Intent: what people actually want</h2>
              <p>
                Most homeowners searching for drywall installation in {city} are
                not just looking for a trade. They want a clear plan, a clean
                process, and a finish that looks perfect under paint. That is
                why intent is usually about clarity more than price.
              </p>
              <ul>
                {INTENT_SIGNALS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Authority flow: how to verify the right crew</h2>
              <p>
                Authority is not a logo or a slogan. It is the flow of proof
                that shows a contractor can deliver a consistent finish. Use
                these checks to qualify a drywall installer for both new walls
                and repair work.
              </p>
              <ol>
                {AUTHORITY_FLOW.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>

              <h2>Install vs repair: a quick decision guide</h2>
              <div className="not-prose mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-ink">
                    Repair makes sense when
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>Damage is limited to a few sections or seams.</li>
                    <li>Studs and insulation are still in good condition.</li>
                    <li>The existing finish can be blended to match.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-ink">
                    Installation is better when
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>You are finishing a basement or new addition.</li>
                    <li>There is water damage across multiple walls.</li>
                    <li>You want a full Level 5 smooth finish.</li>
                  </ul>
                </div>
              </div>

              <h2>A clean project flow that avoids surprises</h2>
              <p>
                When intent and authority align, the job flows. This is the
                sequence we use on drywall installation and repair projects:
              </p>
              <ul>
                {PROJECT_FLOW.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}.</strong> {step.desc}
                  </li>
                ))}
              </ul>

              <h2>Local Calgary considerations</h2>
              <p>
                Calgary weather can swing fast. Drying times change with season
                and humidity, so timelines should include realistic cure and
                sand windows. A good crew plans for this and keeps you informed.
              </p>

              <h2>Ready for drywall installation or repair?</h2>
              <p>
                If you want expert drywall installation in {city}, explore our{" "}
                <Link href="/services/drywall-installation">
                  drywall installation service
                </Link>{" "}
                or request a <Link href="/quote">fast quote</Link>. We focus on
                clean prep, smooth finishes, and a process you can trust.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Key takeaways</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Intent is about clarity: price, finish, and timeline.</li>
                <li>Authority is proof: process, protection, and results.</li>
                <li>Repair vs install depends on scope and finish goals.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink">Quick links</h3>
              <div className="mt-4 grid gap-3 text-sm">
                <Link className="btn border" href="/services/drywall-installation">
                  Drywall installation
                </Link>
                <Link className="btn btn-primary" href="/quote">
                  Get a fast quote
                </Link>
                <Link className="btn border" href="/blog/popcorn-ceiling-removal-cost-calgary-2026">
                  2026 popcorn cost guide
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">
                Serving {city} with fast response times.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <div className="text-xs font-semibold text-red-700">
                About {brand}
              </div>
              <p className="mt-2 text-sm text-muted">
                We handle drywall installation and repair with clean prep,
                consistent finish levels, and a simple scope that keeps projects
                on track.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
