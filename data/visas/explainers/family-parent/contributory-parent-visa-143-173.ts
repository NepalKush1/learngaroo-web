import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Contributory Parent visa (subclass 143 and
// the temporary subclass 173). Every figure matches data/visas/family-parent.ts
// (checked against Home Affairs, the pricing table and Services Australia on
// 12 October 2026). When the 173's two years start was read on the Home
// Affairs 173 page on 13 October 2026 (see verifiedExtras).

export const contributoryParent143173Explainer: VisaExplainer = {
  slug: "contributory-parent-visa-143-173",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for a parent whose child is settled in Australia: A$49,900 for one applicant, for a shorter queue than the 103. You can pay in one go (143) or spread the cost by holding the two-year 173 first.",
  bigIdeas: [
    { title: "Your settled child sponsors you", body: "Your child promises two years of support, and you must pass the balance of family test, which is never waived.", icon: ICON.heart },
    { title: "A big contribution, a shorter queue", body: "A$49,900 for one applicant over two instalments. Holding the two-year 173 first spreads the cost, but adds to it.", icon: ICON.banknotes },
    { title: "It ends in permanent residence", body: "The 143 is permanent, with work, study and Medicare. A 173 first gives you two years here with work rights.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your child, settled in Australia and 18 or over", icon: ICON.heart },
    { label: "Cost, one applicant", value: "A$49,900 over two instalments (143)", icon: ICON.currencyDollar },
    { label: "How long", value: "Permanent (143); 2 years (173)", icon: ICON.clock },
    { label: "Work and study", value: "Full rights on both; Medicare on the 143", icon: ICON.briefcase },
    { label: "Key test", value: "Balance of family test, never waived", icon: ICON.scale },
    { label: "The wait", value: "A capped queue, released in queue-date order", icon: ICON.listBullet },
  ],
  checkedAgainst: "Home Affairs, Services Australia and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply, pay both instalments and meet health and character.",
      does: [
        "Pass the [[bof|balance of family test]]",
        "Lodge the 143 online, or the 173 on paper, and pay the first instalment",
        "Stay lawful through the wait in the queue",
        "Pay the second instalment when it's invoiced",
      ],
    },
    {
      id: "child",
      name: "Your child (the sponsor)",
      short: "Your child",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you and promises support for your first two years in Australia.",
      does: [
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]]",
        "Gives support, accommodation and financial help for your first two years",
        "Can be your assurer, but doesn't have to be",
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
      does: ["Checks the assurer's income", "Asks for the bank guarantee and term deposit", "Manages the assurance for its 10 years"],
    },
  ],
  flows: [
    {
      from: "child",
      to: "government",
      label: "Sponsors you (Form 40)",
      detail: "Your child signs [[form40|Form 40]], promising support, accommodation and financial help for your first two years in Australia.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies + pays",
      detail: "You lodge the 143 online, or the 173 on paper, and pay the first instalment: A$6,300 for the 143 or A$4,245 for the 173.",
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
      detail: "When asked, your assurer gives an [[aos|Assurance of Support]]. Services Australia checks their income, then asks for the bank guarantee.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After health, character and the second instalment, Home Affairs decides. For a standard 143 or any 173, you must be outside Australia at that point.",
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
        "You haven't applied for, and don't hold, an 870 visa",
      ],
      youHold: "A passing family count and a willing sponsor",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "choose",
      short: "Choose",
      title: "Choose: the 143 now, or the 173 first",
      who: ["you"],
      description: "The 143 straight away costs A$49,900 for one applicant. The 173 costs A$33,375 and gives you two years here with work rights; the 143 then costs A$555 to lodge.",
      points: [
        "The two-stage route costs more overall, but spreads the payments",
        "143: lodge online in [[immiaccount|ImmiAccount]]",
        "173: lodge on paper with [[form47pa|Form 47PA]]",
      ],
      youHold: "A decision on which subclass to lodge first",
      icon: ICON.scale,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge and pay the first instalment",
      who: ["you", "child"],
      description: "You can be in or outside Australia, but not in [[clearance|immigration clearance]], when you apply. Your child's Form 40 goes in with your application.",
      points: [
        "A Form 47A for each family member aged 18 or over, even if not migrating",
        "If your visa has [[c8503|condition 8503]], get it waived first",
        "List every family member, migrating or not",
      ],
      youHold: "An acknowledgement letter and a paid first instalment",
      cost: "A$6,300 (143) or A$4,245 (173), paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "queue",
      short: "Queue",
      title: "Initial check and a queue date",
      who: ["government"],
      description: "Home Affairs checks the core criteria: sponsor, balance of family and, where they apply, health and character. If they're met, you get a [[queue-date|queue date]] in writing.",
      points: [
        "The visas are [[capped|capped and queued]]",
        "Applications are released in queue-date order as places become available",
        "Home Affairs publishes the queue dates it has released, not a processing time",
      ],
      youHold: "A written queue date",
      icon: ICON.listBullet,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Stay lawful while you wait",
      who: ["you"],
      description: "A standard 143 or a 173 application doesn't come with a [[bridging|bridging visa]]. Keep holding a valid visa, or wait outside Australia.",
      points: [
        "A 173 holder applying for the 143 does get a bridging visa",
        "Tell Home Affairs about a new passport, address or family change",
        "Don't arrange police certificates until you're asked",
      ],
      youHold: "Lawful status for the whole wait",
      icon: ICON.clock,
    },
    {
      id: "assure",
      short: "Assure",
      title: "Health, character and the Assurance of Support",
      who: ["government", "services", "you"],
      description: "Once your application is released from the queue, Home Affairs asks for health examinations, police certificates and the [[aos|Assurance of Support]].",
      points: [
        "The assurance lasts 10 years",
        "Bank guarantee: A$10,000 for one adult, A$14,000 for two",
        "Any person, group of people or organisation meeting the income test can give it",
      ],
      youHold: "Cleared checks and an accepted assurance",
      icon: ICON.shieldCheck,
    },
    {
      id: "pay",
      short: "Pay",
      title: "Pay the second instalment",
      who: ["you"],
      description: "Home Affairs sends an invoice. If it isn't paid, the application is refused and the first instalment isn't refunded.",
      points: [
        "A$43,600 per applicant for a standard 143",
        "A$29,130 per applicant for a 173",
        "Lower for a 143 after a 173: Home Affairs invoices the exact amount",
      ],
      youHold: "A receipt for the second instalment",
      cost: "A$43,600 (143) or A$29,130 (173) per applicant",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant and first entry",
      who: ["government", "you"],
      description: "A standard 143 or any 173 is decided while you're outside Australia. Enter before the first entry date in your grant letter.",
      points: [
        "143: permanent, with a five-year [[travel-facility|travel facility]]",
        "173: two years in Australia, with work and study rights",
        "On a 173, apply for the 143 before the 173 ends",
      ],
      youHold: "Permanent residence (143) or a two-year 173",
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
          note: "Count before you pay anything. Children in Australia on temporary or bridging visas count as living overseas.",
          link: { label: "Use the calculator", href: "#family-test" },
        },
        {
          value: "fail",
          label: "No, I don't pass",
          status: "stop",
          note: "Home Affairs won't waive the test, even in compelling circumstances. The 870 has no such test, but it's temporary and has no work rights.",
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
          note: "Their cohabiting spouse, a relative or guardian, or a community organisation operating in Australia for at least a year can sponsor instead.",
        },
      ],
    },
    {
      id: "temp-parent",
      topic: "Sponsored Parent visa",
      question: "Have you applied for, or do you hold, a Sponsored Parent (Temporary) visa (870)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Keep it that way while you pursue this visa: an 870 application would close the 143 and the 173." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't apply for the 143 or 173 if you have applied for, or hold, an 870.",
          link: { label: "Talk it through", href: "/bookings" },
        },
      ],
    },
    {
      id: "route",
      topic: "Paying for it",
      question: "How would you rather pay?",
      options: [
        {
          value: "direct",
          label: "In one go: A$49,900 for one applicant (143)",
          status: "ok",
          note: "The 143 straight away: A$6,300 when you apply, then A$43,600 per applicant when invoiced.",
          link: { label: "Estimate your family's total", href: "#fees" },
        },
        {
          value: "staged",
          label: "Spread over several years (173 first)",
          status: "ok",
          note: "The 173 costs A$33,375 and gives you two years here. The 143 then costs A$555 to lodge, plus a reduced second instalment. Overall this route costs more.",
          link: { label: "Compare both routes", href: "#fees" },
        },
        {
          value: "neither",
          label: "Neither is affordable",
          status: "todo",
          note: "The Parent visa (subclass 103) costs A$8,665 for one applicant, with a much longer queue.",
          link: { label: "Parent visa (subclass 103)", href: "/visas/family/parent-visa-103" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you'll be",
      question: "Where will you be while you wait, and when the visa is decided?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "That suits a standard 143 or a 173: both are decided while you're outside Australia." },
        {
          value: "visa",
          label: "In Australia, on another visa",
          status: "todo",
          note: "No bridging visa comes with a standard 143 or a 173, and you must be outside Australia at the decision. Keep your visa valid, or plan to wait overseas.",
        },
        {
          value: "aged",
          label: "In Australia, and at Age Pension age (67)",
          status: "todo",
          note: "The Contributory Aged Parent visa (864) is decided in Australia, usually with a bridging visa while you wait.",
          link: { label: "Contributory Aged Parent visa", href: "/visas/family/contributory-aged-parent-visa-864-884" },
        },
      ],
    },
    {
      id: "assurance",
      topic: "Assurance of Support",
      question: "Can someone give an Assurance of Support for you?",
      help: "A 10-year legal promise, managed by Services Australia, to repay recoverable income support paid to you. It needs a bank guarantee.",
      options: [
        {
          value: "yes",
          label: "Yes, my child or someone else can",
          status: "ok",
          note: "The assurer must pass Services Australia's income test and lodge a bank guarantee: A$10,000 for one adult or A$14,000 for two.",
        },
        {
          value: "unsure",
          label: "Not sure yet",
          status: "todo",
          note: "It's asked for later, but plan now. Any person, group of people or organisation that meets the income test can give it.",
        },
        {
          value: "no",
          label: "No one can",
          status: "stop",
          note: "You must be able to obtain an Assurance of Support when Home Affairs asks. Only the limited [[retiree|Retirement visa pathway]] is exempt.",
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for anyone in your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Health examinations and police certificates come later, when Home Affairs asks for them." },
        {
          value: "concern",
          label: "Yes: a significant health condition or a criminal record",
          status: "todo",
          note: "One person's health result can lead to refusal for the whole family, including some members who aren't migrating. Get advice before you pay a second instalment.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Going through the 173 first is the cheaper way to get the 143.",
      fact: "It's the opposite. The two-stage route costs more overall, but spreads the payments over several years. After a 173, the 143 costs A$555 to lodge and its second instalment is reduced; Home Affairs invoices the exact balance.",
    },
    {
      myth: "Home Affairs can waive the balance of family test if my case is compelling.",
      fact: "It won't. Home Affairs states it won't waive the test, even in compelling circumstances. Children in Australia on temporary visas, including bridging visas, don't count as living here.",
    },
    {
      myth: "My sponsoring child has to give the Assurance of Support.",
      fact: "Not necessarily. Any person, group of people or organisation that meets Services Australia's income test can give it. For this visa it lasts 10 years, with a bank guarantee of A$10,000 for one adult or A$14,000 for two.",
    },
    {
      myth: "Once I apply, I can wait in Australia on a bridging visa.",
      fact: "Not for a standard 143 or a 173. Keep holding another visa or wait overseas, and be outside Australia when the visa is decided. The exception: a 173 holder applying for the 143 gets a bridging visa.",
    },
    {
      myth: "A Sponsored Parent visa (870) now won't affect a permanent visa later.",
      fact: "It will. You can't apply for the 143 or 173 if you have applied for, or hold, an 870. Choose your route before you lodge anything.",
    },
    {
      myth: "If I can't pay the second instalment, I'll get my first instalment back.",
      fact: "No. If the second instalment isn't paid, Home Affairs refuses the application and keeps the first instalment.",
    },
    {
      myth: "Home Affairs will tell me exactly how long the queue is.",
      fact: "It doesn't publish a processing time for queued parent visas. It gives you a queue date, releases applications in queue-date order as places become available, and publishes the queue dates it has released.",
    },
    {
      myth: "Each parent needs a separate application.",
      fact: "No. One parent is the main applicant and the other is included as their partner. Each pays their own charges, including a second instalment, and both must meet health and character.",
    },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      intro: "Your part is the application, the payments, and staying lawful through the wait.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Count your children for the [[bof|balance of family test]]",
            "Choose: the 143 straight away, or the 173 first",
            "Check you haven't applied for an 870",
            "If your visa has [[c8503|condition 8503]], get it waived first",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge the 143 in ImmiAccount, or the 173 on paper with Form 47PA",
            "Pay the first instalment: A$6,300 (143) or A$4,245 (173)",
            "List every family member, even those not migrating",
          ],
        },
        {
          title: "While you wait",
          items: [
            "Hold a valid visa, or wait outside Australia",
            "Tell Home Affairs about changes to your passport, address or family",
            "Do health checks and police certificates only when asked",
            "Pay the second instalment when it's invoiced",
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
            "Check no 870 sponsorship or visa has been started for your parent",
          ],
        },
        {
          title: "Your promise",
          items: [
            "Support, accommodation and financial help for your parent's first two years in Australia",
            "You can withdraw before a decision, but Home Affairs may then refuse the visa or ask for another sponsor",
            "After grant you can't withdraw",
          ],
        },
        {
          title: "If you're the assurer",
          items: [
            "Pass Services Australia's income test",
            "Lodge a bank guarantee: A$10,000 for one adult or A$14,000 for two",
            "Recoverable income support paid to your parent within the 10 years becomes your debt",
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
      definition: "The test of your family's links to Australia. You pass if at least half of your children and step-children are eligible children, or if more of them live in Australia than in any other single country. Home Affairs won't waive it.",
    },
    {
      id: "eligible-child",
      term: "Eligible child",
      definition: "A child who is an Australian citizen, or an Australian permanent resident or eligible New Zealand citizen usually living in Australia. A child in Australia on a temporary visa isn't one.",
    },
    { id: "settled", term: "Settled", definition: "Living in Australia lawfully for a reasonable period. Departmental policy generally looks for around two years of lawful residence." },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes. It includes the promise of support, accommodation and financial help for your first two years in Australia.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A legal promise, managed by Services Australia, to repay recoverable income support paid to you. For Contributory Parent visas it lasts 10 years, with a bank guarantee of A$10,000 for one adult or A$14,000 for two.",
    },
    {
      id: "queue-date",
      term: "Queue date",
      definition: "The date Home Affairs gives your application, in writing, once it meets the core criteria. Applications are released for final processing in queue-date order as places become available under the annual cap.",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "The number of these visas granted each year is limited. Applications that meet the core criteria wait in a queue until places become available.",
    },
    {
      id: "instalments",
      term: "First and second instalment",
      definition: "The visa charge is paid in two parts: the first when you apply, the second when Home Affairs invoices it before grant. If the second isn't paid, the application is refused and the first isn't refunded.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No Further Stay",
      definition: "A condition on some temporary visas. While it applies you can't be granted most substantive visas in Australia, so it must be waived before you apply for this visa here.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful in Australia while an application is processed. A standard 143 or a 173 application doesn't come with one; a 173 holder applying for the 143 gets one.",
    },
    { id: "clearance", term: "Immigration clearance", definition: "The border check you pass through when you arrive in Australia. You can't lodge this application while you're in it." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years from the 143 grant. After that you need a Resident Return visa or citizenship to return as a permanent resident.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account for lodging and managing applications. A 143 application made on or after 22 April 2026 must be lodged there." },
    {
      id: "form47pa",
      term: "Form 47PA",
      full: "Application for a parent to migrate to Australia",
      definition: "The paper form for the 173. You send it by post or courier with your sponsor's Form 40 and a Form 47A for each family member aged 18 or over.",
    },
    {
      id: "second-stage",
      term: "Second-stage applicant",
      definition: "Someone applying for the 143 while holding a 173, or within 28 days after it ended. They pay A$555 to lodge and have already met the balance of family test; those still holding the 173 get a bridging visa.",
    },
    {
      id: "retiree",
      term: "Retirement visa pathway",
      definition: "A limited route for people who held a Retirement (410) or Investor Retirement (405) visa on 8 May 2018 and no other substantive visa since. Retirees need no sponsor, balance of family test or Assurance of Support.",
    },
  ],
  cta: {
    subtitle: "We check your family count, your sponsor and your budget against these rules, tell you honestly where you stand, and prepare the application with you and your child.",
  },
  verifiedExtras: [
    {
      fact: "The subclass 173 visa period starts on the date you enter Australia after it is granted, and you can stay for 2 years. VEVO shows when you must leave.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-temporary-173",
    },
    {
      fact: "Age Pension age is 67 years or older (Services Australia), as stated on the Contributory Aged Parent visa page.",
      source: "/visas/family/contributory-aged-parent-visa-864-884",
    },
    {
      fact: "Condition 8503 (No Further Stay) means you cannot be granted most substantive visas while you remain in Australia; Home Affairs can waive it only for a major change beyond your control after grant.",
      source: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-parent-143",
    },
  ],
  finder: parentFinder,
  balanceOfFamily: true,
  fees: {
    variantLabel: "Which route?",
    variants: [
      {
        id: "direct",
        label: "143 straight away",
        hint: "Two instalments. You wait outside Australia for the decision.",
        primary: [
          { label: "First instalment, when you apply", amount: 6300 },
          { label: "Second instalment, invoiced before grant", amount: 43600 },
        ],
        adult: [
          { label: "First instalment", amount: 2125 },
          { label: "Second instalment", amount: 43600 },
        ],
        child: [
          { label: "First instalment", amount: 1065 },
          { label: "Second instalment", amount: 43600 },
        ],
      },
      {
        id: "staged",
        label: "173 first, then 143",
        hint: "Leaves out the 143 second instalment, which Home Affairs invoices. In total this route costs more.",
        primary: [
          { label: "173 first instalment, when you apply", amount: 4245 },
          { label: "173 second instalment, before the 173 is granted", amount: 29130 },
          { label: "143 first instalment, as a 173 holder", amount: 555 },
        ],
        adult: [
          { label: "173 first instalment", amount: 2125 },
          { label: "173 second instalment", amount: 29130 },
          { label: "143 first instalment, as a 173 holder", amount: 280 },
        ],
        child: [
          { label: "173 first instalment", amount: 1065 },
          { label: "173 second instalment", amount: 29130 },
          { label: "143 first instalment, as a 173 holder", amount: 135 },
        ],
      },
    ],
    maxAdults: 3,
    maxChildren: 3,
    notIncluded: "Not included: health examinations, police certificates, translations, and any review fee if the visa is refused.",
    notes: [
      "The second instalment is charged per applicant: each person included pays their own.",
      "After a 173, the 143 second instalment is lower than A$43,600. The page doesn't state the amount, so this estimate leaves it out; Home Affairs invoices the exact balance.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$10,000 for one adult or A$14,000 for two (A$20,000 if an organisation gives it). It's refunded after the 10 years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
  timeline: {
    navLabel: "Your 173 dates",
    eyebrow: "Timeline",
    title: "When does your 173 end?",
    highlight: "173",
    subtitle: "Pick the month you first entered Australia on your 173. Its two years run from that entry, and you apply for the 143 before they end.",
    startLabel: "First entry on your 173",
    startPrompt: "When did you first enter Australia on your 173?",
    milestones: [
      {
        months: 24,
        label: "Your 173 ends",
        detail: "Two years after your first entry, your 173 ends. Lodge the 143 before then: Home Affairs encourages lodging straight after the 173 is granted, and as a [[second-stage|second-stage applicant]] you pay A$555 to lodge.",
        kind: "end",
      },
    ],
    footnote: "VEVO shows your exact end date. If your 173 has ended, you can still apply as a 173 holder within 28 days. After that you need compelling and compassionate circumstances, or the 143 is a standard application at full charges.",
  },
};
