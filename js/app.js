import { educationalTopics } from "./content.js";

import {
  setAssessmentGoal,
  setSelectedQuestionIds
} from "./assessment.js";

import {
  getSafeFallback,
  generateRecommendation
} from "./recommendation-engine.js";

/**
 * ReproGuide application entry point.
 * Educational information and appointment preparation only.
 * No diagnosis, health-answer storage, or data transmission.
 */

function initializeApp() {
  const welcomeSection = document.querySelector("#welcome");
  const pathwaySection = document.querySelector("#pathway-selection");
  const educationSection = document.querySelector("#education-screen");
  const appointmentSection = document.querySelector("#appointment-screen");

  const educationTopicsContainer =
    document.querySelector("#education-topics");
  const educationTitle = document.querySelector("#education-title");
  const appointmentTitle = document.querySelector("#appointment-title");

  const beginLink = document.querySelector('a[href="#how-it-works"]');
  const backButton = document.querySelector("#back-to-welcome");
  const backToPathwaysButton =
    document.querySelector("#back-to-pathways");
  const backFromAppointmentButton = document.querySelector(
    "#back-to-pathways-from-appointment"
  );

  const pathwayFeedback = document.querySelector("#pathway-feedback");
  const pathwayButtons = document.querySelectorAll("[data-pathway]");

  const appointmentCheckboxes = document.querySelectorAll(
    ".appointment-question-list input[type='checkbox']"
  );
  const appointmentSummaryList = document.querySelector(
    "#appointment-summary-list"
  );
  const appointmentSummaryEmpty = document.querySelector(
    "#appointment-summary-empty"
  );
  const appointmentSelectionCount = document.querySelector(
    "#appointment-selection-count"
  );
  const clearAppointmentSelectionsButton = document.querySelector(
    "#clear-appointment-selections"
  );

  if (
    !welcomeSection ||
    !pathwaySection ||
    !educationSection ||
    !appointmentSection ||
    !educationTopicsContainer ||
    !educationTitle ||
    !appointmentTitle ||
    !beginLink ||
    !backButton ||
    !backToPathwaysButton ||
    !backFromAppointmentButton ||
    !pathwayFeedback ||
    pathwayButtons.length !== 3 ||
    appointmentCheckboxes.length === 0 ||
    !appointmentSummaryList ||
    !appointmentSummaryEmpty ||
    !appointmentSelectionCount ||
    !clearAppointmentSelectionsButton
  ) {
    console.error(
      "ReproGuide could not initialise: a required interface element is missing."
    );
    return;
  }

  const preparePathwayButton = document.querySelector(
    '[data-pathway="prepare"]'
  );

  if (!preparePathwayButton) {
    console.error(
      "ReproGuide could not initialise: the appointment pathway button is missing."
    );
    return;
  }

  function hideAllScreens() {
    welcomeSection.hidden = true;
    pathwaySection.hidden = true;
    educationSection.hidden = true;
    appointmentSection.hidden = true;
  }

  function showPathways(restorePrepareFocus = false) {
    hideAllScreens();
    pathwaySection.hidden = false;

    if (restorePrepareFocus) {
      preparePathwayButton.focus();
    }
  }

  function showWelcome() {
    hideAllScreens();
    welcomeSection.hidden = false;
    beginLink.focus();
    pathwayFeedback.textContent = "";
  }

  function showEducation() {
    hideAllScreens();
    educationSection.hidden = false;
    educationTitle.focus();
  }

  function showAppointmentPreparation() {
    hideAllScreens();
    appointmentSection.hidden = false;
    appointmentTitle.focus();
  }

  function renderEducationalTopics() {
    educationTopicsContainer.replaceChildren();

    educationalTopics.forEach((topic) => {
      const article = document.createElement("article");
      article.className = "education-topic";

      const heading = document.createElement("h3");
      heading.textContent = topic.title;

      const summary = document.createElement("p");
      summary.textContent = topic.summary;

      const pointsHeading = document.createElement("h4");
      pointsHeading.textContent = "Key points";

      const pointsList = document.createElement("ul");

      topic.keyPoints.forEach((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        pointsList.append(item);
      });

      const source = document.createElement("p");
      source.className = "education-source";
      source.textContent =
        `Source: ${topic.source.organisation} — ${topic.source.title} ` +
        "(content pending clinical review)";

      article.append(
        heading,
        summary,
        pointsHeading,
        pointsList,
        source
      );

      educationTopicsContainer.append(article);
    });
  }

  function updateAppointmentSummary() {
  const selectedCheckboxes = Array.from(appointmentCheckboxes)
    .filter((checkbox) => checkbox.checked);

  const selectedQuestionIds = selectedCheckboxes.map(
    (checkbox) => checkbox.id
  );

  const stateResult = setSelectedQuestionIds(selectedQuestionIds);

  if (!stateResult.success) {
    console.error(
      "Could not update assessment selections:",
      stateResult.error
    );
    return;
  }

  const selectedQuestions = selectedCheckboxes.map((checkbox) => {
    const label = document.querySelector(
      `label[for="${checkbox.id}"]`
    );

    return label ? label.textContent.trim() : checkbox.value;
  });

  appointmentSummaryList.replaceChildren();

  selectedQuestions.forEach((question) => {
    const item = document.createElement("li");
    item.textContent = question;
    appointmentSummaryList.append(item);
  });

  const count = selectedQuestions.length;
  appointmentSummaryEmpty.hidden = count > 0;
  appointmentSummaryList.hidden = count === 0;

  appointmentSelectionCount.textContent =
    `${count} question${count === 1 ? "" : "s"} selected`;
}

  function clearAppointmentSelections() {
    appointmentCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    updateAppointmentSummary();
  }

  const pathwayMessages = {
    learn: "Educational information is available.",
    prepare: "Appointment preparation is available.",
    checkin:
      "Guided check-in is not available yet. No health answers have been requested or recorded."
  };

  beginLink.addEventListener("click", (event) => {
    event.preventDefault();
    showPathways();
  });

  backButton.addEventListener("click", showWelcome);

  backToPathwaysButton.addEventListener("click", showPathways);

  backFromAppointmentButton.addEventListener("click", () => {
    showPathways(true);
  });

pathwayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPathway = button.dataset.pathway;

    const pathwayGoals = {
      learn: "general_education",
      prepare: "consultation_preparation",
      checkin: "reproductive_health_concern"
    };

    const goal = pathwayGoals[selectedPathway];

    if (!goal) {
      pathwayFeedback.textContent =
        "This pathway is not currently available.";
      return;
    }

    const stateResult = setAssessmentGoal(goal);

    if (!stateResult.success) {
      pathwayFeedback.textContent = stateResult.error;
      return;
    }

    if (selectedPathway === "learn") {
      pathwayFeedback.textContent =
        "Educational information is available.";
      renderEducationalTopics();
      showEducation();
      return;
    }

    if (selectedPathway === "prepare") {
      pathwayFeedback.textContent =
        "Appointment preparation is available.";
      updateAppointmentSummary();
      showAppointmentPreparation();
      return;
    }

    if (selectedPathway === "checkin") {
      const recommendation = generateRecommendation();
      const fallback = getSafeFallback();

      pathwayFeedback.textContent =
        `${recommendation.reason} ${fallback.reason} ` +
        "You can explore general educational information or prepare " +
        "questions for a healthcare professional. This tool does not " +
        "provide a diagnosis or personalised clinical advice.";
    }
  });
});

  appointmentCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateAppointmentSummary);
  });

  clearAppointmentSelectionsButton.addEventListener(
    "click",
    clearAppointmentSelections
  );

  updateAppointmentSummary();

  if (window.location.hash === "#pathway-selection") {
    showPathways();
  } else {
    hideAllScreens();
    welcomeSection.hidden = false;
  }

  console.info("ReproGuide application initialised.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, {
    once: true
  });
} else {
  initializeApp();
}
