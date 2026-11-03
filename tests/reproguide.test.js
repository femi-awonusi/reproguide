import test, { beforeEach } from "node:test";
import assert from "node:assert/strict";

import {
  getDemonstrationScenarios,
  getDemonstrationScenario
} from "../js/scenarios.js";

import {
  setAssessmentGoal,
  setAssessmentAnswer,
  setSelectedQuestionIds,
  setAssessmentStep,
  setAssessmentResult,
  getAssessmentState,
  resetAssessmentState
} from "../js/assessment.js";

import {
  ENGINE_STATUS,
  getSafeFallback,
  generateRecommendation
} from "../js/recommendation-engine.js";

// Start every assessment test with a clean state.
beforeEach(() => {
  resetAssessmentState();
});

// --------------------------------------------------
// Demonstration scenario tests
// --------------------------------------------------

test("all four demonstration scenarios are available", () => {
  const scenarios = getDemonstrationScenarios();

  assert.equal(scenarios.length, 4);

  assert.deepEqual(
    scenarios.map((scenario) => scenario.id),
    [
      "demo-general-education",
      "demo-consultation-preparation",
      "demo-unanswered-concern",
      "demo-clinical-guidance-disabled"
    ]
  );
});

test("an existing demonstration scenario can be retrieved", () => {
  const scenario = getDemonstrationScenario(
    "demo-general-education"
  );

  assert.notEqual(scenario, null);
  assert.equal(scenario.goal, "general_education");
});

test("an unknown demonstration scenario returns null", () => {
  assert.equal(
    getDemonstrationScenario("unknown-scenario"),
    null
  );
});

test("scenario data returned to callers cannot alter the original data", () => {
  const scenario = getDemonstrationScenario(
    "demo-unanswered-concern"
  );

  scenario.answers.concernDuration = "12_months_or_more";

  const freshScenario = getDemonstrationScenario(
    "demo-unanswered-concern"
  );

  assert.equal(freshScenario.answers.concernDuration, null);
});

// --------------------------------------------------
// Assessment goal tests
// --------------------------------------------------

test("a supported assessment goal is accepted", () => {
  const result = setAssessmentGoal("general_education");

  assert.equal(result.success, true);
  assert.equal(getAssessmentState().goal, "general_education");
});

test("all supported assessment goals are accepted", () => {
  const goals = [
    "general_education",
    "consultation_preparation",
    "reproductive_health_concern"
  ];

  for (const goal of goals) {
    resetAssessmentState();

    const result = setAssessmentGoal(goal);

    assert.equal(result.success, true);
    assert.equal(getAssessmentState().goal, goal);
  }
});

test("an unsupported assessment goal is rejected", () => {
  const result = setAssessmentGoal("unsupported_goal");

  assert.equal(result.success, false);
  assert.equal(getAssessmentState().goal, null);
});

// --------------------------------------------------
// Assessment answer tests
// --------------------------------------------------

test("a supported assessment answer is accepted", () => {
  setAssessmentGoal("reproductive_health_concern");

  const result = setAssessmentAnswer(
    "concernDuration",
    "unsure"
  );

  assert.equal(result.success, true);
  assert.equal(
    getAssessmentState().answers.concernDuration,
    "unsure"
  );
});

test("an unanswered assessment value remains null", () => {
  setAssessmentGoal("reproductive_health_concern");

  const result = setAssessmentAnswer(
    "concernDuration",
    null
  );

  assert.equal(result.success, true);
  assert.equal(
    getAssessmentState().answers.concernDuration,
    null
  );
});

test("an unsupported assessment answer is rejected", () => {
  const result = setAssessmentAnswer(
    "concernDuration",
    "unsupported_value"
  );

  assert.equal(result.success, false);
});

test("an unsupported assessment field is rejected", () => {
  const result = setAssessmentAnswer(
    "unsupportedField",
    "yes"
  );

  assert.equal(result.success, false);
});

// --------------------------------------------------
// Appointment question selection tests
// --------------------------------------------------

