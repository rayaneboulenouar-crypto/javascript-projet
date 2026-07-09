// ==========================================================
// pages/demandes.js - Gestion des demandes
// ==========================================================

function statutLabel(statut) {
  if (statut === "approuvee") return "Approuvée";
  if (statut === "rejetee") return "Rejetée";
  return "En attente";
}

function renderDemandes(container) {
  const user = getSessionUser();
  if (!user) {
    container.innerHTML = "<p>Aucun utilisateur connecté.</p>";
    return;
  }

  if (user.admin) {
    renderDemandesAdmin(container);
  } else {
    renderDemandesUtilisateur(container, user);
  }
}

/* ---------------- Vue Utilisateur (non admin) ---------------- */

function renderDemandesUtilisateur(container, user) {
  const demandes = getDemandesByUser(user.id);

  const rows = demandes
    .map(
      (d) =>
        "<tr>" +
        "<td>" + d.titre + "</td>" +
        "<td>" + d.description + "</td>" +
        "<td>" + statutLabel(d.statut) + "</td>" +
        "<td>" +
        (d.statut === "attente"
          ? "<a href='#' class='cancelLink' data-id='" + d.id + "'>Annuler</a>"
          : "-") +
        "</td>" +
        "</tr>"
    )
    .join("");

  container.innerHTML =
    "<h2>Mes Demandes</h2>" +
    "<form id='newDemandeForm'>" +
    "<label>Titre :</label><br/><input type='text' id='d_titre' required /><br/><br/>" +
    "<label>Description :</label><br/><textarea id='d_description' required></textarea><br/><br/>" +
    "<button type='submit'>Envoyer la demande</button>" +
    "</form>" +
    "<p id='demandeMsg'></p>" +
    "<h3>Historique</h3>" +
    "<table border='1' width='100%'>" +
    "<tr><th>Titre</th><th>Description</th><th>Statut</th><th>Action</th></tr>" +
    (rows || "<tr><td colspan='4'>Aucune demande pour le moment.</td></tr>") +
    "</table>";

  document.getElementById("newDemandeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const titre = document.getElementById("d_titre").value.trim();
    const description = document.getElementById("d_description").value.trim();

    if (!titre || !description) return;

    addDemande(titre, description);
    document.getElementById("demandeMsg").textContent = "Demande envoyée avec succès.";
    renderDemandesUtilisateur(container, user);
  });

  document.querySelectorAll(".cancelLink").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      cancelDemande(this.getAttribute("data-id"));
      renderDemandesUtilisateur(container, user);
    });
  });
}

/* ---------------- Vue Admin ---------------- */

function renderDemandesAdmin(container) {
  const demandes = getAllDemandes();

  function section(title, statut) {
    const filtered = demandes.filter((d) => d.statut === statut);
    const rows = filtered
      .map(
        (d) =>
          "<tr>" +
          "<td>" + d.userNom + "</td>" +
          "<td>" + d.titre + "</td>" +
          "<td>" + d.description + "</td>" +
          "<td>" +
          "<select class='statutSelect' data-id='" + d.id + "'>" +
          "<option value='attente'" + (d.statut === "attente" ? " selected" : "") + ">En attente</option>" +
          "<option value='approuvee'" + (d.statut === "approuvee" ? " selected" : "") + ">Approuvée</option>" +
          "<option value='rejetee'" + (d.statut === "rejetee" ? " selected" : "") + ">Rejetée</option>" +
          "</select>" +
          "</td>" +
          "</tr>"
      )
      .join("");

    return (
      "<h3>" + title + "</h3>" +
      "<table border='1' width='100%'>" +
      "<tr><th>Utilisateur</th><th>Titre</th><th>Description</th><th>Statut</th></tr>" +
      (rows || "<tr><td colspan='4'>Aucune demande.</td></tr>") +
      "</table>"
    );
  }

  container.innerHTML =
    "<h2>Gestion des Demandes</h2>" +
    section("Demandes en attente", "attente") +
    section("Demandes approuvées", "approuvee") +
    section("Demandes rejetées", "rejetee");

  document.querySelectorAll(".statutSelect").forEach((select) => {
    select.addEventListener("change", function () {
      setDemandeStatut(this.getAttribute("data-id"), this.value);
      renderDemandesAdmin(container);
    });
  });
}
