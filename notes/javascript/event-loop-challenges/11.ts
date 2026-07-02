console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve();

  console.log("C");

  await Promise.resolve();

  console.log("D");
}

foo();

Promise.resolve().then(() => {
  console.log("E");

  Promise.resolve().then(() => {
    console.log("F");
  });
});

queueMicrotask(() => {
  console.log("G");
});

console.log("H");

export {};
