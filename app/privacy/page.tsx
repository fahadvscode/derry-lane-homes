import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PrivacyRequestForm } from "@/components/PrivacyRequestForm";
import { RegisterSection } from "@/components/RegisterSection";
import { INDEPENDENCE_DISCLAIMER } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Privacy Policy | Derry Lane Towns",
  description:
    "How derrylanehomes.com collects, uses, and protects visitor information, including Supabase storage and analytics disclosure.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Privacy Policy", "/privacy")} />
      <Breadcrumbs current="Privacy" />
      <article className="section bg-surface">
        <div className="page-wrap">
          <h1 className="text-4xl text-brand-deep">Privacy Policy</h1>
          <p className="mt-3 text-sm text-text-muted">Effective October 10, 2026.</p>
          <div className="mt-8 grid max-w-3xl gap-8">
            <section>
              <h2 className="text-2xl text-brand-deep">Who operates this site</h2>
              <p className="measure mt-3">
                derrylanehomes.com is an independent information and registration website for Derry Lane Towns.
                {` ${INDEPENDENCE_DISCLAIMER}`} The registration team collects visitor information only as
                described on this page. No real estate agent, brokerage, or personal contact is identified on
                the site.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">What is collected and why</h2>
              <p className="measure mt-3">
                The VIP form collects first name, last name, email, phone, home-type interest, budget range,
                buyer type, timeline, and whether the person is a licensed real estate agent. The source saved
                with each registration is the full link of the page on this website, such as
                https://derrylanehomes.com/ or https://derrylanehomes.com/pricing. Campaign parameters are
                stored if they were present in the link (utm_source, utm_medium,
                utm_campaign, utm_term, utm_content). The purpose is to send updates about Derry Lane Towns and
                similar pre-construction opportunities when consent is given. A consent checkbox, the time it
                was recorded, and the page path are stored as the record of consent under Canada&apos;s
                anti-spam law.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Where it is stored</h2>
              <p className="measure mt-3">
                Submissions are stored in Supabase, a hosted Postgres database, in a project table used only
                for this website. Supabase acts as a service provider for storage. The browser uses only the
                public anonymous key, which is limited to inserting a new row. It cannot read other
                people&apos;s registrations.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Cookies and analytics</h2>
              <p className="measure mt-3">
                A first-party cookie may store campaign parameters so they can be attached to a later form
                submission. If analytics identifiers are configured, the site may load Google Analytics 4,
                Google Tag Manager, and a Meta Pixel. Those tools set their own cookies and receive page views.
                A Lead event may be sent to Meta, and a form_submit event to Google Analytics, after a
                successful registration. Identifiers are not active until real measurement IDs are added to the
                site configuration. You can control cookies in your browser.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">PIPEDA</h2>
              <p className="measure mt-3">
                Personal information is handled in line with the Personal Information Protection and Electronic
                Documents Act (PIPEDA): it is collected for a stated purpose, kept only as long as that purpose
                requires, and protected by the access controls on the database. This site does not sell
                personal information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Access, correction, and deletion</h2>
              <p className="measure mt-3">
                To ask for a copy of the information submitted through this site, a correction, or deletion,
                use the form below. Do not send the request to a personal inbox. Consent to electronic messages
                can be withdrawn the same way, and by using the unsubscribe link in any message that is later
                sent.
              </p>
              <PrivacyRequestForm />
            </section>
            <section>
              <h2 className="text-2xl text-brand-deep">Accessibility</h2>
              <p className="measure mt-3">
                This website aims to meet the Accessibility for Ontarians with Disabilities Act by conforming
                to WCAG 2.1 level AA. If a page is hard to use, include that in the privacy request form and
                name the page.
              </p>
            </section>
          </div>
        </div>
      </article>
      <RegisterSection />
    </>
  );
}
