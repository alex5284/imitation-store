const isLoggedIn = localStorage.getItem('isLoggedIn');
const userLogin = localStorage.getItem('userLogin');

const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');

if (isLoggedIn) {
    loginLink.innerHTML = '<a href="profile.html">Профіль</a>';
    logoutLink.style.display = 'inline-block';
} else {
    loginLink.innerHTML = '<a href="login.html">Авторизація</a>';
    logoutLink.style.display = 'none';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}
if (isLoggedIn) {
    loginLink.innerHTML = '<a href="profile.html">Профіль</a>';
    logoutLink.style.display = 'inline-block';
    cartLink.style.display = 'inline-block';
} else {
    loginLink.innerHTML = '<a href="login.html">Авторизація</a>';
    logoutLink.style.display = 'none';
    cartLink.style.display = 'none';
}

function openProductPage(productId) {
    if (isLoggedIn) {
        if(productId == "Verse 21121"){
            window.location.href = 'Products/Product1.html'
        }
        else if(productId == "RAY-BAN RB 3547 001"){
            window.location.href = 'Products/Products2.html'
        }
        else if(productId == "Ray-Ban RB 3682"){
            window.location.href = 'Products/Product3.html'
        }
        else if(productId == "RB 8125M 9165"){
            window.location.href = 'Products/Product4.html'
        }
        else if(productId == "RAY-BAN 9565S 212/80 DARK BLUE"){
            window.location.href = 'Products/Product5.html'
        }
        else if(productId == "Gucci GG1221S"){
            window.location.href = 'Products/Product6.html'
        }
    } else {
        alert('Для перегляду деталей товару авторизуйтеся.');
        window.location.href = 'login.html';
    }
}

function highlightProduct(element) {
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
}

function unhighlightProduct(element) {
    element.style.boxShadow = 'none';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}