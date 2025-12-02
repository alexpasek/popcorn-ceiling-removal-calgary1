import type { Metadata } from "next";
import MobileSlideMenu from "@/components/MobileSlideMenu";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { SITE } from "@/data/site";

type Address = {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

type Geo = {
  lat?: number;
  lng?: number;
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "Popcorn Ceiling Removal Calgary | Drywall Installation & Painting",
  description: SITE.description,
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Popcorn Ceiling Removal Calgary",
    description: SITE.description,
    type: "website",
    locale: "en_CA",
    url: SITE.domain,
  },
  twitter: {
    card: "summary",
    title: "Popcorn Ceiling Removal Calgary",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const address: Address =
    SITE.address ?? {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    };
  const geo: Geo = SITE.geo ?? {};
  const email = SITE.email || "";
  const emailHref = SITE.emailHref || (email ? `mailto:${email}` : "");
  const sameAs = Object.values(SITE.socials || {}).filter(Boolean);
  const areaServed = (SITE.serviceAreas || []).map((name) => ({
    "@type": "Place",
    name,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.domain}/#business`,
    name: SITE.brand,
    url: SITE.domain,
    image: `${SITE.domain}/logo.jpg`,
    telephone: SITE.phoneHref.replace("tel:+", "+"),
    priceRange: SITE.priceRange,
    email: email || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo:
      typeof geo.lat === "number" && typeof geo.lng === "number"
        ? { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng }
        : undefined,
    areaServed,
    sameAs,
    openingHours: "Mo-Sa 08:00-18:00",
    hasMap: `${SITE.domain}/contact`,
    serviceType: [
      "Popcorn ceiling removal",
      "Drywall installation",
      "Drywall repair",
      "Wallpaper removal",
      "Interior painting",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phoneHref.replace("tel:+", "+"),
        email: email || undefined,
        areaServed: "CA-AB",
        availableLanguage: ["en"],
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.domain}/#popcorn-service`,
    name: "Popcorn Ceiling Removal",
    provider: { "@type": "LocalBusiness", name: SITE.brand, "@id": `${SITE.domain}/#business` },
    areaServed,
    serviceType: "Ceiling texture removal",
    url: SITE.domain,
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <MobileSlideMenu />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </body>
    </html>
  );
}
