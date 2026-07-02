console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");

    return "Hello";
  });

  console.log("D");
}

foo();

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");

export {};
