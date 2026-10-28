
import { educationalTopics } from "./content.js";

/**
 * ReproGuide application entry point.
 * Educational content only; no diagnosis or health-answer storage.
 */

function initializeApp() {
  const welcomeSection = document.querySelector("#welcome");
  const pathwaySection = document.querySelector("#pathway-selection");
  const educationSection = document.querySelector("#education-screen");
  const educationTopicsContainer = document.querySelector("#education-topics");
  const educationTitle = document.querySelector("#education-title");
  const beginLink = document.querySelector('a[href="#how-it-works"]');
  const backButton = document.querySelector("#back-to-welcome");
  const backToPathwaysButton = document.querySelector("#back-to-pathways");
  const pathwayFeedback = document.querySelector("#pathway-feedback");
  const pathwayButtons = document.querySelectorAll("[data-pathway]");

  if (
    !welcomeSection ||
    !pathwaySection ||
    !educationSection ||
    !educationTopicsContainer ||
    !educationTitle ||
    !beginLink ||
    !backButton ||
    !backToPathwaysButton ||
    !pathwayFeedback ||
    pathwayButtons.length !== 3
  ) {
    console.error(
      "ReproGuide could not initialise: a required interface element is missing."
    );
    return;
  }

  function hideAllScreens() {
    welcomeSection.hidden = true;
    pathwaySection.hidden = true;
    educationSection.hidden = true;
  }

  function showPathways() {
    hideAllScreens();
    pathwaySection.hidden = false;
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
        `(content pending clinical review)`;

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

  const pathwayMessages = {
    learn: "Educational information is available.",
    prepare:
      "Appointment preparation is not available yet. This feature will be developed next.",
    checkin:
      "Guided check-in is not available yet. No health answers have been requested or recorded."
  };

  beginLink.addEventListener("click", (event) => {
    event.preventDefault();
    showPathways();
  });

  backButton.addEventListener("click", showWelcome);

  backToPathwaysButton.addEventListener("click", showPathways);

  pathwayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPathway = button.dataset.pathway;

      pathwayFeedback.textContent =
        pathwayMessages[selectedPathway] ||
        "This pathway is not currently available.";

      if (selectedPathway === "learn") {
        renderEducationalTopics();
        showEducation();
      }
    });
  });

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
