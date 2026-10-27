# ReproGuide Privacy and Safety Specification

**Version:** 0.1  
**Date:** 27 October 2026  
**Status:** Initial specification — clinical and legal review pending

## 1. Purpose and intended use

ReproGuide is a male reproductive health education and care-navigation prototype. It helps adult users understand general information, identify topics worth discussing with a healthcare professional, and prepare a consultation summary.

It is not a diagnostic device, a clinical decision-support system validated for patient care, or a fertility prediction tool.

All guidance is educational. Users must retain control over whether to prepare or export a consultation summary.

## 2. Permitted outputs

The prototype may:

- Explain general male reproductive health concepts supported by documented sources.
- Explain that reproductive health concerns can have multiple causes requiring professional assessment.
- Suggest that users consider a healthcare consultation when their answers indicate a potentially relevant concern, subject to clinically reviewed rules.
- Explain the purpose of professional evaluation without ordering investigations.
- Help users prepare questions and organise information for a consultation.
- Explain the limitations of educational guidance.
- Present neutral information when the available answers do not support a more specific pathway.

## 3. Prohibited outputs

The prototype must not:

- Diagnose infertility or any other medical condition.
- Predict whether a user can conceive or father a child.
- Generate numerical fertility risk scores or unvalidated risk categories.
- Claim that a particular symptom or lifestyle factor proves infertility.
- Interpret laboratory reports or declare semen parameters normal or abnormal for an individual.
- Recommend prescription medicines, medication doses, supplements or treatment regimens.
- Tell users to start, stop or change prescribed medication.
- Claim that a lifestyle change guarantees improved fertility.
- Claim clinical validation, regulatory approval or improved health outcomes without supporting evidence.
- Present generated or inferred information as an established clinical fact.

## 4. Recommendation safety rules

### Rule S-01 — Evidence required

Every recommendation must map to a documented source, a reviewed content entry and an explicit set of input conditions.

**If evidence is missing, outdated, contradictory or insufficient for the intended use, do not display the recommendation.** Show neutral educational information instead.

### Rule S-02 — No diagnosis by inference

Assessment answers must not be converted into a diagnosis or a fertility prediction.

A combination of answers may support a professionally reviewed educational pathway, but it must not be presented as proof of a medical condition.

### Rule S-03 — Uncertainty must remain visible

Use clear language such as:

- “This information cannot determine your fertility status.”
- “A healthcare professional can assess your individual circumstances.”
- “This educational guidance has limitations.”

Do not use false precision, unsupported probabilities or definitive reassurance.

### Rule S-04 — Insufficient or invalid answers

If required answers are missing, invalid or inconsistent, do not run a recommendation rule that depends on them.

Explain which information is incomplete where appropriate. Permit the user to correct their answers or view general information without completing the assessment.

### Rule S-05 — Potentially urgent concerns

Urgent escalation rules must not be invented by the development team.

Before implementing symptom-based escalation, obtain authoritative clinical guidance, document the exact criteria and wording, and arrange review by an appropriately qualified clinician.

Until that review is complete, do not claim that the prototype can reliably identify or exclude medical emergencies. General educational content must not delay professional or emergency care.

### Rule S-06 — Medication and treatment safety

Responses concerning medication, hormones, supplements or fertility treatment must not trigger treatment recommendations.

Where relevant, advise users to discuss these matters with an appropriate healthcare professional. Never advise independently stopping prescribed medication.

### Rule S-07 — Fail safely

If the application encounters an unexpected error, an unknown answer, or a missing content rule, it must not invent guidance.

Show a neutral error or general-information message and allow the user to retry or exit safely.

## 5. Initial educational pathways

The following are proposed pathways, not clinically approved decision rules.

| Pathway                             | Proposed behaviour                                       | Required safeguard                                   |
| ----------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| General education                   | Present source-supported reproductive health information | No individual diagnosis or prediction                |
| Consultation preparation            | Help organise questions and relevant history             | Do not claim a diagnosis or prescribe tests          |
| Difficulty conceiving               | Explain that professional assessment may be appropriate  | Timing and exceptions require clinical review        |
| Existing test or laboratory concern | Encourage discussion with a qualified professional       | No report interpretation or fertility classification |
| Medication or supplement question   | Encourage a professional discussion                      | No dosing, prescribing or medication changes         |
| Insufficient information            | Provide neutral information or request clarification     | Do not execute unsupported rules                     |

