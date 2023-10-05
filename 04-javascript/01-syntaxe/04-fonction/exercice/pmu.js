// -------------------- EXO 5.10 ---------------------

let 
    n = parseInt(prompt("Combien il y a de chevaux dans la course ?")),
    p = parseInt(prompt("Combien jouez vous de cheveaux ?"));

let X = factorial(n)/factorial(n-p);
let Y = factorial(n)/(factorial(p)*factorial(n-p));

console.log(`Vous avez 1 chance sur ${X} de les trouver dans l'ordre, \net une chance sur ${Y} de les trouver dans le désordre.`);


function factorial(x)
{
    let total = 1;
    for(let i = 1; i<=x; i++){total *= i;}
    return total;
}
