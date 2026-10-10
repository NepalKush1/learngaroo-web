"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const service = formData.get("service")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = `Enquiry: ${service || "General"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service of interest: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
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
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="text-sm text-gray-600">
          Your email client should now be open with your message ready to
          send. If it didn&apos;t open, email us directly at{" "}
          {siteConfig.contact.email}.
        </p>
      )}
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
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-brand-navy focus:border-brand-primary focus:outline-none"
      />
    </div>
  );
}
