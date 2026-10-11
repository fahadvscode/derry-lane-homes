import Image from "next/image";
import Link from "next/link";
import { LOGO_HEIGHT, LOGO_IMAGE, LOGO_WIDTH, NAV_LINKS } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-primary text-text-on-dark">
      <div className="page-wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="block shrink-0 no-underline">
          <Image
            src={LOGO_IMAGE}
            alt="Derry Lane Towns"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm font-semibold md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-text-on-dark no-underline hover:underline">
              {link.label}
            </Link>
          ))}
          <Link href="/register" className="btn px-3 py-2 text-sm">
            Register for VIP Access
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded-sm px-3 py-2 text-sm font-semibold">Menu</summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 w-56 border border-border bg-surface p-3 text-text-primary shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 font-semibold no-underline">
                {link.label}
              </Link>
            ))}
            <Link href="/register" className="btn mt-2 w-full text-sm">
              Register for VIP Access
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
