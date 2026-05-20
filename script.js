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

    // Lógica para el formulario de Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        const email = emailInput.value;
        
        if (email) {
            // Simulamos el envío a un servidor
            alert(`¡Excelente! El correo ${email} ha sido registrado para recibir novedades de Lancas.`);
            newsletterForm.reset(); // Limpia el formulario
        }
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