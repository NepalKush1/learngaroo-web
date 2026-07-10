export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  heroBlurb: string;
  whoItsFor: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: "skilled-visas",
    title: "Skilled Visas",
    shortLabel: "Skilled Visas",
    summary:
      "Points-tested and nomination pathways to permanent residency for skilled workers, including subclass 189, 190 and 491 visas.",
    heroBlurb:
      "For skilled professionals looking to live and work in Australia permanently, we help you understand your points score, occupation eligibility, and the state or territory nomination options available to you.",
    whoItsFor: [
      "Skilled workers with an occupation on the relevant skilled occupation list",
      "Professionals considering state or territory nomination",
      "Applicants who want a clear points-test assessment before committing",
    ],
    process: [
      "Initial eligibility and points assessment",
      "Guidance on skills assessment requirements",
      "Expression of Interest (EOI) and invitation strategy",
      "Visa application preparation and lodgement support",
    ],
  },
  {
    slug: "skills-assessments",
    title: "Skills Assessments",
    shortLabel: "Skills Assessments",
    summary:
      "Guidance through the formal skills assessment most skilled visa pathways require before you can apply.",
    heroBlurb:
      "Most skilled visa applications depend on a positive skills assessment from the relevant assessing authority. We help you identify the right authority, prepare your evidence, and respond to any follow-up requests.",
    whoItsFor: [
      "Applicants preparing to lodge a skilled visa application",
      "Professionals unsure which assessing authority applies to their occupation",
      "Applicants needing help compiling qualification and employment evidence",
    ],
    process: [
      "Occupation and assessing authority identification",
      "Evidence and documentation review",
      "Assessment application lodgement",
      "Support responding to requests for further information",
    ],
  },
  {
    slug: "employer-sponsored-visas",
    title: "Employer-Sponsored Visas",
    shortLabel: "Employer-Sponsored",
    summary:
      "Temporary and permanent visa pathways for skilled workers nominated by an approved Australian employer.",
    heroBlurb:
      "For skilled workers with an employer ready to sponsor them, employer-sponsored visas offer a direct pathway to work and eventually settle in Australia. We help both employers and employees through nomination and application.",
    whoItsFor: [
      "Skilled workers with a supportive Australian employer",
      "Employers exploring sponsorship of overseas or existing visa-holding staff",
      "Applicants moving from temporary sponsorship toward permanent residency",
    ],
    process: [
      "Employer nomination eligibility review",
      "Position and skills assessment guidance",
      "Nomination and visa application preparation",
      "Lodgement and ongoing case support",
    ],
  },
  {
    slug: "family-partner-visas",
    title: "Family and Partner Visas",
    shortLabel: "Family & Partner",
    summary:
      "Visa pathways for partners, spouses and other eligible family members to join or remain with family in Australia.",
    heroBlurb:
      "Bringing a partner or family member to Australia involves detailed relationship and eligibility evidence. We help you build a clear, well-supported application from the start.",
    whoItsFor: [
      "Partners and spouses of Australian citizens, permanent residents or eligible visa holders",
      "Applicants navigating the temporary-to-permanent partner visa stages",
      "Family members exploring other family-stream visa options",
    ],
    process: [
      "Relationship and eligibility assessment",
      "Evidence and documentation guidance",
      "Application preparation and lodgement",
      "Support through the temporary-to-permanent partner visa stages",
    ],
  },
  {
    slug: "visitor-tourist-visas",
    title: "Visitor and Tourist Visas",
    shortLabel: "Visitor & Tourist",
    summary:
      "Tourist and visitor visa guidance for family visits, holidays, and short business trips to Australia.",
    heroBlurb:
      "Planning a trip to Australia to visit family, take a holiday, or attend business meetings? We help you choose the right visitor visa stream and put together a strong application.",
    whoItsFor: [
      "Tourists and holidaymakers",
      "People visiting family or friends in Australia",
      "Short-term business visitors",
    ],
    process: [
      "Purpose-of-visit and stream selection",
      "Document checklist guidance",
      "Application preparation and lodgement",
      "Advice on visa conditions and length of stay",
    ],
  },
  {
    slug: "art-reviews",
    title: "ART Reviews",
    shortLabel: "ART Reviews",
    summary:
      "Guidance for clients facing a visa refusal or cancellation who may have a right to a review with the Administrative Review Tribunal.",
    heroBlurb:
      "If you've received a visa refusal or cancellation decision, understanding your options and any applicable deadlines is critical. We help you assess your situation and understand what a review with the Administrative Review Tribunal may involve.",
    whoItsFor: [
      "Clients who have received a visa refusal or cancellation decision",
      "Applicants wanting to understand their review rights and deadlines",
      "Clients considering a matter before the Administrative Review Tribunal",
    ],
    process: [
      "Initial review of your decision letter and key dates",
      "Assessment of your review rights and options",
      "Guidance on next steps and required evidence",
      "Referral to further application or representation services where appropriate",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}
