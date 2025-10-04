
'use client';
import Link from 'next/link'; import { SITE } from '@/data/site';
export default function Header(){
  return(<header className="border-b bg-white">
    <div className="container-x flex items-center justify-between py-4 gap-4">
      <Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt={SITE.brand} className="h-11 md:h-12 w-auto" />
      <span className="font-extrabold tracking-tight text-ink text-lg sm:text-xl">{SITE.brand}</span></Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/faq" className="hover:underline">FAQ</Link>
        <Link href="/quote" className="hover:underline">Get a Quote</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      <a href={SITE.phoneHref} className="btn btn-primary whitespace-nowrap">Call {SITE.phone}</a>
    </div></header>);
}
//