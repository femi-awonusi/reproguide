# ReproGuide Assessment Data Model

**Version:** 0.1
**Date:** 27 October 2026
**Status:** Proposed; clinical review pending.

## 1. Design principles

The assessment collects the minimum information needed to support an educational pathway. It is not a diagnostic questionnaire, a validated clinical instrument or a fertility prediction tool.

- General education does not require personal answers.
- Optional questions may be skipped.
- Missing answers must not be interpreted as negative answers.
- No clinical score is calculated.
- Real assessment answers remain in memory by default.
- Synthetic scenarios are used for demonstrations and automated tests.
- Only explicitly approved rules may generate tailored educational outputs.

## 2. Proposed fields

### `goal`

Purpose: identifies the user's chosen pathway.

Proposed values:

- `general_education`
- `consultation_preparation`
- `reproductive_health_concern`

Required: yes, when entering a guided pathway.

### `concernDuration`

Purpose: optional context for consultation preparation.

Proposed values:

- `not_applicable`
- `less_than_12_months`
- `12_months_or_more`
- `unsure`
- `prefer_not_to_say`

Required: no.

This field must not independently establish infertility or determine a diagnosis.

### `priorEvaluation`

Purpose: helps the user prepare relevant questions for a clinician.

Proposed values:

- `yes`
- `no`
- `unsure`
- `prefer_not_to_say`

Required: no.

This field must not determine clinical risk or imply that an evaluation is or is not necessary.

### `questionsForClinician`

Purpose: stores the user's selected consultation questions in the current application session.

Type: array of approved question identifiers.

Required: no.

The user must be able to review and edit the resulting summary before copying or printing it.

## 3. Runtime state

The application may maintain an in-memory state object with:

- `goal`
- `answers`
- `currentStep`
- `result`
- `selectedQuestionIds`

The state must not be persisted to browser storage or transmitted to a server by default.

## 4. Validation

- Reject unsupported pathway values.
- Distinguish unanswered fields from explicit answers.
- Do not silently replace missing answers with `no`.
- Do not use free-text answers as inputs to clinical rules in the initial version.
- Use a safe fallback when input values are invalid, inconsistent or unsupported.
- Ensure reset clears answers, results and selected questions from runtime state.

## 5. Data minimisation

Do not collect names, telephone numbers, email addresses, precise location, partner identifiers, medical-record numbers or uploaded clinical records in the initial prototype.

Do not request semen-analysis values or use them to produce interpretations.

## 6. Acceptance tests

- General education can be accessed without personal answers.
- Optional questions may be skipped.
- Missing values remain distinguishable from explicit negative answers.
- Unsupported values trigger validation or safe fallback.
- No clinical score is calculated.
- Assessment answers are not written to local storage or session storage.
- Reset clears the runtime state.
- Consultation summaries contain only information the user has chosen to include.
- Synthetic scenarios do not contain real personal health information.

## 7. Review requirement

The proposed fields and pathways require appropriate clinical review before they are used to generate tailored clinical recommendations. This document records a software design proposal, not clinical approval.
