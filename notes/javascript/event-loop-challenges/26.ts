console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");
  });

  console.log("D");
}

Promise.resolve().then(() => {
  console.log("E");
});

foo();

queueMicrotask(() => {
  console.log("F");
});

console.log("G");

export {};
