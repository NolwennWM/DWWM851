// 4.1
let tutu = 7;
let toto = 2;
let tata = "OK";

if(tutu > toto + 4 || tata === "O")
{
    ++tutu;
}
else
{
    --tutu;
}
console.log(tutu);

// 4.2

let heure = prompt("Afficher les heures");
let minute = prompt("Afficher les minutes");
// Commenté pour tester le 4.3
// minute++
if(minute == 60)
{
    minute = 0;
    heure++;
    if(heure == 24)
    {
        heure = 0;
    }
}
console.log(`Dans une minute il sera : ${heure} h et ${minute} minutes`);

// 4.3
let seconde = prompt("Afficher les secondes");
seconde++;
if(!isNaN(seconde) && !isNaN(minute) && !isNaN(heure))
{
    if(seconde == 60)
    {
        seconde = 0;
        minute++;
    }
    if(minute == 60)
    {
        minute = 0;
        heure++;
    }
    if(heure == 24)
    {
        heure = 0;
    }
    console.log("Dans une seconde il sera " + heure, "heure", minute, "minute", seconde, "seconde");
}
else
{
    console.log("Vous n'avez pas tapé de nombre");
}