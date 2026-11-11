# ReproGuide Clinical Content Register

**Version:** 0.3
**Date:** 11 November 2026
**Status:** Evidence register updated to reflect current implementation; clinical and legal review pending
**Owner:** ReproGuide project developer
**Previous Version:** 0.2, 10 November 2026

---

## 1. Purpose

This register records the sources, evidence findings, intended use, limitations and review status of clinical and educational content considered for ReproGuide.

ReproGuide is an educational and care-navigation prototype. It is not a diagnostic device, a substitute for professional clinical assessment, or a validated fertility prediction or clinical decision-support system.

The register distinguishes between:

- Educational content currently present in the application.
- Evidence sources identified for possible future content development.
- Proposed clinical guidance that has not been approved for implementation.
- Privacy and legal references requiring separate review.

**Clinical approval rule:** No content may be described as clinically approved until its source, interpretation, user-facing wording, intended application and limitations have been reviewed by an appropriately qualified clinical reviewer.

The presence of a source in this register does not constitute clinical approval.

## 2. Current educational content register

The current application contains three educational topics defined in `js/content.js`.

The content module declares its review status as `pending-clinical-review`. All three topics retain this status.

### CR-008 — Understanding male reproductive health

- **Application topic ID:** `reproductive-health-basics`
- **Application title:** Understanding male reproductive health
- **Source:** MedlinePlus, US National Library of Medicine, _Sperm release pathway_.
- **URL:** https://medlineplus.gov/ency/anatomyvideos/000121.htm
- **Source finding:** The source describes the pathway through which sperm are produced, mature and transported.
- **Current application summary:** The male reproductive system includes organs and structures that support sperm production, maturation and transport. Reproductive health is one part of overall health, and individual concerns may require professional assessment.
- **Current key points:**
  - The male reproductive system has roles in sperm production, maturation and transport.
  - Reproductive health is one part of overall health.
  - Individual symptoms or concerns may require assessment by a qualified healthcare professional.
  - Educational information cannot establish whether an individual has a medical condition.
- **Intended use:** General education about male reproductive health.
- **Limitations:** The application must not use general educational material to establish an individual's diagnosis, reproductive status or fertility.
- **Source verification status:** Source identified and checked.
- **Clinical review status:** Pending.
- **Implementation status:** Present in `js/content.js`; not clinically approved.

### CR-009 — Understanding fertility

- **Application topic ID:** `fertility-fundamentals`
- **Application title:** Understanding fertility
- **Source:** World Health Organization (WHO), _Guideline for the prevention, diagnosis and treatment of infertility_.
- **Publication date:** 28 November 2025.
- **URL:** https://www.who.int/publications/i/item/9789240115774
- **Source finding:** WHO guidance addresses infertility as a reproductive health concern and recognises that relevant factors may affect either partner. Some fertility concerns remain unexplained.
- **Current application summary:** Fertility is influenced by reproductive health factors affecting one or both partners. General educational information cannot determine an individual's fertility status. A qualified healthcare professional can explain appropriate assessment options.
- **Current key points:**
  - Fertility concerns do not, by themselves, establish a diagnosis.
  - Factors affecting fertility may involve either partner.
  - Some fertility concerns remain unexplained.
  - A qualified healthcare professional can advise whether an assessment is appropriate.
- **Intended use:** General education and encouragement of informed professional consultation.
- **Limitations:** The application must not assign a cause of infertility, calculate fertility likelihood or label an individual as fertile or infertile.
- **Source verification status:** Publication and purpose checked.
- **Clinical review status:** Pending.
- **Implementation status:** Present in `js/content.js`; not clinically approved.

### CR-010 — Recognising changes that need medical attention

- **Application topic ID:** `when-to-seek-care`
- **Application title:** Recognising changes that need medical attention
- **Source:** NHS, _Testicle lumps and swellings_.
- **URL:** https://www.nhs.uk/symptoms/testicle-lumps-and-swellings/
- **Supplementary source:** NHS, _Testicle pain_. https://www.nhs.uk/symptoms/testicle-pain/
- **Source finding:** New lumps, swelling and persistent discomfort should be assessed by a healthcare professional. Sudden, severe testicular pain may require immediate emergency assessment.
- **Current application summary:** New or unexplained changes affecting the testicles should be assessed by a qualified healthcare professional. Some symptoms may require urgent medical attention. This guide cannot determine the cause or urgency of an individual's symptoms.
- **Current key points:**
  - A new testicular lump, swelling or persistent discomfort should be assessed by a healthcare professional.
  - Sudden, severe testicular pain requires immediate emergency medical assessment.
  - When symptoms are concerning or their urgency is unclear, seek professional medical advice rather than relying on this educational guide.
