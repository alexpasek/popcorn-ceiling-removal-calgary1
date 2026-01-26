import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Drywall Installation Intent in Calgary | Installation and Repair",
  description:
    "A modern guide to drywall installation intent, authority signals, and repair vs install decisions for Calgary homeowners.",
  alternates: { canonical: `${SITE.domain}/blog/` },
  openGraph: {
    title: "Drywall Installation Intent in Calgary",
    description:
      "Learn how intent, authority, and project flow lead to better drywall installation and repair outcomes in Calgary.",
    url: `${SITE.domain}/blog/`,
    type: "article",
    images: [
      {
        url: `${SITE.domain}/images/services/drywall/1.jpg`,
        width: 1200,
        height: 630,
        alt: "Drywall installation and repair in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Installation Intent in Calgary",
    description:
      "Intent, authority, and project flow for drywall installation and repair in Calgary.",
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

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Drywall installation intent in Calgary
            </h1>
            <p className="mt-4 text-lg text-muted">
              A practical guide to intent, authority, and project flow so your
              drywall installation or repair ends with smooth walls and zero
              surprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="badge badge-primary">Drywall installation</span>
              <span className="badge badge-primary">Drywall repair</span>
              <span className="badge badge-primary">Calgary homes</span>
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
                If you want expert drywall installation in {city}, explore our
                {" "}
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
                <Link className="btn border" href="/contact">
                  Contact our team
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
