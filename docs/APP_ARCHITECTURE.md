# ReproGuide Application Architecture

**Version:** 0.1
**Date:** 27 October 2026
**Status:** Proposed architecture; clinical review and implementation validation pending.

## 1. Purpose

ReproGuide is a privacy-conscious male reproductive health education and care-navigation prototype. It helps users move from uncertainty to an informed next step through reviewed educational information and clinician-ready preparation.

The prototype demonstrates transparent application logic, safe fallback behaviour, user control and traceable content. It is not a diagnostic or treatment system.

## 2. Technical approach

- HTML for semantic page structure.
- CSS for responsive presentation and accessible interface states.
- Vanilla JavaScript using ES modules.
- Version-controlled educational content, rules and synthetic scenarios.
- Git and GitHub for source control.
- A local development server during development.
- GitHub Pages as a possible static demonstration host, subject to verification.

No backend, user account, external AI API or database is required for the initial prototype.

## 3. Proposed source structure

- `index.html`: application entry point and semantic page structure.
- `css/styles.css`: layout, typography, responsive design and focus states.
- `js/app.js`: application initialisation and navigation.
- `js/assessment.js`: assessment state, question rendering and input validation.
- `js/recommendation-engine.js`: deterministic rule matching, explanation and fallback.
- `js/content.js`: educational content, source references and approval metadata.
- `js/scenarios.js`: synthetic demonstration scenarios.
- `docs/APP_ARCHITECTURE.md`: this architecture specification.

## 4. User journey

1. Welcome, purpose, limitations and privacy explanation.
2. User selects an educational goal.
3. Application presents only the questions needed for that pathway.
4. User reviews the educational result, explanation and source references.
5. User may create and edit a consultation-preparation summary.
6. User may copy or print the reviewed summary.
7. User may reset the session and clear current assessment state.

## 5. Application boundaries

The prototype may:

- Explain reviewed reproductive-health concepts.
- Provide reviewed information about professional evaluation.
- Help users prepare questions for a clinician.
- Present synthetic scenarios to demonstrate application behaviour.
- Explain the limits of available information.

The prototype must not:

- Diagnose infertility or another condition.
- Predict an individual's fertility or likelihood of conception.
- Interpret semen-analysis values as a diagnosis.
- Prescribe treatment, medication or supplements.
- Calculate an unvalidated clinical risk score.
- Present an unreviewed rule as clinically approved.
- Claim clinical validation or improved health outcomes without evidence.

## 6. Recommendation-engine contract

The recommendation engine receives a selected pathway and the current assessment answers. It returns a structured result containing:

- `status`: whether an approved rule matched, a fallback is needed or the request is outside scope.
- `contentId`: identifier of approved educational content, if applicable.
- `reason`: plain-language explanation of why the content was selected.
- `sourceIds`: references supporting the displayed content.
- `limitations`: relevant boundaries or uncertainty.
- `ruleId`: identifier of the rule used, when applicable.

The engine must not infer a diagnosis or generate a clinical recommendation when no approved rule matches. Proposed or unreviewed rules must remain disabled for tailored clinical outputs.

## 7. Content governance

Every educational item and recommendation rule must have a stable identifier and traceable source references. Content records should distinguish draft, reviewed and approved status.

Clinical approval must be recorded explicitly by an appropriately qualified reviewer. Source discovery or citation alone does not constitute clinical approval. Unapproved content must not be presented as validated clinical guidance.

## 8. Privacy and data handling

- No account is required for the initial prototype.
- Assessment answers remain in application memory by default.
- Real assessment answers must not be saved to local storage, session storage or remote services by default.
- Synthetic demonstration scenarios may be stored as version-controlled project data.
- Consultation summaries must be reviewed by the user before copying or printing.
- Reset must clear current answers, derived results and related in-memory state.
- No analytics or external tracking is required for the initial prototype.
- Hosting and browser limitations must be explained accurately.

## 9. Accessibility and usability

- Use semantic HTML and correctly associated form labels.
- Support keyboard navigation and visible focus indicators.
- Provide clear validation and error messages.
- Do not communicate status through colour alone.
- Use responsive layouts for mobile and desktop screens.
- Keep privacy and clinical limitations understandable and visible.

## 10. Acceptance tests

- General education displays only approved content.
- Consultation preparation produces an editable, non-diagnostic summary.
- Missing answers trigger safe fallback behaviour.
- Semen-analysis questions do not produce independent clinical interpretations.
- Unmatched requests do not produce invented recommendations.
- Unapproved rules cannot generate tailored clinical outputs.
- Conflicting synthetic answers produce a safe uncertainty response.
- Reset clears assessment answers and derived results from application state.
- User-facing sources match the content actually displayed.
- Keyboard navigation and responsive layouts are manually checked.
- The browser console has no unhandled application errors.

## 11. Known limitations

The prototype has no clinical backend, professional monitoring, authentication, electronic health record integration or clinical outcome validation. Static hosting does not provide a secure clinical service by itself. Any future use with real patients or sensitive health data requires further clinical, privacy, security, legal and operational review.

## 12. Release gate

The application may be demonstrated with synthetic scenarios and approved general educational content. Tailored clinical recommendations, urgent triage rules, real-patient deployment and claims of clinical effectiveness remain out of scope until appropriate review and validation are completed.
