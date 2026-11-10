# ReproGuide Privacy and Safety Specification

**Version:** 0.2
**Date:** 10 November 2026
**Status:** Specification updated to reflect current implementation; clinical, legal and security review pending
**Previous Version:** 0.1, 27 October 2026

---

## 1. Purpose and intended use

ReproGuide is a male reproductive health education and care-navigation prototype. It helps adult users understand general reproductive health information, identify topics worth discussing with a healthcare professional, and prepare questions for a consultation.

Its intended value is to help users move from uncertainty to an informed next step through accessible, explainable educational information and clinician-ready preparation.

ReproGuide is not a diagnostic device, a clinically validated decision-support system, or a fertility prediction tool.

All current educational content is subject to clinical review. The prototype must not be represented as providing personalised medical advice.

This specification defines permitted and prohibited behaviour, privacy expectations, safety controls, implementation status and requirements for future development.

## 2. Permitted outputs

The prototype may:

- Explain general male reproductive health concepts supported by documented sources.
- Explain that reproductive health concerns can have different causes and may require professional assessment.
- Encourage appropriate discussion with a healthcare professional without diagnosing a condition.
- Explain the general purpose of professional evaluation without ordering investigations.
- Help users select questions for discussion with a healthcare professional.
- Present a preparation summary based on questions selected by the user.
- Explain the limitations of educational guidance.
- Present neutral information when available evidence does not support a more specific response.

Any future personalised educational pathway must have documented evidence, appropriate clinical review, defined input conditions and tested safety behaviour before implementation.

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
- Suggest that completing an assessment can establish an individual's reproductive or fertility status.
- Present unreviewed rules as clinically approved recommendations.

## 4. Recommendation safety rules

The following rules govern any future recommendation functionality. They do not imply that personalised recommendations are currently active.

### Rule S-01 — Evidence required

Every recommendation must map to:

1. A documented and traceable evidence source.
2. A reviewed content entry.
3. An explicit set of input conditions.
4. A defined intended use and limitation.
5. A reproducible acceptance test.

If evidence is missing, outdated, contradictory or insufficient for the intended use, the application must withhold the recommendation and use neutral educational information instead.

### Rule S-02 — No diagnosis by inference

Assessment answers must not be converted into a diagnosis or fertility prediction.

A combination of answers may support a professionally reviewed educational pathway, but it must not be presented as proof of a medical condition.

### Rule S-03 — Uncertainty must remain visible

Use clear language such as:

- "This information cannot determine your fertility status."
- "A healthcare professional can assess your individual circumstances."
- "This educational guidance has limitations."

Do not use false precision, unsupported probabilities or definitive reassurance.

### Rule S-04 — Insufficient or invalid answers

If required answers are missing, invalid or inconsistent, the application must not execute a recommendation rule that depends on them.

Where appropriate, explain which information is incomplete and allow the user to correct their answers or access general educational information without completing an assessment.

Unanswered values must remain `null` rather than being assigned assumed values.

### Rule S-05 — Potentially urgent concerns

Urgent escalation rules must not be invented by the development team.

Before implementing symptom-based escalation, obtain authoritative clinical guidance, document the exact criteria and wording, and arrange review by an appropriately qualified clinician.

Until this review is complete, the prototype must not claim that it can reliably identify or exclude medical emergencies.

General educational information must not delay professional or emergency care.

Urgent escalation wording must also be reviewed for local applicability. International healthcare-service instructions must not automatically be presented as Nigerian service instructions.

### Rule S-06 — Medication and treatment safety

Responses concerning medication, hormones, supplements or fertility treatment must not trigger treatment recommendations.

Where relevant, encourage users to discuss these matters with an appropriate healthcare professional. Never advise users to independently stop prescribed medication.

### Rule S-07 — Fail safely

If the application encounters an unexpected error, an unknown answer or a missing content rule, it must not invent guidance.

Show a neutral error or general-information message and allow the user to retry or exit safely.

## 5. Educational pathways and implementation status

The following table distinguishes current application functionality from proposed future pathways.

| Pathway                             | Current or proposed behaviour                                          | Status                                                     |
| ----------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| General education                   | Present three source-attributed educational topics                     | Implemented; clinical review pending                       |
| Consultation preparation            | Allow selection of general questions and display a preparation summary | Implemented                                                |
| Guided check-in                     | Collect structured answers and apply reviewed educational rules        | Disabled                                                   |
| Difficulty conceiving               | Explain that professional assessment may be appropriate                | Proposed; no personalised rule implemented                 |
| Existing test or laboratory concern | Encourage professional discussion without interpreting results         | Proposed; no interpretation functionality                  |
| Medication or supplement question   | Encourage professional discussion without treatment advice             | Safety boundary specified; no recommendation functionality |
| Insufficient information            | Withhold unsupported guidance and use a neutral fallback               | Required for future assessment pathways                    |

The application currently supports general education and appointment preparation.

The guided check-in pathway is disabled. The application does not currently collect personal assessment answers through its user interface or activate personalised clinical recommendations.

