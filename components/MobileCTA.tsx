
'use client'; import { SITE } from '@/data/site';
export default function MobileCTA(){ return(<div className="fixed bottom-0 inset-x-0 z-40 md:hidden"><a href={SITE.phoneHref} className="block text-center py-3 font-semibold text-white bg-primary-600">Call {SITE.phone}</a></div>); }
