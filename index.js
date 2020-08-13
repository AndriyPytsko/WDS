"use strict"

let menuOpenButton = document.getElementById('burger-button');
let menuCloseButton = document.getElementById('menu-close');
let menuBurger = document.getElementById('burger-menu');
menuOpenButton.addEventListener("click", ()=>{
    menuBurger.style.display = "block";
    menuOpenButton.style.display = "none";
});
menuCloseButton.addEventListener("click", ()=>{
    menuBurger.style.display = "none";
    menuOpenButton.style.display = "block";
});
