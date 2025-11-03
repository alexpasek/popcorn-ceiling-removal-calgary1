// /app/about/page.jsx — ONE photo; sales-only links that exist

import Link from "next/link";

export const metadata = {
  title:
    "About Us — Popcorn Ceiling Removal Calgary | Dust-Free Ceiling Smoothing & Painting",
  description:
    "We help Calgary homeowners remove popcorn ceilings cleanly and finish them glass-smooth. Fast quotes, tidy work, drywall & paint under one roof.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Us — Popcorn Ceiling Removal Calgary",
    description:
      "Ceiling smoothing, drywall, and interior painting for Calgary & nearby areas. Clean, fast, respectful.",
    url: "/about/",
    type: "website",
  },
};

export default function AboutPage() {
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "(825) 365-3770";
  const PHONE_HREF = "tel:" + PHONE_NUMBER.replace(/[^0-9]/g, "");

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Popcorn Ceiling Removal Pro — Calgary",
    url: "https://popcorn-ceiling-removal-calgaryfinal.pages.dev/about/",
    logo: "/logo.png",
    areaServed: [
      { "@type": "City", name: "Calgary, AB" },
      { "@type": "City", name: "Airdrie, AB" },
      { "@type": "City", name: "Cochrane, AB" },
      { "@type": "City", name: "Chestermere, AB" },
      { "@type": "City", name: "Okotoks, AB" },
    ],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Ceiling & Interior Finishes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Popcorn ceiling removal (dust-controlled)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smooth ceiling refinishing (Level 5)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall repair & installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling & interior painting",
          },
        },
      ],
    },
    telephone: PHONE_NUMBER,
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "About", item: "/about/" },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you keep the work dust-controlled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We isolate rooms, protect floors and vents, and use extraction where it helps. Our goal is a clean job, every time.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical ceiling project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard living room or hallway can be completed within a few days including drying and paint. Whole-home projects vary based on size and ceilings’ condition.",
        },
      },
      {
        "@type": "Question",
        name: "Can you coordinate with our electrician for pot-lights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can sequence the ceiling smoothing and priming around your electrician’s rough-in so the finished ceiling looks seamless.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calgary (NW, NE, SW, SE) plus Airdrie, Cochrane, Chestermere, and Okotoks. If you’re nearby, ask—we often travel.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* HERO — the ONLY photo on the page */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About{" "}
              <span className="text-red-600">
                Popcorn Ceiling Removal Calgary
              </span>
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We help Calgary homeowners remove dated popcorn texture and
              refinish ceilings to a smooth, modern look. Our team handles the
              entire workflow—protection, removal, skim coat, prime, and
              paint—so you get a tidy, stress-free result and ceilings that look
              brand new.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
              >
                Get a Fast Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-slate-300 text-slate-800 hover:bg-slate-50"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />{" "}
                Dust-controlled approach
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" /> Smooth
                Level-5 finish available
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />{" "}
                Drywall + paint under one roof
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />{" "}
                Respectful, tidy, on-schedule
              </li>
            </ul>
          </div>

          {/* The single image — replace src with your generated team/van photo */}
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <img
              src="/images/popcorn-ceiling-removal-calgary-team.png"
              alt="Our Calgary ceiling crew in front of the work van"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE (no extra images) */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Calgary crew, clean process, modern results
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We’re a hands-on local team. You’ll see us masking floors,
            protecting vents, and keeping a clean work area. We coordinate with
            your electrician when you’re adding pot-lights, and we communicate
            daily so you always know what’s next. Whether it’s a living room
            refresh or a whole-home smooth ceiling project, our standard is
            simple: straight lines, crisp corners, and an even, bright finish.
          </p>

          <div className="mt-6 p-5 rounded-2xl border border-slate-200 bg-slate-50">
            <h3 className="font-medium">What we do</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-700">
              <li>
                <Link
                  href="/services/popcorn-ceiling-removal"
                  className="underline"
                >
                  Popcorn ceiling removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drywall-installation"
                  className="underline"
                >
                  Drywall installation & repair
                </Link>
              </li>
              <li>
                <Link href="/services/wallpaper-removal" className="underline">
                  Wallpaper removal
                </Link>
              </li>
              <li>
                <Link href="/services/interior-painting" className="underline">
                  Ceiling & interior painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/knockdown-ceiling-repair"
                  className="underline"
                >
                  Knockdown ceiling repair
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              <Link
                href="/services/popcorn-ceiling-removal"
                className="underline"
              >
                See popcorn removal process
              </Link>
              <Link href="/quote" className="underline">
                Get pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-12 lg:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Our 5-step, dust-controlled process
          </h2>
          <ol className="mt-6 grid lg:grid-cols-5 gap-4 text-slate-700">
            {[
              [
                "Protect",
                "Floors, walls, fixtures, returns, and vents are covered before we begin.",
              ],
              [
                "Remove",
                "Popcorn texture is carefully softened and removed, keeping debris contained.",
              ],
              [
                "Refinish",
                "Skim, sand, and level the surface to a smooth, modern finish.",
              ],
              [
                "Prime",
                "We prime ceilings to lock in the finish and reveal any tiny touch-ups.",
              ],
              [
                "Paint",
                "Ceilings are painted bright and even—ready to make the whole room feel new.",
              ],
            ].map(([title, copy], i) => (
              <li
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="text-sm text-slate-500">Step {i + 1}</div>
                <div className="mt-1 font-medium">{title}</div>
                <p className="mt-2 text-sm leading-relaxed">{copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Check your dates & get pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE (no extra images; sales link) */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Serving Calgary & nearby
          </h2>
          <p className="mt-3 text-slate-700">
            We work across Calgary (NW, NE, SW, SE) and nearby communities like
            Airdrie, Cochrane, Chestermere, and Okotoks. Share your address and
            a few photos and we’ll confirm pricing and the earliest start dates.
          </p>
          <div className="mt-6">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Start your quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs (visible content mirrors JSON-LD) */}
      <section className="bg-slate-50 py-12 lg:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {[
              [
                "Do you keep the work dust-controlled?",
                "Yes. We isolate rooms, protect floors and vents, and use extraction where it helps. Our goal is a clean job, every time.",
              ],
              [
                "How long does a typical ceiling project take?",
                "A standard living room or hallway can be completed within a few days including drying and paint. Whole-home timelines vary with size and condition.",
              ],
              [
                "Can you coordinate with our electrician for pot-lights?",
                "Yes. We can sequence the ceiling smoothing and priming around your electrician’s rough-in so the finished ceiling looks seamless.",
              ],
              [
                "Which areas do you serve?",
                "Calgary (NW, NE, SW, SE) plus Airdrie, Cochrane, Chestermere, and Okotoks. If you’re nearby, ask—we often travel.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="font-medium">{q}</div>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready for bright, smooth ceilings?
          </h2>
          <p className="mt-3 text-slate-700">
            Send a couple photos and the room sizes and we’ll reply with an
            estimated scope and start-date options.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-red-600 text-white font-medium shadow hover:bg-red-700"
            >
              Start your quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-slate-300 text-slate-800 hover:bg-slate-50"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
