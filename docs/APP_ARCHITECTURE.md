# ReproGuide Application Architecture

**Version:** 0.2
**Date:** 10 November 2026
**Status:** Architecture baseline updated to reflect current implementation; further development, clinical review and validation pending.
**Previous Version:** 0.1, 27 October 2026

---

## 1. Purpose

ReproGuide is a privacy-conscious male reproductive health education and care-navigation prototype. It helps users move from uncertainty to an informed next step through accessible educational information and preparation for conversations with healthcare professionals.

The prototype demonstrates transparent application logic, safe fallback behaviour, user control and traceable educational content.

ReproGuide is not a diagnostic, treatment or clinical decision-support system. Its current implementation focuses on general education and appointment preparation.

This document distinguishes implemented functionality from technical foundations and proposed future capabilities.

## 2. Technical approach

The application uses the following technologies:

- HTML5 for semantic page structure.
- CSS3 for responsive presentation, typography and interface states.
- Vanilla JavaScript using ES modules.
- Node.js built-in test runner for automated testing.
- Git and GitHub for source control.
- Python's built-in HTTP server for local development and testing.
- GitHub Pages as a possible static demonstration host, subject to deployment verification.

The application currently operates as a client-side prototype.

There is no application backend, user authentication, external AI API, database or electronic health record integration.

No additional frontend framework or external JavaScript dependency is required.

## 3. Source structure and module responsibilities

The current project structure includes:

- `index.html`: application entry point and semantic page structure.
- `css/styles.css`: layout, typography, responsive design and focus states.
- `js/app.js`: application initialisation, pathway navigation, educational content rendering and appointment-preparation interactions.
- `js/assessment.js`: in-memory assessment state, approved goal and answer validation, appointment question selection and session reset.
- `js/recommendation-engine.js`: safety-gated recommendation-engine foundation and fallback behaviour. Personalised clinical recommendations remain disabled.
- `js/content.js`: educational content, source references and clinical-review metadata.
- `js/scenarios.js`: synthetic demonstration scenarios used for testing.
- `tests/reproguide.test.js`: automated tests for assessment, validation and safety behaviour.
- `docs/APP_ARCHITECTURE.md`: this architecture specification.

Supporting documentation includes the product requirements, clinical content register, privacy and safety requirements, and assessment data model.

## 4. Current user journey and implementation status

The current application supports the following user journey:

1. **Welcome:** The user sees the application's purpose, limitations and available pathways.
2. **Pathway selection:** The user can choose general education or appointment preparation.
3. **General education:** The application displays educational topics, source references and clinical-review status.
4. **Appointment preparation:** The user selects relevant questions from an approved list.
5. **Summary review:** The application displays the selected questions and updates the selection count.
6. **Navigation:** The user can move between available pathways without losing appointment selections.
7. **Session reset:** The user can clear the current selections and reset in-memory assessment state.

The guided check-in pathway is currently disabled. The application does not collect personal assessment answers through its user interface.

The consultation-preparation summary currently supports selection and display only. Editing, copying and printing are not implemented.

## 5. Application boundaries

### 5.1 Current capabilities

The prototype currently supports:

- Displaying general male reproductive health educational content.
- Showing source references and clinical-review status.
- Helping users select questions for a healthcare consultation.
- Displaying a summary of selected questions.
- Demonstrating pathway navigation and session reset.
- Maintaining validated assessment state in application memory.
- Providing safe fallback behaviour in the recommendation-engine foundation.
- Using synthetic scenarios in automated tests.

### 5.2 Prohibited and unavailable capabilities

The application must not:

- Diagnose infertility or another medical condition.
- Predict an individual's fertility or likelihood of conception.
- Interpret semen-analysis values as a diagnosis.
- Prescribe or recommend treatment, medication or supplements.
- Calculate or present an unvalidated clinical risk score.
- Present unreviewed rules as clinically approved.
- Imply that educational content replaces professional evaluation.
- Claim clinical validation or improved health outcomes without supporting evidence.

Personalised clinical recommendations, automated clinical interpretation and urgent triage functionality are not available in the current prototype.

## 6. Assessment and recommendation-engine architecture

### 6.1 Assessment module

The assessment module provides an in-memory state-management foundation.

Its responsibilities include:

- Validating approved assessment goals.
- Validating permitted answer fields and values.
- Maintaining selected appointment-question identifiers.
- Tracking the assessment step.
- Preventing unsupported clinical result values.
- Returning defensive copies of application state.
- Resetting assessment state.

The module does not currently provide a complete user-facing guided assessment. Personal assessment answers are not collected through the current application interface.

Unanswered assessment values remain `null`. Assessment data is maintained in application memory rather than intentionally persisted in browser storage.

### 6.2 Recommendation-engine foundation

The recommendation engine is designed around transparent, deterministic rule handling and safe fallback behaviour.

The intended result structure includes:

- `status`: whether an approved rule matched, a fallback is required or a request is outside scope.
- `contentId`: identifier of relevant educational content, where applicable.
- `reason`: plain-language explanation of the selection.
- `sourceIds`: references supporting the displayed content.
- `limitations`: relevant boundaries or uncertainty.
- `ruleId`: identifier of the rule used, where applicable.

