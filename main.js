```javascript
/* =========================
   IMOZETO ENGINEERING
   LANGUAGE SWITCHER
========================= */

const translations = {

pt: {

heroTitle:
"Engenharia Pensada para a Realidade da Obra",

heroDescription:
"Projetos estruturais e de especialidades desenvolvidos com foco na coordenação técnica, exequibilidade e eficiência da construção."

},

en: {

heroTitle:
"Engineering Designed for Real-World Construction",

heroDescription:
"Structural and building services engineering projects focused on coordination, constructability and execution efficiency."

}

};

/* =========================
   CHANGE LANGUAGE
========================= */

function setLanguage(lang){

localStorage.setItem("imozetoLanguage", lang);

updateLanguage(lang);

}

/* =========================
   UPDATE PAGE
========================= */

function updateLanguage(lang){

const heroTitle =
document.getElementById("hero-title");

const heroDescription =
document.getElementById("hero-description");

if(heroTitle){

heroTitle.innerHTML =
translations[lang].heroTitle;

}

if(heroDescription){

heroDescription.innerHTML =
translations[lang].heroDescription;

}

/* =========================
   DATA-PT / DATA-EN
========================= */

const elements =
document.querySelectorAll("[data-pt]");

elements.forEach(element => {

const value =
element.getAttribute(`data-${lang}`);

if(value){

element.innerHTML = value;

}

});

}

/* =========================
   LOAD SAVED LANGUAGE
========================= */

document.addEventListener("DOMContentLoaded", () => {

const savedLanguage =
localStorage.getItem("imozetoLanguage") || "pt";

updateLanguage(savedLanguage);

});

/* =========================
   HEADER SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 8px 25px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow = "none";

}

});

/* =========================
   SMOOTH APPEAR ANIMATION
========================= */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.addEventListener("DOMContentLoaded",()=>{

const items = document.querySelectorAll(

".service-card, .project-item, .about-content, .about-image, .stat"

);

items.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

});
```
