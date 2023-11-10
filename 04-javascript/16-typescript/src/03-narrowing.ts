"use strict";
/* 
    Le narrowing en Typescript est le fait de supprimer des possibilités de types pour nos variables.
*/
function birthday(age: string|number): string
{
    // age peut être un string, donc l'incrémentation est une erreur
    // age++
    if(typeof age === "number")
    {
        age++;
    }
    else
    {
        age = parseInt(age)+1;
    }
    /* 
        Dans le "if" age devient forcément un type nombre,
        Dans le "else" age devient forcément un type string.
    */
    return age+" ans";
}

function chaussette(droite: string|boolean, gauche: string|number)
{
    if(droite === gauche)
    {
        console.log("Vous avez la paire !", droite, gauche);
        /* 
            Pour entrer dans la condition, droite et gauche doivent être égales.
            La seule possibilité c'est que ce soit tout les deux des strings.
        */
    }
}
function planning(date: Date|string, days: string[]|number)
{
    // date.getDate();
    if(date instanceof Date)
    {
        date.getDate();
    }
    // days++;
    if(!Array.isArray(days))
    {
        days++;
    }
}

function clavier(e:KeyboardEvent|HTMLElement)
{
    if(typeof e === "number")
    {
        console.log(e);
        /* 
            Ici "e" est de type "neveṙ"
            Cela signifie, que selon "typescript", il est impossible d'arriver ici.
        */
    }
}
/* 
    Si j'indique qu'une fonction ayant pour rôle de faire du narrowing,
    retourne un boolean.
    La logique humaine permet de comprendre la connexion entre ce boolean et le rôle de la fonction.
    Mais pour typescript, il comprend juste que la fonction retourne un boolean, sans savoir son rôle.

    Pour indiquer à typescript le rôle de ce boolean, 
    nous pouvons remplacer le type de retour par "argument is Type"
    ici on a mit "a is Date" pour lui indiquer que le boolean servira à préciser si l'argument est une Date.
*/
// function isDate(a: any): boolean
function isDate(a: any): a is Date
{
    return a instanceof Date;
}
function check(a:Date|HTMLElement)
{
    if(isDate(a))
    {
        console.log(a);
    }
}
