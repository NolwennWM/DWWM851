"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress');

/* 
    Certains objets sont créé à partir de classe.
    Nous rentrerons dans les détails dans le cours sur la POO.

    Mais pour créer ces objets, nous devont faire précéder leurs noms du mot clef "new"

    cela va créer une nouvelle instance de l'objet.
    C'est le cas de l'objet "Date"
    qui contiendra l'heure et la date du moment de sa création
*/
const date = new Date();
console.log(date);
// Cet objet contient tout un tas de méthodes pour récupérer les différentes informations sur la date et l'heure :
copyright.textContent = date.getFullYear();

// .toLocateTimeString() nous rend l'heure, les minutes et les secondes sous forme de string.
mainTime.textContent = date.toLocaleTimeString();

function timer()
{
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
}
/* 
    setInterval permet de relancer une fonction à un rythme régulier.
    Il prend la fonction à relancer en premier paramètre.
    Et le temps entre chaque appel en second paramètre (en milliseconde)

    La fonction setInterval retournera un id que l'on pourra optionnellement réutiliser ailleurs.
*/
let idInterval = setInterval(timer, 1000);
console.log(idInterval);

// La fonction "clearInterval()" permet de supprimer un interval. Elle prendra en paramètre, l'id de l'interval à supprimer.
mainBtn.addEventListener("click", ()=>clearInterval(idInterval));

/* 
    setTimeout() fonctionne comme setInterval, prend les même paramètres, 
    retourne elle aussi un identifiant qui peut être utilisé pour l'arrêté avec "clearTimeout()"

    La seule différence, qu'au lieu de relancer la fonction à rythme régulier, elle ne la lancera qu'une fois, après avoir attendu le temps donné en paramètre.
*/
let idTimeout = setTimeout(()=>console.log("Coucou en retard !"), 3000);

clearTimeout(idTimeout);

let w = 0;

function load()
{
    console.log(w);
    if(w === 100) return;
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100)
}
load();
