// ==========================================================
// pages/couleur.js - ModifierCouleur
// ==========================================================

const COULEURS_DISPONIBLES = [
  "red", "blue", "green", "maroon", "orange", "purple", "gray", "black", "teal",
];

function renderCouleur(container) {
  const user = getSessionUser();
  if (!user) {
    container.innerHTML = "<p>Aucun utilisateur connecté.</p>";
    return;
  }

  // Règle : visiteur (non admin) de moins de 15 ans -> message au lieu du formulaire
  const age = parseInt(user.age, 10);
  if (!user.admin && !isNaN(age) && age < 15) {
    container.innerHTML =
      "<h2>Modifier Couleur</h2>" +
      "<p>Vous devez avoir au moins 15 ans pour modifier votre couleur préférée.</p>";
    return;
  }

  container.innerHTML =
    "<h2>Modifier Couleur</h2>" +
    "<p>Couleur actuelle : <strong id='currentColor'>" + user.couleur + "</strong></p>" +
    "<label for='newColor'>Nouvelle couleur :</label><br/>" +
    "<select id='newColor'>" +
    COULEURS_DISPONIBLES.map(
      (c) => "<option value='" + c + "'" + (c === user.couleur ? " selected" : "") + ">" + c + "</option>"
    ).join("") +
    "</select><br/><br/>" +
    "<button id='validerCouleurBtn'>Valider</button>" +
    "<p id='couleurMsg'></p>";

  document.getElementById("validerCouleurBtn").addEventListener("click", function () {
    const newColor = document.getElementById("newColor").value;
    const msg = document.getElementById("couleurMsg");
    msg.textContent = "Mise à jour en cours...";

    // 1. Mise à jour du stockage client
    updateSessionUserField("couleur", newColor);

    // 2. Appel API pour mettre à jour la couleur côté serveur
    apiUpdateUser(user.id, { couleur: newColor }).then((result) => {
      if (result) {
        msg.textContent = "Couleur mise à jour avec succès.";
        document.getElementById("appBody").style.backgroundColor = newColor;
        document.getElementById("currentColor").textContent = newColor;
      } else {
        msg.textContent = "Erreur lors de la mise à jour côté serveur (le stockage local a été mis à jour).";
      }
    });
  });
}
