# ReproGuide — Product Requirements Specification

# ReproGuide — Product Requirements Specification

**Challenge:** Future Health Digital Innovation Challenge — Male Reproductive Health
**Document Version:** 0.2
**Status:** Approved baseline; implementation status updated
**Last Updated:** 9 November 2026
**Previous Baseline:** Version 0.1, 27 October 2026

---

## 1. Product Overview

ReproGuide is a male reproductive health education and care-navigation prototype developed for the Future Health Digital Innovation Challenge.

It helps men move from uncertainty to an informed next step through accessible, explainable educational information and clinician-ready appointment preparation.

The product is designed to support informed conversations with qualified health professionals. It is not a diagnostic tool and does not replace professional medical assessment.

**Product slogan:** Understand. Prepare. Take the Next Step.

## 2. Problem Statement

Men seeking information about reproductive health may encounter fragmented, confusing, or difficult-to-interpret information. Uncertainty about symptoms, reproductive health concerns, or how to prepare for a consultation can make it harder to identify an appropriate next step.

ReproGuide aims to address this problem by providing accessible educational content, transparent limitations, and practical support for preparing questions for a healthcare professional.

## 3. Target Users

The intended users are adult men who:

- Want accessible information about male reproductive health.
- Are preparing to discuss a reproductive health concern with a qualified professional.
- Want help organising questions before a healthcare consultation.
- Need clear explanations of the prototype's purpose, limitations, and privacy approach.

Demonstrations and automated tests may use synthetic scenarios. These scenarios do not represent real patients.

## 4. Product Objectives

ReproGuide aims to:

1. Provide accessible, understandable male reproductive health education.
2. Help users identify an appropriate next step without presenting the application as a diagnostic service.
3. Support preparation for conversations with healthcare professionals.
4. Make the basis and limitations of any educational guidance transparent.
5. Minimise the collection and handling of sensitive personal information.
6. Provide a functional, testable prototype suitable for demonstration.
7. Establish a foundation for future clinical review, evaluation, and potential pilot deployment.

These are product objectives. They should not be interpreted as claims that clinical effectiveness or health outcomes have already been demonstrated.

## 5. Functional Requirements

### FR-01: Welcome and Intended Use

The application shall provide a welcome experience that explains:

- The purpose of ReproGuide.
- The educational and care-navigation nature of the application.
- Its intended users.
- Its limitations, including that it does not diagnose medical conditions.
- How users can navigate the available pathways.

**Implementation status:** Implemented in the current welcome experience. The welcome screen and pathway navigation are available.

### FR-02: Guided Educational Assessment

The planned assessment experience shall:

- Allow users to select an appropriate assessment goal.
- Present questions in a clear sequence.
- Validate permitted responses.
- Allow users to review or correct their responses.
- Preserve unanswered values as unanswered rather than inventing responses.

**Implementation status:** Partially implemented. The assessment module contains state management, approved goals, response validation, and reset functionality. A complete guided assessment interface is not currently available to users. Personal assessment answers are not collected through the current interface.

### FR-03: Explainable Educational Guidance

The planned guidance capability shall:

- Use documented, deterministic rules.
- Explain the basis of any guidance presented.
- Identify relevant educational sources.
- State the limitations and uncertainty of the guidance.
- Direct users towards appropriate professional assessment where relevant.

**Implementation status:** Partially implemented. A recommendation-engine foundation and safe fallback behaviour exist. Personalised clinical recommendations remain disabled pending appropriate clinical review and validation. The current application does not provide an active personalised clinical recommendation service.

### FR-04: Consultation Preparation

The application shall help users prepare for a healthcare consultation by allowing them to select relevant questions and review a summary.

The application must not imply that a summary has been transmitted to a healthcare professional.

Future versions may support editing, copying, or exporting a user-reviewed summary, subject to appropriate privacy safeguards.

**Implementation status:** Partially implemented. Users can select from seven predefined appointment questions and view an updated summary. Direct editing, copying, and exporting are not currently implemented.

### FR-05: Privacy and Session Reset

The prototype shall:

- Avoid requiring user accounts.
- Avoid persistent storage of assessment responses by default.
- Keep assessment state in application memory.
- Avoid application-level transmission of assessment answers.
- Provide a way to reset the current session.
- Explain relevant privacy limitations to users.

**Implementation status:** Implemented for the current prototype, subject to the limitations described in Section 8. The application uses in-memory state, does not intentionally persist assessment answers in browser storage, and provides a session reset function. These measures have been inspected and tested but do not constitute a formal security audit or a guarantee of confidentiality.

### FR-06: Synthetic Demonstration Scenarios

The prototype shall include predefined synthetic scenarios to support repeatable demonstrations and software testing.

Scenarios shall not be presented as real patient records or used to imply clinical validation.

**Implementation status:** Implemented for automated testing. Four synthetic scenarios are available in the scenario module and are exercised by automated tests. They are not currently selectable through the application interface.

### FR-07: Accessibility and Responsive Design

The application shall:

