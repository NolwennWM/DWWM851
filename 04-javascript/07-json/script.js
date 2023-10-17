"use strict";
/* 
    JSON signifie JavaScript Object Notation
    Il a principalement deux rôles.
    Le premier est de stocker des données complexes tel que des objets ou des tableaux sous forme de string.
    Le second est de pouvoir partager des données entre plusieurs langages à la syntaxe différente.
    On pourra aussi créer des fichiers JSON qui seront donc lisible par n'importe lequel de ces langages.

    Ici on va récupérer les données d'un formulaire, les stocker sous forme de json en localStorage, et les récupérer.
*/
const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e)
{
    e.preventDefault(); // évite qu'il y ai un refresh de page
    // Je crée un objet FormData qui contiendra les données du formulaire donné en paramètre
    const data = new FormData(form);
    // console.log(data);
    const user = {};
    // Je boucle sur mon FormData pour obtenir les valeurs et noms des champs du formulaire
    data.forEach((value, name)=>{
        // console.log(value, name);
        // Je rempli mon objet vide avec les données du formulaire
        user[name] = value;
    });
    // J'obtien un objet contenant toute les informations de mon formulaire.
    console.log(user, typeof user);
    showUser(user);
    // Je transforme mon objet en données JSON (sous forme de string)
    const strUser = JSON.stringify(user);
    console.log(strUser, typeof strUser);
    // mon JSON étant un string, je peux le sauvegarder en localStorage
    localStorage.setItem("user", strUser);
}
/**
 * Affiche le prénom et l'âge de l'utilisateur dans le h1.
 * @param {object} u objet contenant une propriété prenom et une propriété age
 */
function showUser(u)
{
    const h1 = document.querySelector('h1');
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`;
}

const userString = localStorage.getItem("user");
if(userString)
{
    console.log(userString, typeof userString);
    /* 
        l'objet JSON n'a que deux méthodes.
            - parse : convertit une chaine de caractère en Objet JavaScript
            - stringify : convertit un Objet JS en chaîne de caractères
    */
    const user = JSON.parse(userString);
    console.log(user, typeof user);
    showUser(user);
}