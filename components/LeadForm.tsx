"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode, type SelectHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { CASL_CONSENT } from "@/lib/content";
import {
  BUDGET_OPTIONS,
  BUYER_OPTIONS,
  HOME_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  leadSchema,
} from "@/lib/lead-schema";
import { captureUtm, readUtm } from "@/lib/utm";
import { trackEvent } from "@/components/track";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  home_type_interest: string;
  budget_range: string;
  buyer_type: string;
  timeline: string;
  is_broker: boolean;
  consent_given: boolean;
  website: string;
};

const EMPTY: FormValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  home_type_interest: "",
  budget_range: "",
  buyer_type: "",
  timeline: "",
  is_broker: false,
  consent_given: false,
  website: "",
};

export function LeadForm({ location = "page" }: { location?: string }) {
  const router = useRouter();
  const started = useRef(0);
  const focused = useRef(false);
  const baseId = useId();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    started.current = Date.now();
    captureUtm();
  }, []);

  function onFocus() {
    if (focused.current) return;
    focused.current = true;
    trackEvent("form_start", { form_location: location });
  }

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const elapsed = Date.now() - started.current;
    if (elapsed < 3000) {
      setFormError("Please take a moment to review the form before submitting.");
      return;
    }
    const utm = readUtm();
    const payload = {
      ...values,
      is_broker: values.is_broker,
      consent_given: values.consent_given,
      elapsed_ms: elapsed,
      page_path: window.location.pathname.slice(0, 200),
      website: values.website,
      utm_source: utm.utm_source ?? null,
      utm_medium: utm.utm_medium ?? null,
      utm_campaign: utm.utm_campaign ?? null,
      utm_term: utm.utm_term ?? null,
      utm_content: utm.utm_content ?? null,
    };
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = messageFor(key);
      }
      setErrors(next);
      setFormError("Please correct the highlighted fields.");
      return;
    }
    setErrors({});
    setPending(true);
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setPending(false);
    if (!response.ok) {
      setFormError("Registration could not be saved. Please review the form and try again.");
      return;
    }
    router.push("/thank-you");
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className="relative grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First name" id={`${baseId}-first`} error={errors.first_name}>
          <input
            id={`${baseId}-first`}
            className="field"
            autoComplete="given-name"
            value={values.first_name}
            onChange={(event) => update("first_name", event.target.value)}
          />
        </Field>
        <Field label="Last name" id={`${baseId}-last`} error={errors.last_name}>
          <input
            id={`${baseId}-last`}
            className="field"
            autoComplete="family-name"
            value={values.last_name}
            onChange={(event) => update("last_name", event.target.value)}
          />
        </Field>
        <Field label="Email" id={`${baseId}-email`} error={errors.email}>
          <input
            id={`${baseId}-email`}
            className="field"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field label="Phone" id={`${baseId}-phone`} error={errors.phone}>
          <input
            id={`${baseId}-phone`}
            className="field"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <SelectField
          label="Home type interest"
          id={`${baseId}-home`}
          error={errors.home_type_interest}
          value={values.home_type_interest}
          onChange={(event) => update("home_type_interest", event.target.value)}
          options={HOME_TYPE_OPTIONS}
        />
        <SelectField
          label="Budget range"
          id={`${baseId}-budget`}
          error={errors.budget_range}
          value={values.budget_range}
          onChange={(event) => update("budget_range", event.target.value)}
          options={BUDGET_OPTIONS}
        />
        <SelectField
          label="Buyer type"
          id={`${baseId}-buyer`}
          error={errors.buyer_type}
          value={values.buyer_type}
          onChange={(event) => update("buyer_type", event.target.value)}
          options={BUYER_OPTIONS}
        />
        <SelectField
          label="Timeline"
          id={`${baseId}-timeline`}
          error={errors.timeline}
          value={values.timeline}
          onChange={(event) => update("timeline", event.target.value)}
          options={TIMELINE_OPTIONS}
        />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5"
          checked={values.is_broker}
          onChange={(event) => update("is_broker", event.target.checked)}
        />
        <span>Are you a licensed real estate agent?</span>
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5"
          checked={values.consent_given}
          onChange={(event) => update("consent_given", event.target.checked)}
        />
        <span>{CASL_CONSENT}</span>
      </label>
      {errors.consent_given && <p className="text-sm font-semibold text-brand-accent-ink">{errors.consent_given}</p>}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input
          id={`${baseId}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      <button type="submit" className="btn w-full md:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Register for VIP Access"}
      </button>
      <p role="alert" aria-live="assertive" className="min-h-6 text-sm font-semibold text-brand-accent-ink">
        {formError}
      </p>
    </form>
  );
}

function messageFor(key: string) {
  switch (key) {
    case "first_name":
      return "Enter your first name.";
    case "last_name":
      return "Enter your last name.";
    case "email":
      return "Enter a valid email address.";
    case "phone":
      return "Enter a Canadian phone number, such as 905-555-0134.";
    case "consent_given":
      return "Consent is required to register.";
    case "home_type_interest":
      return "Select a home type.";
    case "budget_range":
      return "Select a budget range.";
    case "buyer_type":
      return "Select a buyer type.";
    case "timeline":
      return "Select a timeline.";
    default:
      return "Check this field.";
  }
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label} <span className="text-brand-accent-ink">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm font-semibold text-brand-accent-ink">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  id,
  error,
  options,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
  options: readonly { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Field label={label} id={id} error={error}>
      <select id={id} className="field" {...props}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
}
