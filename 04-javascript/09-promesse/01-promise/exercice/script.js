"use strict";
const a1 = [98, 56, 12, 1, 34];
const a2 = [98, 56, "12", 1, 34];

tri(a1).then(tableau=>console.log(tableau)).catch(e=>console.error(e)); 

tri(a2).then(tableau=>console.log(tableau)).catch(e=>console.error(e));

function tri(e)
{
    return new Promise(function(resolve, reject){
        if(e.every((element)=>typeof element === "number"))
        {
            e.sort(ordre);
            resolve(e);
        }   
        else
            reject("le tableau n'est pas conforme")
    })
}
function ordre(a,b)
{
    return a-b;
}

const greenLight = document.querySelector(".green");
const redLight = document.querySelector(".red");
const orangeLight = document.querySelector(".orange");

function turnOff()
{
    greenLight.style.backgroundColor = "grey";
    redLight.style.backgroundColor = "grey";
    orangeLight.style.backgroundColor = "grey";
}
function red()
{
    turnOff();
    redLight.style.backgroundColor = "red";
    return new Promise(resolve=>setInterval(()=>resolve("red"), 2000));
}
function orange()
{
    turnOff();
    orangeLight.style.backgroundColor = "orange";
    return new Promise(resolve=>setInterval(()=>resolve("orange"), 1000));
}
function green()
{
    turnOff();
    greenLight.style.backgroundColor = "green";
    return new Promise(resolve=>setInterval(()=>resolve("green"), 3000));
}

function start()
{
    green().then(vert=>{
        console.log(vert);
        orange().then(jaune=>{
            console.log(jaune);
            red().then(rouge=>{
                console.log(rouge);
                start();
            })
        })
    })
}
start();