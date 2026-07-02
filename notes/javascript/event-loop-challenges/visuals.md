# visuals.md

# Event Loop Visual Notes

## Execution Flow

```txt
Call Stack
   ↓

Microtask Queue
(Promise / await)

   ↓

Macrotask Queue
(setTimeout)

   ↓

Render
```

---

## Queue Priority

```txt
Current Execution
      ↓
Microtasks
      ↓
Render
      ↓
Macrotasks
```

---

## Example

```js
console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);
```

Output:

```txt
1
4
3
2
```

---

## Notes

Microtasks always execute before the next macrotask.
