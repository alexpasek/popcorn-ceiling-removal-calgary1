import { CALGARY_NEIGHBORHOODS } from "@/data/neighborhoods";
import { SITE } from "@/data/site";

export const runtime = "edge"; // ✅ required by Cloudflare adapter for non-static routes
export const dynamic = "force-dynamic"; // render on Edge (no SSG)
export const revalidate = 0; // no caching by Next; let CF handle caching if you want
export const dynamicParams = false;

function toTitle(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: { neighborhood: string };
}) {
  const name = toTitle(params.neighborhood);
  const title = `${name} | Popcorn Ceiling Removal in Calgary`;
  const description = `Popcorn ceiling removal, drywall installation & repair, wallpaper removal, and interior painting in ${name}, Calgary. Clean, dust-controlled prep with smooth finishes. Call ${SITE.phone}.`;
  return { title, description };
}

export default function Page({ params }: { params: { neighborhood: string } }) {
  const name = toTitle(params.neighborhood);

  // Optional: only allow the neighborhoods you list
  // If you want to 404 unknown slugs, uncomment the guard below.
  // if (!CALGARY_NEIGHBORHOODS.map(n => n.toLowerCase().replace(/\s+/g,'-')).includes(params.neighborhood)) {
  //   notFound(); // import { notFound } from 'next/navigation'
  // }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Popcorn Ceiling Removal",
    areaServed: `${name}, Calgary`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.brand,
      telephone: SITE.phoneHref.replace("tel:+", "+"),
    },
    serviceType: [
      "Popcorn ceiling removal",
      "Drywall installation",
      "Drywall repair",
      "Wallpaper removal",
      "Interior painting",
    ],
  };

  return (
    <section className="container-x py-12 prose">
      <h1>Popcorn Ceiling Removal - {name}, Calgary</h1>
      <p>
        We provide clean popcorn ceiling removal with dust control in{" "}
        <strong>{name}</strong> and across Calgary. Our crew protects floors,
        masks walls and fixtures, and leaves ceilings smooth and paint-ready. We
        also handle drywall installation & repair, wallpaper removal, and
        interior painting—so you can finish the whole room with one team.
      </p>

      <h2>What we do in {name}</h2>
      <ul>
        <li>
          Popcorn removal with wet-scrape, skim coat, sanding, and primer.
        </li>
        <li>
          Drywall installs, patching after trades, crack repairs and corner
          bead.
        </li>
        <li>
          Wallpaper removal with adhesive cleanup, surface patching, and
          priming.
        </li>
        <li>Interior painting for ceilings, walls, trim, and doors.</li>
      </ul>

      <h2>Pricing & Timelines</h2>
      <p>
        Most single rooms complete in 1–2 days depending on size and repairs.
        Whole homes vary. For homes built before ~1990, asbestos testing may be
        required before removal. Ask and we can refer local labs.
      </p>

      <h2>Why homeowners in {name} choose us</h2>
      <ul>
        <li>
          Careful protection & cleanup; vents sealed to minimize dust spread.
        </li>
        <li>Consistent, smooth finish ready for paint (we can paint too).</li>
        <li>Clear communication, reliable scheduling, and fair pricing.</li>
      </ul>

      <p>
        Ready to schedule in {name}? Call{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a> or use our{" "}
        <a href="/quote">fast quote form</a>.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </section>
  );
}
