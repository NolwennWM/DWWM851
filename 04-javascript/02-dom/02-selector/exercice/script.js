// ------------EXO 1 ---------------
// Déplacer la modale dans le body.
const modale = document.querySelector("aside div");
document.body.append(modale);

// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.
const li34 = document.querySelectorAll("footer li");

for(let i = 0; i < li34.length; i++)
{
    li34[i].textContent = "Texte changé";
}
// façon 2 :

li34.forEach(textChange);

function textChange(el)
{
    el.textContent = "Changé d'une autre manière";
}

// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.
const pair = document.querySelectorAll("main p");
for(let i = 0; i < pair.length; i++)
{
    if(i%2)
    {
        pair[i].textContent = "Ceci est un paragraphe pair";
    }
}
// Solution 2 :
for(let i = 1; i < pair.length; i+=2)
{
        pair[i].textContent = "Solution 2";
}
// Solution 3 :
const ppair = document.querySelectorAll("main p:nth-child(even)");

ppair.forEach(textChange);