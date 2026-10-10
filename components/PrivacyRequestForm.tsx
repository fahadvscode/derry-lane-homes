"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { privacyRequestSchema } from "@/lib/lead-schema";

export function PrivacyRequestForm() {
  const baseId = useId();
  const started = useRef(0);
  const [email, setEmail] = useState("");
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
      email,
      message,
      website,
      elapsed_ms: elapsed,
      page_path: window.location.pathname,
    });
    if (!parsed.success) {
      setStatus("Enter a valid email and a short description of the request.");
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
    setEmail("");
    setMessage("");
    setStatus("Request received. The registration team will action deletion or access requests for this site.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative mt-6 grid max-w-xl gap-4">
      <div>
        <label htmlFor={`${baseId}-email`} className="mb-1 block text-sm font-semibold">
          Email
        </label>
        <input
          id={`${baseId}-email`}
          className="field"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-message`} className="mb-1 block text-sm font-semibold">
          Request
        </label>
        <textarea
          id={`${baseId}-message`}
          className="field min-h-32"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input id={`${baseId}-website`} tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>
      <button type="submit" className="btn w-full md:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Submit privacy request"}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm font-semibold text-brand-deep">
        {status}
      </p>
    </form>
  );
}
