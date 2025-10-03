import ServiceGallery from '@/components/ServiceGallery';
import { SITE } from '@/data/site';
export const metadata = { title: 'Interior Painting in Calgary' };
const IMAGES = ['/images/services/painting/1.jpg','/images/services/painting/2.jpg','/images/services/painting/3.jpg'];
export default function Page(){ return(<section className="container-x py-12">
  <div className="prose"><h1>Interior Painting in Calgary</h1><p>Clean lines, durable finishes. We paint ceilings, walls, trim, and doors using premium primers and paints.</p><p>Serving all Calgary neighborhoods. Call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p></div>
  <ServiceGallery images={IMAGES} />
</section>); }