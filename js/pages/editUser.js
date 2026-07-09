// ==========================================================
// pages/editUser.js - ModifierUtilisateur (Admin uniquement)
// ==========================================================

function renderEditUser(container, id) {
  container.innerHTML = "<h2>Modifier Utilisateur</h2><p>Chargement...</p>";

  apiGetOne(id).then((user) => {
    if (!user) {
      container.innerHTML = "<h2>Modifier Utilisateur</h2><p>Utilisateur introuvable.</p>";
      return;
    }

    container.innerHTML =
      "<h2>Modifier Utilisateur #" + id + "</h2>" +
      "<form id='editUserForm'>" +
      "<label>Nom :</label><br/><input type='text' id='e_nom' value=\"" + (user.nom || "") + "\" /><br/><br/>" +
      "<label>Prénom :</label><br/><input type='text' id='e_prenom' value=\"" + (user.prenom || "") + "\" /><br/><br/>" +
      "<label>Âge :</label><br/><input type='number' id='e_age' value=\"" + (user.age || "") + "\" /><br/><br/>" +
      "<label>Email :</label><br/><input type='email' id='e_email' value=\"" + (user.email || "") + "\" /><br/><br/>" +
      "<label>Couleur :</label><br/><input type='text' id='e_couleur' value=\"" + (user.couleur || "") + "\" /><br/><br/>" +
      "<label>Admin :</label> <input type='checkbox' id='e_admin' " + (user.admin ? "checked" : "") + " /><br/><br/>" +
      "<button type='submit'>Enregistrer</button>" +
      "</form>" +
      "<p id='editMsg'></p>" +
      "<a href='#/utilisateurs'>Retour à la liste</a>";

    document.getElementById("editUserForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const updated = {
        nom: document.getElementById("e_nom").value,
        prenom: document.getElementById("e_prenom").value,
        age: document.getElementById("e_age").value,
        email: document.getElementById("e_email").value,
        couleur: document.getElementById("e_couleur").value,
        admin: document.getElementById("e_admin").checked,
      };

      document.getElementById("editMsg").textContent = "Mise à jour en cours...";

      apiUpdateUser(id, updated).then((result) => {
        if (result) {
          document.getElementById("editMsg").textContent = "Utilisateur mis à jour avec succès.";
          setTimeout(() => {
            window.location.hash = "#/utilisateurs";
          }, 800);
        } else {
          document.getElementById("editMsg").textContent = "Erreur lors de la mise à jour.";
        }
      });
    });
  });
}
