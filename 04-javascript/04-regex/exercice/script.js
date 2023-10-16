/*
    Construisez un formulaire comme dans les gifs:
    
    1.Le champ nom d'utilisateur doit tourner au rouge si 
    il contient autre chose que des lettres, - ou _;

    2.Le champ téléphone doit passer au rouge si le ce qui est entré
    ne correspond pas à un numéro de téléphone.

    3.Le champ email doit passer au rouge si ce qui est entré ne 
    correspond pas à un email.

    4.Ajouter une barre de progression qui change de couleur
    et se rempli à chaque fois que l'utilisateur sécurise 
    un peu plus sont mdp :
        -lettre minuscule.
        -lettre majuscule.
        -chiffre.
        -caractère spécial.
        -au moins 8 caractère.
        
    5. le champ mdp bis doit tourner au rouge si il ne correspond 
    pas au champ mdp.
    (le changement au rouge peut être personalisé autrement,
    l'important est de montrer à l'utilisateur qu'il se trompe)
 */
const pass = document.querySelector("#pass");
const progress = document.querySelector(".progress");

pass.addEventListener("input", check);

function check(e)
{
    let v = 0;
    v += /[a-z]/.test(e.target.value)? 1:0;
    v += /[A-Z]/.test(e.target.value)? 1:0;
    v += /\d/.test(e.target.value)? 1:0;
    v += /[@$!%*?&]/.test(e.target.value)? 1:0;
    v += e.target.value.length >= 8 ? 1:0;
    v -= /^[A-Za-z\d@$!%*?&]+$/.test(e.target.value)? 0:1;
    
    switch(v)
    {
        case -1:
        case 0:
            progress.style.backgroundColor = "";
            break;
        case 1:
            progress.style.backgroundColor = "red";
            break;
        case 2:
            progress.style.backgroundColor = "orangered";
            break;
        case 3:
            progress.style.backgroundColor = "orange";
            break;
        case 4:
            progress.style.backgroundColor = "yellow";
            break;
        case 5:
            progress.style.backgroundColor = "green";
            break;
    }
    v = v<0?0:v;
    progress.style.width = v*20+"%";
    // version couleur sans switch :
    const colors = ["", "red", "orangered", "orange", "yellow", "green"];
    progress.style.backgroundColor = colors[v];
}

const nom = document.querySelector("#user");
const nomOk = /^[A-Za-z_\-]+$/;

function goodName()
{
    if(nomOk.test(nom.value))
    {
        nom.style.backgroundColor = "green";
    }
    else
    {
        nom.style.backgroundColor = "red";
    }
    if(nom.value === "")
    {
        nom.style.backgroundColor = "white";
    }
}
nom.addEventListener("input", goodName);

const tel = document.querySelector("#telephone");
const telReg = /^[0-9\s]{10}$/;
const telReg2 = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
tel.addEventListener("input", telephone);

function telephone()
{
    if(telReg.test(tel.value))
    {
        tel.style.backgroundColor = "green";
    }
    else
    {
        tel.style.backgroundColor = "red";
    }
    if(tel.value === "")
    {
        tel.style.backgroundColor = "white";
    }
}

const mail = /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/i;
const input2 = document.querySelector("#email");

input2.addEventListener("input", function(e){
    if(e.target.value != e.target.value.match(mail))
    {
        e.target.style.backgroundColor = "red";
    }
    else
    {
        e.target.style.backgroundColor = "";
    }
    console.log(e.target.value.match(mail),e.target.value, e.target.value == e.target.value.match(mail));
})

const passConfirm = document.querySelector("#passBis");

passConfirm.addEventListener("input", ()=>{
    if(passConfirm.value !== pass.value)
    {
        passConfirm.style.backgroundColor = "red";
    }
    else
    {
        passConfirm.style.backgroundColor = "";
    }
})