- Use semantic HTML where appropriate.
- Support keyboard navigation.
- Provide visible focus indicators.
- Use understandable labels and instructions.
- Support common desktop and mobile viewport sizes.
- Remain usable at increased browser zoom levels.

**Implementation status:** Implemented and practically tested. Keyboard navigation, focus visibility, responsive layouts, zoom behaviour, and selected screen-reader interactions have been checked. These checks do not constitute formal WCAG conformance certification.

### FR-08: Technical and Product Documentation

The project shall maintain documentation covering:

- Product requirements.
- Clinical content and source references.
- Privacy and safety boundaries.
- Application architecture.
- Assessment data structures.
- Setup, testing, and known limitations.

**Implementation status:** Substantially implemented. The project includes a README and supporting product, clinical, privacy, architecture, and data-model documents. Documentation alignment and further verification remain in progress.

## 6. Non-Functional Requirements

### 6.1 Usability

- The interface should use clear, accessible language.
- Navigation should be predictable.
- Important limitations should be visible and understandable.
- The application should support common desktop and mobile screen sizes.

### 6.2 Technical Constraints

- The initial prototype shall use HTML, CSS, and vanilla JavaScript ES modules.
- No frontend framework shall be introduced without an approved project decision.
- The prototype should run in a modern browser.
- The initial application should not depend on paid APIs or services.
- Automated tests should use the Node.js built-in test runner.

### 6.3 Reliability and Explainability

- Implemented application logic should behave deterministically where applicable.
- Invalid inputs should be rejected safely.
- Unanswered values should remain unanswered.
- Any future guidance rules should be documented and explainable.
- The application should not imply certainty where evidence or information is insufficient.

### 6.4 Privacy

- Sensitive assessment information should not be transmitted by the application.
- Browser storage should not be used for assessment answers unless a separately reviewed requirement authorises it.
- Synthetic data should be used for demonstrations and automated testing.

## 7. Clinical and Safety Boundaries

ReproGuide is an educational and care-navigation prototype. It is not a medical device or diagnostic service.

The prototype shall not:

- Diagnose reproductive health conditions.
- Predict an individual's fertility or probability of conception.
- Interpret semen analysis or other clinical test results as a diagnosis.
- Recommend treatments, medications, or supplements.
- Present unvalidated questionnaires or scoring systems as clinically validated screening tools.
- Present automated educational rules as a substitute for professional judgement.

Clinical content must be supported by credible sources and clearly identified as pending clinical review where review has not been completed.

Users should be encouraged to consult qualified healthcare professionals for personal medical concerns.

Any future urgent-care or escalation guidance must be clinically reviewed before implementation.

## 8. Privacy and Data Governance

The current prototype is designed to minimise the handling of sensitive information.

Its present approach is:

- No user account or application backend.
- Assessment state held in JavaScript memory.
- No intentional persistence of assessment answers in browser storage.
- No application-level transmission of assessment answers.
- Session reset functionality.
- Synthetic scenarios for automated testing.

The prototype has not undergone a formal security audit, penetration test, privacy impact assessment, or regulatory compliance assessment.

Users should not enter real or sensitive personal health information into the prototype.

If summary export or other data-sharing capabilities are introduced in a future version, the application must explain what information is included, where it may go, and what control the user has over sharing it. Exported files may remain on the user's device or be accessible to others who can access those files.

No claim of compliance with a particular health-data protection or medical-device regulatory framework is made at this stage.

## 9. Technical Architecture

### 9.1 Current Technology

The prototype uses:

- HTML5 for application structure.
- CSS3 for styling and responsive layouts.
- Vanilla JavaScript ES modules for application behaviour.
- Node.js built-in test runner for automated tests.
- Git and GitHub for source control.
- Python's built-in HTTP server for local development.

### 9.2 Application Structure

The application separates interface behaviour, assessment state, educational content, recommendation logic, and synthetic test scenarios into separate modules.

The current project includes:

- `index.html`
- `css/styles.css`
- `js/app.js`
- `js/assessment.js`
- `js/recommendation-engine.js`
- `js/scenarios.js`
- `js/content.js`
- `tests/reproguide.test.js`

Supporting product and technical documentation is maintained in the `docs` directory.

### 9.3 Current Architecture Boundaries

The initial prototype does not include:

- An application backend.
- User authentication or accounts.
- A cloud database.
- An external AI service or API.
- Electronic health record integration.
- Automated clinical referrals.
- An operational personalised clinical recommendation service.

GitHub Pages may be used for public demonstration, subject to deployment and functionality verification.

## 10. Testing Requirements

Testing shall cover the implemented application and its safety boundaries.

### 10.1 Automated Testing

Automated tests should verify:

- Assessment goals and permitted values.
- Input validation and invalid-input handling.
- Appointment question selection rules.
- Session reset behaviour.
- Synthetic scenario availability and isolation.
- Safe fallback behaviour.
- Restrictions on personalised clinical results.

**Current evidence:** The automated test suite contains 24 tests, all of which passed in the latest recorded run.

### 10.2 Application Testing

Practical browser checks should cover:

