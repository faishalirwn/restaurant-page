import home from "./tabs/home";
import contact from "./tabs/contact";
import menu from "./tabs/menu";

const contentDiv = document.querySelector("#content");

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const menuBtn = document.createElement("li")
menuBtn.setAttribute("id", "menu-tab");
menuBtn.setAttribute("class", "clickable");
menuBtn.textContent = "Menu";

const homeBtn = document.createElement("div")
homeBtn.setAttribute("id", "logo-nav");
homeBtn.setAttribute("class", "clickable");
const logoImg = document.createElement("img");
logoImg.setAttribute("src", "assets/logo.png");
logoImg.setAttribute("alt", "Papurika logo");
homeBtn.appendChild(logoImg);

const contactBtn = document.createElement("li")
contactBtn.setAttribute("id", "contact-tab");
contactBtn.setAttribute("class", "clickable");
contactBtn.textContent = "Contact";

ul.appendChild(menuBtn);
ul.appendChild(homeBtn);
ul.appendChild(contactBtn);
nav.appendChild(ul);
header.appendChild(nav);

const main = document.createElement("main");

contentDiv.appendChild(header);
contentDiv.appendChild(main);

home(main);

homeBtn.addEventListener("click", function() {
    home(main);
})

menuBtn.addEventListener("click", function() {
    menu(main);
})

contactBtn.addEventListener("click", function() {
    contact(main);
})