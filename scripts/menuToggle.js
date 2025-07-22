const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('web-nav');
const navLinks = document.querySelector('#web-nav .nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    nav.classList.toggle('open');
});
