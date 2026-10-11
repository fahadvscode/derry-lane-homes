import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RegisterSection } from "@/components/RegisterSection";
import { INDEPENDENCE_DISCLAIMER, SPEC_DISCLAIMER } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Terms of Use | Derry Lane Towns",
  description:
    "Terms of use for derrylanehomes.com, an independent information resource for Derry Lane Towns by Ballymore Homes.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Terms of Use", "/terms")} />
      <Breadcrumbs current="Terms" />
      <article className="section bg-surface">
        <div className="page-wrap">
          <h1 className="text-4xl text-brand-deep">Terms of Use</h1>
          <p className="mt-3 text-sm text-text-muted">Effective October 10, 2026.</p>
          <div className="mt-8 grid max-w-3xl gap-8">
            <section>
              <h2 className="text-2xl text-brand-deep">Independent information</h2>
              <p className="measure mt-3">{INDEPENDENCE_DISCLAIMER}</p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Using the site</h2>
              <p className="measure mt-3">
                You may read these pages for personal research about Derry Lane Towns. You may not copy the
                site in a way that suggests it is the official Ballymore Homes website, scrape it in order to
                republish the registration list, or submit someone else&apos;s contact details without their
                permission. The registration form is free. It does not reserve a home, guarantee a price, or
                create an agreement with the builder.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Accuracy</h2>
              <p className="measure mt-3">{SPEC_DISCLAIMER}</p>
              <p className="measure mt-3">
                Facts on this site are drawn from the builder&apos;s public project page and from the City of
                Mississauga planning record where those sources state them. Starting prices are shown by home
                type and are subject to change. Deposit amounts, incentives, maintenance fees, occupancy, lot widths,
                school rankings, and sales-centre hours are shown as to be announced when they have not been
                confirmed. Nothing here is financial, legal, or tax advice.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Errors and omissions</h2>
              <p className="measure mt-3">
                E.&O.E. Prices, sizes, specifications, and availability are subject to change without notice.
                If a statement on this site conflicts with the builder&apos;s Agreement of Purchase and Sale or
                with an official city document, those documents govern.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Accessibility</h2>
              <p className="measure mt-3">
                The site is intended to conform to WCAG 2.1 level AA, which is the standard used here to meet
                the Accessibility for Ontarians with Disabilities Act for a public information website.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Liability</h2>
              <p className="measure mt-3">
                The site is provided as an information resource. To the extent the law allows, the operator is
                not liable for decisions made solely from these pages, including a decision to buy or not to
                buy a pre-construction home. Ontario law applies.
              </p>
            </section>
          </div>
        </div>
      </article>
      <RegisterSection />
    </>
  );
}
