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

const HERO_POINTS = [
  "Knockdown ceiling texturing for Calgary homes that need prep, repair, and finish quality handled together.",
  "Clear estimates for popcorn-to-knockdown upgrades, fresh texturing, and ceiling texture matching.",
  "Local service focused on clean masking, consistent texture depth, and ceilings that look right after paint.",
];

const TRUST_ITEMS = [
  {
    title: "Transparent Scope",
    text: "Quotes are based on the real ceiling condition, not a generic spray-only allowance.",
    icon: "scope",
  },
  {
    title: "Repair-First Approach",
    text: "If the ceiling needs patching, stain blocking, or skim work, that gets addressed before texture is applied.",
    icon: "repair",
  },
  {
    title: "Consistent Finish",
    text: "Knockdown texture has to read evenly across the room, especially once natural light hits the ceiling.",
    icon: "finish",
  },
  {
    title: "Local Trust",
    text: "Calgary-focused service with fast calls back, clear communication, and a direct path to a written estimate.",
    icon: "trust",
  },
];

const COMPARISON_CARDS = [
  {
    title: "Knockdown vs Popcorn",
    text: "Knockdown looks cleaner, more current, and less bulky than old popcorn ceilings. It is the better fit when homeowners want a more finished room without going to a full smooth ceiling.",
  },
  {
    title: "Knockdown vs Splatter Coat",
    text: "Splatter coat tends to read heavier and more random. Knockdown has a flatter, more controlled pattern that usually feels more intentional in finished Calgary homes.",
  },
  {
    title: "Knockdown vs Smooth Ceiling",
    text: "A smooth ceiling can look excellent, but it is less forgiving. Knockdown is often the practical middle ground when the goal is a modern finish with more tolerance for minor substrate variation.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Review The Ceiling",
    text: "We assess existing texture, patch history, staining, lighting changes, and whether the room starts with popcorn.",
  },
  {
    n: "02",
    title: "Protect And Prep",
    text: "Floors, walls, fixtures, and openings are masked so the room is ready for repair work and texture application.",
  },
  {
    n: "03",
    title: "Complete Repairs",
    text: "Loose areas, failed patches, seams, cracks, and damaged board are corrected before the finish stage.",
  },
  {
    n: "04",
    title: "Apply Knockdown Texture",
    text: "Texture is applied with the finish depth and pattern chosen for the room, then flattened at the right stage.",
  },
  {
    n: "05",
    title: "Leave It Finish-Ready",
    text: "The ceiling is left ready for the next paint step, with the room cleaned up and the scope completed properly.",
  },
];

const PREP_CARDS = [
  {
    title: "Ceiling Texture Repair",
    text: "Leaks, cracks, previous cut-outs, and failed patches often need repair before the new ceiling finish can look consistent.",
    href: "/calgary/ceiling-texture-repair/",
    label: "ceiling texture repair in Calgary",
  },
  {
    title: "Skim Coating",
    text: "Some ceilings need a broader correction layer before texturing, especially after removal or when the surface has too many visible transitions.",
    href: "/blog/when-to-skim-coat-before-knockdown-texture/",
    label: "knockdown texture preparation",
  },
  {
    title: "Surface Imperfections",
    text: "If the ceiling has ridges, joint buildup, patch halos, or uneven previous work, the base needs to be corrected first.",
    href: "/blog/fixing-ceiling-imperfections-before-texturing/",
    label: "ceiling texturing Calgary",
  },
];

const COST_FACTORS = [
  "Room size and ceiling height",
  "Whether the job starts with popcorn removal",
  "Amount of patching or texture matching required",
  "Need for skim coating, stain blocking, or broader prep",
];

