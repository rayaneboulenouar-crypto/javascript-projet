// ==========================================================
// storage.js - Gestion du stockage client (sessionStorage/localStorage)
// ==========================================================

const SESSION_KEY = "user";
const REMEMBER_KEY = "rememberMe";
const DEMANDES_KEY = "demandes";

/* ---------- Session utilisateur (sessionStorage) ---------- */

function saveSessionUser(user) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function getSessionUser() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function clearSessionUser() {
  sessionStorage.removeItem(SESSION_KEY);
}

function isLoggedIn() {
  return getSessionUser() !== null;
}

/* ---------- Se rappeler de moi (localStorage) ---------- */

function saveRememberMe(pseudo, motDePasse) {
  localStorage.setItem(
    REMEMBER_KEY,
    JSON.stringify({ pseudo, motDePasse })
  );
}

function getRememberMe() {
  const raw = localStorage.getItem(REMEMBER_KEY);
  return raw ? JSON.parse(raw) : null;
}

function clearRememberMe() {
  localStorage.removeItem(REMEMBER_KEY);
}

/* ---------- Mise à jour couleur utilisateur connecté ---------- */

function updateSessionUserField(field, value) {
  const user = getSessionUser();
  if (!user) return;
  user[field] = value;
  saveSessionUser(user);
}

/* ---------- Demandes (stockées localement, par utilisateur) ---------- */
// Structure : [{ id, userId, userNom, titre, description, statut }]
// statut: "attente" | "approuvee" | "rejetee"

function getAllDemandes() {
  const raw = localStorage.getItem(DEMANDES_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveAllDemandes(demandes) {
  localStorage.setItem(DEMANDES_KEY, JSON.stringify(demandes));
}

function addDemande(titre, description) {
  const user = getSessionUser();
  if (!user) return;
  const demandes = getAllDemandes();
  demandes.push({
    id: Date.now().toString(),
    userId: user.id,
    userNom: (user.prenom || "") + " " + (user.nom || ""),
    titre,
    description,
    statut: "attente",
  });
  saveAllDemandes(demandes);
}

function getDemandesByUser(userId) {
  return getAllDemandes().filter((d) => d.userId === userId);
}

function cancelDemande(demandeId) {
  let demandes = getAllDemandes();
  demandes = demandes.filter(
    (d) => !(d.id === demandeId && d.statut === "attente")
  );
  saveAllDemandes(demandes);
}

function setDemandeStatut(demandeId, statut) {
  const demandes = getAllDemandes();
  const d = demandes.find((x) => x.id === demandeId);
  if (d) d.statut = statut;
  saveAllDemandes(demandes);
}
