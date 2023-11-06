"use strict";
import H from "./Human.js";
// ? ---------- Class ----------------
const humain = new H("Maurice","Dupont", 54);
console.log(H,humain);

// ? ---------- Static ----------------
// Je peux appeler ma propriété "static" sur ma classe, mais pas sur l'objet.
console.log(humain.categorie, H.categorie);
// Exemple :
console.log(Date.now());
/* const n = new Date();
console.log(n.now()); */
H.description();
// humain.description();

// ? ---------- Private ----------------
// Je ne peux pas accèder à mes propriétés privés :
console.log(humain.vivant);
// console.log(humain.#name);

humain.setPrenom = "Gunter";
// humain.#setAge = 32;

humain.salutation();
humain.anniversaire();
// ? ---------- Heritage ----------------
import D from "./Dev.js";

const dev = new D("Fred", "Fontaine", 18, ["Javascript", "PHP"]);

dev.salutation();
dev.anniversaire();