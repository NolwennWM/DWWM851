"use strict";

/* 
    Lorsque l'on veut récupérer des données depuis un autre fichier, ou bien depuis une API.
    Nous avons besoin que JS envoi une requête (de préférence asynchrone) à ce fichier ou au site de l'API.
    Pour cela deux solution:
        - le plus ancien XMLHttpRequest();
        - le plus récent fetch();
*/
const url = "./hero.json";

// ?----------- XMLHttpRequest -----------------
// Je crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// Je lui ajoute une fonction lors de l'évènement "onreadystatechange"
xmlhttp.onreadystatechange = handleRequest
/* 
    J'ouvre la requête, en lui donnant les paramètres suivants :
        1. la méthode utilisée sous forme de string (ici GET)
        2. l'url auquel lancer la requête (ici dans mon const url)
        3. si la requête doit être asynchrone ou non. (de préférence oui)
*/
xmlhttp.open("GET", url, true);
// On envoi la requête
xmlhttp.send();

function handleRequest()
{
    console.log(xmlhttp.readyState, xmlhttp.status);
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        let success, data;
        /* 
            Le try{}catch(e){}
            permet de mettre un morceau de code dans les accolades du try, qui sera executé,
            mais qui en cas d'erreur ne fera pas planter toute l'application.
            L'erreur sera "capturé" par le catch, 
            et pourra être affiché, ou personnalisé.

            Optionnellement, on peut ajouter à la fin un "finally"
            qui executera son code une fois le try catch terminé.
        */
        try 
        {
            // .responseText contient la réponse de notre requête.
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            success = true;
        }
        catch(e)
        {
            console.error(e.message + " Dans -> "+ xmlhttp.responseText);
            success = false;
        }
        finally
        {
            if(success)
            {
                document.body.innerHTML = `<h1>${data.squadName}</h1>`;
            }
        }
    }
}

// ?----------------- fetch ------------------------
/* 
    Fetch est toujours en asynchrone.
    Par défaut, il est en GET
    Donc pour une requête asynchrone en GET, il suffit de lui donner l'url en paramètre.
    Il pourra prendre un second paramètre, en cas d'option supplémentaire.

    fetch est suivi d'un ".then()" qui contiendra la fonction callback
    à lancé une fois la requête terminé.
*/
fetch(url).then(handleFetch);

function handleFetch(response)
{
    console.log(response.ok);
    // ".ok" contient un boolean indiquant si la requête s'est bien passé.
    if(response.ok)
    {
        /* 
            l'objet "response" de fetch, contient sa propre méthode asynchrone pour traiter le json.
            je ne passerais donc pas par "JSON.parse()" mais par ".json()"

            Elle sera suivi d'un ".then()" contenant la fonction callback à lancer une fois le json traité.
            et d'un ".catch()" contenant la fonction callback à lancer si il y a une erreur dans le traitement du json
        */
        response.json()
            .then(data=>{
                document.body.innerHTML += `<h2>${data.homeTown}</h2>`;
            })
            .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
}
console.log("fin du code");