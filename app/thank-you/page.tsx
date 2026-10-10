import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ThankYouEvent } from "@/components/ThankYouEvent";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Registration Received | Derry Lane Towns",
  description:
    "Your Derry Lane Towns registration was received. Floor plans, pricing, and launch updates will be shared when they are released.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <>
      <ThankYouEvent />
      <JsonLd data={breadcrumbSchema("Registration received", "/thank-you")} />
      <section className="section bg-surface">
        <div className="page-wrap">
          <p className="eyebrow">VIP registration</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-brand-deep md:text-5xl">Registration received</h1>
          <p role="status" aria-live="polite" className="measure mt-5">
            The registration for Derry Lane Towns is saved. There is no fee and no unit is reserved. Official
            pricing, floor plans, and any launch incentives are still to be announced by Ballymore Homes.
            Updates go to the email address submitted on the form.
          </p>
          <p className="mt-6">
            <Link href="/" className="prose-link">
              Return to the Derry Lane Towns overview
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
