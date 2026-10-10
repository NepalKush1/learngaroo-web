"use client";

import { useState } from "react";
import { clientDetailsSchema, type ClientDetails } from "@/lib/booking-schema";
import type { ConsultationService } from "@/data/consultations";

export type { ClientDetails };

const DEFAULT_VALUES: ClientDetails = {
  firstName: "",
  lastName: "",
  phoneCountryCode: "+61",
  phone: "",
  emails: [],
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postcode: "",
  country: "Australia",
  hearAboutUs: "",
  enquiryDescription: "",
  decisionDate: "",
  reviewDeadline: "",
  agreeTerms: false as unknown as true,
};

const PHONE_COUNTRIES = [
  { label: "Australia", dialCode: "+61" },
  { label: "New Zealand", dialCode: "+64" },
  { label: "India", dialCode: "+91" },
  { label: "Nepal", dialCode: "+977" },
  { label: "Philippines", dialCode: "+63" },
  { label: "China", dialCode: "+86" },
  { label: "United Kingdom", dialCode: "+44" },
  { label: "United States", dialCode: "+1" },
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Congo (DRC)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Social Media",
  "Referral from friend or family",
  "Existing client",
  "Other",
];

function Field({
  label,
  error,
  hint,
  required,
  group = false,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  // For composite controls with their own buttons (e.g. the email chips),
  // which mustn't sit inside a <label>; their inputs carry aria-labels.
  group?: boolean;
  children: React.ReactNode;
}) {
  const Wrapper = group ? "div" : "label";
  return (
    <div>
      {/* Wrapping the control in the <label> associates the two for screen readers. */}
      <Wrapper className="block">
        <span className="mb-2 block text-base font-semibold text-brand-navy">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </span>
        {children}
      </Wrapper>
      {hint && !error && <p className="mt-1.5 text-sm text-gray-500">{hint}</p>}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-base text-brand-navy transition-colors focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/10";

function EmailChipsField({
  emails,
  onChange,
  error,
}: {
  emails: string[];
  onChange: (emails: string[]) => void;
  error?: string;
}) {
  const [draft, setDraft] = useState("");

  function commitDraft() {
    const candidate = draft.trim().replace(/,$/, "");
    if (!candidate) return;
    if (!emails.includes(candidate)) {
      onChange([...emails, candidate]);
    }
    setDraft("");
  }

  function removeEmail(email: string) {
    onChange(emails.filter((existing) => existing !== email));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commitDraft();
    } else if (event.key === "Backspace" && draft === "" && emails.length > 0) {
      onChange(emails.slice(0, -1));
    }
  }

  return (
    <Field
      label="Email address"
      error={error}
      hint="Use a comma or press enter/return to add additional email addresses."
      required
      group
    >
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-300 px-3.5 py-2.5 transition-colors focus-within:border-brand-primary focus-within:ring-4 focus-within:ring-brand-primary/10">
        {emails.map((email) => (
          <span
            key={email}
            className="flex items-center gap-1.5 rounded-full bg-brand-surface px-3.5 py-1.5 text-sm font-medium text-brand-navy"
          >
            {email}
            <button
              type="button"
              onClick={() => removeEmail(email)}
              aria-label={`Remove ${email}`}
              className="text-gray-400 transition-colors hover:text-brand-navy"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="email"
          aria-label="Email address"
          autoComplete="email"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commitDraft}
          placeholder={emails.length === 0 ? "you@example.com" : "Add another email"}
          className="min-w-[10rem] flex-1 border-none p-1 text-base text-brand-navy outline-none"
        />
        <button
          type="button"
          onClick={commitDraft}
          className="shrink-0 rounded-full bg-brand-surface px-3.5 py-1.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-gray-100"
        >
          Add
        </button>
      </div>
    </Field>
  );
}

export function StepDetails({
  service,
  initialValues,
  onSubmit,
}: {
  service: ConsultationService;
  initialValues?: Partial<ClientDetails>;
  onSubmit: (values: ClientDetails) => void;
}) {
  const isArtReview = service.slug === "art-reviews";

  const [values, setValues] = useState<ClientDetails>({
    ...DEFAULT_VALUES,
    ...initialValues,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof ClientDetails>(key: K, value: ClientDetails[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const result = clientDetailsSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6 rounded-2xl border border-brand-primary/15 bg-brand-mint/60 p-6 sm:p-7">
        <div>
          <h3 className="font-heading text-xl font-semibold text-brand-navy">
            Contact Details
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            How we&apos;ll reach you to confirm your consultation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="First name" error={errors.firstName} required>
            <input
              className={inputClasses}
              value={values.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </Field>
          <Field label="Last name" error={errors.lastName} required>
            <input
              className={inputClasses}
              value={values.lastName}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </Field>
        </div>

        <Field label="Phone" error={errors.phone} required>
          <div className="flex gap-2">
            <select
              aria-label="Country calling code"
              value={values.phoneCountryCode}
              onChange={(e) => update("phoneCountryCode", e.target.value)}
              className={`${inputClasses} w-auto shrink-0`}
            >
              {PHONE_COUNTRIES.map((country) => (
                <option key={country.dialCode} value={country.dialCode}>
                  {country.label} {country.dialCode}
                </option>
              ))}
            </select>
            <input
              type="tel"
              aria-label="Phone number"
              autoComplete="tel-national"
              className={inputClasses}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
        </Field>

        <EmailChipsField
          emails={values.emails}
          onChange={(emails) => update("emails", emails)}
          error={errors.emails}
        />
      </div>

      <div className="rounded-2xl bg-brand-surface p-6 sm:p-7">
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          Booking Details
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Your address and a short summary of your situation.
        </p>

        <div className="mt-6 space-y-6">
          <Field label="Address line 1" error={errors.addressLine1} required>
            <input
              className={inputClasses}
              value={values.addressLine1}
              onChange={(e) => update("addressLine1", e.target.value)}
            />
          </Field>

          <Field label="Address line 2">
            <input
              className={inputClasses}
              value={values.addressLine2}
              onChange={(e) => update("addressLine2", e.target.value)}
            />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="City" error={errors.city} required>
              <input
                className={inputClasses}
                value={values.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </Field>
            <Field label="State" error={errors.state} required>
              <input
                className={inputClasses}
                value={values.state}
                onChange={(e) => update("state", e.target.value)}
              />
            </Field>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Postcode" error={errors.postcode} required>
              <input
                className={inputClasses}
                value={values.postcode}
                onChange={(e) => update("postcode", e.target.value)}
              />
            </Field>
            <Field label="Country" error={errors.country} required>
              <select
                className={inputClasses}
                value={values.country}
                onChange={(e) => update("country", e.target.value)}
              >
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="How did you hear about us?">
            <select
              className={inputClasses}
              value={values.hearAboutUs}
              onChange={(e) => update("hearAboutUs", e.target.value)}
            >
              <option value="">Select an option</option>
              {HEAR_ABOUT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="How can we help you?"
            error={errors.enquiryDescription}
            required
          >
            <textarea
              rows={4}
              className={inputClasses}
              placeholder="Briefly explain your situation and include any important visa expiry, refusal or application dates."
              value={values.enquiryDescription}
              onChange={(e) => update("enquiryDescription", e.target.value)}
            />
          </Field>

          {isArtReview && (
            <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:grid-cols-2">
              <Field label="Date of decision">
                <input
                  type="date"
                  className={inputClasses}
                  value={values.decisionDate}
                  onChange={(e) => update("decisionDate", e.target.value)}
                />
              </Field>
              <Field label="Review deadline (if known)">
                <input
                  type="date"
                  className={inputClasses}
                  value={values.reviewDeadline}
                  onChange={(e) => update("reviewDeadline", e.target.value)}
                />
              </Field>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-7 shadow-sm">
        <p className="font-heading text-lg font-semibold text-brand-navy">
          Consultation Terms &amp; Conditions
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          By booking this appointment, you agree to pay the consultation fee
          online through our secure payment provider, Stripe.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          The full consultation fee is charged when you book. Our payment
          provider deducts a processing fee, and the remaining balance is
          held in our client account until your consultation has taken
          place.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          After your appointment, we will issue you a tax invoice and apply
          the funds held in our client account to it. No further action is
          needed from you.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          If a refund applies, the payment provider&apos;s processing fee is
          non-refundable. The consultation fee does not include any visa
          application charge payable to the Department of Home Affairs.
        </p>

        <label className="flex items-start gap-3 border-t border-amber-200 pt-4 text-base font-medium text-brand-navy">
          <input
            type="checkbox"
            checked={values.agreeTerms as unknown as boolean}
            onChange={(e) => update("agreeTerms", e.target.checked as unknown as true)}
            className="mt-0.5 h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span>
            I have read and agree to the terms above, the{" "}
            <a href="/terms" target="_blank" className="font-semibold text-brand-primary underline">
              Consultation Terms and Conditions
            </a>{" "}
            and the{" "}
            <a href="/privacy" target="_blank" className="font-semibold text-brand-primary underline">
              Privacy Policy
            </a>
            , and consent to my details being used to provide this consultation.
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agreeTerms && (
          <p className="text-sm text-red-600">{errors.agreeTerms}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-dark hover:shadow-md sm:w-auto"
      >
        Continue to Review
      </button>
    </form>
  );
}
