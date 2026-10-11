import {
  ANSWER_FIRST,
  CASL_CONSENT,
  HERO_ALT,
  INDEPENDENCE_DISCLAIMER,
  PASSAGES,
  QUICK_FACTS,
  SITE_URL,
  SPEC_DISCLAIMER,
} from "@/lib/content";
import { FAQ_ITEMS } from "@/lib/faq";

export const AMP_PATHS = [
  "/",
  "/floor-plans",
  "/pricing",
  "/location",
  "/gallery",
  "/faq",
  "/register",
  "/blog/mississauga-pre-construction-guide",
  "/privacy",
  "/terms",
] as const;

const PAGES: Record<string, { title: string; description: string; paragraphs: string[] }> = {
  "/": {
    title: "Derry Lane Towns | Mississauga Pre-Construction Townhomes",
    description: "Register for Derry Lane Towns. Townhomes from the high $700,000s, semis from $1 million, detached from $1.2 million.",
    paragraphs: [ANSWER_FIRST],
  },
  "/floor-plans": {
    title: "Derry Lane Towns Floor Plans",
    description: PASSAGES.types,
    paragraphs: [PASSAGES.types],
  },
  "/pricing": {
    title: "Derry Lane Towns Prices",
    description: PASSAGES.price,
    paragraphs: [PASSAGES.price],
  },
  "/location": {
    title: "Derry Lane Towns Location",
    description: PASSAGES.where,
    paragraphs: [PASSAGES.where],
  },
  "/gallery": {
    title: "Derry Lane Towns Renderings",
    description: "Streetscape and site context for Derry Lane Towns in Mississauga.",
    paragraphs: [
      "The Derry Lane Towns streetscape shows the townhome frontage along a landscaped road. Unit plans have not been released.",
    ],
  },
  "/faq": {
    title: "Derry Lane Towns FAQ",
    description: "Answers about Derry Lane Towns home types, prices, location, and registration.",
    paragraphs: [],
  },
  "/register": {
    title: "Register for Derry Lane Towns VIP Access",
    description: PASSAGES.registerCost,
    paragraphs: [PASSAGES.vip, PASSAGES.registerCost],
  },
  "/blog/mississauga-pre-construction-guide": {
    title: "Mississauga Pre-Construction Guide",
    description: "How to read a Mississauga pre-construction launch, using Derry Lane Towns as the example.",
    paragraphs: [PASSAGES.best, PASSAGES.compare],
  },
  "/privacy": {
    title: "Privacy | Derry Lane Homes",
    description: "Request access to or deletion of the information submitted on derrylanehomes.com.",
    paragraphs: [
      "Use this form to ask for access to, or deletion of, information submitted through derrylanehomes.com.",
    ],
  },
  "/terms": {
    title: "Terms | Derry Lane Homes",
    description: "Terms for the independent Derry Lane Towns information and registration site.",
    paragraphs: [INDEPENDENCE_DISCLAIMER],
  },
};

export function ampUrlFor(pathname: string) {
  if (!AMP_PATHS.includes(pathname as (typeof AMP_PATHS)[number])) return null;
  return pathname === "/" ? `${SITE_URL}/amp` : `${SITE_URL}/amp${pathname}`;
}

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function leadForm(pagePath: string) {
  return `<form method="post" action-xhr="${SITE_URL}/api/lead" custom-validation-reporting="interact-and-submit">
      <div class="grid">
        <label>First name *<input class="field" name="first_name" type="text" autocomplete="given-name" required></label>
        <label>Last name *<input class="field" name="last_name" type="text" autocomplete="family-name" required></label>
        <label>Email *<input class="field" name="email" type="email" autocomplete="email" required></label>
        <label>Phone *<input class="field" name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <fieldset>
        <legend>Are you a broker? *</legend>
        <div class="choices">
          <label class="choice"><input type="radio" name="is_broker" value="yes" required> Yes</label>
          <label class="choice"><input type="radio" name="is_broker" value="no" required> No</label>
        </div>
      </fieldset>
      <label class="consent"><input type="checkbox" name="consent_given" value="true" required> ${esc(CASL_CONSENT)}</label>
      <div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <input type="hidden" name="page_path" value="${esc(pagePath)}">
      <button class="btn" type="submit">Register for VIP Access</button>
      <div submit-success><template type="amp-mustache"><p>Registration received.</p></template></div>
      <div submit-error><template type="amp-mustache"><p>Registration could not be saved. Please check the form and try again.</p></template></div>
    </form>`;
}

