"use strict";
/* 
    Math.random() retourne un chiffre aléatoire entre 0 et 1
    Math.floor() retourne le chiffre arrondi à l'inferieur.
*/
let x = Math.floor(Math.random()*20);
console.log(x);

/* 
    Une condition cmmencera obligatoirement par un "if"
    il sera suivi de parenthèse contenant la condition
    puis d'accolade contenant l'instruction à réaliser.

    Si la condition est "true", alors l'instruction sera réalisé, 
    si elle est "false", elle sera ignoré.
*/
if(x < 10)
{
    console.log(x + " est plus petit que 10");
}
/* 
    On pourra faire suivre un "if" de 0 à autant que l'on souhaite de "else if(){}"
    Ce sont des conditions supplémentaires, qui seront vérifiés, uniquement si toute les précédentes sont fausse.
*/
else if(x > 10)
{
    console.log(x + " est plus grand que 10");
}
/* 
    On peut optionnellement ajouter un "else{}" qui ne prend aucune condition.
    Celui ci s'effectuera si tout ce qui précède est faux.
*/
else
{
    console.log("x vaut 10");
}

/* 
    Si la condition n'a qu'une seule instruction à effectuer, 
    alors les accolades peuvent être oubliées.
*/
if(x < 10) console.log(x + " est plus petit que 10");
else if(x > 10) 
    console.log(x + " est plus grand que 10");
else console.log("x vaut 10");

/* 
    On peut écrire une suite de condition sur une seule ligne, cela se nomme une ternaire.

    Il vaut mieux utiiser cela dans le cas d'une opération simple.
    syntaxe :
    condition ? true : false;
*/
let message = x<10 ? x + " est plus petit que 10": x +" est plus grand ou égale à 10";
console.log(message);
// Attention de ne pas aller trop loin avec les ternaires au risque de perdre en lisibilité :
message = 
    x<10 ? 
        x + " est plus petit que 10":
        x>10 ?
            x+"est plus grand que 10":
            "x vaut 10";
console.log(message);

// ? ---------------- SWITCH ------------------------
// Prompt affiche une boîte de dialogue où l'utilisateur peut rentrer un texte.
let ville = prompt("De quel ville venez-vous?");
console.log(ville);

// Si l'utilisateur appui sur "annulé", la valeur retourné sera "null"
if(ville == null) ville = "pas de réponse";

/* 
    switch permet de vérifier plusieurs cas,
    il prendra une variable entre parenthèse, 
    puis autant de "case" que l'on souhaite.
        Chacun représentera une valeur possible de notre variable.
        il sera suivi des instructions voulu, puis d'un "break" qui mettra fin au "case".
*/
switch(ville.toLowerCase())
{
    // Plusieurs cas sans break pour les séparer, entrainera la lecture de tout le code jusqu'au prochain break.
    case "tokyo":
    case "londre":
    case "paris":
        console.log("De la capital donc.");
        break;
    case "lille":
        console.log("Êtes vous un ch'ti?");
        break;
    default:
        console.log("Je ne connais pas cette ville.");
}