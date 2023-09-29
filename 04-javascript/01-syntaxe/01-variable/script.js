"use strict";
// Commentaire sur une seule ligne.
/* 
    Commentaire sur 
    plusieurs 
    lignes

    "use strict", les navigateurs sont capable de corriger certaines petites erreurs de syntaxe.
    faire commencer son script par "use strict", indique au navigateur de ne pas corriger ces erreurs.

    Une instruction (une ligne de code) JS peut se terminer soit par un ";" soit par un saut à la ligne.
*/
// ---------- Déclaration des variables -----------
/* 
    Il existe trois mtos clefs pour déclarer une variable.
    Les noms de variable peuvent contenir n'importe quel lettre, chiffres, et autres, mais ne peuvent pas commencer par un chiffre.

    "let" est le mot clef de déclaration de variable le plus conseillé.
*/
let banane;
console.log("banane :", banane);
// "var" déclare une variable avec une plus grande portée.
var tomate = 3;
// Je peux définir une variable au moment de sa déclaration, ou plus tard.
console.log("tomate :", tomate);
// "const" permet de déclarer une "constante"
const cerise = 5;
console.log("cerise :", cerise);
/* 
    Une "constante" est une variable qui une fois définie, ne peut pas changer.
    On est d'ailleurs obligé de la définir au moment de la déclaration.
    Sinon, const utilise les même règles de portée que "let".

    Quelques erreurs de déclaration et définition :
*/
// cerise = 2; changer la valeur d'un const n'est pas possible
// let banane; redéclarer un let n'est pas possible.

// Je peux déclarer plusieurs variables avec un seul mot clef, en les séparants d'une virgule.
let a, b=8, c;

// ? --------------- La portée des variables ----------------

/* 
    Lorsque l'on code, on va créer des "bloc" souvent représenté par "{}",
    que ce soit des conditions, des fonctions, ou même en JS juste un "bloc" séparé du reste.
    C'est là qu'entre en jeu, la portée des variables.
    "var" à une portée dite "global", elle sera accessible et modifiable depuis bien plus d'endroit que "let".
    Ce dernier a été créé pour éviter les erreurs de modification d'une variable par accident.
*/
let gLet = 1;
var gVar = 1;
{
    let hLet = 2;
    var hVar = 2;
    // Toute mes variables sont accessible.
    console.log(gLet, gVar, hLet, hVar);
    {
        // Dans ce bloc ci, elles le sont toujours.
        console.log(gLet, gVar, hLet, hVar);
    }
}
// un let déclaré dans un bloc, n'existe que dans celui ci ou ses descendants.
console.log(gLet, gVar, /* hLet, */ hVar);

{
    // Aucune erreur à redéclarer une variable si elle est dans un bloc différent.
    let gLet = 5;
    var gVar = 5;
    console.log("Dans le bloc :", gLet, gVar);
}
/* 
    Les deux "let" portant le même nom, sont deux variables différentes dans le bloc et hors du bloc.
    Alors que les deux "var" sont bien la même variable. le "1" a disparut pour laisser place à "5"
*/
console.log("Hors du bloc :", gLet, gVar);
{
    gLet = 9;
    gVar = 9;
    console.log("Dans le bloc :", gLet, gVar);
}
console.log("Hors du bloc :", gLet, gVar);

// ? ----------- types des variables -------------------
let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;

console.log("num", typeof num); // type number
console.log("str", typeof str); // type string
console.log("bol", typeof bol); // type boolean
console.log("arr", typeof arr); // type object
console.log("obj", typeof obj); // type object
console.log("und", typeof und); // type undefined

/* 
    Il y a donc 5 types principaux à JS.
    les tableaux et les objets sont de type "object"

    Javascript est un langage dit "non typé", c'est à dire que l'on n'a pas besoin d'indiquer le type d'une variable.
    Elle peut d'ailleurs changer à la volée :
*/
bol = 42;
console.log("bol MaJ", typeof bol);

