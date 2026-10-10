import { ANSWER_FIRST } from "@/lib/content";

export function AnswerFirstSummary() {
  return (
    <section className="section bg-surface" aria-labelledby="what-is">
      <div className="page-wrap">
        <h2 id="what-is" className="text-3xl text-brand-deep md:text-4xl">
          What is Derry Lane Towns?
        </h2>
        <p className="measure mt-5 text-[1.075rem]">{ANSWER_FIRST}</p>
      </div>
    </section>
  );
}
