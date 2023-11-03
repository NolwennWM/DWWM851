import slider from "./slider.js";
import paint from "./paint.js";
import justePrix from "./justePrix.js";

const appli = document.querySelector('.appli');
const select = document.querySelector('#appli');

select.addEventListener("change", choose)

function choose(e)
{
    if(appli.children.length)
    {
        appli.innerHTML = "";
    }
    if(e.target.value === "justePrix")
    {
        const j = justePrix.create();
        appli.append(j);
        justePrix.essai = 5;
    }
    else if(e.target.value === "paint")
    {
        const p = paint.init();
        appli.append(p);
        paint.resize();
    }
    else
    {
        const images = ["../../../../ressources/images/paysage/lava.jpg","../../../../ressources/images/paysage/montagne.jpg","../../../../ressources/images/paysage/phare.jpg","../../../../ressources/images/paysage/ville.jpg"];
        const slide = slider.create(images);
        appli.append(slide);
        slider.init();

        // Intro au cours suivant :
        // const slide2 = slider.create(images);
        // document.body.append(slide2);
        // slider.init();
        /* 
            Les deux rentrent en conflit car ils sont le même objet.
            Pour résoudre ce conflit,
            On pourra utiliser des classes.
        */
    }
}