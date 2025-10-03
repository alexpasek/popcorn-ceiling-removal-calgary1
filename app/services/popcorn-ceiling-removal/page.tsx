import ServiceGallery from '@/components/ServiceGallery';
import { SITE } from '@/data/site';
export const metadata = { title: 'Popcorn Ceiling Removal in Calgary' };
const IMAGES = ['/images/services/popcorn/1.jpg','/images/services/popcorn/2.jpg','/images/services/popcorn/3.jpg'];
export default function Page(){ return(<section className="container-x py-12">
  <div className="prose"><h1>Popcorn Ceiling Removal in Calgary</h1><p>Our clean, multi-step process leaves ceilings smooth and paint-ready, with dust control and full protection of floors and fixtures.</p><ol><li>Protection: poly &amp; tape; vents sealed.</li><li>Wet scrape to minimize dust.</li><li>Skim coat &amp; repairs.</li><li>Detail sanding.</li><li>Prime &amp; paint-ready surface.</li></ol><p>Serving all Calgary neighborhoods. Call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p></div>
  <ServiceGallery images={IMAGES} />
</section>); }