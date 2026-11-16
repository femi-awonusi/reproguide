# ReproGuide — Demonstration Guide

**Product:** ReproGuide — Understand. Prepare. Take the Next Step.
**Challenge:** Future Health Digital Innovation Challenge — Fertility, Challenge 01
**Demonstration duration:** Approximately 3 minutes

## 1. Demonstration Objective

Demonstrate how ReproGuide helps users access male reproductive health education and prepare for a conversation with a qualified healthcare professional.

The demonstration covers only the currently implemented educational and consultation-preparation pathways.

## 2. Before the Demonstration

- Open the deployed prototype or run it locally.
- Use fictional information only.
- Confirm that the application loads without browser console errors.
- Do not enter real patient or personal health information.

## 3. Demonstration Sequence

### Step 1 — Welcome and Intended Use

Show the welcome screen.

Explain that ReproGuide is a privacy-conscious educational and care-navigation prototype. It is not a diagnostic tool and does not predict fertility.

### Step 2 — Educational Pathway

Open the education pathway.

Demonstrate the available educational topics:

- Reproductive health basics.
- Fertility fundamentals.
- When to seek care.

Show the associated source references.

Explain that the educational content is pending clinical review and is not a substitute for professional medical advice.

### Step 3 — Consultation Preparation

Return to the pathway selection screen and open consultation preparation.

Select a small number of appointment questions.

Demonstrate how the summary updates to reflect the selected questions.

Clear the selections and show that the summary resets.

Explain that the feature helps users organise questions for a healthcare conversation; it does not generate a diagnosis or treatment plan.

### Step 4 — Safety and Privacy Boundaries

Show that guided check-in remains visibly disabled.

Explain the current safeguards:

- Assessment state is held in application memory.
- Assessment answers are not intentionally persisted in browser storage.
- The prototype does not transmit assessment answers to an application backend.
- Personalised clinical recommendations remain disabled.
- The prototype has not undergone formal clinical validation or security certification.

## 4. Suggested Closing Statement

ReproGuide demonstrates a practical starting point for improving access to understandable male reproductive health information and supporting better-prepared healthcare conversations.

Its current scope deliberately prioritises explainability, privacy-conscious design, and clear clinical boundaries. Further development will depend on qualified clinical review, structured user evaluation, and appropriate governance.

## 5. Demonstration Restrictions

- Do not enter real patient information.
- Do not demonstrate disabled features as operational.
- Do not describe educational content as clinically approved.
- Do not claim diagnostic accuracy, fertility prediction, or improved clinical outcomes.
- Do not describe the prototype as ready for clinical deployment.

## 6. Supporting Evidence

- `docs/CHALLENGE_TRACEABILITY_MATRIX.md`
- `docs/PRODUCT_REQUIREMENTS.md`
- `docs/APP_ARCHITECTURE.md`
- `docs/ASSESSMENT_DATA_MODEL.md`
- `docs/CLINICAL_CONTENT_REGISTER.md`
- `docs/PRIVACY_AND_SAFETY.md`
- `tests/reproguide.test.js`
