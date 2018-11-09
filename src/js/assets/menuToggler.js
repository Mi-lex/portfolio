export default function menuToggler() {
    const menuToggler = document.querySelector('.page-nav__menu-toggler');
    const pageNav = document.querySelector('.page-nav');

    const toggleMenu = () => {
        pageNav.classList.toggle('page-nav--closed');
    };

    menuToggler.addEventListener('click', toggleMenu);
}