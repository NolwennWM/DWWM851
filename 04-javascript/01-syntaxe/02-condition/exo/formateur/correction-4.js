"use strict";
// 4.4
let price = parseInt(prompt("Entrer le nombre de commande"));

if(price <= 10)
{
    price = price * 0.10;
}
else if(price > 10 && price <= 30)
{
    price = 1 + (price - 10) * 0.09;
}
else
{
    price = 2.80 + (price-30) * 0.08;
}
console.log("ça coûte", price);

// 4.5

let age = prompt("Quel est votre age ?");
let homme = confirm("Êtes vous un homme?");


if(homme && age > 20)
{
    console.log("Tu casques, tu raques");
}
else if(age >= 18 && age <= 35)
{
    console.log("Tu casques, tu raques");
}
else
{
    console.log("C'est gratuit");
}
// Ou alors :
if((homme && age > 20) || (!homme && age >= 18 && age <= 35))
{
    console.log("Tu casques, tu raques");
}
else
{
    console.log("C'est gratuit");
}