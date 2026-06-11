document.addEventListener('DOMContentLoaded', () => {

    // MENU MOBILE
    const menuIcon = document.getElementById('menu-icon');
    const navMobile = document.getElementById('nav-mobile');

    if (menuIcon && navMobile) {

        menuIcon.addEventListener('click', () => {

            menuIcon.classList.toggle('open');
            navMobile.classList.toggle('active');

        });

        navMobile.querySelectorAll('a').forEach(link => {

            link.addEventListener('click', () => {

                menuIcon.classList.remove('open');
                navMobile.classList.remove('active');

            });

        });

    }

    // TRADUÇÕES
    const translations = {

        pt: {

            heroTitle: "Projetamos os seus sonhos.<br>Construímos confiança.",

            heroSubtitle:
                "Estruturas • Especialidades • Preparação Técnica de Obra"

        },

        en: {

            heroTitle:
                "We design your dreams.<br>We build trust.",

            heroSubtitle:
                "Structures • Engineering Services • Construction Planning"

        },

        de: {

            heroTitle:
                "Wir planen Ihre Träume.<br>Wir bauen Vertrauen.",

            heroSubtitle:
                "Strukturen • Fachplanung • Bauvorbereitung"

        }

    };

    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {

        btn.addEventListener('click', (e) => {

            e.preventDefault();

            langButtons.forEach(b => {
                b.classList.remove('active');
            });

            btn.classList.add('active');

            const lang = btn.dataset.lang;

            const heroTitle =
                document.getElementById('hero-title');

            const heroSubtitle =
                document.getElementById('hero-subtitle');

            if (heroTitle) {

                heroTitle.innerHTML =
                    translations[lang].heroTitle;

            }

            if (heroSubtitle) {

                heroSubtitle.innerHTML =
                    translations[lang].heroSubtitle;

            }

        });

    });

    // ANIMAÇÃO DE SCROLL
    const revealElements = document.querySelectorAll(
        '.about-section, .services-section, .country-section, .contact-section'
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const top =
                element.getBoundingClientRect().top;

            const trigger =
                window.innerHeight * 0.85;

            if (top < trigger) {

                element.classList.add('show');

            }

        });

    };

    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll();

});
