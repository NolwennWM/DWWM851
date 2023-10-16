"use strict";
/*
    ---------------- EXO 1 --------------------
    1. Rendre tous les paragraphes du main, invisible.
    2. Ajouter Une observation sur chaque paragraphes.
    3. Lorsque l'élément est au moins à moitié dans le viewport, le rendre visible.
    4. Désactiver la détection de l'élément une fois l'action terminé.
    (Bonus). Animer l'apparition.
    ---------------- EXO 2 ----------------------
    1. Lorsque le dernier paragraphe est à 200px en dessous du viewport.
        Créer 10 paragraphes et les ajouter à la suite du main.
    2. Désactiver la détection du précédent dernier paragraphe.
    3. Ajouter l'animation de l'exercice 1 aux nouveaux paragraphes.
    4. Ajouter la détection du dernier paragraphe au nouveau dernier paragraphe.
 */
const para = document.querySelectorAll("main p");
const option2 = {threshold: 0.5};
const obsPara = new IntersectionObserver(showPara, option2);

para.forEach(p=>obsPara.observe(p));

function showPara(entries)
{
    entries.forEach(show);
}

function show(entry)
{
    if(entry.isIntersecting)
    {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
        obsPara.unobserve(entry.target);
    }
}
// exo 2 :
const lastP = document.querySelector("main p:last-child");
const obsLast = new IntersectionObserver(addMore, {rootMargin: "200px"});
const m = document.querySelector("main");

obsLast.observe(lastP);

function addMore(entries)
{
    const ent = entries[0];
    if(ent.isIntersecting)
    {
        let p;
        for(let i = 0; i < 10; i++)
        {
            p = document.createElement("p");
            p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, illum saepe illo rem, aliquam corrupti labore laborum libero nemo ratione natus doloribus quo, expedita delectus harum magni inventore? Molestias, repudiandae.";
            m.append(p);
            obsPara.observe(p);
        }
        obsLast.unobserve(lastP);
        obsLast.observe(p);
    }
}