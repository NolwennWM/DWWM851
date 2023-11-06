"use strict";
/* 
    Une classe est un plan de construction pour un objet.

    Certaines classes sont déjà intégré par défaut à JS:
        "Date", "FormData"...

    Mais on peut aussi créer les notre.
        Pour cela on utilisera le mot clef "class" suivi du nom de la classe, puis d'accolade.
            * class MaSuperClass{}
    
    Quelques conventions de développement :
        - Une classe par fichier.
        - Le nom de la classe qui commence par une majuscule.
        - Le nom du fichier est le même que celui de la classe.
    
    Lorsqu'on voudra créer un objet à partir d'une classe,
    (On parle d'instancier un objet)
    On appellera le nom de la classe précédé du mot clef "new"
        * const monSuperObjet = new MaSuperClass();
*/

export default class Human
{
    /* 
        En javascript il existe 3 types de propriétés :

            - La propriété "public", qui est une propriété classique, comme on a pu en avoir jusqu'ici.
            - La propriété "privée", elle prend un "#" devant son nom,
                Elle n'est accessible que dans la classe elle même.
            - La propriété "static", elle est précédé du mot clef "static",
                Elle n'est accessible que sur la classe, et non sur l'objet instancié.

        (Les méthodes aussi peuvent être static ou privée)
    */
    vivant = true;
    #name = {};
    #age;
    static categorie = "Mammifère";
    /* 
        En POO, il existe certaines méthodes aux capacités prédéfinies.
        EN JS on retrouvera la plus commune, 
        le constructor.
        C'est une méthode que l'on ne peut pas appeler nous même, 
        elle est automatique appelée lors de l'instanciation de l'objet.

        Lors de la création de l'objet (avec le mot clef "new")
        Si des paramètres sont données, ils seront automatiquement transmit au constructeur :
    */
    /**
     * Créer un nouvel humain
     * @param {string} prenom Prénom de l'humain
     * @param {string} nom Nom de l'humain
     * @param {number|string} age Age de l'humain
     */
    constructor(prenom, nom, age)
    {
        console.log(prenom, nom, age);
        /* 
            Les propriétés privées doivent être déclarées à l'avance.
            Mais les publiques peuvent être créé à la volée:
        */
        this.createdAt = new Date();
        // this.#test = true;
        // this.#age = age;

        // J'utilise mes setters :
        this.#setAge = age;
        this.setNom = nom;
        this.setPrenom = prenom;
    }
    /* 
        On peut toujours créer des getters et des setters :
    */
    set setPrenom(p)
    {
        this.#name.prenom = p[0].toUpperCase()+p.slice(1).toLowerCase();
    }
    set setNom(n)
    {
        this.#name.nom = n.toUpperCase();
    }
    set #setAge(a)
    {
        this.#age = parseInt(a);
    }
    get getFullName()
    {
        return this.#name.prenom + " " + this.#name.nom;
    }
    get getAge()
    {
        return this.#age+ " ans";
    }
    // J'ajoute quelques méthodes :
    static description()
    {
        console.log(`Un humain est un ${this.categorie}, a généralement, une tête, un buste, deux bras et deux jambes.`);
    }
    salutation()
    {
        console.log(`Bonjour, Je suis ${this.getFullName} et j'ai ${this.getAge}`);
    }
    anniversaire()
    {
        this.#age++;
        // this.#age = this.#age+1;
        this.salutation();
    }
}