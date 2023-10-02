// 3.3
let name1, name2, name3;
name1 = prompt("Entrez un nom");
console.log(name1);
name2 = prompt("Entrez un autre nom");
console.log(name2);
name3 = prompt("Entrez un dernier nom");
console.log(name3);

if(name1 < name2 && name2 < name3)
{
    console.log("Ordre Alphabétique");
}
else if(name3 < name2 && name2 < name1)
{
    console.log("Ordre inverse");
}
else
{
    console.log("Pas d'ordre");
}
// 3.6
let age = parseInt(prompt("Entrez un age"));

if(age <= 7 && age >= 6)
{
    console.log("poussin");
}
else if(age <= 9 && age >= 8)
{
    console.log("pupille");
}
else if(age <= 11 && age >= 10)
{
    console.log("Minime");
}
else if(age >=12)
{
    console.log("cadet");
}
// seconde possibilité
switch(age)
{
    case 6:
    case 7:
        console.log("poussin");
    case 8:
    case 9:
        console.log("pupille");
    case 10:
    case 11:
        console.log("minime");
    default:
        if(age>11)
            console.log("cadet");
}
// Troisième possibilité
let message = 
    age >= 6 && age <=7
    ?"poussin"
    :age >= 8 && age <=9
    ?"pupille"
    :age>=10 && age <= 11
    ?"minime"
    :age>=12
    ?"cadet"
    :"Tu n'as pas l'âge";
    
console.log(message);
