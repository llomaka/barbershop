(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuNavigation = document.querySelector('.navigation');
    const menuAppointment = document.querySelector('.menu__link.online-subscription');

    const toggleMenu = () => {
        if (window.matchMedia('(max-width: 767px)').matches) {
            const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
            openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
            mobileMenu.classList.toggle('is-open');

            const scrollLockMethod = !isMenuOpen
                ? 'disableBodyScroll'
                : 'enableBodyScroll';
            bodyScrollLock[scrollLockMethod](document.body);
        }
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    menuNavigation.addEventListener('click', toggleMenu);
    menuAppointment.addEventListener('click', toggleMenu);

    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });

})();