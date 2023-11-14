"use strict";
document.chaussette;
// Pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D {
    // Je suis donc obligé d'implémenter toute les propriétés et méthode que défini "Point"
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; }
}
// Ma fonction attend une interface "Point" en argument.
function show(p) { }
;
// Je lui donne une classe "Point3D" qui respecte toute les règles de l'interface "Point"
show(new Point3D());
