import { SOURCES } from "@/lib/content";

export function Sources() {
  return (
    <section className="section bg-surface" aria-labelledby="sources">
      <div className="page-wrap">
        <h2 id="sources" className="text-3xl text-brand-deep">
          Sources checked for this page
        </h2>
        <ul className="mt-4 grid gap-2">
          {SOURCES.map((source) => (
            <li key={source.href}>
              <a href={source.href} className="prose-link" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="measure mt-4 text-text-muted">
          Starting prices quoted from unofficial listings are labelled as unofficial. Deposit amounts,
          incentives, occupancy, lot widths, and sales-centre hours stay marked to be announced until
          Ballymore Homes publishes them.
        </p>
      </div>
    </section>
  );
}
