import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Parent visa (subclass 103). Every figure
// matches data/visas/family-parent.ts (checked against Home Affairs, the
// pricing table and Services Australia on 12 October 2026). Extras are
// listed in verifiedExtras with their source.

export const parentVisa103Explainer: VisaExplainer = {
  slug: "parent-visa-103",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The lowest-cost permanent visa for a parent whose child is settled in Australia: A$8,665 for one applicant. The trade-off is the longest queue of the parent visas, and you must be outside Australia when it's granted.",
  bigIdeas: [
    { title: "Your settled child sponsors you", body: "Your child promises two years of support, and you must pass the balance of family test, which can't be waived.", icon: ICON.heart },
    { title: "Low cost, long queue", body: "A$8,665 for one applicant. Only a small number of places open each year, so the queue is far longer than the 143's.", icon: ICON.clock },
    { title: "Permanent residence at the end", body: "Granted while you're outside Australia, it gives you work, study, Medicare and a five-year travel facility.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your child, settled in Australia and 18 or over", icon: ICON.heart },
    { label: "Cost, one applicant", value: "A$8,665 over two instalments", icon: ICON.currencyDollar },
    { label: "How long", value: "Permanent", icon: ICON.home },
    { label: "Where you must be", value: "In or outside Australia to apply; outside at decision", icon: ICON.mapPin },
    { label: "Key test", value: "Balance of family test, never waived", icon: ICON.scale },
    { label: "The wait", value: "The longest queue of the parent visas", icon: ICON.listBullet },
  ],
  checkedAgainst: "Home Affairs, Services Australia and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply, stay lawful through a long wait, and meet health and character at the end.",
      does: [
        "Pass the [[bof|balance of family test]]",
        "Lodge online and pay the first instalment of A$6,600",
        "Hold a valid visa, or wait outside Australia",
        "Pay the second instalment of A$2,065 when invoiced",
      ],
    },
    {
      id: "child",
      name: "Your child (the sponsor)",
      short: "Your child",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you and promises support for your first two years.",
      does: [
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]]",
        "Gives support, accommodation and financial help for your first two years",
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
        "Checks the core criteria and gives you a [[queue-date|queue date]]",
        "Releases applications in queue-date order as places become available",
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
      detail: "Your child signs [[form40|Form 40]], promising support, accommodation and financial help for your first two years.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies online + pays",
      detail: "You lodge in [[immiaccount|ImmiAccount]], in or outside Australia, and pay the first instalment of A$6,600.",
    },
    {
      from: "government",
      to: "you",
      label: "Queue date",
      detail: "If the core criteria are met, Home Affairs gives you a [[queue-date|queue date]] in writing. If not, it refuses the application.",
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
      detail: "After health, character and the second instalment of A$2,065, Home Affairs decides. You must be outside Australia at that point, unless you're a retiree.",
    },
  ],
  journeyTitle: "From sponsorship to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check the two gateways",
      who: ["you", "child"],
      description: "Before you spend anything, confirm you pass the [[bof|balance of family test]] and that your child can sponsor you.",
      points: [
        "At least half your children are [[eligible-child|eligible children]], or more live here than in any other country",
        "Your child is [[settled]] in Australia and aged 18 or over",
        "No 870 sponsorship has been lodged for you",
      ],
      youHold: "A passing family count and a willing sponsor",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "weigh",
      short: "Weigh",
      title: "Weigh the 103 against the 143",
      who: ["you"],
      description: "The 103 costs A$8,665 for one applicant but has the longest queue of the parent visas. The Contributory Parent visa costs A$49,900, from a separate, shorter queue.",
      points: [
        "You can switch to a 143 or 173 later, but the 103 charges aren't refunded",
        "A new parent visa application means withdrawing the old one",
        "The new application gets its own queue date",
      ],
      youHold: "A decision on which parent visa to lodge",
      icon: ICON.scale,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge online and pay the first instalment",
      who: ["you", "child"],
      description: "Applications made on or after 22 April 2026 are lodged online in [[immiaccount|ImmiAccount]], with your documents and your child's Form 40.",
      points: [
        "In or outside Australia, but not in [[clearance|immigration clearance]]",
        "If your visa has [[c8503|condition 8503]], get it waived first",
        "List every family member, migrating or not",
      ],
      youHold: "An acknowledgement letter and a paid first instalment",
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
        "The visa is [[capped|capped and queued]]",
        "Applications are released in queue-date order as places become available",
        "Home Affairs publishes the queue dates it has released, not a processing time",
      ],
      youHold: "A written queue date",
      icon: ICON.listBullet,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Stay lawful through a long wait",
      who: ["you"],
      description: "No [[bridging|bridging visa]] comes with a 103 application, unless you applied as a retiree. Hold a valid visa, or wait outside Australia.",
      points: [
        "Tell Home Affairs about changes to your passport, contact details or family",
        "A child who turns 23 before the decision must show dependency because of disability",
        "Health is assessed at the end, so changes during the wait count",
      ],
      youHold: "Lawful status, or a plan to wait offshore, for the whole wait",
      icon: ICON.clock,
    },
    {
      id: "assure",
      short: "Assure",
      title: "Health, character and the Assurance of Support",
      who: ["government", "services", "you"],
      description: "After release from the queue, Home Affairs asks for health examinations, police certificates and the [[aos|Assurance of Support]].",
      points: [
        "The assurance lasts four years",
        "Bank guarantee: A$5,000 for one adult, A$7,000 for two",
        "An individual, a group of up to three people or an organisation can give it",
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
      title: "Grant outside Australia and first entry",
      who: ["government", "you"],
      description: "You must be outside Australia when the visa is decided (retirees can be in or outside). Enter before the first entry date in your grant letter.",
      points: [
        "Permanent residence, with work, study and Medicare",
        "A five-year [[travel-facility|travel facility]]",
        "Citizenship may follow after four years of residence, including 12 months as a permanent resident",
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
          note: "The test can't be waived. The 870 has no such test, but it's temporary and closes the door to a later parent visa.",
          link: { label: "Compare the 870", href: "/visas/family/sponsored-parent-temporary-visa-870" },
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Is your child a citizen or permanent resident who is settled in Australia and 18 or over?",
      help: "An eligible New Zealand citizen child can sponsor too. [[settled|Settled]] means living here lawfully for a reasonable period; policy generally looks for around two years.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Your child can sponsor you with Form 40 and a promise of two years of support." },
        {
          value: "recent",
          label: "My child only recently moved here or became a resident",
          status: "todo",
          note: "Your child may not be settled yet. Policy generally looks for around two years of lawful residence.",
        },
        {
          value: "under18",
          label: "My child is under 18",
          status: "todo",
          note: "Their cohabiting spouse, a relative or guardian, or an established community organisation can sponsor instead.",
        },
      ],
    },
    {
      id: "temp-parent",
      topic: "Sponsored Parent visa",
      question: "Have you applied for, or do you hold, a Sponsored Parent (Temporary) visa (870)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Keep it that way while you pursue this visa: an 870 application would make a 103 application impossible." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't apply for the 103 if you have applied for, or hold, an 870.",
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
          note: "The 103 costs A$8,665 for one applicant: A$6,600 when you apply and A$2,065 before grant.",
          link: { label: "Estimate your family's total", href: "#fees" },
        },
        {
          value: "wait",
          label: "A shorter queue, even at a much higher cost",
          status: "todo",
          note: "The Contributory Parent visa costs A$49,900 for one applicant and is processed from a separate, shorter queue.",
          link: { label: "Contributory Parent visa", href: "/visas/family/contributory-parent-visa-143-173" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you'll be",
      question: "Where will you be while you wait, and when the visa is decided?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "That fits: the 103 is decided while you're outside Australia." },
        {
          value: "visa",
          label: "In Australia, on another visa",
          status: "todo",
          note: "No bridging visa comes with a 103, so keep your visa valid, and be outside Australia when it's decided.",
        },
        {
          value: "aged",
          label: "In Australia, and at Age Pension age (67)",
          status: "todo",
          note: "The Aged Parent visa (804) is decided in Australia, usually with a bridging visa while you wait.",
          link: { label: "Aged Parent visa (804)", href: "/visas/family/aged-parent-visa-804" },
        },
      ],
    },
    {
      id: "children",
      topic: "Children in the application",
      question: "Will any child you include turn 23 before the visa is decided?",
      help: "Children aged 18 to 22 must be dependent on you. From 23, a child can stay in only if a physical or cognitive limitation stops them earning a living.",
      options: [
        { value: "no", label: "No, or I'm not including children", status: "ok", note: "Nothing to plan on this point." },
        {
          value: "maybe",
          label: "Yes, or possibly",
          status: "todo",
          note: "Because the queue is long, that child will need to show dependency because of disability, or they drop out of the application.",
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
        {
          value: "unsure",
          label: "Not sure yet",
          status: "todo",
          note: "Plan it now. It doesn't have to be your sponsor: an individual, a group of up to three people or an organisation can give it.",
        },
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
        { value: "clear", label: "No concerns", status: "ok", note: "Health examinations and police certificates come at the end, when Home Affairs asks for them." },
        {
          value: "concern",
          label: "Yes: a significant health condition or a criminal record",
          status: "todo",
          note: "Health is assessed at the end of the wait, and one applicant's result affects the whole family. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The 103 and the Contributory Parent visa share one queue.",
      fact: "They don't. The Contributory Parent visa is processed from a separate, shorter queue. The 103 has the longest queue of the parent visas.",
    },
    {
      myth: "After I apply, I can wait in Australia on a bridging visa.",
      fact: "Not on the strength of a 103. Only retirees under the Retirement visa pathway get one. Everyone else needs another visa while in Australia, and must be outside Australia when the visa is decided.",
    },
    {
      myth: "If I switch to the 143 later, my 103 charges carry over.",
      fact: "They don't. You can lodge a 143 or 173 at any time, but you must withdraw the 103 and its charges aren't refunded. The new application gets its own queue date.",
    },
    {
      myth: "The balance of family test can be waived in a hard case.",
      fact: "It can't. Children in Australia on temporary visas, including bridging visas, count as living overseas, and the test isn't waived.",
    },
    {
      myth: "My sponsoring child must give the Assurance of Support.",
      fact: "Not necessarily. An individual, a group of up to three people or an organisation that meets Services Australia's income test can give it. For the 103 it lasts four years.",
    },
    {
      myth: "Home Affairs will tell me how long the 103 takes.",
      fact: "It doesn't publish a processing time for queued parent visas. You get a queue date once you meet the core criteria, and Home Affairs publishes the queue dates it has released.",
    },
    {
      myth: "My child aged 22 can come with me, however long the queue takes.",
      fact: "Only while they're a dependent child. A child who turns 23 before the decision must show dependency because of a disability, or they drop out of the application.",
    },
    {
      myth: "My health was fine when I applied, so that part is done.",
      fact: "Health is assessed after release from the queue. Problems that develop during the long wait count, and one applicant's failure affects everyone in the application.",
    },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      intro: "Your part is the application, staying lawful through a long wait, and the final checks.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Count your children for the [[bof|balance of family test]]",
            "Weigh the 103 against the Contributory Parent visa",
            "Check no 870 has been applied for",
            "If your visa has [[c8503|condition 8503]], get it waived first",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge online in ImmiAccount and pay A$6,600",
            "List every family member, even those not migrating",
            "Include your child's Form 40",
          ],
        },
        {
          title: "While you wait",
          items: [
            "Hold a valid visa, or wait outside Australia",
            "Tell Home Affairs about changes to your passport, contact details or family",
            "Do health checks and police certificates only when asked",
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
            "Promise support, accommodation and financial help for your parent's first two years",
            "Don't lodge an 870 sponsorship if your parent wants this visa",
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
      id: "bof",
      term: "Balance of family test",
      definition: "The test of your family's links to Australia. You pass if at least half of your children and step-children are eligible children, or if more of them live in Australia than in any other single country. It can't be waived.",
    },
    {
      id: "eligible-child",
      term: "Eligible child",
      definition: "A child who is an Australian citizen, or an Australian permanent resident or eligible New Zealand citizen usually living in Australia. A child here on a temporary or bridging visa counts as living overseas.",
    },
    { id: "settled", term: "Settled", definition: "Living in Australia lawfully for a reasonable period. Policy generally looks for around two years." },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for your first two years.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A legal promise to repay recoverable income support paid to you. For the 103 it lasts four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation).",
    },
    {
      id: "queue-date",
      term: "Queue date",
      definition: "The date Home Affairs gives your application, in writing, once it meets the core criteria. Applications are released for final processing in queue-date order as places become available under the annual cap.",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "Only a small number of 103 places are released each year. Applications that meet the core criteria wait in a queue until places become available.",
    },
    {
      id: "instalments",
      term: "First and second instalment",
      definition: "The visa charge is paid in two parts: A$6,600 when you apply and A$2,065 when Home Affairs invoices it before grant. If the second isn't paid, the application is refused.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No Further Stay",
      definition: "A condition on some temporary visas. While it applies you can't be granted most substantive visas in Australia, so it must be waived before you apply here.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful in Australia while an application is processed. A 103 application doesn't come with one, unless you applied under the Retirement visa pathway.",
    },
    { id: "clearance", term: "Immigration clearance", definition: "The border check you pass through when you arrive in Australia. You can't lodge this application while you're in it." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years from grant. After that you need a Resident Return visa or citizenship to return as a permanent resident.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account for lodging and managing applications. Parent visa applications made on or after 22 April 2026 must be lodged there." },
    {
      id: "dependent-child",
      term: "Dependent child",
      definition: "A child under 18, a child aged 18 to 22 who depends on you, or a child aged 23 or over who can't work because of a physical or cognitive limitation.",
    },
    {
      id: "retiree",
      term: "Retirement visa pathway",
      definition: "A limited route for people who held a subclass 410 or 405 visa on 8 May 2018 and no other substantive visa since. Retirees need no sponsor, balance of family test or Assurance of Support.",
    },
  ],
  cta: {
    subtitle: "We check your family count, your sponsor and the trade-off between cost and waiting, tell you honestly where you stand, and prepare the application with you and your child.",
  },
  verifiedExtras: [
    {
      fact: "Services Australia manages the Assurance of Support: it assesses the assurer's income and then asks for the bank guarantee and term deposit.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "Age Pension age is 67 years or older (Services Australia), as stated on the Aged Parent visa page.",
      source: "/visas/family/aged-parent-visa-804",
    },
    {
      fact: "Condition 8503 (No Further Stay) means you cannot be granted most substantive visas while you remain in Australia, unless it is waived.",
      source: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/parent-103",
    },
  ],
  finder: parentFinder,
  balanceOfFamily: true,
  fees: {
    variants: [
      {
        id: "parent-103",
        label: "Parent visa (subclass 103)",
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
    notIncluded: "Not included: health examinations, police certificates, translations, and any review fee if the visa is refused.",
    notes: [
      "Each additional applicant also pays their own second instalment. The page doesn't state that amount, so this estimate leaves it out; Home Affairs invoices it.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation). It's returned after the four years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
};
