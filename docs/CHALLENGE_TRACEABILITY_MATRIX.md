# ReproGuide — Challenge Traceability Matrix

**Challenge:** Future Health Digital Innovation Challenge — Fertility, Challenge 01: Male Reproductive Health
**Project:** ReproGuide — Understand. Prepare. Take the Next Step.
**Status date:** 16 November 2026

## 1. Purpose

This matrix connects the challenge assessment areas identified in `PRODUCT_REQUIREMENTS.md` to the current ReproGuide prototype, its supporting evidence, and outstanding work.

The matrix describes demonstrated prototype capabilities. It does not claim clinical validation, regulatory approval, production readiness, or proven health outcomes.

## 2. Assessment Traceability

| Assessment area | ReproGuide response | Current evidence | Status | Remaining work or limitation |
|---|---|---|---|---|
| Health impact and clinical relevance | Provides accessible male reproductive health education and helps users prepare for healthcare conversations. | `js/content.js`; `docs/CLINICAL_CONTENT_REGISTER.md`; education interface in `index.html`. | Partially demonstrated | All educational content remains pending clinical review. No clinical effectiveness or health outcome evidence. |
| Technical depth and architecture | Uses modular JavaScript, separated application logic, assessment state, educational content, and recommendation logic. | `docs/APP_ARCHITECTURE.md`; `js/app.js`; `js/assessment.js`; `js/recommendation-engine.js`. | Implemented for prototype scope | No backend, database, authentication, external AI service, or clinical-system integration. |
| Working solution and demonstration | Provides working education and consultation-preparation pathways, including question selection, summary updates, and clearing selections. | `index.html`; `js/app.js`; `tests/reproguide.test.js`; browser acceptance checks. | Implemented for available pathways | Guided check-in remains disabled. Synthetic scenarios are available to automated tests but not selectable in the interface. |
| Responsible AI, safety, and data governance | No AI model or AI service is implemented. Responsible design is demonstrated through clinical boundaries, safe fallback behaviour, and privacy-conscious data handling. | `docs/PRIVACY_AND_SAFETY.md`; `docs/ASSESSMENT_DATA_MODEL.md`; `js/recommendation-engine.js`. | Responsible safety and data-governance measures implemented for prototype scope; no AI capability | No formal security audit, privacy impact assessment, clinical safety validation, or regulatory assessment. |
| Scalability and deployment readiness | Provides a lightweight browser-based prototype with documented architecture and static deployment. The live prototype has been manually accessed and its principal pathways rehearsed. | `README.md`; `docs/APP_ARCHITECTURE.md`; GitHub repository and GitHub Pages deployment. | Prototype deployed; live functionality manually verified | Production hosting, monitoring, security, governance, and operational support are not established. |
| Commercial viability and potential pilot | Defines a user problem and a possible progression from education and consultation preparation to clinically supervised evaluation. | `docs/PRODUCT_REQUIREMENTS.md`; `README.md`; clinical and privacy documentation. | Conceptual | No market validation, user adoption evidence, commercial model validation, clinical partner commitment, or pilot approval. |

## 3. Functional Requirement Traceability

| Product requirement | Prototype evidence | Current status |
|---|---|---|
| FR-01: Welcome and intended use | Welcome screen and pathway navigation | Implemented |
| FR-02: Guided assessment | Assessment state and validation modules | Partially implemented; complete interface outstanding |
| FR-03: Explainable guidance | Safe fallback recommendation foundation | Partially implemented; personalised clinical guidance disabled |
| FR-04: Consultation preparation | Question selection and summary display | Partially implemented |
| FR-05: Privacy and reset | In-memory state and reset behaviour | Implemented for prototype |
| FR-06: Synthetic demonstration scenarios | Four scenarios and automated tests | Implemented for testing; no user-facing scenario selector |
| FR-07: Accessibility and responsive design | Keyboard, focus, zoom, responsive and selected screen-reader checks | Practically tested; no formal WCAG certification |
| FR-08: Technical and product documentation | README and supporting specifications | Substantially implemented |

## 4. Verification Evidence

The following evidence should be retained for the submission:

- Automated test results from `npm test`.
- Clean output from `git diff --check`.
- Browser checks of the education pathway.
- Browser checks of consultation question selection, summary updates, and clearing.
- Verification that guided check-in remains visibly disabled.
- Browser console inspection.
- Responsive layout and keyboard accessibility checks.
- Live deployment verification.
- Repository commit and deployment references.

A test passing is evidence of software behaviour, not clinical validity or safety certification.

## 5. Submission Risks and Controls

| Risk or limitation | Current control | Submission treatment |
|---|---|---|
| Clinical content has not been reviewed | Content is marked `pending-clinical-review` | State this limitation clearly. |
| Personalised clinical guidance is unavailable | Recommendation functionality remains disabled or uses safe fallback content | Demonstrate only implemented educational and preparation features. |
| Guided check-in is incomplete | Pathway is visibly disabled | Do not present it as a working feature. |
| Synthetic scenarios are not available in the interface | Scenarios are used by automated tests | Do not imply judges can select them in the application. |
| No formal security or privacy assessment | Minimal data handling and documented boundaries | Describe these as prototype safeguards, not certification. |
| Commercial and pilot evidence is limited | Future evaluation pathway documented | Present viability as potential, not established traction. |

## 6. Overall Readiness

ReproGuide has a functioning, testable prototype with documented architecture, educational content, consultation-preparation functionality, and explicit safety and privacy boundaries.

The strongest demonstrable areas are the working prototype, modular architecture, automated software testing, completed live demonstration rehearsal, and responsible safety and privacy boundaries.

The principal outstanding tasks are qualified clinical review, appropriate privacy and security assessment, further usability evaluation, and preparation for any future clinically supervised pilot. Live prototype functionality and the demonstration sequence have been manually checked.

**Important:** This matrix records the project's current evidence and limitations. It does not claim that every competition assessment area has been fully satisfied.
