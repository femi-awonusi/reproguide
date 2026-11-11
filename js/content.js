
/**
 * ReproGuide educational content module.
 *
 * Content status: pending clinical review.
 * Intended use: general health education and care navigation.
 *
 * This module does not diagnose, calculate clinical risk,
 * predict fertility, interpret test results, or recommend treatments.
 */

export const contentReviewStatus = "pending-clinical-review";

export const educationalTopics = [
  {
    id: "reproductive-health-basics",
    title: "Understanding male reproductive health",
    summary:
      "The male reproductive system includes organs and structures that support sperm production, maturation and transport. Reproductive health is one part of overall health, and individual concerns may require professional assessment.",
    keyPoints: [
      "The male reproductive system has roles in sperm production, maturation and transport.",
      "Reproductive health is one part of overall health.",
      "Individual symptoms or concerns may require assessment by a qualified healthcare professional.",
      "Educational information cannot establish whether an individual has a medical condition."
    ],
    source: {
      organisation: "MedlinePlus",
      title: "Sperm release pathway",
      url: "https://medlineplus.gov/ency/anatomyvideos/000121.htm"
    },
    reviewStatus: "pending-clinical-review"
  },
  {
    id: "fertility-fundamentals",
    title: "Understanding fertility",
    summary:
      "Fertility is influenced by reproductive health factors affecting one or both partners. General educational information cannot determine an individual's fertility status. A qualified healthcare professional can explain appropriate assessment options.",
    keyPoints: [
      "Fertility concerns do not, by themselves, establish a diagnosis.",
      "Factors affecting fertility may involve either partner.",
      "Some fertility concerns remain unexplained.",
      "A qualified healthcare professional can advise whether an assessment is appropriate."
    ],
    source: {
      organisation: "World Health Organization",
      title: "Guideline for the prevention, diagnosis and treatment of infertility",
      url: "https://www.who.int/publications/i/item/9789240115774"
    },
    reviewStatus: "pending-clinical-review"
  },
  {
    id: "when-to-seek-care",
    title: "Recognising changes that need medical attention",
    summary:
      "New or unexplained changes affecting the testicles should be assessed by a qualified healthcare professional. Some symptoms may require urgent medical attention. This guide cannot determine the cause or urgency of an individual's symptoms.",
    keyPoints: [
      "A new testicular lump, swelling or persistent discomfort should be assessed by a healthcare professional.",
      "Sudden, severe testicular pain requires immediate emergency medical assessment.",
      "When symptoms are concerning or their urgency is unclear, seek professional medical advice rather than relying on this educational guide."
    ],
    source: {
      organisation: "NHS",
      title: "Testicle lumps and swellings",
      url: "https://www.nhs.uk/symptoms/testicle-lumps-and-swellings/"
    },
    reviewStatus: "pending-clinical-review"
  }
];