- **Intended use:** Encourage appropriate professional assessment rather than self-diagnosis.
- **Limitations:** The application must not diagnose the cause of symptoms or replace emergency or professional medical services. NHS service references and emergency arrangements must not be presented as Nigerian service instructions.
- **Source verification status:** Sources identified and checked.
- **Clinical review status:** Pending, including review of locally appropriate care-navigation wording.
- **Implementation status:** Present in `js/content.js`; not clinically approved.

## 3. Additional evidence sources for future development

The following entries are research and evidence references. They are not currently implemented as personalised clinical guidance.

### CR-001 — Definition of infertility

- **Source:** World Health Organization (WHO), _Guideline for the prevention, diagnosis and treatment of infertility_.
- **Publication date:** 28 November 2025.
- **URL:** https://www.who.int/publications/i/item/9789240115774
- **Source finding:** WHO defines infertility as a disease of the male or female reproductive system characterised by failure to achieve pregnancy after 12 months or more of regular unprotected sexual intercourse.
- **Proposed user-facing wording:** "Infertility can involve male factors, female factors or unexplained circumstances. A digital questionnaire cannot determine whether an individual or couple has infertility."
- **Intended use:** General education and explanation of the clinical definition.
- **Limitations:** The definition must not be presented as a universal waiting rule for every individual. Individual circumstances may warrant earlier professional assessment.
- **Source verification status:** Publication and definition checked.
- **Clinical review status:** Pending.
- **Implementation status:** Research reference; not implemented as a separate application topic or clinical rule.

### CR-002 — Initial male fertility evaluation

- **Source:** American Urological Association (AUA) and American Society for Reproductive Medicine (ASRM), _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.
- **Publication:** Original guideline published in 2020; amended 2024.
- **URL:** https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility
- **Source finding:** The guideline addresses male reproductive history, physical examination and diagnostic testing as part of the evaluation of an infertile couple. Semen analysis is an important component of this evaluation.
- **Proposed user-facing wording:** "A healthcare professional can review relevant reproductive and medical history and determine whether semen analysis or other investigations are appropriate."
- **Intended use:** Explain the purpose of professional assessment without ordering tests or interpreting individual results.
- **Limitations:** ReproGuide must not prescribe investigations, diagnose a cause or independently determine which tests an individual requires.
- **Source verification status:** Amended guideline identified and checked.
- **Clinical review status:** Pending, including consideration of local clinical applicability.
- **Implementation status:** Research reference; no personalised assessment or test-ordering functionality.

### CR-003 — Interpretation of semen analysis

- **Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.
- **Publication:** Original guideline published in 2020; amended 2024.
- **URL:** https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility
- **Source finding:** Semen parameters vary. Individual semen parameters, considered in isolation, are generally not highly predictive of fertility or diagnostic of infertility.
- **Proposed user-facing wording:** "Semen analysis is one part of a clinical assessment. Results need to be interpreted in context by a qualified healthcare professional."
- **Intended use:** Discourage definitive conclusions based on an isolated laboratory value.
- **Limitations:** The prototype must not calculate semen scores, interpret uploaded laboratory reports or predict fertility.
- **Source verification status:** Amended guideline finding identified and checked.
- **Clinical review status:** Pending.
- **Implementation status:** General safety principle; no semen-analysis interpretation functionality.

### CR-004 — Reproductive history and associated factors

- **Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.
- **Publication:** Original guideline published in 2020; amended 2024.
- **URL:** https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility
- **Source finding:** Male reproductive evaluation considers relevant reproductive and medical history. Specific factors and their clinical significance require appropriate assessment.
- **Proposed user-facing wording:** "Some medical conditions, medicines and exposures may be relevant to reproductive health. Their significance depends on the individual situation and may require professional review."
- **Intended use:** Support preparation for a professional consultation.
- **Limitations:** Do not assign a risk category from an isolated lifestyle response. Do not advise users to stop prescribed medication or start supplements.
- **Source verification status:** Amended guideline identified; individual factor claims require separate evidence review.
- **Clinical review status:** Pending.
- **Implementation status:** Proposed; no individual risk rules approved.

### CR-005 — Treatment and supplements

- **Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part II_.
- **Publication:** Original guideline published in 2020; amended 2024.
- **URL:** https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility
- **Source finding:** The guideline describes the clinical utility of supplements such as antioxidants and vitamins for treating male infertility as questionable and states that evidence is inadequate to recommend specific agents.
- **Proposed user-facing wording:** "Do not assume that fertility supplements are effective or appropriate for an individual. Discuss treatment-related questions with a qualified healthcare professional."
- **Intended use:** Avoid unsupported treatment claims and encourage informed professional consultation.
- **Limitations:** No supplement recommendations, medication dosing, prescriptions or treatment selection.
- **Source verification status:** Amended guideline statement identified and checked.
- **Clinical review status:** Pending.
- **Implementation status:** Safety boundary only; treatment and supplement recommendations are not provided.

