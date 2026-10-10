import { PRICE_ROWS } from "@/lib/content";

export function PricingTable() {
  return (
    <table className="fact-table">
      <caption>Reported Derry Lane Towns price range as of October 2026.</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody>
        {PRICE_ROWS.map((row) => (
          <tr key={row.field}>
            <th scope="row">{row.field}</th>
            <td>{row.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
