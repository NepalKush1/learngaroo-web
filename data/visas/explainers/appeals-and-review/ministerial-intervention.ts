import { ICON } from "../icons";
import type { VisaExplainer } from "../types";
import { reviewFinder } from "./review-finder";

// Interactive explainer for ministerial intervention requests (ss 351, 501J,
// 195A and 48B). Every fact matches the page in
// data/visas/appeals-and-review.ts (checked against Home Affairs, the
// Ministerial Instructions and the Migration Act on 12 October 2026).
// Definitions not on the page are in verifiedExtras.

export const ministerialInterventionExplainer: VisaExplainer = {
  slug: "ministerial-intervention",
  factsAsAt: "12 October 2026",
  oneLiner:
    "After the Tribunal has decided your case, you can ask the Minister to personally replace its decision with a more favourable one. The Minister doesn't have to consider it, and there's no review.",
  bigIdeas: [
    {
      title: "Only after a Tribunal decision",
      body: "The power exists only once the ART, or the former AAT, has decided your case, and no court has quashed that decision.",
      icon: ICON.scale,
    },
    {
      title: "Strict rules for referral",
      body: "Since September 2025, Home Affairs refers a request to the Minister only if it meets a section 13 criterion.",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      title: "No visa, no right, no review",
      body: "A request isn't a visa application. It gives no bridging visa, the Minister needn't consider it, and there's no review.",
      icon: ICON.exclamationTriangle,
    },
  ],
  heroCard: [
    { label: "Main powers", value: "Sections 351 and 501J of the Migration Act", icon: ICON.scale },
    { label: "When you can ask", value: "Only after a Tribunal decision in your case", icon: ICON.calendarDays },
    { label: "Who decides", value: "The Minister, personally, in the public interest", icon: ICON.flag },
    { label: "Right to a decision", value: "None: the Minister need not consider it", icon: ICON.noSymbol },
    { label: "Bridging visa", value: "Not given: apply for a Bridging visa E yourself", icon: ICON.shieldExclamation },
    { label: "Fee", value: "A$0 for a request", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Ministerial Instructions of September 2025 and the Migration Act 1958",
  actors: [
    {
      id: "you",
      name: "You (the person asking)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You ask the Minister to intervene after the Tribunal has decided your case.",
      does: [
        "Check that the power is [[enlivened|enlivened]] by a Tribunal decision",
        "Stay lawful, usually on a [[bve|Bridging visa E]]",
        "Lodge a complete written request that names a [[s13|section 13]] criterion",
        "Keep engaging with Home Affairs and make arrangements to leave, as the Minister expects",
      ],
    },
    {
      id: "tribunal",
      name: "The Tribunal (ART, or the former AAT)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Its decision in your case is what makes a request possible.",
      does: [
        "Reviews the refusal or cancellation",
        "Makes the decision that [[enlivened|enlivens]] the Minister's power",
        "A decision of the former [[aat|AAT]] counts too",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Assesses each request against the [[instructions|Ministerial Instructions]] and decides whether to refer it.",
      does: [
        "Checks the four conditions for [[referral|referral]], in order",
        "Finalises requests that fail any of them, without referral",
        "May ask for health checks, police clearances or more evidence",
        "Refers requests that meet a [[s13|section 13]] criterion",
      ],
    },
    {
      id: "minister",
      name: "The Minister for Immigration",
      short: "Minister",
      icon: ICON.flag,
      tone: "teal",
      role: "Has a personal power to substitute a more favourable decision, if the Minister thinks it's in the public interest.",
      does: [
        "Acts personally: the power can't be delegated",
        "Doesn't have to consider any request ([[non-compellable|non-compellable]])",
        "May decide to consider a case, intervene, or not",
        "There's no review if the Minister doesn't intervene",
      ],
    },
  ],
  flows: [
    {
      from: "tribunal",
      to: "you",
      label: "Tribunal decides",
      detail: "The [[art|ART]], or the former [[aat|AAT]], decides your review. That decision [[enlivened|enlivens]] the Minister's power.",
    },
    {
      from: "you",
      to: "government",
      label: "Bridging visa E",
      detail: "If you need one to stay lawful, you apply for a [[bve|Bridging visa E]] before you lodge, on the basis that you're seeking ministerial intervention.",
    },
    {
      from: "you",
      to: "minister",
      label: "Written request",
      detail: "You lodge through the Contact the Minister online form, or by post. It names everyone included, the power, the Tribunal decision and the [[s13|section 13]] criterion.",
    },
    {
      from: "government",
      to: "you",
      label: "May ask for more",
      detail: "If your request meets a criterion, Home Affairs may ask for a health examination, police clearances or more evidence within a set time.",
    },
    {
      from: "government",
      to: "minister",
      label: "Refers, or finalises",
      detail: "Home Affairs refers the request only if all four conditions are met. Otherwise it's finalised without [[referral|referral]].",
    },
    {
      from: "minister",
      to: "you",
      label: "May intervene",
      detail: "The Minister may decide to consider your case, intervene, or not. There's no review of a decision not to intervene.",
    },
  ],
  journeyTitle: "From a Tribunal decision to the Minister",
  journeyHighlight: "the Minister",
  stages: [
    {
      id: "enlivened",
      short: "Check",
      title: "Confirm the power is available",
      who: ["you", "tribunal"],
      description: "You need a decision by the [[art|ART]], or the former [[aat|AAT]], in your case. Then check that none of the exclusions applies.",
      points: [
        "No court has quashed the Tribunal decision",
        "The Minister hasn't already intervened to grant you a visa",
        "Your case wasn't [[remittal|remitted]] and then decided again by Home Affairs",
      ],
      youHold: "Confirmation that a request can be made",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "lawful",
      short: "Stay lawful",
      title: "Stay lawful before you lodge",
      who: ["you", "government"],
      description: "A request gives you no visa. If you need one to stay lawful, apply for a [[bve|Bridging visa E]] on the basis that you're seeking ministerial intervention.",
      points: [
        "The Bridging visa E has no visa application charge",
        "If you're [[unlawful|unlawful]], not in detention, and could have applied but didn't, the request is finalised without referral",
        "Keep your bridging visa grant letter as evidence of lawful status",
      ],
      youHold: "A visa in effect, such as a Bridging visa E",
      cost: "A$0",
      icon: ICON.shieldCheck,
    },
    {
      id: "criteria",
      short: "Criteria",
      title: "Match your case to section 13",
      who: ["you"],
      description: "Read sections 12 and 13 of the [[instructions|Ministerial Instructions]]. Identify the criterion you rely on and the evidence for it.",
      points: [
        "[[s12|Section 12]] lists requests that are inappropriate to refer",
        "For example, if you may be eligible to apply for a partner visa",
        "The old 'unique or exceptional circumstances' test no longer applies",
      ],
      youHold: "A section 13 criterion identified, with evidence",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "Prepare a complete written request",
      who: ["you"],
      description: "Give everything at the start: Home Affairs assesses the request on the information you provide at first instance.",
      points: [
        "Name everyone included, the power, the Tribunal decision and the criterion",
        "[[certified|Certified copies]] of documents, with accredited English translations",
        "[[form956|Form 956 or 956A]] if someone acts for you or receives your letters",
        "No USB drives or CDs: Home Affairs won't open them",
      ],
      youHold: "A complete request package",
      cost: "Certified copies, translations and representation: third-party costs",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge the request",
      who: ["you", "minister"],
      description: "Use the Contact the Minister online form on the Home Affairs website, or post the request to the Minister.",
      points: [
        "Post to: Minister for Immigration and Citizenship, PO Box 6022",
        "House of Representatives, Parliament House, Canberra ACT 2600",
        "There's no charge for a request",
      ],
      youHold: "A lodged request and an acknowledgement",
      cost: "A$0",
      icon: ICON.paperAirplane,
    },
    {
      id: "assess",
      short: "Assess",
      title: "Home Affairs assesses, and may refer",
      who: ["government"],
      description: "Home Affairs checks four conditions, in order. A request that fails any of them is finalised without [[referral|referral]].",
      points: [
        "1. The power is [[enlivened|enlivened]]",
        "2. The request is properly made",
        "3. It isn't inappropriate to refer under section 12",
        "4. It meets a [[s13|section 13]] criterion",
      ],
      youHold: "A request referred to the Minister, or finalised",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "decide",
      short: "Decide",
      title: "The Minister decides",
      who: ["minister", "you"],
      description: "The Minister may decide to consider your case, intervene, or not. There's no review of a decision not to intervene.",
      points: [
        "Meanwhile, stay lawful and keep engaging with Home Affairs",
        "A request doesn't stop removal unless the Minister has made a [[procedural|procedural decision]] to consider your case",
        "If the request is unsuccessful, you're expected to leave Australia",
      ],
      youHold: "A written outcome",
      icon: ICON.flag,
    },
  ],
  check: {
    title: "Is a ministerial intervention request open to you?",
    highlight: "open to you",
    ok: {
      title: "A request looks possible",
      body: "Nothing in your answers stops a request being referred. The Minister still doesn't have to consider it, and there's no review.",
    },
    todo: {
      title: "Possible, with things to sort first",
      body: "None of these rules out a request on its own, but each needs attention before you lodge.",
    },
    stop: {
      title: "A request may not be open to you yet",
      body: "At least one answer means the power isn't available, or is a reason Home Affairs finalises requests without referral. The notes below explain why.",
    },
    disclaimer:
      "A general self-check, not advice or a prediction. The Minister's powers are personal and non-compellable, and there's no review of a decision not to intervene.",
  },
  quiz: [
    {
      id: "tribunal",
      topic: "Tribunal decision",
      question: "Has the ART, or the former AAT, made a decision in your case?",
      options: [
        { value: "yes", label: "Yes, the Tribunal has decided", status: "ok", note: "That decision enlivens the Minister's power, unless one of the exclusions applies." },
        {
          value: "pending",
          label: "My review is still waiting for a decision",
          status: "stop",
          note: "The power is only available after a Tribunal decision. For now, the review is where your case is decided.",
          link: { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
        },
        {
          value: "none",
          label: "No, the Tribunal hasn't been involved",
          status: "stop",
          note: "Without a Tribunal decision, the power isn't enlivened and a request can't be referred. Use the options finder to see what else may be open.",
          link: { label: "Open the options finder", href: "#finder" },
        },
      ],
    },
    {
      id: "exclusions",
      topic: "Exclusions",
      question: "Has any of these happened since the Tribunal decision?",
      help: "A court quashed it, the Minister already granted you a visa, or the case was sent back and Home Affairs decided again.",
      options: [
        { value: "none", label: "None of these", status: "ok", note: "Then none of the exclusions applies to you." },
        {
          value: "court",
          label: "A court quashed the Tribunal decision",
          status: "stop",
          note: "The power isn't available once a court has quashed the Tribunal decision, and Home Affairs finalises a request in that case.",
        },
        {
          value: "other",
          label: "The Minister already intervened, or Home Affairs decided again after a remittal",
          status: "stop",
          note: "In both cases the power isn't available on that Tribunal decision.",
        },
      ],
    },
    {
      id: "status",
      topic: "Lawful status",
      question: "Do you hold a visa right now?",
      options: [
        { value: "visa", label: "Yes, a Bridging visa E or another visa", status: "ok", note: "Keep it in effect, and keep the grant letter as evidence of your lawful status." },
        {
          value: "unlawful",
          label: "No, and I haven't applied for a bridging visa",
          status: "stop",
          note: "A request from an unlawful person, not in detention, who could have applied for a bridging visa is finalised without referral. Apply for a Bridging visa E first, if you can.",
          link: { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
        },
        {
          value: "detention",
          label: "I'm in immigration detention",
          status: "todo",
          note: "The rule about not applying for a bridging visa covers people outside detention. Separately, section 195A lets the Minister personally grant a visa to someone in detention, with no right to request it. Get advice.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "partner",
      topic: "Partner visa",
      question: "Could you be eligible to apply for a partner visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Then this section 12 reason doesn't apply to you." },
        {
          value: "maybe",
          label: "Possibly",
          status: "stop",
          note: "Home Affairs treats a request as inappropriate to refer if you may be eligible to apply for a partner visa. Look at that pathway first.",
          link: { label: "Partner visa (820/801)", href: "/visas/family/partner-visa-onshore-820-801" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check before you lodge: possible eligibility for a partner visa makes a request inappropriate to refer.",
          link: { label: "Partner visa (820/801)", href: "/visas/family/partner-visa-onshore-820-801" },
        },
      ],
    },
    {
      id: "criterion",
      topic: "Section 13 criterion",
      question: "Does your request rely on a specific section 13 criterion?",
      options: [
        {
          value: "yes",
          label: "Yes, I've identified one and have evidence for it",
          status: "ok",
          note: "Name it in the request and give all the information relevant to it at the start.",
        },
        {
          value: "unique",
          label: "I'm relying on 'unique or exceptional circumstances'",
          status: "todo",
          note: "That was the old test. Home Affairs says the 2025 Instructions don't let it assess unique or exceptional circumstances: a request is referred only if it meets a section 13 criterion.",
        },
        {
          value: "unsure",
          label: "I don't know which applies yet",
          status: "todo",
          note: "Read sections 12 and 13 of the Ministerial Instructions, or get advice. A properly made request must say which section 13 criteria it relies on.",
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Who will your request include?",
      options: [
        { value: "me", label: "Just me", status: "ok", note: "Name yourself, the power and the Tribunal decision clearly." },
        { value: "with-decision", label: "Family members who had their own Tribunal decision", status: "ok", note: "They can be included. Identify exactly who is included." },
        {
          value: "without-decision",
          label: "Family members without their own Tribunal decision",
          status: "todo",
          note: "They can't be included. Only family members who have also had a merits review tribunal decision in their own case can be.",
        },
      ],
    },
    {
      id: "travel",
      topic: "Travel",
      question: "Do you plan to leave Australia before you get an outcome?",
      options: [
        {
          value: "no",
          label: "No, I'll stay while it's considered",
          status: "ok",
          note: "While a request is in progress, the Minister expects you to stay lawful, keep engaging with Home Affairs and make arrangements to leave.",
        },
        {
          value: "yes",
          label: "Yes, without a visa to return",
          status: "stop",
          note: "Leaving without a visa to return finalises the request without referral, unless the Minister has already decided to consider it.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I have a right to have the Minister look at my case.",
      fact: "No. The powers are non-compellable: the Minister doesn't have to consider any request, and there's no review of a decision not to intervene.",
    },
    {
      myth: "A request gives me a bridging visa while I wait.",
      fact: "No. A request isn't a visa application and gives you no visa. Apply for a Bridging visa E yourself, before you lodge, on the basis that you're seeking ministerial intervention.",
    },
    {
      myth: "I can ask the Minister before the Tribunal decides.",
      fact: "No. The power is enlivened only by a decision of the Administrative Review Tribunal, or the former Administrative Appeals Tribunal, in your case.",
    },
    {
      myth: "Unique or exceptional circumstances are enough.",
      fact: "Not any more. Home Affairs says the September 2025 Instructions don't let it assess 'unique or exceptional circumstances'. A request is referred only if it meets a section 13 criterion.",
    },
    {
      myth: "A request stops me being removed.",
      fact: "No. A request doesn't stop removal under section 198 unless the Minister has made a procedural decision to consider your case.",
    },
    {
      myth: "I can travel overseas while my request is considered.",
      fact: "If you leave Australia without a visa to return, the request is finalised without referral, unless the Minister has already decided to consider it.",
    },
    {
      myth: "Home Affairs will ask me for anything that's missing.",
      fact: "Not necessarily. It assesses the request on the information you provide at first instance, and asks for more only if a section 13 criterion is met.",
    },
    {
      myth: "I can still make a section 417 request.",
      fact: "Home Affairs states that section 417 has been repealed. The Minister can still use section 351 for people whose section 417 power was enlivened by an earlier tribunal decision.",
    },
  ],
  glossary: [
    {
      id: "mi",
      term: "Ministerial intervention",
      definition: "The Minister personally replacing a Tribunal decision with a more favourable one, in the public interest, under section 351 or 501J of the Migration Act. It isn't a visa application.",
    },
    {
      id: "s351",
      term: "Section 351",
      definition: "The Minister's personal power to substitute a more favourable decision for a Tribunal decision, if the Minister thinks it's in the public interest.",
    },
    {
      id: "s501j",
      term: "Section 501J",
      definition: "The equivalent power for Tribunal decisions on protection visas refused on character grounds.",
    },
    {
      id: "s195a",
      term: "Section 195A",
      definition: "A personal power for the Minister to grant a visa to a person in immigration detention, if it's in the public interest. There's no right to request it and no review.",
    },
    {
      id: "s48b",
      term: "Section 48B",
      definition: "A personal power for the Minister to lift the section 48A bar, so a further protection visa application can be made. There's no right to request it and no review.",
    },
    {
      id: "enlivened",
      term: "Enlivened",
      definition: "Legal shorthand for 'available'. The Minister's power is enlivened by a Tribunal decision in your case, and isn't available without one.",
    },
    {
      id: "non-compellable",
      term: "Non-compellable",
      definition: "No one can make the Minister use the power, or even consider a request. The Minister acts personally, and the power can't be delegated.",
    },
    {
      id: "instructions",
      term: "Ministerial Instructions",
      definition: "Instructions issued on 4 September 2025, amended on 17 September 2025, under sections 351 and 501J. They replaced the guidelines of 11 March 2016 and set out which requests Home Affairs refers.",
    },
    {
      id: "s12",
      term: "Section 12 (Instructions)",
      definition: "Lists requests that are inappropriate to refer: for example where you may be eligible for a partner visa, or you left Australia without a visa to return.",
    },
    {
      id: "s13",
      term: "Section 13 (Instructions)",
      definition: "Sets the criteria a request must meet before Home Affairs refers it to the Minister. Your request must say which criteria it relies on.",
    },
    {
      id: "referral",
      term: "Referral",
      definition: "Home Affairs passing your request to the Minister. A request that fails any of the four conditions is finalised without referral.",
    },
    {
      id: "procedural",
      term: "Procedural decision",
      definition: "A personal decision by the Minister to consider your case. Without one, a request doesn't stop removal, and leaving Australia without a visa to return finalises it.",
    },
    {
      id: "remittal",
      term: "Remittal",
      definition: "When the Tribunal sends a case back to Home Affairs to decide again. Once Home Affairs has made a new decision, the power isn't available on the earlier Tribunal decision.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that reviews many visa refusals and cancellations. Its decision in your case is what makes a request possible.",
    },
    {
      id: "aat",
      term: "AAT",
      full: "Administrative Appeals Tribunal",
      definition: "The former tribunal that the ART replaced. A decision of the former AAT can also enliven the Minister's power.",
    },
    {
      id: "bve",
      term: "Bridging visa E",
      definition: "A short-term visa for people who are unlawful. It lets them leave, apply for a substantive visa, seek merits or judicial review, or seek ministerial intervention. It has no visa application charge.",
    },
    {
      id: "unlawful",
      term: "Unlawful",
      full: "Unlawful non-citizen",
      definition: "Staying in Australia without a valid visa. People who stay unlawfully can be detained, removed and billed for the cost of removal.",
    },
    {
      id: "certified",
      term: "Certified copy",
      definition: "A copy certified by a listed person, such as a JP, solicitor, doctor, or bank or postal manager.",
    },
    {
      id: "form956",
      term: "Form 956 and 956A",
      definition: "Form 956 appoints a registered migration agent, legal practitioner or exempt person to act for you. Form 956A appoints an authorised recipient to receive your letters.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A Bridging visa E is a short-term visa for people who are unlawful, so they can leave, apply for a substantive visa, seek merits or judicial review, or seek ministerial intervention.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "The Administrative Review Tribunal (ART) replaced the Administrative Appeals Tribunal on 14 October 2024.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "Home Affairs: it is unlawful to stay in Australia without a valid visa. If you can't get a new visa you must leave; if you don't, Home Affairs can detain you, remove you and bill you for the cost of removal.",
      source: "https://immi.homeaffairs.gov.au/visas/visa-about-to-expire/if-you-dont-have-a-valid-visa",
    },
  ],
  cta: {
    title: "Thinking about a request to the Minister?",
    subtitle: "We check whether the power is available in your case and match your circumstances to the criteria honestly. Then we help you prepare a complete request while you stay lawful.",
  },
  finder: reviewFinder,
};
