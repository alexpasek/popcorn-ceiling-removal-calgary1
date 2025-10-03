
import Link from 'next/link'; import { SITE } from '@/data/site';
export default function Hero(){
  return(<section className="bg-bg-soft border-b"><div className="container-x grid md:grid-cols-2 gap-8 items-center py-12">
    <div><span className="badge badge-primary">Calgary Specialists</span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Popcorn Ceiling Removal Calgary</h1>
      <p className="mt-4 text-lg text-muted">Clean refinishing with dust control, plus drywall installation & repair, wallpaper removal, and interior painting across Calgary.</p>
      <div className="mt-6 flex gap-4"><a href={SITE.phoneHref} className="btn btn-primary">Call {SITE.phone}</a><Link className="btn border" href="/quote">Get a Quote</Link></div>
    </div>
    <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 w-full"><img src="/images/hero-placeholder.jpg" alt="Calgary popcorn ceiling removal" className="rounded-2xl object-cover border w-full h-full"/></div>
  </div></section>);
}
