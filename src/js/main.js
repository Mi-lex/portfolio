import './../img/icons/web.svg';
import './../img/icons/html-5.svg';
import './../img/icons/css3.svg';
import './../img/icons/javascript.svg';
import "./../img/icons/php.svg";
import "./../img/icons/sass.svg";
import "./../img/icons/bem.svg";
import "./../img/icons/es6.svg";
import "./../img/icons/typescript.svg";
import "./../img/icons/laravel.svg";
import './../img/me-desktop(2x).jpg';

const menuToggler = document.querySelector('.page-nav__menu-toggler');
const pageNav = document.querySelector('.page-nav');

const toggleMenu = () => {
    pageNav.classList.toggle('page-nav--closed');
};

menuToggler.addEventListener('click', toggleMenu);