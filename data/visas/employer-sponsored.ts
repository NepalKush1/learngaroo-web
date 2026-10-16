import type { VisaPage } from "./types";

// Employer-sponsored visa library. Figures checked against the Department of
// Home Affairs on 12 October 2026 (visa application charges from 1 July 2026).

export const employerSponsoredPages: VisaPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Skills in Demand visa (subclass 482)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "skills-in-demand-visa-482",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "482",
    name: "Skills in Demand visa",
    title: "Skills in Demand visa (subclass 482)",
    seoTitle: "Subclass 482 Skills in Demand visa: eligibility, cost, PR",
    seoDescription:
      "Skills in Demand visa (subclass 482) 2026: A$4,015 charge, Core and Specialist Skills streams, 1 year experience, CSIT A$79,423, 4-year stay, PR via 186.",
    intro:
      "The Skills in Demand visa (subclass 482) is a temporary work visa for skilled workers whom an approved Australian employer has nominated to fill a position it cannot fill locally. It lets you work for your sponsor for up to four years (five for Hong Kong passport holders) in the Core Skills, Specialist Skills or Labour agreement stream. After two years of sponsored employment it is the usual route to permanent residence through the Employer Nomination Scheme (subclass 186).",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Employer sponsor required", "Apply in or outside Australia", "Pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$4,015", note: "Primary applicant, 1 July 2026 charge; A$4,015 per adult and A$1,005 per child added" },
      { label: "Length of stay", value: "Up to 4 years", note: "Up to 5 years for Hong Kong passport holders; the period is set by the nomination" },
      { label: "Work rights", value: "Nominated occupation, sponsor only", note: "Condition 8607; an associated entity of an Australian sponsor is allowed" },
      { label: "Pathway to permanent residence", value: "Subclass 186 after 2 years", note: "Temporary Residence Transition stream; other skilled visas if eligible" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging visa A, B or C" },
      { label: "Sponsor and nomination", value: "Standard Business Sponsor", note: "Nomination must be approved before grant; nomination fee A$330 plus the SAF levy" },
    ],
    streams: [
      {
        name: "Core Skills stream",
        summary: "For occupations on the Core Skills Occupation List (CSOL) paid at least the Core Skills Income Threshold (CSIT).",
        forWhom: "Most sponsored workers in trades, health, engineering, IT, hospitality and other CSOL occupations.",
        stay: "Up to 4 years (5 years for Hong Kong passport holders)",
        cost: "A$4,015",
        prPathway: "Subclass 186 Temporary Residence Transition stream after 2 years of sponsored employment",
      },
      {
        name: "Specialist Skills stream",
        summary: "For any ANZSCO occupation in Major Groups 1, 2, 4, 5 or 6 (not 3, 7 or 8) where the salary meets the Specialist Skills Income Threshold (SSIT).",
        forWhom: "Highly paid specialists and managers; no occupation list applies, but trades, machinery operators and labourers are excluded.",
        stay: "Up to 4 years (5 years for Hong Kong passport holders)",
        cost: "A$4,015",
        prPathway: "Subclass 186 Temporary Residence Transition stream after 2 years of sponsored employment",
      },
      {
        name: "Labour agreement stream",
        summary: "For workers nominated under a labour agreement between the employer and the Commonwealth, which may carry concessions to the standard criteria.",
        forWhom: "Workers in occupations or regions covered by a company-specific, industry, DAMA or project agreement.",
        stay: "Up to 4 years, depending on the agreement (5 years for Hong Kong passport holders)",
        cost: "A$4,015",
        prPathway: "Subclass 186 or 494 Labour agreement stream where the agreement provides for it",
      },
    ],
    whoFor: [
      "You have a job offer from an Australian business that is, or is applying to become, a Standard Business Sponsor, and your occupation is on the Core Skills Occupation List.",
      "You will earn at least the Specialist Skills Income Threshold (A$146,576 for nominations lodged from 1 July 2026) in an occupation in ANZSCO Major Group 1, 2, 4, 5 or 6, whether or not it is on the CSOL.",
      "You hold a Temporary Skill Shortage or Skills in Demand visa and want a new visa with a new employer, or a further four years with your current employer.",
      "You are a Working Holiday, Temporary Graduate or Student visa holder in Australia whose employer wants to keep you on a sponsored basis.",
      "You are the partner or dependent child of a 482 holder and need to join them as a subsequent entrant.",
    ],
    eligibility: [
      {
        title: "Approved nomination by an approved sponsor",
        detail:
          "Your employer must be a Standard Business Sponsor (or have applied to become one) and must lodge a nomination for you before or with your visa application. The nomination must be approved and still valid when your visa is decided. Overseas businesses can sponsor you, but you may then work only for that business, not an associated entity.",
        legal: "Migration Act 1958, ss 140E and 140GB; Migration Regulations 1994, reg 2.72 and Sch 2 Part 482",
      },
      {
        title: "Eligible occupation and salary for the stream",
        detail:
          "Core Skills stream: the occupation must be on the Core Skills Occupation List and both the annual market salary rate (AMSR) and your pay must be at least the Core Skills Income Threshold, A$79,423 for nominations lodged between 1 July 2026 and 30 June 2027. Specialist Skills stream: any ANZSCO occupation in Major Groups 1, 2, 4, 5 or 6 with a salary of at least the Specialist Skills Income Threshold, A$146,576 for the same period. Labour agreement stream: the occupation and salary set by the agreement. Thresholds are indexed every 1 July.",
        legal: "Migration Regulations 1994, Sch 2 Part 482; Migration (IMMI 18/033) Instrument 2018 (annual market salary rate)",
      },
      {
        title: "At least 1 year of relevant work experience",
        detail:
          "You need at least one year of experience in the nominated occupation or a related field at the same skill level, gained in the last five years. Full-time, part-time or casual work counts if it adds up to 12 months full-time; it need not be continuous. Experience gained in a Masters or PhD, or through a clinical placement, internship or apprenticeship, can count if it was at the skill level of the occupation. The Labour agreement stream requires 12 months full-time equivalent unless the agreement says otherwise.",
        legal: "Migration Regulations 1994, Sch 2 Part 482",
      },
      {
        title: "Skills assessment where mandatory",
        detail:
          "Some applicants (set by nominated occupation and passport) must have a skills assessment from Trades Recognition Australia or VETASSESS under the instrument IMMI 18/039. The assessment must have been undertaken or started within the three years before you apply, and the reference number must go in the application: if a mandatory assessment has not been started when you lodge, the application is invalid. The Department can ask for a skills assessment in other cases too. Medical practitioners must have their qualifications recognised by the relevant Australian medical board.",
        legal: "Migration Regulations 1994, Sch 2 Part 482; IMMI 18/039 Mandatory Skills Assessment, Subclass 482 Visa",
      },
      {
        title: "English language",
        detail:
          "Unless exempt, you must show a minimum test result from a test taken in the three years before you apply. For tests taken on or after 13 September 2025: IELTS 5.0 in each component; PTE Academic listening 33, reading 36, writing 29, speaking 24; OET 220 listening, 240 reading, 200 writing, 270 speaking; TOEFL iBT 8, 8, 9, 14; CELPIP General 5 in each; MET 49, 47, 45, 38; LANGUAGECERT Academic 41, 44, 45, 54. Single-skill retakes are accepted for these tests. Fully online tests are not accepted. You are exempt if you hold a passport from the United Kingdom, the United States, Canada, New Zealand or Ireland, completed at least five years of secondary or higher study taught in English, hold a licence or registration that required equivalent English, will work in a diplomatic mission or Taiwan office, or are an overseas business employee with guaranteed annual earnings of at least A$96,400. In the Labour agreement stream the agreement may set a different standard.",
        legal: "Migration Regulations 1994, Sch 2 Part 482",
      },
      {
        title: "Adequate health insurance and the health requirement",
        detail:
          "You and your family must hold adequate health insurance for the whole stay, and keeping it is a visa condition (8501). Everyone included must meet the health requirement; health examination results are generally valid for 12 months, and the Department recommends completing them before lodging.",
        legal: "PIC 4005 (Sch 4); Sch 8 condition 8501",
      },
      {
        title: "Character",
        detail:
          "You and each family member aged 16 or over must meet the character requirement. Provide an Australian Federal Police complete-disclosure certificate if you have spent 12 months or more in Australia in the last 10 years since turning 16, and a police certificate from every other country where you spent 12 months or more. If your sponsor is an accredited sponsor, a written character reference from it replaces overseas police certificates.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "No paying for visa sponsorship",
        detail:
          "Neither you nor any family member may have asked for, offered, given or received a benefit in return for sponsorship in the three years before the application, unless the Minister considers it reasonable to disregard the conduct.",
        legal: "Migration Act 1958, Part 2 Division 3A Subdivision D; Migration Regulations 1994, Sch 2 Part 482",
      },
      {
        title: "Lawful status if you apply in Australia",
        detail:
          "You must hold a substantive visa or a Bridging visa A, B or C when you apply, and you must have substantially complied with the conditions of your last substantive or bridging visa. You cannot apply in immigration clearance. There is no age limit.",
        legal: "Migration Regulations 1994, Sch 2 Part 482; Migration Act 1958, s 48",
      },
      {
        title: "Debts, values and immigration history",
        detail:
          "Any debt to the Australian Government must be repaid or under a repayment arrangement, applicants aged 18 or over must sign the Australian Values Statement, and previous refusals, cancellations or exclusion periods can prevent grant.",
        legal: "PIC 4004, 4013, 4014, 4019, 4020 and 4021 (Sch 4)",
      },
    ],
    familyNote:
      "You can include your partner and your or your partner's dependent children (and their dependent children) when you lodge. If you already hold a 457 or 482 visa, a child aged 23 or over can be included only if they still hold a 457 or 482 visa as your family member and cannot work because of a disability. Family members must be named in the nomination or have the sponsor's written agreement. They cannot be added after lodgement; instead they apply separately as subsequent entrants, before or after your grant, with a letter from your sponsor extending its obligations to them. Family members have full work and study rights and pay their own charge (A$4,015 per adult, A$1,005 per child).",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages showing your photo, personal details and issue and expiry dates",
          "Change-of-name evidence if any document is in another name (marriage certificate, deed poll or registry document)",
        ],
      },
      {
        group: "Employment and skills",
        items: [
          "Transaction Reference Number of the nomination your employer lodged",
          "Skills assessment reference number from Trades Recognition Australia or VETASSESS where mandatory, or evidence of an exemption under IMMI 18/039",
          "Qualification certificates and transcripts, and current registration or licence where the occupation needs one in your state or territory",
          "Employment references on letterhead giving the referee's name, title and contact details, your position and duties, hours and dates of service",
          "CV covering at least the last five years of employment and study with dates",
        ],
      },
      {
        group: "English",
        items: [
          "Test report (IELTS, PTE Academic, OET, TOEFL iBT, CELPIP, MET or LANGUAGECERT) no more than three years old, or passport or study evidence for an exemption",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Evidence of adequate health insurance for you and your family for the whole stay",
          "Health examination results if completed before lodging (valid 12 months)",
          "Australian Federal Police complete-disclosure certificate and overseas police certificates where required, or an accredited sponsor's character reference",
          "Form 80 and Form 1221 if the Department asks for them; military service records if you served",
        ],
      },
      {
        group: "Family members",
        items: [
          "Marriage certificate or evidence of a de facto relationship (joint finances, lease, shared address)",
          "Birth certificates, Form 1229 or a statutory declaration giving consent for children under 18, and Form 47a with dependency evidence for dependants aged 18 or over",
        ],
      },
    ],
    steps: [
      {
        title: "Employer becomes a Standard Business Sponsor",
        description: "The business applies in ImmiAccount with evidence it is legally established and operating, pays the A$420 sponsorship charge and attests to its record of employing local labour. Approval lasts five years. The sponsorship application can be lodged at the same time as the nomination.",
        output: "You hold: a sponsor with an approved (or lodged) Standard Business Sponsorship",
      },
      {
        title: "Employer tests the labour market and lodges the nomination",
        description: "Unless an international trade obligation applies, the position must have been advertised in Australia at least twice for four weeks in the four months before the nomination. The employer sets the annual market salary rate, confirms the salary meets the CSIT or SSIT, pays the A$330 nomination charge and the Skilling Australians Fund levy (A$1,200 or A$1,800 per year of the nomination depending on turnover), and gives you the Transaction Reference Number.",
        output: "You hold: a nomination TRN and, in time, a nomination approval",
      },
      {
        title: "Arrange your skills assessment, English test and health checks",
        description: "If your occupation needs a mandatory skills assessment, lodge it with TRA or VETASSESS before you apply and keep the reference number. Book an approved English test unless you are exempt, and consider completing health examinations up front.",
        output: "You hold: a skills assessment reference number, an English result under three years old and a health insurance policy",
      },
      {
        title: "Lodge the visa application in ImmiAccount",
        description: "Apply online in or outside Australia (not in immigration clearance), attach documents for each applicant, pay A$4,015 for yourself and the charge for each family member, and record the nomination TRN. Onshore applicants must hold a substantive visa or a Bridging visa A, B or C.",
        output: "You hold: a lodged application and, if you applied onshore, a bridging visa that starts when your current visa ends",
      },
      {
        title: "Respond to requests and wait for the decision",
        description: "The Department may ask for biometrics, health examinations or more information, and it can decide on what is lodged. Use Form 1023 to correct mistakes and tell the Department about passport, address or family changes. Processing times are published on the Home Affairs global processing times page.",
        output: "You hold: a decision letter with your visa grant number, start date and conditions",
      },
      {
        title: "Start work within 90 days",
        description: "You must begin work in the nominated occupation within 90 days of arriving (if granted offshore) or of the grant date (if granted onshore). Keep your health insurance current and work only for your sponsor.",
        output: "You hold: a 482 visa in effect and the start of the two-year period that counts towards a subclass 186 visa",
      },
    ],
    conditions: [
      { code: "8607", meaning: "Work only in your nominated occupation and only for your sponsor (or an associated entity of an Australian sponsor). If your job ends you may stop work for up to 180 days in a single period and no more than 365 days in total across the visa (periods counted from 1 July 2024). A new employer must have a nomination approved before you start, and you must start work within 90 days of arrival or grant." },
      { code: "8501", meaning: "Hold adequate health insurance for the whole of your stay." },
      { code: "8303", meaning: "Do not take part in activities that are disruptive to, or threaten violence against, the Australian community." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$4,015", note: "Primary applicant, 1 July 2026 charge; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$4,015", note: "Each adult family member pays their own charge" },
      { item: "Additional applicant under 18", amount: "A$1,005" },
      { item: "Subsequent temporary application charge", amount: "A$700", note: "Payable by applicants in Australia who hold or last held certain temporary visas" },
      { item: "Nomination charge (employer)", amount: "A$330", note: "Employer must pay; cannot be recovered from you" },
      { item: "Standard Business Sponsorship charge (employer)", amount: "A$420", note: "Approval lasts 5 years" },
      { item: "Skilling Australians Fund levy (employer)", amount: "A$1,200 or A$1,800 per year", note: "Per year of the nomination period: A$1,200 if annual turnover is under A$10 million, A$1,800 otherwise; cannot be passed on to you" },
      { item: "Skills assessment, English test, health examinations, police certificates and translations", amount: "Typical third-party costs", note: "Set by the assessing authority, test provider, panel clinic and police agencies" },
    ],
    afterGrant: [
      "Begin work in the nominated occupation within 90 days; otherwise the visa can be cancelled.",
      "Work only for your sponsor (or an associated entity of an Australian sponsor) in the nominated occupation. If your employment ends you have up to 180 consecutive days, and 365 days in total over the visa, to have a new nomination approved, obtain another visa or leave.",
      "Keep adequate health insurance for the whole stay and tell the Department about changes to your passport, address, employer, hours, pay, relationship status or the birth of a child.",
      "You can study (without government assistance) and travel in and out of Australia as often as you like while the visa is valid; time overseas does not extend it.",
      "A further 482 visa needs a new nomination and a new visa application; you cannot extend this visa. After two years of full-time sponsored employment in the last three years you may be nominated for the subclass 186 Temporary Residence Transition stream.",
      "Hong Kong and British National (Overseas) passport holders can be granted up to five years and may have a separate permanent residence pathway.",
    ],
    pathways: [
      { title: "Employer Nomination Scheme visa (subclass 186), Temporary Residence Transition stream", description: "Permanent residence after at least two years of full-time sponsored employment in the three years before applying, with any sponsor, as long as the nominating employer is your most recent sponsor. Competent English and an age under 45 (unless exempt) apply.", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { title: "Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)", description: "A five-year regional alternative if your employer is in a designated regional area; permanent residence through subclass 191 after three years.", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { title: "Points-tested skilled visas (subclasses 189, 190 and 491)", description: "Sponsored experience in Australia earns points; a state nomination or an invitation through SkillSelect does not depend on your employer.", href: "/visas/skilled/skilled-migration-points-test" },
      { title: "Australian citizenship", description: "After permanent residence, four years of lawful residence including 12 months as a permanent resident.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
    ],
    risks: [
      "Nomination refused because the position is not genuine, the duties do not match the ANZSCO occupation, the business cannot support the role, or the annual market salary rate was not determined using the instrument method.",
      "Labour market testing fails because advertisements ran for less than four weeks, were more than four months old, omitted the salary (required where earnings are under A$96,400) or were only on social media.",
      "Application invalid because a mandatory skills assessment under IMMI 18/039 had not been started when the application was lodged, or the applicant was in Australia without a substantive visa or a Bridging visa A, B or C.",
      "Work experience claims that do not add up to 12 months full-time equivalent in the last five years, or references that are inconsistent with payslips or tax records, leading to refusal under PIC 4020.",
      "English evidence that is more than three years old, from a fully online test, or below the component minimums.",
      "Working for another employer or in another occupation in breach of condition 8607, or not starting within 90 days, leading to cancellation under section 116 of the Migration Act 1958.",
      "Paying the employer, or having salary deducted, for the sponsorship: this is an offence and a ground of refusal or cancellation for both parties.",
    ],
    faqs: [
      { question: "How much does the 482 visa cost in 2026?", answer: "The base application charge from 1 July 2026 is A$4,015 for the main applicant, with A$4,015 for each additional applicant aged 18 or over and A$1,005 for each child. Applicants in Australia who hold certain temporary visas also pay a A$700 subsequent temporary application charge. Your employer pays the A$330 nomination charge, the A$420 sponsorship charge and the Skilling Australians Fund levy, and cannot recover them from you." },
      { question: "What are the Core Skills and Specialist Skills income thresholds?", answer: "For nominations lodged between 1 July 2026 and 30 June 2027 the Core Skills Income Threshold is A$79,423 and the Specialist Skills Income Threshold is A$146,576. Both the annual market salary rate for the position and your guaranteed earnings (excluding non-monetary benefits) must be at least the threshold. The figures are indexed on 1 July each year." },
      { question: "How much work experience do I need?", answer: "At least one year in the nominated occupation or a related field at the same skill level, gained in the last five years. Part-time or casual work must add up to 12 months full-time, and the period need not be continuous. Relevant experience during a Masters, PhD, internship, apprenticeship or clinical placement can count." },
      { question: "Can I change employers on a 482 visa?", answer: "Yes, but the new employer must be a Standard Business Sponsor and have a new nomination approved before you start. Under condition 8607 you may be out of work with your sponsor for up to 180 days in a single period and 365 days in total across the visa. If the occupation changes you also need a new visa." },
      { question: "How long does it take to get permanent residence?", answer: "You can be nominated for the subclass 186 Temporary Residence Transition stream once you have worked full-time in eligible sponsored employment for two of the three years before applying. Time with more than one sponsor counts, but the employer that nominates you must be your most recent sponsor. You must apply within six months of that nomination being approved." },
      { question: "Do I need a skills assessment?", answer: "Only if your nominated occupation and passport combination is listed in IMMI 18/039, in which case the assessment from Trades Recognition Australia or VETASSESS must have been started, or completed, within the three years before you apply. The Department may also ask for one in other cases. A skills assessment is separate from any registration or licence your occupation needs." },
      { question: "Can my family work in Australia?", answer: "Yes. Partners and dependent children included in the application, or granted as subsequent entrants, can live, work and study in Australia without restriction on hours. They must be covered by health insurance and meet health and character requirements." },
      { question: "What is the English test requirement?", answer: "The minimum for tests taken on or after 13 September 2025 is IELTS 5.0 in each component or the equivalent in PTE Academic, OET, TOEFL iBT, CELPIP, MET or LANGUAGECERT, taken within three years. Passport holders of the United Kingdom, Ireland, the United States, Canada and New Zealand, and people with five years of secondary or higher study in English, are exempt." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 482 (Skills in Demand)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, regs 2.59 (standard business sponsor) and 2.72 (nomination criteria), Division 2.19 (sponsorship obligations)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 140E, 140GB, 140H to 140K (sponsorship) and s 116 (cancellation)", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "IMMI 18/039: Mandatory Skills Assessment, Subclass 482 Visa", url: "https://www.legislation.gov.au/Details/F2018L00294" },
      { label: "Migration (IMMI 18/033: Specification of Annual Earnings and Methodology of Annual Market Salary Rate) Instrument 2018", url: "https://www.legislation.gov.au/F2018L00284/latest/text" },
      { label: "Migration (LIN 18/036: Period, manner and evidence of labour market testing) Instrument 2018", url: "https://www.legislation.gov.au/Details/F2022C00723" },
      { label: "Migration (International trade obligations relating to labour market testing) Determination (LIN 21/075) 2021", url: "https://www.legislation.gov.au/Details/F2023C00507" },
      { label: "Schedule 8 conditions 8607, 8501 and 8303; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4019, 4020, 4021", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Skills in Demand visa (subclass 482)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" },
      { label: "Home Affairs: Core Skills stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream" },
      { label: "Home Affairs: Specialist Skills stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/specialist-skills-stream" },
      { label: "Home Affairs: Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/labour-agreement-stream" },
      { label: "Home Affairs: Subsequent entrant", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/subsequent-entrant" },
      { label: "Home Affairs: English proficiency (subclass 482)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/sufficient-english" },
      { label: "Home Affairs: Exempt occupations", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/exempt-occupations" },
      { label: "Home Affairs: Salary requirements to nominate a worker (CSIT, SSIT, TSMIT, AMSR)", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements" },
      { label: "Home Affairs: Labour market testing", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/labour-market-testing" },
      { label: "Home Affairs: Cost of sponsoring (nomination charges and SAF levy)", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring" },
      { label: "Home Affairs: See your visa conditions (product 482)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=482-69" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Employer sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
      { label: "Employer Nomination Scheme visa (subclass 186)", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { label: "Labour agreements and DAMA", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "Occupation search", href: "/occupations" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: ["482 visa", "subclass 482", "skills in demand visa", "skills in demand visa requirements", "482 visa cost 2026", "core skills occupation list", "core skills income threshold", "specialist skills stream", "482 visa to PR", "TSS visa replacement"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 2. Employer Nomination Scheme visa (subclass 186)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "employer-nomination-scheme-visa-186",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "186",
    name: "Employer Nomination Scheme visa",
    title: "Employer Nomination Scheme visa (subclass 186)",
    seoTitle: "Subclass 186 ENS visa: TRT, Direct Entry, cost, age limit",
    seoDescription:
      "Employer Nomination Scheme visa (subclass 186) 2026: A$6,140 charge, permanent residence after 2 years on a 482 (TRT) or via Direct Entry, age under 45.",
    intro:
      "The Employer Nomination Scheme visa (subclass 186) is a permanent visa for skilled workers nominated by an Australian employer. It has three streams: Temporary Residence Transition for 457 and 482 holders with two years of sponsored employment, Direct Entry for workers with a skills assessment and three years of experience, and Labour agreement. It gives permanent residence on grant and leads to Australian citizenship.",
    factsAsAt: "12 October 2026",
    permanent: true,
    tags: ["Permanent", "Employer sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$6,140", note: "Primary applicant, 1 July 2026 charge; A$3,070 per adult and A$1,535 per child added" },
      { label: "Length of stay", value: "Permanent", note: "Travel facility for 5 years, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Unrestricted", note: "The Department expects you to work for the nominating employer for at least 2 years" },
      { label: "Pathway to permanent residence", value: "This is permanent residence", note: "Citizenship after 4 years of lawful residence including 12 months as a permanent resident" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging visa A, B or C" },
      { label: "Nomination", value: "Employer nomination approved first", note: "Apply within 6 months of approval; nomination charge A$540 (nil in regional Australia) plus the SAF levy" },
    ],
    streams: [
      {
        name: "Temporary Residence Transition (TRT) stream",
        summary: "For 457 and 482 visa holders who have worked full-time for two of the last three years in eligible sponsored employment and are nominated by their most recent sponsor.",
        forWhom: "Skills in Demand and Temporary Skill Shortage visa holders moving to permanent residence with their employer.",
        stay: "Permanent",
        cost: "A$6,140",
        prPathway: "Permanent on grant; no occupation list, no skills assessment unless requested",
      },
      {
        name: "Direct Entry stream",
        summary: "For workers with a positive skills assessment and at least three years of relevant experience in an occupation on the Core Skills Occupation List, applying from inside or outside Australia.",
        forWhom: "Workers who have never held a 482 visa, or who do not yet meet the two-year TRT requirement.",
        stay: "Permanent",
        cost: "A$6,140",
        prPathway: "Permanent on grant",
      },
      {
        name: "Labour agreement stream",
        summary: "For workers nominated by an employer that is party to a labour agreement providing a permanent residence pathway, under the terms of that agreement.",
        forWhom: "Workers under company-specific, industry or DAMA agreements that include a subclass 186 option.",
        stay: "Permanent",
        cost: "A$6,140",
        prPathway: "Permanent on grant; age, skills and English concessions as set in the agreement",
      },
    ],
    whoFor: [
      "You hold a 482 visa and have worked full-time for your sponsor (or more than one sponsor) in your nominated occupation for two of the last three years.",
      "You hold a Bridging visa after applying for a 482 or 186 visa and your last substantive visa was a 457 or 482.",
      "You are a skilled worker overseas or in Australia with a positive skills assessment, three years of experience and a job offer in a Core Skills Occupation List occupation.",
      "You are a New Zealand citizen on a Special Category (subclass 444) visa who has worked for the nominating employer for two of the last three years.",
      "You are over 45 but nominated as an academic, a scientist or researcher at a government science agency or university, a regional medical practitioner, or you earn above the Fair Work high income threshold.",
    ],
    eligibility: [
      {
        title: "Approved nomination from an eligible employer",
        detail:
          "An Australian business that is actively and lawfully operating must nominate you in a full-time skilled position that is ongoing for at least two years (the contract must not limit it to two years), pay you at least the annual market salary rate if you will earn under A$250,000, and pay the Skilling Australians Fund levy. You must apply within six months of the nomination being approved. The Department cannot grant the visa if there is adverse information about the nominator, the nomination is withdrawn or the position is no longer available, and it cannot link a new nomination to an existing application.",
        legal: "Migration Regulations 1994, reg 5.19 and Sch 2 Part 186",
      },
      {
        title: "TRT stream: hold a 457 or 482 visa",
        detail:
          "You must be the primary holder of a subclass 457 or 482 visa in any stream, or hold a Bridging visa granted on a 457, 482, 186 or 187 application where your last substantive visa was a 457 or 482.",
        legal: "Migration Regulations 1994, Sch 2 Part 186 (Temporary Residence Transition stream)",
      },
      {
        title: "TRT stream: 2 years of eligible sponsored employment in the last 3 years",
        detail:
          "You must have worked full-time in Australia, while holding a 457, 482 or eligible bridging visa, in an occupation for which that visa was granted, for a total of two years in the three years before you apply. Employment with more than one sponsor counts; if you changed employers it counts from the date the new employer lodged its nomination (if you started before approval). Unpaid leave does not count. The nominating employer must be the last employer to sponsor you.",
        legal: "Migration Regulations 1994, Sch 2 Part 186 (Temporary Residence Transition stream)",
      },
      {
        title: "Direct Entry stream: occupation, skills assessment and 3 years of experience",
        detail:
          "The occupation must be on the Core Skills Occupation List. Unless exempt you need a positive skills assessment for the occupation and at least three years of relevant work experience. You are exempt from both if you are nominated as an academic (Level A to E) by an Australian university, as a scientist, researcher or technical specialist by an Australian Government scientific agency, or you hold a subclass 444 or 461 visa and have worked for the nominating employer in the position for two of the last three years.",
        legal: "Migration Regulations 1994, Sch 2 Part 186 (Direct Entry stream); Migration (LIN 19/216) Instrument 2019",
      },
      {
        title: "Age under 45 unless exempt",
        detail:
          "You must be under 45 when you apply. Exemptions (TRT stream): nominated as an academic at Level A to E by an Australian university; a scientist, researcher or technical specialist at ANZSCO skill level 1 or 2 nominated by an Australian scientific government agency or university; a medical practitioner who worked in a designated regional area for two of the last three years on a 457 or 482 visa and is nominated for a regional position; or a 457 or 482 holder who worked in eligible sponsored employment for two of the last three years earning at least the Fair Work high income threshold each year. Direct Entry exemptions: academics at Level B to E, government or university scientists, and 444 or 461 holders with two of the last three years with the nominating employer. People who held or had applied for a 457 visa on 18 April 2017 can apply under 50.",
        legal: "Migration Regulations 1994, Sch 2 Part 186; Migration (LIN 19/216: Exemptions from Skill, Age and English Language Requirements for Subclass 186, 187 and 494 Visas) Instrument 2019",
      },
      {
        title: "Competent English",
        detail:
          "You need at least Competent English: for tests taken on or after 7 August 2025, IELTS 6 in each component, CELPIP 7 in each, MET 56, 55, 57, 48, Cambridge C1 Advanced 163, 163, 170, 179, or the equivalent PTE Academic, OET, TOEFL iBT or LANGUAGECERT scores, taken within three years. Passport holders of the United Kingdom, Ireland, the United States, Canada and New Zealand are exempt. There has been no other English exemption in the TRT stream since 16 November 2019. Family members aged 18 or over need Functional English or must pay the A$4,890 second instalment.",
        legal: "Migration Regulations 1994, Sch 2 Part 186 and reg 1.15C (Competent English)",
      },
      {
        title: "Licensing, registration and membership",
        detail: "If a licence, registration or professional membership is mandatory for the occupation in the state or territory where you will work, you must hold it (or be eligible for it when the nomination is lodged).",
        legal: "Migration Regulations 1994, Sch 2 Part 186",
      },
      {
        title: "Health and character",
        detail:
          "You and all family members (including those not applying) must meet the health requirement; a health waiver is available for this permanent visa. Applicants aged 16 or over must meet the character requirement with police certificates for every country of 12 months or more residence in the last 10 years.",
        legal: "PIC 4007 and PIC 4001 (Sch 4); Migration Act 1958, s 501",
      },
      {
        title: "Labour agreement stream: terms of the agreement",
        detail: "You must currently work, or be about to work, for an employer that is party to a labour agreement with a subclass 186 pathway, and meet the age, skills and English standards set in that agreement (under 45 unless the agreement provides otherwise). Onshore applicants must hold a substantive 457 or 482 visa granted under a labour agreement.",
        legal: "Migration Regulations 1994, Sch 2 Part 186 (Labour agreement stream)",
      },
      {
        title: "Debts, values statement and immigration history",
        detail: "Debts to the Australian Government must be repaid or under arrangement; applicants aged 18 or over must sign the Australian Values Statement; previous refusals, cancellations or exclusion periods are considered.",
        legal: "PIC 4004, 4013, 4014, 4019, 4020 and 4021 (Sch 4)",
      },
    ],
    familyNote:
      "You can include your partner, your or your partner's dependent children and their dependent children when you apply, and add family members after lodgement but before the decision. A 457 or 482 holder granted that visa as your family member can be included if they hold it when you apply. Each family member pays their own charge (A$3,070 per adult, A$1,535 per child). Adults without Functional English pay a A$4,890 second instalment before grant. Family members who do not apply with you may still need to meet health and character requirements.",
    documents: [
      {
        group: "Identity",
        items: ["Passport pages with photo, personal details and issue and expiry dates", "Change-of-name documents if applicable"],
      },
      {
        group: "Employment",
        items: [
          "Nomination Transaction Reference Number and the approved nomination",
          "TRT stream: evidence of every period of eligible sponsored employment including PAYG payment summaries, employment contracts, payslips and leave records showing paid and unpaid leave and work-related travel",
          "Direct Entry stream: employment references on letterhead and other evidence of at least three years of relevant experience",
          "Current licence, registration or professional membership where mandatory in your state or territory",
        ],
      },
      {
        group: "Skills and English",
        items: [
          "Direct Entry stream: positive skills assessment for the nominated occupation, or evidence of an exemption",
          "Competent English test report no more than three years old, or an exempt passport",
          "Functional English evidence for each family member aged 18 or over (passport, study in English or a test result), or the second instalment",
          "Age exemption evidence if you are 45 or over (nomination letter from a university or government science agency, regional medical employment records or high-income payslips)",
        ],
      },
      {
        group: "Health and character",
        items: ["Health examinations for all applicants (and family members not migrating if asked)", "Australian Federal Police certificate and overseas police certificates; Form 80 if requested"],
      },
      {
        group: "Family members",
        items: ["Marriage certificate or de facto relationship evidence", "Birth certificates, Form 1229 or statutory declaration consent for children under 18, and Form 47a with dependency evidence for adult dependants"],
      },
    ],
    steps: [
      {
        title: "Employer lodges the nomination",
        description: "The employer lodges the nomination in ImmiAccount with evidence the business is operating, the position is genuine, full-time and ongoing for at least two years, the salary meets the annual market salary rate and the Core Skills Income Threshold (A$79,423 from 1 July 2026), and pays the Skilling Australians Fund levy (A$3,000 one-off if turnover is under A$10 million, A$5,000 otherwise) and the A$540 nomination charge (no nomination charge if the position is in regional Australia).",
        output: "You hold: a nomination TRN and then a nomination approval letter",
      },
      {
        title: "Confirm your stream and gather evidence",
        description: "TRT applicants assemble payslips, PAYG summaries and leave records for the two years of sponsored employment; Direct Entry applicants obtain a positive skills assessment and references for three years of experience. Book an English test if you cannot show Competent English another way.",
        output: "You hold: proof of two years of sponsored employment or a skills assessment with three years of experience, and Competent English",
      },
      {
        title: "Lodge the visa within 6 months of nomination approval",
        description: "Apply online in ImmiAccount in or outside Australia (not in immigration clearance), include family members, pay A$6,140 plus the charges for family, and attach documents. Onshore applicants must hold a substantive visa or a Bridging visa A, B or C.",
        output: "You hold: a lodged application and, onshore, a bridging visa that activates when your current visa ends",
      },
      {
        title: "Complete health examinations and respond to requests",
        description: "Arrange health examinations for every applicant when asked, provide police certificates, and tell the Department of changes in address, passport, relationship status or the birth of a child. The Department may ask for a skills assessment in the TRT stream.",
        output: "You hold: completed health and character checks",
      },
      {
        title: "Pay the second instalment if requested",
        description: "If an adult family member cannot show Functional English, the Department invoices the A$4,890 second instalment after the other criteria are met.",
        output: "You hold: a paid second instalment invoice, where it applies",
      },
      {
        title: "Grant and start of permanent residence",
        description: "Permanent residence starts on the grant date if you are in Australia, or on first entry if you are outside. You must start work within six months and are expected to stay with the nominating employer for at least two years. Your five-year travel facility starts on grant.",
        output: "You hold: a permanent subclass 186 visa and Medicare eligibility",
      },
    ],
    conditions: [
      { code: "8515", meaning: "May be imposed on family members who apply from outside Australia: must not marry or enter a de facto relationship before entering Australia." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge, all streams; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,070" },
      { item: "Additional applicant under 18", amount: "A$1,535" },
      { item: "Second instalment", amount: "A$4,890", note: "Each family member aged 18 or over without Functional English; invoiced before grant" },
      { item: "Nomination charge (employer)", amount: "A$540", note: "No nomination charge if the position is in regional Australia (Category 2 or 3 areas on the Home Affairs 186 regional postcodes page)" },
      { item: "Skilling Australians Fund levy (employer)", amount: "A$3,000 or A$5,000", note: "One-off: A$3,000 if annual turnover is under A$10 million, A$5,000 otherwise; cannot be passed on to you" },
      { item: "Skills assessment, English test, health examinations and police certificates", amount: "Typical third-party costs", note: "Set by the assessing authority, test provider, panel clinic and police agencies" },
    ],
    afterGrant: [
      "You are a permanent resident from grant (onshore) or first entry (offshore) and can enrol in Medicare; some social security payments have waiting periods.",
      "Start work with the nominating employer within six months of grant or entry. The Department expects you to remain for at least two years; leaving earlier can be considered if the Department reviews whether the position was genuine.",
      "The visa allows travel to and from Australia for five years; after that you need a Resident Return visa (subclass 155 or 157) to re-enter as a permanent resident.",
      "You can sponsor eligible relatives and, after four years of lawful residence including 12 months as a permanent resident, apply for citizenship by conferral.",
      "New Zealand citizens entering on the 186 should tell the border officer they hold a permanent visa so they are not granted a subclass 444 visa instead.",
    ],
    pathways: [
      { title: "Australian citizenship", description: "Apply by conferral once you meet the residence requirement: four years lawfully in Australia including the last 12 months as a permanent resident, with limited absences.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Resident Return visa (subclasses 155 and 157)", description: "Needed to travel after the five-year travel facility ends; two years of residence in the last five years, or substantial ties, applies.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Family visas", description: "As a permanent resident you can sponsor a partner, child or parent for a family visa.", href: "/services/family-partner-visas" },
    ],
    risks: [
      "Nomination refused because the nominator is not the applicant's most recent sponsor (after a business restructure or change of ABN), the position is not ongoing for two years, or the salary is below the annual market salary rate or the Core Skills Income Threshold.",
      "TRT employment falling short of two years in the last three because of unpaid leave, part-time periods, time with an employer before its nomination was lodged, or work in an occupation other than the one on the 482 visa.",
      "Applying more than six months after the nomination was approved, or turning 45 before lodgement without an exemption under LIN 19/216.",
      "English test results older than three years, or no Functional English evidence for an adult family member and no budget for the A$4,890 second instalment.",
      "Direct Entry skills assessment that does not match the nominated ANZSCO occupation, or experience claims the referee cannot verify (PIC 4020).",
      "Health conditions in any family member, including those not migrating: the health waiver under PIC 4007 must be argued on undue cost and prejudice to access.",
    ],
    faqs: [
      { question: "How much does the 186 visa cost in 2026?", answer: "The base charge from 1 July 2026 is A$6,140 for the main applicant, A$3,070 for each additional adult and A$1,535 for each child. Adult family members without Functional English pay a A$4,890 second instalment. The employer pays the A$540 nomination charge (nil for positions in regional Australia) and a one-off Skilling Australians Fund levy of A$3,000 or A$5,000 depending on turnover." },
      { question: "Can I count time with more than one employer for the TRT stream?", answer: "Yes. You need two years of full-time eligible sponsored employment in the three years before applying, in an occupation for which your 457 or 482 visa was granted. Time with different sponsors counts, from the date each new employer lodged its nomination, but the employer that nominates you for the 186 must be your most recent sponsor." },
      { question: "What is the age limit and who is exempt?", answer: "You must be under 45 when you apply. Exemptions under LIN 19/216 cover university academics, scientists and researchers at government science agencies or universities, medical practitioners with two years of regional work on a 457 or 482 visa nominated for a regional position, and 482 holders who earned at least the Fair Work high income threshold in each of two of the last three years. In the Direct Entry stream, 444 and 461 holders with two years with the employer are also exempt." },
      { question: "Do I need a skills assessment for the TRT stream?", answer: "Not usually. The Department can ask for one if it doubts your skills, but there is no occupation list for the TRT stream: the occupation is the one on your most recent 457 or 482 visa. Direct Entry applicants need a positive skills assessment unless an exemption applies." },
      { question: "What English level is required?", answer: "Competent English for all streams unless the labour agreement provides a concession: IELTS 6 in each component or the equivalent in another approved test taken within three years, or a passport from the United Kingdom, Ireland, the United States, Canada or New Zealand. Since 16 November 2019 there is no other exemption in the TRT stream." },
      { question: "Can I apply for the 186 while holding a 494 visa?", answer: "Not until you have held the 494 visa for three years. Subclass 494 holders cannot be granted a subclass 186 visa in that period; their permanent pathway is the subclass 191 visa." },
      { question: "Do I have to stay with my employer after the visa is granted?", answer: "The visa has no condition tying you to the employer, but you must start work within six months and the Department expects you to remain for at least two years. Leaving early without a genuine reason may raise questions about whether the position was genuine." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 186 (Employer Nomination Scheme)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, reg 5.19 (approval of nominated positions) and reg 1.15C (Competent English)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration (LIN 19/216: Exemptions from Skill, Age and English Language Requirements for Subclass 186, 187 and 494 Visas) Instrument 2019", url: "https://www.legislation.gov.au/Details/F2019L01404" },
      { label: "Migration (IMMI 18/033: Specification of Annual Earnings and Methodology of Annual Market Salary Rate) Instrument 2018", url: "https://www.legislation.gov.au/F2018L00284/latest/text" },
      { label: "Migration Act 1958, ss 65, 116 and 501", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Schedule 4 PIC 4001, 4004, 4007, 4013, 4014, 4019, 4020, 4021; Schedule 8 condition 8515", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Employer Nomination Scheme (subclass 186)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186" },
      { label: "Home Affairs: Temporary Residence Transition stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/temporary-residence-transition-stream" },
      { label: "Home Affairs: Direct Entry stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/direct-entry-stream" },
      { label: "Home Affairs: Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/labour-agreement-stream" },
      { label: "Home Affairs: Regional postcodes (subclass 186)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/regional-postcodes" },
      { label: "Home Affairs: Salary requirements to nominate a worker", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements" },
      { label: "Home Affairs: Cost of sponsoring", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring" },
      { label: "Home Affairs: Competent English", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/competent-english" },
      { label: "Home Affairs: Functional English", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/functional-english" },
      { label: "Home Affairs: See your visa conditions (product 186)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=186-5" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Employer sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "Health requirement and health waiver", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
      { label: "Employer sponsored visa services", href: "/services/employer-sponsored-visas" },
    ],
    keywords: ["186 visa", "subclass 186", "employer nomination scheme visa", "186 visa requirements", "temporary residence transition stream", "direct entry stream 186", "186 visa cost 2026", "186 visa age limit", "482 to 186", "ENS visa"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 3. Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "skilled-employer-sponsored-regional-visa-494",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "494",
    name: "Skilled Employer Sponsored Regional (Provisional) visa",
    title: "Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)",
    seoTitle: "Subclass 494 regional employer visa: eligibility, cost, PR",
    seoDescription:
      "Subclass 494 regional employer sponsored visa 2026: A$6,140 charge, 5-year provisional visa, 3 years experience, age under 45, TSMIT A$79,423, PR via 191.",
    intro:
      "The Skilled Employer Sponsored Regional (Provisional) visa (subclass 494) is a five-year visa for skilled workers nominated by an employer in a designated regional area of Australia, which means everywhere except Sydney, Melbourne and Brisbane. You need three years of experience, a skills assessment and Competent English, and you must live, work and study in regional Australia. After three years you can apply for permanent residence through the Permanent Residence (Skilled Regional) visa (subclass 191).",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Provisional", "Employer sponsor required", "Apply in or outside Australia", "Pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$6,140", note: "Primary applicant, 1 July 2026 charge; A$3,070 per adult and A$1,535 per child added" },
      { label: "Length of stay", value: "5 years", note: "From the grant date; cannot be extended" },
      { label: "Work rights", value: "Nominated occupation, sponsor only, regional area", note: "Conditions 8608 and 8579" },
      { label: "Pathway to permanent residence", value: "Subclass 191 after 3 years", note: "No subclass 186, 189 or 190 grant until the 494 has been held for 3 years" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging visa A, B or C" },
      { label: "Sponsor and nomination", value: "Standard Business Sponsor in a regional area", note: "No nomination charge in the Employer Sponsored stream; SAF levy A$3,000 or A$5,000; regional certifying body assesses the salary" },
    ],
    streams: [
      {
        name: "Employer Sponsored stream",
        summary: "For workers nominated by a Standard Business Sponsor in an occupation on the relevant skilled occupation list, with the salary assessed by a regional certifying body.",
        forWhom: "Most regional employers and their nominated workers.",
        stay: "5 years",
        cost: "A$6,140",
        prPathway: "Subclass 191 after 3 years, with ATO notices of assessment for 3 of the 5 income years (Home Affairs states there is no minimum income)",
      },
      {
        name: "Labour agreement stream",
        summary: "For workers nominated by an employer that is party to a labour agreement with a subclass 494 option, under the terms of the agreement.",
        forWhom: "Regional employers under DAMA, industry or company-specific agreements, often with age, English or skills concessions.",
        stay: "5 years",
        cost: "A$6,140",
        prPathway: "Subclass 191 after 3 years",
      },
      {
        name: "Subsequent entrant",
        summary: "For members of the family unit of a subclass 494 holder who did not apply with them.",
        forWhom: "Partners and dependent children joining a 494 holder later.",
        stay: "Until the primary visa ends, up to 5 years",
        cost: "A$6,140",
        prPathway: "Included in the primary holder's subclass 191 application",
      },
    ],
    whoFor: [
      "You have a job offer in a designated regional area from a business that is, or will become, a Standard Business Sponsor and your occupation is on the list for this visa.",
      "You hold a 482 visa for the same occupation and your employer is in regional Australia and wants a five-year visa with a permanent pathway.",
      "You are under 45, have three years of full-time experience in your occupation and a positive skills assessment, and your employer cannot nominate you for a 482 visa because of occupation caveats.",
      "You hold a subclass 444 visa as a New Zealand citizen, or a subclass 461 visa as a family member of one, and have worked for a regional employer for two of the last three years.",
      "Your employer has a labour agreement (for example under a DAMA) that includes the subclass 494.",
    ],
    eligibility: [
      {
        title: "Nominated by a Standard Business Sponsor for a regional position",
        detail:
          "An employer lawfully operating in Australia that is, or has applied to be, a Standard Business Sponsor must nominate you in a full-time position that is likely to exist for five years, located in a designated regional area (all of Australia except Sydney, Melbourne and Brisbane) within the business or an associated entity. The nomination must be approved and current at grant; nominations last 12 months.",
        legal: "Migration Act 1958, ss 140E and 140GB; Migration Regulations 1994, Sch 2 Part 494",
      },
      {
        title: "Occupation on the relevant list and a positive skills assessment",
        detail:
          "The occupation must be on the skilled occupation list that applies to the subclass 494. You must have a skills assessment for that occupation from the relevant assessing authority obtained before you apply; a Temporary Graduate (subclass 485) assessment does not count. You do not need a new assessment if you held a 457 or 482 visa for the same occupation and had to provide a skills assessment to get it. Academics nominated by an Australian university, and subclass 444 or 461 holders of the last three years with two years' work for the nominating employer, are exempt.",
        legal: "Migration Regulations 1994, Sch 2 Part 494; Migration (LIN 19/216) Instrument 2019",
      },
      {
        title: "At least 3 years of full-time work experience",
        detail:
          "You must have worked in the nominated occupation for at least three years full-time at the skill level of the occupation, generally within the last five years. The period need not be continuous and equivalent part-time work may be considered, but casual work is not counted.",
        legal: "Migration Regulations 1994, Sch 2 Part 494",
      },
      {
        title: "Age under 45 unless exempt",
        detail:
          "You must be under 45 when you apply. Exemptions: academics at Level A to E nominated by an Australian university; medical practitioners with two years of regional work in the last three on a 457 or 482 visa nominated for a regional position; scientists, researchers or technical specialists at ANZSCO skill level 1 or 2 nominated by a government scientific agency or university; subclass 444 or 461 holders who have worked for the nominating employer for two of the last three years; and 457 or 482 holders with two of the last three years with the nominating employer earning at least the Fair Work high income threshold each year.",
        legal: "Migration Regulations 1994, Sch 2 Part 494; Migration (LIN 19/216: Exemptions from Skill, Age and English Language Requirements for Subclass 186, 187 and 494 Visas) Instrument 2019",
      },
      {
        title: "Competent English",
        detail: "At least Competent English: IELTS 6 in each component or the equivalent approved test taken within three years, or a passport from the United Kingdom, Ireland, the United States, Canada or New Zealand.",
        legal: "Migration Regulations 1994, Sch 2 Part 494 and reg 1.15C",
      },
      {
        title: "Salary: annual market salary rate and the TSMIT",
        detail:
          "If you will earn under A$250,000 the employer must pay at least the annual market salary rate, and both that rate and your guaranteed earnings must be at least the Temporary Skilled Migration Income Threshold, A$79,423 for nominations lodged between 1 July 2026 and 30 June 2027, excluding non-monetary benefits. A regional certifying body must assess the salary rate for Employer Sponsored stream nominations.",
        legal: "Migration Regulations 1994, Sch 2 Part 494; Migration (IMMI 18/033) Instrument 2018",
      },
      {
        title: "Health and character",
        detail: "All applicants, and family members not migrating if asked, must meet the health requirement (no waiver for this provisional visa). Applicants aged 16 or over, and non-migrating family members, must meet the character requirement.",
        legal: "PIC 4005 and PIC 4001 (Sch 4); Migration Act 1958, s 501",
      },
      {
        title: "Lawful status if you apply in Australia",
        detail: "Onshore applicants must hold a substantive visa or a Bridging visa A, B or C and must not be in immigration clearance.",
        legal: "Migration Regulations 1994, Sch 2 Part 494; Migration Act 1958, s 48",
      },
      {
        title: "Labour agreement stream",
        detail: "You must be nominated in an occupation specified in the labour agreement, have three years of experience, a skills assessment if the agreement requires one, be under 45 unless the agreement states otherwise, and meet the English standard in the agreement. The employer must be party to an agreement that includes a permanent residence option under this program.",
        legal: "Migration Regulations 1994, Sch 2 Part 494 (Labour agreement stream)",
      },
      {
        title: "Values statement, debts and immigration history",
        detail: "Applicants aged 16 or over must sign the Australian Values Statement; debts to the Australian Government must be settled or under arrangement; previous refusals and cancellations are considered.",
        legal: "PIC 4004, 4013, 4014, 4019, 4020 and 4021 (Sch 4)",
      },
    ],
    familyNote:
      "You can include members of the family unit (partner and dependent children) when you apply and add a dependent child after lodgement but before the decision. If you do not include your partner or children you must explain why. Family members pay their own charge (A$3,070 per adult, A$1,535 per child), must meet health and character requirements, must live, work and study in a designated regional area (condition 8579) and can later apply as subsequent entrants. Family members not applying may also have to meet health and character requirements.",
    documents: [
      { group: "Identity", items: ["Passport pages with photo, personal details and issue and expiry dates", "Change-of-name documents if applicable"] },
      {
        group: "Employment and skills",
        items: [
          "Nomination Transaction Reference Number from your employer",
          "Positive skills assessment for the nominated occupation, or evidence you held a 457 or 482 visa for the same occupation with a skills assessment, or exemption evidence",
          "Employment references on letterhead and payslips, contracts or tax records showing three years of full-time work at the skill level of the occupation",
          "Age exemption evidence if you are 45 or over",
          "Registration or licence where mandatory in the state or territory",
        ],
      },
      { group: "English", items: ["Competent English test report no more than three years old, or an exempt passport"] },
      { group: "Health and character", items: ["Health examinations for all applicants", "Australian Federal Police certificate and overseas police certificates for every country of 12 months or more in the last 10 years; Form 80 if requested"] },
      { group: "Family members", items: ["Marriage certificate or de facto relationship evidence", "Birth certificates, consent (Form 1229 or statutory declaration) for children under 18, and dependency evidence (Form 47a) for adult dependants"] },
    ],
    steps: [
      {
        title: "Employer becomes a Standard Business Sponsor",
        description: "The regional employer applies for Standard Business Sponsorship (A$420, valid five years) or lodges it with the nomination.",
        output: "You hold: a sponsor with an approved or lodged sponsorship",
      },
      {
        title: "Regional certifying body assesses the salary and the employer tests the labour market",
        description: "The employer advertises the position in Australia at least twice for four weeks within the four months before the nomination (the international trade obligation exemptions do not apply to the 494), sets the annual market salary rate at or above the TSMIT of A$79,423, and obtains the regional certifying body's assessment.",
        output: "You hold: labour market testing evidence and a regional certifying body advice",
      },
      {
        title: "Employer lodges the nomination",
        description: "There is no nomination charge in the Employer Sponsored stream, but the Skilling Australians Fund levy of A$3,000 (turnover under A$10 million) or A$5,000 is paid at lodgement; it is reduced for a worker who already holds a 494 visa. The employer attaches the signed employment contract, which must not rule out an extension.",
        output: "You hold: a nomination TRN and, once approved, a nomination valid for 12 months",
      },
      {
        title: "Obtain your skills assessment and English result",
        description: "Lodge the skills assessment with the assessing authority before you apply for the visa and take an approved English test unless you hold an exempt passport.",
        output: "You hold: a positive skills assessment and Competent English evidence",
      },
      {
        title: "Lodge the visa application in ImmiAccount",
        description: "Apply in or outside Australia (not in immigration clearance), pay A$6,140 plus family charges, attach documents and complete health examinations when asked. The Department may interview you or ask for address evidence.",
        output: "You hold: a lodged application and, onshore, a bridging visa",
      },
      {
        title: "Grant, start work within 90 days and live regionally",
        description: "Start work in the nominated occupation within 90 days of arrival or grant, notify address and passport changes within 14 days, and stay in a designated regional area. After three years, and with the income evidence required, apply for the subclass 191.",
        output: "You hold: a 494 visa in effect and the start of the three-year period for the subclass 191",
      },
    ],
    conditions: [
      { code: "8608", meaning: "Work only in your nominated occupation and only for the business that nominated you (or an associated entity if you were nominated by a Standard Business Sponsor). If your job ends you may stop work for up to 180 days in a single period and 365 days in total across the visa, counted from 1 July 2024. A new employer needs a nomination approved first, and you must start work within 90 days of arrival or grant." },
      { code: "8579", meaning: "Live, study and work only in an area that was a designated regional area when your employer lodged its most recent approved nomination." },
      { code: "8578", meaning: "Tell the Department within 14 days of any change to your residential address, email, phone number, passport details (including name), your employer's address or the address where you work." },
      { code: "8580", meaning: "Provide evidence of where you live, work and study within 28 days if the Department asks for it." },
      { code: "8581", meaning: "Attend an interview if the Department writes asking you to (in person, by phone or online)." },
      { code: "8515", meaning: "May be imposed on family members who apply from outside Australia: must not marry or enter a de facto relationship before entering Australia." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge, Employer Sponsored, Labour agreement and subsequent entrant; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,070" },
      { item: "Additional applicant under 18", amount: "A$1,535" },
      { item: "Second instalment", amount: "A$4,890", note: "For each family member aged 18 or over who applies with you without functional English; invoiced before grant (stated on the Home Affairs Labour agreement and subsequent entrant stream pages)" },
      { item: "Nomination charge (employer)", amount: "Nil", note: "No application charge to nominate in the Employer Sponsored stream" },
      { item: "Standard Business Sponsorship charge (employer)", amount: "A$420" },
      { item: "Skilling Australians Fund levy (employer)", amount: "A$3,000 or A$5,000", note: "One-off by turnover; reduced to 80, 60, 40 or 20 per cent for a nominee who already holds a 494 visa with 4, 3, 2 or 1 years remaining" },
      { item: "Subclass 191 application later", amount: "A$630", note: "Regional Provisional stream, 1 July 2026 charge" },
      { item: "Skills assessment, English test, health examinations and police certificates", amount: "Typical third-party costs", note: "Set by the assessing authority, test provider, panel clinic and police agencies" },
    ],
    afterGrant: [
      "Start work within 90 days of arrival (granted offshore) or of grant (granted onshore), in the nominated occupation and only for your sponsor in regional Australia; the visa can be cancelled if you do not.",
      "Live, work and study only in a designated regional area, notify address, passport and employer changes within 14 days, provide address evidence within 28 days if asked, and attend an interview if asked.",
      "You cannot extend the visa; a further 494 needs a new nomination. If your employment ends you have 180 days in a single period (365 days in total) to have a new nomination approved or arrange another visa.",
      "Until you have held the 494 visa for three years you cannot be granted a subclass 186, 189, 190, 191, 188, 132 or 858 visa or make a valid onshore Partner (subclass 820) application.",
      "After three years you can apply for the subclass 191 visa; keep tax records, because that visa requires income evidence.",
    ],
    pathways: [
      { title: "Permanent Residence (Skilled Regional) visa (subclass 191)", description: "Permanent residence after holding the 494 for three years while complying with its conditions and providing ATO notices of assessment for three of the five income years. Home Affairs states there is no minimum income requirement.", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { title: "Skilled Work Regional (Provisional) visa (subclass 491)", description: "A points-tested regional alternative with state or family sponsorship that does not depend on a single employer.", href: "/visas/skilled/skilled-work-regional-visa-491" },
      { title: "Regional postcode checker", description: "Confirm the position is in a designated regional area before the nomination is lodged.", href: "/tools/regional-postcode-checker" },
    ],
    risks: [
      "Nomination refused because the regional certifying body did not support the salary, the position is not full-time or not likely to last five years, the contract excludes an extension, or the work address is not in a designated regional area.",
      "Labour market testing relying on an international trade obligation exemption, which does not apply to the 494, or on advertisements that are too short or too old.",
      "Applying without a completed skills assessment, with a subclass 485 assessment, or with less than three years of full-time (not casual) experience in the occupation.",
      "Turning 45 before lodging without an exemption under LIN 19/216, or an English result older than three years.",
      "Living or working outside the regional area, or failing to notify address and employer changes within 14 days, breaching conditions 8579 and 8578 and putting the subclass 191 at risk.",
      "Expecting to switch to a 186 or 190 visa early: those grants are barred until three years have passed on the 494.",
    ],
    faqs: [
      { question: "What counts as regional Australia for the 494 visa?", answer: "Designated regional areas include all of Australia except Sydney, Melbourne and Brisbane, as listed by postcode in the Home Affairs regional areas instrument. Perth, Adelaide, the Gold Coast, Canberra, Hobart, Newcastle, Wollongong, Geelong and the Sunshine Coast all qualify. The work address, not the head office, decides." },
      { question: "How much does the 494 visa cost in 2026?", answer: "The base charge from 1 July 2026 is A$6,140 for the main applicant, A$3,070 for each additional adult and A$1,535 for each child, the same for the Employer Sponsored, Labour agreement and subsequent entrant applications. There is no nomination charge in the Employer Sponsored stream; the employer pays the A$420 sponsorship charge and a one-off Skilling Australians Fund levy of A$3,000 or A$5,000." },
      { question: "When can I apply for permanent residence?", answer: "After you have held the 494 visa for three years you can apply for the Permanent Residence (Skilled Regional) visa (subclass 191), which costs A$630 and requires that you complied with your conditions and provide ATO notices of assessment for three of the five income years (Home Affairs states there is no minimum income requirement). You cannot be granted a 186, 189 or 190 visa before the three years have passed." },
      { question: "Can I change employers on a 494 visa?", answer: "Only to another approved sponsor in a designated regional area that has a new nomination approved before you start. Condition 8608 allows up to 180 days without work in a single period and 365 days in total across the visa, and a new nomination may attract a reduced Skilling Australians Fund levy." },
      { question: "Do I need a skills assessment if I already hold a 482 visa?", answer: "Not if you held a 457 or 482 visa for the same nominated occupation and had to provide a skills assessment to obtain it. Otherwise you need a positive assessment from the relevant authority completed before you lodge; a subclass 485 skills assessment is not accepted." },
      { question: "Is there an age limit?", answer: "Yes, under 45 at the time of application, with exemptions under LIN 19/216 for university academics, regional medical practitioners with two years of regional work on a 457 or 482 visa, government and university scientists, 444 and 461 holders with two years with the employer, and high-income 457 or 482 holders. A labour agreement can also set a different age limit." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 494 (Skilled Employer Sponsored Regional (Provisional))", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, reg 2.59 (standard business sponsor) and Division 2.17 (nominations), Division 2.19 (sponsorship obligations)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 140E, 140GB and 140H to 140K", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Migration (LIN 19/216: Exemptions from Skill, Age and English Language Requirements for Subclass 186, 187 and 494 Visas) Instrument 2019", url: "https://www.legislation.gov.au/Details/F2019L01404" },
      { label: "Migration (LIN 19/212: Specification of Exempt Occupations) Instrument 2019 (contract-of-employment exemption)", url: "https://www.legislation.gov.au/Details/F2019L01399" },
      { label: "Migration (LIN 18/036: Period, manner and evidence of labour market testing) Instrument 2018, as linked from the 494 nomination page", url: "https://www.legislation.gov.au/Details/F2020C00871" },
      { label: "Migration (IMMI 18/033: Specification of Annual Earnings and Methodology of Annual Market Salary Rate) Instrument 2018", url: "https://www.legislation.gov.au/F2018L00284/latest/text" },
      { label: "Schedule 8 conditions 8608, 8579, 8578, 8580, 8581, 8515; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4019, 4020, 4021", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Skilled Employer Sponsored Regional (Provisional) visa (subclass 494)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494" },
      { label: "Home Affairs: Employer Sponsored stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/employer-sponsored-stream" },
      { label: "Home Affairs: Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/labour-agreement-stream" },
      { label: "Home Affairs: Subsequent entrant", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/subsequent-entrant" },
      { label: "Home Affairs: Regional certifying bodies", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/regional-certifying-bodies" },
      { label: "Home Affairs: Salary requirements to nominate a worker (TSMIT)", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements" },
      { label: "Home Affairs: Labour market testing", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/labour-market-testing" },
      { label: "Home Affairs: Cost of sponsoring", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring" },
      { label: "Home Affairs: See your visa conditions (product 494)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=494" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Permanent Residence (Skilled Regional) visa (subclass 191)", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Employer sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
      { label: "Labour agreements and DAMA", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
      { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
    ],
    keywords: ["494 visa", "subclass 494", "skilled employer sponsored regional visa", "494 visa requirements", "494 visa cost 2026", "regional employer sponsored visa", "494 to 191", "SESR visa", "494 visa age limit", "regional certifying body"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 4. Temporary Work (Short Stay Specialist) visa (subclass 400)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "temporary-work-short-stay-specialist-visa-400",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "400",
    name: "Temporary Work (Short Stay Specialist) visa",
    title: "Temporary Work (Short Stay Specialist) visa (subclass 400)",
    seoTitle: "Subclass 400 short stay specialist visa: rules and cost",
    seoDescription:
      "Temporary Work (Short Stay Specialist) visa (subclass 400) 2026: A$535 charge, up to 6 months of specialised non-ongoing work, apply outside Australia.",
    intro:
      "The Temporary Work (Short Stay Specialist) visa (subclass 400) lets a person with highly specialised skills, knowledge or experience that cannot reasonably be found in Australia do short-term, non-ongoing work, usually for up to three months and at most six. It is applied for outside Australia, needs no sponsorship or nomination, and cannot be extended or used for entertainment work. It does not lead to permanent residence.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Apply outside Australia", "No pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$535", note: "Primary applicant, 1 July 2026 charge; A$535 per adult and A$135 per child added; nil for foreign government representatives" },
      { label: "Length of stay", value: "Up to 6 months", note: "Stays over 3 months need a strong business case; the stay period starts on first arrival" },
      { label: "Work rights", value: "Only the specified work", note: "Condition 8107; family members cannot work or study" },
      { label: "Pathway to permanent residence", value: "None", note: "Condition 8503 (no further stay) may be imposed" },
      { label: "Where to apply", value: "Outside Australia", note: "You must be outside Australia when you apply and when the visa is decided" },
      { label: "Sponsor or nomination", value: "Not required", note: "A contract, letter of offer or invitation from the Australian business is needed" },
    ],
    whoFor: [
      "You are an overseas technician, engineer or consultant sent to install, commission, repair or train staff on equipment or systems your employer supplied to an Australian business.",
      "You have been invited to Australia for a short, specific project that no Australian worker can reasonably do, such as a specialist audit, inspection or one-off service.",
      "You are an actor or musician coming for a red-carpet premiere or promotional tour without performing, or crew on a production that will not be shown in Australia.",
      "You are a journalist or media worker covering an event for an overseas audience.",
    ],
    eligibility: [
      {
        title: "Highly specialised skills, knowledge or experience",
        detail: "Your skills must assist an Australian business, cannot reasonably be found in the Australian labour market, and the work must be non-ongoing (likely to be completed within six months with no arrangement to stay afterwards). Evidence includes your CV, licences or qualifications and a letter from your overseas employer describing your position and duties. The Australian business or your employer may need to show it tried to find Australian workers, because the visa cannot be granted if it affects Australians' employment or training opportunities.",
        legal: "Migration Regulations 1994, Sch 2 Part 400",
      },
      {
        title: "Proof of the work, outside the entertainment industry",
        detail: "You need a contract, letter of offer or invitation setting out the work. The visa does not allow performing as an entertainer, supporting entertainers, or working on a production that will be shown, broadcast or performed in Australia; those activities need the subclass 408 Entertainment stream. Promotional appearances without performances, and productions for overseas release only (with a distribution contract), are allowed.",
        legal: "Migration Regulations 1994, Sch 2 Part 400",
      },
      {
        title: "Genuine temporary entrant",
        detail: "You must intend to stay temporarily and only do what the visa allows. The Department considers your circumstances, immigration history and past compliance with visa conditions. The visa cannot be used to maintain ongoing residence.",
        legal: "Migration Regulations 1994, Sch 2 Part 400",
      },
      {
        title: "Enough money to support yourself and your family",
        detail: "You and any family members must have adequate means of support for the stay; family members cannot work.",
        legal: "Migration Regulations 1994, Sch 2 Part 400",
      },
      {
        title: "Health and character",
        detail: "All applicants must meet the health requirement, and applicants aged 16 or over must meet the character requirement. Health insurance is recommended because you are liable for your own health costs.",
        legal: "PIC 4005 and PIC 4001 (Sch 4)",
      },
      {
        title: "Debts and immigration history",
        detail: "Debts to the Australian Government must be repaid or under arrangement, and previous refusals, cancellations or exclusion periods can prevent grant.",
        legal: "PIC 4004, 4013, 4014 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "You can include members of the family unit when you apply (A$535 per adult, A$135 per child). They must meet health and character requirements and cannot work or study in Australia, other than a language training program. They cannot be added after lodgement.",
    documents: [
      { group: "Identity", items: ["Passport pages with photo, personal details and issue and expiry dates", "Change-of-name documents if applicable"] },
      {
        group: "Work",
        items: [
          "Contract, letter of offer or invitation from the Australian business describing the work, the dates and who will pay you",
          "Letter from your overseas employer confirming your position, duties and why you are being sent",
          "CV, qualifications, licences or certificates showing the specialised skills",
          "A business case explaining why the stay exceeds three months, where that applies, and evidence that the work is non-ongoing and could not be done by an Australian worker",
          "Distribution contract or similar evidence for a production that will not be shown in Australia",
        ],
      },
      { group: "Financial", items: ["Bank statements, payslips or an employer undertaking showing you can support yourself and any family members"] },
      { group: "Health and character", items: ["Health examinations if requested", "Police certificates if requested, and Form 80 or 1221 if asked"] },
      { group: "Family members", items: ["Marriage certificate or de facto evidence", "Birth certificates and parental consent (Form 1229 or statutory declaration) for children under 18 whose other parent is not travelling"] },
    ],
    steps: [
      {
        title: "Obtain the engagement documents",
        description: "Ask the Australian business for a contract, letter of offer or invitation and ask your overseas employer for a letter explaining the assignment. Employers must provide a contract or letter of offer and must comply with Australian workplace law.",
        output: "You hold: a signed contract or invitation and an employer letter",
      },
      {
        title: "Prepare evidence of your specialised skills",
        description: "Collect your CV, qualifications, licences and any evidence that the skills are not reasonably available in Australia, and a business case if you need more than three months.",
        output: "You hold: a skills and business-case bundle",
      },
      {
        title: "Lodge online from outside Australia",
        description: "Apply in ImmiAccount while outside Australia, include family members, pay A$535 plus family charges, and allow time for processing before your intended travel date. Foreign government representatives and organisations listed in a legislative instrument do not pay the charge.",
        output: "You hold: a lodged application and a Transaction Reference Number",
      },
      {
        title: "Respond to requests for health, character or biometrics",
        description: "The Department may ask for health examinations, police certificates or biometrics. Do not book travel until the visa is granted.",
        output: "You hold: completed checks",
      },
      {
        title: "Enter Australia within 6 months of grant",
        description: "You must arrive within six months of grant (or a shorter period the grant letter specifies). The stay period starts on first entry and does not restart on later entries. The visa is granted as single or multiple entry.",
        output: "You hold: a subclass 400 visa with a stay period of up to 6 months",
      },
    ],
    conditions: [
      { code: "8107", meaning: "Work only for the employer and in the position or activity the visa was granted for; do not work for yourself or anyone else or do unrelated activities." },
      { code: "8503", meaning: "May be imposed: while in Australia you cannot apply for any further substantive visa other than a protection visa." },
      { code: "8303", meaning: "Do not take part in activities that are disruptive to, or threaten violence against, the Australian community." },
      { code: "8101", meaning: "Imposed on family members: no work in Australia." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$535", note: "Primary applicant, 1 July 2026 charge; nil for representatives of a foreign government or organisations listed in a legislative instrument; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$535" },
      { item: "Additional applicant under 18", amount: "A$135" },
      { item: "Health examinations, police certificates, biometrics and health insurance", amount: "Typical third-party costs", note: "Only where requested; health insurance is recommended" },
    ],
    afterGrant: [
      "Enter Australia within six months of grant (or the shorter period on the grant letter); the stay period of up to six months starts on first entry and does not restart on re-entry.",
      "Do only the work the visa was granted for, for the business named in the application, and leave before the stay period ends. The visa cannot be extended and cannot be applied for from inside Australia.",
      "Family members may not work or study (other than a language course). You are protected by Australian workplace law while working.",
      "If condition 8503 is imposed you cannot apply for another substantive visa onshore unless it is waived.",
    ],
    pathways: [
      { title: "Temporary Activity visa (subclass 408)", description: "For entertainment, sport, research, religious work, staff exchanges and other activities of up to two years, and for performers or crew on productions shown in Australia.", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
      { title: "Skills in Demand visa (subclass 482)", description: "If the work turns out to be ongoing, the Australian business can sponsor you for up to four years as a Standard Business Sponsor.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Visitor visa (subclass 600) Business Visitor stream", description: "For meetings, conferences and negotiations that are not work.", href: "/visas/other-visas/visitor-visa-600" },
    ],
    risks: [
      "Refusal because the work is ongoing or routine (for example filling a vacancy or staffing a project for a season) rather than highly specialised and non-ongoing.",
      "Refusal because the skills are reasonably available in Australia, or because granting the visa would affect employment or training opportunities for Australians.",
      "Applying from inside Australia, or arriving after the six-month entry window, which makes the application invalid or the visa unusable.",
      "Stays over three months requested without a strong business case, resulting in a shorter grant period.",
      "Using the visa for performances or productions shown in Australia, which need the subclass 408 Entertainment stream, and risking cancellation under section 116 of the Migration Act 1958 for breaching condition 8107.",
      "Repeated 400 visas that suggest ongoing work, undermining the genuine temporary entrant assessment on the next application.",
    ],
    faqs: [
      { question: "How long can I stay on a subclass 400 visa?", answer: "Up to six months depending on your circumstances. Stays longer than three months generally need a strong business case with the application. The stay period starts when you first enter Australia and does not restart each time you travel, and the visa cannot be extended." },
      { question: "Does my employer need to be a sponsor?", answer: "No. The subclass 400 needs no sponsorship or nomination. You need a contract, letter of offer or invitation from the Australian business, and employers must comply with Australian workplace law." },
      { question: "How much does the 400 visa cost?", answer: "A$535 for the main applicant from 1 July 2026, plus A$535 for each additional adult and A$135 for each child. Representatives of a foreign government and people invited by organisations listed in a legislative instrument pay nothing." },
      { question: "Can I apply for the 400 visa from inside Australia?", answer: "No. You must be outside Australia when you apply and when the visa is decided. If you are in Australia and want to stay longer you must look at other visas, and condition 8503 may prevent an onshore application altogether." },
      { question: "Can my family come with me?", answer: "Members of the family unit can be included in the application, but they cannot work or study in Australia apart from a language training program, and you must show you can support them." },
      { question: "Can I work in the entertainment industry on a 400 visa?", answer: "No. Performing, supporting performers, or working on a production that will be shown or broadcast in Australia needs the Temporary Activity visa (subclass 408) Entertainment stream. The 400 covers promotional appearances without performances and productions made for overseas markets only." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 400 (Temporary Work (Short Stay Specialist))", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 65 and 116", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Schedule 8 conditions 8107, 8101, 8303 and 8503; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4020", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Temporary Work (Short Stay Specialist) visa (subclass 400)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-400" },
      { label: "Home Affairs: See your visa conditions (product 400)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=400" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Temporary Activity visa (subclass 408)", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Condition 8503 no further stay waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { label: "Visa finder", href: "/tools/visa-finder" },
    ],
    keywords: ["400 visa", "subclass 400", "short stay specialist visa", "temporary work visa 400", "400 visa requirements", "400 visa cost", "short term work visa australia", "highly specialised work visa", "400 visa 6 months"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 5. Training visa (subclass 407)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "training-visa-407",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "407",
    name: "Training visa",
    title: "Training visa (subclass 407)",
    seoTitle: "Subclass 407 Training visa: sponsor, nomination, cost",
    seoDescription:
      "Training visa (subclass 407) 2026: A$535 charge, up to 2 years of workplace-based training with an approved temporary activities sponsor and nomination.",
    intro:
      "The Training visa (subclass 407) lets you take part in workplace-based occupational training or a professional development program in Australia for up to two years. Your training organisation must be an approved temporary activities sponsor and, unless it is a Commonwealth Government agency, must have a nomination approved before you apply. The visa is not for filling workforce shortages, all work must be paid, and it does not lead directly to permanent residence.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Employer sponsor required", "Apply in or outside Australia", "No pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$535", note: "Primary applicant, 1 July 2026 charge; A$535 per adult and A$135 per child added; A$700 subsequent temporary application charge may apply onshore" },
      { label: "Length of stay", value: "Up to 2 years", note: "Set by the training program; cannot be extended" },
      { label: "Work rights", value: "Only the nominated training", note: "Condition 8102; family members may work up to 40 hours a fortnight" },
      { label: "Pathway to permanent residence", value: "None directly", note: "Other visas may be available after the training" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants need a substantive temporary visa or to apply within 28 days of its end" },
      { label: "Sponsor and nomination", value: "Temporary activities sponsor plus nomination", note: "Sponsorship A$420 for 5 years; nomination A$170" },
    ],
    whoFor: [
      "You need a period of workplace-based training in Australia to obtain registration, membership or a licence that is mandatory for your occupation in Australia or your home country.",
      "You have at least 12 months of recent experience in an occupation on the eligible list and an Australian organisation will give you a structured training program tailored to your needs.",
      "You are enrolled at an overseas institution and must complete up to six months of practical training, research or observation in Australia to finish your qualification.",
      "Your overseas employer is sending you to Australia for a face-to-face professional development program, or a government in Australia or your home country supports your structured training.",
    ],
    eligibility: [
      {
        title: "Approved temporary activities sponsor",
        detail: "Your training organisation must be an approved temporary activities sponsor: an organisation lawfully operating in Australia, a government agency, a foreign government agency or a religious institution. It must be able to provide the training directly unless it is a Commonwealth agency or an exemption in the legislative instrument applies, and there must be no adverse information about it.",
        legal: "Migration Act 1958, s 140E; Migration Regulations 1994, Sch 2 Part 407",
      },
      {
        title: "Approved nomination for one of three training types",
        detail: "Unless the sponsor is an Australian Commonwealth Government agency, it must have a nomination approved before you apply. The nomination must be for: (1) workplace-based training required for registration, membership or licensing that is mandatory in Australia or your home country; (2) a structured workplace training program, tailored and timed to your needs, in an occupation on the eligible skilled occupations list, where you have at least 12 months full-time equivalent experience or study in the occupation in the 24 months before the nomination; or (3) occupational training for capacity building overseas, being up to six months of practical training for a student enrolled overseas, training supported by an Australian or home-country government, or a face-to-face professional development program for managerial or professional employees of an overseas employer.",
        legal: "Migration Act 1958, s 140GB; Migration Regulations 1994, Sch 2 Part 407",
      },
      {
        title: "The training is genuine and does not displace Australians",
        detail: "The sponsor must offer the program as a genuine training opportunity, must not use it to fill a workforce shortage, must pay for any work undertaken at least the minimum wage, and must not displace Australian employees or deny them similar training.",
        legal: "Migration Regulations 1994, Sch 2 Part 407",
      },
      {
        title: "Age 18 or over and Functional English",
        detail: "You must usually be 18 or over when the visa is decided and have Functional English: an exempt passport, two years of full-time study taught in English, the schooling set out on the Home Affairs Functional English page, or a test such as IELTS average 4.5 taken in the 12 months before applying.",
        legal: "Migration Regulations 1994, Sch 2 Part 407 and reg 5.17 (Functional English)",
      },
      {
        title: "Genuine temporary entrant and compliance with previous visas",
        detail: "You must intend to stay temporarily and do only what the visa allows, and must have substantially complied with the conditions of your last substantive or bridging visa.",
        legal: "Migration Regulations 1994, Sch 2 Part 407",
      },
      {
        title: "Visa status if you apply in Australia",
        detail: "You must hold a substantive temporary visa other than a subclass 403 Domestic Worker (Diplomatic or Consular) visa, a Transit (subclass 771) visa or a Special Purpose visa, or apply within 28 days after your last substantive visa (not one of those) ceased or after notification of a tribunal or ministerial decision on its cancellation.",
        legal: "Migration Regulations 1994, Sch 2 Part 407; Migration Act 1958, s 48",
      },
      {
        title: "Health insurance, health and character",
        detail: "You must maintain adequate health insurance for the whole stay (condition 8501) and meet the health requirement; applicants aged 16 or over must meet the character requirement. Family members not travelling may also need health checks if you apply from outside Australia.",
        legal: "PIC 4005 and PIC 4001 (Sch 4); Sch 8 condition 8501",
      },
      {
        title: "Financial support, debts, values and immigration history",
        detail: "You must be able to support yourself and accompanying family members, have settled any debt to the Australian Government, sign the Australian Values Statement if 18 or over, and your immigration history will be considered. A child's visa must be in their best interests.",
        legal: "PIC 4004, 4013, 4014, 4019, 4020 (Sch 4)",
      },
    ],
    familyNote:
      "Members of the family unit can be included when you apply (A$535 per adult, A$135 per child) and must meet health and character requirements. Family members on this visa may work up to 40 hours a fortnight. They can join you later as subsequent entrants using the Temporary Work and Activity Visa (Subsequent Entrant) (403, 407, 408) form if they are listed on the nomination (unless the sponsor is a Commonwealth agency) and the sponsor confirms in writing that it agrees to sponsor them.",
    documents: [
      { group: "Identity", items: ["Passport pages with photo, personal details and issue and expiry dates", "Change-of-name documents if applicable"] },
      {
        group: "Sponsorship and training",
        items: [
          "Temporary activities sponsor approval details and the nomination Transaction Reference Number, or the Commonwealth agency's invitation",
          "Training plan showing the structure, duration, supervision and outcomes of the program",
          "Evidence that registration or licensing requires the training (type 1), of at least 12 months of recent experience or study in the occupation (type 2), or of enrolment, government support or your employer's professional development program (type 3)",
          "Qualifications and CV",
        ],
      },
      { group: "English and finances", items: ["Functional English evidence (passport, study records or a test result from the last 12 months)", "Bank statements, scholarship or employer letters showing you can support yourself and your family"] },
      { group: "Health and character", items: ["Adequate health insurance for the whole stay", "Health examinations if requested", "Police certificates where required"] },
      { group: "Family members", items: ["Marriage certificate or de facto evidence", "Birth certificates and parental consent for children under 18"] },
    ],
    steps: [
      {
        title: "Organisation becomes a temporary activities sponsor",
        description: "The training organisation applies in ImmiAccount with evidence it is lawfully operating (ABN, business names extract, trust deed if a trustee) and pays A$420. Approval lasts five years and covers subclass 407, 408 and 403 PALM sponsorship.",
        output: "You hold: a sponsor with an approved temporary activities sponsorship",
      },
      {
        title: "Sponsor lodges the nomination",
        description: "The sponsor nominates you for one of the three training types, attaches the training plan and pays A$170. Commonwealth Government agencies do not need a nomination. The nomination must be approved before you lodge the visa.",
        output: "You hold: an approved nomination",
      },
      {
        title: "Gather English, financial, health and character evidence",
        description: "Show Functional English, funds to support yourself and your family, adequate health insurance and police certificates where required.",
        output: "You hold: a complete evidence bundle",
      },
      {
        title: "Lodge the visa in ImmiAccount",
        description: "Apply in or outside Australia, include family members, and pay A$535 plus family charges. Onshore applicants need a qualifying substantive temporary visa or must apply within 28 days of its end.",
        output: "You hold: a lodged application and, onshore, a bridging visa",
      },
      {
        title: "Grant and training",
        description: "Do only the nominated training and tell the Department if the sponsor ends it. If you move to another organisation it must sponsor and nominate you; if the program changes with the same sponsor, a new nomination and a new visa are needed.",
        output: "You hold: a subclass 407 visa for the length of the program, up to 2 years",
      },
    ],
    conditions: [
      { code: "8102", meaning: "Work only as part of the nominated training program." },
      { code: "8501", meaning: "Maintain adequate health insurance for the whole stay." },
      { code: "8516", meaning: "Continue to satisfy the criteria for the grant of the visa, including the sponsorship and nomination." },
      { code: "8303", meaning: "Do not take part in activities that are disruptive to, or threaten violence against, the Australian community." },
      { code: "8104", meaning: "Imposed on family members: no more than 40 hours of work a fortnight." },
      { code: "8522", meaning: "Imposed on family members: leave Australia with or before the primary visa holder." },
      { code: "8503", meaning: "May be imposed: no further substantive visa application in Australia other than a protection visa." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$535", note: "Primary applicant, 1 July 2026 charge; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$535" },
      { item: "Additional applicant under 18", amount: "A$135" },
      { item: "Subsequent temporary application charge", amount: "A$700", note: "Payable by applicants in Australia who hold or last held certain temporary visas" },
      { item: "Temporary activities sponsorship charge (sponsor)", amount: "A$420", note: "Approval lasts 5 years" },
      { item: "Nomination charge (sponsor)", amount: "A$170", note: "Not required for Commonwealth Government agency sponsors" },
      { item: "Health insurance, health examinations, police certificates and English test", amount: "Typical third-party costs" },
    ],
    afterGrant: [
      "Do only the training program the nomination describes; any work must be paid at least the minimum wage and you are protected by the Fair Work Act.",
      "If your sponsor ends the training, tell the Department; you may find another temporary activities sponsor, which must lodge a new nomination.",
      "Family members may work up to 40 hours a fortnight and must leave with or before you.",
      "The visa cannot be extended. A new 407 visa needs continuing sponsorship and may require an explanation of why the training was not completed in the first period.",
      "Report exploitation to the Fair Work Ombudsman or the Department; it is illegal for a sponsor to exploit trainees, including unpaid trainees.",
    ],
    pathways: [
      { title: "Skills in Demand visa (subclass 482)", description: "Once you have at least one year of relevant experience and an employer willing to sponsor you in an eligible occupation.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Student visa (subclass 500)", description: "If the registration pathway requires further formal study in Australia.", href: "/visas/study/student-visa-500" },
      { title: "Temporary Activity visa (subclass 408)", description: "For research, exchange, religious or other activity-based stays of up to two years.", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
    ],
    risks: [
      "Nomination refused because the program looks like ordinary employment used to fill a vacancy rather than structured, tailored training.",
      "Type 2 nominations without the 12 months of recent experience or study in the occupation in the 24 months before lodgement, or in an occupation not on the eligible list.",
      "Applying before the nomination is approved, or onshore while holding a visa that cannot be used (403 Domestic Worker, 771 or a Special Purpose visa).",
      "Functional English evidence older than 12 months or financial evidence that does not cover accompanying family.",
      "Genuine temporary entrant concerns where the applicant has spent several years on successive temporary visas.",
      "Unpaid work or work outside the training program, breaching condition 8102 and exposing the sponsor to sanctions.",
    ],
    faqs: [
      { question: "What is the difference between a sponsor and a nomination for the 407 visa?", answer: "The sponsor is the organisation approved by the Department as a temporary activities sponsor (A$420, valid five years). The nomination (A$170) is the sponsor's application describing you, the type of training and how and where it will take place. Both must be approved before you can apply, unless the sponsor is a Commonwealth Government agency, which needs no nomination." },
      { question: "How much does the 407 visa cost?", answer: "A$535 for the main applicant from 1 July 2026, A$535 for each additional adult and A$135 for each child. Applicants in Australia who hold certain temporary visas also pay the A$700 subsequent temporary application charge. The sponsor pays the sponsorship and nomination charges." },
      { question: "Can I be paid while on a 407 visa?", answer: "Yes, and you must be. All work undertaken on the Training visa must be paid in line with Australian minimum wages. The visa is not intended to fill workforce shortages, and the training must be structured and tailored to you." },
      { question: "What English level do I need?", answer: "Functional English: an exempt passport, two years of full-time study taught in English, the schooling set out on the Home Affairs Functional English page, or a test result such as IELTS average 4.5 or PTE Academic overall 30 taken in the 12 months before you apply." },
      { question: "Can my family work?", answer: "Family members granted the visa with you can work up to 40 hours a fortnight. They must leave Australia with or before you." },
      { question: "Can I change training organisations?", answer: "Yes, but the new organisation must become a temporary activities sponsor and lodge a new nomination. If you continue the same approved program you do not need a new visa; if the program changes you must apply for a new visa after the nomination is approved." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 407 (Training)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, reg 5.17 (Functional English) and Division 2.19 (sponsorship obligations)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 140E, 140GB and 140H to 140K", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Legislative instrument linked from the Home Affairs 407 page: list of eligible skilled occupations for training type 2", url: "https://www.legislation.gov.au/F2019L00277/latest/text" },
      { label: "Legislative instrument linked from the Home Affairs 407 page: exemptions from providing occupational training directly", url: "https://www.legislation.gov.au/details/F2016L01777" },
      { label: "Schedule 8 conditions 8102, 8104, 8501, 8503, 8516, 8522; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4019, 4020", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Training visa (subclass 407)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407" },
      { label: "Home Affairs: Occupational training types for Training visa (subclass 407)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407/occupational-training-types" },
      { label: "Home Affairs: Temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/temporary-activities-sponsor" },
      { label: "Home Affairs: Sponsorship obligations for temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/existing-sponsors/tas-sponsorship-obligations" },
      { label: "Home Affairs: Functional English", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/functional-english" },
      { label: "Home Affairs: See your visa conditions (product 407)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=407" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Temporary Activity visa (subclass 408)", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Employer sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "Employer sponsored visa services", href: "/services/employer-sponsored-visas" },
    ],
    keywords: ["407 visa", "subclass 407", "training visa australia", "407 visa requirements", "407 visa cost", "occupational training visa", "temporary activities sponsor", "407 visa nomination", "professional development visa"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 6. Temporary Activity visa (subclass 408)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "temporary-activity-visa-408",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "408",
    name: "Temporary Activity visa",
    title: "Temporary Activity visa (subclass 408)",
    seoTitle: "Subclass 408 Temporary Activity visa: streams, cost, stay",
    seoDescription:
      "Temporary Activity visa (subclass 408) 2026: A$535 charge, entertainment, sport, religious, research and exchange streams, stays of 3 months to 2 years.",
    intro:
      "The Temporary Activity visa (subclass 408) is a short-term work visa for specific activities in Australia: entertainment, sport, religious work, research, staff exchanges, special programs, invited community events, Australian Government endorsed events, domestic work for senior executives and superyacht crew. You need a supporter or an approved temporary activities sponsor, and the stay depends on the stream, from three months to two years (longer for endorsed events). It does not lead to permanent residence.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Employer sponsor required", "Apply in or outside Australia", "No pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$535", note: "Primary applicant, 1 July 2026 charge, all streams; A$535 per adult and A$135 per child added; charity and foreign government sponsors may attract a concession" },
      { label: "Length of stay", value: "Up to 2 years", note: "3 months (invited participant), 12 months (special program, superyacht crew), 2 years (entertainment, sport, religious work, research, exchange, domestic work), event duration or up to 4 years (endorsed events)" },
      { label: "Work rights", value: "Only the approved activity", note: "Conditions 8106 and 8107; superyacht crew condition 8114" },
      { label: "Pathway to permanent residence", value: "None", note: "Generally not granted to extend temporary stays beyond 4 years" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or apply within 28 days of its end" },
      { label: "Sponsor or supporter", value: "Supporter for stays under 3 months applied for offshore; sponsor otherwise", note: "Temporary activities sponsorship A$420, valid 5 years; no charge to sponsor an applicant once approved" },
    ],
    streams: [
      { name: "Entertainment activities", summary: "Performers, production and support staff on film, television, live and online productions, including non-profit engagements and documentaries or commercials for overseas markets.", forWhom: "Actors, musicians, comedians, crew and support staff with a contract for work in Australia; the sponsor must consult the relevant union and, for film and television performers, obtain an Arts certificate.", stay: "Up to 2 years", cost: "A$535" },
      { name: "Sporting activities", summary: "Elite players, coaches, instructors and adjudicators with a formal agreement with an Australian club, and sports trainees in full-time structured training, each endorsed by a national sporting body.", forWhom: "People contracted to play, coach, instruct or adjudicate for an Australian team for a season, or to train with an internationally recognised sports organisation.", stay: "Up to 2 years", cost: "A$535" },
      { name: "Religious work", summary: "Full-time work that directly serves the religious aims of an Australian religious institution endorsed as a charity by the Australian Taxation Office.", forWhom: "Ministers, worship leaders, religious teachers and pastoral carers; a second visa is possible but total stay is capped at 4 years.", stay: "Up to 2 years", cost: "A$535" },
      { name: "Research activities", summary: "Academics with significant achievements, and overseas students or recent graduates, invited to observe or take part in a research project at an Australian tertiary or research institution.", forWhom: "Visiting researchers and research students; the sponsor must be a tertiary or research institution.", stay: "Up to 2 years (usually up to 12 months)", cost: "A$535" },
      { name: "Exchange arrangements", summary: "Reciprocal staff exchanges in skilled positions under a written agreement between an overseas organisation and an Australian organisation.", forWhom: "Skilled staff swapping jobs with an Australian citizen or permanent resident, where both benefit.", stay: "Up to 2 years", cost: "A$535" },
      { name: "Special program", summary: "Cultural, youth and school exchange programs run by non-profit organisations or government agencies under a Special Program Agreement, including school language assistants.", forWhom: "Participants invited to an approved special program; stays are usually 3 to 12 months.", stay: "Up to 12 months", cost: "A$535" },
      { name: "Invited for other social and cultural activity", summary: "People invited by an Australian organisation to a community-based event, including visiting sports teams, artists exhibiting work and competitors in non-sporting competitions.", forWhom: "Invited participants in a specific event; not for people contracted to play for or coach an Australian team.", stay: "Up to 3 months", cost: "A$535" },
      { name: "Australian Government endorsed events", summary: "Participants in events endorsed by the Australian Government, currently the Rugby League World Cup 2026, with a letter of endorsement from the approved organisation; no sponsor needed. The Workplace Justice pilot also sits in this stream.", forWhom: "Endorsed event participants, who pay no charge for the 2026 event.", stay: "Duration of the event, or up to 4 years", cost: "Nil for Rugby League World Cup 2026 participants; otherwise A$535" },
      { name: "Domestic work for executives", summary: "Full-time domestic work in the household of a senior foreign executive who holds a subclass 403 Privileges and Immunities visa or a subclass 482 visa as national managing director or state manager.", forWhom: "Experienced domestic workers aged 18 or over invited by the executive's foreign organisation.", stay: "Up to 2 years", cost: "A$535" },
      { name: "Superyacht crew", summary: "Crew members with a contract and a letter from the superyacht's owner confirming their employment on the vessel.", forWhom: "Crew of superyachts cruising Australian waters, sponsored or supported by the owner, captain or operator.", stay: "Up to 12 months", cost: "A$535" },
    ],
    whoFor: [
      "You are a performer or crew member contracted for a production, tour or festival in Australia and your sponsor has consulted the relevant union.",
      "An Australian club has signed you to play, coach or officiate for a season and the national sporting body endorses you.",
      "A religious institution that is an ATO-endorsed charity has engaged you full-time for religious work.",
      "A university or research institute has invited you to collaborate on a research project, or you are an overseas student completing research for your degree.",
      "Your overseas employer and an Australian organisation have a written agreement to exchange staff in skilled positions.",
      "You have been invited to a community event, a special program, an endorsed event, a superyacht crew position or domestic work for a senior executive.",
    ],
    eligibility: [
      {
        title: "A supporter or an approved temporary activities sponsor",
        detail: "If you apply outside Australia and intend to stay less than three months, you need a supporter who passes the support test (an Australian organisation, government agency or, in some streams, an individual). If you apply in Australia or intend to stay more than three months, you need an approved temporary activities sponsor. The sponsor type depends on the stream: a religious institution for religious work, a tertiary or research institution for research, a sporting organisation for sport, an organisation with an exchange agreement for exchanges, and a Special Program Agreement holder for special programs. Endorsed event applicants need a letter of endorsement instead.",
        legal: "Migration Act 1958, s 140E; Migration Regulations 1994, Sch 2 Part 408",
      },
      {
        title: "The right skills and a contract, invitation or agreement for the activity",
        detail: "You must have the skills, experience and (where relevant) qualifications for the activity and documentary proof of it: a contract for entertainment or superyacht work, a formal agreement with the club for sport, a full-time employment agreement at award wages for religious work, an invitation from the institution for research, a written exchange agreement naming the participants and positions, or an invitation to the event or program.",
        legal: "Migration Regulations 1994, Sch 2 Part 408",
      },
      {
        title: "No adverse effect on Australians",
        detail: "Your activity must not harm the work, training or employment conditions of Australian citizens or permanent residents. Entertainment sponsors must consult the relevant unions before engaging you; exchanges must benefit both participants.",
        legal: "Migration Regulations 1994, Sch 2 Part 408",
      },
      {
        title: "Genuine temporary entrant",
        detail: "You must intend to stay temporarily and only do what the visa allows. The Department generally does not let temporary residents extend their stay beyond four years through this visa and considers your immigration history and compliance.",
        legal: "Migration Regulations 1994, Sch 2 Part 408",
      },
      {
        title: "Visa status if you apply in Australia",
        detail: "You must hold a substantive visa, or your last substantive visa must have ceased within the previous 28 days.",
        legal: "Migration Regulations 1994, Sch 2 Part 408; Migration Act 1958, s 48",
      },
      {
        title: "Funds, health insurance, health and character",
        detail: "You must have enough money to support yourself and any dependants, hold adequate health insurance for the whole stay (condition 8501), meet the health requirement, and (if aged 16 or over) the character requirement.",
        legal: "PIC 4005 and PIC 4001 (Sch 4); Sch 8 condition 8501",
      },
      {
        title: "Declarations, debts, consent and immigration history",
        detail: "You must declare any conduct that could breach the prohibition on paying for visa sponsorship, have settled debts to the Australian Government, and a child under 18 needs the consent of everyone with parental responsibility and the grant must be in their best interests. Previous refusals and cancellations are considered.",
        legal: "PIC 4004, 4013, 4014, 4017, 4018 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "Members of the family unit can be included when you apply in most streams (A$535 per adult, A$135 per child); in the Exchange and Special program streams only if the agreement and the sponsor's support letter allow it. Family members must meet health and character requirements and hold health insurance. They can apply later as subsequent entrants using the Temporary Work and Activity Visa (Subsequent Entrant) (403, 407, 408) form. Work rights for family members depend on the stream and the conditions on the grant letter.",
    documents: [
      { group: "Identity", items: ["Passport pages with photo, personal details and issue and expiry dates", "Change-of-name documents if applicable"] },
      {
        group: "Activity and sponsorship",
        items: [
          "Sponsor's temporary activities sponsorship approval details, or the supporter's details and support test evidence, or the letter of endorsement for an endorsed event",
          "Contract, letter of engagement, invitation, exchange agreement or Special Program Agreement reference describing the activity, dates, location and pay",
          "Entertainment: union consultation evidence and, for film and television performers, the Arts certificate",
          "Sport: national sporting body endorsement and the club agreement or training program",
          "Religious work: the institution's ATO charity endorsement and the full-time employment agreement at award rates",
          "Research: the institution's invitation and your academic record or enrolment",
          "Superyacht crew: the contract and the owner's letter confirming employment",
        ],
      },
      { group: "Skills", items: ["CV, qualifications, references or evidence of reputation and achievements in your field"] },
      { group: "Health and character", items: ["Adequate health insurance for the whole stay", "Health examinations if requested", "Police certificates if requested"] },
      { group: "Finances and family", items: ["Evidence of funds to support yourself and dependants", "Marriage or de facto evidence, birth certificates and parental consent for children under 18"] },
    ],
    steps: [
      {
        title: "Identify the stream and whether you need a supporter or a sponsor",
        description: "Applying offshore for less than three months needs a supporter who passes the support test; applying onshore or for more than three months needs an approved temporary activities sponsor (A$420, valid five years). Endorsed event participants need only the endorsement letter.",
        output: "You hold: an identified stream and an approved sponsor or eligible supporter",
      },
      {
        title: "Obtain the engagement documents",
        description: "Collect the contract, invitation, exchange agreement or program approval, plus any union consultation, Arts certificate, sporting body endorsement or charity endorsement the stream requires.",
        output: "You hold: proof of the activity and the stream-specific endorsements",
      },
      {
        title: "Lodge the visa in ImmiAccount",
        description: "Apply in or outside Australia (not in immigration clearance), include family members where the stream allows, pay A$535 plus family charges (a concession may apply if your sponsor is a registered charity or a foreign government agency), and attach the documents.",
        output: "You hold: a lodged application and, onshore, a bridging visa",
      },
      {
        title: "Respond to requests",
        description: "Provide health examinations, police certificates or biometrics if asked. The Research stream is experiencing processing delays; do not arrange travel until the visa is granted.",
        output: "You hold: completed checks",
      },
      {
        title: "Grant and the activity",
        description: "The grant letter sets the stay period and conditions. If your sponsor or supporter ends the activity you must apply for another visa if eligible or leave within 28 days of stopping, or earlier if the visa is expiring.",
        output: "You hold: a subclass 408 visa for the period of the approved activity",
      },
    ],
    conditions: [
      { code: "8107", meaning: "Do not stop the activity the visa was granted for, change position or employer, work for yourself or do unrelated activities." },
      { code: "8106", meaning: "Work only where it is relevant to the activity or business specified in the application." },
      { code: "8109", meaning: "Entertainment: do not change the times and places of engagements specified in the application without written permission from the Department." },
      { code: "8114", meaning: "Superyacht crew: work only as a member of the crew of a superyacht." },
      { code: "8501", meaning: "Maintain adequate health insurance for the whole stay." },
      { code: "8516", meaning: "Continue to satisfy the criteria for the grant of the visa, including the sponsorship or support." },
      { code: "8303", meaning: "Do not take part in activities that are disruptive to, or threaten violence against, the Australian community." },
      { code: "8503", meaning: "May be imposed: no further substantive visa application in Australia other than a protection visa." },
      { code: "8522", meaning: "Imposed on family members: leave Australia with or before the primary visa holder." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$535", note: "Primary applicant, 1 July 2026 charge, all streams; nil for Rugby League World Cup 2026 participants; a concession may apply where the sponsor or supporter is an ACNC-registered charity or a foreign government agency, embassy or consulate; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Additional applicant aged 18 or over", amount: "A$535" },
      { item: "Additional applicant under 18", amount: "A$135" },
      { item: "Subsequent temporary application charge", amount: "A$700", note: "Payable by applicants in Australia who hold or last held certain temporary visas" },
      { item: "Temporary activities sponsorship charge (sponsor)", amount: "A$420", note: "Valid 5 years; no charge to sponsor or support an applicant once approved" },
      { item: "Health insurance, health examinations and police certificates", amount: "Typical third-party costs" },
    ],
    afterGrant: [
      "Do only the activity approved in the visa, for the sponsor or supporter named; entertainment visa holders must not change engagement times or places without written permission.",
      "If the activity ends early, apply for another visa if eligible or leave Australia within 28 days of stopping work (or before the visa expires if sooner). Sponsors must notify the Department within 28 days when a visa holder does not start or stops the activity.",
      "Keep adequate health insurance and tell the Department about changes to your passport, address or family.",
      "The visa cannot be extended; a further 408 needs a new application, and religious workers cannot exceed four years in total on two visas.",
      "You are protected by Australian workplace law while working; the Fair Work Ombudsman handles pay and conditions complaints.",
    ],
    pathways: [
      { title: "Temporary Work (Short Stay Specialist) visa (subclass 400)", description: "For highly specialised non-ongoing work of up to six months outside the entertainment industry, with no sponsor.", href: "/visas/employer-sponsored/temporary-work-short-stay-specialist-visa-400" },
      { title: "Skills in Demand visa (subclass 482)", description: "If an Australian employer wants to keep you in a skilled occupation for up to four years; ministers of religion and religious assistants can use the Labour agreement stream.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Training visa (subclass 407)", description: "For structured workplace training rather than an activity.", href: "/visas/employer-sponsored/training-visa-407" },
    ],
    risks: [
      "Applying with a supporter when a sponsor was required (onshore applications or stays over three months), which cannot be fixed after lodgement.",
      "Entertainment applications without union consultation or the Arts certificate, or sporting applications without the national body's endorsement.",
      "Religious work for an institution that is not ATO-endorsed as a charity, or that is a trust rather than the trustee, or work that is secular (administration, aged care).",
      "Genuine temporary entrant refusal where the applicant has already spent close to four years in Australia on temporary visas or has a history of non-compliance.",
      "Onshore applications lodged more than 28 days after the last substantive visa ended, which are invalid.",
      "Working outside the approved activity or for another organisation, breaching conditions 8107 or 8106 and risking cancellation under section 116 of the Migration Act 1958.",
    ],
    faqs: [
      { question: "What is the difference between a supporter and a sponsor for the 408 visa?", answer: "If you apply from outside Australia and will stay less than three months you need only a supporter who passes the support test, usually the organisation hosting you. If you apply in Australia or will stay more than three months you need an approved temporary activities sponsor, which costs the organisation A$420 and lasts five years. Endorsed event participants need neither, only a letter of endorsement." },
      { question: "How much does the 408 visa cost?", answer: "A$535 for the main applicant from 1 July 2026 in every stream, plus A$535 per additional adult and A$135 per child. Participants in the Rugby League World Cup 2026 pay nothing, and a concession may apply if the sponsor is a registered charity or a foreign government agency. Applicants in Australia who hold certain temporary visas also pay the A$700 subsequent temporary application charge." },
      { question: "How long can I stay?", answer: "It depends on the stream and the activity approved: up to three months for invited community events, up to 12 months for special programs and superyacht crew, up to two years for entertainment, sport, religious work, research, exchanges and domestic work for executives, and the duration of the event (or up to four years) for Australian Government endorsed events." },
      { question: "Can I apply in Australia?", answer: "Yes, if you hold a substantive visa or your last substantive visa ceased within the previous 28 days, and you have a temporary activities sponsor. You cannot apply in immigration clearance." },
      { question: "Can entertainers use the subclass 400 instead?", answer: "No. Performing, supporting performers or working on a production shown in Australia requires the subclass 408 Entertainment stream. The subclass 400 covers only promotional appearances without performances and productions made for overseas markets." },
      { question: "Can I bring my family?", answer: "In most streams you can include members of the family unit when you apply, and they can join later as subsequent entrants. In the Exchange and Special program streams this depends on the agreement and the sponsor's support letter. Family members must hold health insurance and leave with or before you." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 408 (Temporary Activity)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, Division 2.19 (sponsorship obligations for temporary activities sponsors)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 140E, 140H to 140K and 116", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Schedule 8 conditions 8106, 8107, 8109, 8114, 8501, 8503, 8516, 8522; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4017, 4018, 4020", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Temporary Activity visa (subclass 408)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408" },
      { label: "Home Affairs: Entertainment activities", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/entertainment-activities" },
      { label: "Home Affairs: Sporting activities", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/sporting-activities" },
      { label: "Home Affairs: Religious work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/religious-work" },
      { label: "Home Affairs: Research activities", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/research-activities" },
      { label: "Home Affairs: Exchange arrangements", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/exchange-arrangements" },
      { label: "Home Affairs: Special program", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/special-program" },
      { label: "Home Affairs: Invited for other social and cultural activity", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/invited-for-other-social-and-cultural-activity" },
      { label: "Home Affairs: Australian Government endorsed events", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/australian-government-endorsed-events" },
      { label: "Home Affairs: Domestic work for executives", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/domestic-work-for-executives" },
      { label: "Home Affairs: Superyacht crew", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-activity-408/superyacht-crew" },
      { label: "Home Affairs: Temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/temporary-activities-sponsor" },
      { label: "Home Affairs: Sponsorship obligations for temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/existing-sponsors/tas-sponsorship-obligations" },
      { label: "Home Affairs: See your visa conditions (product 408)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=408-50" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "Temporary Work (Short Stay Specialist) visa (subclass 400)", href: "/visas/employer-sponsored/temporary-work-short-stay-specialist-visa-400" },
      { label: "Training visa (subclass 407)", href: "/visas/employer-sponsored/training-visa-407" },
      { label: "Temporary Work (International Relations) visa (subclass 403)", href: "/visas/employer-sponsored/temporary-work-international-relations-visa-403" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Visa finder", href: "/tools/visa-finder" },
    ],
    keywords: ["408 visa", "subclass 408", "temporary activity visa", "408 visa requirements", "408 visa cost", "entertainment visa australia", "sporting visa 408", "religious worker visa", "research visa 408", "temporary activities sponsor"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 7. Temporary Work (International Relations) visa (subclass 403)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "temporary-work-international-relations-visa-403",
    category: "employer-sponsored",
    kind: "visa",
    subclass: "403",
    name: "Temporary Work (International Relations) visa",
    title: "Temporary Work (International Relations) visa (subclass 403)",
    seoTitle: "Subclass 403 visa: PALM scheme and government streams",
    seoDescription:
      "Temporary Work (International Relations) visa (subclass 403) 2026: PALM scheme workers up to 4 years, government, foreign agency and diplomatic streams.",
    intro:
      "The Temporary Work (International Relations) visa (subclass 403) covers work that supports Australia's international relations. For Australian employers the main stream is the Pacific Australia Labour Mobility (PALM) scheme, which lets approved employers recruit workers from Pacific island countries and Timor-Leste for nine months or up to four years. Other streams cover bilateral government agreements, foreign government agency staff and language teachers, domestic workers for diplomats, and people with privileges and immunities. It does not lead to permanent residence, although PALM workers may be eligible for the Pacific Engagement visa ballot.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Employer sponsor required", "Apply outside Australia", "No pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$365 (PALM) or A$470", note: "A$470 in the Foreign Government Agency, Domestic Worker, Government Agreement and MATES streams, 1 July 2026 charge; the Privileges and Immunities stream is free" },
      { label: "Length of stay", value: "Up to 4 years", note: "PALM short-term contracts 9 months; long-term 1 to 4 years; Domestic Worker 12 months on the first visa" },
      { label: "Work rights", value: "Only for the approved employer and purpose", note: "PALM condition 8611: changes of employer need DEWR approval" },
      { label: "Pathway to permanent residence", value: "None", note: "PALM workers may enter the Pacific Engagement visa (subclass 192) ballot" },
      { label: "Where to apply", value: "Outside Australia", note: "PALM holders offered a long-term contract or extension can apply onshore" },
      { label: "Sponsor", value: "Temporary activities sponsor approved by DEWR as a PALM employer", note: "Sponsorship A$420 for 5 years; no charge to sponsor a worker; other streams need government support letters" },
    ],
    streams: [
      { name: "Pacific Australia Labour Mobility (PALM) stream", summary: "Citizens and residents of participating PALM countries recruited by employers approved by the Department of Employment and Workplace Relations (DEWR) for seasonal or longer-term work.", forWhom: "Workers from participating Pacific island countries and Timor-Leste with a PALM recruitment approval letter; the main stream for Australian employers in agriculture, meat processing, care, hospitality and other sectors.", stay: "Up to 9 months (short-term contract) or up to 4 years (long-term contract)", cost: "A$365, plus A$355 per adult and A$85 per child" },
      { name: "Government Agreement stream", summary: "Work under a bilateral agreement between the Australian Government or a state or territory government and a foreign government, supported by the agreement's signatories.", forWhom: "People engaged under the terms of a government-to-government agreement who meet any licensing requirements.", stay: "Up to 4 years", cost: "A$470, plus A$470 per adult and A$120 per child" },
      { name: "Foreign Government Agency stream", summary: "Representatives of a foreign government agency that does not have official status in Australia, and foreign language teachers employed by a foreign government in an Australian school.", forWhom: "Foreign tourist bureau, trade office or cultural institute staff, and government-sent language teachers supported by an Australian school.", stay: "Up to 4 years", cost: "A$470" },
      { name: "Domestic Worker (Diplomatic or Consular) stream", summary: "Full-time domestic work in the household of a Diplomatic (subclass 995) visa holder with the support of the Department of Foreign Affairs and Trade.", forWhom: "Domestic workers aged 18 or over with a compliant employment contract, applying from outside Australia for the first visa.", stay: "Up to 12 months on the first visa; further visas for the period in the DFAT support letter", cost: "A$470" },
      { name: "Privileges and Immunities stream", summary: "International representatives who have, or expect to have, privileges and immunities under the International Organisations (Privileges and Immunities) Act 1963 or the Overseas Missions (Privileges and Immunities) Act 1995, with a DFAT letter of support.", forWhom: "Staff of international organisations and overseas missions recommended by DFAT.", stay: "For the period DFAT supports", cost: "Nil" },
    ],
    whoFor: [
      "You are a citizen and resident of a participating PALM country and an approved PALM employer has offered you a work placement with a recruitment approval letter.",
      "You hold a PALM, Seasonal Worker Program or Pacific Labour Scheme visa and your employer has offered you a long-term contract or an extension within the four-year limit.",
      "You are an Australian employer approved by DEWR under the PALM scheme and need the visa process for your recruits.",
      "You will work under a bilateral agreement between an Australian government and your government, or represent a foreign government agency, or teach a language on behalf of a foreign government in an Australian school.",
      "You will do domestic work for a diplomat, or you are an international representative recommended by DFAT.",
    ],
    eligibility: [
      {
        title: "PALM stream: eligible passport and PALM approval",
        detail: "You must be a citizen and resident of a participating PALM scheme country, meet the scheme's minimum age, skills, English and character requirements, hold an offer of an approved PALM work placement and a recruitment approval letter from your sponsor that includes the PALM endorsement number.",
        legal: "Migration Regulations 1994, Sch 2 Part 403 (Pacific Australia Labour Mobility stream)",
      },
      {
        title: "PALM stream: an approved sponsor",
        detail: "Your sponsor must be an approved temporary activities sponsor and approved by the Department of Employment and Workplace Relations as a PALM scheme employer, and must give you its sponsor application ID. There must be no adverse information about the sponsor.",
        legal: "Migration Act 1958, s 140E; Migration Regulations 1994, Sch 2 Part 403",
      },
      {
        title: "Genuine temporary stay",
        detail: "You must intend to stay temporarily, do the work specified in your application and comply with the visa conditions. Short-term PALM workers must leave when the contract ends (within nine months) and spend at least three months outside Australia before returning; long-term workers cannot exceed four years and must spend six months outside Australia after each long-term contract.",
        legal: "Migration Regulations 1994, Sch 2 Part 403",
      },
      {
        title: "Where you can apply",
        detail: "You must be outside Australia when you apply and when the visa is decided, unless you hold (or held in the last 28 days) a subclass 403 PALM, Seasonal Worker Program or Pacific Labour Scheme visa and have been offered a long-term contract or an extension that keeps your total stay under four years. Domestic Worker stream applicants must be outside Australia for the first visa.",
        legal: "Migration Regulations 1994, Sch 2 Part 403",
      },
      {
        title: "Health insurance, health and character",
        detail: "You must hold adequate health insurance for the whole stay (condition 8501) and meet the health and character requirements.",
        legal: "PIC 4005 and PIC 4001 (Sch 4); Sch 8 condition 8501",
      },
      {
        title: "Government Agreement, Foreign Government Agency, Domestic Worker and Privileges and Immunities streams",
        detail: "You must be supported by the signatories to the bilateral agreement (and meet any licensing or registration requirements); or be supported by the foreign government agency and, for language teaching, by an Australian school; or be 18 or over with an employment contract that meets Australian workplace law and a DFAT support letter for domestic work in a diplomat's household; or hold a DFAT letter recommending the visa and have, or expect to have, privileges and immunities under the 1963 or 1995 Acts.",
        legal: "Migration Regulations 1994, Sch 2 Part 403",
      },
      {
        title: "Debts and immigration history",
        detail: "Debts to the Australian Government must be settled or under arrangement, and previous refusals, cancellations or exclusion periods are considered.",
        legal: "PIC 4004, 4013, 4014 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "Short-term PALM workers cannot bring family. Long-term PALM workers selected for the family accompaniment pilot can have their partner and children apply as subsequent entrants with the selection notification letter, evidence they are members of the family unit, health and character checks and the visa application charge. Family inclusion in the other streams depends on the stream and the supporting agency.",
    documents: [
      { group: "Identity", items: ["Passport pages with photo, personal details and issue and expiry dates (a passport from a participating PALM country for the PALM stream)"] },
      {
        group: "Employment and support",
        items: [
          "PALM: recruitment approval letter with the PALM endorsement number, the sponsor's temporary activities sponsor application ID and the offer of placement",
          "Government Agreement: evidence of the bilateral agreement and support from its signatories; licensing or registration evidence",
          "Foreign Government Agency: support letter from the agency and, for language teachers, from the Australian school",
          "Domestic Worker: employment contract meeting Australian workplace law and the DFAT support letter",
          "Privileges and Immunities: DFAT letter of support",
        ],
      },
      { group: "Health and character", items: ["Adequate health insurance for the whole stay", "Health examinations as requested", "Police certificates as requested"] },
      { group: "Family members (PALM family accompaniment pilot)", items: ["Family accompaniment selection notification letter", "Marriage or de facto evidence and birth certificates"] },
    ],
    steps: [
      {
        title: "Employer becomes a PALM approved employer and a temporary activities sponsor",
        description: "The employer applies to DEWR for PALM approved employer status and separately applies to the Department of Home Affairs for temporary activities sponsorship (A$420, valid five years). There is no charge to sponsor each worker after approval.",
        output: "You hold: a sponsor approved under both the PALM scheme and the Migration Regulations",
      },
      {
        title: "Recruitment approval and offer",
        description: "The employer obtains PALM recruitment approval and gives you a recruitment approval letter with the endorsement number and an offer of placement. Workers in the other streams obtain the agency, school or DFAT support letters.",
        output: "You hold: a recruitment approval letter and offer, or the relevant support letter",
      },
      {
        title: "Lodge the visa online from outside Australia",
        description: "Apply in ImmiAccount with the sponsor application ID and endorsement number, pay the visa application charge and attach health insurance and identity documents. PALM holders offered a long-term contract or extension may apply in Australia.",
        output: "You hold: a lodged application",
      },
      {
        title: "Complete health and character checks",
        description: "Provide health examinations and police certificates as requested. Do not travel until the visa is granted.",
        output: "You hold: completed checks and a visa grant letter stating the stay period and conditions",
      },
      {
        title: "Work for the approved employer",
        description: "Work only for your sponsor (or another employer under a DEWR-approved arrangement) in the position and industry approved, return home when the contract ends, and observe the three-month (short-term) or six-month (long-term) break before any further PALM contract.",
        output: "You hold: a subclass 403 visa for the period of your contract, up to 4 years",
      },
    ],
    conditions: [
      { code: "8611", meaning: "PALM: remain employed by your approved sponsor or another employer under an arrangement with DEWR; do not work for another sponsor, change employers without DEWR approval, work for yourself or do work outside the purpose of the visa." },
      { code: "8576", meaning: "May apply to PALM workers: do not stay in Australia for more than 10 months in any 12-month period." },
      { code: "8578", meaning: "Tell the Department within 14 days of changes to your address, email, phone, passport details, your employer's address or where you work." },
      { code: "8501", meaning: "Maintain adequate health insurance for the whole stay." },
      { code: "8516", meaning: "Continue to satisfy the criteria for the grant of the visa, including the sponsorship." },
      { code: "8303", meaning: "Do not take part in activities that are disruptive to, or threaten violence against, the Australian community." },
      { code: "8503", meaning: "May be imposed: no further substantive visa application in Australia other than a protection visa." },
      { code: "8106", meaning: "Other streams: work only where it is relevant to the business or tasks specified in the application." },
    ],
    costs: [
      { item: "Base application charge (Foreign Government Agency, Domestic Worker, Government Agreement and MATES streams)", amount: "A$470", note: "Primary applicant, 1 July 2026 charge; A$470 per additional adult and A$120 per child in the Foreign Government Agency, Government Agreement and MATES streams (MATES is the Mobility Arrangement for Talented Early-professionals Scheme)" },
      { item: "Base application charge (Privileges and Immunities stream)", amount: "Nil" },
      { item: "Base application charge (Pacific Australia Labour Mobility stream)", amount: "A$365", note: "Primary applicant, from the Home Affairs visa pricing table; A$355 per additional adult and A$85 per child; a lower charge applies to eligible Pacific Island and Timor-Leste passport holders" },
      { item: "Temporary activities sponsorship charge (PALM employer)", amount: "A$420", note: "Valid 5 years; no charge to sponsor each worker" },
      { item: "Health insurance, health examinations and police certificates", amount: "Typical third-party costs" },
    ],
    afterGrant: [
      "The visa starts on first entry (granted offshore) or on grant (granted onshore) and is multiple entry while you hold a PALM work contract; time outside Australia does not extend it.",
      "Work only in the position and industry approved, for your sponsor or an employer approved by DEWR; changes of employer after grant need DEWR approval.",
      "Return home when your contract ends regardless of the visa's length; short-term workers must spend at least three months outside Australia and long-term workers six months before another PALM contract.",
      "Tell the Department within 14 days of changes to your address, passport or workplace, keep health insurance and report exploitation to the Fair Work Ombudsman or DEWR.",
      "A new PALM stream visa is needed to move from a short-term to a long-term contract or to extend a long-term contract within the four-year limit; you cannot extend this visa.",
    ],
    pathways: [
      { title: "Pacific Engagement visa (subclass 192)", description: "A permanent visa allocated by ballot to citizens of participating Pacific countries and Timor-Leste with a job offer in Australia.", href: "/visas/other-visas/pacific-engagement-visa-192" },
      { title: "Skills in Demand visa (subclass 482)", description: "If your employer can nominate you in an eligible skilled occupation at the required salary, or under an industry labour agreement.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Temporary Activity visa (subclass 408)", description: "For sport, religious, research and other activity-based stays with a temporary activities sponsor.", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
    ],
    risks: [
      "Applying without a recruitment approval letter and endorsement number, or with a sponsor that is approved by DEWR but has not obtained temporary activities sponsorship (or the reverse).",
      "Applying onshore without holding, or having held in the last 28 days, a PALM, Seasonal Worker Program or Pacific Labour Scheme visa, or where the total stay would exceed four years.",
      "Changing employers without DEWR approval, or working outside the approved position, breaching condition 8611 and risking cancellation under section 116 of the Migration Act 1958.",
      "Overstaying a short-term contract beyond nine months, or returning before the required three- or six-month break.",
      "Lapsed health insurance, or failing to notify address and passport changes within 14 days.",
    ],
    faqs: [
      { question: "What is the PALM scheme and who can use it?", answer: "The Pacific Australia Labour Mobility scheme lets Australian employers approved by DEWR recruit workers from participating Pacific island countries and Timor-Leste where local workers are not available. Workers come for short-term contracts of up to nine months or long-term contracts of one to four years, and hold the subclass 403 PALM stream visa." },
      { question: "What does the employer have to do?", answer: "Become a PALM approved employer through DEWR, become an approved temporary activities sponsor with the Department of Home Affairs (A$420, valid five years), obtain recruitment approval for each placement and give each worker a recruitment approval letter with the endorsement number. There is no visa sponsorship charge per worker, and the employer must meet the sponsorship obligations." },
      { question: "Can PALM workers change employers?", answer: "Only with DEWR approval under an arrangement with the Department of Employment and Workplace Relations. Condition 8611 requires you to remain employed by your sponsor or an approved alternative employer; working for yourself or for another sponsor breaches the visa." },
      { question: "Can PALM workers bring their family?", answer: "Short-term workers cannot. Long-term workers selected for the family accompaniment pilot can have their partner and children apply as subsequent entrants, using the selection notification letter and meeting health, character and charge requirements." },
      { question: "Can I stay longer or apply in Australia?", answer: "You cannot extend the visa, but PALM, Seasonal Worker Program or Pacific Labour Scheme visa holders who are offered a long-term contract, or an extension that keeps their total stay under four years, can apply for a new PALM stream visa in Australia while holding the visa or within 28 days of it ending." },
      { question: "Does the 403 visa lead to permanent residence?", answer: "No. Citizens of participating countries may enter the ballot for the permanent Pacific Engagement visa (subclass 192), and workers in skilled occupations may be nominated for a Skills in Demand visa if the employer meets the sponsorship requirements." },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 403 (Temporary Work (International Relations))", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, Division 2.19 (sponsorship obligations for temporary activities sponsors)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Act 1958, ss 140E, 140H to 140K and 116", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Overseas Missions (Privileges and Immunities) Act 1995", url: "https://www.legislation.gov.au/Series/C2004A04910" },
      { label: "Schedule 8 conditions 8611, 8576, 8578, 8501, 8516, 8503, 8106; Schedule 4 PIC 4001, 4004, 4005, 4013, 4014, 4020", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Temporary Work (International Relations) visa (subclass 403)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403" },
      { label: "Home Affairs: Pacific Australia Labour Mobility stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/pacific-australia-labour-mobility-stream" },
      { label: "Home Affairs: Government Agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/government-agreement" },
      { label: "Home Affairs: Foreign Government Agency stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/foreign-government-agency" },
      { label: "Home Affairs: Domestic Worker (Diplomatic or Consular) stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/domestic-worker" },
      { label: "Home Affairs: Privileges and Immunities stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-work-403/privileges-immunities" },
      { label: "Home Affairs: Temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/temporary-activities-sponsor" },
      { label: "Home Affairs: See your visa conditions (product 403 PALM)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=403-70" },
      { label: "Home Affairs: Current visa pricing", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
      { label: "PALM scheme (Department of Employment and Workplace Relations)", url: "https://www.palmscheme.gov.au/" },
    ],
    related: [
      { label: "Pacific Engagement visa (subclass 192)", href: "/visas/other-visas/pacific-engagement-visa-192" },
      { label: "Temporary Activity visa (subclass 408)", href: "/visas/employer-sponsored/temporary-activity-visa-408" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Labour agreements and DAMA", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
      { label: "Employer sponsored visa services", href: "/services/employer-sponsored-visas" },
    ],
    keywords: ["403 visa", "subclass 403", "PALM visa", "pacific australia labour mobility visa", "403 visa requirements", "PALM scheme employer", "temporary work international relations visa", "403 visa cost", "seasonal worker visa australia"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 8. Labour agreements and DAMA (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "labour-agreements-and-dama",
    category: "employer-sponsored",
    kind: "guide",
    name: "Labour agreements and DAMA",
    title: "Labour agreements and Designated Area Migration Agreements (DAMA)",
    seoTitle: "Labour agreements and DAMA: types, concessions, process",
    seoDescription:
      "Australian labour agreements in 2026: company-specific, industry, DAMA, project and GTES agreements, the 482, 186 and 494 concessions, and how to request one.",
    intro:
      "A labour agreement is a formal contract between an employer and the Australian Government that lets the employer sponsor overseas workers for Skills in Demand (subclass 482), Employer Nomination Scheme (subclass 186) or Skilled Employer Sponsored Regional (subclass 494) visas where the standard programs do not fit, for example because the occupation is not on a list or the business needs concessions to English, salary, experience or age. Agreements are generally in effect for five years and come in company-specific, industry, Designated Area Migration Agreement (DAMA), project and Global Talent Employer Sponsored forms.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Employer sponsor required", "Pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "No fee to request an agreement", note: "Nomination charges, the Skilling Australians Fund levy and visa application charges apply at the nomination and visa stages" },
      { label: "Length of agreement", value: "Generally 5 years", note: "Nomination ceilings are set per year of the agreement" },
      { label: "Visas available", value: "482, 186 and 494 Labour agreement streams", note: "Permanent pathways only where the agreement provides for them" },
      { label: "Pathway to permanent residence", value: "Via 186 or 494 Labour agreement stream", note: "Age and other concessions can be negotiated for the permanent pathway" },
      { label: "Who applies", value: "The employer, in ImmiAccount", note: "DAMA requests need endorsement from the Designated Area Representative first" },
      { label: "Concessions possible", value: "English, salary, skills, experience, age, labour market testing", note: "Only with strong reasons; salary concessions only in Category 3 regional areas and never below equivalent Australian conditions" },
    ],
    whoFor: [
      "You are an employer with a genuine shortage in an occupation that is not on the Core Skills Occupation List or the list for the subclass 494, or that is not defined in ANZSCO.",
      "Your business is in a region covered by one of the 13 current DAMAs and you want access to the semi-skilled occupations and concessions in that region's head agreement.",
      "You operate in an industry with a template agreement: dairy, fishing, meat, pork, horticulture, advertising, on-hire, fine dining restaurants, aged care or ministers of religion.",
      "You are an overseas worker whose employer has a labour agreement and who needs to know how the concessions change the 482, 186 or 494 criteria.",
      "You are a project company building a large resources or infrastructure project with peak workforce demand.",
    ],
    eligibility: [
      {
        title: "When a labour agreement can be requested",
        detail: "The employer must show a genuine labour market need that Australian workers cannot fill, that no standard visa option is available, and that the agreement aligns with Australia's national interest. The program is for skilled positions (ANZSCO skill levels 1 to 4; level 5 only in exceptional cases in Category 3 regional areas) and is a temporary solution: employers are expected to plan to train Australians. The Department is under no obligation to enter into an agreement.",
        legal: "Migration Act 1958, s 140GC (work agreements); Migration Regulations 1994, reg 2.76",
      },
      {
        title: "Company-specific labour agreements",
        detail: "Negotiated case by case with a single employer that has been lawfully and actively operating in Australia for at least 12 months, is financially viable (with a statement from a chartered or certified practising accountant), has no adverse information, and has consulted industry stakeholders including unions. The occupation must not already be covered by an industry, DAMA or project agreement. A trust cannot be a party; the trustee can.",
        legal: "Home Affairs Labour Agreement program information guide, Parts 2 and 3",
      },
      {
        title: "Industry labour agreements",
        detail: "Template agreements with fixed terms, conditions and concessions negotiated between the Minister and industry bodies, currently covering dairy, fishing, meat, pork, horticulture, advertising, on-hire, restaurant (fine dining), minister of religion and aged care. No further concessions can be requested, which keeps a level playing field across the industry. Labour market testing is not required for a Minister of Religion Labour Agreement, and the Aged Care Industry Labour Agreement can satisfy it with a memorandum of understanding with the relevant union.",
        legal: "Home Affairs Labour Agreement program information guide, Part 4",
      },
      {
        title: "Designated Area Migration Agreements (DAMA)",
        detail: "A two-tier framework for a defined regional area. The first tier is a five-year head agreement between the Australian Government and a Designated Area Representative (usually a state or territory government, council, chamber of commerce or regional development body) listing occupations, including semi-skilled ones, and agreed concessions. The second tier is an individual labour agreement with each endorsed employer. The employer must obtain endorsement from the Designated Area Representative before lodging the request in ImmiAccount, must show it tried to recruit Australians first, and cannot use a DAMA for an industry covered by an industry agreement. There are currently 13 DAMAs, including the Northern Territory, South Australia, Western Australia, Far North Queensland, Townsville, Orana, Goulburn Valley, Great South Coast, Pilbara, East Kimberley, the Goldfields, the South West and Adelaide City.",
        legal: "Home Affairs Designated Area Migration Agreements page; Labour Agreement program information guide, Part 5",
      },
      {
        title: "Project agreements",
        detail: "Two-tier agreements for the construction phase of large resources or infrastructure projects: an overarching deed with the project company, then individual labour agreements with endorsed direct employers. They give access to temporary skilled workers on the subclass 482 to meet peak workforce demand.",
        legal: "Home Affairs Labour Agreement program information guide, Part 6",
      },
      {
        title: "Global Talent Employer Sponsored (GTES) agreements",
        detail: "A streamlined labour agreement for highly skilled niche roles that cannot be filled through the Skills in Demand Core Skills or Specialist Skills streams, with a start-up stream and an established business stream for accredited sponsors. Age and occupation concessions and a permanent residence pathway after three years can be requested. Check the current Global Talent Scheme page for position limits and salary thresholds before relying on them.",
        legal: "Home Affairs Global Talent Scheme page; Labour Agreement program information guide, Part 2",
      },
      {
        title: "Visa criteria under a labour agreement",
        detail: "Subclass 482 Labour agreement stream: 12 months of full-time equivalent experience in the last five years unless the agreement says otherwise, the standard English levels unless the agreement provides a concession, and a skills assessment only if required. Subclass 494 Labour agreement stream: three years of experience, under 45 unless the agreement states otherwise, a skills assessment if specified, and work only in a designated regional area. Subclass 186 Labour agreement stream: under 45 unless the agreement provides otherwise, with English, skills and experience as set by the agreement; onshore applicants must hold a 457 or 482 visa granted under a labour agreement.",
        legal: "Migration Regulations 1994, Sch 2 Parts 482, 494 and 186 (Labour agreement streams)",
      },
      {
        title: "Nomination requirements and the Skilling Australians Fund levy",
        detail: "Employers nominate only in occupations specified in their agreement and within the yearly nomination ceiling. Labour market testing applies where the agreement specifies; for Category 2 locations it follows the standard two-advertisement rule and may be up to 12 months old. The Skilling Australians Fund levy is payable on every nomination, except for ministers of religion and religious assistants nominated under the 482 or 186 Labour agreement streams. The levy can be refunded if the nomination is withdrawn before the agreement is entered into or because the yearly ceiling was reached.",
        legal: "Migration Regulations 1994, Division 2.17; Home Affairs cost of sponsoring page",
      },
      {
        title: "Sponsorship obligations and sanctions",
        detail: "Parties to a labour agreement have the same sponsorship obligations as standard business sponsors unless the agreement states otherwise, including paying at least the nominated earnings and equivalent conditions, keeping records, notifying events and not recovering costs. Breaches can lead to the agreement being suspended or terminated as well as the standard administrative and civil sanctions.",
        legal: "Migration Act 1958, ss 140H and 140K; Migration Regulations 1994, Division 2.19",
      },
    ],
    documents: [
      {
        group: "Labour agreement request (employer)",
        items: [
          "Business registration (ABN, ASIC extract, trust deed showing the trustee), evidence of at least 12 months of lawful operation and financial statements with an accountant's statement of viability",
          "Business case: the occupations sought with six-digit ANZSCO codes and duty descriptions, evidence of the shortage and of recruitment efforts in Australia, the proposed number of nominations per year and any concessions requested with reasons",
          "Evidence of stakeholder consultation (unions, industry bodies, government) and, for a DAMA, the Designated Area Representative's endorsement; for a project agreement, the project company's endorsement",
          "Proposed strategies for training Australians and for worker welfare where concessions are sought",
        ],
      },
    ],
    steps: [
      {
        title: "Check whether a standard visa or an existing template fits",
        description: "Read the Home Affairs Labour Agreement Guidelines and the templates. If the occupation is on the Core Skills Occupation List and the business can meet the standard criteria, a labour agreement is not available. Check whether an industry agreement or a DAMA already covers the industry or region.",
        output: "You hold: the right agreement type for the business",
      },
      {
        title: "Obtain endorsement where required",
        description: "DAMA requests need endorsement from the Designated Area Representative for the region; project agreement requests need the project company's endorsement. Industry bodies seeking a new industry agreement write to the Department's labour agreement section first.",
        output: "You hold: an endorsement letter",
      },
      {
        title: "Consult stakeholders and prepare the business case",
        description: "Consult relevant unions and industry stakeholders, gather financial and recruitment evidence, and set out each concession requested with strong reasons.",
        output: "You hold: a complete evidence-based request",
      },
      {
        title: "Lodge the labour agreement request in ImmiAccount",
        description: "There is no charge. The Department may seek further information (usually with 7 or 14 days to respond), may consult Jobs and Skills Australia, and incomplete requests are returned without assessment. Approval may need the Minister's agreement where minimum requirements are not met.",
        output: "You hold: an executed labour agreement, generally for 5 years, with yearly nomination ceilings",
      },
      {
        title: "Nominate workers and lodge visa applications",
        description: "Lodge nominations in the 482, 186 or 494 Labour agreement stream for occupations in the agreement, paying the nomination charge and the Skilling Australians Fund levy and providing labour market testing where the agreement requires it. Workers then apply for the visa, meeting the criteria as modified by the agreement.",
        output: "You hold: approved nominations and sponsored workers",
      },
      {
        title: "Comply, report and renew",
        description: "Meet the sponsorship obligations and any reporting required by the agreement, keep within the nomination ceiling, and request a new agreement before the five years end if the need continues.",
        output: "You hold: an agreement in good standing",
      },
    ],
    costs: [
      { item: "Request for a labour agreement", amount: "Nil" },
      { item: "Nomination charge", amount: "A$330 (482), A$540 (186, nil in regional Australia), nil (494)", note: "1 July 2026 figures from the Home Affairs cost of sponsoring and visa pages" },
      { item: "Skilling Australians Fund levy", amount: "A$1,200 or A$1,800 per year (482); A$3,000 or A$5,000 one-off (186 and 494)", note: "By turnover under or over A$10 million; not payable for ministers of religion and religious assistants under a labour agreement" },
      { item: "Visa application charges", amount: "A$4,015 (482), A$6,140 (186 and 494)", note: "Primary applicant, 1 July 2026; family members pay their own charges" },
      { item: "ART review of a nomination refusal", amount: "A$3,727", note: "Fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "The agreement sets yearly nomination ceilings, the occupations, any concessions and reporting obligations; nominations outside the agreement are refused.",
      "Visa holders sponsored under an agreement may work only for the party to the agreement (not an associated entity) under conditions 8607 and 8608.",
      "Concessions in a labour agreement do not override registration or licensing requirements, and English concessions do not apply to licensing bodies.",
      "The Department can suspend or terminate the agreement for breaches, and the standard sponsor sanctions apply.",
    ],
    pathways: [
      { title: "Skills in Demand visa (subclass 482) Labour agreement stream", description: "The temporary visa granted under most agreements, for up to four years.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Employer Nomination Scheme visa (subclass 186) Labour agreement stream", description: "Permanent residence where the agreement includes it, with any negotiated age concession.", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { title: "Skilled Employer Sponsored Regional visa (subclass 494) Labour agreement stream", description: "The provisional regional visa for businesses in designated regional areas, leading to the subclass 191.", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { title: "Employer sponsorship and nomination guide", description: "Standard Business Sponsorship, nomination rules, thresholds and obligations that still apply under an agreement.", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    ],
    risks: [
      "Requesting an agreement for an occupation that is available under the standard program without seeking a concession, which the Department will not consider.",
      "Lodging a DAMA labour agreement request without first obtaining endorsement from the Designated Area Representative, or for an industry already covered by an industry agreement.",
      "Business case that relies on associated entities' records, lacks the accountant's viability statement or shows less than 12 months of operation.",
      "Concessions requested without strong reasons, or salary concessions sought outside Category 3 regional areas, which are not available.",
      "Nominations lodged above the yearly ceiling or in occupations not listed in the agreement; the levy is refundable in that case but the nomination fails.",
      "Treating the PALM scheme as a labour agreement: PALM is a separate program under the subclass 403 visa run by the Department of Employment and Workplace Relations.",
    ],
    faqs: [
      { question: "What is a labour agreement?", answer: "A formal contract between an employer and the Australian Government that lets the employer sponsor overseas workers for 482, 186 or 494 visas outside the standard rules, for example in occupations not on a list or with concessions to English, salary, experience or age. Agreements are generally in effect for five years and are only available where standard visas cannot meet the need." },
      { question: "What is a DAMA?", answer: "A Designated Area Migration Agreement is a five-year head agreement between the Australian Government and a regional representative such as a state government or council. Employers in the region, once endorsed by that representative, enter individual labour agreements under it to access the region's extra occupations and concessions. Thirteen DAMAs are currently in place." },
      { question: "How much does a labour agreement cost?", answer: "Nothing to request. Costs arise when nominating and sponsoring: the nomination charge, the Skilling Australians Fund levy (A$1,200 or A$1,800 per year for a 482, A$3,000 or A$5,000 one-off for a 186 or 494) and the visa application charges paid by the worker." },
      { question: "What concessions can a labour agreement give?", answer: "Depending on the agreement: lower English scores, a lower salary (only in Category 3 regional areas and never below what an equivalent Australian worker receives), less experience, a different skills requirement, an older age limit for permanent residence, and different labour market testing. Each concession must be justified." },
      { question: "Does the PALM scheme need a labour agreement?", answer: "No. The Pacific Australia Labour Mobility scheme is run by the Department of Employment and Workplace Relations under the subclass 403 visa. Employers become PALM approved employers and temporary activities sponsors rather than parties to a labour agreement." },
      { question: "Can a labour agreement lead to permanent residence?", answer: "Yes, where the agreement includes the subclass 186 or 494 Labour agreement stream. Most company-specific and DAMA agreements provide a permanent pathway, often with an age concession, after a period on the 482 visa set by the agreement." },
    ],
    legislation: [
      { label: "Migration Act 1958, s 140GC (work agreements) and Part 2 Division 3A (sponsorship)", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Migration Regulations 1994, reg 2.76 (work agreements), Division 2.17 (nominations) and Division 2.19 (sponsorship obligations)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration Regulations 1994, Sch 2 Parts 482, 186 and 494 (Labour agreement streams)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration (LIN 18/036: Period, manner and evidence of labour market testing) Instrument 2018", url: "https://www.legislation.gov.au/Details/F2022C00723" },
    ],
    sources: [
      { label: "Home Affairs: Labour agreements", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/labour-agreements" },
      { label: "Home Affairs: Designated area migration agreements", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/labour-agreements/types-of-labour-agreements/designated-area-migration-agreements-(dama)" },
      { label: "Home Affairs: Industry labour agreements", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/labour-agreements/types-of-labour-agreements/industry-labour-agreements" },
      { label: "Home Affairs: Labour agreement program information guide (PDF)", url: "https://immi.homeaffairs.gov.au/employer-subsite/files/requesting-labour-agreement.pdf" },
      { label: "Home Affairs: Skills in Demand visa Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/labour-agreement-stream" },
      { label: "Home Affairs: Employer Nomination Scheme Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/labour-agreement-stream" },
      { label: "Home Affairs: Skilled Employer Sponsored Regional Labour agreement stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/labour-agreement-stream" },
      { label: "Home Affairs: Labour market testing", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/labour-market-testing" },
      { label: "Home Affairs: Cost of sponsoring", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring" },
      { label: "Home Affairs: Learn about sponsoring", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring" },
      { label: "Home Affairs: Global Talent Scheme", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/visas-for-innovation/global-talent-scheme" },
      { label: "Administrative Review Tribunal: fees", url: "https://www.art.gov.au/help-and-resources/fees" },
    ],
    related: [
      { label: "Employer sponsorship and nomination guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Skilled Employer Sponsored Regional visa (subclass 494)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { label: "Temporary Work (International Relations) visa (subclass 403)", href: "/visas/employer-sponsored/temporary-work-international-relations-visa-403" },
      { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: ["labour agreement australia", "DAMA visa", "designated area migration agreement", "labour agreement 482", "industry labour agreement", "company specific labour agreement", "DAMA concessions", "labour agreement requirements", "project agreement migration", "aged care labour agreement"],
  },
  // ───────────────────────────────────────────────────────────────────────
  // 9. Employer sponsorship and nomination (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "employer-sponsorship-and-nomination",
    category: "employer-sponsored",
    kind: "guide",
    name: "Employer sponsorship and nomination",
    title: "Employer sponsorship and nomination: becoming a sponsor, nominating a position and your obligations",
    seoTitle: "Sponsoring a worker: SBS, nomination, SAF levy, obligations",
    seoDescription:
      "Sponsoring a skilled worker in 2026: Standard Business Sponsorship (A$420, 5 years), nomination rules, labour market testing, SAF levy and obligations.",
    intro:
      "To employ an overseas worker on a Skills in Demand (subclass 482) or Skilled Employer Sponsored Regional (subclass 494) visa, a business must first be approved as a Standard Business Sponsor and then have a nomination approved for a genuine, full-time position paid at the market rate and above the income threshold; for the permanent subclass 186 only a nomination is needed. This guide explains sponsorship approval, accreditation, nomination requirements including labour market testing and salary thresholds, the Skilling Australians Fund levy, and the obligations and sanctions that apply under the Migration Act 1958.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Employer sponsor required"],
    keyFacts: [
      { label: "Government fee", value: "A$420 sponsorship; A$330 (482) or A$540 (186) nomination", note: "1 July 2026 charges; no nomination charge for the 494 Employer Sponsored stream or for 186 positions in regional Australia" },
      { label: "Sponsorship validity", value: "5 years", note: "Renew about two months before expiry; accreditation lasts as long as the sponsorship" },
      { label: "Skilling Australians Fund levy", value: "A$1,200 or A$1,800 per year (482); A$3,000 or A$5,000 one-off (186 and 494)", note: "Lower figure for annual turnover under A$10 million; paid at nomination and not recoverable from the worker" },
      { label: "Income thresholds from 1 July 2026", value: "CSIT A$79,423; SSIT A$146,576; TSMIT A$79,423", note: "Core Skills, Specialist Skills and subclass 494 nominations respectively; indexed every 1 July" },
      { label: "Labour market testing", value: "2 advertisements, 4 weeks, within 4 months", note: "Unless an international trade obligation applies (482 only)" },
      { label: "Obligations and sanctions", value: "Migration Act 1958, ss 140H to 140K", note: "Infringement notices up to A$79,200 per breach for bodies corporate; civil penalties up to A$396,000" },
    ],
    whoFor: [
      "You run an Australian business that wants to sponsor a worker for a Skills in Demand (subclass 482) or regional (subclass 494) visa for the first time.",
      "You are an existing sponsor renewing your approval, seeking accredited status or nominating a worker who is changing employers.",
      "You want to nominate an employee for permanent residence through the Employer Nomination Scheme (subclass 186).",
      "You are an overseas business setting up in Australia and need to transfer staff.",
      "You are a visa holder who wants to understand what your employer must do and what it may not charge you for.",
    ],
    eligibility: [
      {
        title: "Becoming a Standard Business Sponsor",
        detail: "The business must be legally established and currently operating (in or outside Australia), with no adverse information about it or anyone associated with it unless it is reasonable to disregard. Australian businesses must attest to a strong record of, or commitment to, employing local labour and declare they will not engage in discriminatory recruitment. Evidence includes the ABN or ARBN registration, ASIC company or business names extracts, and financial statements, tax returns, business activity statements or bank statements (a business plan, contracts and lease for a new business). The charge is A$420 and approval lasts five years from the approval date; renewal should be lodged about two months before expiry, because a lapsed sponsorship means a completely new application and refusal of any pending nominations. A change of legal entity (for example sole trader to company) requires a new sponsorship and new nominations for every sponsored worker.",
        legal: "Migration Act 1958, s 140E; Migration Regulations 1994, reg 2.59",
      },
      {
        title: "Accredited sponsor status",
        detail: "A Standard Business Sponsor can request accreditation at no extra charge when applying or renewing, by meeting one of six categories: government agencies; Australian Trusted Traders; low-volume sponsors with at least 85 per cent Australian workers, turnover of at least A$4 million for two years, one year as a sponsor, at least one approved nomination in two years and more than 97 per cent of nominations approved; high-volume sponsors with at least 75 per cent Australian workers, 10 approved nominations in two years, two years as a sponsor and the same turnover and approval rate; businesses with a major investment of at least A$50 million; and STEM start-ups funded by an Early Stage Venture Capital Limited Partnership. All categories require written contracts meeting the National Employment Standards, market-rate pay and no adverse monitoring outcomes. Accredited sponsors receive priority processing, streamlined nominations and may give a character reference in place of overseas police certificates for their nominees.",
        legal: "Migration Regulations 1994, reg 2.59 and Division 2.13",
      },
      {
        title: "Nomination: eligible occupation",
        detail: "Subclass 482 Core Skills stream and subclass 186 Direct Entry stream: an occupation on the Core Skills Occupation List, subject to caveats (for example chefs and cooks cannot be nominated for limited-service restaurants or mass-production factories). Subclass 482 Specialist Skills stream: any ANZSCO occupation in Major Groups 1, 2, 4, 5 or 6 paid at least the SSIT. Subclass 494: the occupation list that applies to that visa. Subclass 186 Temporary Residence Transition stream: the occupation on the worker's most recent 457 or 482 nomination, with no list. Labour agreement streams: the occupations in the agreement.",
        legal: "Migration Regulations 1994, reg 2.72 and reg 5.19",
      },
      {
        title: "Nomination: genuine, full-time position",
        detail: "The position must exist and be what the nomination says: its duties must be consistent with the ANZSCO skill level and tasks, it must fit the nature and scale of the business, and it must not have been created to help the nominee stay in or migrate to Australia. It must be full-time (38 hours a week, or 32 to 45 hours under an award consistent with the National Employment Standards); for the 494 it must be likely to exist for five years and for the 186 it must be ongoing for at least two years. Evidence includes a duty statement, organisation chart, business description, evidence the position existed or of the expansion creating it, and the recruitment process. Under standard sponsorship the worker must be engaged under a written contract to work only for the sponsor or an associated entity and cannot be on-hired to unrelated businesses (unless the occupation is exempt).",
        legal: "Migration Regulations 1994, reg 2.72 and reg 5.19",
      },
      {
        title: "Nomination: labour market testing",
        detail: "For 482 and 494 nominations the position must have been advertised in Australia, in English, at least twice for at least four weeks within the four months before the nomination (after any redundancy of an Australian in the occupation in that period). Each advertisement must state the title or description, the skills or experience required, the sponsor's or recruitment agency's name and, if annual earnings are under A$96,400, the salary or salary range. Acceptable media are prominent national recruitment websites (LinkedIn's recruitment platform counts; general classifieds and social media posts do not), industry sites, national print media, national radio, or the sponsor's own website for accredited sponsors. Since 11 December 2023 Workforce Australia advertising is not required. Exemptions apply only where an international trade obligation applies, such as nominees who are citizens of certain treaty countries, intra-corporate transfers from associated entities in listed countries, executives from WTO member countries and WTO nationals employed in the position for two years; these do not apply to the 494 or labour agreement nominations. Alternative submissions apply for nominees with internationally recognised achievement, earnings of A$250,000 or more, certain medical practitioners and paramedics, and re-nominations caused by a salary change or restructure.",
        legal: "Migration Act 1958, s 140GBA; Migration (LIN 18/036) Instrument 2018; Migration (LIN 21/075) Determination 2021",
      },
      {
        title: "Nomination: annual market salary rate and income thresholds",
        detail: "If the worker will earn under A$250,000, the sponsor must determine the annual market salary rate (what an Australian would earn for equivalent full-time work at the same workplace and location) using the method in the instrument: by reference to an equivalent Australian worker's pay or the applicable award or enterprise agreement, or, if there is no equivalent worker, by relevant information such as Jobs and Skills Australia profiles, job advertisements with salaries, reputable remuneration surveys and union or employer association advice. Both the rate and the worker's guaranteed earnings (excluding non-monetary benefits) must be at least the threshold for nominations lodged between 1 July 2026 and 30 June 2027: Core Skills Income Threshold A$79,423 (482 Core Skills and 186), Specialist Skills Income Threshold A$146,576 (482 Specialist Skills) and Temporary Skilled Migration Income Threshold A$79,423 (494). Employment conditions must be no less favourable than an Australian's, and paying below market rate leads to refusal.",
        legal: "Migration Regulations 1994, reg 2.72; Migration (IMMI 18/033: Specification of Annual Earnings and Methodology of Annual Market Salary Rate) Instrument 2018",
      },
      {
        title: "Nomination charges and the Skilling Australians Fund levy",
        detail: "Nomination charges are A$330 for the 482, A$540 for the 186 (nil where the position is in regional Australia as defined on the Home Affairs 186 regional postcodes page) and nil for the 494 Employer Sponsored stream. The Skilling Australians Fund levy is calculated by ImmiAccount and paid in full at lodgement: for a 482 nomination A$1,200 per year (or part year) of the proposed stay if annual turnover is under A$10 million, A$1,800 per year otherwise (A$7,200 for a four-year nomination by a larger business); for 186 and 494 nominations a one-off A$3,000 or A$5,000, reduced to 80, 60, 40 or 20 per cent when re-nominating a worker who already holds a 494. The levy is tax deductible, applies to labour agreement sponsors (except for ministers of religion and religious assistants), and is refunded only in limited cases, such as the worker not commencing, the visa being refused on health or character grounds, or a 482 or 494 holder leaving within the first 12 months of a longer nomination (unused full years only).",
        legal: "Migration Act 1958, nomination training contribution charge provisions inserted by the Migration Amendment (Skilling Australians Fund) Act 2018",
      },
      {
        title: "Sponsorship obligations",
        detail: "A Standard Business Sponsor must: ensure the worker works only in the nominated occupation (a new nomination, and for 482 and 494 holders a new visa, is needed to change occupation); pay at least the earnings in the approved nomination and conditions no less favourable than an equivalent Australian's (where earnings are under A$250,000); not engage in discriminatory recruitment; keep records for two years after the sponsorship ends and the last sponsored worker leaves; provide records and information when asked; notify the Department in writing within 28 days of events including the worker ceasing or not commencing employment, changes of duties, insolvency, a new director or partner, and changes to the business name, structure, address or contacts; pay all sponsorship, nomination, recruitment and migration agent costs and never recover them from the worker; pay reasonable return travel costs within 30 days of a written request; pay up to A$10,000 towards locating and removing a worker who becomes unlawful (for five years after they leave); and cooperate with inspectors appointed under the Act (for five years). Temporary activities sponsors have a similar set of obligations.",
        legal: "Migration Act 1958, s 140H; Migration Regulations 1994, Division 2.19 (regs 2.78 to 2.87C), including regs 2.79 (equivalent terms and conditions), 2.82 (records), 2.84 (notification of events) and 2.87 (not recovering costs)",
      },
      {
        title: "Monitoring and sanctions",
        detail: "The Department monitors sponsors during and for five years after the sponsorship, including site visits with or without notice and information sharing with the Fair Work Ombudsman and the Australian Taxation Office. For a breach it can bar the sponsor from further sponsorship for a period, cancel existing approvals, refuse future applications, issue a compliance notice or accept an enforceable undertaking; issue an infringement notice of up to A$15,840 (individual) or A$79,200 (body corporate) per breach; or seek a civil penalty of up to A$76,200 (individual) or A$396,000 (corporation) per failure. Employers who seriously or repeatedly break the law can be prohibited from employing further migrant workers, and sanctioned sponsors are published. Sanctions also follow from giving false information, no longer meeting sponsor criteria, or a worker breaching licensing laws. Asking for, offering or receiving a benefit for sponsorship is a criminal offence for both parties.",
        legal: "Migration Act 1958, ss 140J, 140K, 140L, 140M, 140Q and 245AR (paying for visa sponsorship)",
      },
      {
        title: "Review rights",
        detail: "A refusal of a sponsorship or nomination application is a reviewable migration decision; the sponsor applies to the Administrative Review Tribunal within the period in the decision letter and pays the A$3,727 fee (reduced by 50 per cent for financial hardship). A nomination refusal and the linked visa refusal are usually reviewed together.",
        legal: "Migration Act 1958, ss 338 and 347; Administrative Review Tribunal Act 2024",
      },
    ],
    documents: [
      {
        group: "Sponsorship application",
        items: [
          "ABN or ARBN registration certificate, ASIC company extract or business names extract, and trust, franchise or joint venture documents where relevant",
          "Profit and loss statements and annual report (established business), or tax returns, business activity statements and bank statements (small or recent business), or a business plan with contracts and lease (new business)",
          "Attestation on employing local labour and the declaration on non-discriminatory recruitment; accreditation evidence if requested",
        ],
      },
      {
        group: "Nomination application",
        items: [
          "Nominee's identity and visa details, work location postcode and family members to be covered",
          "Signed employment contract (unless the occupation is exempt), duty statement, organisation chart and evidence the position is genuine",
          "Evidence of the annual market salary rate (industrial instrument, equivalent worker's payslips or market data) and that earnings meet the CSIT, SSIT or TSMIT, or evidence of earnings of A$250,000 or more",
          "Copies of all labour market testing advertisements with dates and media, redundancy information if any, or evidence of an international trade obligation exemption",
          "Regional certifying body assessment (494) and evidence that caveats do not apply (482 Core Skills)",
        ],
      },
    ],
    steps: [
      {
        title: "Apply for Standard Business Sponsorship",
        description: "Lodge the Standard Business Sponsorship (482, 494) form in ImmiAccount with business evidence, pay A$420 and request accreditation if the business meets a category. Approval lasts five years.",
        output: "You hold: an approved sponsorship (or a lodged one, which allows nominations to be lodged)",
      },
      {
        title: "Test the labour market",
        description: "Advertise the position at least twice for four weeks within the four months before lodging the nomination, with the required content, unless an international trade obligation exemption or an alternative submission applies. Keep copies of every advertisement.",
        output: "You hold: labour market testing evidence",
      },
      {
        title: "Determine the salary",
        description: "Work out the annual market salary rate using the instrument method, confirm the guaranteed earnings meet the CSIT, SSIT or TSMIT, and document how the rate was set, including explanations for any gap between the rate and the offered salary.",
        output: "You hold: an AMSR determination and a compliant employment contract",
      },
      {
        title: "Lodge the nomination and pay the levy",
        description: "Lodge the nomination in ImmiAccount with the position, salary, labour market testing and genuineness evidence, pay the nomination charge and the Skilling Australians Fund levy calculated by the form, and give the worker the Transaction Reference Number. A 482 or 494 nomination stays valid for 12 months; a 186 nominee must apply within six months of approval.",
        output: "You hold: a nomination approval number",
      },
      {
        title: "Worker lodges the visa application",
        description: "The worker applies with the nomination TRN, paying the visa application charge. The Department must approve the nomination before granting the visa and may ask the sponsor for more information.",
        output: "You hold: a sponsored worker with a visa grant letter and a start date within 90 days (482 and 494) or six months (186)",
      },
      {
        title: "Meet your obligations and keep records",
        description: "Pay the nominated earnings, keep records, notify events within 28 days through the Notification of sponsorship changes form, never recover costs from the worker, pay return travel costs on request, and cooperate with inspectors. Renew the sponsorship about two months before the five years end.",
        output: "You hold: a compliant sponsorship that can be renewed and that supports future permanent nominations",
      },
    ],
    costs: [
      { item: "Standard Business Sponsorship application or renewal", amount: "A$420", note: "Approval lasts 5 years; accreditation request is free" },
      { item: "Nomination charge: subclass 482", amount: "A$330" },
      { item: "Nomination charge: subclass 186", amount: "A$540", note: "Nil where the position is in regional Australia (Home Affairs 186 regional postcodes page)" },
      { item: "Nomination charge: subclass 494 Employer Sponsored stream", amount: "Nil" },
      { item: "Skilling Australians Fund levy: subclass 482", amount: "A$1,200 or A$1,800 per year", note: "Per year or part year of the nomination period; turnover under or over A$10 million" },
      { item: "Skilling Australians Fund levy: subclasses 186 and 494", amount: "A$3,000 or A$5,000", note: "One-off; reduced for a nominee who already holds a 494 visa" },
      { item: "Temporary activities sponsorship (407, 408, 403 PALM)", amount: "A$420", note: "Valid 5 years; 407 nomination A$170" },
      { item: "ART review of a sponsorship or nomination refusal", amount: "A$3,727", note: "Fee from 1 July 2026; 50 per cent reduction for financial hardship" },
      { item: "Advertising, recruitment agents and migration agent fees", amount: "Typical third-party costs", note: "Must be paid by the sponsor and cannot be recovered from the worker" },
    ],
    afterGrant: [
      "Sponsorship of a worker lasts as long as they hold the visa and work for you; the obligations to keep and provide records and notify events continue for two years after the sponsorship ends and the last sponsored worker leaves, and cooperation with inspectors for five years.",
      "If a sponsored 482 or 494 holder stops working for you, tell the Department within 28 days; the worker then has up to 180 days (365 in total) to find a new sponsor or leave.",
      "A worker can move to a different occupation only after a new nomination is approved and, for 482 and 494 holders, a new visa is granted.",
      "After two years of sponsored employment you can nominate the worker for the subclass 186 Temporary Residence Transition stream, as long as you are their most recent sponsor.",
      "Accredited status can be revoked if the business stops meeting the category or gave a character reference for someone with an overseas conviction.",
    ],
    pathways: [
      { title: "Skills in Demand visa (subclass 482)", description: "The temporary visa for which Standard Business Sponsorship and a nomination are required.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Employer Nomination Scheme visa (subclass 186)", description: "Permanent nomination after two years of sponsorship, or directly for experienced workers with a skills assessment.", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { title: "Skilled Employer Sponsored Regional visa (subclass 494)", description: "Regional nomination with a regional certifying body assessment and no nomination charge.", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { title: "Labour agreements and DAMA", description: "When the standard program does not fit the occupation or the region.", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
      { title: "ART review of a visa refusal", description: "Review of a nomination or sponsorship refusal at the Administrative Review Tribunal.", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
    ],
    risks: [
      "Nomination refused because the position is not genuine: duties copied from ANZSCO, a role that does not fit the business, or a position created for the nominee.",
      "Annual market salary rate not determined using the instrument method, generic salary data, or earnings below the CSIT, SSIT or TSMIT.",
      "Labour market testing advertisements that ran less than four weeks, omitted the salary where earnings are under A$96,400, were only on social media, or are older than four months.",
      "Sponsorship lapsing before renewal, or a business restructure to a new ABN without new sponsorship and nominations, putting workers in breach of their conditions.",
      "Failing to notify the Department within 28 days when a worker leaves or changes duties, or recovering sponsorship, migration agent or recruitment costs from the worker, leading to bars, cancellation and civil penalties.",
      "Accepting payment or deductions for sponsorship, which is a criminal offence for the employer and a ground of refusal or cancellation for the worker.",
    ],
    faqs: [
      { question: "How long does Standard Business Sponsorship last and what does it cost?", answer: "Five years from the approval date, for a charge of A$420. Renewal should be lodged about two months before expiry; if the sponsorship lapses first, a completely new application is needed and pending nominations are refused. Accreditation can be requested at the same time at no extra charge." },
      { question: "What is the Skilling Australians Fund levy in 2026?", answer: "For a subclass 482 nomination, A$1,200 per year of the proposed stay if annual turnover is under A$10 million, otherwise A$1,800 per year, so a four-year nomination by a larger business costs A$7,200. For a subclass 186 or 494 nomination it is a one-off A$3,000 or A$5,000. It is paid when the nomination is lodged, is tax deductible and cannot be passed on to the worker." },
      { question: "What are the income thresholds?", answer: "For nominations lodged between 1 July 2026 and 30 June 2027: Core Skills Income Threshold A$79,423 (482 Core Skills and 186), Specialist Skills Income Threshold A$146,576 (482 Specialist Skills) and Temporary Skilled Migration Income Threshold A$79,423 (494). Both the annual market salary rate and the worker's guaranteed earnings, excluding non-monetary benefits, must meet the threshold. No market rate assessment is needed for earnings of A$250,000 or more." },
      { question: "What labour market testing is required?", answer: "At least two advertisements in Australia for at least four weeks within the four months before the nomination, on a national recruitment website, industry site, national print media, national radio or (for accredited sponsors) the business website, stating the position, skills required, the employer or agency name and the salary if under A$96,400. Exemptions exist only under international trade obligations and do not apply to the 494." },
      { question: "Can I charge the worker for the costs of sponsorship?", answer: "No. The sponsor must pay the sponsorship and nomination charges, the levy, migration agent fees and all recruitment costs, and must not transfer or recover them from the worker or their family. Doing so breaches the sponsorship obligations and, where a benefit is sought in return for sponsorship, is a criminal offence." },
      { question: "What happens if I breach a sponsorship obligation?", answer: "The Department can bar you from sponsoring, cancel your approvals, refuse future applications, issue a compliance notice or infringement notice (up to A$79,200 per breach for a body corporate), seek civil penalties (up to A$396,000 per failure for a corporation), accept an enforceable undertaking, publish your name and, for serious or repeated breaches, prohibit you from employing migrant workers." },
      { question: "Can I nominate a worker who is already on a 482 visa with another employer?", answer: "Yes. Lodge a new nomination (with labour market testing and the levy for the new period) and the worker can start once it is approved; they do not need a new visa if the occupation is the same. Under condition 8607 they have up to 180 days without work in a single period while this happens." },
    ],
    legislation: [
      { label: "Migration Act 1958, Part 2 Division 3A: ss 140E (approval as sponsor), 140GB (nomination), 140GBA (labour market testing), 140H (sponsorship obligations), 140J to 140M (sanctions, bars and cancellation), 140Q (civil penalties) and 245AR (paying for visa sponsorship)", url: "https://www.legislation.gov.au/C1958A00062/latest/text" },
      { label: "Migration Regulations 1994, Division 2.13 (reg 2.59, standard business sponsor criteria), Division 2.17 (reg 2.72, nominations), Division 2.19 (sponsorship obligations), reg 5.19 (186 nominations)", url: "https://www.legislation.gov.au/F1996B03551/latest/text" },
      { label: "Migration (IMMI 18/033: Specification of Annual Earnings and Methodology of Annual Market Salary Rate) Instrument 2018", url: "https://www.legislation.gov.au/F2018L00284/latest/text" },
      { label: "Migration (LIN 18/036: Period, manner and evidence of labour market testing) Instrument 2018", url: "https://www.legislation.gov.au/Details/F2022C00723" },
      { label: "Migration (International trade obligations relating to labour market testing) Determination (LIN 21/075) 2021", url: "https://www.legislation.gov.au/Details/F2023C00507" },
      { label: "Migration Amendment (Skilling Australians Fund) Act 2018 (nomination training contribution charge)", url: "https://www.legislation.gov.au/C2018A00038/latest/text" },
      { label: "Administrative Review Tribunal Act 2024", url: "https://www.legislation.gov.au/C2024A00040/latest/text" },
    ],
    sources: [
      { label: "Home Affairs: Standard business sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/standard-business-sponsor" },
      { label: "Home Affairs: Accredited sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/becoming-a-sponsor/accredited-sponsor" },
      { label: "Home Affairs: Nominating a position", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position" },
      { label: "Home Affairs: Labour market testing", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/labour-market-testing" },
      { label: "Home Affairs: Salary requirements to nominate a worker", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements" },
      { label: "Home Affairs: Cost of sponsoring (charges and the Skilling Australians Fund levy)", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring/cost-of-sponsoring" },
      { label: "Home Affairs: Sponsorship obligations for standard business sponsors", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/existing-sponsors/standard-business-accredited-obligations" },
      { label: "Home Affairs: Sponsorship obligations for temporary activities sponsor", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/existing-sponsors/tas-sponsorship-obligations" },
      { label: "Home Affairs: Learn about sponsoring", url: "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/learn-about-sponsoring" },
      { label: "Home Affairs: Skills in Demand visa Core Skills stream (sponsor and nomination requirements)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream" },
      { label: "Home Affairs: Skilled Employer Sponsored Regional visa Employer Sponsored stream (sponsor requirements)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494/employer-sponsored-stream" },
      { label: "Home Affairs: Employer Nomination Scheme Temporary Residence Transition stream (nominator requirements)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/temporary-residence-transition-stream" },
      { label: "Administrative Review Tribunal: fees", url: "https://www.art.gov.au/help-and-resources/fees" },
    ],
    related: [
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Employer Nomination Scheme visa (subclass 186)", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { label: "Skilled Employer Sponsored Regional visa (subclass 494)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { label: "Labour agreements and DAMA", href: "/visas/employer-sponsored/labour-agreements-and-dama" },
      { label: "Employer sponsored visa services", href: "/services/employer-sponsored-visas" },
      { label: "Fee calculator", href: "/tools/fee-calculator" },
    ],
    keywords: ["standard business sponsor", "how to sponsor an employee australia", "employer sponsorship requirements", "nomination 482", "skilling australians fund levy 2026", "labour market testing requirements", "annual market salary rate", "sponsorship obligations", "accredited sponsor", "core skills income threshold 2026"],
  },
];
