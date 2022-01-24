const account = (accTrigger, accSelector) => {
    const btn = document.querySelector(accTrigger);
    const acc = document.querySelector(accSelector);

    btn.addEventListener('click', () => {
        acc.classList.add('account-active');
    });

    acc.addEventListener('click', (e) => {
        const target = e.target;

        if (target === acc) {
            acc.classList.remove('account-active');
        };
    });
};

export default account;