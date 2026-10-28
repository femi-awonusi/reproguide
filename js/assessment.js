
/**
 * ReproGuide assessment state and validation.
 *
 * Educational and consultation-preparation support only.
 * No diagnosis, clinical scoring, browser storage, or network requests.
 */

const SUPPORTED_GOALS = new Set([
  "general_education",
  "consultation_preparation",
  "reproductive_health_concern"
]);

const SUPPORTED_CONCERN_DURATIONS = new Set([
  "not_applicable",
  "less_than_12_months",
  "12_months_or_more",
  "unsure",
  "prefer_not_to_say"
]);

const SUPPORTED_PRIOR_EVALUATION = new Set([
  "yes",
  "no",
  "unsure",
  "prefer_not_to_say"
]);

const APPROVED_QUESTION_IDS = new Set([
  "appointment-question-1",
  "appointment-question-2",
  "appointment-question-3",
  "appointment-question-4",
  "appointment-question-5",
  "appointment-question-6",
  "appointment-question-7"
]);

function createInitialAssessmentState() {
  return {
    goal: null,
    answers: {
      concernDuration: null,
      priorEvaluation: null
    },
    currentStep: 0,
    result: null,
    selectedQuestionIds: []
  };
}

let assessmentState = createInitialAssessmentState();

function validateGoal(goal) {
  return SUPPORTED_GOALS.has(goal);
}

function validateAnswer(field, value) {
  if (value === null || value === undefined || value === "") {
    return {
      valid: true,
      value: null
    };
  }

  const allowedValues = {
    concernDuration: SUPPORTED_CONCERN_DURATIONS,
    priorEvaluation: SUPPORTED_PRIOR_EVALUATION
  };

  const allowed = allowedValues[field];

  if (!allowed || !allowed.has(value)) {
    return {
      valid: false,
      value: null,
      error: "This answer is not supported."
    };
  }

  return {
    valid: true,
    value
  };
}

function setAssessmentGoal(goal) {
  if (!validateGoal(goal)) {
    return {
      success: false,
      error: "Please select a supported pathway."
    };
  }

  assessmentState.goal = goal;
  assessmentState.result = null;

  return {
    success: true
  };
}

function setAssessmentAnswer(field, value) {
  if (!Object.hasOwn(assessmentState.answers, field)) {
    return {
      success: false,
      error: "This question is not supported."
    };
  }

  const validation = validateAnswer(field, value);

  if (!validation.valid) {
    return {
      success: false,
      error: validation.error
    };
  }

  assessmentState.answers[field] = validation.value;
  assessmentState.result = null;

  return {
    success: true
  };
}

function setSelectedQuestionIds(questionIds) {
  if (!Array.isArray(questionIds)) {
    return {
      success: false,
      error: "Question selections must be provided as a list."
    };
  }

  const allSupported = questionIds.every(
    (id) => APPROVED_QUESTION_IDS.has(id)
  );

  if (!allSupported) {
    return {
      success: false,
      error: "One or more selected questions are not supported."
    };
  }

  assessmentState.selectedQuestionIds = [...new Set(questionIds)];

  return {
    success: true
  };
}

function setAssessmentStep(step) {
  if (!Number.isInteger(step) || step < 0) {
    return {
      success: false,
      error: "The assessment step is invalid."
    };
  }

  assessmentState.currentStep = step;

  return {
    success: true
  };
}

function setAssessmentResult(result) {
  // Tailored clinical recommendations are not enabled.
  if (result !== null) {
    return {
      success: false,
      error: "Assessment results are not enabled in this version."
    };
  }

  assessmentState.result = null;

  return {
    success: true
  };
}

function getAssessmentState() {
  return {
    goal: assessmentState.goal,
    answers: { ...assessmentState.answers },
    currentStep: assessmentState.currentStep,
    result: assessmentState.result,
    selectedQuestionIds: [
      ...assessmentState.selectedQuestionIds
    ]
  };
}

function resetAssessmentState() {
  assessmentState = createInitialAssessmentState();

  return getAssessmentState();
}

export {
  validateGoal,
  validateAnswer,
  setAssessmentGoal,
  setAssessmentAnswer,
  setSelectedQuestionIds,
  setAssessmentStep,
  setAssessmentResult,
  getAssessmentState,
  resetAssessmentState
};
