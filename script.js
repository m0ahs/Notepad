// Importer les fichiers
import { toggleTheme } from "./modules/themeSwitcher.js";

// Gestion du compteur de caractères
(function () {
  const inputContainer = document.getElementById("message");
  const label = document.getElementById("label");

  // Fonction pour mettre à jour le nombre de caractères
  function updateCharacterCount() {
    const inputValue = inputContainer.innerText.trim();
    label.textContent = inputValue.length;

    localStorage.setItem("noteContent", inputValue);
  }

  inputContainer.addEventListener("input", updateCharacterCount);
})();

// Gestion du basculement de thème
(function () {
  const themeToggleCheckbox = document.getElementById("checkbox");

  // Ajoute l'écouteur d'événement pour basculer le thème
  themeToggleCheckbox.addEventListener("click", toggleTheme);
})();

// LocalStorage
document.addEventListener("DOMContentLoaded", function () {
  const storedContent = localStorage.getItem("noteContent");
  if (storedContent) {
    inputContainer.innerText = storedContent;
  }
});