Specific input thresholds and escalation conditions must remain unimplemented until their evidence and clinical applicability have been reviewed.

## 6. Privacy and session-data behaviour

The intended prototype behaviour is:

- Assessment answers remain in application memory by default.
- Real assessment answers are not intentionally written to local storage, session storage, cookies or a database.
- The application does not require an account.
- Assessment answers are not intentionally transmitted to an external API.
- Synthetic demonstration scenarios are clearly labelled and separate from personal assessments.
- A reset control clears the current assessment and any in-memory consultation summary.
- Resetting the interface must not be represented as erasing browser downloads, screenshots, server logs or other copies outside the application's control.

These behaviours must be verified through code inspection and browser testing before they are claimed as implemented.

The prototype must not collect names, contact details or other identifying information unless a documented requirement makes them necessary. The initial MVP should avoid collecting them.

## 7. Consultation summary and export

Before export, users must be able to review the complete summary.

The summary must:

- Contain only information the user has chosen to include.
- Distinguish user-provided information from general educational content.
- Avoid diagnoses, unsupported risk labels and inferred clinical conclusions.
- Explain that the summary is a preparation aid, not a medical report.
- Require an explicit user action to export.
- Avoid automatic upload or sharing.

The interface must tell users that an exported file may contain sensitive information and that its protection depends on where and how they store or share it.

## 8. Synthetic demonstration scenarios

Demonstration cases must use invented, non-identifiable data.

Each scenario must document:

- Scenario identifier and purpose.
- Synthetic inputs.
- Expected educational pathway.
- Expected explanation and limitation.
- Expected behaviour when information is missing or invalid.
- Acceptance-test result.

Demonstration scenarios must not be presented as real patients, clinical trial evidence or proof of clinical effectiveness.

## 9. Security and accessibility safeguards

The prototype should:

- Validate inputs before applying recommendation rules.
- Render user-provided text safely rather than treating it as executable HTML.
- Avoid unnecessary third-party scripts and external data transfers.
- Provide accessible labels, keyboard operation, visible focus and understandable error messages.
- Avoid exposing assessment answers in diagnostic logs or error messages.
- Make privacy and intended-use information available before assessment begins.

These safeguards require implementation and testing; documentation alone does not establish that they are effective.

## 10. Regulatory and legal questions

The project requires further review of:

1. The applicability of the Nigeria Data Protection Act 2023 and relevant Nigeria Data Protection Commission guidance to the prototype and its hosting arrangements.
2. Whether the intended functionality and claims could bring the product within applicable medical-device or software-as-a-medical-device regulation.
3. Applicable consent, transparency, data minimisation, security, retention and user-rights obligations.
4. Hosting-provider logs, access controls, download behaviour and any cross-border data processing.
5. Whether future testing with real participants requires ethics review, clinical oversight or additional permissions.
6. Requirements for clinical review, accountability and incident handling before any real-world pilot.

No legal compliance, regulatory exemption or clinical approval is claimed by this specification.

## 11. Release acceptance criteria

Before a public demonstration release, verify that:

- No diagnosis or fertility prediction is generated.
- No unreviewed clinical recommendation can execute.
- Missing or invalid inputs cannot trigger unsupported guidance.
- Assessment answers are not intentionally persisted.
- No unapproved external transmission of assessment answers occurs.
- Reset clears the current assessment and in-memory summary.
- Export requires user review and explicit action.
- Synthetic scenarios produce the documented expected outputs.
- The privacy notice and limitations match the actual implementation.
- Known limitations and unresolved review requirements are documented.

## 12. Review status

