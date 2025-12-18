import Link from "next/link";
import Script from "next/script";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import ServiceCard from "@/components/ServiceCard";
import NeighborhoodGrid from "@/components/NeighborhoodGrid";
import { SITE } from "@/data/site";

export const metadata = {
  title:
    "Professional Popcorn Ceiling Removal Calgary | Smooth Ceiling Contractor",
  description:
    "Expert popcorn ceiling removal contractor in Calgary. Professional ceiling texture removal, stipple ceiling removal, and ceiling resurfacing. Fast, dust-controlled service. Call (825) 365-3770.",
  keywords:
    "popcorn ceiling removal Calgary, popcorn ceiling contractor, professional popcorn ceiling removal, smooth ceiling contractor, ceiling texture removal, stipple ceiling removal, ceiling resurfacing, popcorn ceiling removal service",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title:
      "Professional Popcorn Ceiling Removal Calgary | Smooth Ceiling Contractor",
    description:
      "Expert popcorn ceiling removal contractor in Calgary. Professional ceiling texture removal, stipple ceiling removal, and ceiling resurfacing. Fast, dust-controlled service.",
    url: SITE.domain,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: `${SITE.domain}/images/before-after/after.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional popcorn ceiling removal Calgary results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Popcorn Ceiling Removal Calgary",
    description:
      "Expert popcorn ceiling removal contractor. Professional ceiling texture removal & resurfacing.",
  },
};

// Shared CTA styles (match front page brand buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl !bg-red-600 !text-white px-4 py-2 font-semibold shadow-sm transition hover:!bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:!ring-red-600/30";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const phoneHref = SITE?.phoneHref || "tel:+18253653770";
  const phone = SITE?.phone || "+1 (825) 365‑3770";
  const brand = SITE?.brand || "Popcorn Ceiling Removal Calgary";
  const city = SITE?.city || "Calgary";
  const serviceAreas = SITE?.serviceAreas || ["Calgary, AB"];

  const aggregate = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#business`,
    name: brand,
    alternateName: "Professional Popcorn Ceiling Removal Calgary",
    description:
      "Professional popcorn ceiling removal contractor specializing in ceiling texture removal, stipple ceiling removal, and smooth ceiling resurfacing services in Calgary.",
    url: SITE.domain,
    telephone: phone,
    image: `${SITE.domain}/logo.jpg`,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE?.address?.street,
      addressLocality: SITE?.address?.city,
      addressRegion: SITE?.address?.region,
      postalCode: SITE?.address?.postalCode,
      addressCountry: SITE?.address?.country,
    },
    geo:
      SITE?.geo &&
      typeof SITE.geo.lat === "number" &&
      typeof SITE.geo.lng === "number"
        ? {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
          }
        : undefined,
    areaServed: (SITE?.serviceAreas || []).map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: Object.values(SITE?.socials || {}).filter(Boolean),
    openingHours: "Mo-Sa 08:00-18:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ceiling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Popcorn Ceiling Removal",
            description:
              "Expert popcorn ceiling removal service with dust control and smooth finish",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling Texture Removal",
            description:
              "Complete ceiling texture removal and stipple ceiling removal services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling Resurfacing",
            description:
              "Professional ceiling resurfacing for smooth, modern ceilings",
          },
        },
      ],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is professional popcorn ceiling removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional popcorn ceiling removal is the expert process of safely removing textured popcorn or stipple ceiling finishes. Our popcorn ceiling removal service includes scraping the texture, repairing the surface, and creating a smooth, modern ceiling ready for paint.",
        },
      },
      {
        "@type": "Question",
        name: "How much does popcorn ceiling removal cost in Calgary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popcorn ceiling removal cost in Calgary typically ranges from $2-4 per square foot. The cost to scrape popcorn ceiling depends on factors like ceiling height, room size, and whether the texture is painted. Contact us for a free, accurate quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer ceiling texture removal and stipple ceiling removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in all types of ceiling texture removal including stipple ceiling removal, cottage cheese ceiling removal, and stucco ceiling removal. Our smooth ceiling contractor service handles any textured finish.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can a popcorn ceiling contractor start in Calgary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As a professional popcorn ceiling removal contractor, we typically schedule small to medium projects within 3-5 days. Larger ceiling resurfacing projects are usually booked within 1-2 weeks depending on scope.",
        },
      },
      {
        "@type": "Question",
        name: "Do you control dust during popcorn removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our popcorn ceiling removal service includes complete dust control. We seal work areas, cover floors and fixtures, and use professional methods to minimize mess during ceiling texture removal.",
        },
      },
      {
        "@type": "Question",
        name: "Can you paint after ceiling resurfacing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. After professional popcorn ceiling removal or ceiling resurfacing, we can prime and paint your ceilings for a complete, finished look—all done by one trusted contractor.",
        },
      },
    ],
  };

  const neighbourhoods = [
    "Beltline",
    "Kensington",
    "Bridgeland",
    "Inglewood",
    "Mission",
    "Marda Loop",
    "Altadore",
    "Mount Royal",
    "Signal Hill",
    "West Springs",
    "Tuscany",
    "Arbour Lake",
    "Varsity",
    "Brentwood",
    "Bowness",
    "Panorama Hills",
    "Evergreen",
    "Shawnessy",
    "Somerset",
    "Mahogany",
    "Auburn Bay",
    "Cranston",
    "Seton",
    "McKenzie Towne",
    "McKenzie Lake",
  ];

  const toSlug = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      {/* JSON-LD */}
      <Script id="home-aggregate-ld" type="application/ld+json">
        {JSON.stringify(aggregate)}
      </Script>
      <Script id="home-faq-ld" type="application/ld+json">
        {JSON.stringify(faqLd)}
      </Script>

      {/* HERO (keep your existing hero component) */}
      <Hero />

      {/* MODERN TRUST STRIP / CTA BAR */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container-x py-8">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-lg border border-red-100">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-red-600">
                  4.9 ★★★★★
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  92+ Calgary Homeowners
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Professional Popcorn Ceiling Removal
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Complete Dust Control
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Smooth Ceiling Contractor
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={phoneHref} className={BTN}>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {phone}
              </a>
              <Link href="/quote/" className={BTN}>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HERO CONTENT - SEO-RICH INTRO */}
      <section className="container-x py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Calgary's Trusted{" "}
            <span className="text-red-600">
              Popcorn Ceiling Removal Contractor
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Expert <strong>popcorn ceiling removal service</strong> specializing
            in <strong>ceiling texture removal</strong>,{" "}
            <strong>stipple ceiling removal</strong>, and{" "}
            <strong>ceiling resurfacing</strong>. Transform outdated textured
            ceilings into smooth, modern surfaces with Calgary's professional
            smooth ceiling contractor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote/" className={BTN + " text-lg px-8 py-4"}>
              Get Your Free Estimate
            </Link>
            <Link
              href="/services/popcorn-ceiling-removal-calgary/"
              className={BTN_ALT + " text-lg px-8 py-4"}
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - MODERNIZED */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Ceiling & Wall Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From <strong>popcorn ceiling removal</strong> to complete{" "}
              <strong>ceiling resurfacing</strong>, we deliver smooth, modern
              finishes across {city}. Expert{" "}
              <strong>ceiling texture removal</strong> with dust control and
              professional results.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Expert <strong>popcorn ceiling removal service</strong> with
                safe scraping, skim coating, and smooth finishing. Transform
                dated popcorn ceilings into modern, paint-ready surfaces.
              </p>
              <Link
                href="/services/popcorn-ceiling-removal-calgary/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ceiling Texture Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Complete <strong>stipple ceiling removal</strong> and all
                texture types. Our <strong>smooth ceiling contractor</strong>{" "}
                expertise handles any textured finish including stucco and
                cottage cheese patterns.
              </p>
              <Link
                href="/services/knockdown-ceiling-repair/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ceiling Resurfacing
              </h3>
              <p className="text-gray-600 mb-4">
                Professional <strong>ceiling resurfacing</strong> for damaged or
                textured ceilings. Level 5 smooth finishes, repairs, and
                complete restoration by experienced contractors.
              </p>
              <Link
                href="/services/drywall-installation/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Drywall Installation & Repair
              </h3>
              <p className="text-gray-600 mb-4">
                Full drywall installs, patches, taping, mudding, and sanding.
                Paint-ready surfaces with professional finishing.
              </p>
              <Link
                href="/services/drywall-installation/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Wallpaper Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Safe wallpaper stripping, adhesive cleanup, wall repairs, and
                primer application for paint-ready surfaces.
              </p>
              <Link
                href="/services/wallpaper-removal/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interior Painting
              </h3>
              <p className="text-gray-600 mb-4">
                Professional interior painting for ceilings, walls, trim, and
                doors. Sharp cut-lines and durable finishes.
              </p>
              <Link
                href="/services/interior-painting/"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER - ENHANCED */}
      <section className="container-x py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Popcorn Ceiling Removal Results
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See the transformation from dated popcorn texture to smooth, modern
            ceilings. Expert <strong>ceiling texture removal</strong> by
            Calgary's trusted <strong>popcorn ceiling contractor</strong>.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <BeforeAfter
            before="/images/before-after/before.jpg"
            after="/images/before-after/after.jpg"
            alt="Professional popcorn ceiling removal before and after - smooth ceiling results"
          />
        </div>
      </section>

      {/* WHY CHOOSE US - NEW SECTION */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Choose Our Popcorn Ceiling Removal Service?
              </h2>
              <p className="mt-4 text-lg text-red-50">
                Calgary's most trusted{" "}
                <strong className="text-white">
                  popcorn ceiling removal contractor
                </strong>{" "}
                with proven results and professional service
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Certified & Experienced
                    </h3>
                    <p className="text-red-50">
                      Professional{" "}
                      <strong className="text-white">
                        popcorn ceiling removal contractors
                      </strong>{" "}
                      with years of experience in{" "}
                      <strong className="text-white">
                        ceiling texture removal
                      </strong>{" "}
                      and resurfacing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Fast & Reliable
                    </h3>
                    <p className="text-red-50">
                      Most projects scheduled within 3-5 days. On-time
                      completion with efficient{" "}
                      <strong className="text-white">
                        stipple ceiling removal
                      </strong>{" "}
                      and finishing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Complete Dust Control
                    </h3>
                    <p className="text-red-50">
                      Advanced containment systems minimize mess during taking
                      down popcorn ceiling. Protected floors, sealed work areas,
                      and thorough cleanup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Smooth Finish Guarantee
                    </h3>
                    <p className="text-red-50">
                      Expert{" "}
                      <strong className="text-white">
                        smooth ceiling contractor
                      </strong>{" "}
                      delivering Level 5 finishes. Perfect{" "}
                      <strong className="text-white">
                        ceiling resurfacing
                      </strong>{" "}
                      every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO COPY WITH INTERNAL LINKS - ENHANCED */}
      <section className="container-x py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700">
            <h2>Calgary's Premier Popcorn Ceiling Removal Contractor</h2>
            <p>
              Looking to modernize your home with{" "}
              <strong>professional popcorn ceiling removal</strong>? Our expert{" "}
              <strong>popcorn ceiling removal service</strong> transforms dated
              textured ceilings into smooth, contemporary surfaces that enhance
              your home's value and appeal.
            </p>
            <p>
              As Calgary's trusted <strong>popcorn ceiling contractor</strong>,
              we specialize in all types of{" "}
              <strong>ceiling texture removal</strong> including{" "}
              <strong>stipple ceiling removal</strong>, cottage cheese ceiling
              removal, and stucco ceiling removal. Whether you're scraping
              popcorn ceiling in a single room or stripping popcorn ceiling
              throughout your entire home, we deliver clean, professional
              results with complete dust control.
            </p>

            <h3>Complete Ceiling Services</h3>
            <p>
              Beyond{" "}
              <Link href="/services/popcorn-ceiling-removal-calgary/">
                popcorn ceiling removal
              </Link>
              , we offer comprehensive{" "}
              <Link href="/services/drywall-installation/">
                drywall installation & repair
              </Link>
              ,{" "}
              <Link href="/services/wallpaper-removal/">wallpaper removal</Link>
              ,{" "}
              <Link href="/services/knockdown-ceiling-repair/">
                knockdown ceiling repair
              </Link>
              , and{" "}
              <Link href="/services/interior-painting/">interior painting</Link>
              . Our <strong>smooth ceiling contractor</strong> team provides
              seamless <strong>ceiling resurfacing</strong> from start to
              finish.
            </p>

            <h3>Why Remove Popcorn Ceilings?</h3>
            <ul>
              <li>
                <strong>Modern aesthetic:</strong> Taking off popcorn ceiling
                instantly updates your home's look with smooth, contemporary
                finishes
              </li>
              <li>
                <strong>Increased home value:</strong> Professional popcorn
                removal enhances property appeal and market value
              </li>
              <li>
                <strong>Easier maintenance:</strong> Smooth ceilings are simpler
                to clean and maintain than textured surfaces
              </li>
              <li>
                <strong>Better lighting:</strong> Get rid of popcorn ceiling
                shadows with reflective smooth surfaces
              </li>
              <li>
                <strong>Health & safety:</strong> Older popcorn may contain
                asbestos—professional removal ensures safety
              </li>
            </ul>

            <h3>Our Professional Process</h3>
            <p>
              When you choose our{" "}
              <strong>popcorn ceiling removal service</strong>, you get:
            </p>
            <ul>
              <li>
                <strong>Complete protection:</strong> Floors covered, fixtures
                masked, rooms sealed for dust control during taking down popcorn
                ceiling
              </li>
              <li>
                <strong>Safe removal:</strong> Expert scraping techniques for
                both painted and unpainted popcorn textures
              </li>
              <li>
                <strong>Smooth finishing:</strong> Professional skim coating and
                sanding for Level 5 smooth results
              </li>
              <li>
                <strong>Optional painting:</strong> Complete the transformation
                with professional prime and paint services
              </li>
              <li>
                <strong>Thorough cleanup:</strong> Spotless site when we're
                done—ready for you to enjoy
              </li>
            </ul>

            <h3>Serving All Calgary Neighborhoods</h3>
            <p>
              From heritage homes in Kensington and Inglewood requiring careful{" "}
              <strong>ceiling texture removal</strong>, to newer builds in
              Mahogany and Seton needing <strong>ceiling resurfacing</strong>,
              our Calgary crew brings professional expertise to every project.
              We understand local architecture and deliver results that respect
              your home's character while bringing it into the modern era.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - ISOLATED COST KEYWORDS */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popcorn Ceiling Removal Cost in Calgary
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Transparent pricing for professional popcorn removal—no hidden
                fees
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <h3 className="text-2xl font-bold">
                  Understanding Your Investment
                </h3>
                <p className="mt-2 text-red-50">
                  Typical{" "}
                  <strong className="text-white">
                    popcorn ceiling removal cost
                  </strong>{" "}
                  ranges in Calgary—factors that influence pricing
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      $2-3
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      per sq. ft.
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Basic Removal
                    </h4>
                    <p className="text-sm text-gray-600">
                      Standard unpainted popcorn scraping
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-red-50 border-2 border-red-500 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                     from $6
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      per sq. ft.
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Complete Service
                    </h4>
                    <p className="text-sm text-gray-600">
                      Painted popcorn removal, smooth finish, prime ready
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                     TBD
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      per sq. ft.
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Premium Package
                    </h4>
                    <p className="text-sm text-gray-600">
                      Level 5 finish, prime, and professional paint
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    What Affects Popcorn Removal Cost?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>
                        <strong>Painted texture:</strong> Cost to scrape popcorn
                        ceiling increases if painted (requires more labor)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>
                        <strong>Ceiling height:</strong> Higher ceilings require
                        additional equipment and time
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>
                        <strong>Room size:</strong> Larger areas may qualify for
                        volume pricing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>
                        <strong>Ceiling condition:</strong> Repairs needed
                        before or after removal
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>
                        <strong>Finish level:</strong> Level 5 smooth finish
                        costs more than basic skim coat
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    Get an accurate{" "}
                    <strong>popcorn ceiling removal cost</strong> estimate for
                    your Calgary home—free consultation and transparent pricing
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/quote/" className={BTN + " text-lg px-8 py-3"}>
                      Get Free Detailed Quote
                    </Link>
                    <a
                      href={phoneHref}
                      className={BTN_ALT + " text-lg px-8 py-3"}
                    >
                      Call for Pricing: {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS / INTERNAL LINKS - ENHANCED */}
      <section className="container-x py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Popcorn Ceiling Removal Across Calgary
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert <strong>popcorn ceiling contractor</strong> serving all
            Calgary neighborhoods. Fast response, professional{" "}
            <strong>ceiling texture removal</strong>, and guaranteed smooth
            results.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {neighbourhoods.map((n) => (
            <Link
              key={n}
              href={`/calgary/${toSlug(n)}`}
              className="group rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm hover:border-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              <span className="group-hover:font-semibold">{n}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <strong className="text-gray-900">Also serving:</strong>{" "}
            {serviceAreas.join(", ")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Professional <strong>popcorn ceiling removal service</strong>{" "}
            throughout the Calgary metro area
          </p>
        </div>
      </section>

      {/* PROCESS CARDS - MODERNIZED */}
      <section className="bg-white py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Popcorn Ceiling Removal Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional <strong>ceiling texture removal</strong> and{" "}
              <strong>ceiling resurfacing</strong> in six proven steps
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                t: "Free Consultation & Quote",
                d: "Send photos or book an on-site visit. Transparent popcorn removal cost estimate with no surprises.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                n: "02",
                t: "Complete Protection",
                d: "Floors covered, fixtures masked, rooms sealed. Professional prep before scraping popcorn ceiling begins.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                n: "03",
                t: "Expert Texture Removal",
                d: "Safe stripping of popcorn, stipple, or stucco ceiling textures using proven techniques for taking off popcorn ceiling.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                n: "04",
                t: "Ceiling Resurfacing",
                d: "Professional skim coating and smoothing. Level 5 finish options for ultra-smooth ceilings by expert smooth ceiling contractor.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                n: "05",
                t: "Sanding & Quality Check",
                d: "Precision sanding under raking light. Ensuring smooth, even surfaces ready for prime and paint.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                n: "06",
                t: "Optional Prime & Paint",
                d: "Complete the transformation with professional painting. One contractor from start to finish—no coordination headaches.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.n}
                className="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-red-500 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white font-bold flex items-center justify-center shadow-lg">
                  {s.n}
                </div>
                <div className="mb-4 ml-8 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.t}</h3>
                <p className="text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW - ENHANCED */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Calgary Homeowners Say About Our Service
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real reviews from satisfied customers of our{" "}
              <strong>professional popcorn ceiling removal service</strong>
            </p>
            <div className="mt-4 flex justify-center items-center gap-2">
              <div className="text-3xl font-bold text-red-600">4.9</div>
              <div className="text-2xl text-amber-400">★★★★★</div>
              <div className="text-gray-600">(92+ reviews)</div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Best popcorn ceiling contractor in Calgary! They removed the texture from our entire main floor in two days. Complete dust control and the ceilings look brand new. Highly recommend their professional popcorn ceiling removal service.",
                n: "Sophie M.",
                l: "Mahogany",
                s: "Popcorn Ceiling Removal",
              },
              {
                q: "Excellent ceiling texture removal and resurfacing. The smooth ceiling contractor team was professional, on time, and the quality is outstanding. They transformed our dated popcorn ceilings into modern, smooth surfaces.",
                n: "Ryan T.",
                l: "Kensington",
                s: "Ceiling Resurfacing",
              },
              {
                q: "Had stipple ceiling removal done throughout our home. The cost to scrape popcorn ceiling was very reasonable and the results are perfect. Clean work, great communication, and they painted too. One-stop shop!",
                n: "Marta K.",
                l: "Cranston",
                s: "Complete Service",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl text-amber-400">★★★★★</div>
                  <div className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {r.s}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{r.q}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold">
                    {r.n[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{r.n}</div>
                    <div className="text-sm text-gray-500">{r.l}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/quote/"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
            >
              Join 90+ satisfied Calgary homeowners
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - ENHANCED */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Ceilings?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional{" "}
              <strong className="text-white">
                popcorn ceiling removal contractor
              </strong>{" "}
              serving all of Calgary. Expert{" "}
              <strong className="text-white">ceiling texture removal</strong>,{" "}
              <strong className="text-white">ceiling resurfacing</strong>, and
              smooth finishes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Fast Scheduling
                </div>
                <p className="text-gray-300 text-sm">
                  Most projects start within 3-5 days
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Transparent Pricing
                </div>
                <p className="text-gray-300 text-sm">
                  Clear popcorn removal cost—no surprises
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Complete Service
                </div>
                <p className="text-gray-300 text-sm">
                  From removal to paint—one contractor
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center rounded-xl bg-white text-red-600 px-8 py-4 text-lg font-bold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Get Free Quote
              </Link>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Licensed • Insured • 90+ Five-Star Reviews
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
