
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.backgroundColor = 'lightgray';
    });

    product.addEventListener('mouseout', () => {
        product.style.backgroundColor = 'white';
    });
});
