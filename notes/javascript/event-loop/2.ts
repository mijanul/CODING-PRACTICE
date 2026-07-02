console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");

    return Promise.resolve().then(() => {
      console.log("D");

      return "DONE";
    });
  });

  console.log("E");
}

foo();

Promise.resolve().then(() => {
  console.log("F");

  return Promise.resolve().then(() => {
    console.log("G");
  });
});

queueMicrotask(() => {
  console.log("H");
});

console.log("I");

export {};