The current implementation does not provide active personalised clinical recommendations.

Any future rule-based educational guidance must be explicitly approved, traceable to supporting sources and subject to appropriate clinical review before activation.

The engine must not infer a diagnosis or generate a clinical recommendation when no approved rule matches.

## 7. Content governance

Educational content must have stable identifiers and traceable source references.

Content records distinguish their clinical-review status. The current educational content includes source attribution and is marked as pending clinical review.

The following governance principles apply:

- Source discovery or citation alone does not constitute clinical approval.
- Clinical approval must be recorded explicitly by an appropriately qualified reviewer.
- Unreviewed content must not be represented as clinically validated.
- Content changes must be traceable through version control.
- Future recommendation rules must have documented evidence, limitations and approval status.

Clinical review remains an outstanding requirement.

## 8. Privacy and data handling

The current prototype follows a data-minimisation approach.

- No user account is required.
- Assessment state is maintained in application memory.
- The application does not intentionally persist assessment answers in local storage or session storage.
- Synthetic scenarios are maintained as version-controlled project data.
- The current application does not intentionally transmit assessment answers to remote services.
- Appointment-question selections are maintained in application state.
- Session reset clears current selections and resets assessment state.
- No analytics or external tracking is required for the initial prototype.

The current implementation has undergone practical inspection of browser storage usage and network activity. These checks do not constitute a formal security audit or guarantee of confidentiality.

The application must not be represented as a secure clinical service or used to collect real or sensitive patient information.

Any future handling of real health information requires appropriate privacy, security, legal and operational review.

## 9. Accessibility and usability

The application has undergone practical accessibility and usability checks.

Implemented and checked considerations include:

- Semantic HTML structure.
- Keyboard navigation.
- Visible keyboard focus indicators.
- Accessible skip navigation.
- Responsive layouts for mobile and desktop.
- Usability at increased browser zoom levels.
- Screen-reader checks using Windows Narrator.
- Announcements of selected appointment questions and selection counts.
- Sample text contrast checks against WCAG AA criteria.

These checks do not establish full WCAG conformance or certification.

Further accessibility testing should be undertaken as the application develops.

## 10. Testing and verification

### 10.1 Automated testing

The project uses Node.js's built-in test runner.

The current automated test suite contains 24 passing tests covering:

- Availability of all four synthetic demonstration scenarios.
- Scenario isolation.
- Valid and invalid assessment goals.
- Assessment answer validation.
- Permitted answer fields and values.
- Appointment-question identifier validation.
- Non-negative assessment steps.
- Rejection of unsupported clinical results.
- Safety-related application behaviour and disclaimer requirements.

### 10.2 Manual verification

Practical browser checks have covered:

- Initial welcome-screen rendering.
- General education pathway navigation.
- Appointment-preparation pathway.
- Selection and clearing of appointment questions.
- Dynamic summary and selection-count updates.
- Disabled guided check-in behaviour.
- Session reset.
- Keyboard navigation and visible focus.
- Screen-reader announcements.
- Responsive presentation and browser zoom.
- Browser console errors.
- Browser storage and network activity.

The application has passed the recorded functional checks. A missing favicon was previously observed as a 404 response; it did not affect application functionality.

### 10.3 Future acceptance criteria

The following remain future requirements rather than claims about current functionality:

- A complete guided assessment interface.
- Editable consultation-preparation summaries.
- Copying or printing summaries.
- Approved educational rule matching with explainable outputs.
- Safe handling of conflicting or incomplete assessment answers in a user-facing workflow.
- Verification that every displayed recommendation has matching approved source references.
- Further formal accessibility, privacy and security assessment.

Software tests establish expected software behaviour; they do not establish clinical validity, diagnostic accuracy or improved health outcomes.

## 11. Known limitations

The current prototype has:

- No clinical backend or professional monitoring.
- No authentication or user-account management.
- No database or electronic health record integration.
- No external AI service integration.
- No active personalised clinical recommendation service.
- No complete guided assessment interface.
- No consultation-summary editing, copying or printing.
- No selectable synthetic demonstration scenarios in the user interface.
- No clinical validation or outcome evaluation.
- No formal security audit, penetration test or privacy impact assessment.
- No verified production clinical deployment.

Static hosting does not provide a secure clinical service by itself.

Any future use with real patients or sensitive health information requires further clinical, privacy, security, legal and operational review.

## 12. Release gate

The current prototype may be demonstrated using its implemented general education and appointment-preparation pathways.

Demonstrations must accurately communicate that:

- Educational content is pending clinical review.
- The application does not diagnose, predict fertility or prescribe treatment.
- The guided check-in and personalised clinical recommendations are disabled.
- Synthetic scenarios are used for automated testing and are not selectable in the application.
- Appointment preparation currently provides question selection and summary display only.
- No clinical effectiveness or validation claim is being made.

Tailored clinical recommendations, urgent triage rules, real-patient deployment and claims of clinical effectiveness remain outside the release scope until appropriate review, validation and governance requirements have been satisfied.
