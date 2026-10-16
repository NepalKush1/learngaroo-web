import { ICON } from "../icons";
import type { VisaExplainer } from "../types";

// Interactive explainer for Condition 8503 (No Further Stay) and the waiver
// request. Every fact matches the page in data/visas/appeals-and-review.ts
// (checked against Home Affairs, the Migration Regulations and the Migration
// Act on 12 October 2026). Definitions not on the page are in verifiedExtras.

const PAGE = "/visas/appeals-and-review/condition-8503-no-further-stay-waiver";

export const condition8503NoFurtherStayWaiverExplainer: VisaExplainer = {
  slug: "condition-8503-no-further-stay-waiver",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A No Further Stay condition (8503, 8534 or 8535) stops most visas being granted while you're in Australia. Home Affairs can waive it only after a major change, beyond your control, since the grant.",
  bigIdeas: [
    {
      title: "It blocks most visas onshore",
      body: "While you stay in Australia, condition 8503 allows only a protection visa. Conditions 8534 and 8535 allow a few more.",
      icon: ICON.lockClosed,
    },
    {
      title: "A waiver needs a major change",
      body: "A serious change after your grant, beyond your control, such as a medical reason you can't travel or a death in the family.",
      icon: ICON.exclamationTriangle,
    },
    {
      title: "Free, but it doesn't extend your visa",
      body: "Each visa holder lodges their own online request, before their visa expires. The request doesn't keep you lawful.",
      icon: ICON.clock,
    },
  ],
  heroCard: [
    { label: "What it means", value: "Most visas can't be granted while you're in Australia", icon: ICON.noSymbol },
    { label: "Waiver test", value: "A major change after grant, beyond your control", icon: ICON.scale },
    { label: "How to ask", value: "Online request (Form 1447), one per visa holder", icon: ICON.documentText },
    { label: "Fee", value: "A$0 for the waiver request", icon: ICON.currencyDollar },
    { label: "When to lodge", value: "Before your visa expires: check VEVO for the date", icon: ICON.calendarDays },
    { label: "Review", value: "None: the decision is final", icon: ICON.xCircle },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations 1994 and the Migration Act 1958",
  actors: [
    {
      id: "you",
      name: "You (the visa holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You hold a visa with a [[nfs|No Further Stay condition]] and ask Home Affairs to waive it.",
      does: [
        "Check your conditions and expiry date in [[vevo|VEVO]]",
        "Explain the major change and gather evidence",
        "Lodge your own [[form1447|Form 1447]] request before your visa expires",
        "Stay lawful, then apply for a new visa or leave",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides whether to waive the condition. Its decision is final.",
      does: [
        "Checks the request against the [[waiver-test|waiver test]]",
        "May ask you for more information",
        "Waives the condition or refuses the request",
        "Decides any new visa application on that visa's own criteria",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Waiver request",
      detail: "You lodge the free online request ([[form1447|Form 1447]]) before your visa expires, with your passport page and evidence of the change.",
    },
    {
      from: "government",
      to: "you",
      label: "May ask for more",
      detail: "Home Affairs may ask for more information. Meanwhile your visa keeps its expiry date: the request doesn't extend it.",
    },
    {
      from: "government",
      to: "you",
      label: "Waiver decision",
      detail: "Home Affairs waives the condition or refuses the request. The decision is final, and the [[art|ART]] can't review it.",
    },
    {
      from: "you",
      to: "government",
      label: "New visa application",
      detail: "If it's waived, you lodge your new visa application before your current visa expires, so a [[bridging|bridging visa]] can be granted.",
    },
  ],
  journeyTitle: "From checking your visa to your next step",
  journeyHighlight: "your next step",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Confirm the condition and your expiry date",
      who: ["you"],
      description: "Look for 8503, 8534 or 8535 in your grant letter or [[vevo|VEVO]], and note the date your visa expires.",
      points: [
        "[[c8503|Condition 8503]] allows only a [[protection|protection visa]] to be granted in Australia",
        "[[c8534|Condition 8534]] also allows a Temporary Graduate (485) or Student Guardian (590) visa",
        "[[c8535|Condition 8535]] also allows a student visa supported by the Commonwealth or a foreign government",
      ],
      youHold: "Confirmation of the condition and your visa expiry date",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "change",
      short: "Change",
      title: "Pin down the major change",
      who: ["you"],
      description: "Write down what changed after your visa was granted, when it happened and why it was beyond your control. Home Affairs gives these examples:",
      points: [
        "You can't travel for a medical reason",
        "A close family member has died or is seriously ill",
        "A natural disaster, war or civil unrest in your home country",
        "Your education provider can't deliver your approved course",
      ],
      youHold: "A clear statement of what changed and when",
      icon: ICON.pencilSquare,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather your evidence",
      who: ["you"],
      description: "Back each claim with documents. Anything not in English needs an [[translation|accredited English translation]].",
      points: [
        "Your passport biographical page",
        "Medical reports, or a fit-to-fly letter showing you can't travel",
        "A death certificate, official notices or government travel advice",
        "A letter from your education provider, if your course can't be delivered",
      ],
      youHold: "Documents supporting each claim, translated where needed",
      cost: "Medical reports and translations: third-party costs",
      icon: ICON.documentCheck,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge the online request",
      who: ["you", "government"],
      description: "Use the No Further Stay waiver request form on the Home Affairs website. Answer every question and attach your documents.",
      points: ["One request for each visa holder, including family members", "Lodge before your visa expires", "There's no charge for the request"],
      youHold: "A waiver request receipt for each person",
      cost: "A$0",
      icon: ICON.paperAirplane,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait for the decision and stay lawful",
      who: ["government", "you"],
      description: "Home Affairs may ask for more information. The request doesn't extend your visa or give you a [[bridging|bridging visa]].",
      points: [
        "If your visa expires before the decision, you become [[unlawful|unlawful]]",
        "Your onshore options then narrow to a [[bve|Bridging visa E]] and departure",
        "A visa application lodged before the waiver is granted is invalid",
      ],
      youHold: "A written waiver decision",
      icon: ICON.clock,
    },
    {
      id: "next",
      short: "Next step",
      title: "Apply for your new visa, or leave",
      who: ["you", "government"],
      description: "If the condition is waived, lodge your new visa application before your current visa expires, so a [[bridging|bridging visa]] can be granted.",
      points: [
        "The new application is decided on its own criteria",
        "The new visa may itself carry a No Further Stay condition",
        "If the waiver is refused, leave before your visa expires and apply from outside Australia",
        "After a refusal, a new request needs substantially different circumstances",
      ],
      youHold: "A new onshore application, or a plan to apply from overseas",
      cost: "The new visa's charge (Visitor visa in Australia: A$630)",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Can you ask for a No Further Stay waiver?",
    highlight: "waiver",
    ok: {
      title: "Your answers fit the waiver test",
      body: "Nothing in your answers rules out a request. Lodge it before your visa expires, with evidence. Home Affairs still decides each request on its own facts.",
    },
    todo: {
      title: "A request may fit, with things to sort",
      body: "None of these rules out a request on its own, but each needs attention before your visa expires.",
    },
    stop: {
      title: "A waiver may not fit, or you need help now",
      body: "At least one answer doesn't meet the waiver test or puts your status at risk. The notes below explain why and what you can do instead.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each waiver request on its own facts, and its decision is final.",
  },
  quiz: [
    {
      id: "condition",
      topic: "The condition",
      question: "Is condition 8503, 8534 or 8535 on your visa?",
      help: "Check your grant letter or [[vevo|VEVO]].",
      options: [
        { value: "yes", label: "Yes, I've checked", status: "ok", note: "Then most visas can't be granted to you while you're in Australia, unless the condition is waived." },
        {
          value: "unsure",
          label: "I haven't checked yet",
          status: "todo",
          note: "Check your grant letter or VEVO first, for the condition and for the date your visa expires.",
        },
        { value: "no", label: "No, it isn't there", status: "ok", note: "Then there's nothing to waive. Any visa you apply for still has its own criteria." },
      ],
    },
    {
      id: "timing",
      topic: "When it changed",
      question: "When did the change in your circumstances happen?",
      options: [
        { value: "after", label: "After my visa was granted", status: "ok", note: "The waiver test looks at circumstances that developed after the grant." },
        {
          value: "before",
          label: "It already existed when my visa was granted",
          status: "stop",
          note: "The test needs compelling and compassionate circumstances that developed after the grant. A situation that already existed doesn't meet it on its own.",
        },
      ],
    },
    {
      id: "reason",
      topic: "The reason",
      question: "Which best describes the change?",
      options: [
        {
          value: "medical-family",
          label: "I can't travel for a medical reason, or a close family member has died or is seriously ill",
          status: "ok",
          note: "Home Affairs gives these as examples. Medical reports, a fit-to-fly letter or a death certificate are the key evidence.",
        },
        {
          value: "disaster",
          label: "A natural disaster, war or civil unrest in my home country",
          status: "ok",
          note: "Home Affairs gives this as an example. Official notices or government travel advice can support it.",
        },
        {
          value: "course",
          label: "My education provider can't deliver my approved course",
          status: "ok",
          note: "Home Affairs gives this as an example. Include a letter from your provider.",
        },
        {
          value: "relationship",
          label: "Marriage or a de facto relationship with an Australian, pregnancy, or failing a course",
          hint: "An Australian citizen or permanent resident",
          status: "stop",
          note: "Home Affairs states that these aren't reasons for a waiver. Not knowing the condition was on your visa isn't a reason either.",
        },
        {
          value: "other",
          label: "Something else",
          status: "todo",
          note: "Compare it with the test: compelling and compassionate circumstances, beyond your control, that developed after the grant and caused a major change. Try the waiver finder.",
          link: { label: "Open the waiver finder", href: "#finder" },
        },
      ],
    },
    {
      id: "control",
      topic: "Beyond your control",
      question: "Was the change beyond your control?",
      options: [
        { value: "yes", label: "Yes, I had no control over it", status: "ok", note: "The test needs circumstances you had no control over that caused a major change." },
        {
          value: "no",
          label: "No, it came from a choice I made",
          status: "stop",
          note: "The waiver test needs circumstances over which you had no control. A change you chose doesn't meet it.",
        },
      ],
    },
    {
      id: "expiry",
      topic: "Your visa expiry",
      question: "Is your visa still in effect?",
      options: [
        {
          value: "time",
          label: "Yes, with time before it expires",
          status: "ok",
          note: "Lodge in good time: a request made too late may leave no time for a decision, and one made too early may not reflect your circumstances.",
        },
        {
          value: "soon",
          label: "Yes, but it expires very soon",
          status: "todo",
          note: "Lodge now. The request doesn't extend your visa, and if your visa expires before the decision you become unlawful.",
          link: { label: "Get urgent advice", href: "/bookings" },
        },
        {
          value: "expired",
          label: "No, it has already expired",
          status: "stop",
          note: "If your visa has expired and you hold no other visa, you're unlawful, and your onshore options narrow to a Bridging visa E and departure. Get advice straight away.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "lodged",
      topic: "New application",
      question: "Have you already lodged a new visa application in Australia?",
      options: [
        {
          value: "no",
          label: "No, I'm waiting for the waiver decision first",
          status: "ok",
          note: "The right order. If the condition is waived, lodge before your current visa expires so a bridging visa can be granted.",
        },
        {
          value: "allowed",
          label: "Yes, for a visa my condition still allows",
          status: "ok",
          note: "Conditions 8534 and 8535 still allow certain visas without a waiver, and 8503 allows a protection visa. That application has its own criteria.",
        },
        {
          value: "invalid",
          label: "Yes, for another visa, before any waiver was granted",
          status: "stop",
          note: "An application lodged before the waiver is granted is invalid and gives no bridging visa. Get advice about your status now.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "evidence",
      topic: "Evidence",
      question: "Do you have documents for each claim?",
      options: [
        { value: "yes", label: "Yes, with English translations where needed", status: "ok", note: "Attach your passport page and every document, and answer every question on the form." },
        {
          value: "some",
          label: "Some, but not all yet",
          status: "todo",
          note: "Gather the rest quickly: medical reports, certificates, official notices or a provider letter. Documents not in English need accredited translations.",
        },
        { value: "none", label: "Not yet", status: "todo", note: "Start now. The request needs documentary evidence of the change, not just your statement." },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Does anyone else in your family hold a visa with the condition?",
      options: [
        { value: "no", label: "No, just me", status: "ok", note: "Your request covers only you." },
        {
          value: "yes",
          label: "Yes, family members do too",
          status: "todo",
          note: "Each visa holder must lodge their own request. A waiver for one person doesn't lift the condition on anyone else's visa.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Marrying an Australian lifts condition 8503.",
      fact: "No. Home Affairs states that marriage or a de facto relationship with an Australian citizen or permanent resident isn't a reason for a waiver. Pregnancy and failing a course aren't either.",
    },
    {
      myth: "Lodging a waiver request keeps me lawful.",
      fact: "No. The request doesn't extend your visa or give you a bridging visa. If your visa expires before the decision, you become unlawful.",
    },
    {
      myth: "Once the condition is waived, my new visa is approved.",
      fact: "No. A waiver isn't a visa. It lets you apply for another visa in Australia, and that application is decided on its own criteria.",
    },
    {
      myth: "I can appeal a refused waiver to the ART.",
      fact: "No. The decision is final and the Administrative Review Tribunal can't review it. You can lodge a new request only if your circumstances have changed substantially.",
    },
    {
      myth: "One request covers my whole family.",
      fact: "No. Each visa holder whose visa carries the condition lodges their own request. A waiver for one person doesn't lift it for anyone else.",
    },
    {
      myth: "I can lodge my new visa application while the waiver is pending.",
      fact: "No. An application lodged before the waiver is granted is invalid and gives no bridging visa. Wait for the decision. If it's granted, lodge before your visa expires.",
    },
    {
      myth: "I didn't know about the condition, so it shouldn't apply to me.",
      fact: "Home Affairs states that not knowing the condition was on your visa isn't a reason for a waiver. Check your conditions in VEVO or your grant letter.",
    },
  ],
  glossary: [
    {
      id: "nfs",
      term: "No Further Stay condition",
      definition: "A visa condition (8503, 8534 or 8535) that stops most visas being granted to you while you remain in Australia, unless Home Affairs waives it.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      definition: "After entering Australia, you can't be granted a substantive visa other than a protection visa while you remain here. It's common on Visitor (subclass 600) visas, especially the Sponsored Family stream.",
    },
    {
      id: "c8534",
      term: "Condition 8534",
      definition: "Used on some Student (subclass 500) visas. Only a protection visa, a Temporary Graduate (subclass 485) visa or a Student Guardian (subclass 590) visa can be granted while you're in Australia.",
    },
    {
      id: "c8535",
      term: "Condition 8535",
      definition: "Used on some Student (subclass 500) visas. Only a protection visa, or a student visa supported by the Commonwealth or a foreign government, can be granted while you're in Australia.",
    },
    {
      id: "substantive",
      term: "Substantive visa",
      definition: "Any visa other than a bridging, criminal justice or enforcement visa.",
    },
    {
      id: "waiver-test",
      term: "The waiver test",
      definition: "Compelling and compassionate circumstances have developed since your visa was granted. You had no control over them, and they caused a major change to your circumstances (Migration Regulations, reg 2.05(4)).",
    },
    {
      id: "form1447",
      term: "Form 1447",
      full: "No Further Stay waiver request",
      definition: "The online form for asking Home Affairs to waive the condition. There's no charge, and each visa holder lodges their own.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "The Home Affairs online service that shows which visa is in effect, its conditions and any date by which you must leave.",
    },
    {
      id: "protection",
      term: "Protection visa",
      definition: "The one substantive visa that condition 8503 still allows to be granted while you're in Australia. Conditions 8534 and 8535 allow it too.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful in Australia while a visa application, a review or your departure is sorted out. A waiver request doesn't give you one.",
    },
    {
      id: "bve",
      term: "Bridging visa E",
      definition: "A short-term visa for people who are unlawful. It lets them leave, apply for a substantive visa, seek merits or judicial review, or seek ministerial intervention.",
    },
    {
      id: "unlawful",
      term: "Unlawful",
      full: "Unlawful non-citizen",
      definition: "Staying in Australia without a valid visa. People who stay unlawfully can be detained, removed and billed for the cost of removal.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that reviews many visa decisions. It can't review a decision on a No Further Stay waiver request.",
    },
    {
      id: "translation",
      term: "Accredited translation",
      definition: "An English translation by a NAATI-accredited translator. For a waiver request, attach one for any document that isn't in English.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A substantive visa is any visa other than a bridging, criminal justice or enforcement visa.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "VEVO (Visa Entitlement Verification Online) shows which visa is in effect, its conditions and any date by which you must leave.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "A bridging visa keeps you lawful in Australia while a visa application, a review or your departure is sorted out. A Bridging visa E is a short-term visa for people who are unlawful, so they can leave, apply for a substantive visa, seek merits or judicial review, or seek ministerial intervention.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "Home Affairs: it is unlawful to stay in Australia without a valid visa. If you can't get a new visa you must leave; if you don't, Home Affairs can detain you, remove you and bill you for the cost of removal.",
      source: "https://immi.homeaffairs.gov.au/visas/visa-about-to-expire/if-you-dont-have-a-valid-visa",
    },
  ],
  cta: {
    title: "Not sure a waiver fits your situation?",
    subtitle: "We check your circumstances against the waiver test and tell you honestly whether a request is worth making. Then we help you prepare it before your visa expires.",
  },
  finder: {
    id: "waiver-finder",
    navLabel: "Waiver finder",
    eyebrow: "Waiver finder",
    title: "Can you ask for a waiver?",
    highlight: "waiver",
    subtitle: "Up to four one-tap questions. See whether you need a waiver at all, and whether your change matches the test Home Affairs applies.",
    start: "condition",
    questions: [
      {
        id: "condition",
        question: "Which No Further Stay condition is on your visa?",
        help: "It's listed in your grant letter and in [[vevo|VEVO]].",
        options: [
          { label: "8503", hint: "Common on Visitor (subclass 600) visas", next: "change-when" },
          { label: "8534", hint: "Used on some Student visas", next: "visa-8534" },
          { label: "8535", hint: "Used on some Student visas", next: "visa-8535" },
          { label: "None of these", next: "no-condition" },
          { label: "I'm not sure", next: "check-first" },
        ],
      },
      {
        id: "visa-8534",
        question: "Which visa do you want to apply for in Australia?",
        options: [
          { label: "A Temporary Graduate (485), Student Guardian (590) or protection visa", next: "allowed-8534" },
          { label: "Another visa, such as another Student visa", next: "change-when" },
        ],
      },
      {
        id: "visa-8535",
        question: "Which visa do you want to apply for in Australia?",
        options: [
          { label: "A protection visa, or a student visa supported by a government", next: "allowed-8535" },
          { label: "Another visa", next: "change-when" },
        ],
      },
      {
        id: "change-when",
        question: "When did the change in your circumstances happen?",
        options: [
          { label: "After my visa was granted", next: "change-what" },
          { label: "It already existed when my visa was granted", next: "before-grant" },
        ],
      },
      {
        id: "change-what",
        question: "Which best describes the change?",
        help: "The test needs compelling and compassionate circumstances, beyond your control, that caused a major change.",
        options: [
          { label: "I can't travel for a medical reason", next: "possible-medical" },
          { label: "A close family member has died or is seriously ill", next: "possible" },
          { label: "A natural disaster, war or civil unrest in my home country", next: "possible" },
          { label: "My education provider can't deliver my approved course", next: "possible" },
          { label: "Marriage or a de facto relationship with an Australian, pregnancy, or failing a course", next: "not-a-reason" },
          { label: "Something else", next: "something-else" },
        ],
      },
    ],
    outcomes: [
      {
        id: "possible",
        title: "A waiver request may fit your situation",
        body: "Home Affairs gives this as an example of a change that can justify a waiver. It must have developed after the grant, been beyond your control and caused a major change. Lodge the free online request (Form 1447) before your visa expires, with evidence.",
        watch: [
          "Each visa holder lodges their own request",
          "The request doesn't extend your visa or give you a [[bridging|bridging visa]]",
          "Don't lodge a new visa application until the waiver is granted: it would be invalid",
          "The decision is final: the [[art|ART]] can't review it",
        ],
        href: PAGE,
        tone: "match",
      },
      {
        id: "possible-medical",
        title: "A waiver request may fit: a medical reason",
        body: "Being unable to travel for a medical reason is one of the examples Home Affairs gives. Medical reports or a fit-to-fly letter are the key evidence. If the condition is waived, a Medical Treatment visa (subclass 602) is one onshore option for people who can't travel for medical reasons.",
        watch: [
          "Lodge the request before your visa expires: it doesn't extend your visa",
          "Each visa holder lodges their own request",
          "The new visa is decided on its own criteria",
        ],
        href: PAGE,
        tone: "match",
      },
      {
        id: "not-a-reason",
        title: "Home Affairs says these don't qualify",
        body: "Home Affairs states that these aren't reasons for a waiver: marriage or a de facto relationship with an Australian citizen or permanent resident, pregnancy, and failing a course. Without a waiver, you'd need to leave before your visa expires and apply for the visa you want from outside Australia.",
        watch: [
          "Not knowing the condition was on your visa isn't a reason either",
          "Once you leave, you can apply for other visas to return, subject to their criteria",
        ],
        href: PAGE,
        tone: "stop",
      },
      {
        id: "something-else",
        title: "Check it against the waiver test",
        body: "Home Affairs can waive the condition only if compelling and compassionate circumstances developed after the grant, were beyond your control and caused a major change. Its examples include a medical reason you can't travel, or a close family member's death or serious illness. Others are a disaster or unrest at home, or a course your provider can't deliver.",
        watch: [
          "Home Affairs says marriage, pregnancy and failing a course don't qualify",
          "Lodge before your visa expires, with documentary evidence",
        ],
        href: PAGE,
      },
      {
        id: "before-grant",
        title: "The change must come after the grant",
        body: "The waiver test looks only at compelling and compassionate circumstances that developed after your visa was granted. A situation that already existed at the grant doesn't meet the test on its own. If something new has happened since, answer again with that change.",
        href: PAGE,
        tone: "stop",
      },
      {
        id: "allowed-8534",
        title: "You may not need a waiver for that visa",
        body: "Condition 8534 still allows a protection visa, a Temporary Graduate (subclass 485) visa or a Student Guardian (subclass 590) visa to be granted in Australia. A waiver is needed only for other visas, such as another Student visa. The visa you apply for still has its own criteria.",
        href: "/visas/study/student-visa-conditions-and-work-rights",
        tone: "match",
      },
      {
        id: "allowed-8535",
        title: "You may not need a waiver for that visa",
        body: "Condition 8535 still allows two kinds of visa to be granted in Australia: a protection visa, or a student visa for which you're supported by the Commonwealth or a foreign government. A waiver is needed only for other visas. The visa you apply for still has its own criteria.",
        href: "/visas/study/student-visa-conditions-and-work-rights",
        tone: "match",
      },
      {
        id: "no-condition",
        title: "There's nothing to waive",
        body: "If none of these conditions is on your visa, you don't need this waiver. Check your grant letter or VEVO to be sure: condition 8503 is common on Visitor visas, and 8534 and 8535 are used on some Student visas. Any visa you apply for still has its own criteria.",
      },
      {
        id: "check-first",
        title: "Check your visa conditions first",
        body: "Look at your grant letter or VEVO for condition 8503, 8534 or 8535, and note the date your visa expires. Then answer again: the three conditions allow different visas.",
        href: PAGE,
      },
    ],
    footnote:
      "Based on the examples Home Affairs publishes, not advice. Home Affairs decides each request on its own facts and evidence, and its decision is final.",
  },
};
