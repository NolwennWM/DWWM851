"use strict";
const url = "assets/data.json", imgPath = "assets/images/immobilier/", maxResult = 6, formName = ["localisation", "from", "to"];
let datas, count = 0, results = [];
const cardsGrid = document.querySelector(".cardsGrid"), template = cardsGrid?.querySelector(".cardsGrid template")?.content, searchForm = document.querySelector(".search form"), typeBtns = document.querySelectorAll(".category span[data-type]");
getDatas();
searchForm?.addEventListener("submit", handleForm);
typeBtns.forEach(btn => btn.addEventListener("pointerdown", handleTypeEvent));
async function getDatas() {
    const resp = await fetch(url);
    if (!resp.ok)
        return;
    datas = await resp.json();
    selectData("maison");
}
function selectData(product) {
    if (!datas)
        return;
    datas[product].forEach(appendData);
    count = 0;
}
function appendData(data) {
    if (!template || count >= maxResult)
        return;
    const card = template.cloneNode(true);
    const photo = card.querySelector(".front img");
    const titre = card.querySelector(".back .title");
    const ville = card.querySelector(".back .city");
    const prix = card.querySelector(".back .price");
    if (!photo || !titre || !ville || !prix)
        return;
    photo.src = imgPath + data.photos;
    photo.alt = data.titre;
    titre.textContent = data.titre;
    ville.textContent = data.ville;
    prix.textContent = data.prix.toLocaleString() + " €";
    cardsGrid.prepend(card);
    count++;
}
function handleTypeEvent() {
    if (!datas)
        return;
    const t = this.dataset.type;
    if (t && t === "maison" || t === "terrain" || t === "appartement")
        // datas[t].forEach(appendData);
        displayOffer(datas[t]);
}
function handleForm(event) {
    event.preventDefault();
    const form = new FormData(this);
    const searchInfo = {};
    for (const [name, value] of form) {
        // console.log(name, value);
        if (value instanceof File)
            continue;
        if (name === "localisation" || name === "from" || name === "to")
            searchInfo[name] = value;
        if (name === "type" && (value === "maison" || value === "terrain" || value === "appartement"))
            searchInfo[name] = value;
    }
    if (!searchInfo.type)
        searchInForm(searchInfo);
    else if (datas)
        datas[searchInfo.type].forEach(getResults, searchInfo);
    displayOffer(results);
}
function searchInForm(searchInfo) {
    let key;
    for (key in datas) {
        if (!datas || !Object.hasOwn(datas, key))
            continue;
        const bienType = datas[key];
        bienType.forEach(getResults, searchInfo);
    }
}
function getResults(bien) {
    if (this.localisation && bien.ville.toLowerCase() !== this.localisation.toLowerCase())
        return;
    if ((this.from && parseInt(this.from) > bien.prix)
        ||
            (this.to && parseInt(this.to) < bien.prix))
        return;
    results.push(bien);
}
function displayOffer(r) {
    if (cardsGrid)
        cardsGrid.innerHTML = "";
    if (r.length)
        r.forEach(appendData);
    count = 0;
    results = [];
}
