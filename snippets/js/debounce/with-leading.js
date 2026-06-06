function debounce(fn, delay, leading = false) {
  let timer;

  return function (...args) {
    const shouldCallNow = leading && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;

      if (!leading) {
        fn.apply(this, args);
      }
    }, delay);

    if (shouldCallNow) {
      fn.apply(this, args);
    }
  };
}

// Example

const click = debounce(() => console.log("Clicked"), 1000, true);

click();
