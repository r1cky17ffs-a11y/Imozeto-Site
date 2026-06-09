document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('open'); // Opcional: para animar as linhas do ícone
        });

        // Fecha o menu quando um item é clicado (útil para Single Page Applications)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuIcon.classList.remove('open');
                }
            });
        });
    }

    // Opcional: Animação para o ícone do menu
    // Adicionar ao CSS:
    /*
    .menu-icon.open span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .menu-icon.open span:nth-child(2) {
        opacity: 0;
    }
    .menu-icon.open span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    */
});
