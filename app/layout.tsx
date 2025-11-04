import type { Metadata } from 'next'; import MobileSlideMenu from '@/components/MobileSlideMenu';
 import './globals.css'; import Header from '@/components/Header'; import Footer from '@/components/Footer'; import MobileCTA from '@/components/MobileCTA'; import { SITE } from '@/data/site';
export const metadata: Metadata = { title: 'Popcorn Ceiling Removal Calgary | Drywall Installation & Painting', description: SITE.description, openGraph:{ title:'Popcorn Ceiling Removal Calgary', description:SITE.description, type:'website', locale:'en_CA' } };
export default function RootLayout({ children }:{ children: React.ReactNode }){
  const schema={"@context":"https://schema.org","@type":"LocalBusiness","name":SITE.brand,"telephone":SITE.phoneHref.replace('tel:+','+'),"priceRange":"$$","areaServed":SITE.city,"url":SITE.domain,"openingHours":SITE.hours,"serviceType":["Popcorn ceiling removal","Drywall installation","Drywall repair","Wallpaper removal","Interior painting"]};
  return (
    <html lang="en">
      <body>
        <Header />
        <MobileSlideMenu /> {/* shows only on mobile */}
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}