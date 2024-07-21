const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tab.forEach(function(item) {
    item.addEventListener('click', function(){

        tab.forEach(function(item) {
            item.classList.remove('product-category__item--active');
        });

        this.classList.add('product-category__item--active');
        
        
        tabContent.forEach(function(item) {
            item.classList.add('product-category__content--hidden'); 
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('product-category__content--hidden');

    });
});