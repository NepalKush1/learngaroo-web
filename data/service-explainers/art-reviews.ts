import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { reviewFinder } from "../visas/explainers/appeals-and-review/review-finder";

// Interactive explainer for /services/art-reviews. Every figure comes from the
// library pages in `pages` (data/visas/appeals-and-review.ts and
// data/visas/other-visas-resident.ts, checked against the ART, Home Affairs
// and the Migration Act and Regulations on 12 October 2026). Time limits
// appear only as the pages state them, always with a prompt to check the
// decision letter: nothing here calculates a date or a deadline.

export const artReviewsServiceExplainer: ServiceExplainer = {
  slug: "art-reviews",
  factsAsAt: "12 October 2026",
  pages: [
    "art-review-of-visa-refusal",
    "art-review-of-visa-cancellation",
    "judicial-review-of-migration-decisions",
    "ministerial-intervention",
    "visa-cancellation-and-notice-of-intention",
    "natural-justice-and-adverse-information",
    "bridging-visas-a-b-c-e",
  ],
  name: "ART review process",
  accent: "After a visa refusal or cancellation",
  oneLiner:
    "If Home Affairs refuses or cancels your visa, the Administrative Review Tribunal (ART) may be able to take a fresh look and change the decision, but strict time limits apply.",
  bigIdeas: [
    {
      title: "Your letter holds the key",
      body: "It says whether the ART can review the decision, who may apply and the time limit. Read it first.",
      icon: ICON.envelopeOpen,
    },
    {
      title: "The time limit is strict",
      body: "Usually 28 days after you're notified, or 14 days in immigration detention. The Tribunal can't extend it.",
      icon: ICON.clock,
    },
    {
      title: "A fresh look at your case",
      body: "The Tribunal decides again on the facts and the law, and can consider evidence Home Affairs never saw.",
      icon: ICON.scale,
    },
  ],
  heroCard: [
    { label: "ART fee", value: "A$3,727 for most migration decisions", icon: ICON.currencyDollar },
    { label: "Time limit", value: "Usually 28 days (14 in detention): check your letter", icon: ICON.clock },
    { label: "Who applies", value: "You, or your Australian sponsor or nominator", icon: ICON.user },
    { label: "New evidence", value: "Yes: the Tribunal can consider it", icon: ICON.documentText },
    { label: "Your bridging visa", value: "Usually continues after a refusal; ends with a cancellation", icon: ICON.shieldCheck },
    { label: "Possible outcomes", value: "Affirm, vary, set aside or remit", icon: ICON.scale },
  ],
  checkedAgainst: "the Administrative Review Tribunal, Home Affairs and the Migration Act",
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "Your options after a decision, side by side",
    highlight: "side by side",
    subtitle: "The Tribunal, the courts and the Minister each look at something different, with different time limits and costs.",
    rows: [
      { label: "What it looks at", icon: ICON.magnifyingGlass },
      { label: "Time limit", icon: ICON.clock },
      { label: "Fee", icon: ICON.currencyDollar },
      { label: "New evidence", icon: ICON.documentText },
      { label: "Possible outcomes", icon: ICON.scale },
      { label: "Your bridging visa", icon: ICON.shieldCheck },
    ],
    columns: [
      {
        page: "art-review-of-visa-refusal",
        name: "ART review of a refusal",
        tagline: "Merits review by the Tribunal",
        values: [
          "The facts and the law afresh: the Tribunal decides again",
          "Usually 28 days after you're notified (14 in detention): check your letter",
          "A$3,727; a 50% reduction for financial hardship",
          "Yes, including evidence Home Affairs never saw",
          "Affirm, vary, set aside, or remit to Home Affairs",
          "A Bridging visa A usually continues; it ends 35 days after an affirmed refusal",
        ],
        bestFor: "Refusals your decision letter says the Tribunal can review",
      },
      {
        page: "art-review-of-visa-cancellation",
        name: "ART review of a cancellation",
        tagline: "Merits review, expedited by the Tribunal",
        values: [
          "Whether the ground exists, and whether the visa should be cancelled",
          "Usually 28 days (14 in detention, 9 for character): check your notice",
          "A$3,727; A$1,195 for character cancellations",
          "Yes: on the ground, your compliance, your ties and hardship",
          "Cancellation set aside (visa restored) or affirmed",
          "Ends with the visa: apply for a Bridging visa E straight away",
        ],
        bestFor: "Visas cancelled in Australia under section 109, 116 or 140",
      },
      {
        page: "judicial-review-of-migration-decisions",
        name: "Judicial review",
        tagline: "A court checks for legal error",
        values: [
          "Only legal (jurisdictional) error, not the merits",
          "35 days from the decision date; the court may extend it in some cases",
          "A$4,180 to file, and usually the Minister's costs if you lose",
          "No new facts, unless they go to whether there was an error",
          "Decision set aside and sent back, or the application dismissed",
          "Apply by webform; a Bridging visa A ends 28 days after you lose",
        ],
        bestFor: "A Tribunal decision you believe involved a legal error",
      },
      {
        page: "ministerial-intervention",
        name: "Ministerial intervention",
        tagline: "A request to the Minister personally",
        values: [
          "Whether a more favourable decision is in the public interest",
          "Only after a Tribunal decision; the Minister isn't bound by any timeframe",
          "A$0: no charge for a request",
          "Yes: give everything at the start, matched to the referral criteria",
          "The Minister may substitute a better decision, or not consider it",
          "None from the request: stay lawful yourself, often on a Bridging visa E",
        ],
        bestFor: "Compelling circumstances the visa rules couldn't take into account",
      },
    ],
    footnote:
      "Fees from 1 July 2026. Time limits are shown as the guides state them: always check the date in your decision letter or notice, and get advice early.",
  },
  actors: [
    {
      id: "you",
      name: "You (the review applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in time, pay the fee, stay lawful and answer every reason for the decision.",
      does: [
        "Apply within the time limit in your decision letter",
        "Pay A$3,727, or at least 50% with a [[fee-reduction|hardship request]]",
        "Keep your [[bva|bridging visa]], or apply for a [[bve|Bridging visa E]] after a cancellation",
        "Give evidence and attend the hearing",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Made the decision, and gives the Tribunal its documents.",
      does: [
        "Sends the decision letter or notice, saying whether review is available",
        "Gives the Tribunal the documents relevant to the review",
        "Usually doesn't appear at the hearing",
        "Finishes processing a refused application the Tribunal sends back",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Takes a fresh look at the facts and the law, and decides again.",
      does: [
        "Checks the application was made in time, with the fee",
        "Puts [[adverse|adverse information]] to you and invites your comment",
        "Holds a hearing by video, telephone or in person",
        "Affirms, varies, sets aside or [[remit|remits]] the decision",
      ],
    },
  ],
  flows: [
    {
      from: "homeaffairs",
      to: "you",
      label: "Refuses or cancels",
      detail: "Home Affairs sends a decision letter or cancellation notice. It says whether the ART can review the decision, who may apply and the time limit.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "You apply for review",
      detail: "You (or, for most offshore sponsored visas, your Australian sponsor) apply online or by form, and pay the fee before the deadline.",
    },
    {
      from: "homeaffairs",
      to: "tribunal",
      label: "Sends its documents",
      detail: "Home Affairs gives the Tribunal the documents relevant to the review. You can ask for a copy of what it gave.",
    },
    {
      from: "tribunal",
      to: "you",
      label: "Hearing invitation",
      detail: "The Tribunal puts any [[adverse|adverse information]] to you and invites you to a hearing, unless it can decide in your favour on the papers.",
    },
    {
      from: "tribunal",
      to: "homeaffairs",
      label: "Sends it back",
      detail: "If the Tribunal sets aside a refusal and [[remit|remits]] the application, Home Affairs finishes processing it. The remaining criteria still have to be met.",
    },
    {
      from: "tribunal",
      to: "you",
      label: "Written decision",
      detail: "You get the decision and its reasons in writing. If a cancellation is [[set-aside|set aside]], your visa is restored, if it hasn't expired in the meantime.",
    },
  ],
  journeyTitle: "From decision letter to Tribunal decision",
  journeyHighlight: "Tribunal decision",
  stages: [
    {
      id: "letter",
      short: "Letter",
      title: "Read your decision letter or notice",
      who: ["you", "homeaffairs"],
      description:
        "It says whether the ART can review the decision, who may apply and the time limit. The clock runs from [[deemed|deemed receipt]], not the date the letter was signed.",
      points: [
        "Check the time limit in your decision letter",
        "Usually 28 days after you're notified, or 14 days in immigration detention",
        "Character decisions made while you were in Australia: 9 days",
        "The Tribunal can't extend it",
      ],
      youHold: "Your deadline, the right applicant and the fee",
      icon: ICON.envelopeOpen,
    },
    {
      id: "lawful",
      short: "Stay lawful",
      title: "Keep yourself lawful",
      who: ["you", "homeaffairs"],
      description:
        "After a refusal, a [[bva|Bridging visa A]] from your application usually stays in effect during the review. A cancellation ends your visa, and any linked bridging visa, at once.",
      points: [
        "Cancelled? Apply for a [[bve|Bridging visa E]] straight away",
        "Applying to the Tribunal doesn't by itself give you a visa",
        "A Bridging visa E grant letter says whether you can work",
        "Leaving Australia usually ends your bridging visa, and can affect the review",
      ],
      youHold: "A bridging visa in effect, or applied for",
      cost: "No charge for a Bridging visa A or E",
      icon: ICON.shieldCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply and pay the fee before the deadline",
      who: ["you", "tribunal"],
      description: "Apply online, by form M1 (M2 from immigration detention), or in writing. Without the fee, the application isn't properly made.",
      points: [
        "A$3,727 for most migration decisions; A$1,195 for character decisions",
        "Financial hardship: pay at least 50% by the deadline and ask for a [[fee-reduction|fee reduction]]",
        "Onshore refusals: you must be in Australia when you apply",
        "Most offshore sponsored visas: your Australian sponsor or nominator applies",
      ],
      youHold: "A valid review application and a case number",
      cost: "A$3,727, paid by the review applicant",
      icon: ICON.paperAirplane,
    },
    {
      id: "file",
      short: "File",
      title: "Get the Department's documents",
      who: ["homeaffairs", "you"],
      description: "Home Affairs gives the Tribunal the documents relevant to the review. Ask early for a copy, so you can see what the Tribunal has.",
      points: ["Ask Home Affairs for the written material it gave the Tribunal", "List every reason for the decision that you need to answer"],
      youHold: "A copy of the review file to work from",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Answer every reason with evidence",
      who: ["you"],
      description:
        "Upload documents through the ART online portal at any time before the decision. The Tribunal can consider evidence Home Affairs never saw.",
      points: [
        "Refusals: criteria assessed at the time of decision are judged as at the Tribunal's decision",
        "Cancellations: show the ground doesn't exist, then why the visa shouldn't be cancelled",
        "Reply to any [[s359a|section 359A letter]] within the time it gives",
        "Can you now clearly show a refused criterion is met? Ask for an [[expedited|expedited decision]]",
      ],
      youHold: "Evidence and submissions on the Tribunal file",
      icon: ICON.documentText,
    },
    {
      id: "hearing",
      short: "Hearing",
      title: "Attend the hearing",
      who: ["tribunal", "you"],
      description: "A Tribunal member asks the questions. You give evidence on oath or affirmation, and witnesses you nominate can give evidence too.",
      points: [
        "By video, telephone or in person",
        "Home Affairs doesn't usually appear",
        "Interpreters are provided free of charge",
        "If you don't attend, the Tribunal can decide without you or dismiss the application",
      ],
      youHold: "Your evidence given in person to the member",
      icon: ICON.chatBubbleLeftRight,
    },
    {
      id: "decision",
      short: "Decision",
      title: "The Tribunal decides",
      who: ["tribunal"],
      description:
        "You get a written decision with reasons. The Tribunal can [[affirm|affirm]] the decision, vary it, [[set-aside|set it aside]] and substitute a new one, or [[remit|remit]] a refused application to Home Affairs.",
      points: [
        "It can't grant a visa itself",
        "A cancellation set aside restores the visa, if it hasn't expired",
        "A$3,727 fee: if set aside, varied or remitted, 50% of what you paid is refunded",
      ],
      youHold: "A written Tribunal decision",
      icon: ICON.scale,
    },
    {
      id: "next",
      short: "Next",
      title: "Act on the outcome",
      who: ["homeaffairs", "you"],
      description:
        "If the case is sent back, Home Affairs reconsiders it in line with the Tribunal's directions. If the decision is affirmed, plan your next step quickly.",
      points: [
        "Affirmed refusal: a [[bva|Bridging visa A]] granted since 19 November 2016 ends 35 days after the decision",
        "[[jr|Judicial review]] must be filed within 35 days of the decision",
        "A [[mi|ministerial intervention]] request becomes possible",
        "In Australia without a substantive visa, the [[s48|section 48 bar]] limits what you can apply for",
      ],
      youHold: "A visa decision, or a plan for the next step",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Can the ART review your decision?",
    highlight: "review your decision",
    ok: {
      title: "Review looks open to you",
      body: "Nothing in your answers rules out a review. Next: confirm the time limit in your decision letter, lodge, pay the fee and start on your evidence.",
    },
    todo: {
      title: "Possible, with things to sort first",
      body: "None of these rules you out on its own, but each needs attention before your deadline.",
    },
    stop: {
      title: "The Tribunal may not be the way forward",
      body: "At least one answer suggests the Tribunal can't review this decision, or that the time limit has passed. The notes below explain why and what may still be open.",
    },
    disclaimer:
      "A general self-check, not legal advice. Your decision letter and your full circumstances decide what's available, so check the time limit in your letter and get advice early.",
  },
  quiz: [
    {
      id: "reviewable",
      topic: "Review rights",
      question: "What does your decision letter or notice say about review?",
      help: "It states whether the decision can be reviewed, who may apply and the time limit.",
      options: [
        {
          value: "art",
          label: "I can apply to the Administrative Review Tribunal (ART)",
          status: "ok",
          note: "The decision is reviewable. The letter also tells you who may apply and the time limit.",
        },
        {
          value: "character",
          label: "It was decided on character grounds (section 501)",
          status: "todo",
          note: "Character decisions follow a separate track. If you were in Australia when it was decided, the time limit is 9 days and the fee is A$1,195.",
          link: { label: "Character decisions", href: "/visas/appeals-and-review/character-test-section-501" },
        },
        {
          value: "minister",
          label: "The Minister made the decision personally",
          status: "stop",
          note: "The Tribunal can't review decisions made personally by the Minister. They can only be challenged by [[jr|judicial review]] in the courts.",
          link: { label: "Judicial review", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
        },
        {
          value: "none",
          label: "It says the Tribunal can't review it",
          status: "stop",
          note: "Then merits review isn't available. The options finder on this page shows what may still be open.",
          link: { label: "Open the options finder", href: "#finder" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Find the letter and read what it says about review. If it isn't clear, get advice early: the time limit may already be running.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "decision",
      topic: "The decision",
      question: "Which describes the decision?",
      options: [
        {
          value: "refused-onshore",
          label: "A visa I applied for in Australia was refused",
          status: "ok",
          note: "You apply for review yourself, and you must be in Australia when you lodge it.",
        },
        {
          value: "refused-offshore",
          label: "A visa applied for outside Australia, with an Australian sponsor, was refused",
          status: "todo",
          note: "For most offshore sponsored visas, such as partner, parent or child visas, the Australian sponsor, nominator or relative applies to the Tribunal, not the person overseas. The letter says who may apply.",
        },
        {
          value: "cancelled",
          label: "My visa was cancelled while I was in Australia",
          status: "todo",
          note: "A cancellation under section 109, 116 or 140 made in Australia can usually be reviewed. It takes effect at once, so you also need a [[bve|Bridging visa E]] to stay lawful.",
          link: { label: "ART review of a cancellation", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
        },
        {
          value: "airport",
          label: "My visa was cancelled at the airport, when I arrived",
          status: "stop",
          note: "Cancellations in immigration clearance can't be reviewed by the Tribunal and lead to removal. Get advice straight away.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
        {
          value: "overseas",
          label: "My visa was cancelled while I was overseas",
          status: "todo",
          note: "You're told after a section 128 cancellation, and can ask Home Affairs to revoke it within the time stated in the notice. Whether the Tribunal can review the outcome depends on the type of decision.",
        },
      ],
    },
    {
      id: "time",
      topic: "Time limit",
      question: "Is your time limit still open?",
      help: "It runs from when you're taken to have received the letter, not the date it was signed. Check the date in your letter.",
      options: [
        {
          value: "open",
          label: "Yes, with time to spare",
          status: "ok",
          note: "Lodge early anyway. The Tribunal can't extend the time limit, and the fee must be paid by the deadline too.",
        },
        {
          value: "close",
          label: "Yes, but it's very close",
          status: "todo",
          note: "Lodge now, online if you can, and pay the fee (or at least 50% with a hardship request). You can upload evidence at any time before the decision.",
        },
        {
          value: "passed",
          label: "No, it has passed",
          status: "stop",
          note: "The Tribunal can't extend the time limit, so it would have to find it has no jurisdiction. Get advice promptly about any options left.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
        {
          value: "unsure",
          label: "I'm not sure when it started",
          status: "todo",
          note: "Check the time limit in your decision letter. Under the [[deemed|deemed-receipt]] rules, an emailed decision is usually taken to be received at the end of the day it was sent. A posted one is taken to be received some days later.",
        },
      ],
    },
    {
      id: "status",
      topic: "Your visa now",
      question: "Which visa are you on right now?",
      options: [
        {
          value: "bva",
          label: "A Bridging visa A from the refused application",
          status: "ok",
          note: "It usually stays in effect while the review is on foot. If the refusal is affirmed, one granted since 19 November 2016 ends 35 days after the decision.",
        },
        {
          value: "none",
          label: "None: my visa was cancelled",
          status: "todo",
          note: "Cancellation makes you unlawful unless you hold another visa, and applying to the Tribunal doesn't give you one. Apply for a [[bve|Bridging visa E]] on the basis that you're seeking review.",
        },
        {
          value: "outside",
          label: "I'm outside Australia",
          status: "todo",
          note: "For a visa applied for in Australia, you must be in Australia when the review is lodged. For most offshore sponsored visas, your Australian sponsor applies instead.",
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check VEVO with your passport details. It shows the visa in effect today, its conditions and any date you must leave by.",
        },
      ],
    },
    {
      id: "fee",
      topic: "Fee",
      question: "Can you pay the fee before the deadline?",
      help: "A$3,727 for most migration decisions, or A$1,195 for character decisions.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Pay it before your deadline. For the A$3,727 fee, 50% of what you paid is refunded if the Tribunal sets aside, varies or remits the decision.",
        },
        {
          value: "part",
          label: "Only part of it",
          status: "todo",
          note: "If paying the A$3,727 fee would cause financial hardship, pay at least 50% by the deadline. Then lodge the [[fee-reduction|fee-reduction]] form, with evidence, before the review is finalised.",
        },
        {
          value: "no",
          label: "Not at the moment",
          status: "stop",
          note: "An application without the required fee isn't properly made. Even with a hardship request, at least 50% must be paid by the deadline. Get advice quickly.",
        },
      ],
    },
    {
      id: "evidence",
      topic: "Your evidence",
      question: "Can you answer the reasons for the decision with evidence?",
      options: [
        {
          value: "yes",
          label: "Yes, I have new or better evidence",
          status: "ok",
          note: "The Tribunal can consider documents Home Affairs never saw. For a refusal, evidence that you now meet a criterion assessed at the time of decision can succeed.",
        },
        {
          value: "partly",
          label: "Partly",
          status: "todo",
          note: "Work through every reason one by one. Get the Department's documents early, so you can see what the Tribunal has.",
        },
        {
          value: "application",
          label: "It turns on something I had to meet when I applied",
          status: "todo",
          note: "Criteria that had to be met when you applied can't be fixed later. The review would need to show you met it then.",
        },
        {
          value: "breach",
          label: "It's a cancellation, and I need to explain a breach",
          status: "todo",
          note: "First, whether the ground exists. Then why the visa shouldn't be cancelled: your compliance history, your ties to Australia and the hardship to you and your family.",
        },
        {
          value: "unsure",
          label: "I'm not sure why it was decided",
          status: "todo",
          note: "The decision letter and decision record set out the reasons. Get advice on which of them new evidence can answer.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Did the decision affect family members too?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to arrange." },
        {
          value: "refused",
          label: "Yes, they were refused in the same application",
          status: "todo",
          note: "They usually have their own review rights. Name them in the same review, or tell the Tribunal within 14 days that you want the applications heard together.",
        },
        {
          value: "cancelled",
          label: "Yes, their visas were cancelled because mine was",
          status: "todo",
          note: "Visas granted because of yours are cancelled with it under section 140. Each person needs their own review application, lodged at the same time.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can ask the Tribunal for more time to apply.",
      fact: "No. The Tribunal can't extend the time limit: usually 28 days after you're notified, or 14 days in immigration detention. Check the time limit in your decision letter and lodge early.",
    },
    {
      myth: "The Tribunal only looks at what Home Affairs had.",
      fact: "No. It takes a fresh look and can consider new evidence. Criteria assessed at the time of decision are judged as at the Tribunal's decision. Criteria you had to meet when you applied can't be fixed later.",
    },
    {
      myth: "I keep my visa while the Tribunal reviews my cancellation.",
      fact: "No. A cancellation takes effect at once, and a bridging visa linked to the cancelled visa ends with it. Apply for a Bridging visa E so you stay lawful during the review.",
    },
    {
      myth: "If I win, the Tribunal gives me the visa.",
      fact: "It can't grant a visa itself. It can set a refusal aside and substitute a new decision, or send the application back to Home Affairs, which then checks the remaining criteria. A cancellation set aside restores the visa.",
    },
    {
      myth: "I can lodge now and pay the fee later.",
      fact: "The fee must be paid before the deadline, or the application isn't properly made. With a hardship request you still pay at least 50% by the deadline.",
    },
    {
      myth: "Home Affairs will argue against me at the hearing.",
      fact: "Usually not. In migration reviews the Minister is a non-participating party and doesn't appear or make submissions unless the Tribunal orders it. A Tribunal member asks the questions.",
    },
    {
      myth: "If the Tribunal says no, a court can look at the facts again.",
      fact: "No. Judicial review checks only for legal (jurisdictional) error: the court can't reconsider the facts or grant a visa. You file within 35 days of the decision, and you usually pay the Minister's costs if you lose.",
    },
    {
      myth: "Asking the Minister to intervene keeps me lawful while I wait.",
      fact: "It doesn't. A request isn't a visa application and gives you no bridging visa. Stay lawful yourself, usually on a Bridging visa E: a request from someone who could have applied for one, but didn't, isn't referred.",
    },
  ],
  glossary: [
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The independent tribunal that reviews many visa decisions on their merits. It replaced the Administrative Appeals Tribunal (AAT) on 14 October 2024.",
    },
    {
      id: "merits",
      term: "Merits review",
      definition: "A fresh look at the facts and the law by the Tribunal, which can make the decision again. Judicial review is different: a court checks only for legal errors.",
    },
    {
      id: "deemed",
      term: "Deemed receipt",
      definition:
        "The day the law treats you as having received a decision: for an email, usually the end of the day it was sent; for a posted letter, some days after its date. Your time limit is counted from it.",
    },
    {
      id: "fee-reduction",
      term: "Fee reduction",
      definition: "If paying the A$3,727 fee would cause financial hardship, you can ask for a 50% reduction. You still pay at least half by the deadline and lodge the form with evidence.",
    },
    {
      id: "adverse",
      term: "Adverse information",
      definition: "Information a decision-maker may rely on to decide against you. Home Affairs and the Tribunal must usually give you particulars of it and invite your comment.",
    },
    {
      id: "s359a",
      term: "Section 359A letter",
      definition: "A letter from the Tribunal giving you particulars of adverse information it may rely on and inviting your comment. Answer it within the time it sets.",
    },
    {
      id: "expedited",
      term: "Expedited decision",
      definition:
        "A decision the Tribunal prioritises. Detention, cancellation and court-remittal cases are expedited automatically, and you can ask if you can now clearly show a refused criterion is met.",
    },
    { id: "affirm", term: "Affirm", definition: "Agree with the original decision. If the Tribunal affirms a refusal or a cancellation, it stands." },
    {
      id: "set-aside",
      term: "Set aside",
      definition: "Overturn the original decision. The Tribunal can then substitute its own decision, such as a decision not to cancel your visa.",
    },
    {
      id: "remit",
      term: "Remit",
      definition: "Send a refused application back to Home Affairs to decide again, following the Tribunal's directions. The remaining criteria still have to be met.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition:
        "A temporary visa that keeps you lawful while an application made in Australia is decided. It stays in effect during the review and usually ends 35 days after a decision affirming the refusal.",
    },
    {
      id: "bve",
      term: "Bridging visa E",
      definition:
        "A free bridging visa for people who are unlawful, for example after a cancellation, so they can seek review, apply for a visa or leave. It often has reporting and no-work conditions.",
    },
    {
      id: "jr",
      term: "Judicial review",
      definition: "A court checking whether a decision involved a legal (jurisdictional) error. It doesn't reconsider the facts or grant a visa. Apply within 35 days of the decision.",
    },
    {
      id: "jurisdictional",
      term: "Jurisdictional error",
      definition: "A legal error that means a decision wasn't made lawfully, such as applying the wrong legal test or denying procedural fairness. It's what judicial review looks for.",
    },
    {
      id: "mi",
      term: "Ministerial intervention",
      definition: "A request asking the Minister to replace the Tribunal's decision with a more favourable one, in the public interest. The Minister doesn't have to consider it.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a refusal or cancellation in Australia, it limits you to certain prescribed visas while you remain here without a substantive visa.",
    },
    {
      id: "noicc",
      term: "Notice of intention to cancel",
      full: "Notice of Intention to Consider Cancellation",
      definition: "The notice Home Affairs usually gives before cancelling a visa held by someone in Australia. It sets out the ground and invites you to respond within a stated time.",
    },
    {
      id: "nonparticipating",
      term: "Non-participating party",
      definition: "In migration reviews the Minister is a party but doesn't appear or make submissions unless the Tribunal orders it.",
    },
  ],
  cta: {
    title: "Refused or cancelled? Let's look at your options together",
    subtitle: "We read your decision letter with you, confirm the time limit and who should apply, and prepare the review application and your evidence.",
  },
  verifiedExtras: [
    {
      fact: "A character refusal or cancellation under section 501 made while you were in Australia has a 9-day time limit for ART review, and the ART fee is A$1,195.",
      source: "/visas/appeals-and-review/character-test-section-501",
    },
  ],
  finder: reviewFinder,
  fees: {
    variantLabel: "Which decision is being reviewed?",
    variants: [
      {
        id: "migration",
        label: "Most migration decisions",
        hint: "Visa refusals, and cancellations under section 109, 116 or 140",
        primary: [{ label: "ART application fee", amount: 3727 }],
      },
      {
        id: "character",
        label: "A character decision (section 501)",
        hint: "The standard ART fee applies to character refusals and cancellations",
        primary: [{ label: "ART application fee, character decision", amount: 1195 }],
      },
      {
        id: "character-reduced",
        label: "A character decision, at the reduced fee",
        hint: "In detention, with legal aid or a concession card, under 18, or in financial hardship",
        primary: [{ label: "Reduced ART fee, character decision", amount: 100 }],
      },
      {
        id: "detention",
        label: "A bridging visa decision that led to detention",
        hint: "There's no fee to review it",
        primary: [{ label: "ART application fee", amount: 0 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 0,
    notIncluded:
      "Not included: representation, translations, summons and transcripts, and court fees if you later seek judicial review (A$4,180 to file).",
    notes: [
      "Pay the fee before your deadline: an application without it isn't properly made.",
      "Financial hardship (A$3,727 fee): you can ask for a 50% reduction. Pay at least 50% of the fee by the deadline, then lodge the fee-reduction form, with evidence, before the review is finalised.",
      "Refund (A$3,727 fee): if the Tribunal sets aside or varies the decision, or remits it to Home Affairs, 50% of the fee you paid is refunded. There's no refund if the decision is affirmed.",
    ],
    confirmUrl: "https://www.art.gov.au/help-and-resources/fees",
    confirmLabel: "Administrative Review Tribunal fees page",
  },
};