- Initial application loading.
- Navigation between available pathways.
- Educational content display.
- Appointment question selection and summary updates.
- Clearing selections.
- Session reset.
- Disabled guided check-in behaviour.
- Browser console errors.
- Responsive layouts and zoom.
- Keyboard navigation and relevant screen-reader interactions.

### 10.3 Privacy and Network Inspection

Practical inspection should check that:

- Assessment answers are not intentionally stored in browser storage.
- The application does not make application-level network requests to transmit assessment answers.
- No unapproved external services are introduced.

These checks provide evidence about the current prototype. They do not replace a formal security or privacy assessment.

### 10.4 Testing Limitations

Passing software tests does not establish:

- Clinical validity.
- Diagnostic accuracy.
- Improved health outcomes.
- Suitability for clinical deployment.
- Regulatory compliance.

Testing requirements relating to guided assessment, personalised guidance, and summary export remain outstanding where those features have not been implemented.

## 11. Implementation Status and Requirements Traceability

This section distinguishes the approved product requirements from the capabilities currently available in the prototype.

| Requirement                            | Current status                     | Evidence or outstanding work                                                                                                   |
| -------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| FR-01 Welcome and intended use         | Implemented                        | Welcome experience and pathway navigation in `index.html` and `js/app.js`.                                                     |
| FR-02 Guided assessment                | Partially implemented              | Assessment state and validation in `js/assessment.js`; complete user-facing assessment remains outstanding.                    |
| FR-03 Explainable guidance             | Partially implemented              | Safe fallback foundation in `js/recommendation-engine.js`; personalised clinical guidance remains disabled.                    |
| FR-04 Consultation preparation         | Partially implemented              | Question selection and summary display in `js/app.js`; editing and export remain outstanding.                                  |
| FR-05 Privacy and reset                | Implemented for prototype          | In-memory state, reset behaviour, and practical privacy inspection. Formal security and privacy assessment remain outstanding. |
| FR-06 Synthetic scenarios              | Implemented for testing            | Four scenarios in `js/scenarios.js`, exercised by `tests/reproguide.test.js`; no scenario-selection interface.                 |
| FR-07 Accessibility and responsiveness | Implemented and practically tested | Keyboard, focus, zoom, responsive, and selected screen-reader checks. Formal conformance assessment remains outstanding.       |
| FR-08 Documentation                    | Substantially implemented          | README and supporting documents; alignment and verification continue.                                                          |

The implementation status above describes the current prototype, not the full intended product.

## 12. Competition Alignment

ReproGuide is intended to address the Future Health Digital Innovation Challenge assessment areas:

1. **Health impact and clinical relevance:** Accessible male reproductive health education and support for informed healthcare conversations.
2. **Technical depth and architecture:** Modular JavaScript implementation, structured assessment logic, documented architecture, and automated tests.
3. **Working solution and demonstration:** Functional education and appointment-preparation pathways, supported by repeatable synthetic test scenarios.
4. **Responsible AI, safety, and data governance:** Explicit non-diagnostic boundaries, disabled personalised clinical recommendations, minimal data handling, and transparent limitations.
5. **Scalability and deployment readiness:** A lightweight web prototype with documented architecture and a foundation for future evaluation.
6. **Commercial viability and potential pilot:** A defined user problem and a potential pathway towards clinical review, user evaluation, and pilot planning.

Competition alignment describes the intended relevance of the prototype. It does not establish clinical effectiveness, commercial traction, or deployment readiness.

## 13. Delivery Targets

The project development period is planned for 26 October to 20 November 2026.

Current targets:

- **16 November 2026:** Internal deployment target.
- **20 November 2026:** Official prototype deadline, subject to final confirmation of competition requirements.

These are project targets and remain subject to verification against the organisers' final instructions.

## 14. Known Limitations and Future Work

### 14.1 Current Limitations

The current prototype:

- Has not undergone clinical validation.
- Does not diagnose conditions or predict fertility.
- Does not provide personalised clinical recommendations.
- Does not offer a complete guided assessment through the user interface.
- Supports appointment question selection and summary display but not editing, copying, or exporting.
- Does not expose synthetic scenarios through the user interface.
- Has no backend, user accounts, or electronic health record integration.
- Has not undergone a formal security audit or regulatory assessment.
- Has no established clinical outcome, adoption, or commercial performance evidence.

### 14.2 Potential Future Work

Subject to project approval, clinical review, and appropriate safeguards, future work may include:

- Completing the guided assessment interface.
- Developing and clinically reviewing transparent educational guidance rules.
- Improving consultation summary editing and user-controlled export.
- Conducting structured usability and accessibility evaluations.
- Conducting privacy and security assessments.
- Exploring a clinically supervised pilot.
- Evaluating deployment, governance, and integration requirements.

Future capabilities must not be represented as implemented until they have been developed and verified.

---

**Document control:** This specification preserves the original product direction while recording the implementation status as of 9 November 2026. Any future change to clinical functionality, data handling, or product scope should be reflected in this document and the relevant supporting specifications.
