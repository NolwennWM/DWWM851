"use strict";
const h1 = document.querySelector('#mainTitle');
console.dir(h1);
// ?------------------- L'attribut Style ------------------

/* 
    Sur tous nos éléments HTML, nous pourront trouver une propriété "style".
    En modifiant les propriétés de "style", nous pourront intégrer du CSS directement sur notre balise.

    !Attention, les propriétés CSS qui s'écrivent habituellements avec un "-", sont remplacé par une version camelCase.
        backgroud-color devient backgroundColor
*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

// Si on se trompe sur le nom de la propriété, aucune erreur n'est envoyé :
h1.style.couleur = "red"; // mais evidement ça ne fonctionne pas
// De même si la valeur est fausse :
h1.style.color = "rgbaa(255, 255,255,0.8)";

// ?-------------- Les classes ---------------------
/* 
    Changer le style peut être pratique mais très verbeux.
    On peut aussi choisir de changer une classe, et donc avoir toute les propriétés de cette classe qui s'appliquent ou non.

    Pour cela deux possibilité, 
    soit className qui permet de récupérer ou changer toute les classes d'un coup sous forme de string.
*/
console.log(h1.className);
// Je change toute les classes par "banane".
h1.className = "banane";
// Je supprime toute les classes.
h1.className = "";
// Si je veux ajouter une seule classe sans supprimer les précédentes.
h1.className += " banane";
/* 
    Soit classList qui retourne un objet "DOMTokenList" contenant toute les classes sous forme de tableau.
*/
console.log(h1.classList);
// Supprimer une classe :
h1.classList.remove("banane");
// J'ajoute une classe :
h1.classList.add('banane');
// J'ajoute ou supprime selon si la classe est déjà présente ou non:
h1.classList.toggle("banane");
// retourne true si la classe est présente, ou false dans le cas contraire.
console.log(h1.classList.contains("banane"));

// ?-------------- Les autres attributs ------------------
/* 
    Pour la plupart des autres attribut, 
    Il est possible soit de les appelers directement via leurs noms,
    soit via les méthodes "getAttribute" et "setAttribute"

    Ici les deux solutions ont le même effet
*/
console.log(h1.id, h1.getAttribute("id"));
// h1.setAttribute("id", h1.getAttribute("id")+"2");
h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);
// setAttribute prend en premier paramètre, l'attribut à changer, et en second, la valeur à lui donner.
a.setAttribute("target", "_blank");
// getAttribute prend en paramètre, l'attribut à récupérer
console.log(a.getAttribute("href"));

/* 
    On peut selectionner et modifier les data-attributes via ".dataset"
    suivi du nom du data-attribute
*/
console.log(a.dataset.color);
a.dataset.color = "Je ne suis pas une couleur !";
// Modifier un éléménet qui n'existe pas, l'ajoute :
a.dataset.bidule = "je ne sert à rien";