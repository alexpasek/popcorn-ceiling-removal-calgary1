import Link from "next/link";

export const metadata = { title: "Services | Popcorn Ceiling Removal Calgary" };

const items = [
  {
    title: "Popcorn Ceiling Removal",
    href: "/services/popcorn-ceiling-removal",
  },
  {
    title: "Drywall Installation & Repair",
    href: "/services/drywall-installation",
  },
  { title: "Wallpaper Removal", href: "/services/wallpaper-removal" },
  { title: "Interior Painting", href: "/services/interior-painting" },

  // 👇 NEW
  {
    title: "Knockdown Ceiling Repair",
    href: "/services/knockdown-ceiling-repair",
  },
];

export default function Page() {
  return (
    <section className="container-x py-12">
      <h1 className="text-3xl font-extrabold text-ink">Services</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <li key={i.href} className="card p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-ink">{i.title}</h2>
            <p className="text-sm text-muted mt-2">
              Explore the process, prep, and finish quality.
            </p>
            <Link href={i.href} className="btn mt-4 border">
              View
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Dev-only sanity check so we don't forget the card again
if (process.env.NODE_ENV === "development") {
  const hasKnockdown = items.some(
    (i) => i.href === "/services/knockdown-ceiling-repair"
  );
  if (!hasKnockdown) {
    // eslint-disable-next-line no-console
    console.warn("Services page is missing Knockdown Ceiling Repair card.");
  }
}
