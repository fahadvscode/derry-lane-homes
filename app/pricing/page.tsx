import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DepositScheduleTable } from "@/components/DepositScheduleTable";
import { JsonLd } from "@/components/JsonLd";
import { PricingTable } from "@/components/PricingTable";
import { RegisterSection } from "@/components/RegisterSection";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";
import { DEPOSIT_NOTE, INCENTIVES, INCENTIVES_NOTE, PASSAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns Prices & Deposit Structure",
  description:
    "Derry Lane Towns pricing starts from the high $700,000s CAD. See the price range, deposit schedule, and incentives for this Mississauga community.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Derry Lane Towns Prices", "/pricing")} />
      <Breadcrumbs current="Pricing" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">Unofficial until the builder publishes a list</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">Derry Lane Towns Prices</h1>
          <p className="measure mt-5 text-lg">
            Derry Lane Towns prices have not been published by Ballymore Homes. The only figure in circulation
            as of October 2026 is an unofficial early listing that starts townhomes in the high $700,000s CAD.
          </p>
        </div>
      </header>

      <section className="section bg-surface" aria-labelledby="price-range">
        <div className="page-wrap">
          <h2 id="price-range" className="text-3xl text-brand-deep md:text-4xl">
            How much do homes at Derry Lane Towns cost?
          </h2>
          <p className="measure mt-5">{PASSAGES.price}</p>
          <div className="mt-8 overflow-x-auto">
            <PricingTable />
          </div>
          <p className="measure mt-6">
            That starting point applies to the townhome collection only. Pricing for the two semi-detached
            homes and the two detached homes is not yet available. A high-$700,000s phrase is a range, not a
            list price, and it is not an offer from this website. Use it to understand the reported entry
            band while the project is still marked Coming Soon.
          </p>
          <SpecDisclaimer />
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="deposit">
        <div className="page-wrap">
          <h2 id="deposit" className="text-3xl text-brand-deep md:text-4xl">
            Derry Lane Towns deposit structure
          </h2>
          <p className="measure mt-5">{PASSAGES.deposit}</p>
          <p className="measure mt-4">{DEPOSIT_NOTE}</p>
          <div className="mt-8 overflow-x-auto">
            <DepositScheduleTable />
          </div>
          <p className="measure mt-6">
            The empty schedule is intentional. Publishing invented percentages would look precise and would be
            wrong. In other Mississauga townhome launches, deposits are often spread across signing and the
            first 12 to 18 months — commonly signing, 30 days, 90 days, and 180 days, sometimes with a further
            amount near occupancy. That pattern is market context. It is not the Derry Lane Towns contract.
            Buyers should read the Agreement of Purchase and Sale when one exists.
          </p>
          <p className="mt-4">
            <Link href="/faq#deposit" className="prose-link">
              deposit structure FAQ
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="incentives">
        <div className="page-wrap">
          <h2 id="incentives" className="text-3xl text-brand-deep md:text-4xl">
            Incentives
          </h2>
          <p className="measure mt-5">{INCENTIVES_NOTE}</p>
          <ul className="mt-4 grid gap-2">
            {INCENTIVES.map((item) => (
              <li key={item} className="card px-4 py-3">
                <span className="font-semibold text-brand-deep">{item}:</span> To be announced
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="occupancy">
        <div className="page-wrap">
          <h2 id="occupancy" className="text-3xl text-brand-deep md:text-4xl">
            What is the occupancy date for Derry Lane Towns?
          </h2>
          <p className="measure mt-5">{PASSAGES.occupancy}</p>
          <p className="measure mt-4">
            Estimated occupancy on the quick-facts table is therefore to be announced. Closing date, interim
            occupancy, and any occupancy-fee structure are in the same category until the builder states them.
          </p>
          <p className="mt-4">
            <Link href="/register" className="prose-link">
              Register for VIP Access
            </Link>
          </p>
          <SpecDisclaimer />
        </div>
      </section>
      <RegisterSection />
    </>
  );
}
