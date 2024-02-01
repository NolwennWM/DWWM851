"use strict";
import routes from "./routes.js";

const main = document.querySelector('main');

export default async function router(uri)
{
    window.history.pushState({},"",uri);
    main.classList.remove("show");
	
    const   path = window.location.pathname,
            route = "/04-api/front/view/"+(routes[path]?.html||"404.html"),
            response = await fetch(route);
            console.log(path);

    if(!response.ok) return;

    const data = await response.text();
    main.innerHTML = data;
    if(routes[path]?.js)
    {
        const script = await import("./"+routes[path].js);
        await script.default(routes[path].option??undefined);
    }
    
	getLinks();
	main.classList.add("show");
}
export function getLinks(parent = document)
{
    const links = parent.querySelectorAll("a");
    links.forEach(setLink);
}
function setLink(a)
{
    a.onclick = goToHref;
    const logged = sessionStorage.getItem("logged");
    if(a.classList.contains("logged"))
    {
        a.parentElement.style.display = logged?"block":"none";
    }
    else if (a.classList.contains("logout"))
    {
        a.parentElement.style.display = logged?"none":"block";
    }
}
function goToHref(e)
{
    e.preventDefault();
    router(this.href);
}