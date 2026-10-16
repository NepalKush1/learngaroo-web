import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { reviewFinder } from "./review-finder";

// Interactive explainer for "ART review of a visa cancellation". Every fact
// comes from data/visas/appeals-and-review.ts (checked against the ART, Home
// Affairs and the Migration Act and Regulations on 12 October 2026). Time
// limits appear only as the page states them, always with a prompt to check
// the decision letter; no dates are calculated.

export const artReviewOfVisaCancellationExplainer: VisaExplainer = {
  slug: "art-review-of-visa-cancellation",
  factsAsAt: "12 October 2026",
  oneLiner:
    "If your visa is cancelled while you're in Australia, the Administrative Review Tribunal (ART) can usually review it and restore the visa, but the cancellation applies at once, so you also need a bridging visa.",
  bigIdeas: [
    {
      title: "It takes effect at once",
      body: "Cancellation makes you unlawful unless you hold another visa. A Bridging visa E keeps you lawful during the review.",
      icon: ICON.exclamationTriangle,
    },
    {
      title: "The time limits are short",
      body: "28 days, or 14 in detention (9 for character cancellations in Australia). Check the time limit in your decision letter.",
      icon: ICON.clock,
    },
    {
      title: "Ground first, then discretion",
      body: "Does the cancellation ground exist? If it does, should the visa still be cancelled? Answer both with evidence.",
      icon: ICON.scale,
    },
  ],
  heroCard: [
    { label: "ART fee", value: "A$3,727 (A$1,195 for character cancellations)", icon: ICON.currencyDollar },
    { label: "Time limit", value: "Usually 28 days (14 in detention): check your letter", icon: ICON.clock },
    { label: "Your status", value: "Unlawful unless you hold a bridging visa", icon: ICON.shieldExclamation },
    { label: "Who applies", value: "You, and each family member cancelled with you", icon: ICON.users },
    { label: "Review priority", value: "Expedited automatically", icon: ICON.bellAlert },
    { label: "If you win", value: "Your visa is restored, if it hasn't expired", icon: ICON.checkBadge },
  ],
  checkedAgainst: "the Administrative Review Tribunal, Home Affairs and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the former visa holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Stay lawful, apply for review in time and answer the cancellation ground.",
      does: [
        "Apply for a [[bve|Bridging visa E]] straight away",
        "Lodge the review within the time limit in your decision letter",
        "Show the ground doesn't exist, or why the visa shouldn't be cancelled",
        "Keep to your bridging visa conditions until the Tribunal decides",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Cancelled the visa, and gives the Tribunal its file.",
      does: [
        "Sends the cancellation notice with the section, reasons and review rights",
        "Decides your Bridging visa E application",
        "Gives the Tribunal the documents for the review",
        "In character reviews, the Minister is represented at the hearing",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Decides afresh whether the ground exists and whether the visa should be cancelled.",
      does: [
        "Expedites cancellation reviews automatically",
        "Puts adverse information to you and invites your comment",
        "Hears your evidence by video, telephone or in person",
        "Can set the cancellation aside, which restores your visa",
      ],
    },
  ],
  flows: [
    {
      from: "homeaffairs",
      to: "you",
      label: "Cancels your visa",
      detail: "The cancellation notice states the section used, the reasons, whether the Tribunal can review it and the time limit.",
    },
    {
      from: "you",
      to: "homeaffairs",
      label: "Bridging visa E",
      detail: "Your old bridging visa ends with the cancellation, so you apply for a [[bve|Bridging visa E]] on the basis that you're seeking merits review.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "You apply for review",
      detail: "You lodge the review online, by form M1, or by form M2 from immigration detention, and pay the fee before the deadline.",
    },
    {
      from: "homeaffairs",
      to: "tribunal",
      label: "Sends its file",
      detail: "Home Affairs gives the Tribunal its documents. You can ask for a copy of the written material it gave under [[s362a|section 362A]].",
    },
    {
      from: "tribunal",
      to: "you",
      label: "Decides afresh",
      detail: "After an expedited hearing, the Tribunal affirms the cancellation or sets it aside. If it's set aside, your visa is restored if it hasn't expired.",
    },
  ],
  journeyTitle: "From cancellation notice to Tribunal decision",
  journeyHighlight: "Tribunal decision",
  stages: [
    {
      id: "notice",
      short: "Notice",
      title: "Read the cancellation notice",
      who: ["you", "homeaffairs"],
      description:
        "It states the section used, the reasons, whether the Tribunal can review the decision and the time limit. Note the date you received it.",
      points: [
        "Check the time limit in your decision letter",
        "Usually 28 days, or 14 days in immigration detention",
        "9 days for a [[s501|character cancellation]] made while you were in Australia",
        "None of these can be extended",
      ],
      youHold: "Your deadline and the review path",
      icon: ICON.envelopeOpen,
    },
    {
      id: "bridging",
      short: "Stay lawful",
      title: "Apply for a Bridging visa E straight away",
      who: ["you", "homeaffairs"],
      description:
        "A bridging visa linked to the cancelled visa ends with it, and lodging a review doesn't give you a visa by itself.",
      points: [
        "Apply for a [[bve|Bridging visa E]] (subclass 050) on the basis that you're seeking merits review",
        "There's no visa application charge",
        "Ask for work rights if you need them: the grant letter says whether you can work",
      ],
      youHold: "A Bridging visa E application lodged",
      cost: "A$0",
      icon: ICON.shieldCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge the review and pay the fee",
      who: ["you", "tribunal"],
      description:
        "Apply online, by form M1, or by form M2 from immigration detention. The Tribunal confirms receipt and tells Home Affairs.",
      points: [
        "A$3,727 for cancellations under section 109, 116 or 140",
        "Financial hardship: pay 50% and ask for a reduction",
        "A$1,195 for character cancellations, or A$100 in detention and some other cases",
        "No fee for a bridging visa decision that led to immigration detention",
      ],
      youHold: "A valid review application and a case number",
      cost: "A$3,727 (A$1,195 for character cancellations)",
      icon: ICON.paperAirplane,
    },
    {
      id: "file",
      short: "File",
      title: "Get the cancellation file",
      who: ["homeaffairs", "you"],
      description: "Ask Home Affairs for the written material it gave the Tribunal under [[s362a|section 362A]].",
      points: [
        "Check the [[noicc|notice of intention]] and the response you gave",
        "Check the evidence the [[delegate|delegate]] relied on",
      ],
      youHold: "The cancellation file and the evidence you must answer",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Answer the ground, then the discretion",
      who: ["you"],
      description:
        "First show the cancellation ground doesn't exist. Then explain why the visa shouldn't be cancelled anyway.",
      points: [
        "Evidence about the alleged breach and your compliance with conditions",
        "Your ties to Australia, and hardship to you and your family if you had to leave",
        "Any risk to the community",
        "Answer adverse information within the time the Tribunal sets",
      ],
      youHold: "Evidence and submissions on the Tribunal file",
      icon: ICON.documentText,
    },
    {
      id: "hearing",
      short: "Hearing",
      title: "Attend the expedited hearing",
      who: ["tribunal", "you"],
      description:
        "Cancellation reviews are expedited automatically. The member hears your evidence and any witnesses by video, telephone or in person.",
      points: [
        "Character reviews: the Minister is represented",
        "Character reviews: documents must reach the Minister at least 2 business days before the hearing",
        "Character reviews must be decided within 84 days, or the decision is taken to be affirmed",
      ],
      youHold: "Your case put to the member in person",
      icon: ICON.chatBubbleLeftRight,
    },
    {
      id: "decision",
      short: "Decision",
      title: "The decision, and what follows",
      who: ["tribunal", "you"],
      description:
        "If the cancellation is set aside, your visa is restored, if it hasn't expired in the meantime. If it's affirmed, plan your next step quickly.",
      points: [
        "Set aside: check [[vevo|VEVO]] shows your visa, and your family's visas, correctly",
        "Set aside or remitted: 50% of the A$3,727 fee is refunded",
        "Affirmed: [[jr|judicial review]] within 35 days, or a [[mi|ministerial intervention]] request",
        "Affirmed: the [[s48|section 48 bar]] and a 3-year [[pic4013|PIC 4013]] exclusion may apply",
      ],
      youHold: "A restored visa, or a plan for departure or the next step",
      icon: ICON.scale,
    },
  ],
  check: {
    title: "Can you ask the ART to review your cancellation?",
    highlight: "review your cancellation",
    ok: {
      title: "Review looks open to you",
      body: "Nothing in your answers rules out a review. Next: confirm the time limit in your decision letter, apply for a Bridging visa E and lodge.",
    },
    todo: {
      title: "Possible, with urgent things to sort",
      body: "None of these rules you out on its own, but each needs attention before your deadline.",
    },
    stop: {
      title: "The Tribunal may not be the way forward",
      body: "At least one answer suggests the Tribunal can't review this cancellation, or that time has run out. The notes below explain what may still be open.",
    },
    disclaimer:
      "A general self-check, not legal advice. Your cancellation notice and your full circumstances decide what's available, so check the time limit in your decision letter.",
  },
  quiz: [
    {
      id: "section",
      topic: "Type of cancellation",
      question: "Which section does your cancellation notice mention?",
      help: "The notice states the section used and whether the Tribunal can review the decision.",
      options: [
        {
          value: "s109-116",
          label: "Section 109 or 116",
          hint: "For example incorrect information, or a breach of a visa condition",
          status: "ok",
          note: "Cancellations under section 109 or 116 made while you're in Australia, outside immigration clearance, are usually reviewable by the Tribunal.",
        },
        {
          value: "s140",
          label: "Section 140 (my family member's visa was cancelled)",
          status: "ok",
          note: "You need your own review application. Lodge at the same time, and tell the Tribunal within 14 days if you want the reviews heard together.",
        },
        {
          value: "s501",
          label: "Section 501 (character)",
          status: "todo",
          note: "Character cancellations follow a separate, expedited track. If you were in Australia, the time limit is 9 days and the fee is A$1,195.",
          link: { label: "Character decisions", href: "/visas/appeals-and-review/character-test-section-501" },
        },
        {
          value: "minister",
          label: "The Minister cancelled it personally",
          status: "stop",
          note: "The Tribunal can't review the Minister's personal decisions, such as cancellations under section 133A, 133C or 501(3). Judicial review in the courts is the only challenge.",
          link: { label: "Judicial review", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Read the notice again: it states the section used, the reasons and whether the Tribunal can review the decision.",
        },
      ],
    },
    {
      id: "where",
      topic: "Where it happened",
      question: "Where were you when the visa was cancelled?",
      options: [
        {
          value: "onshore",
          label: "In Australia",
          status: "ok",
          note: "Cancellations made in Australia, outside immigration clearance, can usually be reviewed by the Tribunal.",
        },
        {
          value: "airport",
          label: "At the airport, when I arrived",
          hint: "In immigration clearance",
          status: "stop",
          note: "Cancellations in immigration clearance aren't reviewable by the Tribunal and lead to removal. Get advice straight away.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
        {
          value: "overseas",
          label: "Outside Australia",
          status: "todo",
          note: "Under section 128 you're told after the event and can ask Home Affairs to revoke the cancellation within the time in the notice. Whether the Tribunal can review the outcome depends on the decision type.",
          link: { label: "Cancellation while overseas", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
        },
      ],
    },
    {
      id: "time",
      topic: "Time limit",
      question: "Is your time limit still open?",
      help: "Check the time limit in your decision letter. It runs from when you're notified of the decision.",
      options: [
        {
          value: "open",
          label: "Yes, with time to spare",
          status: "ok",
          note: "Lodge early anyway: none of the time limits can be extended.",
        },
        {
          value: "close",
          label: "Yes, but it's very close",
          status: "todo",
          note: "Lodge now and pay the fee, or at least 50% with a hardship request. Then build your evidence.",
        },
        {
          value: "passed",
          label: "No, it has passed",
          status: "stop",
          note: "None of the time limits (28 days, 14 in detention, 9 for character cancellations made in Australia) can be extended. Get advice promptly about any options left.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "bridging",
      topic: "Staying lawful",
      question: "Have you applied for a Bridging visa E?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Keep to its conditions, including any reporting or no-work condition, until the Tribunal decides.",
        },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Apply straight away, on the basis that you're seeking merits review. Without it you're unlawful during the review and may be detained.",
        },
        {
          value: "detention",
          label: "I'm in immigration detention",
          status: "todo",
          note: "Your time limit is 14 days (9 for a character cancellation) and the review is expedited. Use form M2, and check the time limit in your decision letter.",
        },
      ],
    },
    {
      id: "fee",
      topic: "Fee",
      question: "Can you pay the review fee before the deadline?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "A$3,727 for most cancellations, A$1,195 for character cancellations. If the Tribunal sets aside or remits the decision, 50% of the A$3,727 fee is refunded.",
        },
        {
          value: "part",
          label: "Only part of it",
          status: "todo",
          note: "With financial hardship you can pay 50% of the A$3,727 fee and ask for a reduction. The character fee is reduced to A$100 in detention and some other cases.",
        },
        {
          value: "no",
          label: "Not at the moment",
          status: "stop",
          note: "The A$3,727 fee must be paid by the deadline, or at least 50% of it with a hardship request. Get advice quickly.",
        },
      ],
    },
    {
      id: "ground",
      topic: "Your evidence",
      question: "Can you show the cancellation ground doesn't exist?",
      options: [
        {
          value: "yes",
          label: "Yes, I have documents",
          status: "ok",
          note: "Lead with them, for example enrolment or employment records, medical evidence or the correct information. The Tribunal decides afresh whether the ground is made out.",
        },
        {
          value: "explain",
          label: "The breach happened, but there's an explanation",
          status: "todo",
          note: "Explain the circumstances consistently, with evidence. Then give reasons not to cancel: your compliance history, ties to Australia, family hardship and any risk to the community.",
        },
        {
          value: "unsure",
          label: "I'm not sure what the ground is",
          status: "todo",
          note: "Get the file Home Affairs gave the Tribunal, and reread the notice of intention and your response.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Were family members' visas cancelled with yours?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to arrange." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Each of them needs their own review. Lodge together and tell the Tribunal within 14 days if you want them heard together. If yours is set aside, theirs usually follows.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Applying for review lets me keep my visa.",
      fact: "No. The cancellation takes effect immediately, and a bridging visa linked to the cancelled visa ends with it. Applying to the Tribunal doesn't give you a visa, so apply for a Bridging visa E to stay lawful.",
    },
    {
      myth: "Showing hardship is enough to win.",
      fact: "The Tribunal first asks whether the cancellation ground exists, so lead with evidence on that. Then explain why the visa shouldn't be cancelled: compliance, ties to Australia, family hardship and any risk to the community.",
    },
    {
      myth: "Every cancellation can go to the Tribunal.",
      fact: "Not all. Cancellations at the airport in immigration clearance, and decisions made personally by the Minister, can't be reviewed by the Tribunal. Your cancellation notice says whether review is available.",
    },
    {
      myth: "My family's visas are separate from mine.",
      fact: "Visas granted to family members because of your visa are cancelled with yours under section 140. Each person applies for their own review, and if your cancellation is set aside, theirs usually follows.",
    },
    {
      myth: "The Tribunal can give me more time to apply.",
      fact: "None of the time limits can be extended. They're usually 28 days, or 14 days in immigration detention. Character cancellations made while you were in Australia have 9 days. Check the time limit in your decision letter.",
    },
    {
      myth: "I can travel overseas while the review runs.",
      fact: "Leaving Australia during the review ends your bridging visa and can make the review pointless. Get advice before you travel.",
    },
  ],
  glossary: [
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The independent tribunal that reviews many visa decisions, including most cancellations made in Australia, on their merits.",
    },
    {
      id: "bve",
      term: "Bridging visa E",
      full: "Bridging visa E (subclass 050)",
      definition: "A bridging visa that keeps you lawful while you seek merits review. There's no application charge, and the grant letter says whether you can work.",
    },
    {
      id: "noicc",
      term: "Notice of intention",
      full: "Notice of Intention to Consider Cancellation",
      definition: "The notice Home Affairs gives before cancelling under section 116, setting out the ground and inviting your response. Keep it and your response for the review.",
    },
    {
      id: "s109",
      term: "Section 109",
      definition: "Cancellation because Home Affairs says you gave incorrect information or a bogus document.",
    },
    {
      id: "s116",
      term: "Section 116",
      definition: "Cancellation on general grounds, for example a breach of a visa condition or a change in circumstances.",
    },
    {
      id: "s140",
      term: "Section 140",
      definition: "Consequential cancellation: when your visa is cancelled, visas held by family members because of yours are cancelled too.",
    },
    {
      id: "s501",
      term: "Section 501",
      definition: "The character test. Character cancellations made while you were in Australia have an expedited review with a 9-day time limit and an A$1,195 fee.",
    },
    {
      id: "immigration-clearance",
      term: "Immigration clearance",
      definition: "The border check when you arrive in Australia. Cancellations made there can't be reviewed by the Tribunal.",
    },
    {
      id: "delegate",
      term: "Delegate",
      definition: "A Home Affairs officer who makes decisions on the Minister's behalf, such as a cancellation.",
    },
    {
      id: "s362a",
      term: "Section 362A",
      definition: "The section that lets you ask Home Affairs for a copy of the written material it gave the Tribunal for your review.",
    },
    {
      id: "expedited",
      term: "Expedited review",
      definition: "A review the Tribunal prioritises. Cancellation reviews and reviews of people in immigration detention are expedited automatically.",
    },
    {
      id: "vevo",
      term: "VEVO",
      definition: "The Home Affairs online record of your visa and its conditions. Check it after any decision about your visa.",
    },
    {
      id: "jr",
      term: "Judicial review",
      definition: "A court checking whether the Tribunal's decision involved a legal error. It must be filed within 35 days of the decision.",
    },
    {
      id: "mi",
      term: "Ministerial intervention",
      definition: "A request asking the Minister to substitute a more favourable decision after the Tribunal has affirmed the cancellation.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a cancellation in Australia, it limits you to certain prescribed visas while you remain here without a substantive visa.",
    },
    {
      id: "pic4013",
      term: "PIC 4013",
      definition: "A criterion under which a cancellation that stands can affect later visa applications for 3 years.",
    },
  ],
  cta: {
    title: "Visa cancelled? Act quickly, with help",
    subtitle: "We check your cancellation notice and time limit, help you stay lawful, and prepare the review application and your evidence.",
  },
  finder: reviewFinder,
};
