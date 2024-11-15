function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = document.querySelector(`#${inputId} + .password-container .password-toggle`);
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

    if (!registeredUsers[username]) {
        document.getElementById('registerErrorMessage').innerText = '';
        registeredUsers[username] = password;
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userLogin', username);

        alert('Ви успішно зареєструвалися!');
        window.location.href = 'main.html';
    } else {
        document.getElementById('registerErrorMessage').innerText = 'Користувач з таким іменем вже існує';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

    if (registeredUsers[username] && registeredUsers[username] === password) {
        document.getElementById('loginErrorMessage').innerText = '';
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userLogin', username)
        alert('Ви успішно увійшли!');
        window.location.href = 'main.html';
    } else {
        document.getElementById('loginErrorMessage').innerText = 'Невірний логін або пароль';
    }
});