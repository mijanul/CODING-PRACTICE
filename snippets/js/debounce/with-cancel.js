function debounce(fn, delay) {
  let timer;

  function debounced(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }

  debounced.cancel = () => {
    clearTimeout(timer);
  };

  return debounced;
}

// Example

const save = debounce(() => {
  console.log("Saved");
}, 2000);

save();

setTimeout(() => {
  save.cancel();
}, 1000);
