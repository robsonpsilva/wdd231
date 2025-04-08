let products = [];
    const cart = [];

    async function fetchProducts() {
        try {
            const response = await fetch('./data/products.json');
            products = await response.json();
            displayProducts();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts() {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <input type="number" id="quantity-${product.id}" min="1" value="1">
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(card);
        });
    }

    function addToCart(productId) {
        const quantity = document.getElementById(`quantity-${productId}`).value;
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += parseInt(quantity);
        } else {
            cart.push({ ...product, quantity: parseInt(quantity) });
        }

        updateCartSummary();
    }

    function updateCartSummary() {
        const cartSummary = document.getElementById('cart-summary');
        cartSummary.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>$${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    function finalizePurchase() {
        const cartJson = JSON.stringify(cart);
        console.log('Cart JSON:', cartJson);

        const cartSummary = document.getElementById('cart-summary');
        cartSummary.innerHTML = `
            <h3>Thank you for your purchase!</h3>
            <p>Your order has been placed successfully.</p>
        `;
    }

    fetchProducts();