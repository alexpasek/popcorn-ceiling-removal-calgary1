// @ts-nocheck
export const metadata = {
  title: "Calgary Service Areas | Popcorn Ceiling Removal",
  description: "Neighbourhoods in Calgary we serve for popcorn ceiling removal and ceiling refinishing.",
  alternates: { canonical: "https://popcorn-ceiling-removal-worker.webtoronto22.workers.dev/calgary" }
};

export default function Page() {
  const areas = ["beltline","kensington","sunnyside","bridgeland","inglewood","mission","mount-royal","hillhurst","crescent-heights","altadore","signal-hill","west-springs","aspen-woods","varsity","brentwood","dalhousie","arbour-lake","tuscany","mahogany","seton"];
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Calgary Neighbourhoods We Serve</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {areas.map(s => (
          <li key={s}>
            <a className="underline" href={"/calgary/" + s}>
              {s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
