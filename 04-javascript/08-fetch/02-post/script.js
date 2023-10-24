"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "live_U8C8pGOECtGkpLTkSJJ6QIBrZs0qC2gUTXObqsc40bpMn0KfQfVaPfoTgmPl9zFv";

const formulaire = document.querySelector('form');
const result = document.querySelector(".result");

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e)
{
    e.preventDefault();
    const formData = new FormData(formulaire);
    console.log("Chargement en cours");
    result.textContent = "Chargement en cours";
    /* 
        fetch peut prendre optionnellement un second argument,
        sous la forme d'un objet, pour y ajouter des options.
        Par exemple changer la méthode d'envoie, 
        ajouter des données en headers, 
        ou ajouter un corps à la requête.
    */
    fetch(url,{
        method: "POST",
        headers: {"x-api-key": api_key},
        body: formData
    }).then(checkResponse)
}
function checkResponse(response)
{
    console.log("Chargement Terminé !");
    result.textContent = "Chargement Terminé !";
    if(response.ok)
    {
        response.json().then(data=>{
            console.log(data, data.url);
            result.innerHTML += `<img src="${data.url}" alt="dog">`;
        })
    }
    else
    {
        console.log(response.statusText);
        result.textContent = response.statusText;
    }
}