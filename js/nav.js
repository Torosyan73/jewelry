const headerBurger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__list-item');
const body = document.body;

headerBurger.addEventListener('click', function() {  
    nav.classList.toggle('nav--show');
    body.classList.toggle('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--show');
            body.classList.remove('modal-open');
        });
    });
});