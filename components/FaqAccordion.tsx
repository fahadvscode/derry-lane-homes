import Link from "next/link";
import type { FaqItem } from "@/lib/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-8 grid gap-3">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="card group p-0" open={item.id === items[0]?.id}>
          <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-brand-deep">
            <h3 className="inline text-lg">{item.question}</h3>
          </summary>
          <div className="border-t border-border px-5 py-4">
            <p>{item.answer}</p>
            {item.href && item.anchor && (
              <p className="mt-3">
                <Link href={item.href} className="prose-link">
                  {item.anchor}
                </Link>
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
