import * as React from "react";
import { SITE } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  // Address (shared for SEO + map link)
  const addr = SITE.address || {
    street: "220 Southpoint Greenway SW",
    city: "Airdrie",
    region: "AB",
    postalCode: "T4B 5P4",
    country: "CA",
  };

  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${addr.street}, ${addr.city}, ${addr.region} ${addr.postalCode}, ${addr.country}`
  )}`;

  // Branding / socials
  const accent = SITE.accent ?? "#E31B23";
  const tint05 = `${accent}0D`; // ~5% alpha
  const tint10 = `${accent}1A`; // ~10% alpha
  const border20 = `${accent}33`; // ~20% alpha

  const socials = (SITE as any).socials ?? {};
  const socialLinks = [
    {
      name: "Instagram",
      href: socials.instagram as string,
      key: "ig",
      svg: InstagramIcon,
    },
    {
      name: "Facebook",
      href: socials.facebook as string,
      key: "fb",
      svg: FacebookIcon,
    },
  ].filter((s) => typeof s.href === "string" && s.href.length > 0);

  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container-x py-8 grid gap-6 md:grid-cols-3">
        {/* Left column */}
        <div>
          <div className="font-bold text-ink">{SITE.brand}</div>
          <div className="text-sm text-muted mt-1">Serving {SITE.city}</div>
          <div className="text-sm text-muted">Hours: {SITE.hours}</div>

          {/* Address */}
          <address
            className="not-italic mt-3 text-sm leading-6"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 rounded-md px-3 py-2 bg-muted/10 hover:bg-muted/20 transition"
              aria-label={`Open map for ${addr.street}, ${addr.city}`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 text-ink/70"
              >
                <path
                  d="M12 22s7-7.05 7-12a7 7 0 10-14 0c0 4.95 7 12 7 12zM12 11a3 3 0 110-6 3 3 0 010 6z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-ink/90">
                <span itemProp="streetAddress" className="block">
                  {addr.street}
                </span>
                <span className="block">
                  <span itemProp="addressLocality">{addr.city}</span>,{" "}
                  <span itemProp="addressRegion">{addr.region}</span>{" "}
                  <span itemProp="postalCode">{addr.postalCode}</span>
                </span>
              </span>
            </a>
            <meta itemProp="addressCountry" content={addr.country} />
          </address>

          {/* Phone CTA */}
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.brand} at ${SITE.phone}`}
            className="group mt-3 inline-flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition hover:shadow-md"
            style={{
              background: `linear-gradient(90deg, #fff, ${tint10})`,
              borderColor: border20,
            }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white transition group-hover:scale-105"
              style={{ background: accent }}
            >
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span
                className="block text-[11px] uppercase tracking-wide"
                style={{ color: accent, opacity: 0.85 }}
              >
                Call
              </span>
              <span
                className="block text-lg font-bold"
                style={{ color: accent }}
              >
                {SITE.phone}
              </span>
            </span>
          </a>
          {/* Email */}
          {SITE.emailHref && (
            <a
              href={SITE.emailHref}
              className="group mt-3 inline-flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition hover:shadow-md"
              style={{
                background: `linear-gradient(90deg, #fff, ${tint10})`,
                borderColor: border20,
              }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white transition group-hover:scale-105"
                style={{ background: accent }}
              >
                <EnvelopeIcon className="h-4 w-4" />
              </span>
              <span className="leading-tight text-ink">
                <span
                  className="block text-[11px] uppercase tracking-wide"
                  style={{ color: accent, opacity: 0.85 }}
                >
                  Email
                </span>
                <span className="block text-sm font-semibold">{SITE.email}</span>
              </span>
            </a>
          )}
        </div>

        {/* Right column: blurb + copyright + centered 3D socials */}
        <div className="text-sm text-muted md:col-span-2">
          <p>
            Popcorn ceiling removal, drywall installation &amp; repair,
            wallpaper removal, and interior painting with clean prep and dust
            control.
          </p>
          <p className="mt-2">
            © {year} {SITE.brand}. All rights reserved.
          </p>

          {/* Follow us (centered below text) */}

          <div className="mt-3 mb-[calc(env(safe-area-inset-bottom)+60px)] md:mb-0">  {/*adjust icons heights above phone number */}
            {socialLinks.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[.2em] text-muted">
                    Follow us
                  </span>
                </div>
                <ul className="mt-3 flex justify-center gap-3">
                  {socialLinks.map(({ name, href, key, svg: Icon }) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="inline-flex items-center justify-center rounded-full transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0"
                        style={{
                          width: 156, // bigger button
                          height: 56, // bigger button
                          color: accent,
                          background: `radial-gradient(120% 120% at 30% 20%, #fff 0%, ${tint05} 45%, ${tint10} 100%)`,
                          border: `1px solid ${border20}`,
                          boxShadow:
                            // inner highlights + outer elevation for a 3D pill
                            "inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.06), 0 8px 18px rgba(0,0,0,.12), 0 3px 6px rgba(0,0,0,.08)",
                          backdropFilter: "saturate(120%)",
                        }}
                      >
                        <Icon className="h-10 w-10" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Icons (inline, no external deps) ===== */
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1v3.67a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.67a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.21 1.11l-2.41 2.14z"
        fill="currentColor"
      />
    </svg>
  );
}

function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 6.75A2.75 2.75 0 015.75 4h12.5A2.75 2.75 0 0121 6.75v10.5A2.75 2.75 0 0118.25 20H5.75A2.75 2.75 0 013 17.25V6.75zm2.17-.75a.25.25 0 00-.17.07V6.2l7 5.6 7-5.6v-.13a.25.25 0 00-.17-.07H5.17zm13.48 2.44l-5.9 4.72a1 1 0 01-1.26 0L5.6 8.44v8.81c0 .14.11.25.25.25h12.3c.14 0 .25-.11.25-.25V8.44z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06C2 17.08 5.66 21.21 10.44 22v-7.03H7.9v-2.91h2.54V9.75c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.21 22 17.08 22 12.06z"
        fill="currentColor"
      />
    </svg>
  );
}
