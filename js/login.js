// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Prepare the request payload
    const payload = {
        username: username,
        password: password
    };

    // Fetch API Call (POST request)
    fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
                   'Access-Control-Allow-Origin': 'http://localhost:8080/api/v1/auth/login'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) { 
            throw new Error('Invalid username or password');
        }
        return response.json();
    })
    .then(data => {
        // Successful login
        sessionStorage.setItem('user', username);
        document.getElementById('login-message').innerText = `Login successful!`;
        window.location.href = 'foodrender.html';
    })
    .catch(error => {
        // Error handling
        document.getElementById('login-message').innerText = error.message;
    });
});

function toggleForm(formId) {
    document.getElementById('loginFormDiv').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}
