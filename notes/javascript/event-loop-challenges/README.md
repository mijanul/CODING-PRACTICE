# JavaScript Event Loop

This folder contains experiments, execution-order challenges, and revision notes for understanding the JavaScript Event Loop.

The goal is not memorization — the goal is to develop the ability to predict execution order without running the code.

---

# What Is Event Loop?

The Event Loop is the mechanism that allows JavaScript to perform non-blocking asynchronous operations even though JavaScript itself executes on a single thread.

JavaScript executes one operation at a time.

The Event Loop coordinates:

- Call Stack
- Web APIs / Runtime APIs
- Microtask Queue
- Macrotask Queue

and decides what should execute next.

---

# Why Do We Need Event Loop?

Without the Event Loop:

```js
setTimeout(() => {
  console.log("done");
}, 1000);

console.log("finish");
```

JavaScript would stop completely and wait 1 second.

Instead:

1. JS executes current code.
2. Timeout waits externally.
3. JS continues execution.
4. Callback executes later.

This allows:

- responsive UI
- async requests
- timers
- Promise handling
- smooth browser experience

---

# Core Components

## 1. Call Stack

Stores currently executing functions.

Example:

```txt
main()
 ↓
print()
 ↓
calculate()
```

Functions execute top → bottom.

---

## 2. Web APIs / Runtime APIs

External environment handles:

- setTimeout
- DOM events
- fetch
- network calls

These are not executed by JavaScript itself.

---

## 3. Microtask Queue

High-priority queue.

Examples:

- Promise.then()
- Promise.catch()
- Promise.finally()
- queueMicrotask()
- await

Example:

```js
Promise.resolve().then(() => {});
```

---

## 4. Macrotask Queue

Lower-priority queue.

Examples:

- setTimeout
- setInterval
- DOM events

Example:

```js
setTimeout(() => {}, 0);
```

---

# Execution Priority

JavaScript processes tasks in this order:

```txt
Call Stack
   ↓
Microtasks
   ↓
Render (Browser)
   ↓
Macrotasks
```

Important:

Microtasks are fully emptied before moving to Macrotasks.

---

# Example

```js
console.log("start");

setTimeout(() => {
  console.log("timeout");
});

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
```

Output:

```txt
start
end
promise
timeout
```

Reason:

```txt
Main Script
↓
Microtask
↓
Macrotask
```

---

# Common Interview Questions

- Why Promise executes before setTimeout?
- Is JavaScript multithreaded?
- Difference between async/await and Promise?
- What happens with setTimeout(fn, 0)?
- What is queue starvation?
- Why does UI freeze?

---

# Learning Order

1. Basic execution
2. setTimeout
3. Promise
4. async/await
5. Nested async scenarios
6. Complex queue tracing

---

# Folder Structure

```txt
event-loop/
├── README.md
├── challenge-1.js
├── challenge-2.js
├── challenge-3.js
└── visuals.md
```

---

# Challenge Rules

For every challenge:

1. Predict output
2. Draw queues mentally
3. Run code
4. Compare result
5. Write learning

---

# Revision Checklist

- [ ] Can explain Event Loop
- [ ] Understand Call Stack
- [ ] Understand Promise execution
- [ ] Understand async/await
- [ ] Understand queue priority
- [ ] Can predict output before execution

---

# Important Reminder

Event Loop does not make JavaScript multi-threaded.

It allows JavaScript to coordinate asynchronous work efficiently.
