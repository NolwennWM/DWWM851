"use strict";
/* 
    Ecmascript permet l'export et import de fonctions et objets (entre autre choses).
    Cela va permettre de diviser nos projets en plusieurs fichiers réutilisable.
    Sur un gros projet avec des tas de fichiers, cela évite de devoir trouver dans quel ordre tel ou tel fichier doit être placé.

    Pour pouvoir utiliser l'import, nous devons ajouter à notre balise "script", l'attribut 
        * type="module"

    ? ------------------ Export --------------------
    Pour importer du code, il faut avant tout l'exporter.
    Devant la fonction, l'objet, la classe que l'on souhaite exporter,
    nous allons ajouter l'un de ces mots clefs :

        * export
        * export default
    On peut exporter autant d'élément que l'on souhaite, mais un seul par fichier peut être "par défaut".

    ?-------------------- Import ---------------------
    Un import, ne peut se trouver qu'au plus haut niveau du code.
    (C'est à dire, qu'il ne doit se trouver, dans aucun bloc (condition, fonction...))

    Sans "export default" dans le fichier exporté, il suffit d'utiliser le mot clef "import", suivi d'entre accolade, séparés de virgules,
    les éléments que l'on veut importer.
        * import {salut, coucou} from "./salutation.js";

    Si un "export default" est présent, on pourra placer avant les accolades, un nom (peu importe lequel) qui servira de variable contenant l'élément importé par défaut.
        * import b,{salut, coucou} from "./salutation.js";

    Si un nom est trop long, ou bien si vous importez plusieurs fichiers contenant des éléments de même nom. il est possible de renommé un import avec le mot clef "as" suivi du nouveau nom :
        * import b,{salut, coucou as c} from "./salutation.js";

    On peut aussi importer tout ce qui se trouve exporté dans un fichier, et le ranger dans un seul objet :
        * import * as salutation from "./salutation.js";

    Si du code executable se trouve dans le fichier importé, il sera executé au premier import. (et le premier seulement);
*/
import chaussette,{salut, coucou as c} from "./salutation.js";

salut();
/* 
    Un élément importé, peut faire appel,  a des éléments, non importé.
    Ici la fonction "coucou" fait appel à une fonction "parler" qui n'a pas été importé.
*/
c("Maurice");
chaussette();

import * as salutation from "./salutation.js";
console.log(salutation);

salutation.salut();
salutation.coucou("Pierre");
salutation.default();

/* 
    Parfois importer directement tout les fichiers dont on aura besoin à l'avenir, peut être lourd.
    On aimerait pouvoir importer certains fichiers qu'à certaines conditions.
    Hors on a vu que l'on ne pouvait pas faire d'import dans un bloc.

    Ce n'est pas possible avec le mot clef "import" mais c'est possible avec la fonction "import()";
*/
window.addEventListener("click", hello);

async function hello()
{
    const hey = await import("./salutation.js");
    console.log(hey);
    /* 
        La fonction import retourne une promesse,
        et une fois réalisé, elle nous rend un objet contenant tous nos exports.
    */
    hey.default();
    hey.coucou("Germaine");
    hey.salut();
}