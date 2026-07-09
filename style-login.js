// ==========================================================
// style-login.js - Styles de la page Login (100% JS, pas de CSS)
// Toute la mise en forme est appliquée via querySelector + .style
// ==========================================================

(function () {
  const GREEN_BG = "#7fb069";
  const GREEN_BTN = "#5da150";
  const GREEN_BTN_HOVER = "#4c8a41";
  const GRAY_INPUT = "#eeeeee";
  const GRAY_INPUT_FOCUS = "#e2e2e2";
  const TEXT_GRAY = "#9aa39a";

  // ---- Page / body ----
  const body = document.querySelector("#loginBody");
  body.style.margin = "0";
  body.style.minHeight = "100vh";
  body.style.background = GREEN_BG;
  body.style.fontFamily = "'Segoe UI', Arial, sans-serif";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
  body.style.padding = "20px";
  body.style.boxSizing = "border-box";

  // ---- Titre (masqué visuellement mais gardé pour l'accessibilité) ----
  const title = document.querySelector("#loginTitle");
  title.style.position = "absolute";
  title.style.width = "1px";
  title.style.height = "1px";
  title.style.overflow = "hidden";
  title.style.clip = "rect(0 0 0 0)";
  title.style.margin = "-1px";

  // ---- Wrapper ----
  const wrapper = document.querySelector("#loginWrapper");
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.width = "100%";

  // ---- Card ----
  const card = document.querySelector("#loginCard");
  card.style.background = "#ffffff";
  card.style.width = "100%";
  card.style.maxWidth = "380px";
  card.style.padding = "40px 35px";
  card.style.borderRadius = "6px";
  card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
  card.style.boxSizing = "border-box";

  // ---- Champs texte (username / password) ----
  const inputs = document.querySelectorAll("#loginForm input[type='text'], #loginForm input[type='password']");
  inputs.forEach((input) => {
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
    input.style.background = GRAY_INPUT;
    input.style.border = "none";
    input.style.borderRadius = "3px";
    input.style.padding = "14px 16px";
    input.style.fontSize = "14px";
    input.style.color = "#555555";
    input.style.marginBottom = "16px";
    input.style.outline = "none";
    input.style.transition = "background 0.2s ease";

    input.addEventListener("focus", () => {
      input.style.background = GRAY_INPUT_FOCUS;
    });
    input.addEventListener("blur", () => {
      input.style.background = GRAY_INPUT;
    });
  });

  // ---- Groupe "Se rappeler de moi" ----
  const rememberGroup = document.querySelector("#rememberGroup");
  rememberGroup.style.display = "flex";
  rememberGroup.style.alignItems = "center";
  rememberGroup.style.gap = "6px";
  rememberGroup.style.marginBottom = "20px";
  rememberGroup.style.fontSize = "13px";
  rememberGroup.style.color = TEXT_GRAY;

  const rememberLabel = document.querySelector("#rememberGroup label");
  rememberLabel.style.cursor = "pointer";

  const rememberCheckbox = document.querySelector("#rememberMe");
  rememberCheckbox.style.cursor = "pointer";

  // ---- Bouton LOGIN ----
  const loginBtn = document.querySelector("#loginBtn");
  function styleLoginButtonEnabled() {
    loginBtn.style.background = GREEN_BTN;
    loginBtn.style.cursor = "pointer";
  }
  function styleLoginButtonDisabled() {
    loginBtn.style.background = "#a9c9a2";
    loginBtn.style.cursor = "not-allowed";
  }

  loginBtn.style.width = "100%";
  loginBtn.style.border = "none";
  loginBtn.style.borderRadius = "3px";
  loginBtn.style.padding = "14px 16px";
  loginBtn.style.color = "#ffffff";
  loginBtn.style.fontSize = "15px";
  loginBtn.style.fontWeight = "bold";
  loginBtn.style.letterSpacing = "1px";
  loginBtn.style.transition = "background 0.2s ease";
  styleLoginButtonEnabled();

  loginBtn.addEventListener("mouseenter", () => {
    if (!loginBtn.disabled) loginBtn.style.background = GREEN_BTN_HOVER;
  });
  loginBtn.addEventListener("mouseleave", () => {
    if (!loginBtn.disabled) loginBtn.style.background = GREEN_BTN;
  });

  // Le bouton peut être désactivé dynamiquement par auth.js (max tentatives).
  // On observe l'attribut "disabled" pour adapter le style automatiquement.
  const btnObserver = new MutationObserver(() => {
    if (loginBtn.disabled) {
      styleLoginButtonDisabled();
    } else {
      styleLoginButtonEnabled();
    }
  });
  btnObserver.observe(loginBtn, { attributes: true, attributeFilter: ["disabled"] });

  // ---- Liste d'erreurs ----
  const errorList = document.querySelector("#errorList");
  errorList.style.listStyle = "none";
  errorList.style.padding = "0";
  errorList.style.margin = "10px 0 0 0";
  errorList.style.color = "#e74c3c";
  errorList.style.fontSize = "13px";
  errorList.style.textAlign = "left";

  // ---- Lien "Create an account" ----
  const registerLink = document.querySelector("#registerLink");
  registerLink.style.textAlign = "center";
  registerLink.style.marginTop = "18px";
  registerLink.style.marginBottom = "0";
  registerLink.style.fontSize = "13px";
  registerLink.style.color = TEXT_GRAY;

  const registerAnchor = document.querySelector("#registerLinkAnchor");
  registerAnchor.style.color = GREEN_BTN;
  registerAnchor.style.textDecoration = "none";
  registerAnchor.style.fontWeight = "bold";
  registerAnchor.addEventListener("mouseenter", () => {
    registerAnchor.style.textDecoration = "underline";
  });
  registerAnchor.addEventListener("mouseleave", () => {
    registerAnchor.style.textDecoration = "none";
  });
})();
