// Frequently asked questions shown on the homepage (and given to search
// engines as FAQ structured data). Keep answers general — they aren't
// advice for any one person's situation.

import { formatPrice, getActiveConsultations } from "@/data/consultations";

const lowestFee = formatPrice(
  Math.min(...getActiveConsultations().map((consultation) => consultation.priceInCents)),
  "AUD",
);

export interface Faq {
  question: string;
  answer: string;
  // Optional follow-on links shown under the answer.
  related?: { label: string; href: string }[];
}

export const faqs: Faq[] = [
  {
    question: "Do I need a Registered Migration Agent?",
    answer:
      "No, you can apply yourself. But anyone you pay for immigration assistance must generally be a Registered Migration Agent or an Australian legal practitioner. Agents are bound by a Code of Conduct and can help you choose the right visa and avoid costly mistakes.",
    related: [{ label: "Meet your agent", href: "/about" }],
  },
  {
    question: "How much does a consultation cost?",
    answer:
      `From ${lowestFee} including GST, depending on the visa type, paid securely when you book. The fee covers the consultation only: Home Affairs visa charges and third-party costs such as skills assessments, English tests and translations are separate.`,
    related: [{ label: "See all fees", href: "/#fees" }, { label: "Consultation Terms", href: "/terms" }],
  },
  {
    question: "Can I book a consultation from outside Australia?",
    answer:
      "Yes. Available times are shown in Melbourne time with your local time alongside.",
  },
  {
    question: "What should I have ready for my consultation?",
    answer:
      "Your passport, any visa grant or refusal letters, English test results, qualifications and work history. After a refusal or cancellation, bring the decision letter and note the date you received it.",
    related: [{ label: "Book a consultation", href: "/bookings" }],
  },
  {
    question: "Can you guarantee my visa will be granted?",
    answer:
      "No. Decisions are made by the Department of Home Affairs or the Administrative Review Tribunal, so no agent can guarantee an outcome. We give you an honest assessment and help you lodge a complete, well-supported application.",
  },
  {
    question: "How can I increase my skilled migration points?",
    answer:
      "The main ways are a higher English score (Proficient +10, Superior +20), more skilled work experience, a Professional Year, a NAATI CCL credential (+5), or state, territory or regional nomination. Try our free points calculator, and practise for PTE or NAATI CCL on Learniiz.",
    related: [{ label: "Points calculator", href: "/tools/points-calculator" }, { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com" }],
  },
  {
    question: "My visa was refused. What should I do?",
    answer:
      "Act quickly. Not every decision can be reviewed, and Administrative Review Tribunal (ART) time limits are strict. Your decision letter says whether you can apply for review and by when. Book an ART Review consultation and have the letter ready.",
    related: [{ label: "ART Reviews service", href: "/services/art-reviews" }, { label: "Book an ART Review consultation", href: "/bookings" }],
  },
];

// ── Full FAQ (/faq) ───────────────────────────────────────────────────────
// Grouped questions for the FAQ page. Everything here is general
// information written to stay inside the Code of Conduct for registered
// migration agents and Australian Consumer Law: no outcome promises, no
// processing-time claims, fees and third-party costs kept separate, and
// the reader always pointed to a consultation for their own situation.

export interface FaqGroup {
  title: string;
  items: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Working with a Registered Migration Agent",
    items: [
      {
        question: "What is the difference between a Registered Migration Agent and an immigration lawyer?",
        answer:
          "Both can lawfully give Australian immigration assistance. A Registered Migration Agent is registered with the Office of the Migration Agents Registration Authority (OMARA) and bound by its Code of Conduct. An immigration lawyer is an Australian legal practitioner regulated by their state or territory law society. Kush is a Registered Migration Agent, not a lawyer. If your matter needs court representation or legal services outside migration assistance, we'll tell you and refer you to a suitable lawyer.",
      },
      {
        question: "How can I check that you are registered?",
        answer:
          "Search the OMARA Register of Migration Agents at portal.mara.gov.au for MARN 2418608. The register shows the agent's name, registration status and business details. We recommend checking the register before paying anyone for migration advice.",
        related: [{ label: "OMARA register", href: "https://portal.mara.gov.au/search-the-register-of-migration-agents/" }],
      },
      {
        question: "What happens after my consultation if I want you to handle my application?",
        answer:
          "Before any further work starts, you receive a written Service Agreement setting out exactly what we will do, what it will cost, what you need to provide and what is not included. Nothing is charged until you have agreed to it. You also receive the OMARA Consumer Guide, which explains your rights when using a Registered Migration Agent.",
      },
      {
        question: "Will you be the person handling my case?",
        answer:
          "Yes. Learniiz is a single-agent practice, so the Registered Migration Agent you meet in your consultation is the one who prepares and lodges your application and deals with the Department on your behalf. If for any reason we can't act for you, we'll tell you promptly and in writing.",
      },
      {
        question: "Can you deal with the Department of Home Affairs for me?",
        answer:
          "Yes. If you engage us, you appoint us as your authorised agent (currently using Form 956), and the Department sends correspondence about your application to us. We act only on your instructions and keep you informed of every request and decision. You can withdraw the appointment at any time.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes. We handle your personal information under the Privacy Act 1988 and our duty of confidentiality under the Code of Conduct. We don't share your details with anyone outside the practice without your consent, except where the law requires it, for example, when lodging your application with the Department. See our Privacy Policy for details.",
        related: [{ label: "Privacy Policy", href: "/privacy" }],
      },
      {
        question: "I've already lodged an application myself. Can you still help?",
        answer:
          "Often, yes. We can review what has been lodged, help you respond to a request for further information, or be appointed as your agent for the rest of the process. Bring your application summary and any Department correspondence to the consultation.",
      },
    ],
  },
  {
    title: "Fees and payments",
    items: [
      {
        question: "What costs are there besides your professional fee?",
        answer:
          "Most applications involve costs paid to others: the Department's visa application charge, skills assessment fees, English test fees, health examinations, police certificates and certified translations. These are set by those organisations, change from time to time, and are paid by you directly or at cost. Your Service Agreement lists the third-party costs we expect for your matter. We don't add a margin to them.",
      },
      {
        question: "How are fees for a full application charged?",
        answer:
          "After the consultation, you receive a fixed written quote for the agreed scope of work. As the Code of Conduct requires, fees you pay in advance are held in a separate client account and only drawn as work is completed and invoiced. You receive a receipt and tax invoice for every payment. If the scope changes, we agree any change in writing before continuing.",
      },
      {
        question: "Can I get a refund if I change my mind?",
        answer:
          "For consultations, see our Consultation Terms. For application work, the Service Agreement explains what is refundable: fees for work not yet performed are refunded, while fees for work already completed generally are not. Visa application charges paid to the Department are usually non-refundable regardless of the outcome.",
        related: [{ label: "Consultation Terms", href: "/terms" }],
      },
      {
        question: "Do you charge based on the outcome of my application?",
        answer:
          "No. Our fees are for professional work, not for a result, because no agent can control the Department's decision. Be cautious of anyone who charges a success fee or asks for extra payments to speed up or influence a decision.",
      },
    ],
  },
  {
    title: "Applications and timing",
    items: [
      {
        question: "How long will my visa take?",
        answer:
          "Processing times are set by the Department of Home Affairs and vary by visa, by stream and over time. The Department publishes current estimates on its website, and we'll tell you honestly what to expect for your case. No agent can speed up processing or obtain priority treatment, and we don't claim to.",
      },
      {
        question: "My visa has expired or I've overstayed. What should I do?",
        answer:
          "Act straight away. Being in Australia without a valid visa can affect future applications, and the options available often narrow with time. We'll assess your situation calmly and confidentially and explain the lawful paths that may be open to you, which can include applying for a bridging visa while longer-term options are considered.",
      },
      {
        question: "Can you find me a job or an employer to sponsor me?",
        answer:
          "No. We're not a recruitment agency and don't arrange sponsorship. It's also a criminal offence in Australia to ask for, offer or receive payment in return for visa sponsorship. Once you have an employer who is genuinely willing to sponsor you, we can advise both of you on the nomination and visa process.",
        related: [{ label: "Employer-Sponsored Visas", href: "/services/employer-sponsored-visas" }],
      },
      {
        question: "Should I tell you about a previous refusal, a health condition or a criminal record?",
        answer:
          "Yes, always. The Department requires complete and truthful information, and giving false or misleading information, or leaving something out, can lead to refusal and a ban on future visas. As a Registered Migration Agent, we can't lodge claims we know to be misleading. Telling us everything early lets us advise you properly; many issues can be addressed when they're disclosed upfront.",
      },
      {
        question: "What is a bridging visa?",
        answer:
          "A bridging visa lets you remain lawfully in Australia while a visa application is processed, a decision is reviewed, or you make arrangements to leave. Which bridging visa you receive, and the conditions attached to it, including whether you can work or travel, depend on your circumstances. We can explain what applies to you in a consultation.",
      },
      {
        question: "Can I include my partner or children in my application?",
        answer:
          "Many visas allow eligible family members to be included, usually a partner and dependent children, and each must meet health, character and other requirements. Who can be included, and the additional charges, differ by visa. We'll confirm this for your visa during the consultation.",
      },
    ],
  },
  {
    title: "Our business and how we work",
    items: [
      {
        question: "Are you connected to the Learniiz PTE practice platform?",
        answer:
          "Yes, and we say so openly. Learniiz Migration & Visa Services and the Learniiz PTE, IELTS and NAATI CCL practice platform at learniiz.com are operated by the same business. Using the platform is entirely optional and has no bearing on the advice you receive. If an English test or score is relevant to your visa, we'll tell you what the Department requires, and you're free to prepare however you choose.",
        related: [{ label: "learniiz.com", href: "https://www.learniiz.com" }],
      },
      {
        question: "What if I'm not happy with your service?",
        answer:
          "Tell us first. We'll acknowledge your complaint, look into it fairly and respond in writing; see our Complaints page. If you're not satisfied with our response, you can complain to OMARA, which regulates Registered Migration Agents. Making a complaint never affects the service you receive from us.",
        related: [{ label: "Complaints process", href: "/complaints" }],
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((group) => group.items);

// Shown on the FAQ page so readers know the answers are current.
export const faqReviewedOn = "11 October 2026";
