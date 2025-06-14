// Simulated Dummy JSON API Response
const dummyFoodData = [
    {
        "id": 1,
        "name": "Margherita Pizza",
        "desc": "Classic delight with fresh tomatoes and basil.",
        "image": 'assets/mp.jpg'
    },
    {
        "id": 2,
        "name": "Cheeseburger",
        "desc": "Juicy grilled burger with cheese and veggies.",
        "image": 'assets/McAloo.jpg'
    },
    {
        "id": 3,
        "name": "Veg Pasta",
        "desc": "Italian pasta with fresh vegetables and herbs.",
        "image": 'assets/vegpasta.jpg'
    },
    {
        "id": 4,
        "name": "Veg Biryani",
        "desc": "Authentic Indian Veg Biryani",
        "image": 'assets/veg-biryani.jpg'
    }
];

// Function to simulate fetching food data (returns Promise)
function fetchFoodItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dummyFoodData);
        }, 1000); // Simulate 1 second API delay
    });
}

// Function to render food items dynamically
function renderFoodItems(items) {
    const container = document.getElementById('food-cards-container');
    container.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        `;

        container.appendChild(card);
    });
}

// Fetch and render food items on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchFoodItems()
        .then(data => renderFoodItems(data))
        .catch(err => console.error('Error fetching food data:', err));
});


function dummyApiCall(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: "success", message: "Operation Successful", data });
        }, 1000);
    });
}

// Check if user session exists
function checkLogin() {
    
    const user = sessionStorage.getItem('user');
    console.log("user "+user)
    if(user == null) {
        window.location.href = 'dialog.html'; // redirect if not logged in
    }else {
        window.location.href = 'foodrender.html';
    }
}

function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    dummyApiCall({ username, password })
        .then(response => alert(`Login ${response.status}: ${response.message}`))
        .catch(error => alert(`Error: ${error}`));
}

function handleRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    dummyApiCall({ username, email, password })
        .then(response => alert(`Registration ${response.status}: ${response.message}`))
        .catch(error => alert(`Error: ${error}`));
}

// Logout and clear session
function logoutUser() {
    sessionStorage.removeItem('user');
    window.location.href = 'home.html';
}

$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});