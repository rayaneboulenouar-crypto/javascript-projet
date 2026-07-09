// ==========================================================
// layout.js - Header / NavigationBar / Index / Footer
// ==========================================================

// Garde d'accès : redirige vers login si non connecté
const currentUser = getSessionUser();
if (!currentUser) {
  window.location.href = "login.html";
}

// Applique la couleur de fond lue depuis le stockage client
if (currentUser && currentUser.couleur) {
  document.getElementById("appBody").style.backgroundColor = currentUser.couleur;
}

// Affiche le nom et prénom de l'utilisateur connecté dans le header
document.getElementById("userInfo").textContent = currentUser
  ? "Nom et Prénom : " + currentUser.prenom + " " + currentUser.nom
  : "";

// Déconnexion : efface le stockage client et redirige vers Login
document.getElementById("logoutBtn").addEventListener("click", function () {
  clearSessionUser();
  window.location.href = "login.html";
});

// Définition des menus (admin / visiteur)
const ADMIN_MENU = [
  { label: "Accueil", route: "#/accueil" },
  { label: "Voir Mon Profil", route: "#/profil" },
  { label: "Modifier Couleur", route: "#/couleur" },
  { label: "Liste Utilisateurs", route: "#/utilisateurs" },
  { label: "Ajouter Utilisateur", route: "#/ajouter" },
  { label: "Demandes", route: "#/demandes" },
];

const VISITEUR_MENU = [
  { label: "Accueil", route: "#/accueil" },
  { label: "Voir Mon Profil", route: "#/profil" },
  { label: "Modifier Couleur", route: "#/couleur" },
  { label: "Mes Demandes", route: "#/demandes" },
];

function buildMenuHTML(menuItems) {
  return menuItems
    .map((item) => '<a href="' + item.route + '">' + item.label + "</a>")
    .join("");
}

function renderMenus() {
  const isAdmin = currentUser && currentUser.admin;
  const menuItems = isAdmin ? ADMIN_MENU : VISITEUR_MENU;

  // NavigationBar (horizontale)
  document.getElementById("navigationBar").innerHTML = buildMenuHTML(menuItems);

  // Index (verticale)
  document.getElementById("indexMenu").innerHTML = menuItems
    .map((item) => "<div>" + '<a href="' + item.route + '">' + item.label + "</a></div>")
    .join("");

  // Réapplique le style à chaque re-rendu des menus (si la fonction existe déjà)
  if (typeof styleMenus === "function") {
    styleMenus();
  }
}

renderMenus();
