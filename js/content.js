
/**
 * ReproGuide educational content module.
 *
 * Content status: pending clinical review.
 * Intended use: general health education and care navigation.
 *
 * This module does not diagnose, calculate clinical risk,
 * predict fertility, or recommend treatments.
 */

export const contentReviewStatus = "pending-clinical-review";

export const educationalTopics = [
  {
    id: "reproductive-health-basics",
    title: "Understanding male reproductive health",
    summary:
      "Male reproductive health includes the function of the reproductive organs, sexual health, hormone activity and the production and transport of sperm.",
    keyPoints: [
      "Reproductive health is one part of overall health.",
      "A person's symptoms or concerns may need individual assessment by a qualified healthcare professional.",
      "Educational information cannot establish whether an individual has a medical condition."
    ],
    source: {
      organisation: "MedlinePlus",
      title: "Male Reproductive System",
      url: "https://medlineplus.gov/malereproductivesystem.html"
    },
    reviewStatus: "pending-clinical-review"
  },
  {
    id: "fertility-fundamentals",
    title: "Understanding fertility",
    summary:
      "Fertility can be influenced by different factors affecting either partner. A healthcare professional can help assess concerns and explain appropriate next steps.",
    keyPoints: [
      "Fertility concerns do not, by themselves, establish a diagnosis.",
      "Possible contributing factors vary between individuals.",
      "A healthcare professional can advise whether an assessment is appropriate."
    ],
    source: {
      organisation: "NHS",
      title: "Causes of infertility",
      url: "https://www.nhs.uk/conditions/infertility/causes/"
    },
    reviewStatus: "pending-clinical-review"
  },
  {
    id: "when-to-seek-care",
    title: "Recognising changes that need medical attention",
    summary:
      "New or unexplained changes affecting the testicles or reproductive organs should not be self-diagnosed.",
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
