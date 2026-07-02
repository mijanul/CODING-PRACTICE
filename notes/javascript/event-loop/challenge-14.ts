console.log(1);

async function foo() {
  console.log(2);
  await null;
  console.log(3);
  await null;
  console.log(4);
}

async function bar() {
  console.log(5);
  await null;
  console.log(6);
}

foo();

Promise.resolve().then(() => {
  console.log(7);
});

bar();

queueMicrotask(() => {
  console.log(8);
});

console.log(9);

export {};
