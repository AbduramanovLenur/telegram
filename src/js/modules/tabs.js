const tab = (parentBtnSelector, btnSelector, contentSelector) => {
    const parent = document.querySelector(parentBtnSelector);
    const btns = document.querySelectorAll(btnSelector);
    const contents = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        contents.forEach(elem => {
            elem.classList.remove('show');
            elem.classList.add('hide');
        });

        btns.forEach(elem => elem.classList.remove('btn-active'));
    };

    function showTabContent(i = 0) {
        contents[i].classList.remove('hide');
        contents[i].classList.add('show');

        btns[i].classList.add('btn-active');
    };

    hideTabContent();
    showTabContent();

    parent.addEventListener('click', (e) => {
        const clickedBtn = e.target.closest('.side-panel__chat');

        if (clickedBtn) {
            btns.forEach((elem, i) => {
                if (elem === clickedBtn) {
                    hideTabContent();
                    showTabContent(i);
                };
            });
        };
    });
};

export default tab;