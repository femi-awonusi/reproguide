/**
 * ReproGuide recommendation engine.
 *
 * Safety-gated foundation only.
 * No diagnosis, clinical scoring, fertility prediction,
 * treatment recommendations, or unapproved personalised guidance.
 *
 * Tailored clinical recommendations remain disabled pending
 * appropriate clinical review and approval.
 */

const ENGINE_STATUS = Object.freeze({
  READY: "ready",
  FALLBACK: "fallback",
  DISABLED: "disabled"
});

const SAFE_FALLBACK = Object.freeze({
  status: ENGINE_STATUS.FALLBACK,
  contentId: "general-care-navigation",
  reason:
    "Personalised clinical guidance is not enabled in this version.",
  sourceIds: [],
  limitations: [
    "This tool does not diagnose medical conditions.",
    "This tool does not predict fertility.",
    "This tool does not recommend treatments or supplements.",
    "Clinical content and decision rules require appropriate review."
  ],
  ruleId: null
});

/**
 * Returns a safe fallback when tailored clinical guidance
 * is unavailable or has not been approved.
 */
function getSafeFallback() {
  return {
    ...SAFE_FALLBACK,
    sourceIds: [...SAFE_FALLBACK.sourceIds],
    limitations: [...SAFE_FALLBACK.limitations]
  };
}

/**
 * Personalised clinical recommendations are deliberately disabled.
 * Input data is not interpreted to produce a clinical conclusion.
 */
function generateRecommendation() {
  return {
    status: ENGINE_STATUS.DISABLED,
    contentId: null,
    reason:
      "Tailored clinical recommendations are disabled pending clinical review.",
    sourceIds: [],
    limitations: [
      "No diagnosis or clinical risk classification is provided.",
      "No fertility prediction is provided.",
      "No treatment or supplement recommendation is provided."
    ],
    ruleId: null,
    fallback: getSafeFallback()
  };
}

export {
  ENGINE_STATUS,
  getSafeFallback,
  generateRecommendation
};