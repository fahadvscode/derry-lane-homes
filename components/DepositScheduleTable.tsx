import { DEPOSIT_ROWS } from "@/lib/content";

export function DepositScheduleTable() {
  return (
    <table className="fact-table">
      <caption>Derry Lane Towns deposit schedule. Every amount is to be announced.</caption>
      <thead>
        <tr>
          <th scope="col">Milestone</th>
          <th scope="col">Amount</th>
          <th scope="col">Due</th>
        </tr>
      </thead>
      <tbody>
        {DEPOSIT_ROWS.map((row) => (
          <tr key={row.milestone}>
            <th scope="row">{row.milestone}</th>
            <td>{row.amount}</td>
            <td>{row.due}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
