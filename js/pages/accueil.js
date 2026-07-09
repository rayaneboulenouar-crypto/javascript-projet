// ==========================================================
// pages/accueil.js - Page d'accueil
// ==========================================================

function renderAccueil(container) {
  const user = getSessionUser();
  container.innerHTML =
    "<h2>Bienvenue " + (user ? user.prenom + " " + user.nom : "") + " !</h2>" +
    "<p>Bienvenue sur l'application du Mini-Projet Javascript - M105.</p>";
}
