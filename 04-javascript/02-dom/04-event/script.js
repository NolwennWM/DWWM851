"use strict";

function test(e)
{
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/* 
    Lorsqu'un utilisateur intéragie avec la page,
    il bouge la souris, il clique, il tape au clavier, il scroll...
    Cela produit un évènement, nous allons pouvoir dire à javascript d'écouter ces évènements et de faire une action à ce moment.

    Pour cela plusieurs méthode, la première étant :
    .addEventListener("event", fonction)
    Il prendra en premier paramètre le nom de l'évènement à écouter (toujours en minuscule)
    et en second la fonction à lancer lorsque l'évènement ce produit.
*/
h1.addEventListener("click", test);
/* 
    Par défaut, addEventListener va passer à la fonction donné, un paramètre contenant un objet correspondant à l'évènement.
    Ici un objet "Click" qui contient entre autre.
        La position de la souris au clique.
        La cible de l'évènement (où on a cliqué)

    On peut ajouter autant d'évènement que l'on souhaite sur un même élément.
    On peut aussi utiliser des fonctions anonyme ou fléché.
*/
let x = 0;
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);
    e.target.style.transform = `rotate(${r}deg)`;
    x++;
    if(x===5)e.target.style.color = "red";
});

const menu1 = document.querySelector('.menu1');
/* 
    On peut aussi ajouter un évènement via la propriété qui correspond.
    Chaque élément HTML a de multiples propriétés commençant par "on" suivi du nom de l'évènement.
    (onclick, onload...)
    Si cette propriété est remplie avec une fonction, cela aura le même effet
*/
menu1.onclick = test;
// On ne peut ajouter qu'un seul évènement sur une propriété :
menu1.onclick = (e)=>{
    if(e.target.style.fontSize === "")
        e.target.style.fontSize="2em";
    else
        e.target.style.fontSize="";
}
/* 
    Une troisième façon d'ajouter un écouteur d'évènement existe, mais celle ci est plutôt déconseillé car mélangeant HTML et JS.
    L'exemple se trouve dans le HTML sur "menu2";

    si on souhaite supprimer un écouteur d'évènement,
    pour l'attribut, il suffit de le vider :
*/
menu1.onclick= "";
/* 
    Pour le addEventListener, on utilisera removeEventListener, en lui donnant les même paramètres:
*/
h1.removeEventListener("click", test);
// Petit défaut, on ne peut retirer que les event utilisant une fonction nommé.

// ?------------ Input Event --------------------
const div1 = document.querySelector('.div1');
const input1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');
/* 
    L'évènement "input" réagis à chaque modification d'un élément de formulaire.
    (input, textarea, checkbox, radio...)
    Il existe aussi l'évènement "change" qui réagi une fois l'input validé. (par exemple sur un textarea, ou un input:text, cela sera une fois l'input quitté)
*/
input1.addEventListener("input", e=>{
    /* 
        Sur tous les élément HTML de formulaire, on trouvera l'attribut "value" qui permet de récupérer son contenue.
        (sa valeur)
    */
    console.log(e.target.value);
    if(e.target.value != "")
        btn1.textContent = e.target.value;
    else
        btn1.textContent = "Clique moi !";
})

// ? --------------- Options -------------------
/* 
    On peut ajouter des options à notre addEventListener.
    Pour cela on ajoutera un objet "{}" en troisième argument.
        ElementHTML.addEventListener("event", function, {option:valeur});
*/
btn1.addEventListener("click",()=>h1.textContent=input1.value,{once:true});

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');

/* 
    Si plusieurs évènements sont déclenchés par une même action (par exemple un clique).
    Alors l'ordre sera défini, du parent le plus proche au plus éloigné.

    JS fonctionne en deux phases, une phase de "capture" où il vérifie les évènements à déclencher allant des parents vers les enfants.
    Et une phase de "bulle" qui remonte en activant les évènements.
*/
div4.addEventListener("click", ()=>console.log("div4"), {capture: true});
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("pa");
});
en.addEventListener("click", ()=>console.log("en"));
/* 
    L'option "{capture:true}" permet d'activer l'évènement lors de la phase de capture, donc avant ceux en phase de bulle.

    Ajouter un "event.stopPropagation()" dans une fonction, permet d'empêcher l'execution des évènements qui devraient être activé par la suite.
*/
const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e=>e.preventDefault());

/* 
    "event.preventDefault()" permet d'annuler l'action par défaut de cet évènement.
        Un clique sur un lien ne redirigera pas.
        Une soumission de formulaire ne sera pas effectué...
*/