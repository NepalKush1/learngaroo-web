export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  heroBlurb: string;
  /** One or two sentences that open the detail page and frame the service. */
  overview: string;
  whoItsFor: string[];
  /** Ordered steps — rendered as a numbered timeline, so order is meaningful. */
  process: string[];
  /** What a client walks away with after working with us. */
  outcomes: string[];
  /** Short at-a-glance facts (e.g. relevant visa subclasses). */
  highlights?: string[];
  faqs?: ServiceFaq[];
  /** Curated related services shown at the foot of the detail page. */
  relatedSlugs?: string[];
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
    overview:
      "Australia's skilled migration program favours people whose occupation, age, English and experience meet the points test. The right subclass depends on your score, your occupation and whether a state, territory or family member can nominate you. We help you read your own situation clearly before you commit time or money to an application.",
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
    outcomes: [
      "A realistic points-test estimate for your profile",
      "A shortlist of the subclasses you're most likely to qualify for",
      "A view of which states or territories nominate your occupation",
      "Clear next steps, including what to prepare first",
    ],
    highlights: [
      "Subclass 189 — Skilled Independent",
      "Subclass 190 — State Nominated",
      "Subclass 491 — Skilled Work Regional",
    ],
    faqs: [
      {
        question: "How many points do I need?",
        answer:
          "Invitations are issued from 65 points, but competitive occupations often require more. We estimate your score and explain where you could realistically improve it.",
      },
      {
        question: "Do I need a job offer?",
        answer:
          "Not for the independent (189) pathway. State nomination (190) and regional (491) visas carry their own residence, occupation and commitment requirements, which we'll walk through with you.",
      },
      {
        question: "How long does it take?",
        answer:
          "Timeframes depend on your occupation, your points and current processing volumes. We give you an honest picture rather than a fixed promise.",
      },
    ],
    relatedSlugs: [
      "skills-assessments",
      "employer-sponsored-visas",
      "family-partner-visas",
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
    overview:
      "Almost every skilled visa depends on a positive skills assessment from the authority that governs your occupation. Each authority sets its own rules for qualifications, work experience and evidence, and a small mismatch can delay everything downstream. We help you get the assessment right the first time.",
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
    outcomes: [
      "The correct assessing authority for your nominated occupation",
      "A checklist of the qualifications and employment evidence you'll need",
      "A review of your documents before you lodge",
      "Support if the authority asks for more information",
    ],
    highlights: [
      "Occupation & authority matching",
      "Document & evidence review",
      "Further-information responses",
    ],
    faqs: [
      {
        question: "Which authority assesses my occupation?",
        answer:
          "It depends on the occupation and the visa. We identify the right authority — for example VETASSESS, ACS, Engineers Australia or TRA — and the standard it applies.",
      },
      {
        question: "What if my assessment is negative?",
        answer:
          "We help you understand why, whether a review or a different occupation is realistic, and what evidence would strengthen a fresh application.",
      },
      {
        question: "Do I need this before I apply for a visa?",
        answer:
          "For most skilled visas, yes — a valid, positive assessment is required before you can be invited to apply.",
      },
    ],
    relatedSlugs: [
      "skilled-visas",
      "employer-sponsored-visas",
      "visitor-tourist-visas",
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
    overview:
      "When an approved Australian employer is willing to sponsor you, employer-sponsored visas offer one of the most direct routes to work — and often to permanent residency. There are obligations on both sides, and the nomination and visa run in parallel. We guide employers and workers through each part.",
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
    outcomes: [
      "Confirmation of the employer's and the position's eligibility",
      "The right subclass for the role and its permanency goals",
      "A prepared nomination and visa application",
      "Ongoing support through processing and requests",
    ],
    highlights: [
      "Employer nomination eligibility",
      "Temporary & permanent pathways",
      "Support for employer and employee",
    ],
    faqs: [
      {
        question: "Can my employer sponsor me?",
        answer:
          "The business must be an approved sponsor (or become one), the role must be genuine and meet salary rules, and the position usually needs to be on the relevant occupation list. We assess this first.",
      },
      {
        question: "Does this lead to permanent residency?",
        answer:
          "Several employer-sponsored pathways can lead to permanent residency, subject to eligibility and time worked. We map the route that fits your role.",
      },
      {
        question: "Who lodges what?",
        answer:
          "The employer lodges the sponsorship and nomination; you lodge the visa. We coordinate both so nothing falls out of sequence.",
      },
    ],
    relatedSlugs: [
      "skilled-visas",
      "skills-assessments",
      "family-partner-visas",
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
    overview:
      "Partner and family visas are decided on evidence — of a genuine relationship, of who depends on whom, and of shared commitment over time. Applications are detailed, and the temporary-to-permanent stages can span years. We help you build a clear, well-documented case from the very first form.",
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
    outcomes: [
      "An honest assessment of your relationship or family eligibility",
      "A structured plan for the evidence to gather",
      "A prepared, well-organised application",
      "Guidance through the temporary and permanent stages",
    ],
    highlights: [
      "Partner & spouse pathways",
      "Onshore & offshore options",
      "Other family-stream visas",
    ],
    faqs: [
      {
        question: "How much relationship evidence is enough?",
        answer:
          "There's no fixed number — assessors look at the financial, social, household and commitment aspects together. We help you cover each in a way that reflects your real relationship.",
      },
      {
        question: "Can we apply while onshore?",
        answer:
          "Often, yes — it depends on your current visa and its conditions. We check whether an onshore or offshore application suits your situation.",
      },
      {
        question: "What happens at the permanent stage?",
        answer:
          "Most partner applicants move from a temporary to a permanent visa after a qualifying period, with further evidence. We prepare you for it well ahead of time.",
      },
    ],
    relatedSlugs: [
      "skilled-visas",
      "visitor-tourist-visas",
      "employer-sponsored-visas",
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
    overview:
      "A short trip to Australia still needs the right visitor stream and a clear, honest application — especially where family sponsorship or business activity is involved. We help you pick the stream that matches your purpose and put your best case forward.",
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
    outcomes: [
      "The visitor stream that fits your purpose of visit",
      "A document checklist tailored to your circumstances",
      "A prepared application with strong supporting evidence",
      "Clear advice on conditions and length of stay",
    ],
    highlights: [
      "Tourism & holidays",
      "Visiting family & friends",
      "Short-term business visits",
    ],
    faqs: [
      {
        question: "How long can I stay?",
        answer:
          "Visitor visas are commonly granted for stays of up to three, six or twelve months. The period depends on the stream and your circumstances, which we'll explain.",
      },
      {
        question: "Can I work on a visitor visa?",
        answer:
          "No — visitor visas don't permit work. We make sure the stream you choose matches what you actually intend to do while you're here.",
      },
      {
        question: "Will a sponsor help my application?",
        answer:
          "For some family-visit applications a sponsor or bond may be involved. We advise whether it applies to you and how it affects the application.",
      },
    ],
    relatedSlugs: [
      "family-partner-visas",
      "skilled-visas",
      "skills-assessments",
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
    overview:
      "A visa refusal or cancellation is not always the end of the road — but review rights come with strict, short deadlines that are easy to miss. We help you understand your decision, whether the Administrative Review Tribunal can hear it, and what a review would involve, so you can act in time.",
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
    outcomes: [
      "A clear read of your decision letter and key dates",
      "Whether you have a right of review, and by when",
      "An honest view of your prospects and options",
      "Referral to further representation where it's needed",
    ],
    highlights: [
      "Refusal & cancellation decisions",
      "Strict review deadlines",
      "Administrative Review Tribunal",
    ],
    faqs: [
      {
        question: "How long do I have to apply?",
        answer:
          "Review deadlines are short and vary by decision type — sometimes only a few working days. Bring your decision letter to the consultation so we can check your dates immediately.",
      },
      {
        question: "Will a review overturn the decision?",
        answer:
          "No one can promise an outcome. We give you a candid assessment of your prospects and the evidence a review would rely on.",
      },
      {
        question: "What should I bring?",
        answer:
          "Your decision letter and any deadline notice, plus the documents from your original application. Together these tell us what's possible and how quickly you need to move.",
      },
    ],
    relatedSlugs: [
      "skilled-visas",
      "family-partner-visas",
      "employer-sponsored-visas",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  const service = getServiceBySlug(slug);

  if (service?.relatedSlugs?.length) {
    const curated = service.relatedSlugs
      .map((relatedSlug) => getServiceBySlug(relatedSlug))
      .filter(
        (related): related is Service =>
          related !== undefined && related.slug !== slug,
      );

    if (curated.length > 0) {
      return curated.slice(0, count);
    }
  }

  return services.filter((other) => other.slug !== slug).slice(0, count);
}
