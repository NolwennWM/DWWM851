/* 
    1. Ajouter un menu de selection, qui aura au moins 3 thèmes selectionnables.
    2. Appliquer le thème selectionné grâce à JS. 
    3. Faire en sorte que le choix de l'utilisateur soit toujours appliqué lorsqu'il change de page ou actualise.
    4. Bonus : Faire un bouton qui change aléatoirement les couleurs du site, et sauvegarder ces couleurs.
*/
"use strict";
// const body = document.querySelector('body');
// const header = body.querySelector('header');
// const label = header.querySelector('.switch2');
const color = document.body.querySelector('header .switch2 #all');

if(color)
{
    color.addEventListener("input", changeTheme);
}

function changeTheme()
{
    if(color.value == "blue")
    {
        document.documentElement.style.setProperty("--fond", "blue");
        localStorage.setItem("theme", "blue");
    }
    if(color.value == "red")
    {
        document.documentElement.style.setProperty("--fond", "red");
        localStorage.setItem("theme", "red");
    }
    if(color.value == "green")
    {
        document.documentElement.style.setProperty("--fond", "green");
        localStorage.setItem("theme", "green");
    }
    localStorage.removeItem("couleurFond");
    document.body.style.backgroundColor = "";
}
const recup = localStorage.getItem("theme");
console.log(recup);
if(recup)
{
    document.documentElement.style.setProperty("--fond", recup);
}
// exo 4 :
const boutonChangerCouleur = document.getElementById('bouton-changer-couleur');

boutonChangerCouleur.addEventListener("click", function()
{
    const couleurFond = genererCouleurAléatoire();
    document.body.style.backgroundColor = couleurFond;
    localStorage.setItem("couleurFond", couleurFond);
    localStorage.removeItem("theme");
})

const recupAlea = localStorage.getItem("couleurFond");
if(recupAlea)
{
    document.body.style.backgroundColor = recupAlea;
}

function genererCouleurAléatoire()
{
    const characters = "0123456789ABCDEF";
    let couleur = '#';
    for(let i = 0; i<6; i++)
    {
        couleur += characters[Math.floor(Math.random()*16)];
    }
    return couleur;
}