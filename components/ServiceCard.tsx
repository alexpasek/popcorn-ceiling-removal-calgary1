
import Link from 'next/link';
export default function ServiceCard({ title, href, children }:{ title:string; href:string; children:string }){
  return(<Link href={href} className="card p-6 hover:shadow-md transition">
    <div className="text-lg font-semibold text-ink">{title}</div>
    <p className="text-sm text-muted mt-2">{children}</p>
    <span className="inline-block mt-3 text-sm link-primary">Learn more</span>
  </Link>);
}
