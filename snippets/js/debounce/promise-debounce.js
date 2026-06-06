function debouncePromise(fn, delay) {
  let timer;

  return (...args) =>
    new Promise((resolve, reject) => {
      clearTimeout(timer);

      timer = setTimeout(async () => {
        try {
          const result = await fn(...args);

          resolve(result);
        } catch (err) {
          reject(err);
        }
      }, delay);
    });
}

// Example

async function fetchUsers(query) {
  console.log("API Call:", query);
  return [`${query}-user-1`, `${query}-user-2`];
}
const debouncedFetch = debouncePromise(fetchUsers, 1000);

debouncedFetch("rea");
debouncedFetch("react");

debouncedFetch("reactjs").then(console.log).catch(console.error);

// Only last call executes
