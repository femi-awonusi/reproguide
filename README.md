# ReproGuide

**Understand. Prepare. Take the Next Step.**

A privacy-conscious male reproductive health education and care-navigation prototype.

## 1. Overview

ReproGuide is an educational and care-navigation prototype designed to help men move from uncertainty about reproductive health towards informed conversations with healthcare professionals.

It provides accessible educational information, general discussion prompts for healthcare appointments, and a structured foundation for future guided assessment capabilities.

ReproGuide supports health literacy and consultation preparation. It is not a diagnostic tool or a substitute for professional medical advice.

## 2. Current Features

The current prototype includes:

- **Educational pathway:** Access general male reproductive health information with source attribution and clinical-review status.
- **Appointment preparation:** Select relevant discussion questions to prepare for a healthcare consultation.
- **Dynamic consultation summary:** View selected questions and track the number selected.
- **Session reset:** Clear appointment selections and reset application state when returning to the welcome screen.
- **Safety-oriented guidance:** Guided check-in and personalised clinical recommendations remain disabled pending clinical review.

### Synthetic test scenarios

Four synthetic scenarios are included in `js/scenarios.js` and exercised by the automated test suite:

1. General reproductive health education.
2. Preparing for a healthcare appointment.
3. A concern with unanswered questions.
4. Personalised guidance unavailable.

These scenarios use fictional, non-identifying data. They currently support automated testing; they are not selectable or accessible through the application's user interface.

## 3. Safety and Clinical Boundaries

ReproGuide is an educational prototype, not a clinical decision-support system.

The current implementation:

- Does not diagnose medical conditions.
- Does not predict fertility.
- Does not interpret semen-analysis results.
- Does not recommend treatments or supplements.
- Does not provide personalised clinical recommendations.
- Does not replace consultation with a qualified healthcare professional.

Educational content and any future clinical decision rules require appropriate clinical review and approval before clinical use.

## 4. Privacy and Data Handling

ReproGuide follows a privacy-conscious prototype design.

- Application assessment state is maintained in JavaScript memory.
- The application does not intentionally persist assessment data in browser storage.
- No application-level transmission of assessment answers to an external service is implemented.
- Synthetic test scenarios are used for automated testing.
- Users can reset the application session.

These design choices do not constitute a formal security audit or guarantee of confidentiality. Browser, hosting and device environments remain relevant to privacy.

**Do not enter real or sensitive personal health information into this prototype.**

## 5. Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- Node.js built-in test runner
- Git and GitHub
- Python built-in HTTP server for local development

The prototype does not currently require a frontend framework, external JavaScript dependencies, a database or a backend service.

## 6. Project Structure

```text
reproguide/
|-- index.html
|-- package.json
|-- README.md
|-- css/
|   |-- styles.css
|-- js/
|   |-- app.js
|   |-- assessment.js
|   |-- content.js
|   |-- recommendation-engine.js
|   |-- scenarios.js
|-- docs/
|   |-- APP_ARCHITECTURE.md
|   |-- ASSESSMENT_DATA_MODEL.md
|   |-- CLINICAL_CONTENT_REGISTER.md
|   |-- PRIVACY_AND_SAFETY.md
|   |-- PRODUCT_REQUIREMENTS.md
|-- tests/
    |-- reproguide.test.js
```

## 7. Getting Started

### Prerequisites

Install the following:

- Node.js with npm
- Python 3
- A modern web browser
- Git (for cloning the repository)

### Clone the repository

```powershell
git clone https://github.com/femi-awonusi/reproguide.git
cd reproguide
```

### Run the application locally

Start Python's built-in HTTP server from the project directory:

```powershell
python -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000/
```

To stop the server, return to the terminal and press `Ctrl + C`.

### Run automated tests

Open a separate terminal in the project directory and run:

```powershell
npm test
```

The test suite uses Node.js's built-in test runner and does not require additional test dependencies.

## 8. Known Limitations

The current prototype has the following limitations:

- Guided personal assessment is not yet available.
- Personalised clinical recommendations are disabled.
- Educational content is pending clinical review.
- Consultation summaries currently support question selection and display; direct editing, copying and printing are not implemented.
- Synthetic scenarios are available for automated testing but are not integrated into the application interface.
- There is no backend, user account system, electronic health record integration or clinical monitoring service.
- The prototype has not undergone clinical validation or a formal security audit.

## 9. Development and Future Direction

Future development is subject to clinical, technical, privacy and governance review.

Potential areas include:

- Clinician-reviewed educational content.
- Carefully governed guided assessment.
- Explainable, clinically reviewed educational decision rules.
- Improved consultation preparation and summary export.
- Further accessibility and usability evaluation.
- Deployment readiness and evaluation with appropriate stakeholders.

These are development objectives, not claims about existing functionality.

## 10. Project Status

**Status:** Working prototype under development.

ReproGuide is being developed for the Future Health Digital Innovation Challenge.

Automated tests use synthetic scenarios and fictional, non-identifying data. Application demonstrations should focus on the currently implemented educational and appointment-preparation pathways. Real-patient use and clinical deployment are outside the scope of the current prototype.

---

**ReproGuide - Understand. Prepare. Take the Next Step.**
