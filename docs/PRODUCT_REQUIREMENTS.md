# ReproGuide — Product Requirements Specification

**Version:** 0.1  
**Status:** Initial approved baseline  
**Last updated:** 27 October 2026

## 1. Product Overview

ReproGuide is a privacy-conscious male reproductive health education and care-navigation prototype developed for the Future Health Digital Innovation Challenge.

It helps adult men understand relevant reproductive health information, recognise when professional evaluation may be appropriate, and prepare for healthcare consultations.

ReproGuide is an educational tool. It does not diagnose infertility, predict fertility outcomes, or replace professional medical assessment.

## 2. Problem Statement

Men may experience uncertainty about reproductive health concerns, appropriate assessment pathways, and the information they should prepare before consulting a healthcare professional.

ReproGuide aims to reduce this uncertainty through accessible educational content, transparent guidance, and user-controlled consultation preparation.

## 3. Target Users

Primary users are adults seeking information about male reproductive health or preparing to discuss a reproductive health concern with a qualified healthcare professional.

The initial prototype will use synthetic demonstration scenarios and will not require users to register accounts.

## 4. Product Objectives

1. Provide accessible, evidence-informed reproductive health education.
2. Explain the basis and limitations of suggested next steps.
3. Help users prepare questions and information for professional consultations.
4. Minimise collection and retention of sensitive information.
5. Demonstrate a complete, testable user journey.
6. Establish a credible foundation for future clinical evaluation and pilot development.

## 5. Functional Requirements

### FR-01: Welcome and Intended Use

Explain the product's purpose, intended audience, limitations, and privacy approach before assessment begins.

### FR-02: Guided Educational Assessment

Provide a short, accessible sequence of questions with input validation and an opportunity to review or correct answers.

### FR-03: Explainable Guidance

Use transparent, deterministic rules to present evidence-informed educational guidance. Each recommendation must have a documented rationale, source, and limitation.

### FR-04: Consultation Preparation

Generate a summary that users can review and choose to export. Do not imply that the summary has been transmitted to a healthcare professional.

### FR-05: Privacy Controls

Avoid accounts, unnecessary data collection, and persistent storage of assessment responses by default. Provide a clear reset function.

### FR-06: Synthetic Demonstration Scenarios

Provide predefined synthetic cases that demonstrate different educational pathways and support repeatable testing.

### FR-07: Accessibility and Responsiveness

Support mobile-sized screens, keyboard navigation, visible focus indicators, semantic HTML, and clear interface language.

### FR-08: Documentation and Reproducibility

Document setup, architecture, clinical content sources, recommendation logic, privacy considerations, testing, limitations, and future development.

## 6. Non-Functional Requirements

- The prototype must run without paid APIs or hosting.
- The application must work in a modern browser.
- The initial architecture must use HTML, CSS, and vanilla JavaScript.
- Assessment logic must produce deterministic results for identical inputs.
- Sensitive responses must not be transmitted to a remote service.
- The interface must communicate uncertainty and avoid unsupported clinical claims.
- All demonstration health information must be synthetic.
- The repository must provide clear setup and demonstration instructions.

## 7. Clinical and Safety Boundaries

ReproGuide must not diagnose infertility, estimate an individual's probability of conception, prescribe treatment, or present an educational questionnaire as a validated clinical screening instrument.

Clinical content must be supported by appropriate authoritative sources.

Recommendations requiring clinical interpretation must direct users towards appropriate professional assessment rather than attempting to replace it.

Urgent escalation guidance must not be implemented until its clinical basis and wording have been verified.

## 8. Privacy and Data Governance

The initial prototype will not require accounts or a backend.

Assessment answers will remain in application memory by default. Persistent browser storage of assessment responses is excluded from the initial design.

Users must be able to review a summary before exporting it and reset the current session.

The application must explain that exported information may remain on a device or in locations where the user subsequently shares it.

These controls do not, by themselves, establish legal or regulatory compliance.

## 9. Technical Architecture

The prototype will use:

- HTML for semantic structure.
- CSS for presentation and responsive design.
- Vanilla JavaScript for interface behaviour and application logic.
- A separate educational content register.
- A deterministic recommendation module.
- Synthetic demonstration scenarios.
- GitHub for version control.
- GitHub Pages for public demonstration hosting, subject to deployment verification.

No AI API, authentication system, cloud database, or automated referral integration is required for the initial release.

## 10. Testing Requirements

Testing must cover:

- Complete user journeys.
- Required-field validation.
- Recommendation-rule correctness.
- Reproducibility of synthetic scenarios.
- Summary generation and export.
- Session reset.
- Browser storage and network behaviour.
- Keyboard accessibility.
- Responsive layouts.
- Browser-console errors.
- Deployment and repository setup instructions.

Software tests establish implementation correctness, not clinical validity.

## 11. Competition Alignment

The product will be evaluated against the six published judging criteria:

1. Health impact and clinical relevance.
2. Technical depth and architecture.
3. Working solution and demonstration.
4. Responsible AI, safety and data governance.
5. Scalability and deployment readiness.
6. Commercial viability and path to pilot.

A traceability matrix will link each criterion to implemented requirements, acceptance tests, evidence, demonstration steps, and limitations.

## 12. Delivery Targets

- Internal deployment target: 16 November 2026.
- Official prototype deadline: 20 November 2026, subject to final verification of competition requirements.

## 13. Known Limitations

The prototype is not clinically validated and must not be presented as a diagnostic or predictive system.

No real-world clinical outcomes, user adoption, or commercial performance have been established.

Any future pilot would require additional clinical review, privacy and legal assessment, appropriate security measures, and evaluation with relevant stakeholders.
