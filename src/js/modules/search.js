const search = (inputSelector, chatsSelector) => {
    const input = document.querySelector(inputSelector);
    const chats = document.querySelectorAll(chatsSelector);

    input.addEventListener('input', function () {
        let val = this.value.trim();

        if (val != '') {
            chats.forEach(elem => {
                if (elem.innerText.search(val) == -1) {
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                };
            });
        } else {
            chats.forEach(elem => {
                elem.classList.remove('hide');
            });
        }
    });
};

export default search;