const CLUSTER_LINKS = [
  {
    href: "/blog/knockdown-ceiling-texture-vs-popcorn-calgary/",
    title: "Knockdown Ceiling Texture vs Popcorn Ceiling in Calgary",
    text: "A simple comparison for homeowners deciding whether to keep popcorn ceilings or switch to knockdown.",
  },
  {
    href: "/blog/knockdown-ceiling-cost-calgary/",
    title: "How Much Does Knockdown Ceiling Texture Cost in Calgary?",
    text: "A pricing guide that explains how room size, prep, repairs, and removal work affect the quote.",
  },
  {
    href: "/blog/popcorn-to-knockdown-ceiling-conversion-calgary/",
    title: "Popcorn Ceiling Removal to Knockdown Finish in Calgary",
    text: "Explains the common upgrade path from dated popcorn ceilings to a more modern knockdown finish.",
  },
  {
    href: "/blog/knockdown-vs-splatter-coat-calgary/",
    title: "Knockdown vs Splatter Coat in Calgary",
    text: "Helpful comparison content for homeowners choosing between common textured ceiling finishes.",
  },
  {
    href: "/blog/how-to-match-knockdown-ceiling-texture/",
    title: "How to Match Existing Knockdown Ceiling Texture",
    text: "Explains how repair work blends into an existing textured ceiling without flashing after paint.",
  },
];

const FAQS = [
  {
    q: "What is knockdown ceiling texture?",
    a: "Knockdown is a textured ceiling finish that is sprayed or applied, then flattened back to create a softer, more controlled pattern. It usually feels more current than old popcorn ceilings and more forgiving than a perfectly smooth ceiling.",
  },
  {
    q: "Can you remove popcorn ceiling and replace it with knockdown texture?",
    a: "Yes. That is one of the most common upgrade paths. The old ceiling texture is removed, the base is corrected as needed, and the new knockdown finish is applied once the surface is ready.",
  },
  {
    q: "When is skim coating needed before knockdown texture?",
    a: "Skim coating is often needed when the ceiling has too many visible repairs, uneven joints, rough removal damage, or broad imperfections that would still show through the new texture.",
  },
  {
    q: "Do you handle ceiling texture repair and matching?",
    a: "Yes. If the ceiling has water damage, patch areas, or pot-light changes, repair work and texture matching can be built into the project before the final finish is completed.",
  },
  {
    q: "Where do you offer knockdown ceiling texturing in Calgary?",
    a: `We work across Calgary, including ${AREAS.join(", ")}, plus nearby communities when the project fits our service area.`,
  },
];

const GALLERY = [
  {
    src: "/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00003.jpg",
    alt: "Knockdown ceiling texture project in Calgary living area",
  },
  {
    src: "/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00004.jpg",
    alt: "Applying knockdown ceiling texture in Calgary",
  },
  {
    src: "/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00007.jpg",
    alt: "Knockdown ceiling texture finishing work in Calgary home",
  },
];

