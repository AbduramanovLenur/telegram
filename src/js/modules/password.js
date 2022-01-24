const password = (btnTrigger, inputSelector, wrapperSelector, errorSelector) => {
    const button = document.querySelector(btnTrigger);
    const inputVal = document.querySelector(inputSelector);
    const wrapperPassword = document.querySelector(wrapperSelector);
    const error = document.querySelector(errorSelector);
    const pass = 1;

    button.addEventListener('click', () => {
        validatePass(parseInt(inputVal.value));
    });

    inputVal.addEventListener('blur', (e) => {
        validatePass(parseInt(inputVal.value));
    });

    function validatePass(password) {
        if (password === pass) {
            wrapperPassword.classList.remove('password-active');
        } else {
            error.classList.add('error-active');
        };
    };
};

export default password;