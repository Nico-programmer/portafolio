/*=========== Menú desplegable =========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=========== enlace activo de la sección =========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document
                .querySelector(`header nav a[href*="${id}"]`)
                ?.classList.add('active');
        }
    });

    /*=========== Barra de navegación =========== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=========== Cerrar navegación =========== */
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');
};

/*=========== Animaciones (scroll reveal) =========== */
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    display: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=========== Typed.js =========== */
const typed = new Typed('.multiple-text', {
    strings: ['Desarrollador Backend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});