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
          <p className="eyebrow text-[#f3d7c8]">Illustrations, not builder art</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">Derry Lane Towns Renderings</h1>
          <p className="measure mt-5 text-lg">
            Official Derry Lane Towns renderings have not been published on this independent site. The images
            below are original illustrations of the Meadowvale Village setting, the rear-lane idea, and the
            nearby conservation landscape.
          </p>
        </div>
      </header>
      <section className="section bg-surface" aria-labelledby="gallery-grid">
        <div className="page-wrap">
          <h2 id="gallery-grid" className="text-3xl text-brand-deep md:text-4xl">
            Site context
          </h2>
          <p className="measure mt-5">
            Ballymore Homes has not licensed streetscape art to derrylanehomes.com. Rather than reproduce a
            builder rendering without confirmed rights, this gallery shows drawings made for this page. They
            are labelled as illustrations. A sales-centre display, if one opens, will be the place to see the
            builder&apos;s own images. No site plan with lot lines is shown here because a measured plan has
            not been released for publication.
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
