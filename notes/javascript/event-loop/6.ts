console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  setTimeout(() => {
    console.log("D");
  }, 0);

  console.log("E");
}, 0);

Promise.resolve().then(() => {
  console.log("F");

  setTimeout(() => {
    console.log("G");
  }, 0);

  Promise.resolve().then(() => {
    console.log("H");
  });
});

console.log("I");
