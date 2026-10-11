import Link from "next/link";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { QuickFacts } from "@/components/QuickFacts";
import { RegisterSection } from "@/components/RegisterSection";
import { Sources } from "@/components/Sources";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";
import {
  CONFIRMED,
  OVERVIEW,
  PASSAGES,
  PLANNING,
  STYLE_NOTES,
  TBA,
  WHY_REGISTER,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, imageSchema, residenceSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns | Mississauga Pre-Construction Townhomes",
  description:
    "Derry Lane Towns by Ballymore Homes in Mississauga: back-to-back, street, and rear-lane townhomes from the high $700,000s, semis from $1 million, and detached homes from $1.2 million.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Home", "/")} />
      <JsonLd data={residenceSchema()} />
      <JsonLd data={imageSchema()} />
      <Hero />
      <AnswerFirstSummary />
      <QuickFacts />

      <section className="section bg-surface" aria-labelledby="overview">
        <div className="page-wrap">
          <p className="eyebrow">Meadowvale Village</p>
          <h2 id="overview" className="mt-3 max-w-[20ch] text-3xl text-brand-deep md:text-4xl">
            Project overview
          </h2>
          <div className="mt-6 grid gap-4">
            {OVERVIEW.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="measure">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="measure mt-4">
            Continue with the{" "}
            <Link href="/floor-plans" className="prose-link">
              Derry Lane Towns floor plans
            </Link>
            , the{" "}
            <Link href="/pricing" className="prose-link">
              pricing and deposit structure
            </Link>
            , the{" "}
            <Link href="/location" className="prose-link">
              Meadowvale Village location
            </Link>
            , and the{" "}
            <Link href="/faq" className="prose-link">
              frequently asked questions
            </Link>
            .{" "}
            <Link href="/register" className="prose-link">
              Register for VIP Access
            </Link>{" "}
            to be notified when official details are released.
          </p>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="styles">
        <div className="page-wrap">
          <h2 id="styles" className="max-w-[22ch] text-3xl text-brand-deep md:text-4xl">
            Home types at Derry Lane Towns
          </h2>
          <div className="mt-6 grid gap-4">
            {STYLE_NOTES.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="measure">
                {paragraph}
              </p>
            ))}
          </div>
          <SpecDisclaimer />
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="launch">
        <div className="page-wrap">
          <h2 id="launch" className="max-w-[20ch] text-3xl text-brand-deep md:text-4xl">
            When is Derry Lane Towns launching?
          </h2>
          <p className="measure mt-5">{PASSAGES.launch}</p>
          <div className="mt-4 grid gap-4">
            {PLANNING.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="measure">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl text-brand-deep">Confirmed on the record</h3>
              <ul className="mt-3 grid list-disc gap-2 pl-5">
                {CONFIRMED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-brand-deep">To be announced</h3>
              <ul className="mt-3 grid list-disc gap-2 pl-5">
                {TBA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="why">
        <div className="page-wrap">
          <h2 id="why" className="text-3xl text-brand-deep md:text-4xl">
            Why register
          </h2>
          <p className="measure mt-5">{WHY_REGISTER}</p>
          <p className="measure mt-4">
            Registration on this site does not reserve a home, lock a price, or create an Agreement of
            Purchase and Sale. It records a name, email, and phone number so the registration team can send
            project updates. There is no fee.
          </p>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="builder">
        <div className="page-wrap">
          <h2 id="builder" className="text-3xl text-brand-deep md:text-4xl">
            About the builder
          </h2>
          <p className="measure mt-5">
            Ballymore Homes is the developer of Derry Lane Towns. The builder was founded in 1995 and is based
            in Richmond Hill, Ontario. Its published portfolio includes low-rise and townhome communities in
            Richmond Hill, Brampton, Innisfil, Markham, Pickering, Scarborough, Stouffville, and Tottenham,
            plus select commercial work. The city file for this site is in the name Ballymore (Uptown
            Meadowvale) Corp. This website is not Ballymore Homes and does not use the builder&apos;s logo.
          </p>
        </div>
      </section>

      <Sources />
      <RegisterSection />
    </>
  );
}
