// ==========================================================
// style-layout.js - Styles de la page Layout (100% JS, pas de CSS)
// Header / Logo / NavigationBar / Index / Content / Footer
// ==========================================================

const DARK_BG = "#2f3640";
const DARK_BG_LIGHT = "#3c4450";
const ACCENT = "#5da150";
const ACCENT_HOVER = "#4c8a41";
const LOGOUT_COLOR = "#e74c3c";
const LOGOUT_HOVER = "#c0392b";
const SIDEBAR_BG = "#f4f6f5";

// ---- Page ----
const appBody = document.querySelector("#appBody");
appBody.style.margin = "0";
appBody.style.fontFamily = "'Segoe UI', Arial, sans-serif";
appBody.style.minHeight = "100vh";
appBody.style.display = "flex";
appBody.style.flexDirection = "column";
appBody.style.boxSizing = "border-box";

// ---- Header ----
const header = document.querySelector("#headerSection");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.background = DARK_BG;
header.style.color = "#ffffff";
header.style.padding = "12px 24px";
header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.25)";
header.style.boxSizing = "border-box";
header.style.flexWrap = "wrap";
header.style.gap = "10px";

// ---- Logo stylé ----
const logoBox = document.querySelector("#logoBox");
logoBox.style.display = "flex";
logoBox.style.alignItems = "center";
logoBox.style.gap = "10px";

const logoIcon = document.querySelector("#logoIcon");
logoIcon.style.display = "flex";
logoIcon.style.alignItems = "center";
logoIcon.style.justifyContent = "center";
logoIcon.style.width = "38px";
logoIcon.style.height = "38px";
logoIcon.style.borderRadius = "50%";
logoIcon.style.background = "linear-gradient(135deg, " + ACCENT + ", #3f7a35)";
logoIcon.style.color = "#ffffff";
logoIcon.style.fontWeight = "bold";
logoIcon.style.fontSize = "18px";
logoIcon.style.boxShadow = "0 2px 6px rgba(0,0,0,0.35)";

const logoText = document.querySelector("#logoText");
logoText.style.fontSize = "18px";
logoText.style.fontWeight = "bold";
logoText.style.letterSpacing = "1px";
logoText.style.color = "#ffffff";

// ---- Infos utilisateur ----
const userInfo = document.querySelector("#userInfo");
userInfo.style.fontSize = "14px";
userInfo.style.color = "#dcdde1";
userInfo.style.flex = "1";
userInfo.style.textAlign = "center";

// ---- Bouton Se Déconnecter ----
const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.style.background = LOGOUT_COLOR;
logoutBtn.style.color = "#ffffff";
logoutBtn.style.border = "none";
logoutBtn.style.borderRadius = "4px";
logoutBtn.style.padding = "9px 16px";
logoutBtn.style.fontSize = "13px";
logoutBtn.style.fontWeight = "bold";
logoutBtn.style.cursor = "pointer";
logoutBtn.style.transition = "background 0.2s ease";
logoutBtn.addEventListener("mouseenter", () => {
  logoutBtn.style.background = LOGOUT_HOVER;
});
logoutBtn.addEventListener("mouseleave", () => {
  logoutBtn.style.background = LOGOUT_COLOR;
});

// ---- NavigationBar + Index : style appliqué (et réappliqué à chaque rendu) ----
function styleMenus() {
  const navBar = document.querySelector("#navigationBar");
  navBar.style.display = "flex";
  navBar.style.flexWrap = "wrap";
  navBar.style.background = DARK_BG_LIGHT;
  navBar.style.padding = "0 16px";

  const navLinks = document.querySelectorAll("#navigationBar a");
  navLinks.forEach((link) => {
    link.style.color = "#f1f2f6";
    link.style.textDecoration = "none";
    link.style.padding = "12px 16px";
    link.style.fontSize = "13px";
    link.style.transition = "background 0.2s ease, color 0.2s ease";
    link.addEventListener("mouseenter", () => {
      link.style.background = ACCENT;
      link.style.color = "#ffffff";
    });
    link.addEventListener("mouseleave", () => {
      link.style.background = "transparent";
      link.style.color = "#f1f2f6";
    });
  });

  const indexMenu = document.querySelector("#indexMenu");
  indexMenu.style.background = SIDEBAR_BG;
  indexMenu.style.padding = "16px 0";
  indexMenu.style.boxSizing = "border-box";

  const indexLinks = document.querySelectorAll("#indexMenu a");
  indexLinks.forEach((link) => {
    link.style.display = "block";
    link.style.color = "#2f3640";
    link.style.textDecoration = "none";
    link.style.padding = "10px 20px";
    link.style.fontSize = "14px";
    link.style.borderLeft = "3px solid transparent";
    link.style.transition = "background 0.2s ease, border-color 0.2s ease";
    link.addEventListener("mouseenter", () => {
      link.style.background = "#e6ede5";
      link.style.borderLeft = "3px solid " + ACCENT;
    });
    link.addEventListener("mouseleave", () => {
      link.style.background = "transparent";
      link.style.borderLeft = "3px solid transparent";
    });
  });
}
styleMenus();

// ---- Section principale (Index + Content) ----
const mainSection = document.querySelector("#mainSection");
mainSection.style.display = "flex";
mainSection.style.flex = "1";
mainSection.style.alignItems = "stretch";
mainSection.style.flexWrap = "wrap";

const indexMenu = document.querySelector("#indexMenu");
indexMenu.style.width = "220px";
indexMenu.style.flexShrink = "0";

const contentSection = document.querySelector("#contentSection");
contentSection.style.flex = "1";
contentSection.style.minWidth = "280px";
contentSection.style.padding = "24px";
contentSection.style.boxSizing = "border-box";
// Pas de fond fixe ici : la couleur de fond (lue depuis le stockage client
// dans layout.js) doit rester visible à travers cette section.

// ---- Footer ----
const footer = document.querySelector("#footerSection");
footer.style.background = DARK_BG;
footer.style.color = "#dcdde1";
footer.style.textAlign = "center";
footer.style.padding = "18px 12px";
footer.style.fontSize = "13px";
footer.style.boxSizing = "border-box";

const footerParagraphs = document.querySelectorAll("#footerSection p");
footerParagraphs.forEach((p) => {
  p.style.margin = "6px 0";
});

const footerLinksContainer = document.querySelector("#footerLinks");
footerLinksContainer.style.display = "flex";
footerLinksContainer.style.justifyContent = "center";
footerLinksContainer.style.gap = "16px";

const footerLinks = document.querySelectorAll("#footerLinks a");
footerLinks.forEach((link) => {
  link.style.color = "#f1f2f6";
  link.style.textDecoration = "none";
  link.addEventListener("mouseenter", () => {
    link.style.color = ACCENT;
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#f1f2f6";
    link.style.textDecoration = "none";
  });
});
