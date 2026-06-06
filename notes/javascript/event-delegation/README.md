# Event Delegation

## Definition

Event Delegation means:

> Attach one event listener to parent instead of many children.

Uses Event Bubbling.

Bad:

```js
buttons.forEach((btn) => {
  btn.addEventListener("click", save);
});
```

Good:

```js
list.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    save();
  }
});
```

---

HTML

```html
<ul id="list">
  <li><button>A</button></li>
  <li><button>B</button></li>
</ul>
```

Click:

```txt
button
↑
li
↑
ul ← listener
```

---

## Why use delegation?

### Memory Efficient

```txt
1000 buttons
↓

1 listener
```

### Dynamic Elements Work

```js
list.innerHTML += "<button>New</button>";
```

No extra listener needed.

---

## target vs currentTarget

```txt
target
→ actual clicked

currentTarget
→ listener owner
```

---

## Real React Example

```jsx
<div
  onClick={(e) => {
    if (e.target.id === "delete") {
      remove();
    }
  }}
></div>
```

---

## Interview

Q:

Why delegation?

Answer:

```txt
Performance
Memory
Dynamic UI
```
