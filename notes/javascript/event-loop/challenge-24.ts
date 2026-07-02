async function foo() {
  console.log("A");

  await null;

  console.log("B");
}

foo();

queueMicrotask(() => {
  console.log("C");
});

Promise.resolve().then(() => {
  console.log("D");
});

export {};
