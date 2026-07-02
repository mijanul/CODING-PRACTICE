console.log(1);

async function alpha() {
  console.log(2);

  await beta();

  console.log(3);

  Promise.resolve().then(() => {
    console.log(4);
  });
}

async function beta() {
  console.log(5);

  await null;

  console.log(6);

  await gamma();

  console.log(7);
}

async function gamma() {
  console.log(8);

  await null;

  console.log(9);
}

alpha();

Promise.resolve().then(() => {
  console.log(10);
});

queueMicrotask(() => {
  console.log(11);
});

console.log(12);

export {};
