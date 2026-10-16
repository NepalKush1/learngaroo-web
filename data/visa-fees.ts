// ─────────────────────────────────────────────────────────────────────────
// VISA APPLICATION CHARGES — used by the fee calculator at
// /tools/fee-calculator. Figures are the Home Affairs "current visa pricing"
// table as at `visaFeesAsAt` (1 July 2026 charges), in whole dollars.
//
// base      Base application charge, primary applicant
// adult     Additional applicant charge, 18 and over (null = cannot include)
// child     Additional applicant charge, under 18
// subsequent Subsequent temporary application charge, payable when the
//            applicant is in Australia and has held a temporary visa before
// ─────────────────────────────────────────────────────────────────────────

export const visaFeesAsAt = "12 October 2026";
export const visaFeesSourceUrl =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing";

export interface VisaFee {
  id: string;
  subclass: string;
  name: string;
  stream?: string;
  base: number;
  adult: number | null;
  child: number | null;
  subsequent?: number;
  // Non-internet (paper) application charge, where it exists.
  paper?: number;
  note?: string;
  serviceHref: string;
}

export const visaFees: VisaFee[] = [
  { id: "500", subclass: "500", name: "Student visa", stream: "All other students", base: 2500, adult: 1530, child: 500, subsequent: 700, serviceHref: "/services/student-visas",
    note: "Since 2 October 2026 most new applications cannot include family members." },
  { id: "500-elicos", subclass: "500", name: "Student visa", stream: "ELICOS or Non-Award sector", base: 2050, adult: 1255, child: 410, subsequent: 700, serviceHref: "/services/student-visas" },
  { id: "485-phe", subclass: "485", name: "Temporary Graduate visa", stream: "Post-Higher Education Work", base: 5750, adult: 2875, child: 1450, paper: 80, serviceHref: "/services/student-visas" },
  { id: "485-pve", subclass: "485", name: "Temporary Graduate visa", stream: "Post-Vocational Education Work", base: 5750, adult: 2875, child: 1450, paper: 80, serviceHref: "/services/student-visas" },
  { id: "485-second", subclass: "485", name: "Temporary Graduate visa", stream: "Second Post-Higher Education Work (regional)", base: 2265, adult: 1140, child: 575, paper: 80, serviceHref: "/services/student-visas" },
  { id: "189", subclass: "189", name: "Skilled Independent visa", stream: "Points-tested", base: 6135, adult: 3070, child: 1540, serviceHref: "/services/skilled-visas" },
  { id: "190", subclass: "190", name: "Skilled Nominated visa", base: 6140, adult: 3070, child: 1535, serviceHref: "/services/skilled-visas" },
  { id: "491", subclass: "491", name: "Skilled Work Regional (Provisional) visa", base: 6140, adult: 3070, child: 1535, serviceHref: "/services/skilled-visas" },
  { id: "191", subclass: "191", name: "Permanent Residence (Skilled Regional) visa", stream: "Regional Provisional stream", base: 630, adult: 315, child: 160, serviceHref: "/services/skilled-visas" },
  { id: "482-core", subclass: "482", name: "Skills in Demand visa", stream: "Core Skills", base: 4015, adult: 4015, child: 1005, subsequent: 700, serviceHref: "/services/employer-sponsored-visas",
    note: "Additional adult applicants pay the full base charge for this visa. Sponsorship, nomination and Skilling Australians Fund levy are paid by the employer and are not included." },
  { id: "482-specialist", subclass: "482", name: "Skills in Demand visa", stream: "Specialist Skills", base: 4015, adult: 4015, child: 1005, subsequent: 700, serviceHref: "/services/employer-sponsored-visas",
    note: "Employer-side charges are not included." },
  { id: "186", subclass: "186", name: "Employer Nomination Scheme visa", stream: "All streams", base: 6140, adult: 3070, child: 1535, serviceHref: "/services/employer-sponsored-visas",
    note: "Employer nomination charges are not included." },
  { id: "494", subclass: "494", name: "Skilled Employer Sponsored Regional (Provisional) visa", stream: "Employer Sponsored", base: 6140, adult: 3070, child: 1535, serviceHref: "/services/employer-sponsored-visas",
    note: "Employer nomination charges are not included." },
  { id: "820", subclass: "820/801", name: "Partner visa (apply in Australia)", base: 11710, adult: 5860, child: 2935, serviceHref: "/services/family-partner-visas",
    note: "One charge covers both the temporary (820) and permanent (801) stages." },
  { id: "820-pmv", subclass: "820/801", name: "Partner visa (apply in Australia)", stream: "Prospective Marriage visa holder", base: 1955, adult: 980, child: 485, serviceHref: "/services/family-partner-visas" },
  { id: "309", subclass: "309/100", name: "Partner visa (apply overseas)", base: 11710, adult: 5860, child: 2935, serviceHref: "/services/family-partner-visas",
    note: "One charge covers both the provisional (309) and permanent (100) stages." },
  { id: "300", subclass: "300", name: "Prospective Marriage visa", base: 11710, adult: 5860, child: 2935, serviceHref: "/services/family-partner-visas",
    note: "A reduced charge applies later for the Partner visa (820) after you marry." },
  { id: "600-tourist-offshore", subclass: "600", name: "Visitor visa", stream: "Tourist, apply outside Australia", base: 250, adult: null, child: null, serviceHref: "/services/visitor-tourist-visas",
    note: "Each visitor lodges their own application." },
  { id: "600-tourist-onshore", subclass: "600", name: "Visitor visa", stream: "Tourist, apply in Australia", base: 630, adult: null, child: null, subsequent: 700, serviceHref: "/services/visitor-tourist-visas",
    note: "Each visitor lodges their own application." },
  { id: "600-sponsored", subclass: "600", name: "Visitor visa", stream: "Sponsored Family", base: 250, adult: null, child: null, serviceHref: "/services/visitor-tourist-visas",
    note: "The sponsor may be asked for a security bond." },
  { id: "600-business", subclass: "600", name: "Visitor visa", stream: "Business Visitor", base: 250, adult: null, child: null, serviceHref: "/services/visitor-tourist-visas" },
];

// Card surcharges published by Home Affairs for ImmiAccount payments.
export const paymentSurcharges = [
  { id: "bpay", label: "BPAY or PayID (no surcharge)", rate: 0 },
  { id: "visa", label: "Visa or Mastercard", rate: 0.014 },
  { id: "amex", label: "American Express or JCB", rate: 0.014 },
  { id: "paypal", label: "PayPal", rate: 0.0101 },
  { id: "unionpay", label: "UnionPay", rate: 0.019 },
];

export function formatAud(amount: number): string {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(amount);
}
