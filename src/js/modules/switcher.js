const initThemeSwitcher = () => {
    const themeSwitcherInput = document.querySelector('.hamburger__switcher');

    const manageState = () => {
        if (themeSwitcherInput.checked) {
            document.body.classList.add('is-dark-theme-enabled');
        } else {
            document.body.classList.remove('is-dark-theme-enabled');
        }
    }

    manageState();

    themeSwitcherInput.addEventListener('change', () => {
        manageState();
    });
};

export default initThemeSwitcher;