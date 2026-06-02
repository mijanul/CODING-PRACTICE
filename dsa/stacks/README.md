# Stack

Stack is a linear data structure that follows:

```txt
LIFO
(Last In First Out)
```

The last element inserted is the first one removed.

---

# Core Operations

## Push

Add element to top.

```txt
[1,2]
push(3)

[1,2,3]
```

---

## Pop

Remove top element.

```txt
[1,2,3]

pop()

[1,2]
```

---

## Peek / Top

Read top element.

```txt
top → 3
```

---

## Empty

Check whether stack contains elements.

---

# Complexity

| Operation | Complexity |
| --------- | ---------- |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |

---

# Visualization

```txt
Top
 ↓

| 3 |
| 2 |
| 1 |

Bottom
```

Remove:

```txt
3
↓
2
↓
1
```

---

# When To Recognize Stack Problems

Common hints:

* matching pairs
* nested structures
* reverse processing
* undo operation
* previous state
* nearest greater/smaller
* expression parsing

Question to ask:

```txt
Can I process latest item first?
```

↓

```txt
Use Stack
```

---

# Common Problems

## Easy

* Valid Parentheses

---

## Medium

* Min Stack
* Daily Temperatures
* Evaluate Reverse Polish Notation

---

## Hard

* Largest Rectangle Histogram

---

# Variations

## Monotonic Stack

Maintains increasing/decreasing order.

Used in:

* Daily Temperatures
* Next Greater Element

---

## Stack Using Queue

Implementation exercise.

---

# Common Mistakes

* Pop empty stack
* Forget empty checks
* Wrong push/pop order
* Not using stack when nesting exists

---

# Mental Model

```txt
Push
↓
Push
↓
Push
↓
Pop
↓
Pop
```

---

# Folder Structure

```txt
stack/
├── README.md
└── valid-parentheses/
```

---

# Revision Notes

Stack is less about storage.

Stack is about:

```txt
processing order
```
