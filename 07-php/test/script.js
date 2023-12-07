fetch("./api.php").then((resp)=>{
    if(resp.ok)
    {
        resp.json().then(data=>{
            document.body.innerHTML = `
            <h1>${data.titre}</h1>
            <p>${data.content}</p>`
        })
    }
})