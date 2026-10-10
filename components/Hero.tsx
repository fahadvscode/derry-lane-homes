import Image from "next/image";
import Link from "next/link";
import { HERO_ALT, HERO_IMAGE } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-brand-deep text-text-on-dark md:min-h-[680px]">
      <Image
        src={HERO_IMAGE}
        alt={HERO_ALT}
        width={1600}
        height={900}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/55" aria-hidden="true" />
      <div className="page-wrap relative flex min-h-[560px] flex-col justify-end py-16 md:min-h-[680px] md:py-24">
        <p className="eyebrow text-[#f3d7c8]">Coming Soon — Registration Open</p>
        <h1 className="mt-4 max-w-[16ch] text-4xl text-white md:text-6xl">
          Derry Lane Towns — New Pre-Construction Townhomes in Mississauga
        </h1>
        <p className="measure mt-5 text-lg text-text-on-dark">
          A collection of 120 back-to-back, street, and rear-lane townhomes by Ballymore Homes, coming to
          Derry Road West and Hurontario Street in Mississauga&apos;s Meadowvale Village.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className="btn">
            Register for VIP Access
          </Link>
          <Link href="/floor-plans" className="btn-secondary">
            See Home Types
          </Link>
        </div>
      </div>
    </section>
  );
}
