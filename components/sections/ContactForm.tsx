"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (key: string) => formData.get(key)?.toString().trim() ?? "";

    setState("sending");
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"),
          email: value("email"),
          phone: value("phone") || undefined,
          service: value("service") || undefined,
          message: value("message"),
          consent: formData.get("consent") === "on",
          website: value("website"),
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setState("sent");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-3xl border border-brand-primary/15 bg-brand-surface p-8 text-center" role="status">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 className="font-heading mt-4 text-2xl font-extrabold text-brand-navy">Thanks — message received</h2>
        <p className="mx-auto mt-2 max-w-md text-gray-600">
          We&apos;ll reply within one business day. If your matter is urgent, please call{" "}
          {siteConfig.contact.phone}.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-5 text-sm font-semibold text-brand-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
        />
        <span>
          I agree to Learniiz using my details to respond to this enquiry, as
          described in the{" "}
          <a href="/privacy" target="_blank" className="font-semibold text-brand-primary underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark disabled:cursor-wait disabled:opacity-70"
      >
        {state === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-brand-navy"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
      />
    </div>
  );
}
