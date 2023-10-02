"use strict";

// ? --------------- While ---------------

/* 
    while va vérifier que ce qui se trouve entre parenthèse est "true" ou "false"
    et répéter l'action entre accolade "tant que" c'est "true".
    ! Attention, de toujours avoir un moyen de sortir de votre boucle.
    Le navigateur pourra facilement faire des centaines ou des milliers de boucle, mais si il en fait à l'infinie, il plantera.
*/
let a = true;
while (a) 
{
    console.log("Coucou");
    // Si mon nombre aléatoire est plus grand que 0.5, alors la boucle s'arrêtera
    a = Math.random()<0.5;
}
let b = 0;
while(true)
{
    b++;
    // continue met fin à l'itération actuelle et passe à la suivante.
    if(b<10) continue;
    // break met fin à la boucle.
    if(b === 20)break;
    console.log("b vaut ", b);
}
// "do while" va effectuer son action une première fois, avant de vérifier si il doit recommencer.
do
{
    console.log("do while : b vaut ", b);
}while(b<5)

// ? -------------- FOR ----------------

/* 
    for va prendre 3 instructions entre ses parenthèses.
    - La première est une déclaration de variable lancé avant le début de la boucle.
    - La seconde est une condition qui sera vérifié avant chaque itération.
    - La troisième, une modification de la variable lancé à la fin de chaque itération.
*/
for(let i = 0; i < 10; i++)
{
    console.log(`i vaut ${i}`);
}

let arr = ["pizza", "cannelé", "gratin dauphinois"];
let person = {nom: "Pierre", age: 55, yeux: "vert"};

/* 
    "for in" va créer une itération pour chaque valeur dans le tableau ou l'objet suivant le mot clef "in".
    à chaque itération, la variable définie entre parenthèse se verra attribué une nouvelle valeur.

    Pour un tableau, cela correspondra à chaque index du tableau.
    Pour un objet, cela correspondra  à chaque nom des propriétés.
*/
for(let food in arr)
{
    console.log(`food vaut ${food} -> ${arr[food]}`);
}
for(let carac in person)
{
    console.log(`carac vaut ${carac} -> ${person[carac]}`);
}
/* 
    "for of" fonctionnera de la même façon que "for in"
    Si ce n'est qu'il récupère directement la valeur et non l'index.

    Il ne fonctionne pas avec les objets.
*/
for(let f of arr)
{
    console.log(`f vaut ${f}`);
}
// Ceci retourne une erreur :
// for(let c of person){}

// ? ------------- Boucle de tableau --------------
/* 
    Il existe tout un tas de méthode (fonction) spécifique aux tableaux qui permettent de boucler dessus.
    Ici on va voir forEach et map, mais il en existe d'autres comme "reduce" par exemple.
        tableau.forEach(fonction);
        tableau.map(fonction);

    Il existe plusieurs façon de donner une fonction en paramètre d'une autre. Mais on verra cela dans le cours sur les fonctions.

    forEach va produire une boucle pour chaque élément du tableau.
    à chaque boucle il appellera la fonction donnée en paramètre.
    et placera l'élément du tableau en paramètre de cette fonction.
    Si on donne un second paramètre à la fonction, il pourra aussi récupérer l'index.
*/
arr.forEach((f)=>console.log(`forEach: f vaut ${f}`));
arr.forEach((f, i)=>console.log(`forEach: f vaut ${f} et i vaut ${i}`));

/* 
    "map" va permettre de créer un nouveau tableau à partir d'un ancien.
    De même que pour forEach, il va boucle sur chaque élément du tableau.
    Mais il se servira des valeurs que l'on aura modifié (ou non), pour créer un nouveau tableau.
*/
let newArr = arr.map((f)=>f.toUpperCase());
console.log(arr, newArr);