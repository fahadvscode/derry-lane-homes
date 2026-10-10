import { SCHOOLS } from "@/lib/content";

export function SchoolsList() {
  return (
    <ul className="mt-4 grid gap-3">
      {SCHOOLS.map((school) => (
        <li key={school} className="card px-4 py-3 font-semibold text-brand-deep">
          {school}
        </li>
      ))}
    </ul>
  );
}
