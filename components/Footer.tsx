import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { LastUpdated } from "@/components/LastUpdated";
import { NAV_LINKS, SPEC_DISCLAIMER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-text-on-dark">
      <div className="page-wrap grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-2xl text-white">Derry Lane Towns</p>
          <span className="mt-2 block h-px w-12 bg-brand-accent" aria-hidden="true" />
          <div className="mt-5">
            <Disclaimer />
          </div>
          <p className="mt-4 text-sm text-text-on-dark/80">{SPEC_DISCLAIMER}</p>
          <LastUpdated className="mt-3 text-sm text-text-on-dark/80" />
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2 text-sm font-semibold">
            <li>
              <Link href="/" className="text-text-on-dark no-underline hover:underline">
                Overview
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-text-on-dark no-underline hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/register" className="text-text-on-dark no-underline hover:underline">
                Register for VIP Access
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-text-on-dark no-underline hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-text-on-dark no-underline hover:underline">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
