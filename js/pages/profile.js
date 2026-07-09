// ==========================================================
// pages/profile.js - VoirMonProfile (lecture seule)
// ==========================================================

function renderProfile(container) {
  const user = getSessionUser();
  if (!user) {
    container.innerHTML = "<p>Aucun utilisateur connecté.</p>";
    return;
  }

  container.innerHTML =
    "<h2>Mon Profil</h2>" +
    "<table border='1'>" +
    "<tr><td>Nom</td><td>" + (user.nom || "") + "</td></tr>" +
    "<tr><td>Prénom</td><td>" + (user.prenom || "") + "</td></tr>" +
    "<tr><td>Âge</td><td>" + (user.age || "") + "</td></tr>" +
    "<tr><td>Pseudo</td><td>" + (user.pseudo || "") + "</td></tr>" +
    "<tr><td>Email</td><td>" + (user.email || "") + "</td></tr>" +
    "<tr><td>Couleur</td><td>" + (user.couleur || "") + "</td></tr>" +
    "<tr><td>Devise</td><td>" + (user.Devise || "") + "</td></tr>" +
    "<tr><td>Pays</td><td>" + (user.Pays || "") + "</td></tr>" +
    "<tr><td>Admin</td><td>" + (user.admin ? "Oui" : "Non") + "</td></tr>" +
    "<tr><td>Avatar</td><td><img src='" + (user.avatar || "") + "' width='80' /></td></tr>" +
    "<tr><td>Photo</td><td><img src='" + (user.photo || "") + "' width='80' /></td></tr>" +
    "</table>";
}