The assessment module provides validated in-memory state handling for future development and automated testing. Its existence does not mean that a complete guided assessment is available to users.

Specific input thresholds and escalation conditions must remain unimplemented until their evidence and clinical applicability have been reviewed.

## 6. Privacy and session-data behaviour

### 6.1 Required privacy principles

The prototype follows these intended privacy principles:

- Data minimisation.
- No unnecessary collection of identifying information.
- No account requirement for the current prototype.
- No intentional persistence of assessment answers in browser storage.
- No intentional transmission of assessment answers to external APIs.
- Clear separation between synthetic demonstration data and personal assessments.
- User control over the current application session.
- Transparent explanation of the prototype's limitations.

The prototype should not collect names, contact details or other identifying information unless a documented requirement makes them necessary.

### 6.2 Current implementation

The following describes the implementation inspected as at 10 November 2026:

- The assessment module maintains its state in JavaScript memory.
- The assessment module provides validation and reset functions.
- The current user interface does not collect personal assessment answers.
- The appointment-preparation pathway stores selected question identifiers in application state and displays a preparation summary.
- The current application does not intentionally write assessment answers to `localStorage`, `sessionStorage`, cookies or a database.
- The application does not intentionally transmit assessment answers to an external API.
- Synthetic scenarios are used for automated testing and are separate from personal assessments.
- The application provides session-reset behaviour.
- The appointment-preparation summary is displayed within the application and is not transmitted to a healthcare professional.

Code inspection and browser testing found no intentional browser-storage or external API transmission of assessment answers in the inspected application.

These checks are practical verification activities, not a formal privacy audit, security audit, penetration test or guarantee of confidentiality.

### 6.3 Reset limitations

Resetting the application clears the current application session state within the scope of the implemented reset functionality.

It must not be represented as erasing:

- Browser downloads.
- Screenshots or photographs.
- Copies independently saved or shared by a user.
- Hosting-provider or infrastructure logs.
- Browser, operating-system or network records outside the application's control.

### 6.4 Future privacy requirements

Before collecting real assessment answers or introducing backend services, review:

- The lawful basis and purpose for processing.
- Appropriate transparency and privacy notices.
- Data minimisation and retention.
- Access controls and security.
- User rights and available controls.
- Hosting arrangements and third-party services.
- Cross-border data processing, where applicable.
- Incident handling and breach-management procedures.

## 7. Consultation summary and export

### 7.1 Current implementation

The current appointment-preparation pathway allows users to select general questions for discussion with a healthcare professional.

The application displays a preparation summary based on those selections.

The current implementation does not provide:

- A consultation-summary export function.
- Automatic upload or sharing.
- Transmission of the summary to a healthcare professional.
- A downloadable medical report.

The displayed summary is a preparation aid, not a medical report or clinical assessment.

### 7.2 Future export requirements

If export functionality is introduced, users must be able to review the complete summary before exporting it.

The summary must:

- Contain only information the user has chosen to include.
- Distinguish user-provided information from general educational content.
- Avoid diagnoses, unsupported risk labels and inferred clinical conclusions.
- Explain that the summary is a preparation aid, not a medical report.
- Require an explicit user action to export.
- Avoid automatic upload or sharing.

The interface must explain that an exported file may contain sensitive information and that its protection depends on where and how the user stores or shares it.

Export functionality must not be described as implemented until it has been developed and tested.

## 8. Synthetic demonstration scenarios

Demonstration cases must use invented, non-identifiable data.

The current project includes four synthetic scenarios in `js/scenarios.js`.

These scenarios support automated testing and demonstration of assessment-state and safety behaviour. They are not real patient records.

Each scenario should document:

- Scenario identifier and purpose.
- Synthetic inputs.
- Expected educational pathway or application behaviour.
- Expected explanation and limitation.
- Expected behaviour when information is missing or invalid.
- Acceptance-test result.

Demonstration scenarios must not be presented as real patients, clinical trial evidence or proof of clinical effectiveness.

The presence of synthetic scenarios does not establish that personalised recommendations are clinically valid.

## 9. Security and accessibility safeguards

The prototype should:

- Validate inputs before applying any future recommendation rules.
- Render user-provided text safely rather than treating it as executable HTML.
- Avoid unnecessary third-party scripts and external data transfers.
- Provide accessible labels, keyboard operation, visible focus and understandable error messages.
- Avoid exposing assessment answers in diagnostic logs or error messages.
- Make privacy and intended-use information available before any future assessment begins.
- Keep application state separate between demonstration scenarios.
- Provide a reliable reset mechanism.

The current implementation uses vanilla HTML, CSS and JavaScript ES modules without an application framework or external AI service.

Manual accessibility and browser checks have been performed, including keyboard navigation, visible focus, zoom and selected screen-reader announcements.

These checks do not constitute formal WCAG conformance certification.

Security and privacy safeguards require implementation and testing. Documentation alone does not establish their effectiveness.

