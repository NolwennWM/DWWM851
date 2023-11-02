import slider from "./slider.js";

const images = ["../../../../ressources/images/paysage/lava.jpg","../../../../ressources/images/paysage/montagne.jpg","../../../../ressources/images/paysage/phare.jpg","../../../../ressources/images/paysage/ville.jpg"];

const appli = document.querySelector('.appli');

const slide = slider.create(images);

appli.append(slide);
slider.init();