import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { reviewFinder } from "./review-finder";

// Interactive explainer for "Visa cancellation and the Notice of Intention".
// Every fact comes from data/visas/appeals-and-review.ts (checked against
// Home Affairs, the ART and the Migration Act and Regulations on 12 October
// 2026). Response and review time limits appear only as the page states
// them; no dates are calculated.

export const visaCancellationAndNoticeOfIntentionExplainer: VisaExplainer = {
  slug: "visa-cancellation-and-notice-of-intention",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Before cancelling a visa held by someone in Australia, Home Affairs usually sends a notice of intention, and your response can show the ground doesn't exist or why the visa should stay.",
  bigIdeas: [
    {
      title: "Nothing is decided yet",
      body: "Home Affairs is considering cancelling your visa. The notice is your chance to respond before it decides.",
      icon: ICON.envelopeOpen,
    },
    {
      title: "Answer the ground first",
      body: "Show with documents that the ground doesn't exist. If a breach did happen, explain it, then give reasons to keep the visa.",
      icon: ICON.documentCheck,
    },
    {
      title: "Respond on time",
      body: "The deadline is in the notice and is often short. Ask in writing for more time before it ends if you need it.",
      icon: ICON.clock,
    },
  ],
  heroCard: [
    { label: "What it is", value: "A notice before a possible cancellation", icon: ICON.envelopeOpen },
    { label: "Your deadline", value: "The time stated in the notice (often short)", icon: ICON.clock },
    { label: "Cost to respond", value: "A$0", icon: ICON.currencyDollar },
    { label: "If cancelled", value: "Unlawful unless you hold a bridging visa", icon: ICON.exclamationTriangle },
    { label: "Review", value: "ART, usually within 28 days: check your letter", icon: ICON.scale },
    { label: "Main powers", value: "Sections 109, 116, 128 and 140", icon: ICON.bookOpen },
  ],
  checkedAgainst: "Home Affairs, the Administrative Review Tribunal and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the visa holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Respond to the notice in time, with evidence.",
      does: [
        "Read each ground and the information relied on",
        "Respond in writing before the deadline in the notice",
        "Explain any breach, and give reasons the visa should stay",
        "Keep proof that your response was received",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Considers cancelling, and must usually give you a chance to respond first.",
      does: [
        "Sends a [[noicc|notice of intention]] with the ground and particulars",
        "Can extend the response time if you ask in writing",
        "Decides whether the ground exists and whether to cancel",
        "Tells you in writing of a cancellation, the reasons and your review rights",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Can review most cancellations made in Australia.",
      does: [
        "Reviews cancellations made in Australia, outside [[immigration-clearance|immigration clearance]]",
        "Takes a fresh look at the ground and the [[discretion|discretion]]",
        "Can't review cancellations made personally by the Minister",
      ],
    },
  ],
  flows: [
    {
      from: "homeaffairs",
      to: "you",
      label: "Notice of intention",
      detail: "Home Affairs sends a [[s119|section 119 notice]] setting out the ground, the particulars and the information it relies on, with a time to respond.",
    },
    {
      from: "you",
      to: "homeaffairs",
      label: "You respond",
      detail: "You show the ground doesn't exist, or give reasons why the visa shouldn't be cancelled, with documents, before the deadline.",
    },
    {
      from: "homeaffairs",
      to: "you",
      label: "Decision",
      detail: "If Home Affairs doesn't cancel, your visa continues unchanged. If it cancels, it tells you the reasons and your review rights in writing.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Review if cancelled",
      detail: "If your visa is cancelled, you can usually apply to the ART within 28 days (14 in immigration detention). Check the time limit in your decision letter.",
    },
  ],
  journeyTitle: "From notice of intention to a decision",
  journeyHighlight: "a decision",
  stages: [
    {
      id: "notice",
      short: "Notice",
      title: "Check the notice and the deadline",
      who: ["you", "homeaffairs"],
      description:
        "Identify the section relied on, each ground, the information Home Affairs holds and the date your response is due.",
      points: [
        "The time to respond is stated in the notice and is often short",
        "Ask in writing for an extension before the period ends if you need one",
        "At the border you may be asked to respond on the spot",
      ],
      youHold: "A list of the grounds and a confirmed response date",
      icon: ICON.envelopeOpen,
    },
    {
      id: "file",
      short: "File",
      title: "Get the information relied on",
      who: ["you", "homeaffairs"],
      description: "If the notice refers to information you haven't seen, ask for it.",
      points: [
        "You can also request your departmental file under [[foi|freedom of information]]",
        "That may take longer than the response period",
      ],
      youHold: "The information Home Affairs relies on",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "ground",
      short: "Ground",
      title: "Answer the ground",
      who: ["you"],
      description: "First show, with documents, that the ground doesn't exist or that the information was correct.",
      points: [
        "For example a current [[coe|Confirmation of Enrolment]], or payslips and rosters showing your work hours",
        "If a breach happened, explain it: for example illness, exploitation by an employer, or a misunderstanding of the condition",
        "A statutory declaration on what happened and what you've done since",
      ],
      youHold: "A written response with supporting evidence",
      icon: ICON.documentText,
    },
    {
      id: "reasons",
      short: "Reasons",
      title: "Give reasons not to cancel",
      who: ["you"],
      description:
        "Even where a ground exists, the decision is usually [[discretion|discretionary]]. Explain why the visa should stay.",
      points: [
        "Your purpose in Australia and your compliance history",
        "Hardship to you and your family, and the best interests of any children",
        "Your ties to Australia, and any risk to the community",
        "Family members' visas fall with yours under [[s140|section 140]], so include them",
      ],
      youHold: "Submissions on the discretion not to cancel",
      icon: ICON.heart,
    },
    {
      id: "respond",
      short: "Respond",
      title: "Lodge your response on time",
      who: ["you", "homeaffairs"],
      description: "Send it through ImmiAccount, by email or as the notice directs, before the deadline.",
      points: [
        "Keep proof of lodgement",
        "There's no charge to respond",
        "Include Form 956 if a registered migration agent or lawyer acts for you",
      ],
      youHold: "Proof that the response was received in time",
      cost: "A$0",
      icon: ICON.paperAirplane,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Home Affairs decides",
      who: ["homeaffairs"],
      description:
        "If it decides not to cancel, your visa and conditions continue unchanged. Keep complying: the same ground can be considered again if it recurs.",
      points: [
        "If it cancels, it must tell you in writing the decision, the reasons and your review rights",
        "Visas granted to family members because of yours are cancelled with it",
      ],
      youHold: "Your visa, or a cancellation notice with review rights",
      icon: ICON.scale,
    },
    {
      id: "act",
      short: "If cancelled",
      title: "If the visa is cancelled, act immediately",
      who: ["you", "tribunal"],
      description: "You become unlawful at that moment unless you hold another visa. Without a bridging visa, you may be detained and removed.",
      points: [
        "Apply for a [[bve|Bridging visa E]] to stay lawful (no charge)",
        "Lodge the ART review within 28 days (14 in detention): check the time limit in your decision letter",
        "The ART fee is A$3,727, with a 50% reduction for financial hardship",
        "The [[s48|section 48 bar]] and a 3-year [[pic4013|PIC 4013]] exclusion can follow",
      ],
      youHold: "Lawful status, and a review lodged in time",
      icon: ICON.exclamationTriangle,
    },
  ],
  check: {
    title: "Are you ready to respond to the notice?",
    highlight: "respond to the notice",
    ok: {
      title: "You're in a good position to respond",
      body: "Nothing in your answers is a red flag. Next: build your evidence on each ground and lodge before the deadline in the notice.",
    },
    todo: {
      title: "Some things to sort before you respond",
      body: "None of these is fatal on its own, but each needs attention before your deadline.",
    },
    stop: {
      title: "Some answers need urgent attention",
      body: "At least one answer could seriously weaken your position. The notes below explain why and what to do next.",
    },
    disclaimer:
      "A general self-check, not legal advice. The notice and your full circumstances decide the outcome. Respond within the time stated in your notice.",
  },
  quiz: [
    {
      id: "deadline",
      topic: "Deadline",
      question: "When is your response due?",
      help: "The notice states the time. It is prescribed by law and is often short.",
      options: [
        {
          value: "time",
          label: "I know the date, and there's time",
          status: "ok",
          note: "Use the time well: gather documents for each ground, and keep proof of when you lodge.",
        },
        {
          value: "soon",
          label: "It's very soon",
          status: "todo",
          note: "Ask Home Affairs in writing for an extension before the period ends, and keep working on your response in case more time isn't given.",
        },
        {
          value: "passed",
          label: "It has already passed",
          status: "stop",
          note: "Without your response, Home Affairs can decide on its own information alone. Get advice today.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check the notice now: it states the time to respond. Ask in writing for more time if you need it.",
        },
      ],
    },
    {
      id: "ground",
      topic: "The ground",
      question: "Can you show the ground doesn't exist?",
      options: [
        {
          value: "yes",
          label: "Yes, I have documents",
          status: "ok",
          note: "Lead with them: for example a current Confirmation of Enrolment, payslips and rosters, or proof the information was correct.",
        },
        {
          value: "partly",
          label: "Partly",
          status: "todo",
          note: "Address every ground and every piece of information in the notice, then give reasons why the visa shouldn't be cancelled.",
        },
        {
          value: "breach",
          label: "The breach did happen",
          status: "todo",
          note: "Explain the circumstances honestly, with evidence. The decision is usually discretionary, so your reasons to keep the visa matter too.",
        },
      ],
    },
    {
      id: "account",
      topic: "Your account",
      question: "Does your explanation match what you've told Home Affairs before?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Good. Explanations that contradict earlier statements can weaken a response.",
        },
        {
          value: "differs",
          label: "There are differences",
          status: "todo",
          note: "Address them openly. Admitting a breach without explaining it, or contradicting earlier statements, can count against you.",
        },
        {
          value: "card",
          label: "An old passenger card answer may have been wrong",
          status: "todo",
          note: "Incorrect answers on an incoming passenger card can ground a section 109 cancellation years later. Get advice on how to address it.",
        },
      ],
    },
    {
      id: "ties",
      topic: "Reasons to stay",
      question: "Do you have family, children or other strong ties in Australia?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Include them with evidence: hardship to you and your family, the best interests of children and your ties are part of the discretion.",
        },
        {
          value: "few",
          label: "Not many",
          status: "todo",
          note: "Focus on the ground, your compliance history and your purpose in Australia, with documents.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Do family members hold visas because of yours?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to include." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Include them in your response: their visas fall with yours under section 140. Explain the effect on them and on any children.",
        },
      ],
    },
    {
      id: "travel",
      topic: "Travel",
      question: "Are you planning to leave Australia before this is resolved?",
      options: [
        {
          value: "no",
          label: "No",
          status: "ok",
          note: "Worth knowing: leaving Australia after receiving a notice can allow cancellation under section 128 without further notice.",
        },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Leaving Australia after receiving a notice can allow cancellation under section 128 without further notice. Get advice before you travel.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "A notice of intention means my visa is already cancelled.",
      fact: "No. The notice means Home Affairs is considering cancellation and inviting your response. If it decides not to cancel, your visa and conditions continue unchanged.",
    },
    {
      myth: "If I ignore the notice, it will go away.",
      fact: "If you don't respond, Home Affairs can decide on its own information alone. Responding costs nothing, and it's your chance to show the ground doesn't exist or why the visa should stay.",
    },
    {
      myth: "Hardship is all I need to write about.",
      fact: "The first question is whether the ground exists. Answer that with documents first, then give reasons the visa shouldn't be cancelled, including hardship to you and your family.",
    },
    {
      myth: "Going overseas for a while will make it go away.",
      fact: "Leaving Australia after receiving a notice can allow cancellation under section 128 without further notice.",
    },
    {
      myth: "Old passenger card answers don't matter.",
      fact: "Incorrect answers on an incoming passenger card can ground a section 109 cancellation years later.",
    },
    {
      myth: "A cancellation would only affect me.",
      fact: "Visas granted to family members because of yours are cancelled with it under section 140. A cancellation is also a risk factor under PIC 4013 for 3 years, which only compelling or compassionate circumstances can overcome.",
    },
    {
      myth: "Home Affairs always has to warn me before cancelling.",
      fact: "Not always. A visa can be cancelled without prior notice while you're outside Australia (section 128). The same applies when the Minister acts personally (sections 133A and 133C), or where cancellation is mandatory.",
    },
  ],
  glossary: [
    {
      id: "noicc",
      term: "Notice of intention",
      full: "Notice of Intention to Consider Cancellation",
      definition: "The written notice Home Affairs must give before cancelling a visa under section 116 while you're in Australia. It sets out the ground and invites your response.",
    },
    {
      id: "s119",
      term: "Section 119 notice",
      definition: "The legal name for the notice of intention. It gives the ground, the particulars and the information relied on, and the time to respond.",
    },
    {
      id: "s107",
      term: "Section 107 notice",
      definition: "The notice Home Affairs gives before a section 109 cancellation, setting out the incorrect information it says was given and inviting your response.",
    },
    {
      id: "s109",
      term: "Section 109",
      definition: "Cancellation because an application, passenger card or response contained incorrect information, or a bogus document was given.",
    },
    {
      id: "s116",
      term: "Section 116",
      definition: "General cancellation grounds. Examples are a breach of a condition, a change in the circumstances that allowed the grant, or a risk to the community.",
    },
    {
      id: "s128",
      term: "Section 128",
      definition: "Cancellation without prior notice while you're outside Australia. You're told afterwards and can ask for it to be revoked within the time stated.",
    },
    {
      id: "s140",
      term: "Section 140",
      definition: "When a visa is cancelled, visas granted to family members because of it are cancelled too.",
    },
    {
      id: "discretion",
      term: "Discretion",
      definition: "Even where a cancellation ground exists, the decision is usually a choice. Your reasons to keep the visa go to that choice.",
    },
    {
      id: "mandatory",
      term: "Mandatory cancellation",
      definition: "Cancellation that must happen in some prescribed circumstances, rather than a choice weighed on your reasons.",
    },
    {
      id: "foi",
      term: "Freedom of information",
      full: "FOI",
      definition: "A way to request your departmental file. It may take longer than the time you have to respond to a notice.",
    },
    {
      id: "coe",
      term: "Confirmation of Enrolment",
      full: "CoE",
      definition: "The document from your education provider that confirms your course enrolment. A current one can answer a student visa cancellation ground.",
    },
    {
      id: "immigration-clearance",
      term: "Immigration clearance",
      definition: "The border check when you arrive in Australia. You may be asked to respond on the spot, and cancellations there can't be reviewed by the Tribunal.",
    },
    {
      id: "bve",
      term: "Bridging visa E",
      full: "Bridging visa E (subclass 050)",
      definition: "A bridging visa that keeps you lawful after a cancellation while you seek review, ask for ministerial intervention or arrange to leave. There's no application charge.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a cancellation in Australia, it limits you to certain prescribed visas while you remain here without a substantive visa.",
    },
    {
      id: "pic4013",
      term: "PIC 4013",
      definition: "A visa criterion that makes a cancellation under section 109, 116, 128 or 140 a risk factor for 3 years. Only compelling or compassionate circumstances can overcome it.",
    },
  ],
  cta: {
    title: "Received a notice? Let's prepare your response",
    subtitle: "We go through each ground with you, gather the evidence and prepare a clear, complete response before your deadline.",
  },
  finder: reviewFinder,
};