No formal security audit, penetration test or independent accessibility audit is claimed.

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
- Unanswered values remain `null` where applicable.
- Assessment answers are not intentionally persisted.
- No unapproved external transmission of assessment answers occurs.
- Reset clears the current application state within the documented scope.
- Synthetic scenarios produce their documented expected outputs.
- Educational content retains its documented review status.
- The privacy notice and limitations match the actual implementation.
- Any future export requires user review and explicit action.
- Known limitations and unresolved review requirements are documented.

Any future release that introduces personal assessment collection, personalised guidance, backend processing or export functionality must undergo additional privacy, safety and acceptance testing.

## 12. Review status

| Area                                             | Status                                          |
| ------------------------------------------------ | ----------------------------------------------- |
| Permitted and prohibited outputs                 | Specified; clinical review pending              |
| Evidence-gated recommendation rules              | Specified; implementation pending               |
| Urgent escalation criteria                       | Not approved                                    |
| Assessment state and validation module           | Implemented; in-memory handling                 |
| User-facing guided assessment                    | Disabled                                        |
| Personal assessment answer collection            | Not implemented in current UI                   |
| Personalised recommendations                     | Disabled                                        |
| Appointment preparation                          | Implemented                                     |
| Consultation summary export                      | Not implemented                                 |
| Synthetic scenarios                              | Four implemented for testing                    |
| Automated safety and assessment tests            | 24 passing                                      |
| Browser storage and external transmission checks | Practical inspection completed; no formal audit |
| Nigerian data protection review                  | Pending                                         |
| Medical-device regulatory assessment             | Pending                                         |
| Clinical approval                                | Not obtained                                    |
| Formal security audit                            | Not completed                                   |

## 13. Revision history

- **Version 0.1 — 27 October 2026:** Initial privacy and safety specification for the ReproGuide prototype.
- **Version 0.2 — 10 November 2026:** Specification updated to distinguish current application functionality from proposed future capabilities. Assessment-state handling, appointment preparation, synthetic scenarios, privacy behaviour and release limitations clarified. No clinical, legal or security approval claimed.

## 14. Proposed Recommendation Rules and Acceptance Tests

**Status:** Proposed; clinical review pending.  
**Implementation status:** Not implemented as active personalised recommendation rules.

The following rules define intended future behaviour. They are not currently active application features.

### RG-01 — General education

**Input conditions:** The user requests general reproductive health information and no other reviewed pathway takes precedence.

**Expected output:** Source-attributed educational content, relevant limitations and optional consultation-preparation guidance.

**Explanation:** General education can help users understand reproductive health without making an individual diagnosis.

**Source:** WHO, _Guideline for the prevention, diagnosis and treatment of infertility_ (2025).

**Limitations:** General information cannot establish an individual's fertility status.

**Suppress when:** The content lacks a documented source, has not received the required review, or another applicable safety rule takes precedence.

### RG-02 — Consultation preparation

**Input conditions:** The user requests help preparing for a reproductive health consultation.

**Expected output:** A user-reviewed list of general questions to discuss with a healthcare professional.

**Explanation:** Reproductive history forms part of the clinical evaluation of male infertility.

**Source:** AUA/ASRM, _Diagnosis and Treatment of Infertility in Men: Guideline Part I_.

**Limitations:** The tool does not diagnose a condition or prescribe investigations.

**Suppress when:** Required inputs are invalid, or the application cannot distinguish user-provided information from educational content.

**Current implementation note:** General appointment preparation is available, but this does not constitute an active personalised clinical recommendation.

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

**Source:** ReproGuide safety requirement, informed by the evidence limitations documented in the Clinical Content Register.

**Limitations:** This fallback cannot rule out an emergency or guarantee that a concern is harmless.

**Suppress when:** Never suppress this safeguard in favour of an unsupported recommendation.

### Acceptance tests

| Test ID | Synthetic input                             | Expected behaviour                                                  |
| ------- | ------------------------------------------- | ------------------------------------------------------------------- |
| RG-T01  | User requests general information           | Display available educational content with its limitations          |
| RG-T02  | User requests consultation preparation      | Display selected preparation questions and summary                  |
| RG-T03  | User reports difficulty conceiving          | No unapproved personalised recommendation; neutral information only |
| RG-T04  | Required answer is missing                  | Withhold any rule dependent on the missing answer                   |
| RG-T05  | User enters a semen result                  | No interpretation or fertility classification                       |
| RG-T06  | No rule matches the answers                 | Use a neutral fallback                                              |
| RG-T07  | A matching rule lacks approved content      | Withhold the rule and use a neutral fallback                        |
| RG-T08  | Synthetic case contains conflicting answers | Do not produce an unsupported recommendation                        |

All test cases must use synthetic data. Passing software tests demonstrates expected software behaviour, not clinical validity.

### Release gate

Do not implement or release a personalised recommendation rule until its supporting content has a traceable source, documented rationale, defined limitations, appropriate clinical review and a reproducible acceptance test.

Urgent escalation rules remain out of scope until authoritative criteria and qualified clinical review are available.

Any future functionality involving real user health information, clinical recommendations, export or external data processing must undergo the relevant additional safety, privacy, legal and technical review before release.
