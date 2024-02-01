let template, tbody, rowTemplate;
export default async function()
{
    const response = await fetch("http://localhost:8851/api/user");
    if(!response.ok)return;

    tbody = document.querySelector("tbody");
	template = document.querySelector("#tableRow");
	rowTemplate = template.content;

	const dataJson = await response.json();
	dataJson.data.forEach(fillTable);
}
function fillTable(u)
{
    const row = rowTemplate.cloneNode(true);
    row.querySelector(".id").textContent = u.idUser;
    row.querySelector(".username").textContent = u.username;

    setlinksId(row, u.idUser);
    tbody.append(row);
}
function setlinksId(parent, id)
{
    const links = parent.querySelectorAll("a");
    links.forEach(a=>{
        if(a.classList.contains("limited") && id != sessionStorage.getItem("idUser"))
        {
            a.style.display = "none";
        }
        a.href += id;
    })
}