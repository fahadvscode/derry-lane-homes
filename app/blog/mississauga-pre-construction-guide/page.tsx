import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RegisterSection } from "@/components/RegisterSection";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";
import { BLOG, PASSAGES } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Mississauga Pre-Construction Guide 2026",
  description:
    "A 2026 buyer's guide to Mississauga pre-construction townhomes, Meadowvale Village, deposit structures, and comparable launches.",
  path: "/blog/mississauga-pre-construction-guide",
});

export default function GuidePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Mississauga Pre-Construction Guide", "/blog/mississauga-pre-construction-guide")} />
      <Breadcrumbs current="Pre-Construction Guide" />
      <article>
        <header className="bg-brand-deep text-text-on-dark">
          <div className="page-wrap py-16 md:py-20">
            <p className="eyebrow text-[#f3d7c8]">2026 buyer&apos;s guide</p>
            <h1 className="mt-3 max-w-[18ch] text-4xl text-white md:text-5xl">
              Pre-Construction Homes in Mississauga — A 2026 Buyer&apos;s Guide
            </h1>
          </div>
        </header>
        <div className="section bg-surface">
          <div className="page-wrap grid gap-12">
            {BLOG.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="measure">
                {paragraph}
              </p>
            ))}

            <section aria-labelledby="meadowvale">
              <h2 id="meadowvale" className="text-3xl text-brand-deep">
                Why Meadowvale Village is drawing new townhome development
              </h2>
              <div className="mt-4 grid gap-4">
                {BLOG.meadowvale.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="styles">
              <h2 id="styles" className="text-3xl text-brand-deep">
                What back-to-back and rear-lane townhomes actually mean
              </h2>
              <div className="mt-4 grid gap-4">
                {BLOG.styles.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="deposits">
              <h2 id="deposits" className="text-3xl text-brand-deep">
                How Mississauga precon deposit structures typically work
              </h2>
              <div className="mt-4 grid gap-4">
                {BLOG.deposits.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="best">
              <h2 id="best" className="text-3xl text-brand-deep">
                What are the best new pre-construction townhome communities in Mississauga?
              </h2>
              <p className="measure mt-4">{PASSAGES.best}</p>
              <h2 className="mt-10 text-3xl text-brand-deep">Comparable 2026 Mississauga townhome launches</h2>
              <div className="mt-4 grid gap-4">
                {BLOG.comparable.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
              </div>
              <SpecDisclaimer />
            </section>

            <section aria-labelledby="unconfirmed">
              <h2 id="unconfirmed" className="text-3xl text-brand-deep">
                What is confirmed, and what is still a guess
              </h2>
              <div className="mt-4 grid gap-4">
                {BLOG.unconfirmed.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
                {BLOG.history.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="measure">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="steps">
              <h2 id="steps" className="text-3xl text-brand-deep">
                Steps to registering for a Mississauga pre-construction launch
              </h2>
              <ol className="measure mt-4 grid list-decimal gap-3 pl-5">
                {BLOG.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="follow">
              <h2 id="follow" className="text-3xl text-brand-deep">
                Where to follow Derry Lane Towns specifically
              </h2>
              <p className="measure mt-4">
                This guide is part of{" "}
                <Link href="/" className="prose-link">
                  derrylanehomes.com
                </Link>
                , an independent information and registration resource tracking Derry Lane Towns by Ballymore
                Homes as new details are released. See the{" "}
                <Link href="/" className="prose-link">
                  project overview
                </Link>
                ,{" "}
                <Link href="/floor-plans" className="prose-link">
                  floor plans
                </Link>
                ,{" "}
                <Link href="/pricing" className="prose-link">
                  pricing
                </Link>
                , and{" "}
                <Link href="/location" className="prose-link">
                  location
                </Link>{" "}
                pages for the most current verified details, or the full{" "}
                <Link href="/faq" className="prose-link">
                  FAQ
                </Link>{" "}
                for answers to common buyer questions.
              </p>
            </section>
          </div>
        </div>
      </article>
      <RegisterSection />
    </>
  );
}
