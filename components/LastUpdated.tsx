import { LAST_UPDATED, LAST_UPDATED_DISPLAY } from "@/lib/content";

export function LastUpdated({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_DISPLAY}</time>
    </p>
  );
}
