import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { HERO_ALT, HERO_HEIGHT, HERO_IMAGE, HERO_WIDTH } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-text-on-dark">
      <Image
        src={HERO_IMAGE}
        alt={HERO_ALT}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        priority
        unoptimized
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-brand-deep/80 md:bg-gradient-to-r md:from-brand-deep/88 md:via-brand-deep/72 md:to-brand-deep/40" aria-hidden="true" />
      <div className="page-wrap relative grid items-center gap-6 py-8 md:grid-cols-2 md:gap-10 md:py-12">
        <div className="min-w-0">
          <p className="eyebrow text-[#f3d7c8]">Coming Soon — Registration Open</p>
          <h1 className="mt-3 text-4xl text-white md:text-5xl">Derry Lane Towns</h1>
          <p className="mt-4 max-w-[34ch] text-lg text-text-on-dark">
            Townhomes from the high $700,000s. Semis from $1 million. Detached from $1.2 million.
          </p>
        </div>
        <div id="vip-form" className="card min-w-0 scroll-mt-24 p-4 text-text-primary sm:p-6">
          <h2 className="text-2xl text-brand-deep">Register for VIP Access</h2>
          <div className="mt-4">
            <LeadForm location="hero" variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
