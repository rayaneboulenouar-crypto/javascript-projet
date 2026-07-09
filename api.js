// ==========================================================
// api.js - Fonctions CRUD utilisant fetch vers l'API mockapi
// ==========================================================

const API_URL = "https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire";

/**
 * Récupère la liste complète des utilisateurs (stagiaires)
 * @returns {Promise<Array>}
 */
function apiGetAll() {
  return fetch(API_URL)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });
}

/**
 * Récupère un seul utilisateur par son id
 * @param {string|number} id
 * @returns {Promise<Object|null>}
 */
function apiGetOne(id) {
  return fetch(API_URL + "/" + id)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });
}

/**
 * Ajoute un nouvel utilisateur
 * @param {Object} user
 * @returns {Promise<Object|null>}
 */
function apiAddUser(user) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });
}

/**
 * Modifie un utilisateur existant
 * @param {string|number} id
 * @param {Object} data
 * @returns {Promise<Object|null>}
 */
function apiUpdateUser(id, data) {
  return fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });
}

/**
 * Supprime un utilisateur
 * @param {string|number} id
 * @returns {Promise<Object|null>}
 */
function apiDeleteUser(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });
}
