// ─────────────────────────────────────────────────────────────────────────
// VISA GUIDES — the in-depth content shown on each /services/[slug] page:
// key facts, eligibility, documents, the application process, what comes
// after, and service-specific FAQs.
//
// Keep everything general (it is not advice for any one person) and keep
// the figures honest: every fee and rule below is taken from the Department
// of Home Affairs or the ART website on `factsAsAt`. When fees change
// (usually 1 July), update the figures and the date together.
// ─────────────────────────────────────────────────────────────────────────

export interface KeyFact {
  label: string;
  value: string;
  // Small print under the value, e.g. "primary applicant, 1 July 2026 fee".
  note?: string;
}

export interface DocumentGroup {
  group: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  // What you hold at the end of the step, so progress is visible.
  output: string;
}

export interface Pathway {
  title: string;
  description: string;
  href?: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface VisaGuide {
  // Visa subclasses the guide covers, in display order.
  covers: string;
  // Date the figures below were checked against the official source.
  factsAsAt: string;
  sourceLabel: string;
  sourceUrl: string;
  // A dated rule change worth flagging at the top of the page.
  alert?: { title: string; body: string; href?: string; linkLabel?: string };
  keyFacts: KeyFact[];
  eligibility: string[];
  documents: DocumentGroup[];
  steps: ProcessStep[];
  pathways: Pathway[];
  faqs: GuideFaq[];
}

const PROCESSING_TIMES_URL =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times";

export const processingTimesUrl = PROCESSING_TIMES_URL;

export const visaGuides: Record<string, VisaGuide> = {
  // ── Student visas ───────────────────────────────────────────────────
  "student-visas": {
    covers: "Subclass 500 (Student), subclass 485 (Temporary Graduate) and subclass 590 (Student Guardian)",
    factsAsAt: "12 October 2026",
    sourceLabel: "Department of Home Affairs, Student visa (subclass 500)",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    alert: {
      title: "New Student visa rules from 2 October 2026",
      body: "From 2 October 2026 most Student visa applications must be lodged, and the visa granted, outside Australia. Visitor, Temporary Graduate (485), Working Holiday, 482 and most other temporary visa holders can no longer apply in Australia, and a current Student visa holder can apply in Australia only under one of six exemptions. Partners and children can be included only under an exemption and can no longer be added later as subsequent entrants. Applications lodged before 2 October 2026 are assessed under the rules in force when they were lodged. If you are in Australia and planning a further Student visa, check which rules apply to you before you enrol, pay fees or travel.",
      href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/changes-to-student-visa-application-rules-500-590",
      linkLabel: "Read the Home Affairs summary",
    },
    keyFacts: [
      { label: "Government fee", value: "A$2,500", note: "Subclass 500, primary applicant, 1 July 2026 charge; A$2,050 for ELICOS and non-award courses. Concessions and exemptions apply in limited cases." },
      { label: "Length of stay", value: "Up to 6 years", note: "In line with your enrolment." },
      { label: "Work while studying", value: "48 hours a fortnight", note: "During term; unlimited during scheduled breaks." },
      { label: "After graduation", value: "Subclass 485", note: "A$5,750 for a first 485 (main applicant). Usually 2 to 3 years for degrees and 18 months for vocational qualifications." },
    ],
    eligibility: [
      "A Confirmation of Enrolment (CoE) for each course, in a full-time CRICOS-registered course",
      "Meet the Genuine Student (GS) requirement: your study history, future plans and circumstances show you are coming to study",
      "Show funds for travel, 12 months of course fees and living costs for you and any family included, or a qualifying parent or partner income, when the Document Checklist Tool requires it or Home Affairs asks",
      "Meet the English requirement for your course, unless an exemption applies",
      "Hold Overseas Student Health Cover (OSHC) for the whole stay",
      "Meet health and character requirements, and apply from the right place: since 2 October 2026 most applicants must be outside Australia when they apply and when the visa is granted",
    ],
    documents: [
      {
        group: "Identity and enrolment",
        items: ["Valid passport (renew it first if it is about to expire)", "Confirmation of Enrolment (CoE) for every course", "National identity documents, if you have them"],
      },
      {
        group: "Genuine Student evidence",
        items: ["Your answers to the Genuine Student questions in the online form (up to 150 words each): your circumstances, why this course and provider, and how the course benefits you", "Previous study records, transcripts and completion certificates", "Employment references and CV if you have worked", "Explanation and evidence for any study gaps, course changes or earlier visa refusals"],
      },
      {
        group: "Financial capacity",
        items: ["Bank statements that show how the funds built up, or official government income documents (such as tax assessments) if you rely on a parent's or partner's income", "Scholarship or sponsor letters, with evidence of the sponsor's relationship and funds", "Evidence of course fees already paid"],
      },
      {
        group: "English, health and family",
        items: ["English test result (PTE, IELTS or equivalent) unless exempt", "OSHC policy certificate", "Health examinations if requested, and police checks where required", "Marriage or birth certificates for any family members included under an exemption"],
      },
    ],
    steps: [
      { title: "Course and provider check", description: "We look at the course, provider, CRICOS registration and how the course fits your study history so the Genuine Student story is consistent from day one.", output: "A plan for the course, intake and lodgement location that suits you." },
      { title: "Genuine Student and finances", description: "We work through the GS questions with you and check your financial evidence against what the Department expects for your course and family size.", output: "Drafted GS responses and a financial evidence list." },
      { title: "Documents and lodgement", description: "We review your documents against the Home Affairs document checklist for your passport country and provider, then prepare and lodge the application in ImmiAccount.", output: "A lodged application with a transaction reference number, and a Bridging visa A if you applied in Australia under an exemption." },
      { title: "After lodgement", description: "We respond to any request for further information, keep you updated and help you plan ahead for the Temporary Graduate visa or other options after your course.", output: "Decision notice, and a post-study plan." },
    ],
    pathways: [
      { title: "Temporary Graduate visa (subclass 485)", description: "Live and work in Australia after you finish, usually for 2 to 3 years after a degree or 18 months after a vocational qualification. You apply in Australia within 6 months of completing your course, while you hold a Student visa or held one in the last 6 months, and must be 35 or under unless an exception applies.", href: "/visas/skilled/temporary-graduate-visa-485" },
      { title: "Skilled visas (189, 190, 491)", description: "Points-tested permanent or regional visas: you need a suitable skills assessment, at least 65 points and an invitation, and must be under 45 when invited.", href: "/services/skilled-visas" },
      { title: "Employer sponsorship (482, 186, 494)", description: "If an Australian employer wants to sponsor you once you have the work experience these visas need: at least 1 year for a 482, and 3 years for a regional 494. After 2 years of full-time sponsored work on a 482, the employer can nominate you for a 186.", href: "/services/employer-sponsored-visas" },
    ],
    faqs: [
      { question: "How many hours can I work on a Student visa?", answer: "Up to 48 hours a fortnight while your course is in session, and unlimited hours during scheduled course breaks. Research master's and PhD students have no limit once their course starts. Work must not start before your course does, unless you held a visa with work rights when you applied." },
      { question: "Can my partner and children come with me?", answer: "Only if you fit an exemption: you are a PhD student, a DFAT or Defence sponsored student, a fully funded foreign government scholarship holder or an eligible Pacific Island or ASEAN national, or your family already holds your current student visa and you meet an onshore exemption. They must apply at the same time and from the same place as you. Since 2 October 2026 family members can no longer be added later as subsequent entrants, in any circumstance. Applications lodged before 2 October 2026 are assessed under the rules in force when they were lodged. Book a consultation if family is part of your plan." },
      { question: "What is the Genuine Student requirement?", answer: "A set of questions in the application about your circumstances, your reasons for choosing the course and Australia, and how the course benefits you. The Department weighs your answers against your evidence and history, so consistency matters more than length." },
      { question: "How long does a Student visa take?", answer: "It varies by education sector and by whether you apply in or outside Australia, and applications are prioritised under Ministerial Directions. Check the Home Affairs processing time guide for recently decided applications and apply well before your course starts." },
      { question: "When should I apply for the subclass 485 visa?", answer: "Within 6 months of your completion date: the date your provider first told you in writing that you met the academic requirements, not your graduation ceremony. You must be in Australia, hold a Student visa or have held one in the last 6 months, have an English test result from the 12 months before you apply, and have applied for an Australian Federal Police check at least the day before you lodge." },
    ],
  },

  // ── Skilled visas ───────────────────────────────────────────────────
  "skilled-visas": {
    covers: "Subclass 189 (Skilled Independent), 190 (Skilled Nominated) and 491 (Skilled Work Regional)",
    factsAsAt: "13 October 2026",
    sourceLabel: "Department of Home Affairs, subclass 189, 190 and 491 visa pages",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested",
    keyFacts: [
      { label: "Government fee", value: "From A$6,135", note: "Subclass 189. Subclasses 190 and 491 from A$6,140. Primary applicant." },
      { label: "Length of stay", value: "Permanent", note: "189 and 190. Subclass 491 is 5 years with a pathway to permanent residence (subclass 191)." },
      { label: "Minimum points", value: "65 points", note: "Subclass 189 invitations usually go to higher scores; states set their own criteria for the 190 and 491. Age under 45 at invitation." },
      { label: "How you apply", value: "By invitation", note: "Expression of Interest in SkillSelect first, then 60 days to apply once invited." },
    ],
    eligibility: [
      "Your occupation is on the relevant skilled occupation list for the visa you want",
      "A suitable skills assessment for that occupation from the relevant assessing authority",
      "At least 65 points on the points test, covering age, English, work experience, qualifications and more",
      "Under 45 when you are invited to apply",
      "At least Competent English from a test taken at a secure test centre (for tests taken from 7 August 2025, for example IELTS 6 in each band, or PTE Academic 47 listening, 48 reading, 51 writing and 54 speaking), or a UK, Irish, US, Canadian or New Zealand passport. Proficient and Superior English earn 10 and 20 points",
      "For subclass 190: nomination by a state or territory government. For subclass 491: state nomination or sponsorship by an eligible relative living in a designated regional area",
      "Meet health and character requirements",
    ],
    documents: [
      { group: "Skills and qualifications", items: ["Skills assessment outcome letter", "Degree certificates and academic transcripts", "Evidence of a Professional Year, NAATI CCL credential or Australian study if you claim those points"] },
      { group: "Work experience", items: ["Employment reference letters on letterhead showing dates, hours and duties", "Payslips, tax records, contracts or superannuation statements to corroborate each role"] },
      { group: "English and identity", items: ["English test result from a secure test centre (PTE Academic, IELTS or another approved test) valid at invitation, or a UK, Irish, US, Canadian or New Zealand passport", "Passport pages, national identity card (if you have one) and any change-of-name documents"] },
      { group: "Nomination and family", items: ["For a family-sponsored 491: your relative's subclass 491 sponsor declaration, and proof of their citizenship or residence, their regional address and your relationship (a state nomination isn't attached: Home Affairs sees it in SkillSelect, so just keep the state's approval letter)", "Partner's skills assessment or English result if you claim partner points", "Marriage, de facto or birth certificates for family members included", "Police certificates for every country where you spent 12 months or more in the last 10 years since turning 16, including an AFP complete disclosure certificate for Australia"] },
    ],
    steps: [
      { title: "Points and occupation review", description: "We confirm your occupation, the lists it appears on and work out a realistic points score, including the points you could still gain.", output: "A written points breakdown and a target visa (189, 190 or 491)." },
      { title: "Skills assessment and English", description: "We guide you through the skills assessment for your occupation and, if you need more points, the English test score to aim for.", output: "A positive skills assessment and a valid English result." },
      { title: "Expression of Interest and nomination", description: "We lodge your EOI in SkillSelect and, where it fits, state or territory nomination applications, with the evidence each state asks for.", output: "An EOI in SkillSelect and, for a 190 or state-nominated 491, a state nomination application." },
      { title: "Invitation and visa application", description: "When you are invited you have 60 days to apply. We prepare every claim with matching evidence and lodge the visa application.", output: "A lodged visa application and, if you applied in Australia, usually a Bridging visa A." },
    ],
    pathways: [
      { title: "Permanent residence", description: "Subclasses 189 and 190 are permanent visas: live, work and study anywhere in Australia. The 190 has no visa condition tying you to the nominating state, but states ask nominees to commit to living and working there for a period." },
      { title: "Subclass 491 to subclass 191", description: "Once they have held the 491 for at least 3 years, kept to its conditions (including living, working and studying only in designated regional areas) and can provide ATO notices of assessment for 3 income years, 491 holders can apply for the permanent subclass 191 visa. Home Affairs states there is no minimum income requirement.", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { title: "Skills assessment first", description: "The 189, 190 and 491 all need a suitable skills assessment, valid when you are invited.", href: "/services/skills-assessments" },
      { title: "Check your points", description: "Estimate your score in two minutes with our free calculator.", href: "/tools/points-calculator" },
    ],
    faqs: [
      { question: "Is 65 points enough to be invited?", answer: "65 is the pass mark: you can't be invited below it, but it doesn't guarantee an invitation. In the 4 June 2026 subclass 189 round, 65 was enough only in some construction trades; nurses, teachers and allied health needed 75, and most other professions 80 to 85. State nomination for the 190 and 491 depends on each state's own criteria. We give you a realistic view before you commit." },
      { question: "What is the difference between 190 and 491?", answer: "Subclass 190 is a permanent visa that needs state or territory nomination. Subclass 491 is a 5-year provisional visa for designated regional areas that needs state nomination or sponsorship by an eligible relative living in a designated regional area. It earns 15 nomination points instead of 5, and leads to permanent residence through subclass 191 once you have held it for 3 years." },
      { question: "How can I increase my points?", answer: "Common ways are a higher English score (Proficient adds 10, Superior adds 20), more skilled work experience, a Professional Year, a NAATI CCL credential (5 points), Australian study, a skilled partner, or state and regional nomination." },
      { question: "How long do skilled visas take?", answer: "Applications are processed in the priority order set by Ministerial Direction 122 (in effect from 19 September 2026): first those relating to sectors such as construction, healthcare and teaching, then applicants who were in Australia when they lodged. Times vary a lot by occupation and lodgement date, so check the Home Affairs processing time guide for recent decisions." },
    ],
  },

  // ── Skills assessments ──────────────────────────────────────────────
  "skills-assessments": {
    covers: "Skills assessments for skilled and employer-sponsored visas",
    factsAsAt: "13 October 2026",
    sourceLabel: "Department of Home Affairs, skills assessment information",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment",
    keyFacts: [
      { label: "Who assesses you", value: "Depends on your occupation", note: "For example ACS for ICT, Engineers Australia for engineers, VETASSESS for many professions, TRA for trades, ANMAC for nurses and midwives, and full AHPRA registration for doctors." },
      { label: "Typical cost", value: "Set by each authority", note: "Fees differ by authority and pathway and are separate from visa charges." },
      { label: "Validity", value: "3 years at most", note: "3 years from issue unless a shorter period is stated; a longer stated period is treated as 3 years. For the 189, 190 and 491 it must be valid when you are invited; for the 186 Direct Entry stream and the 494, obtained before you apply." },
      { label: "Needed for", value: "189, 190, 491, 494, 186 Direct Entry", note: "Also some subclass 482 applicants, and the 485 Post-Vocational Education Work stream (at least applied for when you lodge)." },
    ],
    eligibility: [
      "Your qualifications and experience meet the standard set by the assessing authority listed for your occupation (each authority has its own criteria, for example on the level of qualification and years of experience)",
      "The assessment comes from the authority listed for your nominated occupation (Home Affairs accepts no other) and is the type your visa needs: a provisional assessment issued for a subclass 485 visa isn't suitable for the 189, 190, 491, 494, the 186 Direct Entry stream or partner points",
      "Your work experience is in tasks that match the ANZSCO description of the occupation",
      "You can evidence employment with letters that show dates, hours, duties and pay, backed by third-party records",
      "For trades, the authority may require a technical interview or practical assessment",
      "Some authorities also require an English test result, registration or a professional interview",
    ],
    documents: [
      { group: "Qualifications", items: ["Degree or trade certificates and full academic transcripts", "Course outlines or unit descriptions, if the authority asks for them", "Certified translations for any document not in English"] },
      { group: "Employment", items: ["Reference letters on company letterhead, signed, with position, dates, hours per week and detailed duties", "Payslips, bank statements, tax records or superannuation to corroborate each role", "Contracts, and any other evidence the authority accepts where a reference letter isn't available (each authority sets its own evidence rules)"] },
      { group: "Identity and other", items: ["Passport and any name-change evidence", "CV in the authority's required format", "Registration or licence certificates, and an English result if the authority asks for one"] },
    ],
    steps: [
      { title: "Occupation and authority match", description: "We check which occupation best fits your qualification and experience, which authority assesses it, and which pathway you fall under.", output: "A confirmed occupation code, authority and pathway." },
      { title: "Evidence review", description: "We review every qualification and employment document against the authority's guidelines and tell you exactly what is missing or weak.", output: "A gap list and templates for reference letters." },
      { title: "Prepare and lodge", description: "We compile the application in the format the authority expects and lodge it, with declarations and translations where needed.", output: "A lodged assessment with a reference number." },
      { title: "Follow-up and outcome", description: "We help you respond to any request for more information or an interview, and explain what the outcome means for your visa options.", output: "An outcome letter and a next-step plan." },
    ],
    pathways: [
      { title: "Points-tested skilled visas", description: "A positive assessment is the first building block for subclasses 189, 190 and 491.", href: "/services/skilled-visas" },
      { title: "Employer-sponsored visas", description: "Direct Entry subclass 186 and subclass 494 require a skills assessment in most cases, and some subclass 482 applicants need one too.", href: "/services/employer-sponsored-visas" },
      { title: "Temporary Graduate visa", description: "Post-Vocational Education Work stream applicants must have applied for a skills assessment before lodging.", href: "/services/student-visas" },
    ],
    faqs: [
      { question: "How long does a skills assessment take?", answer: "It depends on the authority. Each one sets its own procedures, timeframes and charges, and some add a skills interview or practical test, so check the authority's current timeframe and start early. For the 189, 190 and 491 you must hold the assessment by the time you are invited (or obtain it within the 60-day invitation period), so build this time into your visa plan." },
      { question: "My degree is in a different field from my job. Can I still be assessed?", answer: "It depends on the authority listed for your occupation: each one sets its own criteria for qualifications, years of experience and English. We check that authority's rules against your qualifications and work history before you apply." },
      { question: "Can work experience from overseas be counted?", answer: "Yes, if it matches the occupation and is properly evidenced. For some authorities, the outcome letter states the date from which your work counts as skilled. For visa points, only paid work of at least 20 hours a week in your nominated or a closely related occupation, in the 10 years before invitation, counts." },
      { question: "What if my assessment is unsuccessful?", answer: "You can't lodge a skilled visa application in that occupation until a positive assessment is issued. We look at the reasons given, check whether the authority offers a review, and advise whether better evidence, a different occupation or another pathway suits you better." },
    ],
  },

  // ── Employer-sponsored visas ────────────────────────────────────────
  "employer-sponsored-visas": {
    covers: "Subclass 482 (Skills in Demand), 186 (Employer Nomination Scheme) and 494 (Skilled Employer Sponsored Regional)",
    factsAsAt: "13 October 2026",
    sourceLabel: "Department of Home Affairs, subclass 482, 186 and 494 visa pages",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482",
    keyFacts: [
      { label: "Government fee", value: "From A$4,015", note: "Subclass 482 primary applicant. Subclasses 186 and 494 from A$6,140." },
      { label: "Length of stay", value: "Up to 4 years", note: "Subclass 482 (up to 5 years for Hong Kong passport holders). Subclass 494 is 5 years. Subclass 186 is permanent." },
      { label: "Salary floor", value: "A$79,423", note: "CSIT (482 Core Skills, 186) and TSMIT (494) for nominations lodged from 1 July 2026 to 30 June 2027; A$146,576 (SSIT) for 482 Specialist Skills. Indexed each 1 July; pay must also meet the market rate." },
      { label: "Pathway to PR", value: "186 after 2 years; 191 after 3", note: "482 holders can be nominated for the 186 after 2 years of full-time sponsored work in the last 3 (any sponsor counts); 494 holders can apply for the 191 after holding the 494 for 3 years." },
    ],
    eligibility: [
      "For a 482 or 494, an employer that is, or has applied to become, a Standard Business Sponsor; for a 186, an Australian business that is actively and lawfully operating (it needs a nomination, not a sponsorship approval)",
      "An approved nomination for a genuine, full-time position. The occupation must be on the Core Skills Occupation List (482 Core Skills stream and 186 Direct Entry stream) or the list for the 494; the 482 Specialist Skills stream (ANZSCO Major Groups 1, 2, 4, 5 or 6, paid at least A$146,576) and the 186 Temporary Residence Transition stream (the occupation on your 457 or 482) use no list",
      "Subclass 482: at least 1 year of relevant work experience in the last 5 years (part-time or casual work counts if it adds up to 12 months full-time), and pay of at least both the annual market salary rate and the stream's income threshold (A$79,423 Core Skills, A$146,576 Specialist Skills, for nominations lodged from 1 July 2026)",
      "Subclass 186 Temporary Residence Transition stream: hold a subclass 457 or 482 visa (or an eligible bridging visa), have worked full-time in your nominated occupation for 2 of the 3 years before you apply (time with more than one sponsor counts, but the nominating employer must be your most recent sponsor), and be under 45 unless an exemption applies",
      "Subclass 186 Direct Entry and subclass 494: a skills assessment, at least 3 years of relevant experience and under 45 unless an exemption applies",
      "English language ability at the level required for the stream, plus health and character requirements",
    ],
    documents: [
      { group: "Employer (sponsorship and nomination)", items: ["Business registration, financial statements and evidence of lawful, active operation", "Organisation chart and the genuine need for the position", "Employment contract showing salary, duties and location", "Evidence of the annual market salary rate, and copies of the labour market testing advertisements (482 and 494)", "Regional certifying body salary assessment (494)"] },
      { group: "Employee (visa application)", items: ["Passport and identity documents", "Transaction Reference Number (TRN) of your employer's nomination", "Qualifications, transcripts and a skills assessment where required", "Employment references and payslips showing relevant experience", "English test result unless exempt", "Health examinations, police certificates and health insurance for subclass 482"] },
    ],
    steps: [
      { title: "Eligibility review for both sides", description: "We assess the business's capacity to sponsor, whether the occupation and salary meet the rules, and whether you meet the stream requirements.", output: "A sponsorship and nomination plan with the right stream." },
      { title: "Sponsorship and nomination", description: "We prepare the Standard Business Sponsorship application (if needed) and the nomination for the position, with the business evidence the Department expects.", output: "A lodged (or approved) sponsorship where one is needed, and a lodged nomination with its Transaction Reference Number." },
      { title: "Visa application", description: "We prepare your visa application to match the nomination: skills, experience, English, health and character.", output: "A lodged visa application linked to the nomination." },
      { title: "Ongoing obligations and PR planning", description: "We explain sponsor obligations and your visa conditions, and map the timing for permanent residence through subclass 186 or 191.", output: "A compliance checklist and a PR timeline." },
    ],
    pathways: [
      { title: "Subclass 482 to subclass 186", description: "After 2 years of full-time sponsored work in the 3 years before you apply, your most recent sponsor can nominate you for the permanent Employer Nomination Scheme visa (Temporary Residence Transition stream). Time with more than one sponsor counts.", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { title: "Subclass 494 to subclass 191", description: "After holding the 494 for at least 3 years and complying with its conditions (including living, working and studying only in a designated regional area), you can apply for the permanent subclass 191 visa. You need ATO notices of assessment for 3 of the 5 income years of your 494; Home Affairs states there is no minimum income requirement.", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { title: "Skills assessment", description: "Usually required for the subclass 186 Direct Entry stream and the subclass 494 (some exemptions apply), and for some subclass 482 applicants, depending on their occupation and passport.", href: "/services/skills-assessments" },
    ],
    faqs: [
      { question: "Can I change employers on a subclass 482 visa?", answer: "Yes, but your new employer must be a Standard Business Sponsor and have a new nomination approved before you start. If the occupation changes, you also need a new visa. Under condition 8607 you can be out of work for up to 180 days in a single period and 365 days in total across the visa." },
      { question: "What does the employer have to pay?", answer: "The employer must pay the sponsorship and nomination charges, the Skilling Australians Fund levy, and its recruitment and migration agent costs, and cannot recover them from you or your family. The visa application charges are charged to you, the visa applicant." },
      { question: "Does the employer need to advertise the job first?", answer: "Yes, for subclass 482 and 494 nominations: at least two advertisements in Australia, each running for at least four weeks, within the four months before the nomination is lodged, showing the salary if it is under A$96,400. International trade obligation exemptions apply only to some subclass 482 nominations, never to the 494." },
      { question: "What English level do I need?", answer: "For the subclass 482 (Core Skills and Specialist Skills streams) you need at least IELTS 5.0 in each of the four components, or the equivalent in PTE Academic, OET, TOEFL iBT, CELPIP, MET or LANGUAGECERT, from a test taken in the 3 years before you apply; a labour agreement may set a different standard. Subclasses 186 and 494 require Competent English: IELTS 6 in each component or the equivalent, including in PTE Academic. Passport holders of the United Kingdom, Ireland, the United States, Canada and New Zealand are exempt." },
    ],
  },

  // ── Family and partner visas ────────────────────────────────────────
  "family-partner-visas": {
    covers: "Subclass 820/801 (onshore Partner), 309/100 (offshore Partner) and 300 (Prospective Marriage)",
    factsAsAt: "12 October 2026",
    sourceLabel: "Department of Home Affairs, Partner and Prospective Marriage visa pages",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-onshore",
    keyFacts: [
      { label: "Government fee", value: "A$11,710", note: "Main applicant, 1 July 2026, for the 820 and 801, the 309 and 100, or the 300; one charge covers both partner visa stages. A$1,955 for a 300 holder's 820 and 801; A$9,600 for the 309 and 100 or the 300 with an eligible Pacific Island or Timor-Leste passport." },
      { label: "Two stages", value: "Temporary then permanent", note: "820 then 801 (onshore) or 309 then 100 (offshore), with one application and one charge. The permanent stage is assessed from two years after you apply, or sooner if you were in a long-term partner relationship when you applied." },
      { label: "Relationship", value: "Married, de facto or engaged", note: "De facto couples need 12 months in the relationship right before applying, unless it is registered with a state or territory, there are compelling and compassionate circumstances, or the humanitarian partner exception applies. Engaged couples use the 300, or the 309 if they marry before it is granted." },
      { label: "Subclass 300", value: "9 to 15 months", note: "From grant, and it can't be extended. Enter Australia, marry within the visa period, then apply in Australia for the Partner visa (subclasses 820 and 801)." },
    ],
    eligibility: [
      "Your partner is an Australian citizen, Australian permanent resident or eligible New Zealand citizen aged 18 or over, and agrees to sponsor you",
      "You are married (a marriage valid under Australian law), in a de facto relationship (usually for at least the 12 months right before you apply), or, for the 309 or 300, engaged to marry your sponsor",
      "The relationship is genuine and continuing, and you live together or do not live apart permanently",
      "For subclass 300: you are both 18 or over, have met in person as adults, intend to marry before the visa ends, and you apply from outside Australia",
      "Your sponsor meets the sponsorship requirements, including police checks and sponsorship limits",
      "You meet health and character requirements, and any family members included meet them too",
    ],
    documents: [
      { group: "Identity and relationship status", items: ["Passports, birth certificates and any name-change documents", "Marriage certificate, or relationship registration certificate", "Divorce or death certificates for any previous marriages"] },
      { group: "Financial aspects", items: ["Joint bank accounts, shared bills and major purchases", "Joint lease, mortgage or property ownership", "Evidence of how you share day-to-day expenses"] },
      { group: "Household and social aspects", items: ["Evidence of living together: lease, mail to the same address, utilities", "Joint invitations, and evidence of joint activities and travel", "Proof you've told government or businesses about the relationship", "Two Form 888 statements from people aged 18 or over who know you both"] },
      { group: "Commitment", items: ["History of the relationship written by each of you", "Evidence of combined personal affairs and future plans, and the terms of your wills if you have them", "Evidence of staying in contact during any time apart"] },
      { group: "Health and character", items: ["Health examinations when ImmiAccount prompts you (results are valid for 12 months)", "An AFP check and police certificates for every country where you spent 12 months or more in the last 10 years since turning 16, and Form 80"] },
      { group: "Your sponsor", items: ["Your sponsor's passport or birth certificate, and evidence that a permanent resident or eligible New Zealand citizen sponsor usually lives in Australia", "Your sponsor's AFP complete disclosure and overseas police certificates for every country where they spent 12 months or more in the last 10 years since turning 16", "Your sponsor's written consent to disclose any relevant convictions to you"] },
      { group: "For the 300", items: ["Evidence you've met in person as adults, such as travel records and photographs", "Evidence of your wedding plans, such as a celebrant's letter confirming a date within nine months of grant"] },
    ],
    steps: [
      { title: "Relationship and eligibility assessment", description: "We look at how your relationship meets the legal definition, which visa fits (820, 309 or 300) and whether anything in your history needs explaining.", output: "A visa choice, timeline and tailored evidence list." },
      { title: "Evidence building", description: "We organise your evidence across the four aspects the Department assesses: financial, household, social and commitment, and help witnesses complete Form 888.", output: "A structured evidence bundle with a cover statement." },
      { title: "Sponsorship and visa lodgement", description: "We prepare and lodge the visa application, then prepare your partner's sponsorship, which they lodge using the application's transaction reference number (TRN).", output: "A lodged visa application and sponsorship, and usually a bridging visa if you applied in Australia." },
      { title: "Permanent stage", description: "From the second anniversary of lodgement (not before), we help you lodge updated Stage 2 evidence for the subclass 801 or 100, including your partner's statutory declaration and two new Form 888 statements.", output: "Stage 2 evidence lodged for the permanent visa decision, or advice if circumstances have changed." },
    ],
    pathways: [
      { title: "Permanent Partner visa (801 or 100)", description: "Can be granted from two years after you applied if the relationship is still genuine and continuing. If you were in a long-term partner relationship when you applied (three years, or two with a dependent child), the two-year wait doesn't apply." },
      { title: "Australian citizenship", description: "Permanent residents can apply for citizenship once they meet the residence requirement." },
      { title: "Changing circumstances", description: "If the relationship ends, family violence provisions or other options may still apply. Get advice early." , href: "/bookings" },
    ],
    faqs: [
      { question: "How long does a Partner visa take?", answer: "Processing times change, so we don't quote them: check the Home Affairs processing times tool. Under Ministerial Direction 117 (from 25 July 2026), onshore partner applications are in the highest priority group, and applications lodged outside Australia have lower priority. The permanent stage is assessed from two years after you apply." },
      { question: "Can I work while my onshore Partner visa is processed?", answer: "Once the 820 is granted you have full work and study rights. Before that, if you held a substantive visa when you applied, a Bridging visa A takes effect when that visa ends and keeps its work conditions (for example a student's work limit). If you have a compelling need to work, you can apply for a further Bridging visa A without the work condition." },
      { question: "We have been together less than 12 months. Can we apply?", answer: "Possibly. Registering your relationship with a state or territory, where available, removes the 12-month requirement, and so can compelling and compassionate circumstances. Married couples don't face the 12-month rule. Engaged and outside Australia? The Prospective Marriage visa (subclass 300) doesn't need you to have lived together, but you must have met in person as adults." },
      { question: "What is the Prospective Marriage visa?", answer: "Subclass 300 lets you come to Australia to marry your fiancé(e). It lasts 9 to 15 months from the grant date, and you must enter Australia and marry within that period. After marrying, you apply in Australia for the Partner visa (subclasses 820 and 801), at a reduced charge of A$1,955 if you lodge while the 300 is still in effect." },
    ],
  },

  // ── Visitor and tourist visas ───────────────────────────────────────
  "visitor-tourist-visas": {
    covers: "Subclass 600 (Visitor) in the Tourist, Sponsored Family and Business Visitor streams",
    factsAsAt: "12 October 2026",
    sourceLabel: "Department of Home Affairs, Visitor visa (subclass 600)",
    sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/tourist-stream-overseas",
    keyFacts: [
      { label: "Government fee", value: "From A$250", note: "Tourist stream applied from outside Australia. Higher if you apply in Australia." },
      { label: "Length of stay", value: "Usually 3 months; up to 12 months", note: "Decided case by case from the reasons you give. Parents of Australian citizens or permanent residents can ask for a longer multiple-entry visa." },
      { label: "Work", value: "Not permitted", note: "Business visitors may attend meetings and conferences but not work." },
      { label: "Multiple entry", value: "Often granted", note: "Common in the Tourist stream; the Sponsored Family stream is generally single entry. Your grant letter shows your entry type and how long each stay can be." },
    ],
    eligibility: [
      "You genuinely intend to visit temporarily, for tourism, to see family or for business visitor activities",
      "You have, or have access to, enough money to support yourself in Australia and to leave at the end of your stay",
      "You can show ties to your home country, such as employment, study, family or property, that make it likely you will leave Australia",
      "You meet health and character requirements, and have no outstanding debts to the Australian Government",
      "For the Sponsored Family stream: a settled Australian citizen or permanent resident relative aged 18 or over sponsors you and may be asked for a security bond; this stream is always granted with condition 8503 (No Further Stay)",
    ],
    documents: [
      { group: "Identity and purpose", items: ["Passport valid for the stay", "Travel itinerary or invitation letter from family or a business in Australia", "Evidence of the relationship with your host if visiting family"] },
      { group: "Funds and ties", items: ["Bank statements showing available funds", "Employment letter, or evidence of business ownership", "Evidence of property, family or study commitments at home"] },
      { group: "Other", items: ["Travel history and any previous Australian visa decisions", "Health insurance if applicable, and health examinations if requested", "Sponsored Family stream: Form 1149, completed and signed by your sponsor", "Applicants under 18: Form 1229 or a statutory declaration of consent from any non-travelling parent, and Form 1257 if you will stay with someone who isn't a relative or guardian"] },
    ],
    steps: [
      { title: "Stream selection", description: "We choose the right stream and lodgement location for your purpose, and flag anything in your history (for example a previous refusal) that needs addressing.", output: "The right stream and a document list." },
      { title: "Evidence preparation", description: "We help you present your funds, purpose and ties to home clearly, which are what Home Affairs weighs when it decides whether you're a genuine visitor.", output: "An organised application pack." },
      { title: "Lodgement", description: "We lodge the application in ImmiAccount and help with any biometrics or health requests.", output: "A lodged application with a reference number." },
      { title: "Conditions and travel", description: "We explain your visa conditions, including any no further stay condition, so you can plan future applications.", output: "A grant notice and a plain-English summary of conditions." },
    ],
    pathways: [
      { title: "Studying while visiting", description: "Visitor visa holders can study for up to 3 months. Longer courses need a Student visa, and since 2 October 2026 visitor visa holders must apply for it from outside Australia.", href: "/services/student-visas" },
      { title: "Partner visas", description: "If you are in a relationship with an Australian, a Partner visa may be the right long-term option. You can apply in Australia only if your visa has no condition 8503, or it has been waived.", href: "/services/family-partner-visas" },
    ],
    faqs: [
      { question: "Why are Visitor visas refused?", answer: "Home Affairs refuses a Visitor visa when it isn't satisfied that you genuinely intend a temporary stay or that you have enough money. Weak ties to home, a thin financial picture, inconsistent travel plans and a history of overstaying are typical problems. Good evidence addresses each of them." },
      { question: "Can I apply for another visa while in Australia on a Visitor visa?", answer: "Sometimes, but not if your visa carries condition 8503 (No Further Stay), unless it is waived. Since 2 October 2026 Visitor (600), ETA (601), eVisitor (651) and Medical Treatment (602) visa holders cannot apply for a Student visa in Australia at all; they must apply from outside Australia. Check your grant letter or VEVO before making plans." },
      { question: "How long before travel should I apply?", answer: "Apply well ahead of your travel date and do not book non-refundable travel until the visa is granted. Processing times vary by stream and country." },
    ],
  },

  // ── ART reviews ─────────────────────────────────────────────────────
  "art-reviews": {
    covers: "Review of visa refusals and cancellations by the Administrative Review Tribunal (ART)",
    factsAsAt: "12 October 2026",
    sourceLabel: "Administrative Review Tribunal, immigration and citizenship reviews",
    sourceUrl: "https://www.art.gov.au/applying-review/immigration-and-citizenship",
    alert: {
      title: "Time limits are strict and cannot be extended",
      body: "Your decision letter states the deadline to apply for review. For most migration decisions it is 28 days after the day you are notified, or 14 days if you are in immigration detention, and the Tribunal cannot extend it. Count from when you are taken to have received the letter (an email is usually taken to be received at the end of the day it was sent), not the day you read it, and get advice immediately.",
    },
    keyFacts: [
      { label: "Application fee", value: "A$3,727", note: "Fee for most migration decisions from 1 July 2026 (A$1,195 for character decisions). A 50% reduction may be available for financial hardship; at least 50% must be paid by the deadline." },
      { label: "Deadline", value: "Stated in your letter", note: "28 days after notification for most migration decisions; 14 days if you are in immigration detention; 9 days for character decisions made while you were in Australia. It cannot be extended." },
      { label: "Bridging visa", value: "Continues after a refusal", note: "A Bridging visa A linked to the refused application usually stays in effect during the review. After a cancellation, any linked bridging visa ends with the visa: apply for a Bridging visa E straight away." },
      { label: "Fee refund", value: "50% if successful", note: "50% of the fee you paid is refunded if the Tribunal sets aside or varies the decision, or remits it. There is no refund if the decision is affirmed." },
    ],
    eligibility: [
      "The decision is one the ART can review: your letter will say whether it is reviewable and by when",
      "You are the right person to apply: the visa applicant for onshore refusals, the former visa holder for cancellations, the Australian sponsor, nominator or relative for most offshore sponsored visas, or the employer for a refused nomination or sponsorship",
      "For a visa applied for in Australia, you are in Australia when you lodge the review",
      "You apply within the time limit and pay the fee by the deadline: the full A$3,727, or at least 50% if you ask for a fee reduction for financial hardship",
      "The review is lodged correctly; it is not a fresh application but a merits review of the original decision",
    ],
    documents: [
      { group: "The decision", items: ["The refusal or cancellation letter and the decision record", "Evidence of when you received the notification (email date and time)", "Fee receipt, or a fee-reduction request with financial documents such as payslips and bank statements", "For a cancellation: your Bridging visa E grant letter or application receipt"] },
      { group: "Your original application", items: ["Everything lodged with the Department, including forms and attachments", "Any requests for information and your responses"] },
      { group: "New evidence", items: ["Documents that address the reasons given for refusal", "Updated circumstances: new employment, relationship evidence, course enrolment, medical reports", "Statements from you and from witnesses"] },
    ],
    steps: [
      { title: "Urgent review of your letter", description: "We confirm the deadline, whether the decision is reviewable, who must apply and what the Department relied on.", output: "A deadline, a verdict on review rights and a recommendation." },
      { title: "Lodging the review", description: "We lodge the ART application in time with the fee (or at least 50% of it with a hardship request), and check your bridging visa: one linked to a refused application usually continues, but after a cancellation you need a Bridging visa E.", output: "An ART case number and confirmed bridging arrangements." },
      { title: "Building the case", description: "We analyse the reasons for the refusal or cancellation, gather new evidence and prepare written submissions on the law and your circumstances.", output: "A submission and evidence bundle lodged with the Tribunal." },
      { title: "Hearing and outcome", description: "We prepare you for the hearing, and where appropriate attend with you. If the decision is remitted, the Department reconsiders your application.", output: "A Tribunal decision and advice on what happens next." },
    ],
    pathways: [
      { title: "Decision remitted or set aside", description: "If a refusal is remitted, Home Affairs reconsiders the application in line with the Tribunal's directions, and the remaining criteria still have to be met. If a cancellation is set aside, the visa is restored, if it hasn't expired in the meantime." },
      { title: "Decision affirmed", description: "If the refusal or cancellation stands, options may include judicial review for a legal error (filed within 35 days of the decision), a ministerial intervention request in limited cases, or another visa if the section 48 bar allows it. A Bridging visa A usually ends 35 days after the Tribunal's decision, so act quickly." },
      { title: "A fresh application instead", description: "For some refusals, especially offshore, a new application that fixes the problem may suit better than review. Check first whether an exclusion period or the section 48 bar applies.", href: "/bookings" },
    ],
    faqs: [
      { question: "Is the ART the same as the AAT?", answer: "The Administrative Review Tribunal replaced the Administrative Appeals Tribunal on 14 October 2024. It reviews the same kinds of migration decisions, with updated procedures." },
      { question: "How long does an ART review take?", answer: "It depends on the case type and the Tribunal's caseload, so we don't quote a time. Reviews of people in immigration detention, visa cancellations and court remittals are expedited automatically, and you can ask for an expedited decision if you can now show a refused criterion is met. A Bridging visa A linked to a refused application usually stays in effect while you wait." },
      { question: "Can I keep working during the review?", answer: "If you held a bridging visa with work rights when the refusal was made, it generally continues with the same conditions while the review is pending. After a cancellation, a Bridging visa E usually starts with no work rights unless you show financial hardship, and its grant letter says whether you can work. Check your specific visa conditions." },
      { question: "Can I lodge the review myself and get help later?", answer: "Yes. If the deadline is close, lodging the application in time, with the fee (or at least 50% of it with a hardship request), is the priority. You can upload evidence at any time before the decision, and we can then prepare submissions and evidence for the hearing." },
    ],
  },
};

export function getVisaGuide(slug: string): VisaGuide | undefined {
  return visaGuides[slug];
}
