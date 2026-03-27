export const BLOG_POSTS = [
  {
    slug: "knockdown-ceiling-repair-cost-calgary-2026",
    href: "/blog/knockdown-ceiling-repair-cost-calgary-2026",
    title: "Knockdown Ceiling Repair Cost in Calgary: 2026 Price Guide",
    description:
      "Typical 2026 Calgary knockdown ceiling repair pricing, what changes the quote, and how water damage, texture matching, priming, and painting affect total cost.",
    date: "2026-03-27",
    dateLabel: "March 27, 2026",
    readTime: "5 min read",
    image: "/images/images/knockdown/hero-knockdown.jpg",
    imageAlt: "Knockdown ceiling repair cost guide for Calgary homeowners",
    tags: ["Knockdown ceiling repair", "Calgary pricing", "2026 guide"],
  },
  {
    slug: "popcorn-ceiling-removal-cost-calgary-2026",
    href: "/blog/popcorn-ceiling-removal-cost-calgary-2026",
    title: "Popcorn Ceiling Removal Cost in Calgary: 2026 Price Guide",
    description:
      "Typical 2026 Calgary popcorn ceiling removal prices, what changes the quote, and how skim coating, repairs, priming, and asbestos testing affect total cost.",
    date: "2026-03-26",
    dateLabel: "March 26, 2026",
    readTime: "6 min read",
    image: "/images/services/popcorn/1.jpg",
    imageAlt: "Popcorn ceiling removal cost guide for Calgary homeowners",
    tags: ["Popcorn ceiling removal", "Calgary pricing", "2026 guide"],
  },
  {
    slug: "drywall-installation-intent-calgary",
    href: "/blog/drywall-installation-intent-calgary",
    title: "Drywall Installation Intent in Calgary",
    description:
      "A modern guide to drywall installation intent, authority signals, and repair vs install decisions for Calgary homeowners.",
    date: "2026-03-12",
    dateLabel: "March 12, 2026",
    readTime: "5 min read",
    image: "/images/services/drywall/1.jpg",
    imageAlt: "Drywall installation and repair in Calgary",
    tags: ["Drywall installation", "Drywall repair", "Calgary homes"],
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
