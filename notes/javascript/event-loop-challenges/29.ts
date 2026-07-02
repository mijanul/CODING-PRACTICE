console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().finally(() => {
    console.log("C");

    return Promise.resolve().then(() => {
      console.log("D");
    });
  });

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
