// app/calgary/page.jsx
import { NEIGHBORHOODS, toTitle } from "./_data";

export const dynamic = "force-static";

export default function CalgaryIndex() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, margin: "0 0 12px" }}>
        Calgary Neighborhoods — Popcorn Ceiling Removal
      </h1>
      <ul style={{ columns: 2, gap: 24 }}>
        {NEIGHBORHOODS.map((n) => (
          <li key={n}>
            <a href={`/calgary/${n}`}>{toTitle(n)}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
