console.log("A");

async function foo() {
  console.log("B");

  await null;

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
