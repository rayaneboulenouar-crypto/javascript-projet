// ==========================================================
// register.js - Logique de la page CreateAccount
// ==========================================================

const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const registerErrorList = document.getElementById("registerErrorList");
const registerSuccess = document.getElementById("registerSuccess");

// Règle mot de passe : 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial, 8 caractères min
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function showRegisterErrors(messages) {
  registerErrorList.innerHTML = "";
  messages.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    registerErrorList.appendChild(li);
  });
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  showRegisterErrors([]);
  registerSuccess.textContent = "";

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const age = document.getElementById("age").value.trim();
  const pseudo = document.getElementById("pseudo").value.trim();
  const email = document.getElementById("email").value.trim();
  const motDePasse = document.getElementById("motDePasse").value;
  const confirmMotDePasse = document.getElementById("confirmMotDePasse").value;
  const couleur = document.getElementById("couleur").value;
  const devise = document.getElementById("devise").value.trim();
  const pays = document.getElementById("pays").value.trim();
  const avatar = document.getElementById("avatar").value.trim();
  const photo = document.getElementById("photo").value.trim();
  const admin = document.getElementById("admin").checked;

  const errors = [];

  // 1. Tous les champs obligatoires
  if (
    !nom || !prenom || !age || !pseudo || !email ||
    !motDePasse || !confirmMotDePasse || !devise || !pays || !avatar || !photo
  ) {
    errors.push("Tous les champs sont obligatoires.");
  }

  // 2. Complexité du mot de passe
  if (motDePasse && !PASSWORD_REGEX.test(motDePasse)) {
    errors.push(
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
    );
  }

  // 3. Confirmation du mot de passe
  if (motDePasse !== confirmMotDePasse) {
    errors.push("La confirmation du mot de passe ne correspond pas.");
  }

  if (errors.length > 0) {
    showRegisterErrors(errors);
    return;
  }

  const newUser = {
    nom,
    prenom,
    age,
    admin,
    MotDePasse: motDePasse,
    pseudo,
    couleur,
    Devise: devise,
    Pays: pays,
    avatar,
    email,
    photo,
  };

  registerBtn.disabled = true;
  registerBtn.textContent = "Création en cours...";

  apiAddUser(newUser).then((result) => {
    registerBtn.disabled = false;
    registerBtn.textContent = "Créer le compte";

    if (result) {
      registerSuccess.textContent =
        "Compte créé avec succès ! Redirection vers la page de connexion...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } else {
      showRegisterErrors(["Une erreur est survenue lors de la création du compte."]);
    }
  });
});
