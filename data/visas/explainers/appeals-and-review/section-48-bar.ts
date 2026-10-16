import type { FinderConfig, VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for "Section 48 bar". Every fact comes from
// data/visas/appeals-and-review.ts (checked against Home Affairs and the
// Migration Act and Regulations on 12 October 2026). Visa charges are the
// 1 July 2026 amounts stated on the page.

// Page-specific finder, built only from the section 48 page.
const section48Finder: FinderConfig = {
  id: "s48-finder",
  navLabel: "Does it apply?",
  eyebrow: "Section 48 finder",
  title: "Does section 48 stop you, and what can you still apply for?",
  highlight: "what can you still apply for",
  subtitle: "Two or three one-tap questions about your visa history. It shows the likely position; it doesn't decide your case.",
  start: "status",
  questions: [
    {
      id: "status",
      question: "Which describes you right now?",
      options: [
        { label: "In Australia, with only a bridging visa or no visa", next: "decision" },
        { label: "In Australia, holding a visa that isn't a bridging visa", next: "has-visa" },
        { label: "Outside Australia", next: "outside" },
      ],
    },
    {
      id: "decision",
      question: "Since you last entered Australia, has a visa been refused or cancelled?",
      help: "A refusal counts even while it's still under review at the ART.",
      options: [
        { label: "Yes, a visa I applied for was refused", next: "refused-kind" },
        { label: "Yes, a visa I held was cancelled", next: "cancelled-kind" },
        { label: "Yes, an application that included me as a family member was refused", next: "barred" },
        { label: "No", next: "not-barred" },
      ],
    },
    {
      id: "refused-kind",
      question: "What was refused?",
      options: [
        { label: "A visa, on character grounds (section 501, 501A or 501B)", next: "s501e" },
        { label: "A protection visa", next: "s48a" },
        { label: "Only a bridging visa", next: "bridging-only" },
        { label: "Any other visa", next: "barred" },
      ],
    },
    {
      id: "cancelled-kind",
      question: "Which section was it cancelled under?",
      help: "Your cancellation notice states the section used.",
      options: [
        { label: "Section 109, 116, 133A, 133C or 134", next: "barred" },
        { label: "Section 501 (character)", next: "s501e" },
        { label: "It was a protection visa that was cancelled", next: "s48a" },
        { label: "Another section, or I'm not sure", next: "check-notice" },
      ],
    },
  ],
  outcomes: [
    {
      id: "outside",
      title: "Section 48 doesn't follow you overseas",
      body: "The bar only covers decisions made since you last entered Australia. It doesn't apply to applications you make after re-entering on a new visa.",
      watch: [
        "A cancellation may trigger a 3-year exclusion under PIC 4013",
        "An unpaid debt can affect a visa to return",
        "Check the criteria of the visa you'd apply for from outside Australia",
      ],
      href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014",
    },
    {
      id: "has-visa",
      title: "The bar doesn't apply while you hold a substantive visa",
      body: "Section 48 only applies while you're in Australia without a substantive visa, that is, while you're unlawful or hold only a bridging visa. While you hold another visa, it doesn't limit a new application.",
      watch: [
        "Check again if your visa ends and you're left with only a bridging visa",
        "A partner visa applied for without a substantive visa also brings in Schedule 3 criteria",
      ],
      href: "/visas/appeals-and-review/section-48-bar",
    },
    {
      id: "not-barred",
      title: "No refusal or cancellation since you last entered",
      body: "Section 48 needs a refusal or cancellation since your last entry to Australia, so on these answers it doesn't apply. Without a substantive visa, though, Schedule 3 criteria can still apply to a partner visa.",
      watch: [
        "Count every refusal since your last entry, including any still under review at the ART",
        "A refused application that included you as a family member counts too",
      ],
      href: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      id: "bridging-only",
      title: "A bridging visa refusal doesn't trigger the bar",
      body: "Section 48 doesn't count refusals of bridging visas. If no other visa was refused or cancelled since you last entered, the bar doesn't apply.",
      watch: ["Without a substantive visa, Schedule 3 criteria can still apply to a partner visa"],
      href: "/visas/appeals-and-review/section-48-bar",
    },
    {
      id: "barred",
      title: "The section 48 bar applies",
      body: "While you remain in Australia without a substantive visa, you can apply only for the visas in regulation 2.12. They are partner (820/801), protection, child (802), medical treatment (602), resolution of status, territorial asylum, border, bridging, and the subclass 190, 491 and 494 skilled visas.",
      watch: [
        "A visa that isn't on the list is invalid: no bridging visa, and the charge is wasted",
        "Schedule 3 criteria still apply to a partner visa lodged without a substantive visa",
        "The skilled exemption is only about validity: nomination, points and the other criteria still apply",
        "The bar ends when you leave Australia or are granted a substantive visa",
      ],
      href: "/visas/appeals-and-review/section-48-bar",
    },
    {
      id: "s501e",
      title: "Section 501E applies, not section 48",
      body: "After a character refusal or cancellation, section 501E applies instead, and it's stricter. While you remain in Australia, the only visa you can apply for is a protection visa.",
      watch: ["Check the time limit in your decision letter for any review"],
      href: "/visas/appeals-and-review/character-test-section-501",
      tone: "stop",
    },
    {
      id: "s48a",
      title: "Section 48A: no further protection visa in Australia",
      body: "If your protection visa was refused or cancelled while you were in Australia, you can't make another protection visa application here. Only the Minister, acting personally under section 48B, can allow one; there's no right to request it and no review.",
      watch: [
        "Section 48 still limits any other application to the regulation 2.12 list",
        "The Minister doesn't have to consider a section 48B request",
      ],
      href: "/visas/appeals-and-review/section-48-bar",
    },
    {
      id: "check-notice",
      title: "Check the section in your cancellation notice",
      body: "Cancellations under section 109, 116, 133A, 133C or 134 trigger section 48. Character cancellations under section 501 trigger section 501E instead. Your notice states which section was used.",
      watch: ["Check the time limit in your decision letter for any review"],
      href: "/visas/appeals-and-review/section-48-bar",
    },
  ],
  footnote:
    "General information only, not legal advice. Your visa history and decision letters decide whether the bar applies. Any review has its own time limit, so check the time limit in your decision letter.",
};

export const section48BarExplainer: VisaExplainer = {
  slug: "section-48-bar",
  factsAsAt: "12 October 2026",
  oneLiner:
    "If a visa was refused or cancelled since you last entered Australia and you hold no substantive visa, section 48 limits you to a short list of visas until you leave.",
  bigIdeas: [
    {
      title: "It needs two things",
      body: "A refusal or cancellation since you last entered Australia, and no substantive visa now: only a bridging visa, or none.",
      icon: ICON.noSymbol,
    },
    {
      title: "Some visas stay open",
      body: "Partner, protection, child, medical treatment, bridging, and the 190, 491 and 494 skilled visas, among others.",
      icon: ICON.lockOpen,
    },
    {
      title: "Leaving ends it",
      body: "It only counts decisions since your last entry, so it doesn't follow you overseas. Check exclusion periods first.",
      icon: ICON.globeAsiaAustralia,
    },
  ],
  heroCard: [
    { label: "When it applies", value: "Refused or cancelled onshore, with no substantive visa", icon: ICON.noSymbol },
    { label: "Visas still open", value: "Partner, protection, child, 190, 491, 494 and more", icon: ICON.listBullet },
    { label: "Skilled exemption", value: "Since 13 November 2021", icon: ICON.calendarDays },
    { label: "How it ends", value: "Leave Australia, or be granted a substantive visa", icon: ICON.globeAsiaAustralia },
    { label: "Character decisions", value: "Section 501E: only a protection visa", icon: ICON.shieldExclamation },
    { label: "Fee", value: "No separate fee", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Migration Act 1958 and the Migration Regulations 1994",
  actors: [
    {
      id: "you",
      name: "You (the visa applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Check whether the bar applies, and choose a visa that's still open.",
      does: [
        "Check your visa status and the dates of any refusal or cancellation",
        "Match your situation to the [[reg212|regulation 2.12]] list",
        "Meet every criterion, including [[sch3|Schedule 3]] for a partner visa",
        "Stay lawful while you decide",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Applies the bar when you lodge, and decides the visa.",
      does: [
        "Treats a non-prescribed application as invalid",
        "Assesses every criterion of a prescribed visa, not just validity",
        "Usually grants a bridging visa with a valid prescribed application",
      ],
    },
    {
      id: "minister",
      name: "The Minister",
      short: "Minister",
      icon: ICON.handRaised,
      tone: "teal",
      role: "Has a personal power to lift the protection visa bar.",
      does: [
        "Can personally decide that [[s48a|section 48A]] doesn't apply, under [[s48b|section 48B]]",
        "Doesn't have to consider a request",
        "Section 48B decisions can't be reviewed",
      ],
    },
  ],
  flows: [
    {
      from: "homeaffairs",
      to: "you",
      label: "Refuses or cancels",
      detail: "A visa is refused or cancelled after you last entered Australia, while you hold no [[substantive|substantive visa]].",
    },
    {
      from: "you",
      to: "homeaffairs",
      label: "Prescribed visa only",
      detail: "You can still lodge a visa on the [[reg212|regulation 2.12]] list, such as a partner visa or a subclass 190, 491 or 494 visa. Anything else is invalid.",
    },
    {
      from: "homeaffairs",
      to: "you",
      label: "Bridging visa",
      detail: "A valid prescribed application usually comes with a bridging visa, so you stay lawful while it's decided.",
    },
    {
      from: "minister",
      to: "you",
      label: "Section 48B",
      detail: "After a protection visa refusal, only the Minister, acting personally, can allow another protection application. There's no right to request it and no review.",
    },
  ],
  journeyTitle: "From a refusal to your next application",
  journeyHighlight: "next application",
  stages: [
    {
      id: "confirm",
      short: "Confirm",
      title: "Confirm the bar applies",
      who: ["you"],
      description:
        "Check whether you hold a substantive visa, whether the refusal or cancellation came after your last entry, and whether it was a character decision.",
      points: [
        "A refusal counts even while it's under review at the ART",
        "Refusals of bridging visas don't count",
        "Character decisions fall under [[s501e|section 501E]] instead",
      ],
      youHold: "A clear answer on whether section 48 or 501E applies",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "list",
      short: "List",
      title: "Check the regulation 2.12 list",
      who: ["you"],
      description: "Match your circumstances to a visa you can still apply for in Australia.",
      points: [
        "Partner (820/801), protection, child (802) and medical treatment (602)",
        "Resolution of status, territorial asylum, border and bridging visas",
        "Subclass 190, 491 and 494 skilled visas, added from 13 November 2021",
      ],
      youHold: "A list of visas you can validly lodge in Australia",
      icon: ICON.listBullet,
    },
    {
      id: "criteria",
      short: "Criteria",
      title: "Check Schedule 3 and the other criteria",
      who: ["you"],
      description: "The bar exemption only decides whether you can apply. Every other criterion still has to be met.",
      points: [
        "Partner visa without a substantive visa: [[sch3|Schedule 3]] criteria 3001, 3003 and 3004, unless waived for compelling reasons",
        "Skilled visas: nomination, points, skills assessment and English",
        "After a cancellation, [[pic4013|PIC 4013]] can also apply",
      ],
      youHold: "An assessment of the full criteria, not just validity",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "lawful",
      short: "Stay lawful",
      title: "Stay lawful",
      who: ["you", "homeaffairs"],
      description: "A valid prescribed application usually comes with a bridging visa. Apply before your current bridging visa ends.",
      points: [
        "If it ends first, a Bridging visa E with no work rights may be the only option",
        "On a no-work condition? Check whether the new bridging visa allows work, and apply for work rights if available",
      ],
      youHold: "A bridging visa in effect while the new application is decided",
      icon: ICON.shieldCheck,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge the prescribed visa",
      who: ["you", "homeaffairs"],
      description: "Section 48 has no separate fee: you pay the normal charge for the visa you lodge.",
      points: [
        "Partner visa (820/801): A$11,710 for the main applicant",
        "Subclass 190, 491 or 494: A$6,140 for the main applicant",
        "Medical Treatment visa (602) in Australia: A$480",
      ],
      youHold: "A valid application on the regulation 2.12 list",
      cost: "The normal charge for that visa",
      icon: ICON.paperAirplane,
    },
    {
      id: "leave",
      short: "Or leave",
      title: "Or leave and apply from outside Australia",
      who: ["you"],
      description:
        "If no prescribed visa suits you, leaving Australia removes the bar for applications made after you re-enter on a new visa.",
      points: [
        "Check the [[pic4013|PIC 4013]] and PIC 4014 exclusion periods first",
        "Check for any unpaid debt, which can affect a visa to return",
        "Check the criteria of the visa you'd apply for from outside Australia",
      ],
      youHold: "An offshore application plan with exclusion periods checked",
      icon: ICON.globeAsiaAustralia,
    },
  ],
  check: {
    title: "Does the section 48 bar apply to you?",
    highlight: "section 48 bar",
    ok: {
      title: "The bar doesn't seem to apply",
      body: "On your answers, section 48 doesn't limit your next application. The visa's own criteria still apply.",
    },
    todo: {
      title: "The bar may apply, but options remain",
      body: "Section 48 may limit what you can lodge in Australia, but some visas stay open. The notes below explain each answer.",
    },
    stop: {
      title: "A stricter bar, or an invalid plan",
      body: "At least one answer means a visa you might want isn't open to you in Australia. The notes below explain what may still be possible.",
    },
    disclaimer:
      "A general self-check, not legal advice. Your visa history and your decision letters decide whether the bar applies.",
  },
  quiz: [
    {
      id: "visa",
      topic: "Your current visa",
      question: "What visa do you hold right now?",
      options: [
        {
          value: "substantive",
          label: "A visa that isn't a bridging visa",
          status: "ok",
          note: "Section 48 only applies while you hold no substantive visa, so it doesn't limit a new application right now.",
        },
        {
          value: "bridging",
          label: "Only a bridging visa",
          status: "todo",
          note: "One of the two conditions for the bar is met. Whether it applies depends on your refusals and cancellations.",
        },
        {
          value: "none",
          label: "No visa",
          status: "todo",
          note: "One of the two conditions is met. Without a substantive visa, [[sch3|Schedule 3]] can also apply to a partner visa.",
        },
        {
          value: "outside",
          label: "I'm outside Australia",
          status: "ok",
          note: "The bar doesn't follow you overseas. Check exclusion periods such as PIC 4013 before you apply.",
        },
      ],
    },
    {
      id: "decision",
      topic: "Refusal or cancellation",
      question: "Since you last entered Australia, has a visa been refused or cancelled?",
      help: "A refusal still under review at the ART counts.",
      options: [
        { value: "no", label: "No", status: "ok", note: "Section 48 only counts decisions since your last entry, so it doesn't apply." },
        {
          value: "yes",
          label: "Yes, refused or cancelled",
          status: "todo",
          note: "With no substantive visa, the bar applies: in Australia you can only lodge visas on the regulation 2.12 list.",
        },
        { value: "bridging", label: "Only a bridging visa was refused", status: "ok", note: "Refusals of bridging visas don't trigger the bar." },
        {
          value: "family",
          label: "An application that included me as a family member was refused",
          status: "todo",
          note: "The bar applies to you too, with the same list of visas still open.",
        },
      ],
    },
    {
      id: "character",
      topic: "Character",
      question: "Was the refusal or cancellation on character grounds (section 501)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then section 48, not the stricter section 501E, is the rule to check." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Section 501E applies instead: while you remain in Australia, you can only apply for a protection visa.",
          link: { label: "Character decisions", href: "/visas/appeals-and-review/character-test-section-501" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Your decision letter states the section used." },
      ],
    },
    {
      id: "protection",
      topic: "Protection visa",
      question: "Was it a protection visa that was refused or cancelled?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Section 48A doesn't apply to you." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Section 48A stops another protection visa application in Australia. Only the Minister, personally, can lift it under section 48B, and there's no right to request it.",
        },
      ],
    },
    {
      id: "plan",
      topic: "Your next visa",
      question: "Which visa are you thinking of applying for in Australia?",
      options: [
        {
          value: "partner",
          label: "A partner visa (820/801)",
          status: "todo",
          note: "It's on the list. Without a substantive visa you must also meet Schedule 3 criteria 3001, 3003 and 3004, unless they're waived for compelling reasons.",
          link: { label: "Schedule 3 explained", href: "/visas/appeals-and-review/schedule-3-criteria" },
        },
        {
          value: "skilled",
          label: "A subclass 190, 491 or 494 skilled visa",
          status: "ok",
          note: "These are on the list since 13 November 2021. Nomination, points and the other criteria still apply.",
        },
        {
          value: "other-listed",
          label: "Protection, child (802) or medical treatment (602)",
          status: "ok",
          note: "These are on the regulation 2.12 list. Each has its own criteria.",
        },
        {
          value: "not-listed",
          label: "Another visa, such as a student or visitor visa",
          status: "stop",
          note: "If the bar applies, a visa that isn't on the list is invalid: no bridging visa, and the charge is wasted. Leaving Australia and applying from overseas may be an option.",
        },
        {
          value: "unsure",
          label: "I'm not sure yet",
          status: "todo",
          note: "The finder on this page shows whether the bar applies and what's still open.",
          link: { label: "Open the finder", href: "#finder" },
        },
      ],
    },
    {
      id: "lawful",
      topic: "Staying lawful",
      question: "Is your current bridging visa about to end?",
      options: [
        {
          value: "no",
          label: "No",
          status: "ok",
          note: "Lodge any prescribed visa while it's still in effect, so a new bridging visa can follow.",
        },
        {
          value: "soon",
          label: "Yes, soon",
          status: "todo",
          note: "Lodge before it ends. If it ends first, a Bridging visa E with no work rights may be the only option.",
        },
        {
          value: "none",
          label: "I don't hold a bridging visa",
          status: "todo",
          note: "Get advice now about lodging a prescribed visa and staying lawful.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Once I'm refused, I can't apply for anything in Australia.",
      fact: "Not quite. You can still apply for the visas listed in regulation 2.12. They include partner (820/801), protection, child (802), medical treatment (602), bridging and the 190, 491 and 494 skilled visas.",
    },
    {
      myth: "The bar only starts after the ART decides.",
      fact: "No. A refusal counts whether or not it's been finally decided, so the bar applies while a review is running. You can still lodge a prescribed visa during the review.",
    },
    {
      myth: "A visa on the list is as good as granted.",
      fact: "Being on the list only makes the application valid. Every criterion still has to be met, including Schedule 3 for a partner visa, and nomination and points for a skilled visa.",
    },
    {
      myth: "Section 48 works the same way after a character refusal.",
      fact: "No. After a character decision, section 501E applies instead and is stricter: while you remain in Australia, only a protection visa can be applied for.",
    },
    {
      myth: "The bar follows me even after I leave.",
      fact: "No. Section 48 only looks at decisions after your last entry, so it doesn't apply to applications made after you re-enter on a new visa. Exclusion periods such as PIC 4013 can still apply.",
    },
    {
      myth: "A refused bridging visa triggers the bar.",
      fact: "No. Section 48 doesn't count refusals of bridging visas.",
    },
  ],
  glossary: [
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "After a refusal or cancellation since you last entered Australia, it limits you to certain visas while you remain here without a substantive visa.",
    },
    {
      id: "substantive",
      term: "Substantive visa",
      definition: "Any visa that isn't a bridging visa. Section 48 only applies while you hold none, that is, while you're unlawful or hold only a bridging visa.",
    },
    {
      id: "reg212",
      term: "Regulation 2.12",
      definition: "The part of the Migration Regulations listing the visas you can still apply for in Australia when section 48 applies.",
    },
    {
      id: "prescribed",
      term: "Prescribed visa",
      definition: "A visa on the regulation 2.12 list. You can still apply for it in Australia when section 48 applies.",
    },
    {
      id: "skilled-exemption",
      term: "Skilled exemption",
      definition: "Since 13 November 2021, the subclass 190, 491 and 494 skilled visas can be applied for despite the bar. Nomination, points and the other criteria still apply.",
    },
    {
      id: "sch3",
      term: "Schedule 3",
      definition: "Extra criteria for some visas applied for in Australia without a substantive visa. For a partner visa: criteria 3001, 3003 and 3004, unless waived for compelling reasons.",
    },
    {
      id: "s501e",
      term: "Section 501E",
      definition: "After a character refusal or cancellation, it allows only a protection visa application while you remain in Australia. It's stricter than section 48.",
    },
    {
      id: "s48a",
      term: "Section 48A",
      definition: "A separate bar: after a protection visa is refused or cancelled in Australia, you can't make another protection visa application here.",
    },
    {
      id: "s48b",
      term: "Section 48B",
      definition: "The Minister's personal power to let someone make a further protection visa application. There's no right to request it and no review.",
    },
    {
      id: "pic4013",
      term: "PIC 4013",
      definition: "A criterion under which a cancellation can trigger a 3-year exclusion from later visas, even after the section 48 bar ends.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful while an application is decided. A valid prescribed application usually comes with one.",
    },
  ],
  cta: {
    title: "Barred by section 48? Find what's still open",
    subtitle: "We check whether the bar applies, which visas you can still lodge in Australia, and the criteria each one needs.",
  },
  finder: section48Finder,
};
