/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
*/
const mainP = document.querySelectorAll("main p");
/* for(let i = 0; i<mainP.length; i++)
{
    mainP[i].style.fontSize = `${1.05*(i+1)}rem`;
} */
// Solution 2 :
const taillePolice = ["12px", "16px", "20px", "24px", "28px"];
for(let i = 0; i<mainP.length; i++)
{
    mainP[i].style.fontSize = taillePolice[i];
} 
/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
const ad = document.querySelector("aside");
ad.style.left = "3%";
ad.style.transitionProperty = "left";
ad.style.transitionDuration = "10s";
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
const div = document.querySelector("div");
// const f = Math.floor(Math.random()*255);
// const f1 = Math.floor(Math.random()*255);
// const f2 = Math.floor(Math.random()*255);

// div.style.backgroundColor = `rgb(${f},${f1},${f2})`;

// Solution2 :
let randomC = Math.floor(Math.random()*16777215).toString(16);

div.style.backgroundColor = "#"+randomC;

// solution3 :
// div.style.backgroundColor = `rgb(${randNumber(255)},${randNumber(255)},${randNumber(255)})`;
// function randNumber(max)
// {
//     return Math.round(Math.random()*max)
// }