function privacyForm(pagePath: string) {
  return `<form method="post" action-xhr="${SITE_URL}/api/privacy-request" custom-validation-reporting="interact-and-submit">
      <div class="grid">
        <label>First name *<input class="field" name="first_name" type="text" autocomplete="given-name" required></label>
        <label>Last name *<input class="field" name="last_name" type="text" autocomplete="family-name" required></label>
        <label>Email *<input class="field" name="email" type="email" autocomplete="email" required></label>
        <label>Phone *<input class="field" name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <fieldset>
        <legend>Are you a broker? *</legend>
        <div class="choices">
          <label class="choice"><input type="radio" name="is_broker" value="yes" required> Yes</label>
          <label class="choice"><input type="radio" name="is_broker" value="no" required> No</label>
        </div>
      </fieldset>
      <label>Request *<textarea class="field" name="message" required></textarea></label>
      <div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
      <input type="hidden" name="page_path" value="${esc(pagePath)}">
      <button class="btn" type="submit">Submit privacy request</button>
      <div submit-success><template type="amp-mustache"><p>Request received.</p></template></div>
      <div submit-error><template type="amp-mustache"><p>The request could not be saved. Please try again.</p></template></div>
    </form>`;
}

export function renderAmpDocument(pathname: string) {
  const page = PAGES[pathname];
  if (!page) return null;
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const facts =
    pathname === "/"
      ? `<dl class="facts">${QUICK_FACTS.map((row) => `<dt>${esc(row.field)}</dt><dd>${esc(row.detail)}</dd>`).join("")}</dl>`
      : "";
  const faq =
    pathname === "/faq"
      ? FAQ_ITEMS.map((item) => `<h2>${esc(item.question)}</h2><p>${esc(item.answer)}</p>`).join("")
      : "";
  const form = pathname === "/privacy" ? privacyForm(pathname) : leadForm(pathname);
  const body = page.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");

  return `<!doctype html>
<html amp lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <title>${esc(page.title)}</title>
  <link rel="canonical" href="${esc(canonical)}">
  <meta name="description" content="${esc(page.description)}">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
  <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
  <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
  <style amp-custom>
    body{margin:0;background:#fbf8f2;color:#22281f;font-family:Georgia,serif;font-size:17px;line-height:1.6}
    header{background:#3f5744;padding:12px 16px}
    .logo{display:block;width:132px}
    main{width:min(100% - 32px,720px);margin:24px auto 48px}
    h1{font-size:2rem;line-height:1.2;font-weight:400;margin:16px 0}
    h2{font-size:1.35rem;line-height:1.3;margin:28px 0 8px}
    a{color:#3f5744}
    .card{background:#fff;border:1px solid #e1d9c8;padding:16px;margin-top:20px}
    .grid{display:grid;gap:12px}
    label{display:block;font-family:Arial,sans-serif;font-size:14px;font-weight:700}
    .field{width:100%;box-sizing:border-box;min-height:48px;margin-top:4px;padding:10px 12px;font-size:16px;border:1px solid #e1d9c8}
    .choices{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .choice{display:flex;align-items:center;gap:8px;min-height:48px;border:1px solid #e1d9c8;padding:10px 12px;background:#fff}
    .consent{display:flex;gap:10px;align-items:flex-start;font-weight:400;margin:12px 0}
    .btn{display:block;width:100%;min-height:48px;border:0;background:#7e4326;color:#fff;font-size:16px;font-weight:700}
    .facts{display:grid;grid-template-columns:8.5rem 1fr;gap:8px 12px;font-family:Arial,sans-serif;font-size:15px}
    .facts dt{font-weight:700;color:#3f5744}
    .facts dd{margin:0}
    .note{color:#5b6358;font-size:14px}
    .hp{position:absolute;left:-10000px;height:1px;width:1px;overflow:hidden}
    legend{font-family:Arial,sans-serif;font-size:14px;font-weight:700}
  </style>
</head>
<body>
  <header>
    <a class="logo" href="${esc(canonical)}">
      <amp-img src="${SITE_URL}/images/DL-logo.png" width="463" height="279" layout="responsive" alt="Derry Lane Towns"></amp-img>
    </a>
  </header>
  <main>
    <amp-img src="${SITE_URL}/images/streetscape.jpg" width="1169" height="387" layout="responsive" alt="${esc(HERO_ALT)}"></amp-img>
    <h1>${esc(page.title.split("|")[0].trim())}</h1>
    ${body}
    ${facts}
    ${faq}
    <div class="card">
      <h2>${pathname === "/privacy" ? "Privacy request" : "Register for VIP Access"}</h2>
      ${form}
    </div>
    <p class="note">${esc(INDEPENDENCE_DISCLAIMER)}</p>
    <p class="note">${esc(SPEC_DISCLAIMER)}</p>
    <p><a href="${esc(canonical)}">View the full page</a></p>
  </main>
</body>
</html>`;
}
