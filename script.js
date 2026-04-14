// Actual working product data (can be replaced with an API fetch later)
const products = [
    { id: 1, name: "Premium T-Shirt", price: 1499 },
    { id: 2, name: "Classic Denim Jacket", price: 3499 },
    { id: 3, name: "Leather Sneakers", price: 4999 },
    { id: 4, name: "Minimalist Watch", price: 2999 }
];

// Cart State Array
let cart = [];

// Function to render products dynamically
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image"></div>
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Function to handle cart logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        console.log(`Added: ${product.name}. Total items: ${cart.length}`);
    }
}

// Update Cart Counter in Header
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Initialize page
window.onload = renderProducts;
