function showCartContents() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cartTableBody');
    let totalSum = 0;

    if (cart.length > 0) {
        cartTableBody.innerHTML = cart.map(item => {
            const itemTotal = item.quantity * item.price;
            totalSum += itemTotal;

            return `
                <tr class="cartItem">
                    <td>${item.productId}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                    <td><button onclick="removeItem('${item.productId}')">&times;</button></td>
                </tr>
            `;
        }).join('');
    } else {
        cartTableBody.innerHTML = '<tr><td colspan="5">Корзина порожня.</td></tr>';
    }
    const totalSumElement = document.getElementById('totalSum');
    totalSumElement.textContent = `$${totalSum.toFixed(2)}`;
}

function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCartContents();
}

function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
        const orderDetails = {
            date: new Date().toLocaleString(),
            items: cart
        };
        purchaseHistory.push(orderDetails);
        localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
        alert('Замовлення оформлено! Дякуємо за покупку.');
        localStorage.removeItem('cart');
        showCartContents();
        showPurchaseHistory();
    } else {
        alert('Корзина порожня. Додайте товари перед оформленням замовлення.');
    }
}
showCartContents();