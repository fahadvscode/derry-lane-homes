import Link from "next/link";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface-alt">
      <ol className="page-wrap flex flex-wrap gap-2 py-3 text-sm text-text-muted">
        <li>
          <Link href="/" className="prose-link font-semibold">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-semibold text-text-primary">
          {current}
        </li>
      </ol>
    </nav>
  );
}
