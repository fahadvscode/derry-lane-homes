import { QUICK_FACTS } from "@/lib/content";
import { SpecDisclaimer } from "@/components/SpecDisclaimer";

export function QuickFacts() {
  return (
    <section className="section bg-surface-alt" aria-labelledby="quick-facts">
      <div className="page-wrap">
        <p className="eyebrow">At a glance</p>
        <h2 id="quick-facts" className="mt-3 text-3xl text-brand-deep md:text-4xl">
          Derry Lane Towns quick facts
        </h2>
        <div className="mt-8 overflow-x-auto">
          <table className="fact-table">
            <caption>Key facts for Derry Lane Towns in Meadowvale Village, Mississauga.</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Field</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {QUICK_FACTS.map((row) => (
                <tr key={row.field}>
                  <th scope="row">{row.field}</th>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SpecDisclaimer />
      </div>
    </section>
  );
}
