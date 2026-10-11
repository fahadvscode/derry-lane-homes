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
  is_broker: "" | "yes" | "no";
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
  is_broker: "",
  consent_given: false,
  website: "",
};

export function LeadForm({
  location = "page",
  variant = "full",
}: {
  location?: string;
  variant?: "full" | "compact";
}) {
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
    const next: Record<string, string> = {};
    if (!values.first_name.trim()) next.first_name = messageFor("first_name");
    if (!values.last_name.trim()) next.last_name = messageFor("last_name");
    if (!values.email.trim()) next.email = messageFor("email");
    if (!values.phone.trim()) next.phone = messageFor("phone");
    if (values.is_broker !== "yes" && values.is_broker !== "no") next.is_broker = messageFor("is_broker");
    if (!values.consent_given) next.consent_given = messageFor("consent_given");
    if (variant === "full") {
      if (!values.home_type_interest) next.home_type_interest = messageFor("home_type_interest");
      if (!values.budget_range) next.budget_range = messageFor("budget_range");
      if (!values.buyer_type) next.buyer_type = messageFor("buyer_type");
      if (!values.timeline) next.timeline = messageFor("timeline");
    }
    if (Object.keys(next).length) {
      setErrors(next);
      setFormError("Please correct the highlighted fields.");
      return;
    }
    const payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone: values.phone,
      is_broker: values.is_broker === "yes",
      consent_given: true as const,
      elapsed_ms: elapsed,
      page_path: window.location.pathname.slice(0, 200),
      website: values.website,
      utm_source: utm.utm_source ?? null,
      utm_medium: utm.utm_medium ?? null,
      utm_campaign: utm.utm_campaign ?? null,
      utm_term: utm.utm_term ?? null,
      utm_content: utm.utm_content ?? null,
      ...(variant === "full"
        ? {
            home_type_interest: values.home_type_interest,
            budget_range: values.budget_range,
            buyer_type: values.buyer_type,
            timeline: values.timeline,
          }
        : {}),
    };
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = messageFor(key);
      }
      setErrors(fieldErrors);
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
      <div className={variant === "compact" ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
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
        {variant === "full" && (
          <>
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
          </>
        )}
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold">
          Are you a broker? <span className="text-brand-accent-ink">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {(["yes", "no"] as const).map((choice) => (
            <label key={choice} className="choice">
              <input
                type="radio"
                name={`${baseId}-broker`}
                value={choice}
                checked={values.is_broker === choice}
                onChange={() => update("is_broker", choice)}
              />
              <span>{choice === "yes" ? "Yes" : "No"}</span>
            </label>
          ))}
        </div>
        {errors.is_broker && <p className="mt-1 text-sm font-semibold text-brand-accent-ink">{errors.is_broker}</p>}
      </fieldset>
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
      <button type="submit" className="btn w-full" disabled={pending}>
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
    case "is_broker":
      return "Select yes or no.";
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
