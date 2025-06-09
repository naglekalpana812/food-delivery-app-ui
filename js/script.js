// Dummy signup simulation
function signUpUser(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User ${username} signed up successfully!`);
    }, 1000);
  });
}

// Dummy food list (you can replace it with fetch from real API)
const dummyFoods = [
  { id: 1, name: "Pizza", image: "https://source.unsplash.com/200x150/?pizza" },
  { id: 2, name: "Burger", image: "https://source.unsplash.com/200x150/?burger" },
  { id: 3, name: "Pasta", image: "https://source.unsplash.com/200x150/?pasta" },
  { id: 4, name: "Sushi", image: "https://source.unsplash.com/200x150/?sushi" },
];

// Render food cards
function loadFoodItems() {
  const container = document.getElementById("foodContainer");
  dummyFoods.forEach(food => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${food.image}" alt="${food.name}" />
      <h3>${food.name}</h3>
      <button onclick="addToCart(${food.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Dummy Add to Cart
function addToCart(id) {
  const food = dummyFoods.find(item => item.id === id);
  alert(`Added ${food.name} to cart!`);
}


document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("newUsername").value;
  const pass = document.getElementById("newPassword").value;
  signUpUser(user, pass).then(msg => {
    document.getElementById("signup-message").innerText = msg;
  });
});

// On load
window.onload = () => {
  loadFoodItems();
};
