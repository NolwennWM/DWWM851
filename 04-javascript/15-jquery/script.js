"use strict";
/* 
    JQuery fut crée en 2006 par John Resig,
    Il est représenté par la phrase "Faire plus en écrivant moins"
    Il permet de faire du JS plus rapidement et plus simplement.

    Enfin ceci était vrai à l'époque car JS a bien évolué et gère pas mal de choses maintenant.
    Ici nous allons voir certaines bases de JQuery, mais si vous souhaitez l'approfondir,
    Vous pouvez allez lire la documentation.

    Jquery peut être utilisé via CDN, en téléchargement le fichier ou bien via NPM (ou autre package manager)

    JQuery reste du Javascript, donc toute les fonctions JS classique fonctionnent.
    Seul certains objets rendu par JQuery sont spécifique à celui ci, et donc les méthodes classiques pourraient ne pas fonctionner.

    $("") Sert à la fois pour "querySelectorAll" et pour "createElement".
    $("div") selectionne toute les divs.
    $("<div>") Crée une nouvelle div.
*/
const btnSlide = $("#slide");
console.log(btnSlide);
// addEventListener 
btnSlide.on("click", slideTitle);

function slideTitle()
{
    /* 
        Certains effects classiques des animations CSS, telle que "fade", "slide" ou "hide" sont implémentés de base dans jquery.
        Cela avec les méthodes "slideIn()", "slideOut()", "slideToggle()" et de même pour les autres animations.

        On pourra donner en argument, une durée pour l'animation, puis optionnellement, une fonction à lancer une fois l'animation terminé.
    */
    $("h1").slideToggle(1000, function(){
        console.log("Toggle terminé !");
        /* 
            Pour accèder aux propriétés CSS avec Jquery, on utilisera la méthode ".css()".
            Elle prendra 1 seul argument si on veut récupérer la valeur.
            Et deux arguments si on veut la modifier :
                .css("color"), on récupère la couleur.
                .css("color", "red") on modifie la couleur.
        */
       const color = btnSlide.css("background-color") === "rgb(255, 0, 0)"? "green":"red";
       console.log(color);
       btnSlide.css("background-color", color);
    });
}
// document.querySelectorAll("#fade").forEach(el=>el.addEventListener("click", fadeSpan));
// document.querySelector("#fade").addEventListener("click", fadeSpan);
$("#fade").on("click", fadeSpan);

function fadeSpan()
{
    /* 
        Au contraire de javascript, si il y a plusieurs éléments selectionnés, pas besoin de boucle, JQuery s'en occupe.
    */
   $("h1 span").fadeToggle();
}
/* 
    Avec jquery, je peux ajouter plusieurs évènements d'un seul coup :
*/
$("h1 span").on("mouseenter mouseleave", function(e){
    // En jquery, je n'utiliserais pas "this" mais "$(this)"
    if (e.type == 'mouseenter') 
    {
        $(this).css("font-size", "4rem");
    } else 
    {
        $(this).css("font-size", "");
    }
})
/* 
    $("document").ready(function) (ou de nos jours $(function))
    Permet d'attendre que le DOM a chargé avant d'executer le script
    (il peut être remplacé par un defer)
*/
$(function(){
    $("#load").on("click", function(){
        $("ol").hide(200);
        /* 
            $.ajax("") est le fetch de jQuery.
            On le fera suivre des méthodes ".done()", ".fail()" et ".always()"
            qui sont l'équivalent de ".then()", ".catch()" et ".finally()"
        */
        $.ajax("liste.json")
            .done(data=>{
                /* 
                    JQuery comprend directement que les donnés sont en JSON et les traduit automatiquement en objet javascript.
                */
                console.log(data);
                data.forEach(d=>{
                    /* 
                        const li = document.createElement("li");
                        li.textContent = d;
                        document.querySelector("ol").append(li);

                        !(Attention à la méthode appendTo de JQuery qui est inversé par rapport au append de JS)
                        parent.append(enfant)
                        enfant.appendTo(parent)
                    */
                    $("<li>").text(d).appendTo($("ol"));
                }); // fin foreach
                $("ol").show(500);
            }) // fin done
            .fail(err=>console.error(err))
            .always(()=>console.log("requête terminé !"));
    }); // fin on click
    $("#anime").on("click", function(){
        $(this).css("position", "absolute");
        /* 
            La fonction animate de jquery diffère de celle de javascript.
            Elle se contente de prendre en premier argument, un objet contenant les valeurs à modifier.
            et en second la durée de l'animation.
            On notera qu'on peut lui donner des valeurs à augmenter ou diminuer.
        */
        $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px",
            left: "-=50px"
        }, 500);
    }) // fin on click
}); // fin ready