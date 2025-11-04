// app/calgary/altadore/page.jsx
export const dynamic = "force-static";

import Link from "next/link";
import { SITE } from "@/data/site";

// Brand-red CTA (same look as front page)
var BTN =
  "inline-flex items-center justify-center rounded-xl !bg-red-600 !text-white px-4 py-2 font-semibold shadow-sm transition hover:!bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:!ring-red-600/30";

function toTitle(slug) {
  var parts = slug.split("-");
  for (var i = 0; i < parts.length; i++) {
    var s = parts[i];
    parts[i] = s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }
  return parts.join(" ");
}

export default function Page() {
  var area = toTitle("mount-royal");
  var city = SITE && SITE.city ? SITE.city : "Calgary";
  var phone = SITE && SITE.phone ? SITE.phone : "(825) 365-3770";
  var phoneHref = SITE && SITE.phoneHref ? SITE.phoneHref : "tel:+18253653770";

  return (
    <main className="container-x py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted">
        <Link href="/">Home</Link>
        <span className="px-1">/</span>
        <Link href="/calgary/">Calgary</Link>
        <span className="px-1">/</span>
        <span className="text-ink">{area}</span>
      </nav>

      {/* Headline + subline to match old deployment tone */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
        Popcorn Ceiling Removal in {area}
      </h1>
      <p className="mt-3 text-lg text-muted">
        Clean refinishing with dust control, plus drywall installation &amp;
        repair, wallpaper removal, and interior painting in {area}, {city}.
      </p>

      {/* CTAs (brand red) */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={phoneHref} className={BTN}>
          Call {phone}
        </a>
        <Link href="/quote" className={BTN}>
          Get a Quote
        </Link>
      </div>

      {/* Service details (readable colors forced) */}
      <div className="prose max-w-none mt-10 prose-headings:text-ink prose-p:text-ink prose-strong:text-ink">
        <h2>What we do in {area}</h2>
        <p>
          Dust-controlled scraping, skim-coating, detail sanding, and primer for
          a smooth, paint-ready ceiling. We can complete wall repairs and
          painting in the same visit so your space is fully finished.
        </p>
        <ul>
          <li>
            <strong>Dust control:</strong> sealed areas, protected floors,
            proper ventilation.
          </li>
          <li>
            <strong>Level 5 smooth (optional):</strong> skim coat and
            raking-light checks for ultra-flat results.
          </li>
          <li>
            <strong>One-team hand-off:</strong> prime and paint options after
            repairs and installs.
          </li>
        </ul>

        <h3>Popular services</h3>
        <ul>
          <li>
            <Link
              href="/services/popcorn-ceiling-removal-calgary"
              className="link-primary"
            >
              Popcorn ceiling removal
            </Link>{" "}
            with skim coat &amp; primer.
          </li>
          <li>
            <Link
              href="/services/drywall-installation"
              className="link-primary"
            >
              Drywall installation &amp; repair
            </Link>{" "}
            for seams, cracks, patches, basements.
          </li>
          <li>
            <Link href="/services/wallpaper-removal" className="link-primary">
              Wallpaper removal
            </Link>{" "}
            with adhesive cleanup and the right primer.
          </li>
          <li>
            <Link href="/services/interior-painting" className="link-primary">
              Interior painting
            </Link>{" "}
            — ceilings, walls, trim, clean cut-lines.
          </li>
        </ul>

        <h3>Nearby areas we also serve</h3>
        <p>
          Marda Loop, Garrison Woods, South Calgary, Mission, and Mount Royal.
        </p>
      </div>

      {/* Back link */}
      <p className="mt-10 text-sm text-muted">
        <Link href="/calgary/">← All Calgary neighbourhoods</Link>
      </p>
    </main>
  );
}