| Area                                 | Status                             |
| ------------------------------------ | ---------------------------------- |
| Permitted and prohibited outputs     | Specified; clinical review pending |
| Evidence-gated recommendation rules  | Specified; implementation pending  |
| Urgent escalation criteria           | Not approved                       |
| In-memory assessment handling        | Required; implementation pending   |
| User-reviewed export                 | Required; implementation pending   |
| Synthetic scenarios                  | Required; test cases pending       |
| Nigerian data protection review      | Pending                            |
| Medical-device regulatory assessment | Pending                            |
| Clinical approval                    | Not obtained                       |

## 13. Revision history

- **Version 0.1 — 27 October 2026:** Initial privacy and safety specification for the ReproGuide prototype.

## 14. Initial Recommendation Rules and Acceptance Tests

**Status:** Proposed; clinical review pending.  
**Implementation status:** Not yet implemented.

### RG-01 — General education

**Input conditions:** The user requests general reproductive health information and no other reviewed pathway takes precedence.

**Expected output:** Source-supported educational content, relevant limitations and optional consultation-preparation guidance.

**Explanation:** General education can help users understand reproductive health without making an individual diagnosis.

**Source:** WHO, _Guideline for the prevention, diagnosis and treatment of infertility_ (2025).

**Limitations:** General information cannot establish an individual's fertility status.

**Suppress when:** The content lacks a documented source, has not received the required review, or another applicable safety rule takes precedence.

### RG-02 — Consultation preparation

**Input conditions:** The user requests help preparing for a reproductive health consultation or reports an ongoing concern.

**Expected output:** A user-reviewed list of questions and relevant information to discuss with a healthcare professional.

**Explanation:** Reproductive history forms part of the clinical evaluation of male infertility.

**Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.

**Limitations:** The tool does not diagnose a condition or prescribe investigations.

**Suppress when:** Required inputs are invalid, or the application cannot distinguish user-provided information from educational content.

### RG-03 — Professional evaluation information

**Input conditions:** The user reports difficulty conceiving, a reproductive health concern, or an existing concern about a test result.

**Expected output:** Explain that professional assessment may be appropriate and that individual circumstances determine the next step.

**Explanation:** Male infertility evaluation may involve reproductive history and clinician-directed investigations.

**Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.

**Limitations:** The prototype cannot diagnose infertility, interpret laboratory reports or determine urgency using unreviewed rules.

**Suppress when:** The input is insufficient, the wording lacks clinical review, or the output would require interpreting an individual test result.

### RG-04 — Uncertainty and safe fallback

**Input conditions:** Answers are missing, inconsistent, outside the rule's scope, or insufficient to support a specific educational pathway.

**Expected output:** Explain that more specific guidance cannot be provided from the available information. Allow the user to correct answers or view general information.

**Explanation:** Withholding unsupported guidance is safer than inferring a medical conclusion from inadequate data.

**Source:** ReproGuide safety requirement, informed by the evidence limitations documented in the clinical content register.

**Limitations:** This fallback cannot rule out an emergency or guarantee that a concern is harmless.

**Suppress when:** Never suppress this safeguard in favour of an unsupported recommendation.

### Acceptance tests

| Test ID | Synthetic input                             | Expected behaviour                            |
| ------- | ------------------------------------------- | --------------------------------------------- |
| RG-T01  | User requests general information           | RG-01, if approved content is available       |
| RG-T02  | User requests consultation preparation      | RG-02                                         |
| RG-T03  | User reports difficulty conceiving          | RG-03, with clinically reviewed wording       |
| RG-T04  | Required answer is missing                  | RG-04                                         |
| RG-T05  | User enters a semen result                  | No interpretation or fertility classification |
| RG-T06  | No rule matches the answers                 | RG-04                                         |
| RG-T07  | A matching rule lacks approved content      | Withhold the rule and use a neutral fallback  |
| RG-T08  | Synthetic case contains conflicting answers | Do not produce an unsupported recommendation  |

All test cases must use synthetic data. Passing these tests demonstrates software behaviour, not clinical validity.

### Release gate

Do not implement or release a recommendation rule until its supporting content has a traceable source, documented rationale, defined limitations, appropriate clinical review and a reproducible acceptance test.

Urgent escalation rules remain out of scope until authoritative criteria and qualified clinical review are available.
