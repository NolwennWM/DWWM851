"use strict";
import P from "./Person.js";

P.setAge = 18;
P.nom = "dupONT";
P.prenom = "eRiC";

console.log(P.fullName);

P.salutation();
P.anniversaire();

console.log(P);
