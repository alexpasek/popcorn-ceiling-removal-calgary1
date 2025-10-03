import ServiceGallery from '@/components/ServiceGallery';
import { SITE } from '@/data/site';
export const metadata = { title: 'Drywall Installation & Repair in Calgary' };
const IMAGES = ['/images/services/drywall/1.jpg','/images/services/drywall/2.jpg','/images/services/drywall/3.jpg'];
export default function Page(){ return(<section className="container-x py-12">
  <div className="prose"><h1>Drywall Installation & Repair in Calgary</h1><p>We install new boards, replace damaged sections, and repair seams and corners. Taping, mudding, and sanding to a smooth, paint-ready finish.</p><p>Serving all Calgary neighborhoods. Call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p></div>
  <ServiceGallery images={IMAGES} />
</section>); }