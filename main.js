document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-menu');

    // Abre e fecha o menu mobile
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        
        // Efeito visual nas barras do botão
        if(menu.classList.contains('is-active')) {
            menu.children[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            menu.children[1].style.opacity = "0";
            menu.children[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            menu.children[0].style.transform = "none";
            menu.children[1].style.opacity = "1";
            menu.children[2].style.transform = "none";
        }
    });

    // Fecha o menu ao clicar num link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
            menu.children[0].style.transform = "none";
            menu.children[1].style.opacity = "1";
            menu.children[2].style.transform = "none";
        });
    });
});
