"use strict";
/* 
    Le shadow DOM permet de créer un DOM séparé du reste du DOM principal.
    Ce DOM fantôme obéit à ses propres règles, ignorant les scripts et styles appliqués au DOM parent.
    De même, les scripts et styles appliqués au DOM fantôme, n'influront pas le DOM parent.

    Pour créer un "hôte Fantôme (shadow host)", il suffit d'appeler sur l'élément HTML voulu, la méthode "attachShadow":
        * ElementHTML.attachShadow({mode:""})
            Le mode peut être "open" ou "closed"
        
        Le mode "open" rend accessible le shadowDOM depuis n'importe quel script. Alors que le "closed" est innaccessible.
*/

const op = document.querySelector('.open');
const cl = document.querySelector('.close');

const shadowpen = op.attachShadow({mode:"open"});
const shadowclose = cl.attachShadow({mode:"closed"});

// accessible :
console.log(op.shadowRoot);
// Inaccessible :
console.log(cl.shadowRoot);

/* 
    Dans l'exemple suivant, chacun des 3 h1 ne sont affecté que par le style de leur DOM.

    Pour l'exemple, j'utilise des feuilles de style interne, mais rien n'empêche d'utiliser des stylesheets externe.

    Le selecteur CSS ":host" correspond au "body" ou au ":root" de notre shadowDOM
*/
const style1 = document.createElement("style");
style1.textContent = /* CSS */
`
    :host{ text-align: right;}
    h1{ background-color: black;}
`;
const h01 = document.createElement("h1");
h01.textContent = "Je vois des fantômes dans les ombres";
shadowpen.append(style1, h01);

const style2 = document.createElement("style");
style2.textContent = /* CSS */
`
    :host{ text-align: center;}
    h1{ text-shadow: 5px 5px 5px red;}
`;
const h02 = document.createElement("h1");
h02.textContent = "Mon ombre cache un fantôme";
shadowclose.append(style2, h02);
/* 
    Si je tente de selectionner tous les H1, seul celui du DOM principal sera selectionné.

    Pour selectioner un élément du shadowDOM, il me faudra directement faire la recherche dans celui ci:
*/
const hx = document.querySelectorAll("h1");
console.log(hx, hx.length);

const hx1 = shadowpen.querySelector("h1");
const hx2 = op.shadowRoot.querySelector("h1");
console.log(hx1, hx2, hx1 === hx2);

const hx3 = shadowclose.querySelector("h1");
const hx4 = cl.shadowRoot?.querySelector("h1");
console.log(hx3, hx4, hx3 === hx4);

/* Maintenant, lions le custom Element et le shadow dom */
import SuperBalise from "./SuperBalise.js";