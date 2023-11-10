"use strict";
/*
    Le principal apport de Typescript, est le typage comme son nom l'indique.
    C'est à dire que comme dans de nombreux langages,
    Nous allons pouvoir indiquer le type de nos variables et arguments.
*/
const mot = "Bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
// On peut aussi indiquer ce que contiendra nos tableaux.
const arr1 = ["truc", "bidule"];
/*
    Dans de rare cas, une variable doit pouvoir contenir n'importe quel type de valeur.
    On utilisera alors le mot clef "any".
*/
let truc = 5;
truc = "bidule";
const arr2 = ["truc", 45, true];
/*
    Pour typer un objet, je vais devoir indiquer chaque propriété et chaque valeur.
    L'ajout d'un "?" sur une propriété, indique qu'elle est optionnelle.
*/
const person = { prenom: "Maurice" };
// Si un objet peut avoir des propriétés supplémentaires, on peut lui indiquer ainsi :
const person2 = { prenom: "Charles", nom: "Dupont" };
/*
    J'ai indiqué ici que les possibles propriétés supplémentaires ont des clefs sous la forme de string contenant elle même des strings.

    Dans le cas d'une instanciation de classe, on peut simplement utiliser le nom de la classe en type.
*/
const today = new Date();
/*
    Plus rare, si on place une fonction dans une variable,
    On peut le typer avec "Function"
*/
const salut = function () { };
/*
    En parlant de fonction,
    il est possible de typer les arguments,
    ainsi que la valeur de retour, en plaçant les ":type" après les parenthèses des arguments.
    "void" est le mot clef indiquant que rien n'est retourné.
*/
function clickMe(e) {
    console.log("Merci de cliquer sur ", e.target);
}
/*
    clickMe attend une event "PointerEvent",
    seul un évènement "pointer..." lui donnera ce type d'Event,
    Utiliser un autre type d'event provoquera une erreur.
*/
// document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);
/*
    On peut aussi indiquer qu'un argument d'une fonction est en lecture seule.
    C'est à dire qu'il ne peut pas être modifié.
*/
function tri(arg) {
    // Impossible de trier le tableau en readonly
    // arg.sort();
    // Mais je peux trier sa copie
    return [...arg].sort();
}
/*
    La plupart du temps, indiquer le type d'une variable, peut être optionnelle.
    TS le déclare lui même selon sa première valeur :
*/
let a = 5;
// a = "truc";
/*
    Mais parfois TS peut se tromper ou avoir des doutes,
    par exemple si une fonction peut retourner plusieurs valeurs différentes.
*/
// const btn1 = document.querySelector("#compte");
// btn1.style.color = "red";
/*
    Ici deux erreurs :
        si querySelector ne trouve pas d'élément, il retournera "null"
        et style n'existe pas sur "null".
        Et si il trouve quelque chose, il retourne un "Element"
        et style n'existe pas non plus sur "Element"
    Il existe plusieurs façon de corriger cela.
    Pour certaines d'entre elles, attention que votre selecteur CSS soit bon.

    Ici on indique que le résultat du querySelector sera forcément un HTMLButtonElement.
*/
// const btn1 = document.querySelector("#compte") as HTMLButtonElement;
// btn1.style.color = "red";
/*
    même résultat qu'avec "as"
*/
const btn1 = document.querySelector("#compte");
btn1.style.color = "red";
/*
    Le "!" indiquera seulement qu'il ne sera pas "null".
    Ne réglant ici qu'un des deux problèmes.
*/
// const btn1 = document.querySelector("#compte")!;
// btn1.style.color = "red";
/*
    Ici on indique que la valeur de retour ne sera pas "Element" mais "HTMLButtonElement"
    Ne réglant ici aussi qu'un seul des deux problèmes.
*/
// const btn1 = document.querySelector<HTMLButtonElement>("#compte");
// btn1.style.color = "red";
/*
    Parfois une variable peut avoir plusieurs types possibles.
    On utilisera alors l'union type avec "|"
*/
let y = 5;
y = "truc";
y = true;
