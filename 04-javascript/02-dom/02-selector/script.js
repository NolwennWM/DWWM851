"use strict";

/* 
    document.getElementsByTagName()
    Il permet de récupérer tous les éléments dont le nom de la balise vaut le paramètre donné:

    Si je veux tous les li de la page :
*/
const lis = document.getElementsByTagName("li");
console.log(lis, lis[0]);
/* 
    Peu importe qu'il y a aucun, un ou plusieurs résultats, ce sera rangé dans un objet appelé "HTMLCollection"
    Il fonctionnera un peu comme un tableau.
    si je veux le premier élément, je tape [0]

    Ici j'ai cherché dans tous mon document,
    Si je voudrais chercher par exemple, que dans le footer.
    Il me faudrait d'abbord selectionner le footer, 
        const footer = document.getElementsByTagName("footer");
    puis lui dire 
        footer[0].getElementsByTagName("li");
*/
lis[0].textContent = "Marbre";

/* 
    document.getElementsByClassName(),
    Il fonctionnera exactement comme getElementsByTagName, 
    si ce n'est qu'il selectionnera les éléments via le nom de leurs classes.
*/
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps, p1);

/* 
    document.getElementById()
    Il va récupérer l'élément HTML qui possède l'id donné en paramètre.
    Pas de HTMLCollection ici
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);

/* 
    querySelector()
    Il va selectionner le premier élément qui correspond à son paramètre.

    Il prendra en paramètre, un string, contenant n'importe quel selecteur CSS
*/
const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("body main>p.marche2.step");
console.log(p2);

/* 
    querySelectorAll()
    Il selectionnera tous les éléments qui correspond à son paramètre.

    à la différence des autres méthodes de selection,
    on obtient pas un objet "HTMLCollection"
    mais un tableau "NodeList"
*/
const lis2 = document.querySelectorAll("footer li");
console.log(lis2, lis2[0]);
/* 
    Pareillement qu'avec les précédents, je peux faire ma recherche dans un élément précis:
*/
const header = document.querySelector('header');
const h = header.querySelector('h1');

// ? ------------- Quelques Selecteurs Bonus ----------------


// ? ------------- Supprimer ou Déplacer ----------------