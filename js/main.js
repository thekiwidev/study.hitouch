"use strict";
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("open");
});
