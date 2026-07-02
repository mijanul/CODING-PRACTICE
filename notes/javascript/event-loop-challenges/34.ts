const p = new Promise((resolve) => {
  console.log("executor");
  resolve(1);
});

p.then((v) => {
  console.log("then1", v);
  return new Promise((res) => {
    setTimeout(() => {
      console.log("timeout");
      res(2);
    }, 0);
  });
}).then((v) => {
  console.log("then2", v);
});

queueMicrotask(() => console.log("micro"));

console.log("sync end");
