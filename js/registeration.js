// login.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('newEmail').value;
    // Prepare the request payload
    const payload = {
        username: username,
        password: password,
        email:    email
    };

    // Fetch API Call (POST request)
    fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {  // If HTTP response not OK
            throw new Error('Registeration is Failed! Please try after some time!!');
        }
        return response.json();
    })
    .then(data => {
        // Successful login
        document.getElementById('signup-message').innerText = `Registeration successful!`;
    })
    .catch(error => {
        // Error handling
        document.getElementById('signup-message').innerText = error.message;
    });
});

function toggleForm(formId) {
    document.getElementById('loginFormDiv').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}