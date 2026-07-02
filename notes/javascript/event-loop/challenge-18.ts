console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve();

  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });

  await bar();

  console.log("E");
}

async function bar() {
  console.log("F");

  await null;

  console.log("G");
}

foo();

Promise.resolve().then(() => {
  console.log("H");
});

queueMicrotask(() => {
  console.log("I");
});

console.log("J");

export {};
