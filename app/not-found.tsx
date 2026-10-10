import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-surface">
      <div className="page-wrap">
        <h1 className="text-4xl text-brand-deep">Page not found</h1>
        <p className="measure mt-4">That address is not part of the Derry Lane Towns information site.</p>
        <p className="mt-4">
          <Link href="/" className="prose-link">
            Back to Derry Lane Towns
          </Link>
        </p>
      </div>
    </section>
  );
}
