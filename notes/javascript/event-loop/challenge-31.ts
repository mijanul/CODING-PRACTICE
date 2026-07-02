async function a() {
  console.log("a start");
  await b();
  console.log("a end");
}

async function b() {
  console.log("b start");
  await c();
  console.log("b end");
}

async function c() {
  console.log("c start");
  return Promise.resolve().then(() => console.log("c inner then"));
}

console.log("script start");
a();
console.log("script end");
