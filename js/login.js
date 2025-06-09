// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Prepare the request payload
    const payload = {
        username: username,
        password: password
    };

    // Fetch API Call (POST request)
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {  // If HTTP response not OK
            throw new Error('Invalid username or password');
        }
        return response.json();
    })
    .then(data => {
        // Successful login
        document.getElementById('login-message').innerText = `Login successful! Token: ${data.token}`;
        console.log('User Token:', data.token);
    })
    .catch(error => {
        // Error handling
        document.getElementById('login-message').innerText = error.message;
    });
});
