document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el menú móvil (hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Lógica para cerrar el menú móvil al hacer clic en un enlace
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Lógica para el Acordeón de Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            
            // Esto hace que si abrís una pregunta, se cierren las demás
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            // Abre o cierra la pregunta en la que hiciste clic
            parent.classList.toggle('active');
        });
    });

    // Efecto suave para el scroll (Smooth Scrolling) en los enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Restamos 80px para compensar la altura del menú fijo (header)
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});