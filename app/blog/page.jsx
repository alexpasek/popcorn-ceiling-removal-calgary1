import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";
import { SITE } from "@/data/site";

export const metadata = {
  title: `Blog | ${SITE.brand}`,
  description:
    "Local Calgary guides for popcorn ceiling removal, drywall work, pricing, prep, and project planning.",
  alternates: { canonical: `${SITE.domain}/blog/` },
  openGraph: {
    title: `Blog | ${SITE.brand}`,
    description:
      "Local Calgary guides for popcorn ceiling removal, drywall work, pricing, prep, and project planning.",
    url: `${SITE.domain}/blog/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE.brand}`,
    description:
      "Local Calgary guides for popcorn ceiling removal, drywall work, pricing, prep, and project planning.",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Calgary ceiling and drywall guides
            </h1>
            <p className="mt-4 text-lg text-muted">
              Practical articles on popcorn ceiling removal costs, drywall
              installation, prep, finish quality, and quote planning in Calgary.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-red-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.slug}
              className={`card p-6 md:p-8 ${index === 0 ? "border-red-200" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-red-100 px-3 py-1 font-semibold text-red-700">
                  {index === 0 ? "Latest post" : "Article"}
                </span>
                <span>{post.dateLabel}</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-ink">
                <Link href={post.href} className="hover:text-red-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-muted">{post.description}</p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link href={post.href} className="btn btn-primary">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
