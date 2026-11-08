
let currentLanguage = "en";

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "pt" : "en";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-en][data-pt]").forEach((element) => {
    element.innerHTML = element.getAttribute("data-" + currentLanguage);
  });

  const languageButton = document.querySelector(".lang");

  if (languageButton) {
    languageButton.textContent = currentLanguage === "en" ? "PT" : "EN";
  }
}
