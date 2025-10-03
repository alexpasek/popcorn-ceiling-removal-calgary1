import QuoteForm from '@/components/QuoteForm';
export const metadata = { title: 'Get a Quote | Popcorn Ceiling Removal Calgary' };
export default function Page(){ return(<section className="container-x py-12"><h1 className="text-3xl font-extrabold text-ink">Get a Fast Quote</h1><p className="text-muted mt-2">Same form, alternate route.</p><div className="mt-6"><QuoteForm/></div></section>); }