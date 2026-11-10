# ReproGuide Assessment Data Model

**Version:** 0.2
**Date:** 10 November 2026
**Status:** Data model updated to reflect current implementation; clinical review and further development pending.
**Previous Version:** 0.1, 27 October 2026

---

## 1. Purpose and design principles

The ReproGuide assessment data model defines how the application represents and validates assessment-related state.

It supports a privacy-conscious, data-minimising approach to male reproductive health education and care navigation.

The model is not a diagnostic questionnaire, validated clinical instrument, fertility prediction tool or clinical decision-support system.

The following principles apply:

- General education does not require personal assessment answers.
- Optional answers may remain unanswered.
- Missing answers must not be interpreted as negative answers.
- Unanswered values are represented as `null`.
- No clinical score is calculated.
- Assessment state is maintained in JavaScript memory.
- Assessment data is not intentionally persisted in browser storage or transmitted to remote services.
- Synthetic scenarios are maintained as version-controlled project data and used for automated testing. They are not currently selectable through the application interface.
- Personalised clinical recommendations remain disabled pending appropriate review and validation.
- Assessment data must not be used to infer a diagnosis or predict fertility.

This document distinguishes the implemented data model from future user-facing assessment functionality.

## 2. Assessment fields and validation

### 2.1 `goal`

**Purpose:** Identifies the selected assessment goal.

**Supported values:**

- `general_education`
- `consultation_preparation`
- `reproductive_health_concern`

**Validation:** Only explicitly approved goal identifiers are accepted.

**Implementation status:** Goal validation and state management are implemented in `js/assessment.js`.

Although all three goals are defined in the assessment module, the current application interface supports general education and appointment preparation. The guided check-in pathway remains disabled.

### 2.2 `concernDuration`

**Purpose:** Represents optional context relating to the duration of a reproductive health concern.

**Type:** String or `null`.

**Permitted values:**

- `not_applicable`
- `less_than_12_months`
- `12_months_or_more`
- `unsure`
- `prefer_not_to_say`

**Required:** No.

**Validation:** Only the permitted values or `null` are accepted.

This field must not independently establish infertility, determine a diagnosis or predict an individual's fertility.

### 2.3 `priorEvaluation`

**Purpose:** Represents whether the user reports having previously received a relevant professional evaluation.

**Type:** String or `null`.

**Permitted values:**

- `yes`
- `no`
- `unsure`
- `prefer_not_to_say`

**Required:** No.

**Validation:** Only the permitted values or `null` are accepted.

This field must not independently determine clinical risk or imply that professional evaluation is or is not necessary.

### 2.4 `selectedQuestionIds`

**Purpose:** Stores the identifiers of appointment-preparation questions selected by the user during the current session.

**Type:** Array of approved question identifiers.

**Required:** No.

**Validation:**

- Only approved question identifiers are accepted.
- Invalid identifiers are rejected.
- Duplicate identifiers are removed.
- The application maintains the selected identifiers in memory.

The current appointment-preparation interface supports seven approved question identifiers.

These selections represent questions the user may wish to discuss with a healthcare professional. They are not personal medical answers or clinical findings.

The current interface supports selection, summary display and clearing of selections. Editing, copying and printing the summary are not implemented.

## 3. Runtime state model

The assessment module maintains an in-memory state object containing the following properties:

| Property              | Purpose                                   | Initial or unanswered state             |
| --------------------- | ----------------------------------------- | --------------------------------------- |
| `goal`                | Selected assessment goal                  | `null`                                  |
| `answers`             | Approved assessment answer fields         | Unanswered values represented by `null` |
| `currentStep`         | Assessment navigation position            | `0`                                     |
| `result`              | Reserved for a future assessment result   | `null`                                  |
| `selectedQuestionIds` | Selected appointment-question identifiers | Empty array                             |

The state is maintained within the JavaScript runtime.

The assessment module provides functions for:

- Setting and validating the assessment goal.
- Setting and validating permitted answer fields.
- Updating selected appointment-question identifiers.
- Updating the assessment step.
- Rejecting unsupported non-null assessment results.
- Returning defensive copies of assessment state.
- Resetting the assessment state.

The `getAssessmentState()` function returns a defensive copy rather than exposing the internal state object directly.

The current application interface does not collect personal assessment answers through a guided check-in workflow.

## 4. Validation and state management

The assessment module must enforce the following rules:

