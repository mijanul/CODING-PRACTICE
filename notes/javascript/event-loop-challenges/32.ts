console.log("start");

Promise.resolve()
  .then(() => {
    console.log("A");
    queueMicrotask(() => console.log("B"));
  })
  .then(() => console.log("C"));

queueMicrotask(() => {
  console.log("D");
  Promise.resolve().then(() => console.log("E"));
});

console.log("end");