// ? ---------------- chaînes de caractères (string) --------------
/* 
    Pour définir un string, nous pouvons utiliser 3 caractères différents :
    ""  ''  ``
    Les guillemets et apostrophes n'ont aucune différence dans leurs utilisations.
    Mais le backtick lui apporte des fonctionnalités.
*/
let s1 = "Coucou", s2 = 'Coucou', s3 = `Coucou`;

s1 = "L'apostrophe ne pose aucun problème ici.";
s2 = 'L\'apostrophe pose un problème ici';
s1 = "Le grand ordinateur à dit \"42\"";
s2 = 'Le grand ordinateur à dit "42"';
/* 
    "\" avant un caractère, permet d'indiquer à JS d'échaper ce dernier, afin qu'il ne soit pas prit en compte. 

    En programmation, nous avons parfois besoin de fusionner plusieurs string ensemble, ou alors une variable avec un string.
    Cela se nomme la "concaténation".
    en JS, nous utiliseront le symbole "+" pour faire cela
*/
s1 = "Karl";
s2 = "Bonjour "+ s1 + " Comment vas tu?";
console.log(s2);
/* 
    Une autre possibilité pour intégrer une variable dans une string.
    C'est "l'interpolation". en JS cela ne fontionne qu'avec les backticks ``
    pour cela on integrera la variable dans cette syntaxe :
    ${variable}
*/
s3 = `Bonjour ${s1} Comment vas tu?`;
console.log(s3);

// Avec les "" ou les '', je ne peux pas sauter à la ligne :
/* s1 = "Cela ne 
fonctionne pas"; */
// Si on souhaite un saut à la ligne, on pourra toujours utiliser "\n"
console.log("Coucou \n tout le monde");
// Mais on peut aussi utiliser les ``;
s3 = `Vive les sauts
    à la ligne`;
console.log(s3);

// ? ------------- Les nombres -----------------
/* 
    Les grands nombres peuvent être écrit avec un "_" pour plus de lisibilité.
 */
console.log(9999999, 9_999_999);
// Mais attention, JS perd en précision avec les très grand nombre :
console.log(9999999999999999,9_999_999_999_999_999);
// JS peux avoir quelques problèmes avec les nombres à virgule parfois :
console.log(0.2 + 0.1);

// les opérations mathématiques disponibles sont :
console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%5,
    5**5
);
// "%" le modulo est le reste d'une division.
// "**" est la puissance.
console.log(
    5 + "5",
    5 - "5",
    5 + "Banane",
    5 - "Banane"
);
// NaN est un nombre. (Not a Number)
console.log(typeof NaN);
// BANANA !
console.log(("b"+"a"+ +"a"+"a").toLowerCase());
// Il existe une fonction qui permet de vérifier si un calcul retourne "NaN"
console.log(isNaN(5-"chaussette"), isNaN(5-"1"));

// Infinity représente la plus grande valeur utilisable en JS
console.log(Infinity, -Infinity);

// Les opérateurs d'affectation permettent un calcul tout en changeant la valeur d'une variable.
let n = 0;
n = n +2;
// Ces deux lignes ont le même effet.
n+=2;
n-=4;
n*=3;
n/=6;
n%=2;
n**=5;
console.log(n);

// Il arrive souvent que l'on veuille augmenter ou réduire de 1, et écrire n+=1 c'est encore trop long.
n++; // équivaut à n+=1 qui équivaut à n = n + 1;
n--;
++n;
--n;
/* 
    Lorsque l'on utilise "++" on parle d'incrémentation.
    et "--" de décrémentation.
    la différence entre mettre ces signes, avant ou après la variable.
    se fera lorsque l'on utilise cette variable en même temps que l'incrémenter (ou décrémenter).
*/
console.log("n", n); // 0
console.log("n++", n++); // 0
console.log("n", n); // 1
console.log("++n", ++n); // 2
console.log("n", n); // 2

n = 17;
// .toString() permet de transformer un nombre en string.
console.log(n, n.toString(), n);
// On peut optionnellement ajouter un paramètre pour changer la base mathématique.
console.log(n, n.toString(2));

