import page from './page.js';

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.id == 'home-tab') {
            page.home();
        } else if (tab.id == 'menu-tab') {
            page.menu();
        } else {
            page.contact();
        }
    })
});

page.home();