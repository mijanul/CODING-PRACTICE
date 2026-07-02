console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");
  });

  console.log("D");

  Promise.resolve().then(() => {
    console.log("E");
  });

  await null;

  console.log("F");
}

Promise.resolve().then(() => {
  console.log("G");

  Promise.resolve().then(() => {
    console.log("H");
  });
});

foo();

queueMicrotask(() => {
  console.log("I");
});

setTimeout(() => {
  console.log("J");

  Promise.resolve().then(() => {
    console.log("K");
  });
}, 0);

console.log("L");

export {};
