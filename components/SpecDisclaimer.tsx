import { SPEC_DISCLAIMER } from "@/lib/content";

export function SpecDisclaimer({ className = "mt-4 text-sm text-text-muted" }: { className?: string }) {
  return <p className={className}>{SPEC_DISCLAIMER}</p>;
}
