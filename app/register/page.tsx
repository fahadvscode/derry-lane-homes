import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PASSAGES, WHY_REGISTER } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Register for Derry Lane Towns VIP Access",
  description:
    "Register for free VIP access to Derry Lane Towns. Be first to receive floor plans, pricing, and launch incentives in Mississauga.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Register for Derry Lane Towns VIP Access", "/register")} />
      <Breadcrumbs current="Register" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">Free and non-binding</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">
            Register for Derry Lane Towns VIP Access
          </h1>
        </div>
      </header>
      <section className="section bg-surface" aria-labelledby="vip-access">
        <div className="page-wrap grid gap-10 md:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 id="vip-access" className="text-3xl text-brand-deep">
              How do I get VIP access to Derry Lane Towns?
            </h2>
            <p className="measure mt-5">{PASSAGES.vip}</p>
            <h2 className="mt-10 text-3xl text-brand-deep">Is there a cost to register for Derry Lane Towns?</h2>
            <p className="measure mt-5">{PASSAGES.registerCost}</p>
            <p className="measure mt-4">{WHY_REGISTER}</p>
            <p className="measure mt-4 text-sm text-text-muted">
              This form is operated by an independent registration website. It is not the Ballymore Homes
              website. Submitting it does not create a contract with the builder.
            </p>
          </div>
          <div className="card p-5 md:p-6">
            <LeadForm location="register" />
          </div>
        </div>
      </section>
    </>
  );
}
