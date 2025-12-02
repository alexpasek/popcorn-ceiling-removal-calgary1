import Script from "next/script";
import QuoteForm from "@/components/QuoteForm";
import { SITE } from "@/data/site";

type Address = {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export const metadata = {
  title: "Get a Quote | Popcorn Ceiling Removal Calgary",
  description:
    "Request a fast quote in Calgary for popcorn ceiling removal, drywall, painting, and wallpaper removal. Local crew serving Calgary, Airdrie, Chestermere, Cochrane, and Okotoks.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Quote | Popcorn Ceiling Removal Calgary",
    description:
      "Same-week quotes for popcorn ceiling removal, drywall, and painting across Calgary and nearby areas.",
    url: "https://popcornceilingremovalcalgary.com/quote",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title: "Get a Quote | Popcorn Ceiling Removal Calgary",
    description:
      "Fast, local quote for popcorn ceiling removal, drywall, and painting in Calgary.",
  },
};

export default function Page() {
  const phone = SITE.phone || "(825) 365-3770";
  const phoneHref = SITE.phoneHref || "tel:+18253653770";
  const address: Address =
    SITE.address ?? {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    };
  const serviceAreas = SITE.serviceAreas || ["Calgary, AB"];
  const email = SITE.email || "info@popcornceilingremovalcalgary.com";
  const emailHref = SITE.emailHref || `mailto:${email}`;

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${SITE.domain}/#business`,
      name: SITE.brand,
      url: SITE.domain,
      areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
      telephone: phoneHref.replace("tel:+", "+"),
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
      openingHours: "Mo-Sa 08:00-18:00",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phoneHref.replace("tel:+", "+"),
          email,
          contactType: "sales",
          areaServed: "CA-AB",
          availableLanguage: ["en"],
        },
      ],
    },
  };

  return (
    <section className="container-x py-12">
      <Script id="quote-contact-ld" type="application/ld+json">
        {JSON.stringify(contactLd)}
      </Script>

      <h1 className="text-3xl font-extrabold text-ink">Get a Fast Quote</h1>
      <p className="text-muted mt-2">
        Calgary-based crew. Same-week quotes for popcorn ceiling removal, drywall
        repair/installation, painting, and wallpaper removal.
      </p>

      <div className="mt-6">
        <QuoteForm />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Contact</h2>
          <p className="text-sm text-muted mt-2">
            Call or submit the form for a fast estimate in Calgary and nearby
            areas.
          </p>
          <div className="mt-4 space-y-2 text-sm text-ink">
            <div>
              <span className="font-semibold">Phone:</span>{" "}
              <a href={phoneHref} className="link-primary">
                {phone}
              </a>
            </div>
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <a href={emailHref} className="link-primary">
                {email}
              </a>
            </div>
            <div>
              <span className="font-semibold">Hours:</span> {SITE.hours}
            </div>
            {address.street && (
              <div>
                <span className="font-semibold">Shop/Office:</span>{" "}
                <span>
                  {address.street}, {address.city}, {address.region}{" "}
                  {address.postalCode}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Service Areas</h2>
          <p className="text-sm text-muted mt-2">
            We serve Calgary and nearby communities with mobile crews and
            dust-controlled setups.
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink">
            {serviceAreas.map((area) => (
              <li key={area} className="rounded-lg bg-muted/10 px-3 py-2">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