### CR-006 — WHO global infertility guidance

- **Source:** WHO, _Guideline for the prevention, diagnosis and treatment of infertility_.
- **Publication date:** 28 November 2025.
- **URL:** https://www.who.int/publications/i/item/9789240115774
- **Source finding:** The guideline provides evidence-based recommendations concerning infertility prevention, diagnosis and treatment. It is intended to support countries in adopting, adapting or updating national clinical guidance.
- **Proposed user-facing wording:** No direct patient-facing recommendation is approved from this entry alone.
- **Intended use:** Primary evidence source for future content review and clinical pathway development.
- **Limitations:** Global recommendations must not automatically be treated as locally approved Nigerian clinical protocols.
- **Source verification status:** Publication and purpose checked; recommendation-level review remains outstanding.
- **Clinical review status:** Pending.
- **Implementation status:** Research reference only.

## 4. Privacy and legal reference

### CR-007 — Privacy and reproductive health information

- **Source:** Nigeria Data Protection Act 2023.
- **Reference:** https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf
- **Relevant provision:** The Act's definition of sensitive personal data includes information relating to an individual's health status and sex life.
- **Intended use:** Inform privacy-by-design decisions and future review of the handling of reproductive health information.
- **Proposed user-facing wording:** Any privacy notice must accurately describe the actual data collected, its purpose, where it is processed, whether it is retained or transmitted, and the user's available controls.
- **Limitations:** A privacy notice or technical inspection is not proof of legal compliance. Hosting arrangements, third-party services, browser behaviour, logs, retention, user rights and applicable legal obligations require further assessment.
- **Source verification status:** Legislation identified; detailed legal analysis outstanding.
- **Legal review status:** Pending.
- **Implementation status:** Privacy design reference; not a legal compliance determination.

## 5. Content and evidence controls

Every educational statement considered for implementation must have:

1. A traceable source and publication or review date, where available.
2. A documented explanation of how the source supports the wording.
3. A defined intended use and explicit exclusions.
4. A stated limitation or uncertainty where relevant.
5. A documented clinical review status.
6. An appropriate software acceptance test where the statement or its presentation is subject to application logic.
7. A revision history when its wording, source or intended use changes.

Where sources disagree, evidence is insufficient, or applicability is uncertain, ReproGuide must not invent a consensus. The content should be withheld or replaced by neutral wording encouraging appropriate professional guidance.

Source verification does not equal clinical approval.

## 6. Clinical and legal review log

| Item                                     | Status                                           |
| ---------------------------------------- | ------------------------------------------------ |
| MedlinePlus Sperm release pathway source | Identified and checked                           |
| WHO infertility guideline                | Publication and purpose checked                  |
| NHS testicle lumps and swellings source  | Identified and checked                           |
| NHS testicle pain source                 | Identified and checked                           |
| WHO infertility definition               | Publication and definition checked               |
| AUA/ASRM amended 2024 guideline, Part I  | Guideline identified and checked                 |
| AUA/ASRM amended 2024 guideline, Part II | Guideline identified and checked                 |
| Nigeria Data Protection Act 2023         | Legislation identified; legal review outstanding |
| Current application educational wording  | Clinical review outstanding                      |
| Local care-navigation wording            | Clinical review outstanding                      |
| Urgent escalation wording                | Clinical and local pathway review outstanding    |
| Personalised recommendation pathways     | Not approved; disabled                           |
| Semen-analysis interpretation            | Not implemented                                  |
| Treatment or supplement recommendations  | Not implemented                                  |

## 7. Implementation and safety boundaries

The current application contains three educational topics in `js/content.js`. Their review status is `pending-clinical-review`.

The current application does not provide:

- A diagnosis or fertility prediction.
- A validated clinical risk score.
- Semen-analysis interpretation.
- Treatment or supplement recommendations.
- Personalised clinical recommendations.
- A complete guided assessment workflow.

The appointment-preparation pathway allows users to select general questions for discussion with a healthcare professional. It does not transmit a consultation summary to a healthcare professional.

The application must not present proposed evidence entries as implemented clinical functionality.

Any future clinical content activation requires appropriate review, documented approval, implementation checks and testing before release.

## 8. Revision history

- **Version 0.1 — 27 October 2026:** Initial evidence register prepared for prototype specification. No clinical reviewer approval claimed.
- **Version 0.2 — 10 November 2026:** Register reorganised to distinguish current educational content from proposed evidence sources and privacy references. Implementation statuses and clinical review boundaries clarified. No clinical or legal approval claimed.
- **Version 0.3 — 11 November 2026:** Updated application source attribution and educational wording for CR-008, CR-009 and CR-010. Updated AUA/ASRM references to the amended 2024 guideline and expanded the review log. No clinical or legal approval claimed.
