console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");

    return Promise.resolve("X");
  });

  console.log("D");
}

foo();

Promise.resolve().then(() => {
  console.log("E");
});

queueMicrotask(() => {
  console.log("F");
});

console.log("G");

export default {};
