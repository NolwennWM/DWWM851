"use strict";
let loaded = false;
document.addEventListener('DOMContentLoaded', ()=>loaded = true);
endLoader();
function endLoader()
{
    if(loaded)
        document.querySelector(".loader")?.remove();
    else
        setTimeout(endLoader, 1500);
}