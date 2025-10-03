export const metadata = { title: 'FAQ | Popcorn Ceiling Removal Calgary' };
const QA=[
  { q:'Do you test for asbestos?', a:'We do not test. Homes built before ~1990 may require testing by a certified lab before removal. We can refer you to local labs.' },
  { q:'How long does removal take?', a:'Most condos/rooms: 1–2 days. Whole homes vary by size and repair needs.' },
  { q:'Is it dusty?', a:'We use wet-scrape and dust control. Surfaces are masked; vents sealed; cleanup at the end of each day.' },
  { q:'Do you paint the ceiling?', a:'Yes, we can prime and paint after smoothing. Ask for a bundled quote.' },
  { q:'Are you insured?', a:'Yes—full liability insurance. COI available on request.' },
];
export default function Page(){ const schema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:QA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}; return(<section className="container-x py-12">
  <h1 className="text-3xl font-extrabold text-ink">Frequently Asked Questions</h1>
  <div className="mt-6 divide-y">{QA.map(({q,a})=>(<details key={q} className="py-4"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-muted">{a}</p></details>))}</div>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
</section>); }