test("approved appointment questions can be selected", () => {
  const result = setSelectedQuestionIds([
    "appointment-question-1",
    "appointment-question-2"
  ]);

  assert.equal(result.success, true);

  assert.deepEqual(
    getAssessmentState().selectedQuestionIds,
    [
      "appointment-question-1",
      "appointment-question-2"
    ]
  );
});

test("duplicate appointment question IDs are removed", () => {
  const result = setSelectedQuestionIds([
    "appointment-question-1",
    "appointment-question-1",
    "appointment-question-2"
  ]);

  assert.equal(result.success, true);

  assert.deepEqual(
    getAssessmentState().selectedQuestionIds,
    [
      "appointment-question-1",
      "appointment-question-2"
    ]
  );
});

test("unapproved appointment question IDs are rejected", () => {
  const result = setSelectedQuestionIds([
    "appointment-question-1",
    "unapproved-question"
  ]);

  assert.equal(result.success, false);
});

test("appointment question selections must be an array", () => {
  const result = setSelectedQuestionIds("appointment-question-1");

  assert.equal(result.success, false);
});

// --------------------------------------------------
// Assessment state management tests
// --------------------------------------------------

test("assessment steps accept non-negative integers", () => {
  const result = setAssessmentStep(2);

  assert.equal(result.success, true);
  assert.equal(getAssessmentState().currentStep, 2);
});

test("negative assessment steps are rejected", () => {
  const result = setAssessmentStep(-1);

  assert.equal(result.success, false);
});

test("non-null assessment results are rejected", () => {
  const result = setAssessmentResult({
    diagnosis: "example"
  });

  assert.equal(result.success, false);
  assert.equal(getAssessmentState().result, null);
});

test("assessment state can be reset completely", () => {
  setAssessmentGoal("reproductive_health_concern");

  setAssessmentAnswer("concernDuration", "unsure");

  setSelectedQuestionIds([
    "appointment-question-1"
  ]);

  setAssessmentStep(2);

  resetAssessmentState();

  assert.deepEqual(getAssessmentState(), {
    goal: null,
    answers: {
      concernDuration: null,
      priorEvaluation: null
    },
    currentStep: 0,
    result: null,
    selectedQuestionIds: []
  });
});

test("returned assessment state cannot modify internal state", () => {
  setAssessmentGoal("general_education");

  const state = getAssessmentState();

  state.goal = "reproductive_health_concern";
  state.answers.concernDuration = "unsure";
  state.selectedQuestionIds.push("appointment-question-1");

  const freshState = getAssessmentState();

  assert.equal(freshState.goal, "general_education");
  assert.equal(freshState.answers.concernDuration, null);
  assert.deepEqual(freshState.selectedQuestionIds, []);
});

// --------------------------------------------------
// Recommendation engine safety tests
// --------------------------------------------------

test("personalised clinical recommendations remain disabled", () => {
  const recommendation = generateRecommendation();

  assert.equal(recommendation.status, ENGINE_STATUS.DISABLED);
  assert.equal(recommendation.contentId, null);
  assert.equal(recommendation.ruleId, null);
});

test("disabled recommendations include a safe fallback", () => {
  const recommendation = generateRecommendation();

  assert.notEqual(recommendation.fallback, null);

  assert.equal(
    recommendation.fallback.status,
    ENGINE_STATUS.FALLBACK
  );

  assert.equal(
    recommendation.fallback.contentId,
    "general-care-navigation"
  );
});

test("the safe fallback does not diagnose or recommend treatment", () => {
  const fallback = getSafeFallback();

  assert.ok(
    fallback.limitations.some((item) =>
      item.toLowerCase().includes("diagnose")
    )
  );

  assert.ok(
    fallback.limitations.some((item) =>
      item.toLowerCase().includes("recommend treatments")
    )
  );
});

test("modifying returned fallback data does not alter future results", () => {
  const fallback = getSafeFallback();

  fallback.limitations.push("Test modification");

  const freshFallback = getSafeFallback();

  assert.equal(
    freshFallback.limitations.includes("Test modification"),
    false
  );
});