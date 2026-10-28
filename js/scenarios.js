/**
 * ReproGuide synthetic demonstration scenarios.
 *
 * These scenarios use fictional, non-identifying data.
 * They are for interface and workflow testing only.
 * They do not establish diagnoses, risk scores, or treatment advice.
 */

const DEMONSTRATION_SCENARIOS = Object.freeze([
  {
    id: "demo-general-education",
    title: "General reproductive health education",
    description:
      "A user wants reliable introductory information about male reproductive health.",
    goal: "general_education",
    answers: {},
    expectedBehaviour:
      "Offer general educational content without inferring a medical condition."
  },
  {
    id: "demo-consultation-preparation",
    title: "Preparing for a healthcare appointment",
    description:
      "A user wants help selecting questions to discuss with a healthcare professional.",
    goal: "consultation_preparation",
    answers: {},
    expectedBehaviour:
      "Allow the user to select and review consultation questions."
  },
  {
    id: "demo-unanswered-concern",
    title: "Concern with unanswered questions",
    description:
      "A user opens the reproductive health pathway but does not answer optional questions.",
    goal: "reproductive_health_concern",
    answers: {
      concernDuration: null,
      priorEvaluation: null
    },
    expectedBehaviour:
      "Preserve unanswered values as unknown and avoid clinical conclusions."
  },
  {
    id: "demo-clinical-guidance-disabled",
    title: "Personalised guidance unavailable",
    description:
      "A user expects personalised clinical guidance that has not been approved.",
    goal: "reproductive_health_concern",
    answers: {},
    expectedBehaviour:
      "Return the safe fallback and explain that personalised clinical guidance is unavailable."
  }
]);

function getDemonstrationScenarios() {
  return DEMONSTRATION_SCENARIOS.map((scenario) => ({
    ...scenario,
    answers: { ...scenario.answers }
  }));
}

function getDemonstrationScenario(scenarioId) {
  const scenario = DEMONSTRATION_SCENARIOS.find(
    (item) => item.id === scenarioId
  );

  if (!scenario) {
    return null;
  }

  return {
    ...scenario,
    answers: { ...scenario.answers }
  };
}

export {
  getDemonstrationScenarios,
  getDemonstrationScenario
};