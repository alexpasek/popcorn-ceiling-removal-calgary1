// @ts-nocheck
// @ts-nocheck
// app/calgary/sunnyside/page.jsx
export const dynamic = "force-static";

function toTitle(slug){
  return slug.split("-").map(s => s ? s[0].toUpperCase() + s.slice(1) : s).join(" ");
}

export default function Page(){
  const title = toTitle("sunnyside");
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 30, margin: "0 0 8px" }}>
        Popcorn Ceiling Removal in {title}
      </h1>
      <p>We service {title} with dust-controlled popcorn ceiling removal.</p>
      <p style={{ marginTop: 16 }}>
        <a href="/get-quote" style={{ background: "#000", color: "#fff", padding: "10px 16px", borderRadius: 8, textDecoration: "none" }}>
          Get a Quote
        </a>
      </p>
      <p style={{ marginTop: 12 }}>
        <a href="/calgary">← All neighborhoods</a>
      </p>
    </main>
  );
}
