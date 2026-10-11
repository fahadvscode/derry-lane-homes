"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { privacyRequestSchema } from "@/lib/lead-schema";

export function PrivacyRequestForm() {
  const baseId = useId();
  const started = useRef(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isBroker, setIsBroker] = useState<"" | "yes" | "no">("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    started.current = Date.now();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const elapsed = Date.now() - started.current;
    if (elapsed < 3000) {
      setStatus("Please take a moment to review the request before submitting.");
      return;
    }
    const parsed = privacyRequestSchema.safeParse({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      is_broker: isBroker === "yes" ? true : isBroker === "no" ? false : "",
      message,
      website,
      elapsed_ms: elapsed,
      page_path: window.location.pathname,
    });
    if (!parsed.success) {
      setStatus("Enter your name, a valid email, a Canadian phone number, and whether you are a broker.");
      return;
    }
    setPending(true);
    const response = await fetch("/api/privacy-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setPending(false);
    if (!response.ok) {
      setStatus("The request could not be saved. Please try again shortly.");
      return;
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setIsBroker("");
    setMessage("");
    setStatus("Request received. The registration team will action deletion or access requests for this site.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative mt-6 grid max-w-xl gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold" htmlFor={`${baseId}-first`}>
          First name <span className="text-brand-accent-ink">*</span>
          <input
            id={`${baseId}-first`}
            className="field mt-1 font-normal"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold" htmlFor={`${baseId}-last`}>
          Last name <span className="text-brand-accent-ink">*</span>
          <input
            id={`${baseId}-last`}
            className="field mt-1 font-normal"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold" htmlFor={`${baseId}-email`}>
          Email <span className="text-brand-accent-ink">*</span>
          <input
            id={`${baseId}-email`}
            className="field mt-1 font-normal"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold" htmlFor={`${baseId}-phone`}>
          Phone <span className="text-brand-accent-ink">*</span>
          <input
            id={`${baseId}-phone`}
            className="field mt-1 font-normal"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
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
                checked={isBroker === choice}
                onChange={() => setIsBroker(choice)}
              />
              <span>{choice === "yes" ? "Yes" : "No"}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-semibold" htmlFor={`${baseId}-message`}>
        Request <span className="text-brand-accent-ink">*</span>
        <textarea
          id={`${baseId}-message`}
          className="field mt-1 min-h-32 font-normal"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input
          id={`${baseId}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>
      <button type="submit" className="btn w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Submit privacy request"}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm font-semibold text-brand-deep">
        {status}
      </p>
    </form>
  );
}
