"use strict";

/* 
    Les REGEX ou Expressions Régulières,
    Permettent la recherche dans un string de caractères.

    Une regex commence et se termine par "/" (ou un flag, voir plus bas dans le cours)
*/
const r1 = /ou/;
const r2 = /[ou]/;
/* 
    En javascript, il existe plusieurs fonctions qui peuvent utiliser les regex, 
    la première que l'on va voir, est "regex.test(string)"
    qui retourne un boolean selon si la regex a été trouvé dans le string.

    r1 recherche la présence de "ou" dans le string
*/
console.log(r1, r1.test("Bonjour"), r1.test("Salut"));
// r2 recherche la présence de "o" ou "u" dans le string
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));

const r3 = /^ou/;
// r3 recherche un string qui commence par "ou"
console.log(r3, r3.test("Bonjour"), r3.test("outre"));

const r4 = /ou$/;
// r3 recherche un string qui termine par "ou"
console.log(r4, r4.test("Bonjour"), r4.test("mou"));


const r5 = /ou|oi/;
// r5 recherche la présence de "ou" ou "oi"
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));

const r6 = /[a-z]/;
// r6 recherche la présence d'une lettre minuscule de "a" à "z"
console.log(r6, r6.test("Bonjour"), r6.test("0987654321"));

const r7 = /[^a-z]/;
// r7 recherche la "non-présence" de lettre minuscule de "a" à "z" (Une lettre majuscule dans un mot suffit à retourner true)
console.log(r7, r7.test("bonjour"), r7.test("0987654321"));

const r8 = /(ou)?/;
// r8 recherche la présence ou non de "ou"
console.log(r8, r8.test("Bonjour"), r8.test("pizza"));

const r9 = /(ou)+/;
// r9 recherche la présence de "ou" une fois ou plus.
console.log(r9, r9.test("Bonjour"), r9.test("pizza"));

const r10 = /(ou)*/;
// r10 recheche la présence de "ou" autant de fois qu'on le veut ou pas du tout.
console.log(r10, r10.test("Bonjour"), r10.test("pizza"));

const r11 = /(cou){2}/;
// r11 recherche la présence de "cou" deux fois d'affilé.
console.log(r11, r11.test("coup"), r11.test("coucou"));

const r12 = /^(cou){2,4}$/;
// r12 recherche un string qui commence et termine par "cou" apparaissant entre 2 et 4 fois.
console.log(r12, r12.test("coucoucou"), r12.test("coucoucoucoucou"));

const r13 = /^(cou){2,}$/;
// r13 recherche un string qui commence et termine par "cou" apparaissant entre 2 et autant de fois que l'on veut.
console.log(r13, r13.test("coucoucou"), r13.test("coucoucoucoucou"));

const r14 = /\^/;
// r14 recheche la présence de "^" dans le string. (le caractère suivant "\" sera échapé, il perdra son sens premier pour la regex)
console.log(r14, r14.test("^^"), r14.test("Bonjour"));

const r15 = /\s/;
// r15 recheche un espace dans le string. (un "\" devant un caractère sans signification, peut lui en donner un)
console.log(r15, r15.test("Hello World"), r15.test("Bonjour"));

const r16 = /\d/;
// r16 recherche la présence d'un chiffre dans le string (équivalent à [0-9])
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour à tous"));

const r17 = /(ou|oi).*\1/;
// r17 recherche la présence de "ou" ou "oi" suivi de n'importe quel nombre de caractères, suivi du même résultat que la première parenthèse.
console.log(r17, r17.test("Bonjour à tous"), r17.test("Bonsoir à tous"), r17.test("Bonsoir tant de fois"));

// ? ----------------- Flags --------------------
/* 
    les flags sont des caractères qui se placent après la fin de la regex.
    Ils viennent lui donner de nouvelles capacités.

    On va les tester avec la méthode "string.match(regex)" qui retourne un tableau contenant les résultats de la regex.
*/
const phrase = "J'aime la pizza, les cannelés et les okonomiyaki";

console.log(phrase.match(/pizza/));
// Par défaut la regex s'arrête au premier résultat trouvé :

console.log(phrase.match(/les/));
// le flag "g" indiquera à la regex de rechercher de façon global et donc de ne pas s'arrêter au premier résultat.
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript !";
// Par défaut, une regex est sensible à la casse.
console.log(phrase2.match(/vive/g));
// Avec le flag "i", la regex va ignorer la casse.
console.log(phrase2.match(/vive/gi));

const phrase3 = `1er : Maurice
2ème : Paul
3ème : Charlie`;
// Le string commence par un chiffre, il nous est bien retourné, mais les sauts à la ligne ne sont pas de nouveaux strings.
console.log(phrase3.match(/^\d/g));
// avec le flag "m", chaque saut à la ligne est considéré comme une nouvelle phrase à traiter.
console.log(phrase3.match(/^\d/gm));
// Cela fonctionne aussi avec les fin de ligne :
console.log(phrase3.match(/(\w+)$/gm));
// \w tient pour "word" (attention, il ne prend pas en compte les accents)

// Chaque saut à la ligne mettant fin à la phrase, il ne trouve rien ici
console.log(phrase3.match(/1.+3/gm));
// le flag "s" permet de prendre en compte les "saut à la ligne" dans la recherche
console.log(phrase3.match(/1.+3/gms));

// ? ------------ autre fonctions et bonus ----------------

// les lettres accentués sont des caractères à part de l'alphabet:
console.log(/^[a-z]+$/.test("paul"), /^[a-z]+$/.test("élodie"));
// Si je veux prendre compte les lettres accentués... pas trop le choix :
console.log(/^[a-zàéèûùâêï]+$/i.test("Élodie"));

/*  
    il existe d'autres fonctions qui acceptent les regex comme : 
        string.replace(string|regex, string);

    Qui viendra remplacer dans le premier string, ce qui est trouvé par la regex(ou le string) par le dernier string
*/
console.log(phrase.replace("pizza", "salade"));
console.log(phrase.replace(/pizza/, "salade"));

// L'avantage de la regex, c'est qu'elle pourra être plus versatile qu'un string
console.log(phrase.replace(/pizza|okonomiyaki|cannelé/gi, "salade"));
console.log(phrase2.replace(/regex|javascript/gi, "*******"));
// "$&" permet de ne pas remplacer mais seulement d'ajouter :
console.log(phrase2.replace(/javascript/gi, "CSS et $& et PHP"));

/* 
    Dans la table des caractères "unicode" entre les majuscules et les minuscules se trouvent des caractères spéciaux.
    Ce test retourne donc true
*/
console.log(/[A-z]/.test("_"));
// On écrira donc plus habituellement :
console.log(/[A-Za-z]/.test("_"));
