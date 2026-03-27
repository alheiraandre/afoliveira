// js/main.js

document.addEventListener("DOMContentLoaded", (event) => {
    
    // 1. Configuração do Lenis (Rolagem suave)
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. Lógica do Menu de Navegação
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (menuToggle && menuClose && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuOverlay.classList.add('active');
        });

        menuClose.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });

        // Fecha o menu ao clicar em um link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.remove('active');
            });
        });
    }

    // 3. Animações de Aparição (ScrollTrigger para a classe .noshow)
    gsap.registerPlugin(ScrollTrigger);

    const showElements = document.querySelectorAll('.noshow');
    
    showElements.forEach((el) => {
        // Verifica se há classes de atraso (delay)
        let delayAmount = 0;
        if (el.classList.contains('delay-1')) delayAmount = 0.2;
        if (el.classList.contains('delay-2')) delayAmount = 0.4;

        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // A animação começa quando o topo do elemento atinge 85% da tela
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: delayAmount
        });
    });

});