document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MENU MOBILE (ABRIR / FECHAR)
    // ==========================================
    const menuIcon = document.getElementById('menu-icon');
    const navMobile = document.getElementById('nav-mobile');

    if (menuIcon && navMobile) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('open');
            navMobile.classList.toggle('active');
        });

        // Fecha o menu ao clicar num link
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('open');
                navMobile.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. DICIONÁRIO DE TRADUÇÕES ESTRUTURADO (V8)
    // ==========================================
    const translations = {
        pt: {
            "menu-sobre": "SOBRE", "menu-servicos": "SERVIÇOS", "menu-portugal": "PORTUGAL", "menu-suica": "SUÍÇA", "menu-contacto": "CONTACTO",
            "menu-sobre-m": "Sobre", "menu-servicos-m": "Serviços", "menu-portugal-m": "Portugal", "menu-suica-m": "Suíça", "menu-contacto-m": "Contacto",
            "hero-tag": "ENGENHARIA ESTRUTURAL • ALLPLAN • BIM",
            "hero-title": "Projetamos os seus sonhos.<br>Construímos confiança.",
            "hero-subtitle": "Estruturas • Especialidades • Reinforcement Detailing",
            "btn-talk": "FALAR CONNOSCO", "btn-know": "CONHECER A IMOZETO",
            "about-title": "Engenharia de Precisão",
            "about-text-1": "A IMOZETO Engenharia atua de forma estratégica em dois mercados distintos, adaptando-se às exigências específicas de cada um.",
            "about-text-2": "Em Portugal, focamo-nos no desenvolvimento integral de projetos de estruturas e especialidades. Para o mercado Suíço, operamos como parceiros tecnológicos na modelação avançada em Allplan e pormenorização técnica de armaduras.",
            "services-title": "O que fazemos",
            "s1-title": "Cálculo Estrutural", "s1-desc": "Projetos em betão armado, estruturas metálicas, madeira e reabilitação de edifícios em Portugal.",
            "s2-title": "Projetos de Especialidades", "s2-desc": "Coordenação técnica de redes hidráulicas, acústica, térmica, SCIE e infraestruturas de telecomunicações.",
            "s3-title": "Reinforcement Detailing", "s3-desc": "Modelação 3D em Allplan, desenhos de cofragem, armaduras e preparação técnica de obra para a Suíça.",
            "pt-title": "Portugal",
            "pt-intro": "Desenvolvimento integral de projetos e licenciamento para o mercado nacional.",
            "pt-li1": "Projetos de Estruturas (Betão e Metal)", "pt-li2": "Redes de Água e Saneamento", "pt-li3": "Comportamento Térmico e Acústico", "pt-li4": "Segurança Contra Incêndios (SCIE) e ITED",
            "pt-stat1": "Licenciamento Assegurado", "pt-stat2": "Otimização de Custos",
            "ch-title": "Suíça (Allplan & Detailing)",
            "ch-intro": "Modelação avançada e pormenorização de armaduras em conformidade com as normas SIA.",
            "ch-li1": "Modelação BIM em Allplan", "ch-li2": "Desenhos de Execução de Cofragem (Schalungspläne)", "ch-li3": "Pormenorização de Armaduras (Bewehrungspläne)", "ch-li4": "Extração Automática de Listas de Ferros (Eisenlisten)",
            "ch-stat1": "Normas Suíças", "ch-stat2": "Allplan Workflow",
            "contact-title": "Vamos falar sobre o seu projeto",
            "contact-desc": "Seja para um projeto estrutural em Portugal ou para suporte técnico em Allplan na Suíça, estamos prontos para colaborar.",
            "form-name": "Nome", "form-email": "Email", "form-phone": "Telefone", "form-message": "Mensagem", "form-btn": "ENVIAR MENSAGEM",
            "footer-desc": "Engenharia Estrutural • Especialidades • Allplan Reinforcement Detailing",
            "footer-rights": "© 2026 IMOZETO Engenharia. Todos os direitos reservados."
        },
        en: {
            "menu-sobre": "ABOUT", "menu-servicos": "SERVICES", "menu-portugal": "PORTUGAL", "menu-suica": "SWITZERLAND", "menu-contacto": "CONTACT",
            "menu-sobre-m": "About", "menu-servicos-m": "Services", "menu-portugal-m": "Portugal", "menu-suica-m": "Switzerland", "menu-contacto-m": "Contact",
            "hero-tag": "STRUCTURAL ENGINEERING • ALLPLAN • BIM",
            "hero-title": "We design your dreams.<br>We build trust.",
            "hero-subtitle": "Structures • Engineering Services • Reinforcement Detailing",
            "btn-talk": "GET IN TOUCH", "btn-know": "DISCOVER IMOZETO",
            "about-title": "Precision Engineering",
            "about-text-1": "IMOZETO Engenharia operates strategically across two distinct markets, tailored to the specific technical demands of each.",
            "about-text-2": "In Portugal, we focus on the comprehensive development of structural and specialty engineering. For the Swiss market, we act as specialized technical partners for advanced Allplan modeling and structural reinforcement detailing.",
            "services-title": "What we do",
            "s1-title": "Structural Engineering", "s1-desc": "Reinforced concrete, steel structures, timber, and building rehabilitation projects in Portugal.",
            "s2-title": "Specialty Projects (MEP)", "s2-desc": "Technical coordination for water, sewage, acoustics, thermal insulation, fire safety, and telecom.",
            "s3-title": "Reinforcement Detailing", "s3-desc": "3D modeling in Allplan, formwork drawings, reinforcement detailing, and site prep for Switzerland.",
            "pt-title": "Portugal",
            "pt-intro": "Comprehensive project design and licensing for the Portuguese market.",
            "pt-li1": "Structural Design (Concrete & Steel)", "pt-li2": "Water & Sewage Systems", "pt-li3": "Thermal & Acoustic Performance", "pt-li4": "Fire Safety & Telecommunications (ITED)",
            "pt-stat1": "Approved Licensing", "pt-stat2": "Cost Optimization",
            "ch-title": "Switzerland (Allplan & Detailing)",
            "ch-intro": "Advanced modeling and structural detailing in full compliance with SIA standards.",
            "ch-li1": "BIM Modeling in Allplan", "ch-li2": "Formwork Execution Drawings (Schalungspläne)", "ch-li3": "Reinforcement Detailing (Bewehrungspläne)", "ch-li4": "Automated Bending Schedules (Eisenlisten)",
            "ch-stat1": "SIA Standards", "ch-stat2": "Allplan Workflow",
            "contact-title": "Let's talk about your project",
            "contact-desc": "Whether you need a structural project in Portugal or Allplan drafting support in Switzerland, we are ready to collaborate.",
            "form-name": "Name", "form-email": "Email", "form-phone": "Phone", "form-message": "Message", "form-btn": "SEND MESSAGE",
            "footer-desc": "Structural Engineering • Building Specialties • Allplan Reinforcement Detailing",
            "footer-rights": "© 2026 IMOZETO Engenharia. All rights reserved."
        },
        de: {
            "menu-sobre": "ÜBER UNS", "menu-servicos": "DIENSTE", "menu-portugal": "PORTUGAL", "menu-suica": "SCHWEIZ", "menu-contacto": "KONTAKT",
            "menu-sobre-m": "Über uns", "menu-servicos-m": "Dienstleistungen", "menu-portugal-m": "Portugal", "menu-suica-m": "Schweiz", "menu-contacto-m": "Kontakt",
            "hero-tag": "TRAGWERKSPLANUNG • ALLPLAN • BIM",
            "hero-title": "Wir planen Ihre Träume.<br>Wir bauen Vertrauen.",
            "hero-subtitle": "Strukturen • Fachplanung • Reinforcement Detailing",
            "btn-talk": "KONTAKT AUFNEHMEN", "btn-know": "IMOZETO KENNENLERNEN",
            "about-title": "Präzisions-Ingenieurwesen",
            "about-text-1": "IMOZETO Engenharia agiert strategisch auf zwei unterschiedlichen Märkten und passt sich den spezifischen technischen Anforderungen an.",
            "about-text-2": "In Portugal konzentrieren wir uns auf die vollständige Tragwerks- und Fachplanung. Für den Schweizer Markt sind wir Ihr spezialisierter Partner für fortschrittliche Allplan-Modellierung und Bewehrungsplanung.",
            "services-title": "Was wir tun",
            "s1-title": "Tragwerksplanung", "s1-desc": "Projekte im Stahlbetonbau, Stahlbau, Holzbau und Gebäudesanierung in Portugal.",
            "s2-title": "Fachplanungen (TGA)", "s2-desc": "Technische Koordination für Wasser, Abwasser, Akustik, Wärmeschutz, Brandschutz und ITED.",
            "s3-title": "Bewehrungsplanung", "s3-desc": "3D-Modellierung in Allplan, Schalungspläne, Bewehrungspläne und technische Arbeitsvorbereitung für die Schweiz.",
            "pt-title": "Portugal",
            "pt-intro": "Vollständige Projektentwicklung und Genehmigungen für den portugiesischen Markt.",
            "pt-li1": "Tragwerksentwurf (Beton & Stahl)", "pt-li2": "Wasser- und Abwassersysteme", "pt-li3": "Wärme- und Schallschutz", "pt-li4": "Brandschutz & Telekommunikation",
            "pt-stat1": "Zugelassene Planung", "pt-stat2": "Kostenoptimierung",
            "ch-title": "Schweiz (Allplan & Detailing)",
            "ch-intro": "Fortschrittliche Modellierung und Werkplanung in voller Übereinstimmung mit den SIA-Normen.",
            "ch-li1": "BIM-Modellierung in Allplan", "ch-li2": "Ausführungspläne für Schalung (Schalungspläne)", "ch-li3": "Detailtreue Bewehrungsplanung (Bewehrungspläne)", "ch-li4": "Automatische Stahllisten (Eisenlisten)",
            "ch-stat1": "SIA-Normen", "ch-stat2": "Allplan Workflow",
            "contact-title": "Sprechen wir über Ihr Projekt",
            "contact-desc": "Egal, ob Sie ein Tragwerksprojekt in Portugal ou Allplan-Unterstützung in der Schweiz benötigen, wir sind bereit für die Zusammenarbeit.",
            "form-name": "Name", "form-email": "Email", "form-phone": "Telefon", "form-message": "Nachricht", "form-btn": "NACHRICHT SENDEN",
            "footer-desc": "Tragwerksplanung • Fachplanungen • Allplan Bewehrungsplanung",
            "footer-rights": "© 2026 IMOZETO Engenharia. Alle Rechte vorbehalten."
        }
    };

    // ==========================================
    // 3. MOTOR DE SISTEMA DE TRADUÇÃO
    // ==========================================
    const langButtons = document.querySelectorAll('.lang-btn');

    const aplicarIdioma = (lang) => {
        document.documentElement.lang = lang;

        // Traduz textos baseados no atributo data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            langButtons.forEach(b => b.classList.remove('active'));
            
            // Ativa o botão selecionado em qualquer um dos menus (Desktop/Mobile)
            const lang = btn.dataset.lang;
            document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
            
            aplicarIdioma(lang);
        });
    });

    // ==========================================
    // 4. ANIMAÇÃO SUAVE DE REVEAL AO FAZER SCROLL
    // ==========================================
    const revealElements = document.querySelectorAll(
        '.about-section, .services-section, .country-section, .contact-section'
    );

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const top = element.getBoundingClientRect().top;
            const trigger = window.innerHeight * 0.85;

            if (top < trigger) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ativação inicial caso existam elementos visíveis no topo
});
