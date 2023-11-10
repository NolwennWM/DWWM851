"use strict";

const
    slider = document.querySelector("#slider"),
    ul = slider.querySelector("ul"),
    li = ul.querySelectorAll("li"),
    prev = slider.querySelector(".control_prev"),
    next = slider.querySelector(".control_next"),
    slideWidth = li[0].offsetWidth,
    slideHeight = li[0].offsetHeight,
    oddli = document.querySelectorAll("#slider ul li:nth-child(odd)"),
    checkbox = document.querySelector("#checkbox");

let idInterval;

checkbox.addEventListener("change", e=>{
    if(e.target.checked)
    {
        idInterval = setInterval(moveRight, 1500);
    }
    else
    {
        clearInterval(idInterval);
    }
});
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);

oddli.forEach(e=>{
    e.style.background = "#AAA";
})
slider.style.width = slideWidth+"px";
slider.style.height = slideHeight+"px";

function moveLeft()
{
    // const lastItem = ul.querySelector("li:last-child");
    // ul.insertBefore(lastItem, ul.firstChild);
    const anime = ul.animate({left: [0, slideWidth+"px"]}, {duration: 200, fill:"forwards"});
    anime.onfinish= () => {
        anime.cancel();
        ul.prepend(ul.querySelector("li:last-child"));
    }
}
function moveRight()
{
    // const firstItem = ul.querySelector("li:first-child");
    // ul.appendChild(firstItem);
    const anime = ul.animate({left: [0, -slideWidth+"px"]},{duration: 200, fill:"forwards"});
    anime.onfinish= () => {
        anime.cancel();
        ul.append(ul.querySelector("li:first-child"));
    };
}