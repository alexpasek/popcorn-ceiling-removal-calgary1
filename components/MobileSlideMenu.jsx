"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";

/**
 * MobileSlideMenu (mobile‑only)
 * - Keeps your existing header untouched.
 * - Shows a floating hamburger button on mobile only (lg:hidden).
 * - Opens a slide‑out menu with service links + CTAs.
 */
export default function MobileSlideMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    const { body } = document;
    if (open) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");
    return () => body.classList.remove("overflow-hidden");
  }, [open]);

  // Your routes (match your live site)
  const nav = [
    { href: "/", label: "Home" },
    {
      href: "/services/popcorn-ceiling-removal-calgary",
      label: "Popcorn Ceiling",
    },
    { href: "/services/drywall-installation", label: "Drywall Installation" },
    { href: "/services/wallpaper-removal", label: "Wallpaper Removal" },
    { href: "/services/interior-painting", label: "Interior Painting" },
    { href: "/services/knockdown-ceiling-repair", label: "Knockdown Repair" },
    { href: "/about-us/", label: "About us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Force brand‑red CTAs (avoid global black override)
  const BTN =
    "inline-flex items-center justify-center rounded-xl !bg-red-600 !text-white px-4 py-2 font-semibold shadow-sm transition hover:!bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:!ring-red-600/30";

  return (
    <>
      {/* Floating hamburger button — MOBILE ONLY */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="lg:hidden fixed right-3 top-[calc(env(safe-area-inset-top,0)+12px)] z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-ink ${open ? 'opacity-0 pointer-events-none' : ''}"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Overlay + slideout */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] transform border-l bg-white p-4 shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink">Menu</span>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border text-ink"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 ${
                  isActive(item.href)
                    ? "bg-red-50 text-ink"
                    : "text-ink/80 hover:bg-ink/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="mt-6 grid gap-3">
            <a href={SITE?.phoneHref || "tel:+18253653770"} className={BTN}>
              {/* phone icon */}
              <svg
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.2a2 2 0 0 1 2.11-.45c.81.3 1.65.51 2.51.63A2 2 0 0 1 22 16.92z" />
              </svg>
              {SITE?.phone || "+1 (825) 365‑3770"}
            </a>
            <Link href="/quote/" className={BTN} onClick={() => setOpen(false)}>
              Get a fast quote
            </Link>
          </div>

          <div className="mt-6 text-xs text-muted">
            Serving all {SITE?.city || "Calgary"} neighbourhoods.
          </div>
        </div>
      </div>
    </>
  );
}
