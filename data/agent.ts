import { siteConfig } from "@/lib/site-config";

export const agent = {
  name: "Kush Kumar Nepal",
  title: "Registered Migration Agent",
  marn: siteConfig.marn,
  photoSrc: "/agent-photo.jpg" as string | null,
  verifyUrl: "https://portal.mara.gov.au/search-the-register-of-migration-agents/" as string | null,

  // Concise bio for the homepage — the full story lives in `fullProfile`
  // below and is rendered on the About page.
  shortBio:
    "Kush Kumar Nepal is a Registered Migration Agent who began practising in 2024. Having first arrived in Australia as an international student in 2015, he combines firsthand migration experience with professional expertise gained through his Graduate Diploma in Australian Migration Law and Practice from Australian Catholic University. He provides clear, practical and personalised guidance to help clients understand their visa options and move forward with confidence.",

  credibilityPoints: [
    "Former international student in Australia",
    "Master's degree completed at RMIT University",
    "Graduate Diploma in Australian Migration Law and Practice from Australian Catholic University",
  ],

  fullProfile: {
    introduction: [
      "Kush Kumar Nepal understands the Australian migration journey from both a personal and professional perspective. He first arrived in Australia in 2015 as an international student, giving him firsthand experience of adapting to a new country, navigating the Australian education system and planning a long-term future in Australia.",
      "His personal experience has shaped a practical and people-focused approach to migration advice. Kush believes clients should receive clear explanations, honest guidance and a realistic understanding of their available options, without unnecessary jargon or unrealistic promises.",
    ],
    education: [
      "Kush has academic backgrounds in Mechanical Engineering and Automotive Engineering. He completed his master's degree at RMIT University in 2017, developing strong analytical, technical and problem-solving skills.",
      "To build his professional expertise in Australian migration law, Kush later completed the Graduate Diploma in Australian Migration Law and Practice at Australian Catholic University. This qualification provided him with a strong foundation in Australian migration legislation, visa requirements, professional obligations and application procedures.",
    ],
    experience: [
      "Kush became a Registered Migration Agent in 2024 and is registered under MARN 2418608.",
      "He assists clients in understanding Australian visa requirements, assessing possible migration pathways and preparing for the different stages of the application process. His approach is personalised, practical and focused on helping each client understand not only what options may be available, but also the requirements, risks and next steps involved.",
      "Because Kush has personally experienced life as an international student and migrant in Australia, he is able to connect with clients on a genuine level. He understands that migration decisions are often linked to family, education, career progression, financial security and the hope of creating a better future.",
    ],
    personalApproach: [
      "Kush believes migration advice should be clear, approachable and easy to understand. He takes the time to listen to each client's story, learn about their background and goals, and explain their options in plain English.",
      "Rather than treating every matter the same way, he focuses on the individual circumstances of each client. His aim is to help people make informed decisions with greater confidence and clarity.",
    ],
    hobbies: [
      "Outside his work in migration, Kush has a strong interest in music and enjoys exploring different styles and creative ideas.",
      "He is also passionate about AI engineering and emerging technology, particularly the ways artificial intelligence can improve education, communication and professional services. He enjoys learning about new technologies and considering how they can be used to make complex information more accessible and easier to understand.",
    ],
    motivation: [
      "Kush's motivation comes from his own journey in Australia. He remembers what it was like to arrive as an international student, adapt to a new environment and make important decisions without always knowing what the future would look like.",
      "Those experiences encouraged him to support others who may be facing similar uncertainty. His goal is to make the migration process feel less overwhelming by providing clients with clear information, practical direction and genuine professional support.",
      "For Kush, migration advice is not simply about forms and documents. It is about understanding people, recognising the importance of their goals and helping them move forward with confidence.",
    ],
    closingStatement:
      "Kush's approach is simple: clear communication, honest guidance and genuine support at every stage of the migration journey.",
  },
};
