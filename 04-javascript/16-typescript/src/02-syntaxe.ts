"use strict";
/* 
    Le principal apport de Typescript, est le typage comme son nom l'indique.
    C'est à dire que comme dans de nombreux langages, 
    Nous allons pouvoir indiquer le type de nos variables et arguments.
*/
const mot: string = "Bonjour";
const chiffre: number = 45;
const bool: boolean = true;
const nu: null = null;
// On peut aussi indiquer ce que contiendra nos tableaux.
const arr1: string[] = ["truc", "bidule"];
/* 
    Dans de rare cas, une variable doit pouvoir contenir n'importe quel type de valeur. 
    On utilisera alors le mot clef "any".
*/
let truc: any = 5;
truc = "bidule";
const arr2: any[] = ["truc", 45, true];
/* 
    Pour typer un objet, je vais devoir indiquer chaque propriété et chaque valeur.
    L'ajout d'un "?" sur une propriété, indique qu'elle est optionnelle.
*/
const person: {prenom:string, age?:number} = {prenom: "Maurice"};