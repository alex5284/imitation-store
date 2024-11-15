function showPurchaseHistory() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('userLogin');

    if (isLoggedIn && username) {
        const userHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

        const profileTitleElement = document.getElementById('profileTitle');
        profileTitleElement.textContent = `Профіль користувача: ${username}`;

        const purchaseHistoryElement = document.getElementById('purchaseHistory');

        if (userHistory.length > 0) {
            for (const order of userHistory) {
                if (order.items[0]["username"] === username) {
                    const orderTable = document.createElement('table');
                    orderTable.className = 'orderTable';
                    orderTable.innerHTML = `
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Товар</th>
                                <th>Кількість</th>
                                <th>Ціна</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${order.items.map(item => `
                                <tr>
                                    <td>${order.date}</td>
                                    <td>${item.productId}</td>
                                    <td>${item.quantity}</td>
                                    <td>$${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    `;
                    purchaseHistoryElement.appendChild(orderTable);
                }
            }
        } else {
            purchaseHistoryElement.innerHTML = '<p>Історія покупок порожня.</p>';
        }
    } else {
        alert('Для перегляду історії покупок авторизуйтеся.');
        window.location.href = 'login.html';
    }
}
showPurchaseHistory();