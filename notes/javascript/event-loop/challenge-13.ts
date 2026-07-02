console.log("A");

async function foo() {
  console.log("B");

  await null;

  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });

  await null;

  console.log("E");

  queueMicrotask(() => {
    console.log("F");
  });
}

setTimeout(() => {
  console.log("G");
}, 0);

Promise.resolve().then(() => {
  console.log("H");
});

foo();

Promise.resolve().then(() => {
  console.log("I");
});

console.log("J");

export {};
