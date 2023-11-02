"use strict";

/* 
    En JS tout est objet !
        "console" est un objet
        "document" est un objet
        "Math" est un objet...

    Notre code se trouve lui même dans l'objet "window".

    par défaut, "this" représente l'objet dans lequel il se trouve.
    Au plus haut niveau de notre script, il est donc égale à l'objet "window".
        * à l'exception d'un script type module
*/ 
console.log(this, this === window);
/* 
    Dans une fonction il sera soit "undefined" si on utilise "use strict";
    soit il prendra l'objet parent (ici window);
*/
function test()
{
    console.log(this);
}
test();
/* 
    Dans un écouteur d'évènement, "this" représente l'élément sur lequel l'écouteur a été placé.
*/
document.body.addEventListener("click", test);
/* 
    à la différence de "event.target" qui renvera l'élément sur lequel l'évènement à lieu.
        (dans ce cas précis, soit body, soit span)
    this renverra toujours le même élément.
        (ici body)
*/
document.body.addEventListener("click", function(event){
    console.log(this, event.target);
});
/* 
    ! Attention,
        Dans le cas d'une fonction fléchée, "this" retournera l'élément englobant.
        ici "window"
*/
document.body.addEventListener("click", (event)=>{
    console.log(this, event.target);
});
/* 
    La méthode "function.bind(param)" permet de créer une nouvelle fonction, à partir d'une existante.
    Cette nouvelle fonction aura un "this" correspondant au paramètre de "bind".
*/
const test2 = test.bind({text: "Salut tout le monde !"});
test();
test2();

/* 
    Bind pourra être utile pour définir un "this" précis.
*/
let article = document.createElement("article");
document.body.addEventListener("click", test.bind(article));

document.body.click();
// Par la suite nous utiliserons "this" dans nos objets.