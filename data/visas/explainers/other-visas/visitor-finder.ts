import type { FinderConfig } from "../types";

// "Which visitor or holiday visa fits?" Shared by the 600, 601, 651, 417 and
// 462 explainers. Every outcome is built from what the library pages state
// about passports, purposes and stays (data/visas/other-visas-visitor.ts,
// checked 12 October 2026). No glossary tokens here: the finder is shared,
// and each page has its own glossary.

export const visitorFinder: FinderConfig = {
  id: "visitor-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which visitor or holiday visa fits?",
  highlight: "fits",
  subtitle: "Up to four questions about your trip, your passport and how long you want to stay. Nothing is saved or sent anywhere.",
  start: "purpose",
  questions: [
    {
      id: "purpose",
      question: "What's the main reason for your trip?",
      help: "Pick the one that matters most. You can't work on a visitor visa, so a working holiday is a separate choice.",
      options: [
        { label: "A holiday, or visiting family or friends", next: "holiday" },
        {
          label: "Business visits: meetings, a conference, a trade fair or negotiations",
          hint: "No paid work for an Australian organisation",
          next: "bizPassport",
        },
        {
          label: "Travelling for up to a year and working to fund it",
          hint: "A working holiday, for people aged 18 to 30 (up to 35 for some passports)",
          next: "whmPassport",
        },
        { label: "Medical treatment, donating an organ, or supporting a patient", next: "mt602" },
      ],
    },
    {
      id: "holiday",
      question: "Where are you now, and how long do you want to stay?",
      help: "The ETA and eVisitor allow up to 3 months per visit. A longer stay needs a Visitor visa (600).",
      options: [
        { label: "Outside Australia, staying up to 3 months at a time", next: "passport" },
        { label: "Outside Australia, staying longer than 3 months", next: "tourist-offshore" },
        {
          label: "Already in Australia, and I want to stay longer",
          hint: "For example on an ETA, eVisitor, visitor or student visa",
          next: "tourist-onshore",
        },
      ],
    },
    {
      id: "passport",
      question: "Which passport will you travel on?",
      help: "Dual nationals: apply with an eligible passport and travel on that same passport.",
      options: [
        {
          label: "An EU passport, or UK (British Citizen), Norway, Iceland or Switzerland",
          hint: "Also Andorra, Liechtenstein, Monaco, San Marino and Vatican City",
          next: "evisitor",
        },
        {
          label: "US, Canada, Japan, South Korea, Singapore, Malaysia, Brunei, Hong Kong or Taiwan",
          hint: "Including UK British National (Overseas) passports. Taiwan: not official or diplomatic passports.",
          next: "eta",
        },
        { label: "Another passport", next: "other" },
      ],
    },
    {
      id: "other",
      question: "Which best describes your trip?",
      options: [
        { label: "A holiday, or a visit to family or friends", next: "tourist-offshore" },
        {
          label: "A relative in Australia will sponsor me",
          hint: "They take responsibility for you leaving on time and may have to pay a security bond",
          next: "sponsored-family",
        },
        {
          label: "Regular trips, on a passport from China or South-East Asia",
          hint: "China, Brunei, Cambodia, Indonesia, Laos, Malaysia, the Philippines, Singapore, Thailand, Timor-Leste or Vietnam",
          next: "frequent-traveller",
        },
        { label: "A group tour from China, booked with an approved travel agent", next: "ads" },
      ],
    },
    {
      id: "bizPassport",
      question: "Which passport will you travel on?",
      help: "The ETA and eVisitor also allow business visitor activities, for up to 3 months per visit.",
      options: [
        {
          label: "An EU passport, or UK (British Citizen), Norway, Iceland or Switzerland",
          hint: "Also Andorra, Liechtenstein, Monaco, San Marino and Vatican City",
          next: "evisitor",
        },
        {
          label: "US, Canada, Japan, South Korea, Singapore, Malaysia, Brunei, Hong Kong or Taiwan",
          hint: "Including UK British National (Overseas) passports. Taiwan: not official or diplomatic passports.",
          next: "eta",
        },
        { label: "Another passport", next: "business-visitor" },
      ],
    },
    {
      id: "whmPassport",
      question: "Which passport do you hold?",
      help: "Working holiday visas depend on your passport and your age. A first visa must be applied for from outside Australia.",
      options: [
        {
          label: "UK, Canada, Ireland, France, Germany, Italy, Japan, South Korea or another 417 country",
          hint: "Also Belgium, Cyprus, Denmark, Estonia, Finland, Hong Kong, Malta, the Netherlands, Norway, Sweden and Taiwan",
          next: "age417",
        },
        {
          label: "US, China, India, Vietnam, Indonesia, Spain, Thailand or another 462 country",
          hint: "Also Argentina, Austria, Brazil, Chile, the Czech Republic, Ecuador, Greece, Hungary, Israel, Luxembourg, Malaysia, Mongolia, Papua New Guinea, Peru, Poland, Portugal, San Marino, Singapore, the Slovak Republic, Slovenia, Switzerland, Türkiye and Uruguay",
          next: "age462",
        },
        { label: "Neither of these", next: "none" },
      ],
    },
    {
      id: "age417",
      question: "How old will you be when you apply?",
      help: "Lodge before midnight Australian Eastern time on the day before your 31st birthday (36th for the higher-limit countries).",
      options: [
        { label: "18 to 30", next: "whv417" },
        {
          label: "31 to 35, with a passport from a country that allows up to 35",
          hint: "Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, South Korea or the UK",
          next: "whv417",
        },
        { label: "Under 18, or over the limit for my passport", next: "none" },
      ],
    },
    {
      id: "age462",
      question: "How old will you be when you apply?",
      help: "Lodge before midnight Australian Eastern time on the day before your 31st birthday.",
      options: [
        { label: "18 to 30", next: "whv462" },
        { label: "Under 18, or 31 or over", next: "none" },
      ],
    },
  ],
  outcomes: [
    {
      id: "evisitor",
      title: "eVisitor (subclass 651)",
      body: "Your passport can use the eVisitor: a free visa you apply for online in ImmiAccount while outside Australia. It's valid for 12 months, with stays of up to 3 months each visit, for holidays, family visits and business visitor activities. You can't work on it.",
      watch: [
        "A criminal conviction, or a health matter such as hospital, health care or childcare placements: Home Affairs says to apply for a Visitor visa (600) instead.",
        "Need more than 3 months at a time? You need a Visitor visa (600).",
        "Already hold a Working Holiday (417) or Work and Holiday (462) visa? An eVisitor grant ends it.",
        "British National (Overseas) passports can't use the eVisitor; they use the ETA (601).",
      ],
      href: "/visas/other-visas/evisitor-visa-651",
    },
    {
      id: "eta",
      title: "Electronic Travel Authority (subclass 601)",
      body: "Your passport can use the ETA. You apply in the official Australian ETA app while outside Australia and pay a A$20 service charge. It's valid for 12 months, with stays of up to 3 months each visit, for holidays, family visits and business visitor activities. You can't work on it.",
      watch: [
        "A criminal conviction or a health matter: Home Affairs recommends a Visitor visa (600) instead.",
        "Need more than 3 months at a time? You need a Visitor visa (600).",
        "The ETA is linked to one passport. Travel on that passport, and apply again if you get a new one.",
        "Apply only in the official app: third-party websites charge extra and aren't needed.",
      ],
      href: "/visas/other-visas/electronic-travel-authority-601",
    },
    {
      id: "tourist-offshore",
      title: "Visitor visa (subclass 600), Tourist stream (apply outside Australia)",
      body: "The standard visitor visa for a holiday or a family visit when the ETA or eVisitor doesn't fit, or you need a longer stay. You apply from outside Australia for A$250. Home Affairs usually grants 3 months, and up to 12 months in certain circumstances. You can't work on it.",
      watch: [
        "You must show you're a genuine visitor with enough money for your stay. Reasons to return home, such as a job or family, matter.",
        "Parents of Australian citizens or permanent residents can ask for a multiple-entry visa valid for more than 12 months, with no more than 12 months in Australia in any 18-month period.",
        "Parents who want to stay longer than 12 months at a time can look at the Sponsored Parent (Temporary) visa (870).",
        "Each person, including a child, lodges their own application and pays their own charge.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "tourist-onshore",
      title: "Visitor visa (subclass 600), Tourist stream (apply in Australia)",
      body: "Visitor visas, the ETA and the eVisitor can't be extended, so to stay longer for a holiday or a family matter you apply for a new Visitor visa before your current visa ends. It costs A$630, plus A$700 if the visa you hold, or last held, was also applied for in Australia.",
      watch: [
        "To apply online you need a substantive visa, or one that ended within the last 28 days.",
        "Condition 8503 (No Further Stay) on your current visa blocks the application unless it's waived.",
        "If you've been on visitor, working holiday or bridging visas, a further visa taking you past 12 months in a row needs exceptional circumstances.",
        "Applying before your current visa ends gives you a Bridging visa A while you wait.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "sponsored-family",
      title: "Visitor visa (subclass 600), Sponsored Family stream",
      body: "A settled relative in Australia sponsors your visit and takes responsibility for you keeping to the visa's conditions. You apply from outside Australia for A$250. Your sponsor pays no fee, but Home Affairs may ask them for a security bond.",
      watch: [
        "Your sponsor must be an eligible relative: a settled Australian citizen or permanent resident aged 18 or over who has usually lived in Australia for the last 2 years.",
        "The visa always carries condition 8503 (No Further Stay) and is generally single entry.",
        "If you overstay or breach a condition, the bond is forfeited and your sponsor can't sponsor anyone for 5 years.",
        "The Tourist stream with an invitation letter from your relative is usually simpler.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "frequent-traveller",
      title: "Visitor visa (subclass 600), Frequent Traveller stream",
      body: "A multiple-entry visa that can be valid for up to 10 years, for people who visit often for tourism or business. You can stay up to 3 months each entry, and no more than 12 months in any 24-month period. It costs A$1,845 and you apply from outside Australia.",
      watch: [
        "You must hold a passport from, and be a citizen of, China, Brunei, Cambodia, the Philippines, Laos, Indonesia, Malaysia, Singapore, Thailand, Vietnam or Timor-Leste.",
        "You give biometrics at an Australian Biometric Collection Centre. Applicants in mainland China must attend a centre in Hong Kong or another country.",
        "For a one-off trip, the Tourist stream costs A$250.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "ads",
      title: "Visitor visa (subclass 600), Approved Destination Status stream",
      body: "For citizens of the People's Republic of China travelling on a group tour arranged by an approved travel agent. The agent lodges the application for you, and the charge is A$250. You stay with the group and leave Australia with it.",
      watch: [
        "You must be in China when the application is lodged and when it's decided.",
        "Travelling on your own rather than with a tour group? Look at the Tourist stream instead.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "business-visitor",
      title: "Visitor visa (subclass 600), Business Visitor stream",
      body: "For short business visits: enquiries, contract negotiations, official government visits, conferences, trade fairs and seminars. You apply from outside Australia for A$250. Home Affairs usually grants 3 months, and up to 12 months in certain circumstances.",
      watch: [
        "No work for an Australian business and no selling to the public. Short-term paid work needs a work visa, such as the subclass 400.",
        "Conference, trade fair or seminar organisers must not pay you.",
        "Hold an APEC Business Travel Card marked AUS? You don't need a separate application.",
      ],
      href: "/visas/other-visas/visitor-visa-600",
    },
    {
      id: "whv417",
      title: "Working Holiday visa (subclass 417)",
      body: "Your passport and age fit the Working Holiday visa: 12 months in Australia, working to fund your travel. The first visa costs A$840 and you apply from outside Australia. Up to three visas are possible; the second and third usually need specified work, except for UK passport holders.",
      watch: [
        "A first visa isn't possible if you've already entered Australia on a 417 or 462. Second and third 417s have their own rules.",
        "Have about A$5,000 for the start of your stay, plus the fare out.",
        "Usually no more than 6 months with one employer, unless an exemption applies.",
        "No one can be included, and dependent children can't come with you at any time.",
      ],
      href: "/visas/other-visas/working-holiday-visa-417",
    },
    {
      id: "whv462",
      title: "Work and Holiday visa (subclass 462)",
      body: "Your passport and age fit the Work and Holiday visa: 12 months in Australia, working and travelling. A first visa costs A$840 and you apply from outside Australia. For a first visa you also need functional English, usually an education level and, for some countries, a letter of support from your government.",
      watch: [
        "First visas are capped for every country except the United States, and a country's cap can pause or close.",
        "China, India and Vietnam: you register in the A$25 ballot and must be selected before you apply. The 2026-27 registrations have closed.",
        "Home Affairs has announced that first visas for Indonesian passport holders will move to a ballot.",
        "No one can be included, and dependent children can't come with you at any time.",
      ],
      href: "/visas/other-visas/work-and-holiday-visa-462",
    },
    {
      id: "mt602",
      title: "Medical Treatment visa (subclass 602)",
      body: "For medical treatment or a consultation in Australia, donating an organ, or supporting a patient or donor who holds this visa. It's free if you apply outside Australia and A$480 in Australia. In most cases the treatment must be paid for under pre-arranged terms, so that no Australian government or public authority pays.",
      watch: [
        "A short consultation that doesn't need a Medical Treatment visa may fit a Visitor visa (600).",
        "A support person lodges their own application, and the patient's visa must be granted first.",
        "No work, except in limited circumstances.",
      ],
      href: "/visas/other-visas/medical-treatment-visa-602",
    },
    {
      id: "none",
      title: "No working holiday visa on these answers",
      tone: "stop",
      body: "A working holiday needs an eligible passport, and an age within your passport's limit when you apply. You could still visit on a visitor visa, but you can't work on one. Study or work needs a different visa.",
      watch: ["Dual nationals: check whether your other passport is on the 417 or 462 list."],
      href: "/tools/visa-finder",
    },
  ],
  footnote: "A general guide, not advice. Your passport, age, history and circumstances decide which visa you can get, so read the visa's page and check Home Affairs before you apply.",
};
