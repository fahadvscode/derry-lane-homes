import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import { RegisterSection } from "@/components/RegisterSection";
import { SchoolsList } from "@/components/SchoolsList";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";
import { TransitTable } from "@/components/TransitTable";
import {
  COMPARISON_BODY,
  COMPARISON_ROWS,
  LOCATION_LEAD,
  LRT_NOTE,
  PASSAGES,
  PLANNING,
  RETAIL_NOTE,
  SCHOOLS_NOTE,
  SHERIDAN_NOTE,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, residenceSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Derry Lane Towns Location | Meadowvale Village",
  description:
    "Derry Lane Towns sits in Mississauga's Meadowvale Village near Highway 401, Meadowvale GO, and nearby schools. See the full location guide.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Derry Lane Towns Location", "/location")} />
      <JsonLd data={residenceSchema()} />
      <Breadcrumbs current="Location" />
      <header className="bg-brand-deep text-text-on-dark">
        <div className="page-wrap py-16 md:py-20">
          <p className="eyebrow text-[#f3d7c8]">Derry Road West & Hurontario Street</p>
          <h1 className="mt-3 max-w-[16ch] text-4xl text-white md:text-5xl">Derry Lane Towns Location</h1>
          <p className="measure mt-5 text-lg">
            Derry Lane Towns location is 376 and 390 Derry Road West, Mississauga, on the south side of Derry
            Road West just west of Hurontario Street, in Meadowvale Village.
          </p>
        </div>
      </header>

      <section className="section bg-surface" aria-labelledby="intersection">
        <div className="page-wrap">
          <h2 id="intersection" className="text-3xl text-brand-deep md:text-4xl">
            Where is Derry Lane Towns located?
          </h2>
          <p className="measure mt-5">{PASSAGES.where}</p>
          <p className="measure mt-4">{LOCATION_LEAD}</p>
          <LocationMap />
          <div className="mt-6 grid gap-4">
            {PLANNING.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="measure">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="transit">
        <div className="page-wrap">
          <h2 id="transit" className="text-3xl text-brand-deep md:text-4xl">
            Transit and highway access
          </h2>
          <p className="measure mt-5">{PASSAGES.transit}</p>
          <div className="mt-8 overflow-x-auto">
            <TransitTable />
          </div>
          <p className="measure mt-6">{LRT_NOTE}</p>
          <p className="measure mt-4">
            Highway 401 is the closest 400-series highway, at about 7 minutes. Highways 407 and 410 are each
            about 10 minutes. Meadowvale GO, on the Milton line toward Union Station, is about 10 to 13
            minutes by car. Toronto Pearson International Airport is about 15 to 20 minutes. Ballymore Homes
            also describes local transit at about a minute and downtown Toronto at about 35 minutes. Those last
            two figures are the builder&apos;s own travel notes, not a timed audit by this site.
          </p>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="schools">
        <div className="page-wrap">
          <h2 id="schools" className="text-3xl text-brand-deep md:text-4xl">
            Schools near Derry Lane Towns
          </h2>
          <p className="measure mt-5">{PASSAGES.schools}</p>
          <p className="measure mt-4">{SCHOOLS_NOTE}</p>
          <SchoolsList />
          <p className="measure mt-4">{SHERIDAN_NOTE}</p>
          <p className="mt-4">
            <Link href="/faq#schools" className="prose-link">
              schools FAQ
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-surface-alt" aria-labelledby="retail">
        <div className="page-wrap">
          <h2 id="retail" className="text-3xl text-brand-deep md:text-4xl">
            Retail, recreation, and daily essentials
          </h2>
          <p className="measure mt-5">{RETAIL_NOTE}</p>
          <p className="measure mt-4">{PASSAGES.meadowvale}</p>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="compare">
        <div className="page-wrap">
          <h2 id="compare" className="max-w-[24ch] text-3xl text-brand-deep md:text-4xl">
            How does Derry Lane Towns compare to other Mississauga pre-construction communities?
          </h2>
          <p className="measure mt-5">{COMPARISON_BODY}</p>
          <p className="measure mt-4">{PASSAGES.compare}</p>
          <div className="mt-8 overflow-x-auto">
            <table className="fact-table">
              <caption>
                Derry Lane Towns and Applewood Towns compared with published, non-contract figures.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Detail</th>
                  <th scope="col">Derry Lane Towns</th>
                  <th scope="col">Applewood Towns</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.field}>
                    <th scope="row">{row.field}</th>
                    <td>{row.derry}</td>
                    <td>{row.applewood}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="measure mt-6">
            Applewood Towns sizes of roughly 798 to 1,560 square feet, a 70-home count, and three storeys come
            from a public listing and should be treated as indicative. The same caution applies to both
            starting prices. A wider look at the 2026 market is in the{" "}
            <Link href="/blog/mississauga-pre-construction-guide" className="prose-link">
              Mississauga pre-construction guide
            </Link>
            .
          </p>
          <SpecDisclaimer />
        </div>
      </section>
      <RegisterSection />
    </>
  );
}
