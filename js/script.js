// Simulated Dummy JSON API Response
const dummyFoodData = [
    {
        "id": 1,
        "name": "Margherita Pizza",
        "desc": "Classic delight with fresh tomatoes and basil.",
        "image": "https://source.unsplash.com/400x300/?margherita-pizza"
    },
    {
        "id": 2,
        "name": "Cheeseburger",
        "desc": "Juicy grilled burger with cheese and veggies.",
        "image": "https://source.unsplash.com/400x300/?cheeseburger"
    },
    {
        "id": 3,
        "name": "Veg Pasta",
        "desc": "Italian pasta with fresh vegetables and herbs.",
        "image": "https://source.unsplash.com/400x300/?vegetarian-pasta"
    },
    {
        "id": 4,
        "name": "Chicken Wings",
        "desc": "Spicy and crispy chicken wings.",
        "image": "https://source.unsplash.com/400x300/?chicken-wings"
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
function toggleForm(formId) {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}

function dummyApiCall(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: "success", message: "Operation Successful", data });
        }, 1000);
    });
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
