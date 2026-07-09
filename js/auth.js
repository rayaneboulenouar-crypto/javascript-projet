// ==========================================================
// auth.js - Logique de la page Login
// ==========================================================

const MAX_ATTEMPTS = 3;
let attempts = 0;

const loginForm = document.getElementById("loginForm");
const pseudoInput = document.getElementById("pseudo");
const motDePasseInput = document.getElementById("motDePasse");
const rememberMeInput = document.getElementById("rememberMe");
const loginBtn = document.getElementById("loginBtn");
const errorList = document.getElementById("errorList");

// Si l'utilisateur est déjà connecté, on le redirige directement
if (isLoggedIn()) {
  window.location.href = "app.html";
}

// Pré-remplissage du formulaire si "Se rappeler de moi" a été coché
window.addEventListener("DOMContentLoaded", () => {
  const remembered = getRememberMe();
  if (remembered) {
    pseudoInput.value = remembered.pseudo;
    motDePasseInput.value = remembered.motDePasse;
    rememberMeInput.checked = true;
  }
});

function showErrors(messages) {
  errorList.innerHTML = "";
  messages.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    errorList.appendChild(li);
  });
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  showErrors([]);

  const pseudo = pseudoInput.value.trim();
  const motDePasse = motDePasseInput.value;

  // Champs obligatoires
  if (!pseudo || !motDePasse) {
    showErrors(["Le nom d'utilisateur et le mot de passe sont obligatoires."]);
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "Connexion...";

  apiGetAll().then((users) => {
    loginBtn.textContent = "LOGIN";

    const found = users.find(
      (u) => u.pseudo === pseudo && u.MotDePasse === motDePasse
    );

    if (found) {
      saveSessionUser(found);

      if (rememberMeInput.checked) {
        saveRememberMe(pseudo, motDePasse);
      } else {
        clearRememberMe();
      }

      window.location.href = "app.html";
      return;
    }

    // Echec de connexion
    attempts++;
    const remaining = MAX_ATTEMPTS - attempts;

    if (remaining > 0) {
      showErrors([
        "Nom d'utilisateur ou mot de passe incorrect. Tentatives restantes : " +
          remaining,
      ]);
      loginBtn.disabled = false;
    } else {
      showErrors([
        "Nombre maximal de tentatives atteint. Le bouton LOGIN est désactivé.",
      ]);
      loginBtn.disabled = true;
    }
  });
});
