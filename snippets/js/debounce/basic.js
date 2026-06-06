function debounce(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function search(text) {
  console.log("API:", text);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");

export { debounce };
