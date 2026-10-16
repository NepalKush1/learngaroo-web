import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Aged Parent visa (subclass 804). Every
// figure matches data/visas/family-parent.ts (checked against Home Affairs,
// the pricing table and Services Australia on 12 October 2026). Extras are
// listed in verifiedExtras with their source.

export const agedParent804Explainer: VisaExplainer = {
  slug: "aged-parent-visa-804",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The lower-cost onshore visa for a parent at Age Pension age (67): apply in Australia, usually wait here on a bridging visa, and become a permanent resident for A$8,665 (one applicant), after a long queue.",
  bigIdeas: [
    { title: "You apply and wait in Australia", body: "You must be in Australia when you apply and when it's decided. A bridging visa usually covers the wait.", icon: ICON.home },
    { title: "Age Pension age, settled child", body: "You must be 67 or older when you apply, sponsored by a settled child, and pass the balance of family test.", icon: ICON.heart },
    { title: "Low cost, much longer queue", body: "A$8,665 for one applicant, far less than the 864. The trade-off is a much longer queue.", icon: ICON.clock },
  ],
  heroCard: [
    { label: "Who it's for", value: "A parent aged 67 or over, in Australia", icon: ICON.user },
    { label: "Who sponsors you", value: "Your child, settled in Australia and 18 or over", icon: ICON.heart },
    { label: "Cost, one applicant", value: "A$8,665 over two instalments", icon: ICON.currencyDollar },
    { label: "How long", value: "Permanent, from the day of grant", icon: ICON.home },
    { label: "While you wait", value: "Usually a bridging visa in Australia", icon: ICON.shieldCheck },
    { label: "Key test", value: "Balance of family test, never waived", icon: ICON.scale },
  ],
  checkedAgainst: "Home Affairs, Services Australia and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in Australia at Age Pension age, stay lawful on your bridging visa, and pay both instalments.",
      does: [
        "Reach [[age-pension-age|Age Pension age]] before you apply",
        "Pass the [[bof|balance of family test]]",
        "Lodge online in Australia and pay A$6,600",
        "Pay the second instalment of A$2,065 when invoiced",
      ],
    },
    {
      id: "child",
      name: "Your child (the sponsor)",
      short: "Your child",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you and promises support for your first two years on the visa.",
      does: [
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]]",
        "Gives support, accommodation and financial help for your first two years on the visa",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the criteria, queues your application and decides it.",
      does: [
        "Usually grants a bridging visa when you apply",
        "Checks the core criteria and gives you a [[queue-date|queue date]]",
        "Asks for health checks, police certificates and the assurance",
        "Invoices the second instalment and decides the visa",
      ],
    },
    {
      id: "services",
      name: "Services Australia",
      short: "Services Aust.",
      icon: ICON.shieldCheck,
      tone: "teal",
      role: "Assesses the [[aos|Assurance of Support]] someone gives for you.",
      does: ["Checks the assurer's income", "Asks for the bank guarantee: A$5,000 for one adult, A$7,000 for two", "Manages the assurance for its four years"],
    },
  ],
  flows: [
    {
      from: "child",
      to: "government",
      label: "Sponsors you (Form 40)",
      detail: "Your child signs [[form40|Form 40]], promising support, accommodation and financial help for your first two years on the visa.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies in Australia",
      detail: "You lodge online in [[immiaccount|ImmiAccount]] while you're in Australia, and pay the first instalment of A$6,600.",
    },
    {
      from: "government",
      to: "you",
      label: "Bridging visa + queue",
      detail: "Home Affairs usually grants a [[bridging|bridging visa]] that starts when your current visa ends. Once the core criteria are met, you get a [[queue-date|queue date]] in writing.",
    },
    {
      from: "services",
      to: "government",
      label: "Assurance accepted",
      detail: "When asked, your assurer gives a four-year [[aos|Assurance of Support]], with a bank guarantee of A$5,000 for one adult or A$7,000 for two.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After health, character and the second instalment of A$2,065, Home Affairs decides while you're in Australia. Permanent residence starts that day.",
    },
  ],
  journeyTitle: "From your visitor visa to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your age, your family and your visa",
      who: ["you", "child"],
      description: "You must have reached [[age-pension-age|Age Pension age]] when you apply, and pass the [[bof|balance of family test]].",
      points: [
        "Your child is [[settled]] in Australia and aged 18 or over",
        "Your current visa doesn't carry [[c8503|condition 8503]], or it's been waived",
        "You haven't applied for, and don't hold, an 870 visa",
      ],
      youHold: "A clear path to a valid application in Australia",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge online in Australia and pay",
      who: ["you", "child"],
      description: "You, and anyone applying with you, must be in Australia but not in [[clearance|immigration clearance]]. Lodge in [[immiaccount|ImmiAccount]] with your child's Form 40.",
      points: [
        "Online lodgement for applications made on or after 22 April 2026",
        "Each extra applicant pays A$3,300 (18 or over) or A$1,655 (under 18)",
        "Don't cancel your current visa",
      ],
      youHold: "An acknowledgement letter, and usually a bridging visa in reserve",
      cost: "A$6,600, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "queue",
      short: "Queue",
      title: "Initial check and a queue date",
      who: ["government"],
      description: "Home Affairs checks the core criteria, then gives you a [[queue-date|queue date]] in writing or refuses the application.",
      points: [
        "The 804 is [[capped|capped and queued]] with the other parent visas",
        "Applications are released in queue-date order as places become available",
        "Home Affairs publishes the queue dates it has released, not a processing time",
      ],
      youHold: "A written queue date",
      icon: ICON.listBullet,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait in Australia on your bridging visa",
      who: ["you"],
      description: "Your [[bridging|bridging visa]] starts when your current visa ends, and keeps you lawful until a decision.",
      points: [
        "Its conditions, including any work rights, are in [[vevo|VEVO]]",
        "Get a [[bvb|Bridging visa B]] before any trip: a Bridging visa A ends when you leave",
        "Tell Home Affairs about changes to your passport, address or family",
      ],
      youHold: "Lawful status in Australia for the whole wait",
      icon: ICON.clock,
    },
    {
      id: "assure",
      short: "Assure",
      title: "Health, character and the Assurance of Support",
      who: ["government", "services", "you"],
      description: "On release from the queue, Home Affairs asks for health examinations, police certificates and the [[aos|Assurance of Support]].",
      points: [
        "The assurance lasts four years",
        "Bank guarantee: A$5,000 for one adult, A$7,000 for two",
        "Any person or organisation that meets the income test can give it",
      ],
      youHold: "Cleared checks and an accepted assurance",
      icon: ICON.shieldCheck,
    },
    {
      id: "pay",
      short: "Pay",
      title: "Pay the second instalment",
      who: ["you"],
      description: "Home Affairs invoices the second instalment of A$2,065. If it isn't paid, the application is refused.",
      points: ["Each additional applicant also pays their own second instalment", "The first instalment isn't refunded if the visa is refused"],
      youHold: "A receipt for the second instalment",
      cost: "A$2,065, paid by you",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant in Australia",
      who: ["government", "you"],
      description: "You must be in Australia when the visa is decided. Permanent residence starts on the day of grant.",
      points: [
        "Work, study, Medicare, and you can sponsor eligible family members",
        "A five-year [[travel-facility|travel facility]]",
        "Your grant notice and VEVO list any conditions",
      ],
      youHold: "Permanent residence",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on its full facts.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age Pension age",
      question: "Have you reached Age Pension age (67)?",
      help: "It's checked on the day you apply. Only you need to be that age: a partner included in the application can be younger.",
      options: [
        { value: "yes", label: "Yes, I'm 67 or older", status: "ok", note: "You meet the age criterion, which is assessed at the time you apply." },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "Applying before Age Pension age is a refusal risk. Under that age, or outside Australia, look at the Parent visa (103) or the Contributory Parent visa instead.",
          link: { label: "Parent visa (103)", href: "/visas/family/parent-visa-103" },
        },
      ],
    },
    {
      id: "family-test",
      topic: "Balance of family test",
      question: "Do you pass the balance of family test?",
      help: "You pass if at least half of your children and step-children are [[eligible-child|eligible children]], or if more of them live in Australia than in any other single country.",
      options: [
        { value: "pass", label: "Yes, I've counted and I pass", status: "ok", note: "Good. Home Affairs checks the test first, before it gives you a queue date." },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Count before you pay anything. Children in Australia on temporary visas, including bridging visas, count as living overseas.",
          link: { label: "Use the calculator", href: "#family-test" },
        },
        {
          value: "fail",
          label: "No, I don't pass",
          status: "stop",
          note: "The test is never waived. The 870 has no such test, but it's temporary and closes the parent visas once you apply for it.",
          link: { label: "Compare the 870", href: "/visas/family/sponsored-parent-temporary-visa-870" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Will you be in Australia when you apply, and when the visa is decided?",
      options: [
        {
          value: "here",
          label: "Yes, I'm in Australia on a visa",
          status: "ok",
          note: "You can apply here. Home Affairs usually grants a bridging visa that starts when your current visa ends.",
        },
        {
          value: "travel",
          label: "I'm here, but may travel while I wait",
          status: "todo",
          note: "Get a Bridging visa B (A$575) before you leave, and be in Australia when the visa is decided.",
        },
        {
          value: "outside",
          label: "I'm outside Australia",
          status: "stop",
          note: "The 804 is applied for and decided in Australia. From overseas, look at the Parent visa (103) instead.",
          link: { label: "Parent visa (103)", href: "/visas/family/parent-visa-103" },
        },
      ],
    },
    {
      id: "no-further-stay",
      topic: "Condition 8503",
      question: "Does your current visa carry condition 8503 (no further stay)?",
      help: "Your visa's conditions are listed in [[vevo|VEVO]].",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing stops a valid application in Australia on this point." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Your application would be invalid unless the condition is waived first.",
          link: { label: "How 8503 waivers work", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check before you apply: an application made while 8503 applies is invalid." },
      ],
    },
    {
      id: "temp-parent",
      topic: "Sponsored Parent visa",
      question: "Have you applied for, or do you hold, a Sponsored Parent (Temporary) visa (870)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Keep it that way: an 870 application would close the 804." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't apply for the 804 if you have applied for, or hold, an 870.",
          link: { label: "Talk it through", href: "/bookings" },
        },
      ],
    },
    {
      id: "priority",
      topic: "Cost or wait",
      question: "Which matters more to your family: the cost, or the wait?",
      options: [
        {
          value: "cost",
          label: "Keeping the cost down",
          status: "ok",
          note: "The 804 costs A$8,665 for one applicant: A$6,600 when you apply and A$2,065 before grant.",
          link: { label: "Estimate your family's total", href: "#fees" },
        },
        {
          value: "wait",
          label: "A shorter queue, even at a much higher cost",
          status: "todo",
          note: "The Contributory Aged Parent visa (864) costs A$49,900 in total and is processed from a separate, shorter queue.",
          link: { label: "Contributory Aged Parent visa", href: "/visas/family/contributory-aged-parent-visa-864-884" },
        },
      ],
    },
    {
      id: "assurance",
      topic: "Assurance of Support",
      question: "Can someone give an Assurance of Support for you?",
      help: "A four-year promise to repay recoverable income support paid to you, backed by a bank guarantee. It's asked for after release from the queue.",
      options: [
        {
          value: "yes",
          label: "Yes, my child or someone else can",
          status: "ok",
          note: "The assurer must meet Services Australia's income test and lodge a bank guarantee: A$5,000 for one adult or A$7,000 for two.",
        },
        { value: "unsure", label: "Not sure yet", status: "todo", note: "Plan it now. Any person or organisation that meets Services Australia's income test can give it." },
        {
          value: "no",
          label: "No one can",
          status: "stop",
          note: "You must be able to obtain an Assurance of Support when Home Affairs asks, unless you apply under the limited [[retiree|Retirement visa pathway]].",
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for anyone in your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Health examinations and police certificates come after release from the queue, when Home Affairs asks." },
        {
          value: "concern",
          label: "Yes: a significant health condition or a criminal record",
          status: "todo",
          note: "Health is assessed after the long wait, and one applicant's failure affects the whole application. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can apply for the 804 from overseas and arrive later.",
      fact: "No. You, and anyone applying with you, must be in Australia (not in immigration clearance) when you apply and when the visa is decided.",
    },
    {
      myth: "My partner has to be 67 as well.",
      fact: "No. A partner included in the application doesn't need to meet the age test.",
    },
    {
      myth: "My bridging visa automatically lets me work.",
      fact: "That depends on the conditions of the bridging visa Home Affairs grants you. Check VEVO before taking any work. Once the 804 is granted you have full work rights.",
    },
    {
      myth: "I should cancel my visitor visa once I've applied.",
      fact: "Don't. Your bridging visa starts only when your current visa ends.",
    },
    {
      myth: "I can pop overseas while I wait and come straight back.",
      fact: "Not on a Bridging visa A: it ends when you leave. Get a Bridging visa B (A$575) before any trip, and be in Australia when the visa is decided.",
    },
    {
      myth: "The 804 and the 864 wait in the same queue.",
      fact: "No. Both are capped and queued, but the contributory 864 is processed from a separate, shorter queue. The 804's lower cost comes with a much longer queue.",
    },
    {
      myth: "The balance of family test is relaxed for older parents.",
      fact: "It's never waived, whatever your age. Children in Australia on temporary visas, including bridging visas, count as living overseas.",
    },
    {
      myth: "Condition 8503 doesn't matter if I'm otherwise eligible.",
      fact: "It does. If your visa carries condition 8503 (no further stay), the application is invalid unless the condition was waived first.",
    },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      intro: "Your part is a valid application in Australia, staying lawful on your bridging visa, and the final checks.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Make sure you've reached [[age-pension-age|Age Pension age]]",
            "Count your children for the [[bof|balance of family test]]",
            "Check your visa has no [[c8503|condition 8503]], or get it waived",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Be in Australia, with anyone applying with you",
            "Lodge online in ImmiAccount and pay A$6,600",
            "Don't cancel your current visa",
          ],
        },
        {
          title: "While you wait",
          items: [
            "Check your bridging visa conditions in VEVO",
            "Get a Bridging visa B before any trip overseas",
            "Do health checks and police certificates when asked",
            "Pay the second instalment of A$2,065 when it's invoiced",
          ],
        },
      ],
    },
    {
      id: "child",
      label: "I'm the sponsoring child",
      tone: "pink",
      intro: "Your part is the sponsorship and a two-year promise of support. The Assurance of Support can come from you or from someone else.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Be a citizen, permanent resident or eligible New Zealand citizen, [[settled]] in Australia and 18 or over",
            "Complete Form 40, with evidence of your status and your relationship",
            "Promise support, accommodation and financial help for your parent's first two years on the visa",
          ],
        },
        {
          title: "If you're the assurer",
          items: [
            "Meet Services Australia's income test",
            "Lodge a bank guarantee: A$5,000 for one adult or A$7,000 for two",
            "The assurance lasts four years",
          ],
        },
      ],
      link: { label: "How the balance of family test works", href: "/visas/family/balance-of-family-test" },
    },
  ],
  glossary: [
    {
      id: "age-pension-age",
      term: "Age Pension age",
      definition: "The age at which you could receive the Australian Age Pension. Services Australia states it is 67 years or older. You must have reached it on the day you apply.",
    },
    {
      id: "bof",
      term: "Balance of family test",
      definition: "The test of your family's links to Australia. You pass if at least half of your children and step-children are eligible children, or if more of them live in Australia than in any other single country. It's never waived.",
    },
    {
      id: "eligible-child",
      term: "Eligible child",
      definition: "A child who is an Australian citizen, or an Australian permanent resident or eligible New Zealand citizen usually living in Australia. A child here on a temporary or bridging visa counts as living overseas.",
    },
    { id: "settled", term: "Settled", definition: "Living in Australia lawfully for a reasonable period. Departmental policy generally looks for around two years of lawful residence." },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for your first two years on the visa.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A legal promise to repay recoverable income support paid to you. For the 804 it lasts four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation).",
    },
    {
      id: "queue-date",
      term: "Queue date",
      definition: "The date Home Affairs gives your application, in writing, once it meets the core criteria. Applications are released for final processing in queue-date order as places become available under the annual cap.",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "The number of parent visas granted each year is limited. Applications that meet the core criteria wait in a queue until places become available.",
    },
    {
      id: "instalments",
      term: "First and second instalment",
      definition: "The visa charge is paid in two parts: A$6,600 when you apply and A$2,065 when Home Affairs invoices it before grant. If the second isn't paid, the application is refused.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful while your application is processed. For the 804, Home Affairs usually grants one when you apply, and it starts when your current visa ends.",
    },
    {
      id: "bvb",
      term: "Bridging visa B",
      definition: "The bridging visa that lets you travel overseas and return while you wait. It costs A$575. Leaving on a Bridging visa A without one ends that visa.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No further stay",
      definition: "A condition on some temporary visas. If your current visa carries it, an 804 application is invalid unless the condition is waived first.",
    },
    { id: "clearance", term: "Immigration clearance", definition: "The border check you pass through when you arrive in Australia. You can't apply for the 804 while you're in it." },
    { id: "vevo", term: "VEVO", full: "Visa Entitlement Verification Online", definition: "Home Affairs' online service that shows your visa's conditions, including your bridging visa's." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years for the 804. After that you need a Resident Return visa or citizenship to re-enter as a permanent resident.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account for lodging and managing applications. 804 applications made on or after 22 April 2026 must be lodged there." },
    {
      id: "retiree",
      term: "Retirement visa pathway",
      definition: "A limited route for certain former Retirement (410) and Investor Retirement (405) visa holders. Retirees applying this way don't need an Assurance of Support.",
    },
  ],
  cta: {
    subtitle: "We check your age, your family count and your visa conditions against these rules, tell you honestly where you stand, and prepare the application with you and your child.",
  },
  verifiedExtras: [
    {
      fact: "Services Australia manages the Assurance of Support: it assesses the assurer's income and then asks for the bank guarantee and term deposit.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "Settled means lawfully resident in Australia for a reasonable period; departmental policy generally looks for around two years of lawful residence.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "The Retirement visa pathway is for people who on 8 May 2018 held or had held a Retirement (subclass 410) or Investor Retirement (subclass 405) visa and have held no other substantive visa since.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-parent-804",
    },
  ],
  finder: parentFinder,
  balanceOfFamily: true,
  fees: {
    variants: [
      {
        id: "aged-parent-804",
        label: "Aged Parent visa (subclass 804)",
        hint: "Two instalments: the first when you apply, the second before grant.",
        primary: [
          { label: "First instalment, when you apply", amount: 6600 },
          { label: "Second instalment, invoiced before grant", amount: 2065 },
        ],
        adult: [{ label: "First instalment", amount: 3300 }],
        child: [{ label: "First instalment", amount: 1655 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 3,
    notIncluded: "Not included: health examinations, police certificates, translations, a Bridging visa B if you travel (A$575), and any review fee if the visa is refused.",
    notes: [
      "Each additional applicant also pays their own second instalment. The page doesn't state that amount, so this estimate leaves it out; Home Affairs invoices it.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation). It's returned after the four years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
};
