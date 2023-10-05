/*  
    créer une modale en JS qui va venir se placer devant 
    le reste de la page et centré dans celle ci.
    Celle modale devra contenir un titre, un paragraphe et deux boutons
    (vous pouvez modifier le css si vous voulez)
*/
/* const d = document.createElement("div");
d.innerHTML = "<h2>Santé</h2><p>Mangez... la flemme</p><button>tchin tchin</button><button>Le gras c'est la vie</button>";
document.body.append(d); */
// façon 2 :
/* document.body.innerHTML += "<div><h2>Santé</h2><p>Mangez... la flemme</p><button>tchin tchin</button><button>Le gras c'est la vie</button></div>"; */

// façon 3
const d = document.createElement("div");
d.innerHTML = "<h2>Santé</h2><p>Mangez... la flemme</p>";
document.body.append(d); 

const b1 = document.createElement("button");
b1.textContent = "Tchin Tchin";
const b2 = document.createElement("button");
b2.textContent = "Le gras c'est la vie";

d.append(b1, b2);
