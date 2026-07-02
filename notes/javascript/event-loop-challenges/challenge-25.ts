console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

Promise.resolve().then(() => {
  console.log("D");
});

foo();

queueMicrotask(() => {
  console.log("E");
});

console.log("F");

export {};
