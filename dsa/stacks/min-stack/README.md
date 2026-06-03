# Min Stack

## Difficulty

Medium

---

# Problem Statement

Design a stack that supports:

```txt
push(val)
pop()
top()
getMin()
```

All operations must work in:

```txt
O(1)
```

time.

Implement:

| Operation | Meaning              |
| --------- | -------------------- |
| push(val) | Insert value         |
| pop()     | Remove latest value  |
| top()     | Return latest value  |
| getMin()  | Return minimum value |

---

# Examples

## Example 1

Operations:

```txt
push(-2)
push(0)
push(-3)

getMin()

pop()

top()

getMin()
```

Output:

```txt
-3
0
-2
```

Explanation:

```txt
push(-2)

stack:
[-2]

min:
[-2]

↓

push(0)

stack:
[-2,0]

min:
[-2,-2]

↓

push(-3)

stack:
[-2,0,-3]

min:
[-2,-2,-3]

↓

getMin()

-3

↓

pop()

stack:
[-2,0]

min:
[-2,-2]

↓

top()

0

↓

getMin()

-2
```

---

# Constraints

```txt
-2³¹ <= val <= 2³¹−1

pop
top
getMin

always valid
```

At most:

```txt
30000
```

operations.

---

# Concepts

- Stack
- Auxiliary Stack
- Design Problem

---

# Recognition Pattern

Common hints:

- retrieve min instantly
- preserve history
- maintain previous state
- O(1) query

Pattern:

```txt
Stack
+
Extra State
```

Question:

```txt
Can previous
minimum disappear?
```

↓

```txt
Track history
```

---

# Brute Force Approach

Store values.

Whenever:

```txt
getMin()
```

Scan entire stack.

Complexity:

```txt
push → O(1)

pop → O(1)

getMin → O(n)
```

Too slow.

---

# Expected Interview Solution

## Two Stack Approach

Maintain:

```txt
mainStack
```

Stores values.

And:

```txt
minStack
```

Stores current minimum.

Rules:

---

Push:

```txt
push(5)

main:
[5]

min:
[5]
```

---

Push smaller:

```txt
push(2)

main:
[5,2]

min:
[5,2]
```

---

Push larger:

```txt
push(8)

main:
[5,2,8]

min:
[5,2,2]
```

Minimum stays.

---

Pop:

Remove from both.

---

getMin:

Return:

```txt
minStack[top]
```

---

# Why Two Stacks Work

Each position stores:

```txt
minimum
up to that point
```

Example:

```txt
main

[5,2,8,1]
```

Minimum history:

```txt
[5,2,2,1]
```

Pop:

```txt
remove both
```

Previous minimum automatically returns.

---

# Visualization

Input:

```txt
push(5)
push(3)
push(8)
push(1)
```

State:

```txt
main

[5,3,8,1]

min

[5,3,3,1]
```

Pop:

```txt
main

[5,3,8]

min

[5,3,3]
```

getMin:

```txt
3
```

---

# Complexity

| Operation | Complexity |
| --------- | ---------- |
| push      | O(1)       |
| pop       | O(1)       |
| top       | O(1)       |
| getMin    | O(1)       |

Space:

```txt
O(n)
```

---

# Common Mistakes

- Recalculating minimum
- Updating only one stack
- Losing previous minimum
- Using sort

Wrong:

```txt
getMin()

loop
```

Correct:

```txt
store minimum
```

---

# Edge Cases

Push duplicates:

```txt
2
2
1
```

Minimum:

```txt
1
```

Pop:

```txt
still 2
```

---

Negative values:

```txt
[-3,-1,-5]
```

Minimum:

```txt
-5
```

---

Single value:

```txt
push(10)

getMin()

10
```

---

# Related Problems

Stack:

- Valid Parentheses
- Baseball Game
- Next Greater Element I

Design:

- LRU Cache
- Max Stack

---

# Revision Notes

Key Insight:

This is NOT:

```txt
find minimum
```

This is:

```txt
remember minimum
```

Mental Model:

```txt
push
↓

save min
↓

pop
↓

restore min
```

Whenever you see:

```txt
O(1)
history
state
```

Think:

```txt
extra stack
```
