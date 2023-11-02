"use strict";
/* 
    La programmation orienté objet consiste à développer notre logique et nos fonctions à l'interieur d'objets.

    La plupart des langages demandent à passer par des classes et des constructeurs, mais en JS, on peut créer nos objets manuellement.

    On verra donc la POO classique dans un deuxième temps.
*/
const Person = {
    name:{
        prenom: "Maurice",
        nom: "Dupont"
    },
    age: 54,
    /* 
        En POO, nous pouvons utiliser des "setter" et des "getter".
        Ce sont des fonctions qui permettent de filtrer les données envoyés ou récupéré depuis notre objet.

        Leur déclaration ressemble à une fonction, mais leur utilisation se fait telle une propriété.

        Le setter se déclare précédé du mot clef "set" et prend obligatoirement un argument.
    */
    set setAge(a)
    {
        this.age = parseInt(a);
        if(isNaN(this.age))
            this.age = 0;
    },
    set nom(n)
    {
        this.name.nom = n.toUpperCase();
    },
    set prenom(p)
    {
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    /* 
        Les getter se déclarent avec le mot clef "get", et "return" forcément une valeur.
    */
    get fullName()
    {
        return `${this.name.prenom} ${this.name.nom}`;
    },
    /* 
        Nos objets peuvent aussi contenir des fonctions.
        Ici pas besoin de mot clef pour les déclarer.
        ! ATTENTION !
        En POO, on ne parle pas de variable ou de fonction d'un objet.
        Mais de propriété ou méthode d'un objet.
    */
    salutation()
    {
        console.log(`Bonjour, Je suis ${this.fullName} et j'ai ${this.age} ans`);
    },
    anniversaire()
    {
        this.age++;
        this.salutation();
    }
};
export default Person;