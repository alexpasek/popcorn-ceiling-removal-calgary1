import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Under Construction",
  description:
    "Our website is currently under construction. All services are temporarily unavailable.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="maintenance-body">
        <main className="maintenance-page">
          <div className="maintenance-glow maintenance-glow-one" />
          <div className="maintenance-glow maintenance-glow-two" />

          <section className="maintenance-card" aria-labelledby="maintenance-title">
            <div className="maintenance-icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img">
                <path d="M24.5 11.5a13 13 0 0 0 15.8 16.7L52 39.9a5 5 0 1 1-7.1 7.1L33.2 35.3A13 13 0 0 0 16.5 19.5l7.8 7.8 7-7-6.8-8.8Z" />
                <path d="m12 49 15.5-15.5" />
                <circle cx="10.5" cy="50.5" r="4.5" />
              </svg>
            </div>

            <p className="maintenance-eyebrow">
              <span />
              A fresh look is on the way
            </p>

            <h1 id="maintenance-title">
              We&apos;re under
              <span>construction.</span>
            </h1>

            <p className="maintenance-copy">
              We&apos;re working behind the scenes to build a better experience.
              Our website and all services are temporarily unavailable.
            </p>

            <div className="maintenance-status">
              <span className="maintenance-status-dot" />
              All services are currently unavailable
            </div>

            <p className="maintenance-note">
              Thank you for your patience. Please check back soon.
            </p>
          </section>

          <p className="maintenance-footer">
            © {new Date().getFullYear()} · We&apos;ll be back soon
          </p>
        </main>
      </body>
    </html>
  );
}
