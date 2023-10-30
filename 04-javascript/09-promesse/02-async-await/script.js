"use strict";

// Je veux récupérer un tableau en json et le trier avec ma fonction
fetch("tab.json").then(res=>{
    if(res.ok)
    {
        res.json().then(data=>{
            tri(data).then(message=>{
                console.log(message, data);
            })
            .catch(err=>{console.error(err)})
        })
        .catch(err=>{console.error(err)})
    }
});
/* 
    Le problème avec ce genre de code, c'est ce qu'on appelle, un "callback hell", les callback s'enchainent et on se retrouve avec du code imbriqué, dans un autre et ainsi de suite. Cela devient difficile à suivre.

    C'est pour cela que JS implémente les mots clef "async" et "await".

    Le mot clef "async" se place devant la déclaration d'une fonction qui deviendra alors asynchrone.

    Le mot clef "await" se place devant l'apppel d'une fonction retournant une promesse.
    Il indique que le code doit attendre le résultat de la promesse avant de continuer l'execution.
        la valeur retourné ne sera donc plus une promesse, mais directement son résultat.
    ! "await" ne peut être utilisé que dans une fonction "async"
*/
async function exemple()
{
    let data;
    let res = await fetch("tab.json");
    // console.log(res);
    if(!res.ok)return;
    /* 
        await ne gérant pas le .catch(), 
        on peut utiliser un simple "try catch (finally)" pour remplacer. 
    */
    try{
        data = await res.json();
        let message = await tri(data);
        console.log(message);
    }catch(err)
    {
        console.error(err);
    }
    finally
    {
        console.log(data);
    }
}
exemple();
/* 
    Les fonctions asynchrones se mettent à retourner automatiquement des promesses
*/
function synchrone()
{
    return "coucou";
}
async function asynchrone()
{
    return "coucou";
}
console.log(synchrone(), asynchrone());

// Notre burger était un sacré callback hell
async function burger()
{
    console.log(await pain2());
    await sauce2();
    console.log(await viande2());
    await salade2();
    console.log("Mon burger est terminé");
}
burger();
// code du cours précédent :
function tri(tab){
    return new Promise((resolve, reject)=>{
        tab.sort((a,b)=>{
            if(typeof(a) !== typeof(b)){
                reject("Tous les éléments du tableau ne sont pas de même type.");
            }
            return a-b;
        })
        resolve("Le tableau a été correctement trié");
    });
}
function pain2()
{
    return new Promise(resolve=>setTimeout(()=>resolve("Le pain est grillé et placé"),1000));
}
function viande2()
{
    return new Promise(resolve=>setTimeout(()=>resolve("La viande est grillée et placée"),3000));
}
async function sauce2(){console.log("La sauce est versée")}
async function salade2(){console.log("La salade est placée")}