// Et inversement on peut transformer un string en nombre avec "parseInt()"
let s = "10011101";
console.log(s, parseInt(s),s);
// Il peut aussi prendre un paramètre supplémentaire pour changer la base mathématique.
console.log(s, parseInt(s, 2));

//Si on veut récupérer un nombre à virgule, on utilisera "parseFloat()"
s = "3.14";
console.log(s, parseInt(s), parseFloat(s));

// ? Différentes méthodes (fonctions) de la console :
// Une erreur :
console.error("Je suis une erreur !");
// Un warning :
console.warn("Attention à ce que tu fais !");
// une information :
console.info("Petite information !");
// Ajouter du CSS à la console.
console.log("%c Coucou tout le monde !", "background:chartreuse;color:red;");

// ? ----------- Les tableaux (array) -------------------
/* 
    Un tableau est une liste d'élément. 
    Il peut être déclaré de deux façons différentes :
*/
let 
    a1 = [5, "truc", true],
    a2 = new Array(5, "truc", true);
    
console.log(a1, a2);
/* 
    Pour accèder à un élément précis du tableau,
    il me faut faire suivre la variable contenant celui ci,
    de crochets "[]" dans lesquels j'indique l'index que je souhaite voir.
*/
console.log(a1[1]);
// .length permet d'indiquer la taille du tableau.
console.log(a1.length);
// Pour obtenir le dernier élément d'un tableau de taille variable.
console.log(a1[a1.length-1]);
// Depuis Ecmascript 2022, il est aussi possible de faire ceci :
console.log(a1.at(-1));

// Cela fonctionne aussi avec un string :
console.log("Salut".at(-1), "Salut"[2]);

// Pour ajouter un élément à la fin du tableau :
a1.push("Bidule");
console.log(a1);
// Pour retirer un élément à la fin du tableau :
a1.pop();
console.log(a1);
// retirer un élément au début du tableau :
a1.shift();
console.log(a1);
// Ajouter un élément au début du tableau :
a1.unshift(42);
console.log(a1);
// Supprime l'index indiqué et ce qui suis :
a1.splice(1);
console.log(a1);
// Supprime à partir de l'index indiqué, le nombre d'élément choisi.
a2.splice(1,1);
console.log(a2);
// On rempli un peu notre tableau
a2.push(1, 2,3,4);
console.log(a2);
// On supprime à partir de l'index indiqué, le nombre d'élément choisi et on les remplace par ce qui suis.
a2.splice(1, 1, "chaussette", "banane");
console.log(a2);
// On peut juste insérer en lui disant de ne rien supprimer :
a2.splice(2, 0, "cerise");
console.log(a2);

let a3 = [4, 1, 12, 42, 8, 14];
// .sort() permet de trier par ordre alphabétique... même les nombres.
a3.sort();
console.log(a3);
// Il sera possible d'améliorer sort, mais on verra cela dans le cours sur les fonctions.

// Il est aussi possible d'ajouter un élément au tableau en lui indiquant l'index à prendre.
a1[8] = "pomme";
// Mais si l'index n'est pas le dernier, il crera des "empty slot" pour combler.
console.log(a1);
// On prefera dans ce cas lui dire :
a2[a2.length]= "pomme";
console.log(a2);

// Si on souhaite faire une copie d'un tableau :
let a4 = a2;
console.log(a4);
a4[0] = "saperlipopette";
console.log(a4, a2);
/* 
    Ici mes deux tableaux sont modifiés.
    car pour les objets et les tableaux, 
    ce qui se trouve dans la variable, n'est pas une valeur, mais une adresse vers la position du tableau dans la mémoire de l'ordinateur.
    En modifiant l'un, on modifie le tableau qui se trouve à cette même adresse.

    Pour éviter cela, on décomposera le tableau grâce au "spread operator", 
    représenté par "..."
*/
console.log(a2, ...a2);
a4 = [...a2];
a4.push("coucou");
console.log(a2, a4);