export const metadata = {
  title: "Knockdown Ceiling Texture Calgary | Local Contractor",
  description:
    "Knockdown ceiling texture in Calgary with prep, repairs, popcorn-to-knockdown conversions, and clean finish-ready results.",
  alternates: { canonical: `${SITE.domain}/calgary/knockdown-ceiling-texture/` },
  openGraph: {
    title: "Knockdown Ceiling Texture Calgary | Local Contractor",
    description:
      "Calgary knockdown ceiling texturing with repair-first prep, popcorn conversions, and local quote support.",
    url: `${SITE.domain}/calgary/knockdown-ceiling-texture/`,
    type: "article",
    images: [
      {
        url: `${SITE.domain}/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00003.jpg`,
        width: 1200,
        height: 630,
        alt: "Knockdown ceiling texture in Calgary",
      },
    ],
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Knockdown Ceiling Texture in Calgary",
    serviceType: "Knockdown ceiling texturing",
    provider: { "@type": "LocalBusiness", name: SITE.brand, "@id": `${SITE.domain}/#business` },
    areaServed: { "@type": "City", name: "Calgary, AB" },
    image: [`${SITE.domain}/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00003.jpg`],
    url: `${SITE.domain}/calgary/knockdown-ceiling-texture/`,
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
        name: "Knockdown Ceiling Texture",
        item: `${SITE.domain}/calgary/knockdown-ceiling-texture/`,
      },
    ],
  };

  return (
    <main className="bg-white text-ink">
      <Script id="calgary-knockdown-service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="calgary-knockdown-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="calgary-knockdown-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <section className="container-x py-6 md:py-10">
        <div className="mx-auto max-w-[1160px]">
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/services/" className="hover:underline">
              Services
            </Link>{" "}
            / <span className="text-ink">Knockdown Ceiling Texture</span>
          </nav>

          <div className="mt-4 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="border bg-[#f4f5f7] p-6 sm:p-8 md:p-10">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A93325]">
                Calgary Knockdown Ceiling Texturing
              </p>
              <h1 className="mt-5 text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[3.35rem]">
                Knockdown Ceiling Texture in Calgary
              </h1>
              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-muted">
                This page is built for homeowners looking specifically for knockdown ceiling texture in Calgary. If you
                want a cleaner, more modern ceiling finish, need popcorn-to-knockdown conversion work, or need repairs
                completed before the new texture goes on, this page is meant to give you clear answers and a simple
                next step.
              </p>

              <div className="mt-6 space-y-3">
                {HERO_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-[#C73E2C]" />
                    <p className="text-sm leading-6 text-ink">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/quote/"
                  className="inline-flex min-h-[52px] items-center justify-center bg-[#A93325] px-5 text-sm font-semibold text-white transition hover:bg-[#8B2A1F]"
                >
                  Get your free estimate
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#94a3b8] bg-white px-5 text-sm font-semibold text-ink transition hover:bg-[#fafafa]"
                >
                  Call now {SITE.phone}
                </a>
              </div>

              <div className="mt-5 rounded border border-[#e2e8f0] bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A93325]">This page is for you if</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  you want a cleaner ceiling finish, you are replacing popcorn ceilings with knockdown, or you need
                  repairs done before the new ceiling texture can look right.
                </p>
              </div>
            </div>

            <div className="overflow-hidden border bg-[#e5e7eb]">
              <img
                src="/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00007.jpg"
                alt="Knockdown ceiling texture contractor in Calgary completing finish work"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="border bg-white p-5">
                <div className="text-[#C73E2C]">
                  {item.icon === "scope" ? <ScopeIcon className="h-9 w-9" /> : null}
                  {item.icon === "repair" ? <RepairIcon className="h-9 w-9" /> : null}
                  {item.icon === "finish" ? <FinishIcon className="h-9 w-9" /> : null}
                  {item.icon === "trust" ? <TrustIcon className="h-9 w-9" /> : null}
                </div>
                <h2 className="mt-4 text-[15px] font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-8 md:py-14">
        <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionTitle title="What Is Knockdown Ceiling Texture?" />
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Knockdown ceiling texture is a finish designed to give the ceiling a softer, flatter texture pattern than
              heavier legacy finishes like popcorn. Instead of creating a sharp or oversized surface, the texture is
              flattened back so the finished ceiling looks more controlled and less dated.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              That is why many Calgary homeowners move toward knockdown when they are renovating older ceilings. It can
              modernize the room, help a repaired ceiling look more intentional, and often strikes the right balance
              between a full smooth finish and a heavier textured ceiling.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              If your project starts with old texture, patch repairs, or uneven previous work, the real value is not
              only in applying a new finish. The value is in making sure the surface is actually ready for knockdown
              ceiling texturing in Calgary before the finish stage begins.
            </p>
          </div>

          <div className="grid gap-4">
              <img
              src="/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00003.jpg"
              alt="Knockdown ceiling texture in Calgary after room protection and prep"
              className="h-[250px] w-full object-cover"
            />
            <div className="border bg-[#f8fafc] p-5">
              <h3 className="text-[15px] font-semibold text-ink">Common reasons people land here</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                <li>You want to update an older textured ceiling</li>
                <li>You are thinking about changing popcorn ceilings to knockdown</li>
                <li>You need a repair before the ceiling can be finished properly</li>
                <li>You want a more modern ceiling without going fully smooth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] py-10 md:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionTitle title="Knockdown vs Popcorn Ceiling vs Other Finishes" centered />
            <p className="mt-4 text-[15px] leading-7 text-muted">
              This section exists because Calgary homeowners often compare knockdown against popcorn, splatter coat,
              and smooth ceilings before they decide which finish is right for the room.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[1160px] gap-4 md:grid-cols-3">
            {COMPARISON_CARDS.map((card) => (
              <div key={card.title} className="border bg-white p-6">
                <h3 className="text-[17px] font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[980px] border bg-white p-6">
            <p className="text-[15px] leading-7 text-muted">
              For a deeper comparison with older ceiling texture, read{" "}
              <Link href="/blog/knockdown-ceiling-texture-vs-popcorn-calgary/" className="link-primary">
                knockdown ceiling texture Calgary
              </Link>
              , or compare finish styles in{" "}
              <Link href="/blog/knockdown-vs-splatter-coat-calgary/" className="link-primary">
                knockdown vs splatter coat Calgary
              </Link>
              . These guides simply give you more detail if you are still deciding which finish makes the most sense
              for your home.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[1160px]">
          <SectionTitle title="Our Calgary Knockdown Ceiling Process" />
          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-muted">
            A good knockdown ceiling project is not just a spray step. It is a sequence of review, preparation, repair,
            application, and finish control. That sequence matters if you want the final ceiling to look intentional
            rather than improvised.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="border bg-white p-5">
                <div className="text-[1.5rem] font-semibold leading-none text-[#cbd5e1]">{step.n}</div>
                <h3 className="mt-3 text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle title="When Prep, Repair, Or Skim Coating Is Needed" />
            <p className="mt-5 text-[15px] leading-7 text-muted">
              This is where a lot of weak ceiling jobs go wrong. The finish gets priced as if the ceiling is already
              ready, even when it clearly is not. If the substrate still has damage, staining, ridges, failed seams,
              or obvious patch transitions, those issues usually need to be addressed before knockdown texture is
              applied.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              For repair-driven projects, we also offer{" "}
              <Link href="/calgary/ceiling-texture-repair/" className="link-primary">
                ceiling texture repair in Calgary
              </Link>
              . If you are trying to understand whether the ceiling needs broader prep, the support articles on{" "}
              <Link href="/blog/when-to-skim-coat-before-knockdown-texture/" className="link-primary">
                knockdown texture preparation
              </Link>{" "}
              and{" "}
              <Link href="/blog/fixing-ceiling-imperfections-before-texturing/" className="link-primary">
                ceiling texturing Calgary
              </Link>{" "}
              explain the decision in more detail.
            </p>

            <div className="mt-6 grid gap-4">
              {PREP_CARDS.map((card) => (
                <div key={card.title} className="border bg-[#f8fafc] p-5">
                  <h3 className="text-[15px] font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
                  <Link href={card.href} className="mt-3 inline-flex text-sm font-semibold text-[#A93325] hover:underline">
                    {card.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00004.jpg"
            alt="Repair and knockdown ceiling preparation in Calgary"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-10 md:py-16">
        <div className="container-x">
          <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <img
              src="/images/blog/knockdown/knockdown-new/calgary-knockdown-ceiling00008.jpg"
              alt="Popcorn ceiling removal to knockdown texture conversion in Calgary"
              className="h-full min-h-[360px] w-full object-cover"
            />

            <div>
              <SectionTitle title="Popcorn Ceiling Removal To Knockdown Conversion" />
              <p className="mt-5 text-[15px] leading-7 text-muted">
                A large share of knockdown texture jobs start with homeowners who already know they do not want the old
                popcorn ceiling anymore. In those cases, the project is really a conversion: remove the dated ceiling
                finish, correct the substrate, and then apply a new knockdown texture that feels more current and more
                deliberate.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                If that sounds like your project, the related popcorn service page is{" "}
                <Link href="/services/popcorn-ceiling-removal-calgary/" className="link-primary">
                  popcorn ceiling removal Calgary
                </Link>
                . You can also read the support article on the{" "}
                <Link href="/blog/popcorn-to-knockdown-ceiling-conversion-calgary/" className="link-primary">
                  popcorn-to-knockdown ceiling upgrade
                </Link>
                if you want to see how that kind of project usually moves from old texture to a fresh new finish.
              </p>
              <div className="mt-6 rounded border border-[#e2e8f0] bg-white p-5">
                <h3 className="text-[15px] font-semibold text-ink">Common conversion situations</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  <li>Main-floor living rooms with dated popcorn ceilings</li>
                  <li>Basement ceilings that need a more modern textured finish</li>
                  <li>Whole-home updates where popcorn removal and new texturing are scoped together</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[1160px]">
          <SectionTitle title="Cost Factors For Calgary Knockdown Ceiling Texturing" />
          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-muted">
            The cost is driven mostly by prep and ceiling condition. The more the room needs before the finish can be
            applied, the more labour gets built into the job.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {COST_FACTORS.map((factor) => (
              <div key={factor} className="border bg-white p-5">
                <div className="text-[#C73E2C]">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{factor}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-7 text-muted">
            If pricing is your next step, read{" "}
            <Link href="/blog/knockdown-ceiling-cost-calgary/" className="link-primary">
              Calgary knockdown ceiling texturing
            </Link>{" "}
            to understand how prep, repairs, popcorn removal, and finish expectations shape the quote.
          </p>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[1160px]">
          <SectionTitle title="Helpful Calgary Guides" />
          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-muted">
            These guides answer common questions about pricing, repairs, finish choices, and popcorn-to-knockdown
            upgrades. They are here to help you understand the work before you request a quote.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CLUSTER_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="border bg-white p-5 transition hover:border-[#d1d5db] hover:shadow-sm">
                <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] py-10 md:py-16">
        <div className="container-x">
          <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionTitle title="Where We Offer Knockdown Ceiling Texturing In Calgary" />
              <p className="mt-5 text-[15px] leading-7 text-muted">
                We serve Calgary neighbourhoods where homeowners are renovating older ceilings, repairing damaged
                textures, or modernizing rooms that still have popcorn finishes. That includes {AREAS.join(", ")}.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                If you are in Calgary and want knockdown ceiling texture, this page is meant to give you the local
                information you need to decide whether this finish is the right fit for your home.
              </p>

              <div className="mt-6 rounded border border-[#dbe3eb] bg-white p-5">
                <h3 className="text-[15px] font-semibold text-ink">Why choose our Calgary team</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  <li>We price around the full ceiling path, not just the spray step.</li>
                  <li>We account for repairs, prep, and conversions before the work begins.</li>
                  <li>We keep the scope focused on the finish quality homeowners actually want.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {GALLERY.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} className="h-[180px] w-full object-cover sm:h-[160px] lg:h-[180px]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-10 md:py-16">
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <SectionTitle title="Knockdown Ceiling Texture FAQs" centered />
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

      <section className="container-x pb-14 md:pb-20">
        <div className="mx-auto max-w-[1160px] border bg-[#1f2937] px-6 py-8 text-white md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Request A Quote</p>
              <h2 className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em]">
                Ready for knockdown ceiling texture in Calgary?
              </h2>
              <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-white/85">
                If your project involves fresh texturing, popcorn-to-knockdown conversion, or a ceiling that needs
                repairs before the finish can look right, send the room details and we will quote the job around the
                actual scope.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-[52px] items-center justify-center bg-[#C73E2C] px-6 text-sm font-semibold text-white transition hover:bg-[#A93325]"
              >
                Call now {SITE.phone}
              </a>
              <Link
                href="/quote/"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Get a free estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.6rem]">{title}</h2>
      <div className={`mt-4 h-[2px] w-10 bg-[#C73E2C] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScopeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="3" width="12" height="18" rx="2" />
      <path d="M8 7h4M8 11h4M8 15h3" />
      <path d="M18 8v8M14 12h8" />
    </svg>
  );
}

function RepairIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 5l5 5M4 20l6-2 9-9-4-4-9 9-2 6z" />
    </svg>
  );
}

function FinishIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16M4 12h10M4 18h16" />
      <path d="M17 10l3 2-3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrustIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v5c0 4.5-2.7 7.7-7 10-4.3-2.3-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
