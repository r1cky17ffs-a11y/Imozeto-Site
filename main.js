document.addEventListener('DOMContentLoaded', () => {

    // MENU MOBILE

    const menuBtn = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('nav-mobile');

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', () => {

                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('open');

            });

        });

    }

    // TRADUÇÕES

    const translations = {

        pt: {

            heroTitle:
                "Projetamos os seus sonhos.<br>Construímos confiança.",

            heroSubtitle:
                "Estruturas • Especialidades • Preparação Técnica de Obra",

            aboutTitle:
                "Projetamos para Construir"

        },

        en: {

            heroTitle:
                "We design your dreams.<br>We build trust.",

            heroSubtitle:
                "Structures • Engineering Services • Construction Planning",

            aboutTitle:
                "Designing for Construction"

        },

        de: {

            heroTitle:
                "Wir planen Ihre Träume.<br>Wir bauen Vertrauen.",

            heroSubtitle:
                "Strukturen • Fachplanung • Bauvorbereitung",

            aboutTitle:
                "Planen zum Bauen"

        }

    };

    document.querySelectorAll('.lang-btn').forEach(btn => {

        btn.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelectorAll('.lang-btn')
                .forEach(b => b.classList.remove('active'));

            btn.classList.add('active');

            const lang = btn.dataset.lang;
            const t = translations[lang];

            const heroTitle = document.getElementById('hero-title');
            const heroSubtitle = document.getElementById('hero-subtitle');
            const aboutTitle = document.getElementById('about-title');

            if (heroTitle) {
                heroTitle.innerHTML = t.heroTitle;
            }

            if (heroSubtitle) {
                heroSubtitle.innerHTML = t.heroSubtitle;
            }

            if (aboutTitle) {
                aboutTitle.textContent = t.aboutTitle;
            }

        });

    });

});
