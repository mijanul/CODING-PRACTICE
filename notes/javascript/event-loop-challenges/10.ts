console.log(1);

setTimeout(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);

    queueMicrotask(() => {
      console.log(4);
    });

    Promise.resolve().then(() => {
      console.log(5);
    });
  });

  console.log(6);
}, 0);

Promise.resolve().then(() => {
  console.log(7);

  setTimeout(() => {
    console.log(8);
  }, 0);

  queueMicrotask(() => {
    console.log(9);
  });
});

console.log(10);

export {};
