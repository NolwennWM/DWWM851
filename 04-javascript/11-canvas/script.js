"use strict";
/* 
    La balise "Canvas" ne sert à rien sans JS.
    Mais avec, elle peut être utilisée pour faire des animations, des jeux, des outils interactif ou autre.
*/

const canvas = document.querySelector('canvas');
/* 
    Pour interagire avec le canvas, nous avons besoin de connaître son "contexte".
    On va donc utiliser la méthode "getContext()" en lui donnant en argument, un string indiquant le context voulu.

    Ici on lui donnera "2d" pour travailler en 2 dimensions.
    Mais la 3D est utilisable grâce à "webgl"
    la 3D étant plus compliqué à géré, beaucoup utilisent une bibliothèque gérant les calculs les plus complexe comme "three.js"
*/
const ctx = canvas.getContext("2d");
// Optionnellement je vais faire que mon canvas s'adapte à la taille de mon écran :
function resize()
{
    // sauvegarde la partie de l'image indiqué :
    const snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
    const size = document.body.getBoundingClientRect();
    // console.log(size);
    canvas.width = size.width;
    canvas.height = size.height;
    // Replace l'image donné à la position indiqué
    ctx.putImageData(snapshot, 0, 0);
}
resize();
window.addEventListener("resize", resize);

// ----------------- Utilisation du Canvas ----------
/* 
    La plupart des méthodes du canvas, vont se lancer sur son contexte.

    Par exemple ici on va commencer avec ".fillRect" et "strokeRect"
    qui prendront l'un comme l'autre, 4 arguments,
        Position X, Position Y, largeur et hauteur

    On retrouvera les termes "stroke" et "fill" pour plusieurs méthodes et propriétés, ils représente respectivement les "lignes" et le "remplissage";
*/
ctx.fillRect(50, 50, 150, 25);
ctx.strokeRect(100, 150, 25, 150);
/* 
    "fillStyle" et "strokeStyle" sont des propriétés qui permettent de changer la couleur des dessins suivants.
    Elles prennent des strings représentant la couleur comme en CSS
        (rgb, hexadecimal, mot clef)
*/
ctx.fillStyle = "rgba(156,78, 94, 0.5)";
ctx.strokeStyle = "blue";
ctx.fillRect(126, 234, 90, 287);
ctx.strokeRect(126, 234, 90, 287);

/* 
    Pour des dessins plus complexe, nous allons pouvoir dessiner ligne par ligne.
    On va commencer par lui indiquer que le "chemin" à dessiner "commence" avec ".beginPath()"
    Puis déplacer notre "curseur" là où on doit commencer ".moveTo(x,y)"
    Ensuite lui indiquer jusqu'où la ligne doit se rendre ".lineTo(x,y)"
    Enfin on lui demande de dessiner ".stroke()"
*/
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

// Pour une forme plus complexe, on peut enchaîner les ".lineTo()"
ctx.beginPath();
ctx.moveTo(345, 100);
ctx.lineTo(345, 300);
ctx.lineTo(495, 250);
ctx.lineTo(445, 100);
// .closePath permet de finaliser ma forme, il dessinera une dernière ligne rejoignant le point de départ.
ctx.closePath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
// Permet de changer la taille du trait.
ctx.lineWidth = 8;
ctx.stroke();
// Permet de remplir la forme dessiné
ctx.fill();

// ------------ les cercles ---------------

/* 
    .arc() permet de dessiner des arcs de cercle et des cercles.
    Il y a 6 paramètres : x, y, rayon, angle de début, angle de fin, (sens horaire ou anti)
    Pour un cercle complet, on fera partir l'angle à 0,
    Et on donnera à l'angle de fin Math.PI*2
*/
ctx.beginPath();
ctx.arc(459, 588, 42, 0, Math.PI*2);
ctx.stroke();


ctx.beginPath();
ctx.arc(259, 288, 42, 0, 2.5, true);
ctx.stroke();
ctx.fill();
// Efface la position indiqué avec x,y, w,h
ctx.clearRect(50, 60, 170, 180);

// ------------ Animons notre canvas ----------------
// vv = vitesse vertical, vh = vitesse horizontal
let x= 100, y = 100, vv = 5, vh = 5, r = 80;
// cercle();
function cercle()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    /* ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();

    if(x+r > canvas.width || x-r < 0)
        vh = -vh;
    if(y+r > canvas.height || y-r < 0)
        vv = -vv; */
    ctx.drawImage(img, x, y, 48, 48);
    if(x+48 > canvas.width || x < 0)
        vh = -vh;
    if(y+48 > canvas.height || y < 0)
        vv = -vv; 

    x += vh;
    y += vv;
    console.log(x,y);
    requestAnimationFrame(cercle);  
}

// ------------ Intégrer des images -----------------
// Je crée un nouvel objet "Image"
const img = new Image();
// Je lui donne sa source :
img.src = "../../ressources/images/favicon.ico";
// On attend son chargement avec un évènement
img.onload = ()=>{
    // Une fois chargé, je dessine mon image:
    // ctx.drawImage(img, 50, 50, 48, 48);
    // cercle();
}
/* 
    équivalent à :
    img.addEventListener("load",()=>{
        ctx.drawImage(img, 50, 250, 100, 100);
    })
*/
// --------------------- texte ------------------
ctx.lineWidth = 1;
// La propriété "font" gère à la fois, la taille en pixel et la police.
ctx.font = "82px serif";
ctx.strokeText("Coucou", 500, 500);
ctx.fillText("Coucou", 500, 300);
// Par défaut, la position x et y du texte, est son coin en haut à gauche.
ctx.textAlign = "center";
ctx.fillStyle = "purple";
// Avec le textAlign en center, sa position x devient le centre du texte.
ctx.fillText("Coucou", 500, 100, 50);

// ----------- forme des traits ---------------

ctx.lineWidth = 16;

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(700, 40);
ctx.lineTo(700, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(750, 40);
ctx.lineTo(750, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(800, 40);
ctx.lineTo(800, 400);
ctx.stroke();