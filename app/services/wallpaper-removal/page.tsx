import ServiceGallery from '@/components/ServiceGallery';
import { SITE } from '@/data/site';
export const metadata = { title: 'Wallpaper Removal in Calgary' };
const IMAGES = ['/images/services/wallpaper/1.jpg','/images/services/wallpaper/2.jpg','/images/services/wallpaper/3.jpg'];
export default function Page(){ return(<section className="container-x py-12">
  <div className="prose"><h1>Wallpaper Removal in Calgary</h1><p>We carefully remove wallpaper, clean adhesive, patch surface defects, and prime walls so they’re ready for paint.</p><p>Serving all Calgary neighborhoods. Call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p></div>
  <ServiceGallery images={IMAGES} />
</section>); }