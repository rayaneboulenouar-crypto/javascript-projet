// ==========================================================
// pages/addUser.js - AjouterUtilisateur (Admin uniquement)
// ==========================================================

function renderAddUser(container) {
  container.innerHTML =
    "<h2>Ajouter un Utilisateur</h2>" +
    "<form id='addUserForm'>" +
    "<label>Nom :</label><br/><input type='text' id='a_nom' required /><br/><br/>" +
    "<label>Prénom :</label><br/><input type='text' id='a_prenom' required /><br/><br/>" +
    "<label>Âge :</label><br/><input type='number' id='a_age' required /><br/><br/>" +
    "<label>Pseudo :</label><br/><input type='text' id='a_pseudo' required /><br/><br/>" +
    "<label>Email :</label><br/><input type='email' id='a_email' required /><br/><br/>" +
    "<label>Mot de passe :</label><br/><input type='password' id='a_motDePasse' required /><br/><br/>" +
    "<label>Couleur :</label><br/><input type='text' id='a_couleur' value='blue' /><br/><br/>" +
    "<label>Admin :</label> <input type='checkbox' id='a_admin' /><br/><br/>" +
    "<button type='submit'>Ajouter</button>" +
    "</form>" +
    "<p id='addUserMsg'></p>";

  document.getElementById("addUserForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newUser = {
      nom: document.getElementById("a_nom").value,
      prenom: document.getElementById("a_prenom").value,
      age: document.getElementById("a_age").value,
      pseudo: document.getElementById("a_pseudo").value,
      email: document.getElementById("a_email").value,
      MotDePasse: document.getElementById("a_motDePasse").value,
      couleur: document.getElementById("a_couleur").value,
      admin: document.getElementById("a_admin").checked,
    };

    document.getElementById("addUserMsg").textContent = "Ajout en cours...";

    apiAddUser(newUser).then((result) => {
      if (result) {
        document.getElementById("addUserMsg").textContent = "Utilisateur ajouté avec succès.";
        document.getElementById("addUserForm").reset();
      } else {
        document.getElementById("addUserMsg").textContent = "Erreur lors de l'ajout.";
      }
    });
  });
}
