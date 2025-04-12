export function finalizePurchase(cart) {
    const cartJson = JSON.stringify(cart);
  
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.innerHTML = `
      <h3>Thank you for your purchase!</h3>
      <p>Your order has been placed successfully.</p>
    `;
  
    console.log('Cart details:', cartJson);
  }