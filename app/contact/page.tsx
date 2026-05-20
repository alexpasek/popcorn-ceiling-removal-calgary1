import { SITE } from '@/data/site';
export const metadata = { title: 'Contact | Popcorn Ceiling Removal Calgary' };
export default function Page(){ return(<section className="container-x py-12 prose"><h1>Contact</h1><p>Use the quote form for estimates and scheduling. Serving {SITE.city}. Hours: {SITE.hours}.</p><p><a className="btn btn-primary no-underline" href={SITE.contactHref}>{SITE.contactLabel}</a></p></section>); }
