// Exo 3.1
let x = prompt("Saisir un chiffre: le nombre x");

let message = x<0?x + " est plus petit que 0": x + " est plus grand que 0";
console.log(message);
// alert(message);

// Exo 3.2 - 3.4 - 3.5
let nombre1 = parseInt(prompt("Saisissez un nombre"));
let nombre2 = parseInt(prompt("Saisissez un autre nombre"));

if((nombre1 > 0 && nombre2 >0) || (nombre1<0 && nombre2<0)  )
{
    console.log("produit positif");
}
else if((nombre1 >0 && nombre2<0) || (nombre1 <0 && nombre2>0))
{
    console.log("produit negatif");
}
else
{
    console.log("produit null");
}
// EXO 3.3
let nom1 = prompt("Nom 1");
let nom2 = prompt("Nom 2");
let nom3 = prompt("Nom 3");

if(nom1 < nom2 && nom2 < nom3)
{
    console.log("rangé");
}
else
{
    console.log("non rangé");
}

// EXO 3.6

let age = prompt("Votre âge");

switch(age)
{
    case "6":
    case "7":
        console.log("poussin");
        break;
    case "8":
    case "9":
        console.log("pupille");
        break;
    case "10":
    case "11":
        console.log("Minime");
        break;
    default:
        if(age < 6) console.log("Trop petit");
        else console.log("Cadet");
}
// Exo 4.2

let heure = prompt("Donnez l'heure");
let minute = prompt("Donnez les minutes");

minute++;

if(minute == 60)
{
    heure++;
    minute -= 60;
}
if(heure == 24)
{
    console.log("minuit");
}
else
{
    console.log(`Dans une minute il sera ${heure}:${minute}`);
}

// exo 4.4
let nbPhoto = parseInt(prompt("Nombre de photocopie"));
let prix = 0;

if(nbPhoto > 0  && nbPhoto <10)
{
    prix = copie * 0.10;
}
else if (nbPhoto > 10  && nbPhoto <20)
{
    prix += 10*0.10+(copie - 10) * 0.09;
}
else if(nbPhoto>30)
{
    prix += 10*0.10+20*0.09+(copie - 30) * 0.08;
}
console.log("Le prix total est de "+prix+"€");