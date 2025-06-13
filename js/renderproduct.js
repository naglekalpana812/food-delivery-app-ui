const cart = [];
let products = ""
// Function to render products
function renderProducts(productList) {
    products = productList;
    const container = document.getElementById('product-list');
    container.innerHTML = ""; // clear previous items
    console.log(productList);
    productList.forEach(product => {
        console.log(productList);
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h2>${product.name}</h2>
            <p>${product.tags}</p>
            <p class="price">Rs.${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
    `;

    container.appendChild(card);
     document.querySelectorAll('.add-to-cart-btn')
     .forEach(button => {button.addEventListener('click', addToCart);})
    });
}

fetch('http://localhost:8086/api/v1/productcatalogue')
  .then(res => res.json())
  .then(data => renderProducts(data.recipes))
  .catch(err => console.error('Error fetching products:', err));

function simulatePayment() {
    alert("Payment Successful! Thank you for your purchase.");
    cart.length = 0; // empty cart
    updateCartCount();
    closeCheckout();

}

function closeCheckout() {
    document.getElementById('checkout-modal')
    .classList.add('hidden');
}

function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

document.getElementById('checkout-btn').addEventListener('click', openCheckout);
document.getElementById('close-modal').addEventListener('click', closeCheckout);
document.getElementById('pay-btn').addEventListener('click', simulatePayment);

function openCheckout() {
    const modal = document.getElementById('checkout-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rs.${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPriceEl.textContent = `Total: Rs.${total.toFixed(2)}`;
    modal.classList.remove('hidden');
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = 
    `Cart: ${cart.length}`;
}