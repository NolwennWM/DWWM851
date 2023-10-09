/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
const div2 = document.querySelector('.div2');
const btn2 = div2.querySelector('button');
const colorInput = div2.querySelector('input[type="color"]');

colorInput.addEventListener("input", ()=>{
    btn2.style.color = colorInput.value;
})
btn2.addEventListener("click", ()=>{
    div2.style.backgroundColor = colorInput.value;
})
/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/
const bouton2 = document.querySelector('.div3 button');
const bouton3 = document.querySelector('.hidden button:nth-of-type(2)');
const modal1 = document.querySelector(".hidden");

// bouton2.addEventListener("click", function()
// {
//     modal1.style.display = "grid"; 
// })
// bouton3.addEventListener("click", function()
// {
//     modal1.style.display = "";
// })
// Solution2  :
function modalToggle()
{
    modal1.classList.toggle("hidden");
}
bouton2.addEventListener("click", modalToggle);
bouton3.addEventListener("click", modalToggle);
/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const li = document.querySelectorAll('nav ul li');
for(let e = 0; e<li.length; e++)
{
    console.log(li[e]);
    li[e].onclick = (f)=>{
        if(f.target.style.fontSize == "")
            f.target.style.fontSize = "2rem";
        else
            f.target.style.fontSize = "";
    }
}
// solution 2 :
li.forEach(addLiEvent);
function addLiEvent(l)
{
    l.onclick = changeSize;
}
function changeSize(f)
{
    if(f.target.style.fontSize == "")
        f.target.style.fontSize = "2rem";
    else
        f.target.style.fontSize = "";
}
/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/
const span = document.querySelector('span');
const footer = document.querySelector('footer');

footer.addEventListener("mouseenter", ()=>{
    span.style.position = "absolute";
})
document.addEventListener("mousemove", e=>{
    span.style.left = `${e.clientX}px`;
    span.style.top = `${e.clientY}px`;
})
document.addEventListener("click", ()=>{
    span.style.position = "";
    console.log("coucou");
})