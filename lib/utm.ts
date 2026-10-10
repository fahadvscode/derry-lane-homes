export type UtmParams = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};

const COOKIE = "dlh_utm";
const FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

function readCookie() {
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${COOKIE}=`));
  if (!match) return {};
  try {
    return JSON.parse(decodeURIComponent(match.slice(COOKIE.length + 1))) as UtmParams;
  } catch {
    return {};
  }
}

export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const hasAny = FIELDS.some((field) => params.get(field));
    if (!hasAny) return;
    const next: UtmParams = { ...readCookie() };
    for (const field of FIELDS) {
      const value = params.get(field);
      if (value && !next[field]) next[field] = value.slice(0, 200);
    }
    document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(next))}; Path=/; Max-Age=2592000; SameSite=Lax`;
  } catch {
    /* storage unavailable */
  }
}

export function readUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    return readCookie();
  } catch {
    return {};
  }
}
