"use strict";
// ?------------- DOM -----------------
/* 
    Le DOM ou Document Objet Model est une représentation sous forme d'objet, de notre document HTML.

    La plupart des méthodes (fonctions) qui y sont liés, passeront par l'objet "document"
*/
console.log(document);
// console.dir affiche le détail de l'objet sous chrome
console.dir(document);
/* 
    La méthode "createElement()" de l'objet "document"
    permet de créer un objet représentant une balise HTML.
    Il prendra en paramètre, un string indiquant le nom de la balise à créer.
*/
const h = document.createElement("header");
console.log(h);
/* 
    L'élément a été créé sous forme d'objet Javascript.
    Mais il n'est pas encore présent dans la page HTML
*/
const m = document.createElement("main");
const f = document.createElement("footer");
/* 
    Je peux modifier le contenu HTML de ma balise avec la propriété "innerHTML":
*/
h.innerHTML = "<h1>Super Site en JS</h1>";
f.innerHTML = /* html */ `<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>`
console.log(h,f);
/* 
    Mes éléments sont bien rempli, mais ils n'apparaissent toujours pas dans ma page HTML.

    Pour cela, je vais avoir besoin de selectionner le body :
*/
console.log(document.body);
/* 
    Par défaut, le body est "null"
    Cela est dû au fait que le script est executé avant que la balise "body" soit lu.
    Pour corriger cela, deux solutions:
        - Déplacer la balise script en bas de page.
        - Ajouter l'attribut "defer" au script, qui lui demandera de lancer celui ci, qu'une fois le HTML chargé complètement.

    Avant de travailler sur un élément HTML, 
    Cela peut être une bonne chose de vérifier qu'il existe :
*/
if(document.body)
{
    /* 
        La méthode ".append()" peut être utilisé sur n'importe quel élément HTML (non auto fermant).
        Elle prendra en argument, autant d'élément HTML (ou string), que souhaité.

        Elle ajoutera ces éléments à l'interieur de l'élément HTML qui la précède:
    */
    document.body.append(h, m, f);
    // Il existe aussi ".prepend()" pour ajouter au début.
}
for (let i = 0; i < 5; i++) 
{
    const p = document.createElement("p");
    /* 
        ".textContent" permet d'insérer du texte dans un élément html.
        Mais à la différence de ".innerHTML", les balises présentes ne seront pas interprété.

        Cela peut être utile, si votre ajout dépend de l'entré d'un utilisateur.
    */
    
    p.textContent = "<strong>Lorem, ipsum dolor </strong>sit amet consectetur adipisicing elit. Minima eius corrupti cumque blanditiis exercitationem aliquam eaque nesciunt repellendus praesentium! Id quas deleniti voluptatum maiores et nihil iure aperiam totam beatae?";
    /* 
        ".appendChild()" a le même rôle que ".append()"
        Mais ne peut prendre qu'un seul élément HTML,
        et pas de string.
    */
    m.appendChild(p);
}
