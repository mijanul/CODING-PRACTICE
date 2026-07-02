console.log("A");

async function foo() {
  console.log("B");

  await null;

  console.log("C");

  queueMicrotask(() => {
    console.log("D");
  });

  Promise.resolve().then(() => {
    console.log("E");
  });

  console.log("F");
}

Promise.resolve().then(() => {
  console.log("G");
});

foo();

Promise.resolve().then(() => {
  console.log("H");
});

console.log("I");

export {};
