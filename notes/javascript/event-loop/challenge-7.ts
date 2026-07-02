console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve();

  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });

  console.log("E");
}

foo();

Promise.resolve().then(() => {
  console.log("F");
});

setTimeout(() => {
  console.log("G");
}, 0);

console.log("H");
