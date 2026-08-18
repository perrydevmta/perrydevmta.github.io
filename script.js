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

    // 2. Animações de Scroll (Fade-in Suave via Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.12
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".section, .card, .skill-box, .calculator-container, .faq-item, .about-card").forEach(el => {
        el.classList.add("reveal");
        scrollObserver.observe(el);
    });

    // 3. Dicionário de Traduções (PT / EN)
    const translations = {
        pt: {
            "nav-home": "Início", "nav-about": "Sobre", "nav-projects": "Projetos", "nav-diff": "Diferenciais", "nav-calc": "Orçamento", "nav-faq": "FAQ", "nav-reviews": "Depoimentos", "nav-contact": "Contato",
            "hero-title": "Desenvolvendo o futuro do seu <span>Servidor MTA</span>",
            "hero-desc": "Especialista em scripts avançados, otimização extrema, painéis modernos e sistemas exclusivos como veículos elétricos.",
            "btn-projects": "Ver Projetos", "btn-budget": "Calcular Orçamento",
            "partners-title": "Sistemas validados e aprovados por donos de grandes servidores:",
            "about-title": "Sobre Mim",
            "about-p1": "Olá! Sou o <strong>Perry</strong>, um desenvolvedor apaixonado por criar experiências únicas e imersivas no <strong>Multi Theft Auto (MTA)</strong>. O meu foco principal é desenvolver sistemas limpos, altamente otimizados (client/server) e com uma interface visual impecável (UI/UX).",
            "about-p2": "Seja criando mecânicas complexas, sistemas de tunagem detalhados ou inovações tecnológicas como carros elétricos para o seu servidor, trabalho focado em entregar estabilidade, zero lag e segurança total contra exploits.",
            "projects-title": "Meus Projetos",
            "projects-subtitle": "Clique num card para ver os detalhes completos e especificações",
            "proj1-title": "Sistema de Carro Elétrico", "proj1-desc": "Mecânica avançada com HUD própria, carregamento de bateria, som personalizado e sincronização perfeita.",
            "proj2-title": "Painel de Tunagem Pro", "proj2-desc": "Interface moderna em estilo cyberpunk para modificação estética e de performance de veículos com pré-visualização.",
            "proj3-title": "Sistema de Criação de Conta", "proj3-desc": "Tela de registo e login fluida, segura, integrada com base de dados e proteção total contra injeções.",
            "tag-security": "Segurança", "tag-ui": "UI Moderna",
            "diff-title": "Por que escolher meus sistemas?",
            "diff-1": "⚡ 0% de Lag no Servidor", "diff-2": "🎨 Painéis 100% Responsivos", "diff-3": "🔒 Segurança contra exploits", "diff-4": "⚙️ Suporte e Atualizações", "diff-5": "🚀 Otimização Extrema (Client/Server)", "diff-6": "💡 Códigos Limpos e Fáceis de Configurar",
            "calc-title": "Calculadora de Orçamento", "calc-subtitle": "Selecione o seu sistema e prazo para gerar uma mensagem pronta para enviar no Discord",
            "calc-label-type": "Tipo de Sistema / Projeto:", "calc-label-deadline": "Prazo Desejado:",
            "calc-result-title": "Mensagem Pronta para Envio:", "calc-copy": "Copiar Mensagem", "calc-copied": "Copiado com sucesso! Cole no meu Discord para fechar.",
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
            "footer-rights": "&copy; 2026 Perry Dev. Todos os direitos reservados.",
            "visitor-text": "Visualizações do Portfólio:",
            "modal-specs-title": "Especificações Técnicas:",
            "modal-order": "Encomendar Sistema"
        },
        en: {
            "nav-home": "Home", "nav-about": "About", "nav-projects": "Projects", "nav-diff": "Features", "nav-calc": "Budget", "nav-faq": "FAQ", "nav-reviews": "Reviews", "nav-contact": "Contact",
            "hero-title": "Developing the future of your <span>MTA Server</span>",
            "hero-desc": "Specialist in advanced scripts, extreme optimization, modern panels, and exclusive systems like electric vehicles.",
            "btn-projects": "View Projects", "btn-budget": "Calculate Budget",
            "partners-title": "Systems validated and trusted by owners of top servers:",
            "about-title": "About Me",
            "about-p1": "Hello! I'm <strong>Perry</strong>, a developer passionate about creating unique and immersive experiences in <strong>Multi Theft Auto (MTA)</strong>. My main focus is building clean, highly optimized (client/server) systems with flawless UI/UX.",
            "about-p2": "Whether building complex mechanics, detailed tuning systems, or technological innovations like electric vehicles for your server, I am committed to delivering stability, zero lag, and total exploit protection.",
            "projects-title": "My Projects",
            "projects-subtitle": "Click on a card to view full details and specifications",
            "proj1-title": "Electric Car System", "proj1-desc": "Advanced mechanics with custom HUD, battery charging, personalized sound, and perfect synchronization.",
            "proj2-title": "Pro Tuning Panel", "proj2-desc": "Modern cyberpunk interface for aesthetic and performance vehicle customization with live preview.",
            "proj3-title": "Account Registration System", "proj3-desc": "Smooth, secure login and register screen integrated with database and full injection protection.",
            "tag-security": "Security", "tag-ui": "Modern UI",
            "diff-title": "Why choose my systems?",
            "diff-1": "⚡ 0% Server Lag", "diff-2": "🎨 100% Responsive Panels", "diff-3": "🔒 Exploit Protection", "diff-4": "⚙️ Support & Updates", "diff-5": "🚀 Extreme Optimization (Client/Server)", "diff-6": "💡 Clean & Easy to Configure Code",
            "calc-title": "Budget Calculator", "calc-subtitle": "Select your system and deadline to generate a ready-to-send message for Discord",
            "calc-label-type": "System / Project Type:", "calc-label-deadline": "Desired Deadline:",
            "calc-result-title": "Ready-to-Send Message:", "calc-copy": "Copy Message", "calc-copied": "Copied successfully! Paste it into my Discord to order.",
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
            "footer-rights": "&copy; 2026 Perry Dev. All rights reserved.",
            "visitor-text": "Portfolio Views:",
            "modal-specs-title": "Technical Specifications:",
            "modal-order": "Order System"
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
        updateCalculatorMessage();
    });

    // 4. Efeito de Digitação
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

    // 5. Acordeão do FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    });

    // 6. Lógica da Calculadora de Orçamento Dinâmica
    const calcType = document.getElementById("calc-type");
    const calcDeadline = document.getElementById("calc-deadline");
    const calcOutputBox = document.getElementById("calc-output-box");
    const calcCopyBtn = document.getElementById("calc-copy-btn");
    const calcCopiedMsg = document.getElementById("calc-copied-msg");

    function updateCalculatorMessage() {
        const system = calcType.value;
        const deadline = calcDeadline.value;

        if (currentLang === "pt") {
            calcOutputBox.textContent = `Olá Perry! Gostaria de encomendar: ${system} com prazo: ${deadline}. Poderia me passar um orçamento?`;
            calcCopyBtn.textContent = "Copiar Mensagem";
            calcCopiedMsg.textContent = "Copiado com sucesso! Cole no meu Discord para fechar.";
        } else {
            calcOutputBox.textContent = `Hello Perry! I would like to order: ${system} with deadline: ${deadline}. Could you give me a quote?`;
            calcCopyBtn.textContent = "Copy Message";
            calcCopiedMsg.textContent = "Copied successfully! Paste it into my Discord to order.";
        }
    }

    calcType.addEventListener("change", updateCalculatorMessage);
    calcDeadline.addEventListener("change", updateCalculatorMessage);

    calcCopyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(calcOutputBox.textContent);
        calcCopiedMsg.style.display = "block";
        setTimeout(() => {
            calcCopiedMsg.style.display = "none";
        }, 4000);
    });

    // 7. Dados Dinâmicos dos Modais com Mídia (GIF / Vídeo demonstrativo)
    const projectDetails = {
        1: {
            media: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", // Podes trocar por link de GIF ou MP4 do teu script
            pt: {
                title: "Sistema de Carro Elétrico",
                desc: "Mecanismo completo desenvolvido para servidores de Roleplay ou simulação, trazendo uma experiência realista de condução elétrica.",
                specs: [
                    "HUD personalizada com medidor de bateria em tempo real",
                    "Sistema de estações de carregamento espalhadas pelo mapa",
                    "Sons exclusivos de motor elétrico e carregamento",
                    "Totalmente sincronizado via Client/Server com zero lag"
                ]
            },
            en: {
                title: "Electric Car System",
                desc: "Complete mechanism built for Roleplay or simulation servers, bringing a realistic electric vehicle driving experience.",
                specs: [
                    "Custom HUD with real-time battery level indicator",
                    "Charging stations network spread across the map",
                    "Exclusive electric motor and charging sound effects",
                    "Fully synchronized via Client/Server with zero lag"
                ]
            }
        },
        2: {
            media: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
            pt: {
                title: "Painel de Tunagem Pro",
                desc: "Interface gráfica moderna em estilo cyberpunk criada com CEF (HTML/CSS/JS) para customização visual e mecânica de veículos.",
                specs: [
                    "Pré-visualização em tempo real das peças aplicadas",
                    "Suporte completo a banco de dados MySQL para salvamento",
                    "Design altamente fluido e responsivo",
                    "Sistema modular de preços e permissões configuráveis"
                ]
            },
            en: {
                title: "Pro Tuning Panel",
                desc: "Modern cyberpunk-style graphical interface built with CEF (HTML/CSS/JS) for aesthetic and mechanical vehicle customization.",
                specs: [
                    "Real-time preview of installed parts",
                    "Full MySQL database support for data saving",
                    "Extremely fluid and responsive layout design",
                    "Modular system for configurable prices and permissions"
                ]
            }
        },
        3: {
            media: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            pt: {
                title: "Sistema de Criação de Conta",
                desc: "Tela de autenticação (registo e login) com foco em segurança máxima contra ataques de injeção e otimização de carregamento.",
                specs: [
                    "Validação avançada de dados de utilizador",
                    "Encriptação de palavras-passe com hash de alta segurança",
                    "Design limpo, imersivo e sem travamentos",
                    "Integração nativa com ACL e MySQL"
                ]
            },
            en: {
                title: "Account Registration System",
                desc: "Authentication screen (login & register) focused on maximum security against injection attacks and fast loading times.",
                specs: [
                    "Advanced user input validation checks",
                    "High-security password hashing encryption",
                    "Clean, immersive, and lag-free design",
                    "Native integration with ACL and MySQL"
                ]
            }
        }
    };

    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalSpecsList = document.getElementById("modal-specs-list");
    const modalMediaContainer = document.getElementById("modal-media-container");

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-id");
            const project = projectDetails[projectId];
            const data = project[currentLang];

            // Injetar imagem/GIF ou vídeo demonstrativo no modal
            modalMediaContainer.innerHTML = `<img src="${project.media}" alt="${data.title}">`;

            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;
            
            modalSpecsList.innerHTML = "";
            data.specs.forEach(spec => {
                const li = document.createElement("li");
                li.textContent = spec;
                modalSpecsList.appendChild(li);
            });

            modal.classList.add("active");
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // 8. Contador de Visualizações via LocalStorage
    const visitCountEl = document.getElementById("visit-count");
    let visits = localStorage.getItem("perrydev_visits");
    
    if (!visits) {
        visits = 1420;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem("perrydev_visits", visits);
    visitCountEl.textContent = visits.toLocaleString();
});
