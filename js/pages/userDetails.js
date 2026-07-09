// ==========================================================
// pages/userDetails.js - DetailsUtilisateur (Admin uniquement)
// ==========================================================

function renderUserDetails(container, id) {
  container.innerHTML = "<h2>Détails Utilisateur</h2><p>Chargement...</p>";

  apiGetOne(id).then((user) => {
    if (!user) {
      container.innerHTML = "<h2>Détails Utilisateur</h2><p>Utilisateur introuvable.</p>";
      return;
    }

    container.innerHTML =
      "<h2>Détails Utilisateur #" + id + "</h2>" +
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
      "</table><br/>" +
      "<a href='#/utilisateurs/modifier/" + id + "'>Modifier</a> | " +
      "<a href='#/utilisateurs'>Retour à la liste</a>";
  });
}
