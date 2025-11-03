import Hero from '@/components/Hero'; import BeforeAfter from '@/components/BeforeAfter'; import ServiceCard from '@/components/ServiceCard'; import NeighborhoodGrid from '@/components/NeighborhoodGrid';
const aggregate={"@context":"https://schema.org","@type":"LocalBusiness",name:"Popcorn Ceiling Removal Calgary",telephone:"+1-825-365-3770",areaServed:"Calgary, AB",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"87"}};
export default function Page(){ return (
  <>
    <Hero />
    <section className="container-x py-6">
      <div className="card p-4 flex flex-wrap items-center gap-3">
        <div className="text-ink font-semibold">5 ★★★★★</div>
        <div className="text-muted">Based on 80+ Calgary homeowner reviews</div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregate) }}
      />
    </section>
    <section className="container-x py-12">
      <h2 className="text-2xl font-bold text-ink">Before & After</h2>
      <div className="mt-4 max-w-3xl mx-auto">
        <BeforeAfter
          before="/images/before-after/before.jpg"
          after="/images/before-after/after.jpg"
          alt="Popcorn ceiling before and smooth after"
        />
      </div>
    </section>
    <section className="container-x py-12">
      <h2 className="text-2xl font-bold text-ink">Our Services</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          title="Popcorn Ceiling Removal"
          href="/services/popcorn-ceiling-removal"
        >
          Clean scraping, skim coat, sanding & ceiling paint-ready finish.
        </ServiceCard>
        <ServiceCard
          title="Drywall Installation & Repair"
          href="/services/drywall-installation"
        >
          Full installs, patches, seams/taping, mudding, sanding—ready for
          paint.
        </ServiceCard>
        <ServiceCard
          title="Wallpaper Removal"
          href="/services/wallpaper-removal"
        >
          Careful removal, adhesive cleanup, wall patching, and prime.
        </ServiceCard>
        <ServiceCard
          title="Interior Painting"
          href="/services/interior-painting"
        >
          Ceilings, walls, trim and doors. Sharp cut lines, durable finishes.
        </ServiceCard>
        <ServiceCard
          title="Wallpaper Removal"
          href="/services/wallpaper-removal"
        >
          Careful removal, adhesive cleanup, wall patching, and prime.
        </ServiceCard>
      </div>
    </section>
    <NeighborhoodGrid />
  </>
); }