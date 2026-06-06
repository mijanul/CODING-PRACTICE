function debounce(fn, delay) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function execute() {
    if (lastArgs) {
      fn.apply(lastThis, lastArgs);

      lastArgs = null;
      lastThis = null;
    }
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      execute();
      timer = null;
    }, delay);
  }

  debounced.flush = () => {
    clearTimeout(timer);

    execute();

    timer = null;
  };

  debounced.cancel = () => {
    clearTimeout(timer);

    timer = null;
    lastArgs = null;
    lastThis = null;
  };

  return debounced;
}

// Example

const search = debounce((value) => {
  console.log("API:", value);
}, 2000);

search("react");

setTimeout(() => {
  search.flush();
}, 500);

// Executes immediately after flush
