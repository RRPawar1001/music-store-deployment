// This file is currently empty, but included for future JavaScript functionality.
// Example: Adding an event listener for the "Add to Cart" button on product.html
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            console.log('Product added to cart!');
            // In a real application, you would update the UI or send data to a server here.
        });
    }
});
