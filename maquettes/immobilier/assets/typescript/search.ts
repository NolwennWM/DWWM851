"use strict";
const 
    url = "assets/data.json",
    imgPath = "assets/images/immobilier/",
    maxResult = 6,
    formName = ["localisation", "from", "to"];
type Offre = {
    titre:string,
    ville:string,
    prix:number,
    photos:string
};
type Annonces = {
    appartement: Offre[],
    maison: Offre[],
    terrain: Offre[]
};
type Product = keyof Annonces;
type Property = keyof Offre;
type FormDataSearch = {
    type?: Product,
    localisation?: string,
    from?: string,
    to?: string
}

let datas: undefined|Annonces,
count: number = 0,
results: Offre[]=[];

const 
    cardsGrid = document.querySelector<HTMLDivElement>(".cardsGrid"),
    template = cardsGrid?.querySelector<HTMLTemplateElement>(".cardsGrid template")?.content, 
    searchForm = document.querySelector<HTMLFormElement>(".search form"),
    typeBtns = document.querySelectorAll<HTMLSpanElement>(".category span[data-type]");

getDatas();

searchForm?.addEventListener("submit", handleForm);
typeBtns.forEach(btn=>btn.addEventListener("pointerdown", handleTypeEvent));


async function getDatas()
{
    const resp = await fetch(url);
    if(!resp.ok) return;
    datas = await resp.json();
    selectData("maison");    
}

function selectData(product: Product)
{
    if(!datas) return;
    datas[product].forEach(appendData);
    count = 0;
}
function appendData(data:Offre)
{
    if(!template || count >= maxResult)return;

    const card = <DocumentFragment>template.cloneNode(true);
    const photo = card.querySelector<HTMLImageElement>(".front img");
    const titre = card.querySelector<HTMLElement>(".back .title");
    const ville = card.querySelector<HTMLElement>(".back .city");
    const prix = card.querySelector<HTMLElement>(".back .price");

    if(!photo || !titre || !ville || !prix) return;

    photo.src = imgPath + data.photos;
    photo.alt = data.titre;
    titre.textContent = data.titre;
    ville.textContent = data.ville;
    prix.textContent = data.prix.toLocaleString()+" €";

    cardsGrid.prepend(card);
    count++;
}

function handleTypeEvent(this:HTMLSpanElement)
{
    if(!datas) return;
    const t = this.dataset.type;
    if(t && t ==="maison"||t==="terrain"||t==="appartement")
    // datas[t].forEach(appendData);
    displayOffer(datas[t])
}
function handleForm(this:HTMLFormElement, event:SubmitEvent)
{
    event.preventDefault();
    const form = new FormData(this);
    const searchInfo: FormDataSearch = {};
    for(const [name,value] of form)
    {
        // console.log(name, value);
        if(value instanceof File)continue;
        if(name==="localisation"||name==="from"||name==="to")
        searchInfo[name] = value;
        if(name==="type"&&(value==="maison"||value==="terrain"||value==="appartement"))
        searchInfo[name] = value;    
    }
    if(!searchInfo.type)
        searchInForm(searchInfo);
    else
        if(datas)
            datas[searchInfo.type].forEach(getResults, searchInfo);
    
    displayOffer(results);
    
}
function searchInForm(searchInfo:FormDataSearch)
{
    let key:Product;
    for (key in datas) 
    {
        if (!datas || !Object.hasOwn(datas, key)) continue;
        const bienType = datas[key];
        bienType.forEach(getResults, searchInfo);
    }
}
function getResults(this:FormDataSearch,bien: Offre)
{
    if(this.localisation && bien.ville.toLowerCase() !== this.localisation.toLowerCase())
        return;        
    if(
        (this.from && parseInt(this.from)>bien.prix) 
        || 
        (this.to && parseInt(this.to)<bien.prix)
    )
        return;
    results.push(bien);
}
function displayOffer(r:Offre[])
{
    if(cardsGrid)
    cardsGrid.innerHTML = "";
    if(r.length)
    r.forEach(appendData);
    count = 0;
    results = [];
}