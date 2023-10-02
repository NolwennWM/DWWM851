//  3.1 - 3.4
let number = parseInt(prompt("Entrez un chiffre"));

if(number > 0)
{
    console.log("nombre positif");
}
else if(number == 0)
{
    console.log("nombre null");
}
else
{
    console.log("nombre négatif");
}

// 3.2 - 3.5

let nb1 = parseInt(prompt("Entrez une valeur pour nb1"));
let nb2 = parseInt(prompt("Entrez une valeur pour nb2"));

if(nb1 > 0 && nb2 > 0 || nb1 < 0 && nb2 < 0) 
{
    console.log("Produit positif");
}
else if(nb1 == 0 || nb2 == 0)
{
    console.log("Produit Null");
}
else
{
    console.log("Produit négatif");
}