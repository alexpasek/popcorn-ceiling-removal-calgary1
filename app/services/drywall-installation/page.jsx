import Link from "next/link";
import Script from "next/script";
import ServiceGallery from "@/components/ServiceGallery";
import { SITE } from "@/data/site";

export const metadata = {
  title:
    "Professional Drywall Installation Calgary | Licensed Drywall Contractor",
  description:
    "Expert drywall contractor in Calgary. Basement, ceiling & commercial installation. Licensed installer. Level 5 finish. Free quote (825) 365-3770.",
  keywords:
    "drywall installation Calgary, drywall contractor, professional drywall installation, drywall installer, drywall hanging, basement drywall installation, ceiling drywall installation, drywall finishing, drywall taping and mudding",
  openGraph: {
    title:
      "Professional Drywall Installation Calgary | Licensed Drywall Contractor",
    description:
      "Expert drywall installation contractor serving Calgary. Basement drywall, ceiling installation, drywall hanging, finishing & Level 5 smooth.",
    type: "article",
    images: [
      {
        url: `${SITE.domain}/images/services/drywall/1.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional drywall installation Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Drywall Installation Calgary",
    description:
      "Licensed drywall contractor. Expert drywall installation services for residential & commercial.",
  },
  alternates: { canonical: `${SITE.domain}/services/drywall-installation/` },
};

const IMAGES = [
  "/images/services/drywall/1.jpg",
  "/images/services/drywall/2.jpg",
  "/images/services/drywall/3.jpg",
];

// Image alt texts for SEO
const IMAGE_ALTS = [
  "Professional basement drywall installation Calgary - finished walls with Level 5 smooth finish",
  "Expert ceiling drywall installation Calgary - taping and mudding in progress", 
  "Commercial drywall contractor Calgary - office buildout installation complete",
];

// Shared CTA styles to match front page (brand red buttons)
const BTN =
  "inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30 active:opacity-100";
const BTN_ALT =
  "inline-flex items-center justify-center rounded-xl border border-red-600 px-4 py-2 font-semibold text-red-700 hover:bg-red-50 transition";

export default function Page() {
  const city = SITE?.city || "Calgary";
  const brand = SITE?.brand || "Drywall Pro";
  const phoneHref = SITE?.phoneHref || "tel:+1";
  const phone = SITE?.phone || "(000) 000‑0000";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Drywall Installation Services",
    serviceType: "Drywall Installation",
    description:
      "Professional drywall installation contractor providing expert drywall hanging, basement drywall installation, ceiling drywall installation, drywall finishing, taping and mudding services in Calgary.",
    areaServed: {
      "@type": "City",
      name: "Calgary",
      "@id": "https://en.wikipedia.org/wiki/Calgary",
    },
    provider: {
      "@type": "LocalBusiness",
      name: brand,
      telephone: phone,
      image: `${SITE.domain}/logo.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.0447,
        longitude: -114.0719,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drywall Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basement Drywall Installation",
            description:
              "Professional basement drywall installation with moisture-resistant materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceiling Drywall Installation",
            description:
              "Expert ceiling drywall installation and hanging services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Finishing",
            description:
              "Professional drywall taping, mudding, and Level 5 finish services",
          },
        },
      ],
    },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What drywall installation services do you offer in Calgary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive drywall installation services including basement drywall installation, ceiling drywall installation, garage drywall installation, residential and commercial drywall installation. Our professional drywall contractor services include drywall hanging, sheetrock installation, drywall taping and mudding, and Level 5 drywall finish.",
        },
      },
      {
        "@type": "Question",
        name: "How much does drywall installation cost in Calgary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drywall installation cost varies by project size and complexity. Basic drywall hanging starts around $2-3 per sq ft, while complete drywall installation with taping, mudding, and Level 4 finish ranges $4-6 per sq ft. Level 5 drywall finish adds $1-2 per sq ft. Contact us for a free drywall installation quote.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a licensed and insured drywall contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are a licensed drywall installer and fully insured drywall contractor serving Calgary. Our professional drywall installation team follows all safety standards and building codes for residential and commercial projects.",
        },
      },
      {
        "@type": "Question",
        name: "How long does drywall installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeline depends on project scope. Small room drywall installation takes 1-2 days. Basement drywall installation typically requires 3-5 days for hanging, taping, mudding, and drying. Complete drywall installation for renovation or new construction takes 5-10 days including finishing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer drywall finishing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide complete drywall finishing including drywall taping and mudding, drywall sanding, Level 4 drywall finish, and Level 5 drywall finish. We also offer skim coat after drywall for ultra-smooth surfaces ready for paint.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install drywall for basement renovations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Basement drywall installation is one of our specialties. We handle drywall installation for renovation, drywall installation after demolition, and new drywall installation for basement development projects with proper moisture barriers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do commercial drywall installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide both residential drywall installation and commercial drywall installation. Our services include office drywall installation, drywall installation for commercial buildouts, and drywall installation for additions.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD for Service + FAQ */}
      <Script id="drywall-service-ld" type="application/ld+json">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="drywall-faq-ld" type="application/ld+json">
        {JSON.stringify(jsonLdFAQ)}
      </Script>

      {/* HERO SECTION - MODERN */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-gray-50 py-16">
        <div className="container-x">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Licensed & Insured Drywall Contractor
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Expert Drywall Installation<br />
                <span className="text-red-600">in Calgary</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Professional drywall contractors serving Calgary homes and businesses. 
                From basement finishing to complete renovations, we deliver quality craftsmanship 
                with transparent pricing and guaranteed results.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href={phoneHref} className={BTN + " text-lg px-8 py-4"}>
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
                <Link href="/quote/" className={BTN + " text-lg px-8 py-4"}>
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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Licensed Drywall Installer
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fully Insured
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Level 5 Finish Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us for Your Drywall Project
          </h2>
          <p className="text-lg text-gray-600">
            We're not just another drywall company. Here's what sets us apart.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed and insured for your peace of mind. We follow all Calgary building codes and safety standards.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden fees or surprise charges. Get a detailed quote upfront so you know exactly what to expect.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              We take pride in our work. From Level 4 to premium Level 5 finishes, we deliver results that last.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - COMPREHENSIVE */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drywall Services
            </h2>
            <p className="text-lg text-gray-600">
              Whether it's a small repair or a complete basement renovation, we've got you covered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basement Drywall */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Basement Drywall
            </h3>
            <p className="text-gray-600 mb-4">
              Transform your basement into usable living space. We handle everything from framing to finishing with moisture-resistant materials and proper vapor barriers.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Drywall installation for renovation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                New drywall installation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Drywall installation after demolition
              </li>
            </ul>
          </div>

          {/* Ceiling Drywall */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ceiling Drywall
            </h3>
            <p className="text-gray-600 mb-4">
              Fresh ceiling installation or repairs. Choose from smooth finishes, knockdown texture, or our premium Level 5 ultra-smooth finish.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Drywall board installation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Drywall sheet installation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Remove and replace drywall
              </li>
            </ul>
          </div>

          {/* Drywall Finishing */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Drywall Finishing
            </h3>
            <p className="text-gray-600 mb-4">
              Professional taping, mudding, and sanding services. We offer both standard Level 4 finish and premium Level 5 smooth finish for high-end projects.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Professional taping & mudding
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Skim coat after drywall
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Level 5 smooth finish
              </li>
            </ul>
          </div>

          {/* Garage & Additions */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Garage & Additions
            </h3>
            <p className="text-gray-600 mb-4">
              Garage, bathroom, and kitchen drywall for renovations and additions. Fire-rated materials where required by code.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Bathroom drywall installation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Kitchen drywall installation
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Wallboard installation
              </li>
            </ul>
          </div>

          {/* Commercial Projects */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
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
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Commercial Projects
            </h3>
            <p className="text-gray-600 mb-4">
              Office spaces, retail buildouts, and tenant improvements. Licensed for commercial work with proper permits and inspections.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Office spaces
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Retail buildouts
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tenant improvements
              </li>
            </ul>
          </div>

          {/* Residential Projects */}
          <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Residential Projects
            </h3>
            <p className="text-gray-600 mb-4">
              Whole-home drywall for houses and condos. New construction, renovations, and repairs done right the first time.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Whole-home installations
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Install new drywall
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Drywall installation for remodeling
              </li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600">
              See our quality workmanship in action
            </p>
          </div>
          <ServiceGallery images={IMAGES} />
        </div>
      </section>

      {/* WHAT WE FIX */}
      <section className="container-x py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mx-auto">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
              What We Fix &amp; Build
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-3">
                <li>
                  <strong>Repairs &amp; patching:</strong> water damage, popped
                  screws, dents, holes, bad seams, corner beads.
                </li>
                <li>
                  <strong>Ceiling work:</strong> smooth finish or matching
                  knockdown/orange‑peel textures; pot‑light changes.
                </li>
                <li>
                  <strong>Level 5 smooth:</strong> skim coat for ultra‑flat,
                  premium paint results.
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <strong>Installations:</strong> basements, new rooms,
                  bulkheads, sound‑reducing assemblies.
                </li>
                <li>
                  <strong>Taping &amp; mudding:</strong> crisp seams, tight
                  corners, consistent coats and sanding.
                </li>
                <li>
                  <strong>Prime &amp; paint:</strong> optional finishing for a
                  single, clean hand‑off.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US - SEO CONTENT */}
      <section className="container-x py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700">
            <h2>About Our Drywall Company</h2>
            <p>
              We're a professional drywall installation contractor serving Calgary and surrounding areas. From basement finishing to complete home renovations, our licensed and insured team delivers quality craftsmanship you can trust. We also specialize in{" "}
              <Link
                href="/"
                className="text-red-600 font-semibold hover:text-red-700 transition"
              >
                popcorn ceiling removal and smooth ceiling finishing
              </Link>
              .
            </p>

            <h3>What We Do</h3>
            <p>
              Whether you need drywall for a new basement, ceiling repairs, or a complete home renovation, our experienced installers handle it all:
            </p>
            <ul>
              <li>
                <strong>Basement Projects</strong> — Complete basement finishing with moisture-resistant materials, proper insulation, and vapor barriers
              </li>
              <li>
                <strong>Ceiling Work</strong> — New ceilings, repairs, and finishing with smooth or textured options
              </li>
              <li>
                <strong>Garage & Additions</strong> — Fire-rated materials and code-compliant installations for garages, bathrooms, and kitchens
              </li>
              <li>
                <strong>Commercial Work</strong> — Office spaces, retail buildouts, and tenant improvements with proper permits
              </li>
              <li>
                <strong>Residential Projects</strong> — Whole-home installations, renovations, and repairs for houses and condos
              </li>
            </ul>

            <h3>Our Installation Process</h3>
            <p>
              We follow industry best practices for every project. Our professional installation service ensures properly installed boards with correct fastening patterns and spacing. We handle new construction, renovations, and repairs including water damage fixes.
            </p>

            <h3>Finishing Services</h3>
            <p>
              Beyond installation, we provide expert finishing services including:
            </p>
            <ul>
              <li>
                <strong>Taping & Mudding</strong> — Precise tape application and multiple mud coats for seamless joints
              </li>
              <li>
                <strong>Sanding</strong> — Dust-controlled sanding for smooth, paint-ready surfaces
              </li>
              <li>
                <strong>Level 4 Finish</strong> — Standard smooth finish suitable for flat paint and light textures
              </li>
              <li>
                <strong>Level 5 Finish</strong> — Ultra-smooth premium finish with skim coat for high-end applications
              </li>
            </ul>

            <h3>Why We're Different</h3>
            <p>
              As a licensed and insured contractor, we follow all Calgary building codes and safety standards. Our experienced team delivers quality results on time and on budget, whether it's a small repair or a large commercial project.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - GENERAL & COST KEYWORDS */}
      <section className="bg-red-50 py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Drywall Installation Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Fair and honest pricing for{" "}
                <strong>affordable drywall installation</strong>—professional
                quality without surprises
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Get Your Custom Drywall Installation Estimate
                </h3>
                <p className="text-red-100">
                  Request a{" "}
                  <strong className="text-white">
                    drywall installation quote
                  </strong>{" "}
                  tailored to your specific project needs
                </p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      Basic
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Service Level
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Drywall Hanging
                    </h4>
                    <p className="text-sm text-gray-600">
                      Professional board installation and hanging services
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-red-50 border-2 border-red-500 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      Complete
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Service Level
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Full Installation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Hanging, taping, mudding, and Level 4 finish
                    </p>
                  </div>

                  <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      Premium
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Service Level
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Deluxe Package
                    </h4>
                    <p className="text-sm text-gray-600">
                      Level 5 finish, prime coat, and paint-ready
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-amber-500"
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
                    What Influences Your Drywall Installation Investment?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Project scope:</strong> Room size, basement,
                          ceiling, or whole-home
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Ceiling height:</strong> Standard vs. vaulted
                          or cathedral ceilings
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Total area:</strong> Square footage and number
                          of rooms
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Finish quality:</strong> Level 4 standard vs.
                          Level 5 premium smooth
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Material selection:</strong> Standard,
                          moisture-resistant, or fire-rated drywall
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold mt-1">•</span>
                        <span>
                          <strong>Design complexity:</strong> Curves, arches,
                          bulkheads, or custom features
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    Every project is unique. Get a personalized{" "}
                    <strong>drywall installation estimate</strong> from our{" "}
                    <strong>licensed drywall installer</strong> team in
                    Calgary—no obligation, free consultation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/quote/" className={BTN + " text-lg px-8 py-3"}>
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Get Free Custom Quote
                    </Link>
                    <a
                      href={phoneHref}
                      className={BTN_ALT + " text-lg px-8 py-3"}
                    >
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
                      Call for Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - MODERNIZED */}
      <section className="container-x py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Our simple 6-step process from quote to completion
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Free Consultation & Quote",
              d: "Request a drywall installation estimate. We'll assess your project, discuss materials, finish levels, and provide transparent pricing.",
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
              t: "Site Preparation",
              d: "Complete protection of floors, fixtures, and furniture. Clean cuts, proper framing checks, and material delivery.",
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
              t: "Expert Drywall Hanging",
              d: "Professional drywall board installation with proper fastening patterns, spacing, and techniques for long-lasting results.",
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
              t: "Taping & Mudding",
              d: "Precise drywall taping and mudding with multiple coats. Tight seams, crisp corners, and smooth transitions.",
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
              t: "Professional Sanding",
              d: "Dust-controlled drywall sanding for Level 4 or Level 5 drywall finish. Quality checks under raking light.",
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
              t: "Optional Finishing",
              d: "Prime and paint services available. Complete your drywall installation project with one trusted contractor.",
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
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Calgary
            </h2>
            <p className="text-lg text-gray-600">
              Professional drywall services throughout Calgary and surrounding areas
            </p>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-center">
            <p className="text-gray-700">
              We provide complete drywall installation and finishing services throughout Calgary including: Beltline, Kensington, Hillhurst, Sunnyside, Bridgeland,
              Inglewood, Mission, Marda Loop, Altadore, Mount Royal, Signal
              Hill, West Springs, Tuscany, Arbour Lake, Varsity, Brentwood,
              Bowness, Panorama Hills, Evergreen, Shawnessy, Somerset, Mahogany,
              Auburn Bay, Cranston, Seton, McKenzie Towne, McKenzie Lake, and
              surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="container-x">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Licensed and insured drywall contractor serving Calgary. Get your free quote today—no obligation, no pressure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Licensed & Insured
                </div>
                <p className="text-gray-300 text-sm">
                  Professional drywall contractor
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Transparent Pricing
                </div>
                <p className="text-gray-300 text-sm">
                  Free drywall installation quote
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-red-400 font-bold mb-2">
                  ✓ Quality Guarantee
                </div>
                <p className="text-gray-300 text-sm">
                  Level 5 finish available
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
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
              Professional Drywall Installation Contractor • Serving All Calgary
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
