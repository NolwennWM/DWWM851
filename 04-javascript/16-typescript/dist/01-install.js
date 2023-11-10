"use strict";
/*
    Typescript est une surcouche à Javascript,
    C'est à dire que tout ce qui est faisable en JS, est faisable en typescript.

    Mais au contraire d'une simple bibliothèque, ici nous avons une nouvelle extension ".ts"
    Par ce fait, ils sont illisible par le navigateur, il faudra compiler notre code avant de le donner à lire à celui ci.

    --------- Avantage ------------
    TS apporte le typage, cela nous force à coder avec rigueur en indiquant le type de chaque variable et argument.
    Il peut aussi nous permettre d'adapter un code moderne à de vieux navigateur.
    Typescript n'a pas besoin d'être chargé par le site, donc notre projet n'est pas allourdi.

    --------- Desavantage -----------
    On est forcé de compiler notre code.
    Cela rajoute un outil supplémentaire au projet.
    Le code est un peu plus complexe.

    --------- Installation --------------
    L'installation se fait via npm avec la commande suivante :
    * npm install typescript --save-dev

    Une fois installé, vous pouvez lancer la compilation d'un fichier avec :
    * (npx) tsc pathToFile.ts

    Il est de bon ton de séparer les fichiers TS et JS:
    * (npx) tsc pathToFile.ts --outDir folderName

    Pour éviter de retaper tout cela, on peut créer à la racine de notre projet, un fichier nommé :
    * tsconfig.json

    Une fois le fichier rempli, on n'aura plus qu'à taper :
    * (npx) tsc

    Et comme avec SCSS, il est possible de demander à typescript de surveiller nos fichiers. Cela afin de les compiler automatiquement à chaque sauvegarde.
    * (npx) tsc --watch
*/
const btn = document.querySelector("#compte");
let i = 0;
btn.addEventListener("pointerdown", () => {
    i++;
    // Ici typescript provoque une erreur, car textContent attend un string, et on lui donne un nombre.
    // btn.textContent = i;
    // On devra alors transformer notre nombre en string:
    btn.textContent = i.toString();
});
