"use strict";
/* 
    Les interfaces sont à la jonction entre les types et les classes abstraites.
    à la différence des classes abstraites, l'interface ne contiendra que des déclarations, sans aucune définition ou valeur.
    à la différence des types, l'interface sera réservé aux objets et pourra être redéfini (fusionné)
*/
type Chaussette = string;
// Je ne peux pas le changer :
// type Chaussette = number;

interface Point
{
    x:number;
    y:number;
    get():number;
}
// Pas d'erreur, les deux ont fusionnés
interface Point {z:number}
// Je peux très bien changer une interface déjà définie dans vscode
interface Document{chaussette:string}
document.chaussette;

// Pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D implements Point
{
    // Je suis donc obligé d'implémenter toute les propriétés et méthode que défini "Point"
    x=0;
    y=0;
    z=0;
    get(){ return this.x; }
}
// Ma fonction attend une interface "Point" en argument.
function show(p: Point){};
// Je lui donne une classe "Point3D" qui respecte toute les règles de l'interface "Point"
show(new Point3D());