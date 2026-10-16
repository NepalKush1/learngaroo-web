import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Contributory Aged Parent visa (subclass 864
// and the temporary subclass 884). Every figure matches
// data/visas/family-parent.ts (checked against Home Affairs, the pricing
// table and Services Australia on 12 October 2026). Extras read on the Home
// Affairs 864 and 884 pages on 13 October 2026 are listed in verifiedExtras.

export const contributoryAgedParent864884Explainer: VisaExplainer = {
  slug: "contributory-aged-parent-visa-864-884",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The onshore Contributory Parent visa for a parent at Age Pension age (67): apply in Australia, usually wait here on a bridging visa, and pay A$49,900 for one applicant, in one go (864) or in two stages (884 first).",
  bigIdeas: [
    { title: "You apply and wait in Australia", body: "You must be in Australia when you apply and when it's decided. A bridging visa usually covers the wait.", icon: ICON.home },
    { title: "Age Pension age, settled child", body: "You must be 67 or older when you apply, sponsored by a settled child, and pass the balance of family test.", icon: ICON.heart },
    { title: "A big contribution, a shorter queue", body: "A$49,900 for one applicant over two instalments, for a shorter queue than the 804. The 884 first spreads the cost.", icon: ICON.banknotes },
  ],
  heroCard: [
    { label: "Who it's for", value: "A parent aged 67 or over, in Australia", icon: ICON.user },
    { label: "Who sponsors you", value: "Your child, settled in Australia and 18 or over", icon: ICON.heart },
    { label: "Cost, one applicant", value: "A$49,900 over two instalments (864)", icon: ICON.currencyDollar },
    { label: "How long", value: "Permanent (864); 2 years from grant (884)", icon: ICON.clock },
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
      role: "Apply in Australia at Age Pension age, pay both instalments and stay lawful.",
      does: [
        "Reach [[age-pension-age|Age Pension age]] before you apply",
        "Pass the [[bof|balance of family test]]",
        "Lodge in Australia and pay the first instalment",
        "Wait on your [[bridging|bridging visa]] and pay the second instalment when invoiced",
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
      does: ["Checks the assurer's income", "Asks for the bank guarantee: A$10,000 for one adult, A$14,000 for two", "Manages the assurance for its 10 years"],
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
      detail: "You lodge the 864 online, or the 884 on paper, while you're in Australia, and pay the first instalment of A$6,300.",
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
      detail: "When asked, your assurer gives an [[aos|Assurance of Support]]. Services Australia checks their income, then asks for the bank guarantee.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After health, character and the second instalment, Home Affairs decides while you're in Australia. The 864 makes you a permanent resident from that day.",
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
      id: "choose",
      short: "Choose",
      title: "Choose: the 864 now, or the 884 first",
      who: ["you"],
      description: "The 864 straight away costs A$49,900 for one applicant. The 884 costs A$35,430 and gives you two years with work rights; the 864 then costs A$555 to lodge.",
      points: [
        "The staged route costs more overall, but spreads the payments",
        "864: lodge online in [[immiaccount|ImmiAccount]]",
        "884: lodge on paper with [[form47pa|Form 47PA]]",
      ],
      youHold: "A decision on which subclass to lodge first",
      icon: ICON.scale,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Lodge in Australia and pay",
      who: ["you", "child"],
      description: "You, and anyone applying with you, must be in Australia but not in [[clearance|immigration clearance]] when you apply. Don't cancel your current visa.",
      points: [
        "Your child's Form 40 goes in with the application",
        "A Form 47A for each family member aged 18 or over",
        "Each extra applicant pays A$3,145 (18 or over) or A$1,580 (under 18)",
      ],
      youHold: "An acknowledgement letter, and usually a bridging visa in reserve",
      cost: "A$6,300 (864 or 884), paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "queue",
      short: "Queue",
      title: "Initial check and a queue date",
      who: ["government"],
      description: "Home Affairs checks the core criteria, then gives you a [[queue-date|queue date]] in writing or refuses the application.",
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
      title: "Wait in Australia on your bridging visa",
      who: ["you"],
      description: "Your [[bridging|bridging visa]] starts when your current visa ends, and lets you stay while the application is processed.",
      points: [
        "Check its conditions in [[vevo|VEVO]] before you work or travel",
        "To travel, get a [[bvb|Bridging visa B]] first: a Bridging visa A ends when you leave",
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
        "The assurance lasts 10 years",
        "Bank guarantee: A$10,000 for one adult, A$14,000 for two",
        "A$20,000 if an organisation gives it",
      ],
      youHold: "Cleared checks and an accepted assurance",
      icon: ICON.shieldCheck,
    },
    {
      id: "pay",
      short: "Pay",
      title: "Pay the second instalment",
      who: ["you"],
      description: "Home Affairs invoices the second instalment. If it isn't paid, the application is refused and the first instalment isn't refunded.",
      points: [
        "A$43,600 per applicant for a standard 864",
        "A$29,130 per applicant for the 884",
        "Lower for an 864 after an 884: Home Affairs invoices the exact amount",
      ],
      youHold: "A receipt for the second instalment",
      cost: "A$43,600 (864) or A$29,130 (884) per applicant",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant in Australia",
      who: ["government", "you"],
      description: "You must be in Australia when the visa is decided. The 864 makes you a permanent resident from the day of grant.",
      points: [
        "864: a five-year [[travel-facility|travel facility]]",
        "884: two years from grant, with work and study rights",
        "On an 884, lodge the 864 before the 884 ends",
      ],
      youHold: "Permanent residence (864) or a two-year 884",
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
      help: "It's checked on the day you apply. Only the main applicant needs to be that age: a partner included in the application can be younger.",
      options: [
        { value: "yes", label: "Yes, I'm 67 or older", status: "ok", note: "You meet the age criterion, which is assessed at the time you apply." },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "Applying before Age Pension age is a refusal risk. Below that age, look at the Contributory Parent visa (143 or 173) instead.",
          link: { label: "Contributory Parent visa", href: "/visas/family/contributory-parent-visa-143-173" },
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
          note: "Count before you pay anything. Children in Australia on temporary visas don't count as living here.",
          link: { label: "Use the calculator", href: "#family-test" },
        },
        {
          value: "fail",
          label: "No, I don't pass",
          status: "stop",
          note: "The test isn't waived. The 870 has no such test, but it's temporary, gives no work rights and closes the parent visas once you apply for it.",
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
          note: "Get a Bridging visa B (A$575) before you leave, and make sure you're in Australia when the visa is decided.",
        },
        {
          value: "outside",
          label: "I'm outside Australia",
          status: "stop",
          note: "The 864 and 884 are applied for and decided in Australia. From overseas, look at the Contributory Parent visa (143 or 173) instead.",
          link: { label: "Contributory Parent visa", href: "/visas/family/contributory-parent-visa-143-173" },
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
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check VEVO before you apply: an application made while 8503 applies is invalid." },
      ],
    },
    {
      id: "temp-parent",
      topic: "Sponsored Parent visa",
      question: "Have you applied for, or do you hold, a Sponsored Parent (Temporary) visa (870)?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Keep it that way: an 870 application would close the 864 and the 884." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't apply for the 864 or 884 if you have applied for, or hold, an 870.",
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
          label: "In one go: A$49,900 for one applicant (864)",
          status: "ok",
          note: "The 864 straight away: A$6,300 when you apply, then A$43,600 per applicant when invoiced.",
          link: { label: "Estimate your family's total", href: "#fees" },
        },
        {
          value: "staged",
          label: "Spread over several years (884 first)",
          status: "ok",
          note: "The 884 costs A$35,430 and gives you two years with work rights. The 864 then costs A$555 to lodge, plus a reduced second instalment. Overall this route costs more.",
          link: { label: "Compare both routes", href: "#fees" },
        },
        {
          value: "neither",
          label: "Neither is affordable",
          status: "todo",
          note: "The Aged Parent visa (804) costs A$8,665 for one applicant, with a much longer queue.",
          link: { label: "Aged Parent visa (804)", href: "/visas/family/aged-parent-visa-804" },
        },
      ],
    },
    {
      id: "assurance",
      topic: "Assurance of Support",
      question: "Can someone give an Assurance of Support for you?",
      help: "A 10-year promise to repay recoverable income support paid to you, backed by a bank guarantee. Home Affairs asks for it after release from the queue.",
      options: [
        {
          value: "yes",
          label: "Yes, my child or someone else can",
          status: "ok",
          note: "The assurer must meet Services Australia's income test and lodge a bank guarantee: A$10,000 for one adult or A$14,000 for two.",
        },
        {
          value: "unsure",
          label: "Not sure yet",
          status: "todo",
          note: "Plan it now. It doesn't have to be your sponsor or a family member: one person, several people or an organisation can give it.",
        },
        {
          value: "no",
          label: "No one can",
          status: "stop",
          note: "You must be able to obtain an Assurance of Support when asked, unless you apply under the limited [[retiree|Retirement visa pathway]].",
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
          note: "A condition likely to be a significant cost to the community can lead to refusal of all applicants, often after years in the queue. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can apply for the 864 from overseas and fly in later.",
      fact: "No. You, and anyone applying with you, must be in Australia (not in immigration clearance) when you apply and when the visa is decided.",
    },
    {
      myth: "My partner has to be 67 too.",
      fact: "No. Only the main applicant must have reached Age Pension age. A partner included as a secondary applicant pays the additional applicant charges and their own second instalment.",
    },
    {
      myth: "The 884-then-864 route saves money.",
      fact: "It costs more overall, but spreads the payments. After an 884, the 864 costs A$555 to lodge and its second instalment is reduced; Home Affairs invoices the exact amount.",
    },
    {
      myth: "I should cancel my visitor visa once I've applied.",
      fact: "Don't. The bridging visa Home Affairs usually grants starts only when your current visa ends.",
    },
    {
      myth: "On my bridging visa I can travel overseas and come back freely.",
      fact: "Not on a Bridging visa A: it ends when you leave Australia. Get a Bridging visa B (A$575) before any trip, and be in Australia when the visa is decided.",
    },
    {
      myth: "Condition 8503 doesn't matter if I'm otherwise eligible.",
      fact: "It does. If your visa carries condition 8503 (no further stay), the application is invalid unless the condition was waived first.",
    },
    {
      myth: "The balance of family test is relaxed for older parents.",
      fact: "It isn't. The test is never waived, whatever your age. An 884 holder who lodges the 864 in time has already met it.",
    },
    {
      myth: "Home Affairs publishes a processing time for the 864.",
      fact: "It doesn't. The 864 is capped and queued: you get a queue date, and Home Affairs publishes the queue dates it has released.",
    },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      intro: "Your part is a valid application in Australia, the payments, and staying lawful on your bridging visa.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Make sure you've reached [[age-pension-age|Age Pension age]]",
            "Count your children for the [[bof|balance of family test]]",
            "Check your visa has no [[c8503|condition 8503]], or get it waived",
            "Choose: the 864 straight away, or the 884 first",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Be in Australia, with anyone applying with you",
            "Lodge the 864 in ImmiAccount, or the 884 on paper with Form 47PA",
            "Pay the first instalment of A$6,300, and don't cancel your current visa",
          ],
        },
        {
          title: "While you wait",
          items: [
            "Check your bridging visa conditions in VEVO",
            "Get a Bridging visa B before any trip overseas",
            "Do health checks and police certificates when asked",
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
            "Support, accommodation and financial help for your parent's first two years on the visa",
            "If a sponsor dies while the parent holds an 884, the parent may still be eligible for the 864",
          ],
        },
        {
          title: "If you're the assurer",
          items: [
            "Meet Services Australia's income test",
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
      id: "age-pension-age",
      term: "Age Pension age",
      definition: "The age at which you could receive the Australian Age Pension. Services Australia states it is 67 years or older. You must have reached it on the day you apply.",
    },
    {
      id: "bof",
      term: "Balance of family test",
      definition: "The test of your family's links to Australia. You pass if at least half of your children and step-children are eligible children, or if more of them live in Australia than in any other single country. It isn't waived.",
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
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for your first two years on the visa.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A legal promise to repay recoverable income support paid to you. For Contributory Aged Parent visas it lasts 10 years, with a bank guarantee of A$10,000 for one adult or A$14,000 for two (A$20,000 for an organisation).",
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
      definition: "The visa charge is paid in two parts: the first when you apply, the second when Home Affairs invoices it before grant. If the second isn't paid, the application is refused without a refund of the first.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful while your application is processed. For the 864 and 884, Home Affairs usually grants one when you apply, and it starts when your current visa ends.",
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
      definition: "A condition on some temporary visas. If your current visa carries it, an application for the 864 or 884 is invalid unless the condition is waived first.",
    },
    { id: "clearance", term: "Immigration clearance", definition: "The border check you pass through when you arrive in Australia. You can't apply for the 864 or 884 while you're in it." },
    { id: "vevo", term: "VEVO", full: "Visa Entitlement Verification Online", definition: "Home Affairs' online service that shows your visa's conditions and entitlements, including your bridging visa's." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years for the 864. After that you need a Resident Return visa or citizenship to re-enter as a permanent resident.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account for lodging and managing applications. An 864 application made on or after 22 April 2026 must be lodged there." },
    {
      id: "form47pa",
      term: "Form 47PA",
      full: "Application for a parent to migrate to Australia",
      definition: "The paper form for the 884, lodged with your sponsor's Form 40 and a Form 47A for each adult family member.",
    },
    {
      id: "second-stage",
      term: "Second-stage applicant",
      definition: "Someone applying for the 864 while holding an 884, or within 28 days after it ended. They pay A$555 to lodge and have already met the balance of family test.",
    },
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
      fact: "The Contributory Aged Parent visa (864) costs A$49,900 in total and is processed from a separate, shorter queue than the Aged Parent visa (804).",
      source: "/visas/family/aged-parent-visa-804",
    },
    {
      fact: "The sponsor or a family member does not need to provide the Assurance of Support: an individual, more than one person, or an organisation can provide it.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864",
    },
    {
      fact: "The subclass 884 lets you stay for 2 years from the date of grant, and VEVO shows when you must leave.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-temporary-884",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/contributory-aged-parent-864",
    },
    {
      fact: "Settled means lawfully resident in Australia for a reasonable period; departmental policy generally looks for around two years of lawful residence.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "The Retirement visa pathway is for people who on 8 May 2018 held or had held a Retirement (subclass 410) or Investor Retirement (subclass 405) visa and have held no other substantive visa since.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
  ],
  finder: parentFinder,
  balanceOfFamily: true,
  fees: {
    variantLabel: "Which route?",
    variants: [
      {
        id: "direct",
        label: "864 straight away",
        hint: "Two instalments. You wait in Australia, usually on a bridging visa.",
        primary: [
          { label: "First instalment, when you apply", amount: 6300 },
          { label: "Second instalment, invoiced before grant", amount: 43600 },
        ],
        adult: [
          { label: "First instalment", amount: 3145 },
          { label: "Second instalment", amount: 43600 },
        ],
        child: [
          { label: "First instalment", amount: 1580 },
          { label: "Second instalment", amount: 43600 },
        ],
      },
      {
        id: "staged",
        label: "884 first, then 864",
        hint: "Leaves out the 864 second instalment, which Home Affairs invoices. In total this route costs more.",
        primary: [
          { label: "884 first instalment, when you apply", amount: 6300 },
          { label: "884 second instalment, before the 884 is granted", amount: 29130 },
          { label: "864 first instalment, as an 884 holder", amount: 555 },
        ],
        adult: [
          { label: "884 first instalment", amount: 3145 },
          { label: "884 second instalment", amount: 29130 },
          { label: "864 first instalment, as an 884 holder", amount: 280 },
        ],
        child: [
          { label: "884 first instalment", amount: 1580 },
          { label: "884 second instalment", amount: 29130 },
          { label: "864 first instalment, as an 884 holder", amount: 135 },
        ],
      },
    ],
    maxAdults: 3,
    maxChildren: 3,
    notIncluded: "Not included: health examinations, police certificates, translations, a Bridging visa B if you travel (A$575), and any review fee if the visa is refused.",
    notes: [
      "The second instalment is charged per applicant: each person included pays their own.",
      "After an 884, the 864 second instalment is lower than A$43,600. The page doesn't state the amount, so this estimate leaves it out; Home Affairs invoices the exact amount.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$10,000 for one adult or A$14,000 for two (A$20,000 for an organisation). It's refunded after the 10 years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
  timeline: {
    navLabel: "Your 884 dates",
    eyebrow: "Timeline",
    title: "When does your 884 end?",
    highlight: "884",
    subtitle: "Pick the month your 884 was granted. It runs for two years from grant, and you lodge the 864 before it ends.",
    startLabel: "884 granted",
    startPrompt: "When was your 884 granted?",
    milestones: [
      {
        months: 24,
        label: "Your 884 ends",
        detail: "Two years after grant, your 884 ends. Lodge the 864 before then to keep the A$555 first instalment and the balance of family exemption as a [[second-stage|second-stage applicant]].",
        kind: "end",
      },
    ],
    footnote: "VEVO shows your exact end date. Within 28 days after the 884 ends you can still apply as an 884 holder. Later than that you need compelling and compassionate circumstances, or the 864 is a standard application at full charges.",
  },
};
