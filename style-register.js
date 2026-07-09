// ==========================================================
// style-register.js - Styles de la page Créer un compte (100% JS)
// ==========================================================

(function () {
  const GREEN_BG = "#7fb069";
  const GREEN_BTN = "#5da150";
  const GREEN_BTN_HOVER = "#4c8a41";
  const GRAY_INPUT = "#eeeeee";

  const body = document.querySelector("#registerBody");
  body.style.margin = "0";
  body.style.minHeight = "100vh";
  body.style.background = GREEN_BG;
  body.style.fontFamily = "'Segoe UI', Arial, sans-serif";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "flex-start";
  body.style.padding = "40px 20px";
  body.style.boxSizing = "border-box";

  const wrapper = document.querySelector("#registerWrapper");
  wrapper.style.width = "100%";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";

  const card = document.querySelector("#registerCard");
  card.style.background = "#ffffff";
  card.style.width = "100%";
  card.style.maxWidth = "460px";
  card.style.padding = "35px 35px";
  card.style.borderRadius = "6px";
  card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25)";
  card.style.boxSizing = "border-box";

  const title = document.querySelector("#registerTitle");
  title.style.textAlign = "center";
  title.style.color = "#4c8a41";
  title.style.marginTop = "0";
  title.style.marginBottom = "25px";
  title.style.fontSize = "22px";

  const fieldGroups = document.querySelectorAll(".field-group");
  fieldGroups.forEach((group) => {
    group.style.marginBottom = "14px";
  });

  const labels = document.querySelectorAll("#registerForm > form label, .field-group label");
  document.querySelectorAll(".field-group label").forEach((label) => {
    label.style.display = "block";
    label.style.fontSize = "12px";
    label.style.color = "#777777";
    label.style.marginBottom = "5px";
  });

  const fields = document.querySelectorAll(
    ".field-group input, .field-group select"
  );
  fields.forEach((field) => {
    field.style.width = "100%";
    field.style.boxSizing = "border-box";
    field.style.background = GRAY_INPUT;
    field.style.border = "none";
    field.style.borderRadius = "3px";
    field.style.padding = "11px 12px";
    field.style.fontSize = "14px";
    field.style.color = "#555555";
    field.style.outline = "none";
  });

  const adminGroup = document.querySelector("#adminGroup");
  adminGroup.style.display = "flex";
  adminGroup.style.alignItems = "center";
  adminGroup.style.gap = "6px";
  adminGroup.style.margin = "10px 0 20px 0";
  adminGroup.style.fontSize = "13px";
  adminGroup.style.color = "#777777";

  const registerBtn = document.querySelector("#registerBtn");
  registerBtn.style.width = "100%";
  registerBtn.style.border = "none";
  registerBtn.style.borderRadius = "3px";
  registerBtn.style.padding = "13px 16px";
  registerBtn.style.background = GREEN_BTN;
  registerBtn.style.color = "#ffffff";
  registerBtn.style.fontSize = "14px";
  registerBtn.style.fontWeight = "bold";
  registerBtn.style.letterSpacing = "1px";
  registerBtn.style.cursor = "pointer";
  registerBtn.style.transition = "background 0.2s ease";
  registerBtn.addEventListener("mouseenter", () => {
    if (!registerBtn.disabled) registerBtn.style.background = GREEN_BTN_HOVER;
  });
  registerBtn.addEventListener("mouseleave", () => {
    if (!registerBtn.disabled) registerBtn.style.background = GREEN_BTN;
  });

  const errorList = document.querySelector("#registerErrorList");
  errorList.style.listStyle = "none";
  errorList.style.padding = "0";
  errorList.style.margin = "12px 0 0 0";
  errorList.style.color = "#e74c3c";
  errorList.style.fontSize = "13px";

  const successMsg = document.querySelector("#registerSuccess");
  successMsg.style.color = "#4c8a41";
  successMsg.style.fontSize = "13px";
  successMsg.style.marginTop = "12px";
  successMsg.style.fontWeight = "bold";

  const backToLogin = document.querySelector("#backToLogin");
  backToLogin.style.textAlign = "center";
  backToLogin.style.marginTop = "18px";
  backToLogin.style.marginBottom = "0";
  backToLogin.style.fontSize = "13px";

  const backLink = document.querySelector("#backToLogin a");
  backLink.style.color = GREEN_BTN;
  backLink.style.textDecoration = "none";
  backLink.style.fontWeight = "bold";
  backLink.addEventListener("mouseenter", () => {
    backLink.style.textDecoration = "underline";
  });
  backLink.addEventListener("mouseleave", () => {
    backLink.style.textDecoration = "none";
  });
})();
