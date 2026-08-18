document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Hamburguer Mobile
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fechar menu ao clicar em qualquer link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Efeito de Digitação (Typing Effect)
    const typingElement = document.getElementById("typing-text");
    const textToType = "Especialista em scripts avançados, otimização extrema, painéis modernos e sistemas exclusivos como veículos elétricos.";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 35);
        }
    }

    typingElement.textContent = "";
    setTimeout(typeText, 500);

    // 3. Scroll Reveal (Animação suave ao rolar a página)
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Executa no carregamento inicial
});