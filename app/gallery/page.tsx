import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RegisterSection } from "@/components/RegisterSection";
import { GALLERY } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, imageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns Renderings & Site Plan",
  description:
    "View renderings and site context for Derry Lane Towns, a new townhome community by Ballymore Homes in Mississauga, Ontario.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Derry Lane Towns Renderings", "/gallery")} />
      {GALLERY.map((image) => (
        <JsonLd key={image.src} data={imageSchema(image.src, image.caption)} />
      ))}
      <Breadcrumbs current="Gallery" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">Streetscape and site context</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">Derry Lane Towns Renderings</h1>
          <p className="measure mt-5 text-lg">
            The Derry Lane Towns streetscape shows the townhome frontage along a landscaped road. The other
            frames are site-context illustrations of the rear-lane idea, Meadowvale Village, and the nearby
            conservation landscape. A measured site plan has not been released.
          </p>
        </div>
      </header>
      <section className="section bg-surface" aria-labelledby="gallery-grid">
        <div className="page-wrap">
          <h2 id="gallery-grid" className="text-3xl text-brand-deep md:text-4xl">
            Site context
          </h2>
          <p className="measure mt-5">
            The first image is the Derry Lane Towns streetscape. The rear-lane, heritage, and conservation
            frames are illustrations made for this page, and each caption says so. No site plan with lot lines
            is shown here because a measured plan has not been released for publication.
          </p>
          <div className="mt-8 grid gap-8">
            {GALLERY.map((image) => (
              <figure key={image.src} className="card overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 768px) 1100px, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-5 py-4 text-sm text-text-muted">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <RegisterSection />
    </>
  );
}
