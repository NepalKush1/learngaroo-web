export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  // Visa subclasses covered, shown as tags on service cards.
  subclasses?: string[];
  // Short line for service cards; `summary` is the fuller page description.
  tagline: string;
  summary: string;
  heroBlurb: string;
  whoItsFor: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: "student-visas",
    title: "Student Visas",
    shortLabel: "Student Visas",
    subclasses: ["500", "485"],
    tagline: "Plan your studies in Australia and your options after graduation.",
    summary:
      "Guidance on the Student visa (subclass 500), the Genuine Student requirement and your options after graduation, such as the subclass 485 visa.",
    heroBlurb:
      "Studying in Australia is often the first step of a longer journey. We help you understand the Student visa (subclass 500) requirements, prepare a well-supported application and plan ahead for post-study options such as the Temporary Graduate visa (subclass 485).",
    whoItsFor: [
      "International students applying for their first Australian Student visa",
      "Current students changing course or provider, or applying for a further Student visa",
      "Graduates exploring the Temporary Graduate visa (subclass 485) and other post-study options",
    ],
    process: [
      "Course, provider and eligibility review",
      "Genuine Student and financial capacity guidance",
      "Application preparation and lodgement support",
      "Planning for post-study options, including the Temporary Graduate visa (subclass 485)",
    ],
  },
  {
    slug: "skilled-visas",
    title: "Skilled Visas",
    shortLabel: "Skilled Visas",
    subclasses: ["189", "190", "491"],
    tagline: "Points-tested pathways for skilled workers, with or without nomination.",
    summary:
      "Points-tested skilled visas: Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (Provisional) (subclass 491).",
    heroBlurb:
      "For skilled professionals who want to live and work in Australia, either permanently or first in regional Australia, we help you understand your points score, your occupation's eligibility and the state, territory or regional nomination options that may be open to you.",
    whoItsFor: [
      "Skilled workers whose occupation is on the relevant skilled occupation list",
      "Professionals considering state or territory nomination, or regional family sponsorship",
      "Applicants who want a clear points-test assessment before committing",
    ],
    process: [
      "Initial eligibility and points assessment",
      "Guidance on skills assessment requirements",
      "SkillSelect Expression of Interest (EOI) and nomination strategy",
      "Visa application preparation and lodgement support",
    ],
  },
  {
    slug: "skills-assessments",
    title: "Skills Assessments",
    shortLabel: "Skills Assessments",
    tagline: "Prepare the skills assessment most skilled visas need first.",
    summary:
      "Guidance on the formal skills assessment that most skilled and many employer-sponsored visas need before you can apply.",
    heroBlurb:
      "Most skilled visa applications depend on a suitable skills assessment from the relevant assessing authority. We help you identify the right authority, prepare your evidence and respond to any follow-up requests.",
    whoItsFor: [
      "Applicants preparing for a skilled or employer-sponsored visa",
      "Professionals unsure which assessing authority applies to their occupation",
      "Applicants who need help putting together qualification and employment evidence",
    ],
    process: [
      "Occupation and assessing authority identification",
      "Evidence and documentation review",
      "Preparing and lodging the skills assessment application",
      "Support responding to requests for further information",
    ],
  },
  {
    slug: "employer-sponsored-visas",
    title: "Employer-Sponsored Visas",
    shortLabel: "Employer-Sponsored",
    subclasses: ["482", "186", "494"],
    tagline: "Sponsorship pathways for skilled workers and their employers.",
    summary:
      "Employer sponsorship, including the Skills in Demand visa (subclass 482), Employer Nomination Scheme (subclass 186) and regional subclass 494 visa.",
    heroBlurb:
      "If an Australian employer is ready to sponsor you, an employer-sponsored visa can let you work in Australia and, for many people, lead to permanent residence. We help employers and employees with sponsorship, nomination and the visa application, across the Skills in Demand visa (subclass 482), the Employer Nomination Scheme (subclass 186) and the Skilled Employer Sponsored Regional (Provisional) visa (subclass 494).",
    whoItsFor: [
      "Skilled workers with a supportive Australian employer",
      "Employers considering sponsoring overseas workers or staff already in Australia on a visa",
      "Subclass 482 and 494 visa holders planning a move to permanent residence",
    ],
    process: [
      "Sponsorship and nomination eligibility review",
      "Occupation, salary and skills assessment guidance",
      "Nomination and visa application preparation",
      "Lodgement and ongoing case support",
    ],
  },
  {
    slug: "family-partner-visas",
    title: "Family and Partner Visas",
    shortLabel: "Family & Partner",
    subclasses: ["820/801", "309/100", "300"],
    tagline: "Bring your partner or family together in Australia.",
    summary:
      "Partner visas (subclasses 820/801 and 309/100), the Prospective Marriage visa (subclass 300) and other family visa options.",
    heroBlurb:
      "Bringing a partner or family member to Australia involves detailed relationship and eligibility evidence. We help you build a clear, well-supported application from the start.",
    whoItsFor: [
      "Partners and spouses of Australian citizens, permanent residents or eligible New Zealand citizens",
      "Fiancé(e)s planning to come to Australia to marry (Prospective Marriage visa, subclass 300)",
      "Applicants moving through the two stages of a partner visa, from temporary to permanent",
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
    subclasses: ["600"],
    tagline: "Visit family, take a holiday or attend business meetings.",
    summary:
      "Guidance on the Visitor visa (subclass 600) for holidays, family visits and business visitor activities in Australia.",
    heroBlurb:
      "Planning a trip to Australia to visit family, take a holiday or attend business meetings? We help you choose the right Visitor visa (subclass 600) stream and put together a well-supported application.",
    whoItsFor: [
      "Tourists and holidaymakers",
      "People visiting family or friends in Australia",
      "Business visitors attending meetings, conferences or negotiations",
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
    subclasses: ["ART"],
    tagline: "Your options after a visa refusal or cancellation. Act quickly.",
    summary:
      "Help after a visa refusal or cancellation, including whether you can apply for review by the Administrative Review Tribunal (ART) and by when.",
    heroBlurb:
      "If you've received a visa refusal or cancellation decision, it's critical to understand your options and deadlines quickly. Not every decision can be reviewed, and time limits are strict. We help you assess your situation and understand what a review by the Administrative Review Tribunal (ART) may involve.",
    whoItsFor: [
      "Clients who have received a visa refusal or cancellation decision",
      "Applicants wanting to understand their review rights and deadlines",
      "Clients considering an application to the Administrative Review Tribunal",
    ],
    process: [
      "Initial review of your decision letter and key dates",
      "Assessment of your review rights and other options",
      "Guidance on next steps and required evidence",
      "Next steps for a review application or representation, where appropriate",
    ],
  },
];

// A service title for use mid-sentence: lower case, but acronyms stay as
// they are ("ART Reviews" → "ART reviews", "Skilled Visas" → "skilled visas").
export function serviceTitleInSentence(title: string): string {
  return title
    .split(" ")
    .map((word) => (word.length > 1 && word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(" ");
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}
