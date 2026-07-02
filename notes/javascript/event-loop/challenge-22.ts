console.log(1);

async function foo() {
  console.log(2);

  await Promise.resolve().then(() => {
    console.log(3);

    return Promise.resolve().then(() => {
      console.log(4);

      queueMicrotask(() => {
        console.log(5);
      });
    });
  });

  console.log(6);

  Promise.resolve().then(() => {
    console.log(7);
  });
}

foo();

Promise.resolve().then(() => {
  console.log(8);
});

queueMicrotask(() => {
  console.log(9);
});

setTimeout(() => {
  console.log(10);
}, 0);

console.log(11);

export {};
