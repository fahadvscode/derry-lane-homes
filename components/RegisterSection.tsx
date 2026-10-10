import { LeadForm } from "@/components/LeadForm";
import { WHY_REGISTER } from "@/lib/content";

export function RegisterSection() {
  return (
    <section className="section bg-surface-alt" aria-labelledby="register-band" id="register">
      <div className="page-wrap grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <p className="eyebrow">VIP registration</p>
          <h2 id="register-band" className="mt-3 text-3xl text-brand-deep md:text-4xl">
            Register for VIP Access
          </h2>
          <p className="measure mt-4">{WHY_REGISTER}</p>
        </div>
        <div className="card p-5 md:p-6">
          <LeadForm location="footer" />
        </div>
      </div>
    </section>
  );
}
