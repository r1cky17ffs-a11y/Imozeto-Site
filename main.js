document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MENU MOBILE
    // ==========================================
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

    // ==========================================
    // 2. DICIONÁRIO DE TRADUÇÕES (PT / EN / DE)
    // ==========================================
    const translations = {
        pt: {
            "menu-sobre": "SOBRE", "menu-servicos": "SERVIÇOS", "menu-portugal": "PORTUGAL", "menu-suica": "SUÍÇA", "menu-contacto": "CONTACTO",
            "menu-sobre-m": "Sobre", "menu-servicos-m": "Serviços", "menu-portugal-m": "Portugal", "menu-suica-m": "Suíça", "menu-contacto-m": "Contacto",
            "hero-tag": "ENGENHARIA • BIM • PREPARAÇÃO TÉCNICA",
            "hero-title": "Projetamos os seus sonhos.<br>Construímos confiança.",
            "hero-subtitle": "Estruturas • Especialidades • Preparação Técnica de Obra",
            "btn-talk": "FALAR CONNOSCO", "btn-know": "CONHECER A IMOZETO",
            "about-title": "Projetamos para Construir",
            "about-text-1": "A IMOZETO Engenharia desenvolve projetos estruturais e projetos de especialidades para habitação, comércio, serviços e indústria.",
            "about-text-2": "Em Portugal desenvolvemos projetos. Na Suíça colaboramos na preparação técnica, modelação BIM e apoio à execução.",
            "services-title": "O que fazemos",
            "s1-title": "Estruturas", "s1-desc": "Projetos em betão armado, estruturas metálicas e reabilitação.",
            "s2-title": "Especialidades", "s2-desc": "Águas, esgotos, acústica, térmica, SCIE e ITED.",
            "s3-title": "Preparação Técnica", "s3-desc": "BIM, modelação 3D, apoio à execução e produção.",
            "learn-more": "Saber mais →",
            "pt-intro": "Desenvolvimento de projetos e coordenação técnica.",
            "pt-li1": "Projetos Estruturais", "pt-li2": "Projetos de Especialidades", "pt-li3": "Coordenação Técnica", "pt-li4": "Licenciamento",
            "ch-title": "Suíça", "ch-intro": "Preparação técnica e apoio à execução em obra.",
            "ch-li1": "Modelação BIM", "ch-li2": "Produção Técnica", "ch-li3": "Apoio à Execução", "ch-li4": "Coordenação de Production",
            "contact-title": "Vamos falar sobre o seu projeto",
            "contact-desc": "Estamos disponíveis para colaborar em projetos de engenharia, estruturas, especialidades e preparação técnica.",
            "form-name": "Nome", "form-email": "Email", "form-phone": "Telefone", "form-message": "Descreva o seu projeto", "form-btn": "ENVIAR MENSAGEM",
            "footer-desc": "Engenharia Estrutural • Especialidades • Preparação Técnica de Obra",
            "footer-rights": "© 2026 IMOZETO Engenharia. Todos os direitos reservados."
        },
        en: {
            "menu-sobre": "ABOUT", "menu-servicos": "SERVICES", "menu-portugal": "PORTUGAL", "menu-suica": "SWITZERLAND", "menu-contacto": "CONTACT",
            "menu-sobre-m": "About", "menu-servicos-m": "Services", "menu-portugal-m": "Portugal", "menu-suica-m": "Switzerland", "menu-contacto-m": "Contact",
            "hero-tag": "ENGINEERING • BIM • TECHNICAL PREPARATION",
            "hero-title": "We design your dreams.<br>We build trust.",
            "hero-subtitle": "Structures • Engineering Services • Construction Planning",
            "btn-talk": "GET IN TOUCH", "btn-know": "DISCOVER IMOZETO",
            "about-title": "We Design to Build",
            "about-text-1": "IMOZETO Engenharia develops structural and specialty engineering projects for residential, commercial, services, and industrial sectors.",
            "about-text-2": "In Portugal, we design projects. In Switzerland, we cooperate in technical preparation, BIM modeling, and execution support.",
            "services-title": "What we do",
            "s1-title": "Structures", "s1-desc": "Projects in reinforced concrete, steel structures, and building rehabilitation.",
            "s2-title": "Specialties", "s2-desc": "Water, sewage, acoustics, thermal insulation, fire safety, and telecommunications.",
            "s3-title": "Technical Prep", "s3-desc": "BIM, 3D modeling, construction execution support, and production management.",
            "learn-more": "Learn more →",
            "pt-intro": "Project development and technical coordination.",
            "pt-li1": "Structural Engineering", "pt-li2": "Specialty Projects (MEP)", "pt-li3": "Technical Coordination", "pt-li4": "Permitting & Licensing",
            "ch-title": "Switzerland", "ch-intro": "Technical preparation and on-site execution support.",
            "ch-li1": "BIM Modeling", "ch-li2": "Technical Production Drawings", "ch-li3": "Execution Support", "ch-li4": "Production Coordination",
            "contact-title": "Let's talk about your project",
