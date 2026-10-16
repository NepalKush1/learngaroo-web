import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { reviewFinder } from "./review-finder";

// Interactive explainer for "PIC 4020: false information and bogus
// documents". Every fact comes from data/visas/appeals-and-review.ts
// (checked against Home Affairs, the ART and the Migration Act and
// Regulations on 12 October 2026). The review time limit appears only as
// the page states it, with a prompt to check the decision letter.

export const pic4020FraudAndFalseInformationExplainer: VisaExplainer = {
  slug: "pic-4020-fraud-and-false-information",
  factsAsAt: "12 October 2026",
  oneLiner:
    "PIC 4020 lets Home Affairs refuse a visa if a bogus document or false information was given, even without your knowledge, and a refusal can block most visas for 3 years (10 years for identity).",
  bigIdeas: [
    {
      title: "Knowledge isn't required",
      body: "It applies even if an agent or someone else gave the document on your behalf without your knowledge.",
      icon: ICON.exclamationTriangle,
    },
    {
      title: "The exclusion is long",
      body: "A refusal blocks most visas for 3 years for you and your family unit, or 10 years if identity isn't established.",
      icon: ICON.noSymbol,
    },
    {
      title: "A waiver needs strong reasons",
      body: "It needs compelling or compassionate reasons, such as hardship to an Australian citizen or permanent resident partner or child.",
      icon: ICON.key,
    },
  ],
  heroCard: [
    { label: "What it covers", value: "Bogus documents and false information", icon: ICON.documentMagnifyingGlass },
    { label: "Time window", value: "This application, or a visa held in the last 12 months", icon: ICON.calendarDays },
    { label: "Exclusion after refusal", value: "3 years (10 years for identity refusals)", icon: ICON.noSymbol },
    { label: "Who it affects", value: "You and your family unit", icon: ICON.users },
    { label: "Waiver", value: "Compelling or compassionate reasons only", icon: ICON.key },
    { label: "ART review fee", value: "A$3,727 (50% reduction for hardship)", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Administrative Review Tribunal and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the visa applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Check everything lodged for you, and answer any concern with evidence.",
      does: [
        "Check every document before it's lodged, and keep copies",
        "Keep your details consistent across applications and passenger cards",
        "Respond to a [[njletter|natural justice letter]] within the period",
        "Ask for the [[waiver|waiver]] if it applies",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides whether PIC 4020 is met, and must usually put concerns to you first.",
      does: [
        "Checks documents, for example references against employer and tax records",
        "Puts adverse information to you before refusing an onshore reviewable application",
        "Decides whether to waive the 3-year exclusion",
        "Assesses information again on later applications",
      ],
    },
    {
      id: "agent",
      name: "An agent, employer or provider",
      short: "Third party",
      icon: ICON.briefcase,
      tone: "teal",
      role: "May prepare or lodge documents on your behalf.",
      does: [
        "Prepares or submits documents for your application",
        "Documents given on your behalf count under PIC 4020, even without your knowledge",
        "If it issued a document, it can confirm in writing that it's genuine",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Takes a fresh look if your application is refused.",
      does: [
        "Reviews most PIC 4020 refusals of onshore or sponsored applications",
        "Considers afresh whether the document is [[bogus|bogus]]",
        "Considers afresh whether to waive",
      ],
    },
  ],
  flows: [
    {
      from: "agent",
      to: "homeaffairs",
      label: "Lodges documents",
      detail: "An agent, employer or education provider may submit documents for you. PIC 4020 applies to them even if you never saw them.",
    },
    {
      from: "homeaffairs",
      to: "you",
      label: "Natural justice letter",
      detail: "Before refusing an onshore reviewable application, Home Affairs gives you particulars of the adverse information and invites your comment.",
    },
    {
      from: "you",
      to: "homeaffairs",
      label: "You respond",
      detail: "You show the document is genuine, or explain how it was obtained or why the information wasn't [[material|materially]] false. You can also ask for a [[waiver|waiver]].",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Review if refused",
      detail: "A refusal of an onshore or sponsored application is usually reviewable by the ART within 28 days. Check the time limit in your decision letter.",
    },
  ],
  journeyTitle: "From your application to a decision",
  journeyHighlight: "a decision",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check every document before it's lodged",
      who: ["you", "agent"],
      description:
        "PIC 4020 applies even to documents given on your behalf without your knowledge, so check everything prepared for you.",
      points: [
        "Keep copies of everything lodged on your behalf",
        "Documents must not be altered, or created with digital editing tools or artificial intelligence",
        "Keep employment, relationship and travel details consistent across applications",
      ],
      youHold: "Genuine documents you've checked yourself",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "letter",
      short: "Letter",
      title: "Read the natural justice letter closely",
      who: ["you", "homeaffairs"],
      description:
        "Identify exactly which document or statement is said to be bogus or false, what checks were done and what Home Affairs concluded.",
      points: ["Note the response period", "Ask in writing for an extension if you need one", "Responding costs nothing"],
      youHold: "A clear list of the allegations and the deadline",
      icon: ICON.envelopeOpen,
    },
    {
      id: "verify",
      short: "Verify",
      title: "Verify the document independently",
      who: ["you", "agent"],
      description: "Contact the issuing organisation for written confirmation, and get certified originals.",
      points: [
        "Verification from the employer, university, registry or bank that issued it",
        "Evidence of the circumstances in which the document was produced",
        "A statutory declaration on how it was obtained and who prepared the application",
      ],
      youHold: "Independent evidence of authenticity, or an explanation",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "respond",
      short: "Respond",
      title: "Address materiality and intent",
      who: ["you"],
      description:
        "Explain whether the information was actually false, whether it was [[material|material]] to a visa criterion, and whether it was given without your knowledge.",
      points: [
        "The criterion doesn't require intent",
        "These points still go to the Minister's suspicion that a document is bogus, and to any waiver",
      ],
      youHold: "A written response on each part of PIC 4020",
      icon: ICON.documentText,
    },
    {
      id: "waiver",
      short: "Waiver",
      title: "Ask for the waiver if it applies",
      who: ["you"],
      description:
        "Set out compelling circumstances affecting Australia's interests, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen.",
      points: [
        "Include evidence, such as hardship to an Australian citizen or permanent resident partner or child",
        "The [[identity|identity]] part can't be waived",
      ],
      youHold: "A waiver request with supporting evidence",
      icon: ICON.key,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Home Affairs decides",
      who: ["homeaffairs"],
      description: "If the concern isn't answered and no waiver applies, the visa can be refused under PIC 4020.",
      points: [
        "Bogus document or false information: 3 years for you and your [[family-unit|family unit]]",
        "Identity not established: 10 years, with no waiver",
        "It counts against family members even if they weren't in the refused application",
      ],
      youHold: "A decision, with review rights if it's a refusal",
      icon: ICON.scale,
    },
    {
      id: "review",
      short: "Review",
      title: "Seek review if refused",
      who: ["you", "tribunal"],
      description: "A PIC 4020 refusal of an onshore or sponsored application is usually reviewable by the ART within 28 days.",
      points: [
        "Check the time limit in your decision letter",
        "The Tribunal considers afresh whether the document is bogus and whether to waive",
        "Fee A$3,727, with a 50% reduction for financial hardship",
      ],
      youHold: "An ART application lodged in time",
      cost: "A$3,727 (50% reduction for hardship)",
      icon: ICON.paperAirplane,
    },
    {
      id: "plan",
      short: "Plan",
      title: "Plan around the exclusion period",
      who: ["you"],
      description: "If the refusal stands, note the date the 3-year or 10-year period ends.",
      points: [
        "Check whether a visa without PIC 4020 (such as a protection visa) or a waiver is realistic",
        "Information given with any visa is assessed again on later applications",
      ],
      youHold: "A dated plan for future applications",
      icon: ICON.calendarDays,
    },
  ],
  check: {
    title: "Could PIC 4020 affect your application?",
    highlight: "PIC 4020",
    ok: {
      title: "Nothing here points to a PIC 4020 problem",
      body: "Your answers don't raise a concern. Keep checking every document lodged for you, and keep copies.",
    },
    todo: {
      title: "Some things to check carefully",
      body: "None of these decides anything on its own, but each could raise questions. Sort them out with evidence.",
    },
    stop: {
      title: "A serious PIC 4020 risk to deal with now",
      body: "At least one answer points to a real concern. Get advice before you lodge or respond: a refusal can bring an exclusion of 3 or 10 years.",
    },
    disclaimer:
      "A general self-check, not legal advice. Whether PIC 4020 applies depends on the evidence before Home Affairs and your full circumstances.",
  },
  quiz: [
    {
      id: "checked",
      topic: "Documents lodged for you",
      question: "Have you seen and checked every document lodged on your behalf?",
      options: [
        { value: "yes", label: "Yes, every one", status: "ok", note: "Good. Keep copies of everything lodged for you." },
        {
          value: "some",
          label: "Not all: an agent, employer or provider lodged some",
          status: "todo",
          note: "Ask for copies and check them now. PIC 4020 applies even if you didn't know a document was false.",
        },
        {
          value: "unknown",
          label: "I don't know what was lodged",
          status: "todo",
          note: "Ask whoever lodged it for copies of everything. Documents given on your behalf count under PIC 4020.",
        },
      ],
    },
    {
      id: "genuine",
      topic: "Genuine documents",
      question: "Are all your documents genuine and unaltered?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Good. Documents must not be modified or created with digital editing tools or artificial intelligence.",
        },
        {
          value: "edited",
          label: "Some were edited, for example a photo or a scan",
          status: "stop",
          note: "Home Affairs states that altered or digitally manipulated documents, including photos, videos and audio, are unlawful. Get advice before you lodge or respond.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
        {
          value: "third-party",
          label: "A certificate came through a third party",
          status: "todo",
          note: "Education or English test certificates obtained through third parties are a known risk. Verify them with the issuing body.",
        },
      ],
    },
    {
      id: "consistent",
      topic: "Consistency",
      question: "Are your work, relationship and travel details the same across all your applications?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Good. Different histories across applications and passenger cards are a common PIC 4020 risk.",
        },
        {
          value: "differ",
          label: "There are differences",
          status: "todo",
          note: "Be ready to explain them, with evidence of which version is correct.",
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Compare what you've given in each application and on passenger cards.",
        },
      ],
    },
    {
      id: "references",
      topic: "Work references",
      question: "Do your employment references match your real duties and dates?",
      options: [
        { value: "yes", label: "Yes, exactly", status: "ok", note: "Good. References are checked with employers and tax records." },
        {
          value: "overstate",
          label: "They overstate duties or dates",
          status: "stop",
          note: "References that overstate duties or dates are checked with employers and tax records, and can lead to a PIC 4020 refusal. Get advice before you lodge.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
        {
          value: "none",
          label: "My application doesn't rely on employment references",
          status: "ok",
          note: "Then this risk doesn't arise. Check the other documents you rely on in the same way.",
        },
      ],
    },
    {
      id: "history",
      topic: "Past refusals",
      question: "Has anyone in your family unit been refused under PIC 4020 in the last 3 years?",
      options: [
        { value: "no", label: "No", status: "ok", note: "No exclusion period applies from a past PIC 4020 refusal." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "A refusal of one family member counts against every member of the family unit for 3 years, or 10 years for identity. Only the 3-year exclusion can be waived, for compelling or compassionate reasons.",
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check each family member's visa history: a refusal of one counts against the others.",
        },
      ],
    },
    {
      id: "letter",
      topic: "Letters",
      question: "Have you received a letter about a document or information you gave?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to respond to now." },
        {
          value: "yes",
          label: "Yes, a natural justice letter",
          status: "todo",
          note: "Respond within the period, with independent verification and an explanation. Ask in writing for more time if you need it.",
          link: { label: "Natural justice explained", href: "/visas/appeals-and-review/natural-justice-and-adverse-information" },
        },
        {
          value: "refused",
          label: "My visa has been refused under PIC 4020",
          status: "stop",
          note: "A refusal of an onshore or sponsored application is usually reviewable by the ART within 28 days. Check the time limit in your decision letter.",
          link: { label: "ART review of a refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "If my agent faked a document without telling me, it's not my problem.",
      fact: "It is. PIC 4020 applies to documents given on your behalf, even without your knowledge. Not knowing goes to the Minister's suspicion and may support a waiver, but it isn't a defence on its own.",
    },
    {
      myth: "Only the person who was refused is affected.",
      fact: "A PIC 4020 refusal counts against every member of the family unit for the exclusion period. That's so even if they weren't in the refused application.",
    },
    {
      myth: "Once a visa is granted, its documents can't be questioned again.",
      fact: "Information given with any visa is assessed again on later applications. A document that passed once can still ground a PIC 4020 refusal or a section 109 cancellation later.",
    },
    {
      myth: "The waiver is routine if I ask for it.",
      fact: "It needs compelling circumstances affecting Australia's interests, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen. Identity refusals can't be waived.",
    },
    {
      myth: "Touching up a photo or a document is harmless.",
      fact: "Home Affairs states that altered, edited or digitally manipulated documents, including photos, videos and audio, are unlawful. Documents must not be modified or created with digital editing tools or AI.",
    },
    {
      myth: "Giving a false document is only a visa problem.",
      fact: "It can be a crime. Home Affairs states that presenting forged documents carries up to 10 years' imprisonment. Giving false or misleading information to a Commonwealth entity carries up to 12 months.",
    },
    {
      myth: "PIC 4020 applies to every visa.",
      fact: "Most skilled, employer-sponsored, family, student, visitor, working holiday and business visas include it. Protection visas and bridging visas don't. The Schedule 2 criteria for each visa list it.",
    },
  ],
  glossary: [
    {
      id: "pic",
      term: "PIC",
      full: "Public interest criterion",
      definition: "A requirement in Schedule 4 of the Migration Regulations that many visas must meet, such as PIC 4020 on documents and information.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "It requires no bogus document or false or misleading information with your application, or with a visa held in the 12 months before applying. Your identity must also be established.",
    },
    {
      id: "bogus",
      term: "Bogus document",
      definition: "A document the Minister reasonably suspects wasn't issued for you, is counterfeit or altered without authority, or was obtained through a false or misleading statement.",
    },
    {
      id: "material",
      term: "Material particular",
      definition: "A detail that matters to the decision. False or misleading information falls under PIC 4020 when it's false in a material particular.",
    },
    {
      id: "family-unit",
      term: "Family unit",
      definition: "The family members the migration rules treat as part of your family for visa purposes. A PIC 4020 refusal of one member counts against all of them.",
    },
    {
      id: "waiver",
      term: "Waiver",
      definition: "A decision not to apply the 3-year exclusion or the false-information part of PIC 4020, for compelling or compassionate reasons. The identity part can't be waived.",
    },
    {
      id: "identity",
      term: "Identity requirement",
      definition: "PIC 4020 also requires Home Affairs to be satisfied of your identity. A refusal on this ground blocks most visas for 10 years and can't be waived.",
    },
    {
      id: "njletter",
      term: "Natural justice letter",
      definition: "A letter giving you particulars of adverse information and inviting your comment before a decision. For an onshore reviewable application it comes under section 57.",
    },
    {
      id: "tod",
      term: "Time-of-decision criterion",
      definition: "A requirement that must be met when the visa is decided. PIC 4020 is one for most skilled, employer-sponsored, family, student, visitor, working holiday and business visas.",
    },
    {
      id: "s109",
      term: "Section 109",
      definition: "The power to cancel a visa granted on incorrect information. False information found after grant can lead to it.",
    },
    {
      id: "s234",
      term: "Section 234",
      definition: "The Migration Act offence of presenting or arranging the presentation of false or forged documents, with up to 10 years' imprisonment.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that can review most PIC 4020 refusals of onshore or sponsored applications. Apply within the time limit in your decision letter.",
    },
  ],
  cta: {
    title: "Worried about PIC 4020?",
    subtitle: "We review the documents and information in your applications, help you verify them, and prepare a clear response or waiver request.",
  },
  finder: reviewFinder,
};
