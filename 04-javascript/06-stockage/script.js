"use strict";

const dark = document.querySelector("#darkTheme");
dark.addEventListener("input", changeTheme);

function changeTheme()
{
    /* 
        Une première façon de changer un thème, est de modifier la classe du body.
        Ayant du CSS déjà prévu pour cela, le reste changera avec.
    */
    // document.body.classList.toggle("dark", dark.checked);
    /* 
        Une seconde façon de changer un thème, est de modifier les variables utilisés dans le CSS.
    */
    if(dark.checked)
    {
        document.documentElement.style.setProperty("--fond", "#333");
        document.documentElement.style.setProperty("--text", "antiquewhite");
        /* 
            Je sauvegarde une valeur (string) en localStorage,
            à la clef "theme".
        */
        localStorage.setItem("theme", "dark");
    }
    else
    {
        document.documentElement.style.setProperty("--fond", "antiquewhite");
        document.documentElement.style.setProperty("--text", "#333");
        /* 
            Je retire la valeur sauvegardé à la clef "theme"
        */
        localStorage.removeItem("theme");
    }
}
/* 
    Je récupère la valeur qui se trouve à la clef "theme"
    Si aucune n'est trouvé, il me retournera "null"
*/
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme();

/* 
    session et local storage permettent de sauvegarder des informations dans le navigateur sous forme de string.

    Ils utilisent les même méthodes l'un comme l'autre.

    La seule différence, est que sessionStorage sera supprimé si on quitte le navigateur.
*/
// sessionStorage.setItem("salutation", "Bonjours via session storage!");
// localStorage.setItem("salutation", "Bonjours via local storage!");

/* 
    .key(number) permet de récupérer les clefs via leur index
*/
console.log(localStorage.key(0));
/* 
    .clear supprime toute les entrés.
*/
// localStorage.clear();
