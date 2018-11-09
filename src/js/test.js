const navHandler = e => {
    let link = e.target.closest('.page-nav__link');

    if (!link || !window.requestAnimationFrame) {
        return;
    }

    e.preventDefault();
    let targetId = link.getAttribute('href').replace('#', '');
    scrollTo(document.getElementById(targetId, 1000));
}

navigation.addEventListener('click', navHandler);