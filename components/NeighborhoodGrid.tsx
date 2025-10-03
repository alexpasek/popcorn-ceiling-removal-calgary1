
import Link from 'next/link'; import { CALGARY_NEIGHBORHOODS } from '@/data/neighborhoods';
export default function NeighborhoodGrid(){
  return(<section className="container-x py-12"><h2 className="text-2xl font-bold text-ink">Popular Calgary Neighborhoods</h2><p className="text-muted mt-2">Fast service across the city. Find details for your area:</p>
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {CALGARY_NEIGHBORHOODS.map(n => (<Link key={n} href={`/calgary/${encodeURIComponent(n.toLowerCase().replace(/\s+/g,'-'))}`} className="card p-3 text-sm hover:shadow-md transition">{n}</Link>))}
    </div></section>);
}
