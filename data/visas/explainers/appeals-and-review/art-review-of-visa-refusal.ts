import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { reviewFinder } from "./review-finder";

// Interactive explainer for "ART review of a visa refusal". Every fact comes
// from data/visas/appeals-and-review.ts (checked against the ART, Home
// Affairs and the Migration Act and Regulations on 12 October 2026). Time
// limits appear only as the page states them, always with a prompt to check
// the decision letter; no dates are calculated.

export const artReviewOfVisaRefusalExplainer: VisaExplainer = {
  slug: "art-review-of-visa-refusal",
  factsAsAt: "12 October 2026",
  oneLiner:
    "If Home Affairs refuses your visa, you may be able to ask the Administrative Review Tribunal (ART) for a fresh look, and it can change the decision or send it back: strict time limits apply.",
  bigIdeas: [
    {
      title: "A fresh look at your case",
      body: "The Tribunal looks at the facts and the law again, and can consider evidence Home Affairs never saw.",
      icon: ICON.magnifyingGlass,
    },
    {
      title: "The time limit is strict",
      body: "Usually 28 days after you're notified (14 in detention), with no extensions. Check the time limit in your decision letter.",
      icon: ICON.clock,
    },
    {
      title: "It can't grant the visa itself",
      body: "It can affirm, vary or set aside the refusal, or send the case back to Home Affairs to finish.",
      icon: ICON.scale,
    },
  ],
  heroCard: [
    { label: "ART fee", value: "A$3,727 (50% reduction for financial hardship)", icon: ICON.currencyDollar },
    { label: "Time limit", value: "Usually 28 days (14 in detention): check your letter", icon: ICON.clock },
    { label: "Who applies", value: "You, or your Australian sponsor or nominator", icon: ICON.user },
    { label: "Where you must be", value: "In Australia when you lodge (onshore refusals)", icon: ICON.mapPin },
    { label: "Bridging visa", value: "Usually continues during the review", icon: ICON.shieldCheck },
    { label: "Possible outcomes", value: "Affirm, vary, set aside or remit", icon: ICON.scale },
  ],
  checkedAgainst: "the Administrative Review Tribunal, Home Affairs and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the review applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in time, pay the fee and answer every reason for refusal.",
      does: [
        "Apply within the time limit in your decision letter",
        "Pay A$3,727, or at least 50% with a [[fee-reduction|hardship request]]",
        "Give evidence and attend the hearing",
        "Tell the Tribunal and Home Affairs if your address, representative or family circumstances change",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Refused the visa, and gives the Tribunal its documents.",
      does: [
        "Sends the decision letter, saying whether review is available",
        "Gives the Tribunal the documents relevant to the review",
        "Usually doesn't appear at the hearing",
        "Finishes processing a case the Tribunal sends back",
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
      label: "Refuses your visa",
      detail: "Home Affairs sends a decision letter. It says whether the ART can review the decision, who may apply and the time limit.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "You apply for review",
      detail: "You (or, for most offshore sponsored visas, your Australian sponsor) apply online or by form M1 and pay the fee before the deadline.",
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
      detail: "If the Tribunal sets aside the refusal and [[remit|remits]] the case, Home Affairs finishes processing it. The remaining criteria still have to be met.",
    },
  ],
  journeyTitle: "From refusal letter to Tribunal decision",
  journeyHighlight: "Tribunal decision",
  stages: [
    {
      id: "letter",
      short: "Letter",
      title: "Read your decision letter",
      who: ["you", "homeaffairs"],
      description:
        "It says whether the ART can review the decision, who may apply and the time limit. The clock runs from [[deemed|deemed receipt]], not the date the letter was signed.",
      points: [
        "Check the time limit in your decision letter",
        "Usually 28 days after you're notified, or 14 days in immigration detention",
        "The Tribunal can't extend it",
        "Decisions made personally by the Minister can't go to the Tribunal",
      ],
      youHold: "Your deadline, the right applicant and the fee",
      icon: ICON.envelopeOpen,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply and pay the fee before the deadline",
      who: ["you", "tribunal"],
      description:
        "Apply online, by form M1 (M2 from immigration detention), or in writing. Without the fee, the application isn't properly made.",
      points: [
        "A$3,727 for most migration decisions",
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
      description:
        "Home Affairs gives the Tribunal the documents relevant to the review. Ask early for a copy, so you can see what the Tribunal has.",
      points: ["Ask Home Affairs for the written material it gave the Tribunal", "List every reason for refusal you need to answer"],
      youHold: "A copy of the review file to work from",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Answer every reason for refusal",
      who: ["you"],
      description:
        "Upload documents through the ART online portal at any time before the decision. The Tribunal can consider evidence Home Affairs never saw.",
      points: [
        "Criteria assessed at the time of decision are judged as at the Tribunal's decision",
        "Criteria you had to meet when you applied can't be fixed later",
        "If you can now clearly show a refused criterion is met, you can ask for an [[expedited|expedited decision]]",
        "Reply to any [[s359a|section 359A letter]] within the time it gives",
      ],
      youHold: "Evidence and submissions on the Tribunal file",
      icon: ICON.documentText,
    },
    {
      id: "hearing",
      short: "Hearing",
      title: "Attend the hearing",
      who: ["tribunal", "you"],
      description:
        "A Tribunal member asks the questions. You give evidence on oath or affirmation, and witnesses you nominate can give evidence too.",
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
        "You get a written decision with reasons. The Tribunal can [[affirm|affirm]] the refusal, vary it, [[set-aside|set it aside]] and substitute a new decision, or [[remit|remit]] the case to Home Affairs.",
      points: [
        "It can't grant the visa itself",
        "Set aside, varied or remitted: 50% of the fee you paid is refunded",
        "Affirmed: no refund",
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
        "If the case is sent back, Home Affairs reconsiders it in line with the Tribunal's directions. If the refusal is affirmed, plan your next step quickly.",
      points: [
        "Affirmed: a [[bva|Bridging visa A]] granted since 19 November 2016 ends 35 days after the decision",
        "[[jr|Judicial review]] must be filed within 35 days",
        "A [[mi|ministerial intervention]] request becomes possible",
        "In Australia without a substantive visa, the [[s48|section 48 bar]] limits what you can apply for",
      ],
      youHold: "A visa decision, or a plan for the next step",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Can you apply to the ART?",
    highlight: "apply to the ART",
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
      body: "At least one answer suggests the Tribunal can't review this decision. The notes below explain why and what may still be open.",
    },
    disclaimer:
      "A general self-check, not legal advice. Your decision letter and your full circumstances decide what's available, so check the time limit in your decision letter.",
  },
  quiz: [
    {
      id: "reviewable",
      topic: "Review rights",
      question: "What does your decision letter say about review?",
      help: "The letter states whether the decision can be reviewed, who may apply and the time limit.",
      options: [
        {
          value: "art",
          label: "I can apply to the Administrative Review Tribunal (ART)",
          status: "ok",
          note: "The letter confirms the decision is reviewable. It also tells you who may apply and the time limit.",
        },
        {
          value: "character",
          label: "It was refused on character grounds (section 501)",
          status: "todo",
          note: "Character refusals follow a separate track. If you were in Australia when it was decided, the time limit is 9 days and the fee is A$1,195.",
          link: { label: "Character decisions", href: "/visas/appeals-and-review/character-test-section-501" },
        },
        {
          value: "minister",
          label: "The Minister made the decision personally",
          status: "stop",
          note: "The Tribunal can't review decisions made personally by the Minister. They can only be challenged by judicial review in the courts.",
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
          note: "Find the decision letter and read what it says about review. If it isn't clear, get advice early: the time limit may already be running.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "time",
      topic: "Time limit",
      question: "Is your time limit still open?",
      help: "It runs from when you're taken to have received the letter, not the date it was signed.",
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
          note: "Check the time limit in your decision letter. Under the deemed-receipt rules, an emailed decision is usually taken to be received at the end of the day it was sent, and a posted one some days later.",
        },
      ],
    },
    {
      id: "where",
      topic: "Who applies",
      question: "Which describes your situation?",
      options: [
        {
          value: "onshore",
          label: "The visa was applied for in Australia, and I'm still here",
          status: "ok",
          note: "You apply yourself, and you must be in Australia when you lodge. A Bridging visa A from the application usually stays in effect during the review.",
        },
        {
          value: "detention",
          label: "I'm in immigration detention",
          status: "todo",
          note: "The time limit is 14 days, you use form M2, and the review is expedited automatically. Check the time limit in your decision letter.",
        },
        {
          value: "sponsor",
          label: "The visa was applied for outside Australia, with an Australian sponsor or nominator",
          status: "todo",
          note: "For most offshore sponsored visas, the Australian sponsor, nominator or relative applies to the Tribunal, not the person overseas. The letter says who may apply.",
        },
        {
          value: "left",
          label: "The visa was applied for in Australia, but I've since left",
          status: "stop",
          note: "For a visa applied for in Australia, you must be in Australia when the review is lodged. Get advice before doing anything else.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
        {
          value: "employer",
          label: "My business's nomination or sponsorship was refused",
          status: "ok",
          note: "The employer applies for review of a nomination or sponsorship refusal.",
        },
      ],
    },
    {
      id: "fee",
      topic: "Fee",
      question: "Can you pay the A$3,727 fee before the deadline?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Pay it before your deadline. If the Tribunal sets aside, varies or remits the decision, 50% of the fee you paid is refunded.",
        },
        {
          value: "part",
          label: "Only part of it",
          status: "todo",
          note: "If paying would cause financial hardship, pay at least 50% by the deadline. Then lodge the fee-reduction form, with evidence, before the review is finalised.",
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
      id: "reasons",
      topic: "Your evidence",
      question: "Can you answer the reasons for refusal with evidence?",
      options: [
        {
          value: "yes",
          label: "Yes, I have new or better evidence",
          status: "ok",
          note: "The Tribunal can consider documents Home Affairs never saw. Evidence that you now meet a criterion assessed at the time of decision can succeed.",
        },
        {
          value: "partly",
          label: "Partly",
          status: "todo",
          note: "Work through every reason one by one. Get the Department's documents early, so you can see what the Tribunal has.",
        },
        {
          value: "application",
          label: "The refusal turns on something I had to meet when I applied",
          status: "todo",
          note: "Criteria that had to be met when you applied can't be fixed later. The review would need to show you met it then.",
        },
        {
          value: "unsure",
          label: "I'm not sure why it was refused",
          status: "todo",
          note: "The decision letter and decision record set out the reasons. Get advice on which of them new evidence can answer.",
        },
      ],
    },
    {
      id: "hearing",
      topic: "Hearing",
      question: "Will you be able to take part in a hearing?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Hearings can be by video, telephone or in person. You give evidence on oath or affirmation, and your witnesses can too.",
        },
        { value: "interpreter", label: "Yes, with an interpreter", status: "ok", note: "The Tribunal arranges interpreters free of charge." },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "If you don't attend, the Tribunal can decide without you or dismiss the application, and reinstatement must be sought quickly.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Were family members refused in the same application?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to arrange." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "They usually have their own review rights. Name them in the same review, or tell the Tribunal within 14 days that you want the applications heard together.",
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
      myth: "Home Affairs will argue against me at the hearing.",
      fact: "Usually not. In migration reviews the Minister is a non-participating party and doesn't appear or make submissions unless the Tribunal orders it. A Tribunal member asks the questions.",
    },
    {
      myth: "If I win, the Tribunal gives me the visa.",
      fact: "It can't grant the visa itself. It can set the refusal aside and substitute a new decision, or send the case back to Home Affairs. Home Affairs then checks the remaining criteria.",
    },
    {
      myth: "I can lodge now and pay the fee later.",
      fact: "The fee must be paid before the deadline, or the application isn't properly made. With a hardship request you still pay at least 50% by the deadline.",
    },
    {
      myth: "Applying for review means losing my bridging visa.",
      fact: "A Bridging visa A granted with an application made in Australia stays in effect while the review is on foot. If the refusal is affirmed, one granted since 19 November 2016 ends 35 days after the decision.",
    },
    {
      myth: "If I lose, I can appeal to another tribunal.",
      fact: "There's no second merits review, and the Guidance and Appeals Panel isn't available for migration decisions. You can seek judicial review within 35 days, or ask the Minister to intervene.",
    },
  ],
  glossary: [
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The independent tribunal that reviews many visa decisions on their merits. It replaced the former Administrative Appeals Tribunal (AAT).",
    },
    {
      id: "merits",
      term: "Merits review",
      definition: "A fresh look at the facts and the law by the Tribunal, which can make the decision again. Judicial review is different: a court checks only for legal errors.",
    },
    {
      id: "part5",
      term: "Part 5-reviewable decision",
      definition: "A decision the Migration Act lets the Tribunal review, such as most refusals of visas applied for in Australia. Your decision letter says whether yours is one.",
    },
    {
      id: "deemed",
      term: "Deemed receipt",
      definition: "The day the law treats you as having received a decision: for an email, usually the end of the day it was sent; for a posted letter, some days after its date. Your time limit is counted from it, not from the date the letter was signed.",
    },
    {
      id: "fee-reduction",
      term: "Fee reduction",
      definition: "If paying the A$3,727 fee would cause financial hardship, you can ask for a 50% reduction. You still pay at least half by the deadline and lodge the form with evidence.",
    },
    {
      id: "form-m1",
      term: "Form M1",
      definition: "The Tribunal's paper form for applying for review of a migration decision. People in immigration detention use form M2. You can also apply online.",
    },
    {
      id: "adverse",
      term: "Adverse information",
      definition: "Information the Tribunal may rely on to decide against you. It must give you particulars of it and invite your comment.",
    },
    {
      id: "s359a",
      term: "Section 359A letter",
      definition: "A letter from the Tribunal giving you particulars of adverse information it may rely on and inviting your comment. Answer it within the time it sets.",
    },
    {
      id: "expedited",
      term: "Expedited decision",
      definition: "A decision the Tribunal prioritises. Detention, cancellation and court-remittal cases are expedited automatically, and you can ask if you can now clearly show a refused criterion is met.",
    },
    {
      id: "nonparticipating",
      term: "Non-participating party",
      definition: "In migration reviews the Minister is a party but doesn't appear or make submissions unless the Tribunal orders it.",
    },
    { id: "affirm", term: "Affirm", definition: "Agree with the original decision. If the Tribunal affirms a refusal, the refusal stands." },
    {
      id: "set-aside",
      term: "Set aside",
      definition: "Overturn the original decision. The Tribunal can then substitute its own decision, for example that you meet the disputed criterion.",
    },
    {
      id: "remit",
      term: "Remit",
      definition: "Send the case back to Home Affairs to decide again, following the Tribunal's directions. The remaining criteria still have to be met.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A temporary visa that keeps you lawful while an application made in Australia is decided. It stays in effect during the review and usually ends 35 days after a decision affirming the refusal.",
    },
    {
      id: "jr",
      term: "Judicial review",
      definition: "A court checking whether the Tribunal's decision involved a legal (jurisdictional) error. It doesn't reconsider the facts. Apply within 35 days of the decision.",
    },
    {
      id: "mi",
      term: "Ministerial intervention",
      definition: "A request asking the Minister to substitute a more favourable decision for the Tribunal's, under section 351. It becomes possible after the Tribunal decides.",
    },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a refusal in Australia, it limits you to certain prescribed visas while you remain here without a substantive visa.",
    },
    {
      id: "gap",
      term: "Guidance and Appeals Panel",
      definition: "An ART pathway that isn't available for migration decisions. There's no second merits review after the Tribunal decides.",
    },
  ],
  cta: {
    title: "Refused? Let's look at your options together",
    subtitle: "We read your decision letter with you, confirm the time limit and who should apply, and prepare the review application and your evidence.",
  },
  verifiedExtras: [
    {
      fact: "A character refusal or cancellation under section 501 made while you were in Australia has a 9-day time limit for ART review, and the ART fee is A$1,195.",
      source: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      fact: "The Administrative Review Tribunal (ART) replaced the Administrative Appeals Tribunal (AAT) on 14 October 2024.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
  ],
  finder: reviewFinder,
};
