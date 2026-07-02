console.log("A");

async function foo() {
  console.log("B");

  await bar();

  console.log("C");
}

async function bar() {
  console.log("D");

  await null;

  console.log("E");
}

foo();

Promise.resolve().then(() => {
  console.log("F");
});

queueMicrotask(() => {
  console.log("G");
});

console.log("H");

export {};
