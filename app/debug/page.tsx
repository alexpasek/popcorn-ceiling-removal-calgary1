import Link from 'next/link';
export const metadata = { title: 'Route Debug' };
const routes = ['/', '/quote', '/get-quote', '/thank-you', '/services', '/services/popcorn-ceiling-removal', '/services/drywall-installation', '/services/wallpaper-removal', '/services/interior-painting', '/contact', '/faq', '/calgary/kensington'];
export default function Page(){ return(<section className="container-x py-12"><h1 className="text-2xl font-bold">Route Debug</h1><ul className="mt-4 grid gap-2">{routes.map(r=>(<li key={r}><Link className="link-primary" href={r}>{r}</Link></li>))}</ul></section>); }