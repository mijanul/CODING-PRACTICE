console.log("A");

Promise.resolve().then(async () => {
  console.log("B");

  await null;

  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });
});

queueMicrotask(() => {
  console.log("E");
});

Promise.resolve().then(() => {
  console.log("F");
});

console.log("G");

export {};
