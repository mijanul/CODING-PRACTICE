/*
Challenge: Execution Order & Output Tracing

*/

console.log("Main Script Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout 1");
  });
}, 0);

new Promise((resolve) => {
  console.log("Promise Executor");

  resolve();
}).then(() => {
  console.log("Promise Microtask 1");

  setTimeout(() => {
    console.log("Timeout inside Promise 1");
  }, 0);
});

async function asyncBuild() {
  await Promise.resolve();

  console.log("Async Await Flow");
}

asyncBuild();

console.log("Main Script End");
