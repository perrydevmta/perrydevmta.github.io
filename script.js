document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Hamburguer Mobile
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Dicionário de Traduções (PT / EN)
    const translations = {
        pt: {
            "nav-home": "Início", "nav-about": "Sobre", "nav-projects": "Projetos", "nav-diff": "Diferenciais", "nav-faq": "FAQ", "nav-reviews": "Depoimentos", "nav-contact": "Contato",
            "hero-title": "Desenvolvendo o futuro do seu <span>Servidor MTA</span>",
            "hero-desc": "Especialista em scripts avançados, otimização extrema, painéis modernos e sistemas exclusivos como veículos elétricos.",
            "btn-projects": "Ver Projetos", "btn-contact": "Fale Comigo",
            "about-title": "Sobre Mim",
            "about-p1": "Olá! Sou o <strong>Perry</strong>, um desenvolvedor apaixonado por criar experiências únicas e imersivas no <strong>Multi Theft Auto (MTA)</strong>. O meu foco principal é desenvolver sistemas limpos, altamente otimizados (client/server) e com uma interface visual impecável (UI/UX).",
            "about-p2": "Seja criando mecânicas complexas, sistemas de tunagem detalhados ou inovações tecnológicas como carros elétricos para o seu servidor, trabalho focado em entregar estabilidade, zero lag e segurança total contra exploits.",
            "projects-title": "Meus Projetos",
            "proj1-img": "Prévia do Sistema", "proj1-title": "Sistema de Carro Elétrico", "proj1-desc": "Mecânica avançada com HUD própria, carregamento de bateria, som personalizado e sincronização perfeita.",
            "proj2-img": "Prévia do Sistema", "proj2-title": "Painel de Tunagem Pro", "proj2-desc": "Interface moderna em estilo cyberpunk para modificação estética e de performance de veículos com pré-visualização.",
            "proj3-img": "Prévia do Sistema", "proj3-title": "Sistema de Criação de Conta", "proj3-desc": "Tela de registo e login fluida, segura, integrada com base de dados e proteção total contra injeções.",
            "tag-security": "Segurança", "tag-ui": "UI Moderna",
            "diff-title": "Por que escolher meus sistemas?",
            "diff-1": "⚡ 0% de Lag no Servidor", "diff-2": "🎨 Painéis 100% Responsivos", "diff-3": "🔒 Segurança contra exploits", "diff-4": "⚙️ Suporte e Atualizações", "diff-5": "🚀 Otimização Extrema (Client/Server)", "diff-6": "💡 Códigos Limpos e Fáceis de Configurar",
            "faq-main-title": "Perguntas Frequentes",
            "faq-q1": "Os scripts têm proteção contra leaks (vazamentos)?", "faq-a1": "Sim! Todos os códigos possuem proteção avançada por chave de serial/IP e criptografia de alta segurança para garantir exclusividade ao seu servidor.",
            "faq-q2": "Como funciona o suporte pós-compra?", "faq-a2": "Ofereço suporte completo para instalação, configuração inicial e correção de eventuais bugs de compatibilidade diretamente via Discord.",
            "faq-q3": "Existe garantia de otimização e zero lag?", "faq-a3": "Com certeza. Os recursos são rigorosamente testados em servidores de grande porte para garantir consumo zero de processamento desnecessário (client/server balanceado).",
            "faq-q4": "Aceita encomendas de sistemas personalizados?", "faq-a4": "Sim, desenvolvo sistemas sob medida para a proposta do seu servidor. Entre em contato pelo Discord para orçamentos e prazos.",
            "reviews-title": "O que dizem os Clientes",
            "rev1-text": "\"O sistema de carro elétrico rodou perfeitamente no meu servidor, zero lag e sincronização impecável. Recomendo muito!\"", "rev1-role": "Dono de Servidor MTA",
            "rev2-text": "\"Painel de tunagem mais lindo e otimizado que já vi. A interface cyberpunk combinou perfeitamente com a proposta do nosso server.\"", "rev2-role": "Administrador",
            "contact-title": "Vamos Trabalhar Juntos?", "contact-desc": "Me chame no Discord para orçamentos, encomendas de sistemas exclusivos ou parcerias.",
            "btn-discord": "Meu Discord: perrydev", "btn-github": "Meu GitHub",
            "footer-rights": "&copy; 2026 Perry Dev. Todos os direitos reservados."
        },
        en: {
            "nav-home": "Home", "nav-about": "About", "nav-projects": "Projects", "nav-diff": "Features", "nav-faq": "FAQ", "nav-reviews": "Reviews", "nav-contact": "Contact",
            "hero-title": "Developing the future of your <span>MTA Server</span>",
            "hero-desc": "Specialist in advanced scripts, extreme optimization, modern panels, and exclusive systems like electric vehicles.",
            "btn-projects": "View Projects", "btn-contact": "Get in Touch",
            "about-title": "About Me",
            "about-p1": "Hello! I'm <strong>Perry</strong>, a developer passionate about creating unique and immersive experiences in <strong>Multi Theft Auto (MTA)</strong>. My main focus is building clean, highly optimized (client/server) systems with flawless UI/UX.",
            "about-p2": "Whether building complex mechanics, detailed tuning systems, or technological innovations like electric vehicles for your server, I am committed to delivering stability, zero lag, and total exploit protection.",
            "projects-title": "My Projects",
            "proj1-img": "System Preview", "proj1-title": "Electric Car System", "proj1-desc": "Advanced mechanics with custom HUD, battery charging, personalized sound, and perfect synchronization.",
            "proj2-img": "System Preview", "proj2-title": "Pro Tuning Panel", "proj2-desc": "Modern cyberpunk interface for aesthetic and performance vehicle customization with live preview.",
            "proj3-img": "System Preview", "proj3-title": "Account Registration System", "proj3-desc": "Smooth, secure login and register screen integrated with database and full injection protection.",
            "tag-security": "Security", "tag-ui": "Modern UI",
            "diff-title": "Why choose my systems?",
            "diff-1": "⚡ 0% Server Lag", "diff-2": "🎨 100% Responsive Panels", "diff-3": "🔒 Exploit Protection", "diff-4": "⚙️ Support & Updates", "diff-5": "🚀 Extreme Optimization (Client/Server)", "diff-6": "💡 Clean & Easy to Configure Code",
            "faq-main-title": "Frequently Asked Questions",
            "faq-q1": "Do scripts have anti-leak protection?", "faq-a1": "Yes! All codes feature advanced serial/IP key protection and high-security encryption to ensure exclusivity for your server.",
            "faq-q2": "How does post-purchase support work?", "faq-a2": "I offer complete support for installation, initial setup, and resolving any compatibility bugs directly via Discord.",
            "faq-q3": "Is there an optimization and zero lag guarantee?", "faq-a3": "Absolutely. Features are rigorously tested on large servers to ensure zero unnecessary resource usage (balanced client/server).",
            "faq-q4": "Do you accept custom system commissions?", "faq-a4": "Yes, I develop custom systems tailored to your server's concept. Reach out via Discord for quotes and timeframes.",
            "reviews-title": "Client Reviews",
            "rev1-text": "\"The electric car system ran perfectly on my server, zero lag and flawless sync. Highly recommended!\"", "rev1-role": "MTA Server Owner",
            "rev2-text": "\"The most gorgeous and optimized tuning panel I've ever seen. The cyberpunk interface matched our server's vibe perfectly.\"", "rev2-role": "Administrator",
            "contact-title": "Let's Work Together?", "contact-desc": "Hit me up on Discord for quotes, exclusive system commissions, or partnerships.",
            "btn-discord": "My Discord: perrydev", "btn-github": "My GitHub",
            "footer-rights": "&copy; 2026 Perry Dev. All rights reserved."
        }
    };

    let currentLang = "pt";
    const langToggleBtn = document.getElementById("lang-toggle");

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        langToggleBtn.textContent = currentLang === "pt" ? "EN" : "PT";
        
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
    });

    // 3. Efeito de Digitação (Typing Effect)
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;
    const textToType = translations.pt["hero-desc"];

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 35);
        }
    }

    typingElement.textContent = "";
    setTimeout(typeText, 500);

    // 4. Acordeão do FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            // Fecha os outros abertos (opcional)
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    });
});
