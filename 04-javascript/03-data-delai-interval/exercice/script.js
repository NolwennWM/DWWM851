"use strict";
const deg = 6;
const hr = document.querySelector("#hr");
const sc = document.querySelector("#sc");
const mn = document.querySelector("#mn");

setInterval(()=>{
    let date = new Date();
    let hh = date.getHours()* 30;
    let mm = date.getMinutes()*deg;
    let ss = date.getSeconds()*deg;

    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});