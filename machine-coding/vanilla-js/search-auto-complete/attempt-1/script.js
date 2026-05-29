const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Papaya",
  "Grapes",
  "Guava",
  "Watermelon",
  "Kiwi",
  "Strawberry",
  "Blueberry",
  "Blackberry",
];

const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestionBox");

let currentFocus = -1;

// ----------------------
// Debounce
// ----------------------

function debounce(func, delay = 500) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// ----------------------
// Render List
// ----------------------

function renderList(items) {
  suggestionBox.innerHTML = "";

  items.forEach((fruit) => {
    const li = document.createElement("li");

    li.textContent = fruit;

    suggestionBox.appendChild(li);
  });
}

// Initial render

renderList(fruits);

// ----------------------
// Search Logic
// ----------------------

function renderSuggestions(value) {
  currentFocus = -1;

  const query = value.trim().toLowerCase();

  if (!query) {
    renderList(fruits);
    return;
  }

  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query),
  );

  renderList(filtered);
}

// ----------------------
// Debounced Input
// ----------------------

const debouncedSearch = debounce((e) => {
  renderSuggestions(e.target.value);
}, 300);

searchInput.addEventListener("input", debouncedSearch);

// ----------------------
// Event Delegation
// ----------------------

suggestionBox.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  searchInput.value = e.target.textContent;

  // Close dropdown after selection
  suggestionBox.innerHTML = "";
});
