const burger = () => {
    const burgerBtn = document.querySelector('.burger');
    const hamburgerOverlay = document.querySelector('.hamburger');

    burgerBtn.addEventListener('click', () => {
        hamburgerOverlay.classList.add('active-burger');
    });

    hamburgerOverlay.addEventListener('click', (e) => {
        const target = e.target;

        if (target === hamburgerOverlay) {
            hamburgerOverlay.classList.remove('active-burger');
        }
    });
};

export default burger;