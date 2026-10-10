import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RegisterSection } from "@/components/RegisterSection";
import { FAQ_ITEMS } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns FAQ | Buyer Questions Answered",
  description:
    "Answers to 17 common questions about Derry Lane Towns: pricing, deposit structure, schools, launch date, and VIP registration.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Derry Lane Towns FAQ", "/faq")} />
      <JsonLd data={faqSchema()} />
      <Breadcrumbs current="FAQ" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">17 buyer questions</p>
          <h1 className="mt-3 max-w-[18ch] text-4xl text-white md:text-5xl">Derry Lane Towns FAQ</h1>
          <LastUpdated className="mt-5 text-sm text-text-on-dark/85" />
          <p className="measure mt-5 text-lg">
            These answers cover Derry Lane Towns pricing, deposit structure, floor plans, schools, launch
            status, and VIP registration. Each answer is on the page even when a question is collapsed.
            Where the builder has not published a number, the answer says to be announced.
          </p>
        </div>
      </header>
      <section className="section bg-surface" aria-labelledby="questions">
        <div className="page-wrap">
          <h2 id="questions" className="text-3xl text-brand-deep md:text-4xl">
            Questions about Derry Lane Towns
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
      <RegisterSection />
    </>
  );
}
