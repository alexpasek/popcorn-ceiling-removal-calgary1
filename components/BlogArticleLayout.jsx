import Link from "next/link";
import { SITE } from "@/data/site";

export default function BlogArticleLayout({
  post,
  relatedLinks = [],
  keyTakeaway,
  whyItMatters,
  primaryCtaHref = "/calgary/knockdown-ceiling-texture/",
  primaryCtaLabel = "Knockdown ceiling texture in Calgary",
  primaryCtaText = "If you want pricing or want to talk through your ceiling project, start with our main Calgary knockdown ceiling page.",
  children,
}) {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="container-x py-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 font-semibold text-red-700"
              >
                Blog
              </Link>
              <span className="text-muted">{post.dateLabel}</span>
              <span className="text-muted">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted">{post.description}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {post.tags.map((tag) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-red-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
      </section>

      <section className="container-x -mt-10 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card p-6 md:p-10">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="mb-8 w-full rounded-2xl border border-red-100 bg-white"
            />
            <div className="prose max-w-none prose-headings:text-ink prose-p:text-ink prose-li:text-ink">
              {children}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-6">
              <h3 className="text-lg font-semibold text-ink">Main page</h3>
              <p className="mt-3 text-sm text-muted">{primaryCtaText}</p>
              <div className="mt-4 grid gap-3">
                <Link href={primaryCtaHref} className="btn btn-primary">
                  {primaryCtaLabel}
                </Link>
                <Link href="/quote/" className="btn border">
                  Get a quote
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted">
                Serving {SITE.city} with knockdown ceiling texture quotes.
              </p>
            </div>

            {keyTakeaway ? (
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-ink">Key takeaway</h3>
                <p className="mt-3 text-sm text-muted">{keyTakeaway}</p>
              </div>
            ) : null}

            {whyItMatters ? (
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-ink">Why this matters</h3>
                <p className="mt-3 text-sm text-muted">{whyItMatters}</p>
              </div>
            ) : null}

            {relatedLinks.length ? (
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-ink">Related links</h3>
                <div className="mt-4 grid gap-3 text-sm">
                  {relatedLinks.map((item) => (
                    <Link key={item.href} className="btn border" href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}
