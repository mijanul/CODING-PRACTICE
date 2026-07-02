console.log("A");

async function foo() {
  console.log("B");

  const result = await Promise.all([
    Promise.resolve("X").finally(() => {
      console.log("C");
      return "IGNORED";
    }),

    Promise.resolve("Y").then(() => {
      console.log("D");
      return Promise.resolve("Z");
    }),
  ]);

  console.log(result.join("-"));
}

foo();

Promise.resolve().then(() => {
  console.log("E");
});

queueMicrotask(() => {
  console.log("F");
});

console.log("G");

export {};
