document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    if (menuIcon && navMenu) {

        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('open');
            });
        });

    }

    const translations = {

        pt: {
            title: 'Projetamos os seus sonhos.<br>Construímos confiança.',
            subtitle: 'Estruturas • Especialidades • Preparação Técnica de Obra'
        },

        en: {
            title: 'We design your dreams.<br>We build trust.',
            subtitle: 'Structures • Engineering Services • Construction Planning'
        },

        de: {
            title: 'Wir planen Ihre Träume.<br>Wir bauen Vertrauen.',
            subtitle: 'Strukturen • Fachplanung • Bauvorbereitung'
        }

    };

    document.querySelectorAll('.lang-btn').forEach(btn => {

        btn.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelectorAll('.lang-btn').forEach(b => {
                b.classList.remove('active');
            });

            btn.classList.add('active');

            const lang = btn.dataset.lang;

            const heroTitle = document.getElementById('hero-title');
            const heroSubtitle = document.getElementById('hero-subtitle');

            if (heroTitle) {
                heroTitle.innerHTML = translations[lang].title;
            }

            if (heroSubtitle) {
                heroSubtitle.innerHTML = translations[lang].subtitle;
            }

        });

    });

});
