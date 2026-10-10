import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { FloorPlanTracker } from "@/components/FloorPlanTracker";
import { JsonLd } from "@/components/JsonLd";
import { RegisterSection } from "@/components/RegisterSection";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";
import { FLOOR_PLAN_NOTE, HOME_TYPES, PASSAGES, STYLE_NOTES } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns Floor Plans | Mississauga Towns",
  description:
    "See home types at Derry Lane Towns: back-to-back, street, and rear-lane townhomes from 2-4 bedrooms, up to 2,000+ sq ft, in Mississauga.",
  path: "/floor-plans",
});

export default function FloorPlansPage() {
  return (
    <>
      <FloorPlanTracker />
      <JsonLd data={breadcrumbSchema("Derry Lane Towns Floor Plans", "/floor-plans")} />
      <Breadcrumbs current="Floor Plans" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">Collection, not unit plans</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">Derry Lane Towns Floor Plans</h1>
          <p className="measure mt-5 text-lg">
            Derry Lane Towns floor plans have not been released unit by unit. The city application describes
            120 three-storey townhomes in back-to-back, street, and rear-lane forms, plus two semi-detached
            and two detached homes, from 2 to 4 bedrooms and up to about 2,000+ square feet.
          </p>
        </div>
      </header>

      <section className="section bg-surface" aria-labelledby="collections">
        <div className="page-wrap">
          <h2 id="collections" className="text-3xl text-brand-deep md:text-4xl">
            Home types in the Derry Lane Towns collection
          </h2>
          <p className="measure mt-5">{PASSAGES.types}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {HOME_TYPES.map((plan) => (
              <FloorPlanCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="card mt-8 p-5 md:p-6">
            <p className="measure">{FLOOR_PLAN_NOTE}</p>
            <p className="mt-4">
              <Link href="/pricing" className="prose-link">
                starting prices
              </Link>
            </p>
          </div>
          <SpecDisclaimer />
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="how-to-read">
        <div className="page-wrap">
          <h2 id="how-to-read" className="text-3xl text-brand-deep md:text-4xl">
            How to read these cards
          </h2>
          <div className="mt-6 grid gap-4">
            {STYLE_NOTES.map((paragraph) => (
              <p key={paragraph.slice(0, 36)} className="measure">
                {paragraph}
              </p>
            ))}
            <p className="measure">
              The illustrations on this page are site-context drawings made for derrylanehomes.com. They are
              not Ballymore Homes renderings, marketing plans, or measured drawings. When the builder releases
              a brochure, this page will be replaced with the actual layouts, square footage, and any price
              attached to each plan. Until then, lot widths remain to be announced.
            </p>
            <p className="measure">
              Semi-detached and detached homes are part of the application — two of each — but no separate
              plans or prices have been published for them. Buyers who want those forms can still note that
              interest on the registration form.
            </p>
            <p className="measure">
              <Link href="/register" className="prose-link">
                Register for VIP Access
              </Link>{" "}
              if you want to be notified when the plans are released. Registration is free and does not hold a
              unit.
            </p>
          </div>
        </div>
      </section>
      <RegisterSection />
    </>
  );
}
