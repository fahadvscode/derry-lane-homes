import { TRANSIT } from "@/lib/content";

export function TransitTable() {
  return (
    <table className="fact-table">
      <caption>Drive times from Derry Lane Towns. Times are approximate.</caption>
      <thead>
        <tr>
          <th scope="col">Route / Station</th>
          <th scope="col">Drive time</th>
        </tr>
      </thead>
      <tbody>
        {TRANSIT.map((row) => (
          <tr key={row.route}>
            <th scope="row">{row.route}</th>
            <td>{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
