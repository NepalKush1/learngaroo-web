import { ICON } from "../icons";
import type { VisaExplainer } from "../types";
import { reviewFinder } from "./review-finder";

// Interactive explainer for natural justice and adverse information (ss 55
// to 57, 119 and 359A of the Migration Act). Every fact matches the page in
// data/visas/appeals-and-review.ts (checked against the Migration Act, the
// ART and Home Affairs on 12 October 2026). Response periods are stated only
// as the page states them; nothing here computes a date. The statutory
// declaration definition was read on the Attorney-General's Department page
// on 13 October 2026 (verifiedExtras).

export const naturalJusticeAndAdverseInformationExplainer: VisaExplainer = {
  slug: "natural-justice-and-adverse-information",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Before refusing or cancelling a visa on adverse information about you, the decision-maker must usually show it to you and invite your comment. A timely, well-evidenced response matters.",
  bigIdeas: [
    {
      title: "You get a chance to answer",
      body: "Before relying on adverse information about you, Home Affairs and the Tribunal must usually put it to you and invite comment.",
      icon: ICON.chatBubbleLeftRight,
    },
    {
      title: "The deadline is in the letter",
      body: "Written responses in Australia are commonly given 28 days. Check the time limit in your letter; ask for more time before it ends.",
      icon: ICON.calendarDays,
    },
    {
      title: "Evidence beats argument",
      body: "Answer each point with independent documents. If the decision-maker skips these steps, it can be a legal error.",
      icon: ICON.documentCheck,
    },
  ],
  heroCard: [
    { label: "The rule", value: "Adverse information must be put to you", icon: ICON.scale },
    { label: "Time to respond", value: "Commonly 28 days: check the time limit in your letter", icon: ICON.calendarDays },
    { label: "Before cancellation", value: "A section 119 notice and a chance to respond", icon: ICON.bellAlert },
    { label: "At the ART", value: "Section 359A: the Tribunal has a similar duty", icon: ICON.chatBubbleLeftRight },
    { label: "Cost to respond", value: "A$0", icon: ICON.currencyDollar },
    { label: "If it's skipped", value: "Possibly a jurisdictional error", icon: ICON.exclamationTriangle },
  ],
  checkedAgainst: "the Migration Act 1958, the Administrative Review Tribunal and Home Affairs",
  actors: [
    {
      id: "you",
      name: "You (the applicant or visa holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You read the letter, gather evidence and respond within the period it sets.",
      does: [
        "List each item of [[adverse|adverse information]] and the deadline",
        "Ask for copies of material you haven't seen",
        "Answer each point with evidence",
        "Lodge in time and keep proof",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Must put adverse information to you before refusing most onshore applications, and give notice before cancelling.",
      does: [
        "Considers all the information you give before it decides",
        "Sends a [[s57|section 57]] letter with [[particulars|particulars]]",
        "Issues a [[s119|section 119 notice]] before cancelling",
        "May decide on what it has if you don't respond ([[s62|section 62]])",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Has its own duty to put adverse information to you during a review.",
      does: [
        "Gives you particulars under [[s359a|section 359A]], in writing or at the hearing",
        "Explains why the information is relevant and invites your comment",
        "Invites you to a hearing, unless it decides in your favour on the papers or you don't respond to an invitation",
      ],
    },
    {
      id: "court",
      name: "Federal Circuit and Family Court",
      short: "The court",
      icon: ICON.buildingOffice2,
      tone: "teal",
      role: "Can review a decision where these steps weren't followed.",
      does: [
        "Checks for [[jurisdictional-error|jurisdictional error]]",
        "Hears applications filed in time: check the time limit in your decision letter",
        "Can set a flawed decision aside so it's made again",
      ],
    },
  ],
  flows: [
    {
      from: "government",
      to: "you",
      label: "Section 57 letter",
      detail: "Home Affairs gives you [[particulars|particulars]] of the adverse information, explains why it's relevant and invites you to comment.",
    },
    {
      from: "you",
      to: "government",
      label: "Your response",
      detail: "You answer each item with evidence, in the way the letter requires and within the period it sets. Check the time limit in your letter.",
    },
    {
      from: "government",
      to: "you",
      label: "Section 119 notice",
      detail: "Before cancelling under section 116 while you're in Australia, Home Affairs gives notice of the ground and invites you to respond.",
    },
    {
      from: "tribunal",
      to: "you",
      label: "Section 359A letter",
      detail: "During a review, the Tribunal gives you particulars of information that could be the reason for affirming the decision, in writing or at the hearing.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Comment or hearing",
      detail: "You respond in writing or at the hearing. If information is put to you orally under [[s359aa|section 359AA]], you can ask for time to respond in writing.",
    },
    {
      from: "you",
      to: "court",
      label: "Judicial review",
      detail: "If a decision was made on information you were never given a chance to answer, ask about judicial review. Check the time limit in your decision letter.",
    },
  ],
  journeyTitle: "From a natural justice letter to a lodged response",
  journeyHighlight: "a lodged response",
  stages: [
    {
      id: "read",
      short: "Read",
      title: "Read the letter and note the deadline",
      who: ["you"],
      description: "Identify the section relied on (57, 119 or 359A), each item of [[adverse|adverse information]], and why the decision-maker says it's relevant.",
      points: [
        "Check the time limit in your letter, and how you must respond",
        "The period is set by [[reg215|regulation 2.15]]: written responses in Australia are commonly given 28 days",
        "Interviews and people in immigration detention get shorter periods",
      ],
      youHold: "A list of the allegations and a confirmed deadline",
      icon: ICON.envelopeOpen,
    },
    {
      id: "material",
      short: "Material",
      title: "Ask for material you haven't seen",
      who: ["you", "government", "tribunal"],
      description: "If the letter summarises documents or interviews you haven't seen, ask for copies.",
      points: [
        "At the Tribunal, ask for the Home Affairs material under [[s362a|section 362A]] as early as possible",
        "Some [[non-disclosable|non-disclosable information]] can be withheld",
        "That limits what your response can address",
      ],
      youHold: "Copies of the information relied on",
      icon: ICON.inboxArrowDown,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather evidence for each point",
      who: ["you"],
      description: "Put independent documents ahead of assertions, and explain any inconsistency honestly rather than ignoring it.",
      points: [
        "Records from employers, education providers or government agencies",
        "[[stat-dec|Statutory declarations]] from you and from people with direct knowledge",
        "Bank records, transcripts or correspondence that answer the point",
      ],
      youHold: "Evidence organised against each allegation",
      cost: "Statutory declarations, reports and translations: third-party costs",
      icon: ICON.documentCheck,
    },
    {
      id: "write",
      short: "Write",
      title: "Write a structured response",
      who: ["you"],
      description: "For each item: what the decision-maker says, what actually happened, the evidence attached, and why it shouldn't lead to refusal or cancellation.",
      points: [
        "Quote each allegation and answer it in turn",
        "Link each answer to the visa criterion or cancellation ground",
        "Stay consistent with your earlier statements",
        "Add an index of attachments",
      ],
      youHold: "A written response with an index of attachments",
      icon: ICON.pencilSquare,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge in time and keep proof",
      who: ["you", "government"],
      description: "Respond in the way the letter requires, within the period, and keep the lodgement receipt.",
      points: [
        "Need more time? Ask in writing before the period ends",
        "If you don't respond, the decision may be made on the information available",
        "Lodge [[form956|Form 956]] if an agent or lawyer will respond for you",
      ],
      youHold: "Proof that your response arrived in time",
      cost: "A$0 to respond",
      icon: ICON.paperAirplane,
    },
    {
      id: "follow",
      short: "Follow up",
      title: "Follow through at review or in court",
      who: ["tribunal", "court", "you"],
      description: "At an ART hearing, the member may put information to you orally under [[s359aa|section 359AA]]. You can ask for time to respond in writing.",
      points: [
        "Raise at the hearing any failure by Home Affairs to put information to you",
        "Decided on information you never saw? Ask about judicial review",
        "Check the time limit in your decision letter",
      ],
      youHold: "A complete record of the process for any review",
      cost: "ART review A$3,727; court filing fee A$4,180",
      icon: ICON.scale,
    },
  ],
  check: {
    title: "Are you ready to respond?",
    highlight: "respond",
    ok: {
      title: "You look ready to respond",
      body: "Your answers suggest you have the deadline and the evidence in hand. Keep the response factual, consistent and lodged with proof.",
    },
    todo: {
      title: "A few things to sort before you respond",
      body: "None of these is fatal on its own, but each can weaken your response. Deal with them before the period in your letter ends.",
    },
    stop: {
      title: "Act now: your response is at risk",
      body: "At least one answer means the decision could be made without your response. The notes below explain what you can still do.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Check the time limit in your letter: it sets how long you have to respond.",
  },
  quiz: [
    {
      id: "deadline",
      topic: "Your deadline",
      question: "Do you know the deadline for your response?",
      options: [
        { value: "yes", label: "Yes, I've checked the time limit in the letter", status: "ok", note: "Note it somewhere you'll see it, and aim to lodge with time to spare." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Check the time limit in your letter today. Written responses in Australia are commonly given 28 days, with shorter periods for interviews and people in detention.",
        },
        {
          value: "passed",
          label: "It has already passed",
          status: "stop",
          note: "The decision may now be made on the information available, without further steps to get your views (section 62). Get advice straight away.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "more-time",
      topic: "More time",
      question: "Will you need more time?",
      options: [
        { value: "no", label: "No, I can respond within the period", status: "ok", note: "Keep proof of when your response was received." },
        {
          value: "before",
          label: "Yes, and I'll ask in writing before the period ends",
          status: "ok",
          note: "That's the right time to ask. Home Affairs can grant an extension, but plan as if it won't.",
        },
        {
          value: "after",
          label: "Yes, but I'll ask after the deadline",
          status: "stop",
          note: "Ask before the period ends. Missing the deadline and asking for an extension only afterwards is a common mistake.",
        },
      ],
    },
    {
      id: "material",
      topic: "The information",
      question: "Have you seen all the information the letter relies on?",
      options: [
        { value: "yes", label: "Yes, and I've listed each item", status: "ok", note: "Answer each item in turn." },
        {
          value: "summary",
          label: "Some items summarise documents I haven't seen",
          status: "todo",
          note: "Ask for copies. At the Tribunal, request the Home Affairs material under section 362A as early as possible.",
        },
        {
          value: "withheld",
          label: "I'm told some information can't be shown to me",
          status: "todo",
          note: "Non-disclosable and protected information can be withheld and still relied on, which limits what a response can address. Answer everything you can.",
        },
      ],
    },
    {
      id: "evidence",
      topic: "Evidence",
      question: "Can you back your answers with independent documents?",
      options: [
        {
          value: "yes",
          label: "Yes: records from employers, providers or agencies",
          status: "ok",
          note: "Independent documents come first when the allegation is factual and checkable.",
        },
        {
          value: "statement",
          label: "Only my own statement so far",
          status: "todo",
          note: "Add documents where you can, and statutory declarations from people with direct knowledge. Argument without documents is weak against a checkable allegation.",
        },
        { value: "none", label: "Not yet", status: "todo", note: "Start now. Responding with argument but no documents is a common weakness when the allegation is factual." },
      ],
    },
    {
      id: "consistency",
      topic: "Consistency",
      question: "Does your account match what you've said before?",
      options: [
        {
          value: "yes",
          label: "Yes, it's consistent",
          status: "ok",
          note: "Keep it that way: your response becomes part of your record and is checked against future applications.",
        },
        {
          value: "gap",
          label: "There's an inconsistency I need to explain",
          status: "todo",
          note: "Explain it honestly rather than ignore it. A different account can turn a procedural issue into a credibility finding.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Does the letter affect others in your application?",
      options: [
        { value: "no", label: "No, just me", status: "ok", note: "Respond for yourself, with your own evidence." },
        {
          value: "yes",
          label: "Yes, my family is included",
          status: "todo",
          note: "The primary applicant usually responds for the family and addresses the effect on dependants. Each adult should sign any statutory declaration about their own circumstances.",
        },
      ],
    },
    {
      id: "stage",
      topic: "Where you're up to",
      question: "Has a decision already been made?",
      options: [
        { value: "no", label: "No, I'm still at the response stage", status: "ok", note: "Focus on a complete response, lodged in time with proof." },
        {
          value: "refused",
          label: "Yes: Home Affairs refused my application",
          status: "todo",
          note: "The usual path is ART review, where you can answer the information on the merits. Check the time limit in your decision letter.",
          link: { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
        },
        {
          value: "cancelled",
          label: "Yes: Home Affairs cancelled my visa",
          status: "todo",
          note: "Your decision letter says whether the ART can review the cancellation. Check the time limit in your decision letter.",
          link: { label: "ART review of a cancellation", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
        },
        {
          value: "affirmed",
          label: "Yes: the ART affirmed the decision",
          status: "todo",
          note: "If the Tribunal failed to put adverse information to you, judicial review within 35 days of the decision may be available. Check the time limit in your decision letter.",
          link: { label: "Judicial review", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "If I ignore the letter, they can't decide without me.",
      fact: "They can. If you don't respond within the period, the decision may be made on the information available, without further steps to get your views.",
    },
    {
      myth: "I can ask for more time after the deadline.",
      fact: "Ask in writing before the period ends. Home Affairs can grant an extension, but asking only after the deadline has passed is a common mistake.",
    },
    {
      myth: "Home Affairs must show me everything on its file.",
      fact: "Not everything. Some information can't be disclosed, such as information given in confidence by law enforcement or intelligence agencies in character matters. It can still be relied on.",
    },
    {
      myth: "A strong argument is enough.",
      fact: "When an allegation is factual and checkable, answer it with documents. Argument without evidence is a common weakness in responses.",
    },
    {
      myth: "Section 57 applies to every visa application.",
      fact: "It applies to visas that can be granted while you're in Australia and whose refusal the Tribunal can review. Offshore, decision-makers still commonly invite comment as a matter of policy.",
    },
    {
      myth: "The ART must put general country information to me.",
      fact: "No. Section 359A doesn't cover general information about a class of persons, or information you gave for the review. Nor does it cover what you gave Home Affairs in writing during the original process.",
    },
    {
      myth: "I can save the unfairness argument for court.",
      fact: "Raise it at the ART hearing. Not raising it there, then relying on it only in court, is a known risk. At the ART you can also answer the information on the merits.",
    },
  ],
  glossary: [
    {
      id: "natural-justice",
      term: "Natural justice",
      definition: "A fair chance to answer adverse information before a decision is made. Also called procedural fairness. A failure to follow the required steps can be a jurisdictional error.",
    },
    {
      id: "adverse",
      term: "Adverse information",
      definition: "Information that would be the reason, or part of the reason, for refusing. It's specifically about you or another person, not just a class of people, and wasn't given by you.",
    },
    {
      id: "particulars",
      term: "Particulars",
      definition: "The specific details of the adverse information that the decision-maker gives you, with an explanation of why it's relevant.",
    },
    {
      id: "s57",
      term: "Section 57 letter",
      definition: "A Home Affairs letter giving particulars of adverse information, explaining why it's relevant and inviting comment. It applies to visas that can be granted onshore and whose refusal the Tribunal can review.",
    },
    {
      id: "s56",
      term: "Section 56 request",
      definition: "An invitation from Home Affairs to give more information, in writing or at an interview. It states how and by when to respond.",
    },
    {
      id: "s119",
      term: "Section 119 notice",
      full: "Notice of Intention to Consider Cancellation",
      definition: "Gives particulars of the cancellation ground. It invites you to show the ground doesn't exist, or that there's a reason not to cancel, within a specified time.",
    },
    {
      id: "s359a",
      term: "Section 359A",
      definition: "The Tribunal's duty to give you clear particulars of information that would be the reason, or part of the reason, for affirming the decision. It must explain why it's relevant and invite your comment.",
    },
    {
      id: "s359aa",
      term: "Section 359AA",
      definition: "Lets the Tribunal put adverse information to you orally at the hearing. You can ask for time to respond in writing.",
    },
    {
      id: "s62",
      term: "Section 62",
      definition: "If you don't respond within the period, the decision may be made on the information available, without further steps to get your views.",
    },
    {
      id: "s362a",
      term: "Section 362A",
      definition: "Lets you ask the Tribunal for the written material Home Affairs gave it. Ask as early as possible.",
    },
    {
      id: "reg215",
      term: "Regulation 2.15",
      definition: "Sets the response periods. Written responses by applicants in Australia are commonly given 28 days; interviews and people in immigration detention get shorter periods.",
    },
    {
      id: "non-disclosable",
      term: "Non-disclosable information",
      definition: "Information that can't be shown to you, such as some information given in confidence by law enforcement or intelligence agencies in character matters. It can still be relied on.",
    },
    {
      id: "jurisdictional-error",
      term: "Jurisdictional error",
      definition: "A legal error that means a decision wasn't made lawfully. Failing to put adverse information to you when the law requires it can be one.",
    },
    {
      id: "stat-dec",
      term: "Statutory declaration",
      definition: "A legal document setting out facts you declare to be true and accurate. Making a false statement on purpose is an offence.",
    },
    {
      id: "form956",
      term: "Form 956",
      definition: "The form that appoints a registered migration agent or lawyer to respond on your behalf.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "Reviews many refusals and cancellations, and has its own duty under section 359A to put adverse information to you.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A statutory declaration is a legal document that sets out facts that you declare to be true and accurate. If you make a false statement on purpose, you can be charged with an offence.",
      source: "https://www.ag.gov.au/legal-system/statutory-declarations",
    },
    {
      fact: "If the court finds jurisdictional error, it can set aside the decision, prevent the Minister acting on it and refer the case back to the decision-maker to be decided again according to law.",
      source: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
  ],
  cta: {
    title: "Received a natural justice letter?",
    subtitle: "We read the letter with you, confirm the time limit, and help you build a clear, evidence-based response before the period ends.",
  },
  finder: reviewFinder,
};
