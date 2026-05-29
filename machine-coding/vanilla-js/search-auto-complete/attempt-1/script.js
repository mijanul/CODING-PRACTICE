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

function debounce(func, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function renderSuggestions(value) {
  suggestionBox.innerHTML = "";
  currentFocus = -1;

  if (!value.trim()) return;

  const filtered = fruits.filter((fruit) =>
    fruit.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  );

  filtered.forEach((fruit) => {
    const li = document.createElement("li");

    li.textContent = fruit;

    li.addEventListener("click", () => {
      searchInput.value = fruit;
      suggestionBox.innerHTML = "";
    });

    suggestionBox.appendChild(li);
  });
}

const debounceSearch = debounce((e) => renderSuggestions(e.target.value));

searchInput.addEventListener("input", debounceSearch);
