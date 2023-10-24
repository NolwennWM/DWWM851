const url = "./langue.json";
const selectLangue = document.querySelector('#langue');
const h1 = document.querySelector('.exoLangue h1');
const p = document.querySelector('.exoLangue p');
let langue;

fetch(url).then(reponse=>{
    if(reponse.ok)
    {
        reponse.json().then(data=>{
            langue = data.langue;
            console.log(langue);
            langue.forEach((l, i)=>{
                const option = document.createElement("option");
                option.value = i;
                option.textContent = l.name;
                selectLangue.append(option);
            })
            getLanguage();
        })
    }
})

selectLangue.addEventListener("change", function(){
    h1.textContent = langue[selectLangue.value].name;
    p.textContent = langue[selectLangue.value].para;
    localStorage.setItem("langue", selectLangue.value);
})

function getLanguage()
{
    const l = localStorage.getItem("langue");
    if(!l)return;
    h1.textContent = langue[l].name;
    p.textContent = langue[l].para;
}