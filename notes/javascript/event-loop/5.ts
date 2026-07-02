console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  queueMicrotask(() => {
    console.log("D");
  });

  console.log("E");
});

queueMicrotask(() => {
  console.log("F");
});

console.log("G");
