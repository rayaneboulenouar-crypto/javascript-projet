// ==========================================================
// router.js - Routeur simple basé sur le hash (#/...)
// ==========================================================

const contentSection = document.getElementById("contentSection");

function requireAdmin() {
  if (!currentUser || !currentUser.admin) {
    contentSection.innerHTML =
      "<p>Accès refusé : cette page est réservée aux administrateurs.</p>";
    return false;
  }
  return true;
}

function route() {
  const hash = window.location.hash || "#/accueil";
  const parts = hash.replace("#/", "").split("/");
  const page = parts[0];
  const param = parts[1];

  switch (page) {
    case "accueil":
      renderAccueil(contentSection);
      break;

    case "profil":
      renderProfile(contentSection);
      break;

    case "couleur":
      renderCouleur(contentSection);
      break;

    case "utilisateurs":
      if (!requireAdmin()) break;
      if (parts[1] === "details" && parts[2]) {
        renderUserDetails(contentSection, parts[2]);
      } else if (parts[1] === "modifier" && parts[2]) {
        renderEditUser(contentSection, parts[2]);
      } else {
        renderListUsers(contentSection);
      }
      break;

    case "ajouter":
      if (!requireAdmin()) break;
      renderAddUser(contentSection);
      break;

    case "demandes":
      renderDemandes(contentSection);
      break;

    default:
      contentSection.innerHTML = "<p>Page introuvable.</p>";
  }
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
