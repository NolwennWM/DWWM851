"use strict";
/**
 * Affiche un message de salutation
 */
export default function bonjour()
{
    console.log("Bonjour les gens !");
}
/**
 * Affiche un message de salutation
 */
export function salut()
{
    console.log("Salut la populace !");
}
/**
 * Affiche un message de salutation
 * @param {string} name Nom d'une personne
 */
export function coucou(name)
{
    parler(name, "Coucou tout le monde !");
}
/**
 * Affiche un message précédé par un nom.
 * @param {string} nom Nom d'une personne
 * @param {string} text message
 */
function parler(nom, text)
{
    console.log(`${nom} : ${text}`);
}
console.log("Salutation Importé !");