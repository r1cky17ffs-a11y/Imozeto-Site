```javascript
/* ==================================
MENU OVERLAY
================================== */

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.addEventListener("click", () => {
    menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
});

/* ==================================
FECHAR MENU AO CLICAR NUM LINK
================================== */

document.querySelectorAll(".overlay-nav a").forEach(link => {

    link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

});

/* ==================================
IDIOMAS
================================== */

function setLanguage(lang){

    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-pt]").forEach(element => {

        if(lang === "pt"){
            element.textContent = element.getAttribute("data-pt");
        }

        if(lang === "en"){
            element.textContent = element.getAttribute("data-en");
        }

    });

}

/* ==================================
CARREGAR IDIOMA GUARDADO
================================== */

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "pt";

    setLanguage(savedLanguage);

});

/* ==================================
ANIMAÇÃO AO SCROLL
================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".about, .service-section, .contact"
).forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});
```
