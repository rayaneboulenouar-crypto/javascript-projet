// ==========================================================
// pages/listUsers.js - ListeUtilisateurs (Admin uniquement)
// ==========================================================

function renderListUsers(container) {
  container.innerHTML = "<h2>Liste des Utilisateurs</h2><p>Chargement...</p>";

  apiGetAll().then((users) => {
    if (!users || users.length === 0) {
      container.innerHTML = "<h2>Liste des Utilisateurs</h2><p>Aucun utilisateur trouvé.</p>";
      return;
    }

    let rows = users
      .map(
        (u) =>
          "<tr>" +
          "<td>" + u.id + "</td>" +
          "<td>" + (u.nom || "") + "</td>" +
          "<td>" + (u.prenom || "") + "</td>" +
          "<td>" + (u.pseudo || "") + "</td>" +
          "<td>" + (u.email || "") + "</td>" +
          "<td>" + (u.admin ? "Oui" : "Non") + "</td>" +
          "<td>" +
          "<a href='#/utilisateurs/details/" + u.id + "'>Détails</a> | " +
          "<a href='#/utilisateurs/modifier/" + u.id + "'>Modifier</a> | " +
          "<a href='#' class='deleteLink' data-id='" + u.id + "'>Supprimer</a>" +
          "</td>" +
          "</tr>"
      )
      .join("");

    container.innerHTML =
      "<h2>Liste des Utilisateurs</h2>" +
      "<table border='1' width='100%'>" +
      "<tr><th>Id</th><th>Nom</th><th>Prénom</th><th>Pseudo</th><th>Email</th><th>Admin</th><th>Actions</th></tr>" +
      rows +
      "</table>";

    // Gestion de la suppression
    document.querySelectorAll(".deleteLink").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("data-id");
        if (confirm("Confirmer la suppression de l'utilisateur " + id + " ?")) {
          apiDeleteUser(id).then(() => {
            renderListUsers(container);
          });
        }
      });
    });
  });
}
