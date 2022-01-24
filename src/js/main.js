import burger from '../js/modules/burger';
import tab from '../js/modules/tabs';
import password from '../js/modules/password';
import search from '../js/modules/search';
import account from '../js/modules/account';
import initThemeSwitcher from '../js/modules/switcher';

document.addEventListener('DOMContentLoaded', () => {
    burger();
    tab('.side-panel__chats', '.side-panel__chat', '.chat__box');
    password('.password__button', '.password__input', '.password', '.password__error');
    search('.side-panel__input', '.side-panel__chat');
    account('.hamburger__new-acc', '.account');
    initThemeSwitcher();
});