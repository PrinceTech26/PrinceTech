document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Handle Contact Form Submission via WhatsApp
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
            window.open(`https://wa.me/233500371741?text=${encodeURIComponent(fullMessage)}`, '_blank');
        });
    }

    // Sticky Header Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check Local Storage for preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