1. Reject unsupported assessment goals.
2. Reject unsupported answer fields and values.
3. Preserve `null` as a distinct unanswered state.
4. Never silently replace missing answers with `no`.
5. Reject invalid assessment-step values, including negative numbers and non-integers.
6. Accept only approved appointment-question identifiers.
7. Remove duplicate appointment-question identifiers.
8. Prevent unsupported clinical results from being stored.
9. Return defensive copies of state.
10. Reset assessment state to its initial values.

The current implementation rejects non-null assessment results because clinical result generation is not enabled.

The recommendation-engine foundation does not provide active personalised clinical recommendations.

## 5. Data minimisation and privacy

The initial prototype must not collect unnecessary personal or identifying information.

The following information is outside the current data model:

- Names and contact details.
- Precise location.
- Partner identifiers.
- Medical-record numbers.
- Uploaded clinical records.
- Free-text medical histories.
- Semen-analysis values for interpretation.

The application does not intentionally persist assessment answers in local storage or session storage.

The current application does not intentionally transmit assessment answers to remote services.

Synthetic scenarios are maintained as version-controlled project data and are used for automated testing. They must not contain real personal health information.

These design and implementation checks do not constitute a formal privacy assessment, security audit or guarantee of confidentiality.

Real or sensitive patient information must not be entered into the prototype.

## 6. Current implementation status

| Capability                                           | Status          |
| ---------------------------------------------------- | --------------- |
| Assessment state initialisation                      | Implemented     |
| Approved goal validation                             | Implemented     |
| Answer-field validation                              | Implemented     |
| Unanswered `null` values                             | Implemented     |
| Appointment-question identifier validation           | Implemented     |
| Duplicate question removal                           | Implemented     |
| Assessment-step validation                           | Implemented     |
| Defensive state copies                               | Implemented     |
| Rejection of unsupported clinical results            | Implemented     |
| Assessment-state reset                               | Implemented     |
| Complete guided assessment interface                 | Not implemented |
| Personal assessment answer collection through the UI | Not implemented |
| Active personalised clinical recommendations         | Disabled        |
| Editable consultation summary                        | Not implemented |
| Copying or printing consultation summary             | Not implemented |

## 7. Automated testing and acceptance criteria

The automated test suite in `tests/reproguide.test.js` verifies assessment and safety-related behaviour.

Current test coverage includes:

- Validation of supported assessment goals.
- Rejection of unsupported assessment goals.
- Acceptance of permitted answer fields and values.
- Rejection of invalid answer fields and values.
- Preservation of unanswered values.
- Validation of appointment-question identifiers.
- Removal of duplicate question identifiers.
- Rejection of invalid assessment-step values.
- Rejection of unsupported non-null clinical results.
- Reset of assessment state.
- Defensive copying of returned state.
- Availability and isolation of synthetic test scenarios.
- Safety-related disclaimer requirements.

The current automated suite contains 24 passing tests.

Additional requirements for future development include:

- Testing a complete user-facing guided assessment.
- Testing the handling of incomplete or conflicting answers in a user-facing workflow.
- Verifying that consultation summaries contain only user-selected information.
- Verifying any future educational rule-matching behaviour against approved requirements.
- Conducting further privacy, security and accessibility assessments.

Passing software tests does not establish clinical validity, diagnostic accuracy or improved health outcomes.

## 8. Clinical governance and review

The assessment fields and their permitted values are software design definitions, not clinically validated criteria.

Appropriate clinical review is required before the fields or any associated rules are used to generate tailored clinical guidance.

Any future activation of personalised educational guidance must include:

- Documented clinical rationale.
- Traceable supporting sources.
- Explicit approval by an appropriately qualified reviewer.
- Defined limitations and uncertainty handling.
- Tested safe fallback behaviour.
- Appropriate privacy and security review.

Until these requirements are satisfied, personalised clinical recommendations remain disabled.

## 9. Future development considerations

Potential future enhancements include:

- A user-facing guided assessment interface.
- Improved assessment navigation and progress feedback.
- User-reviewed consultation summaries.
- Summary editing, copying and printing.
- Clinically reviewed educational rules, where justified.
- Additional automated tests for future assessment workflows.

These are proposed capabilities and must not be represented as existing functionality.

Any expansion involving real health information requires additional clinical, privacy, security, legal and operational assessment.

## 10. Release boundary

The current prototype supports general education and appointment preparation without collecting personal assessment answers through the user interface.

The assessment module provides validated in-memory state-management functionality, but it does not constitute a complete clinical assessment workflow.

Demonstrations must use the implemented functionality and synthetic test scenarios. No diagnosis, fertility prediction, treatment recommendation or clinically validated personalised guidance may be claimed.

This document records the current software data model and its boundaries. It does not constitute clinical approval.
