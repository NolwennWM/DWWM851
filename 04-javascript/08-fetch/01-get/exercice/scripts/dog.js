fetch("https://api.thedogapi.com/v1/images/search").then(reponse=>{
    if(reponse.ok)
    {
        reponse.json().then(data=>{
            console.log(data);
            const img = document.createElement('img');
            img.src= data[0].url;
            document.body.appendChild(img);
        })
    }
})