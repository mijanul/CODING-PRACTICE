console.log(1);

Promise.resolve().then(async () => {
  console.log(2);

  await null;

  console.log(3);
});

Promise.resolve().then(() => {
  console.log(4);

  Promise.resolve().then(() => {
    console.log(5);
  });
});

queueMicrotask(async () => {
  console.log(6);

  await null;

  console.log(7);
});

console.log(8);

export {};
