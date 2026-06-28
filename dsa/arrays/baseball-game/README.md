# Baseball Game

## Difficulty

Easy

---

# Problem Statement

You are given a list of operations.

Each operation updates a score record.

Initially:

```txt
record = []
```

Operations:

| Operation | Meaning                   |
| --------- | ------------------------- |
| Integer x | Add score x               |
| "+"       | Add previous two scores   |
| "D"       | Add double previous score |
| "C"       | Remove previous score     |

Return:

```txt
sum(record)
```

after all operations.

All operations are guaranteed valid.

---

# Examples

## Example 1

Input:

```txt
ops = ["5","2","C","D","+"]
```

Output:

```txt
30
```

Explanation:

```txt
"5"

record:
[5]

↓

"2"

record:
[5,2]

↓

"C"

remove 2

record:
[5]

↓

"D"

2 × 5

record:
[5,10]

↓

"+"

5 + 10

record:
[5,10,15]
```

Final:

```txt
5 + 10 + 15 = 30
```

---

## Example 2

Input:

```txt
ops = ["5","-2","4","C","D","9","+","+"]
```

Output:

```txt
27
```

Explanation:

```txt
5

[5]

↓

-2

[5,-2]

↓

4

[5,-2,4]

↓

C

[5,-2]

↓

D

[5,-2,-4]

↓

9

[5,-2,-4,9]

↓

+

[5,-2,-4,9,5]

↓

+

[5,-2,-4,9,5,14]
```

Final:

```txt
27
```

---

## Example 3

Input:

```txt
ops = ["1","C"]
```

Output:

```txt
0
```

Explanation:

```txt
1

[1]

↓

C

[]
```

---

# Constraints

```txt
1 <= operations.length <= 1000

operations[i]

=
"C"
"D"
"+"

or integer

[-30000,30000]
```

Operations are always valid.

---

# Concepts

- Stack
- Simulation
- Array

---

# Recognition Pattern

Common hints:

- undo previous
- latest operation
- remove last
- depend on previous state

Pattern:

```txt
Stack
```

Question:

```txt
Can latest data
change history?
```

↓

```txt
Use Stack
```

---

# Brute Force Idea

Maintain full score history.

Apply each operation one by one.

---

# Expected Interview Solution

## Stack Simulation

### Idea

Use stack as score record.

Process each operation:

Integer:

```txt
push(score)
```

---

Operation:

```txt
C
```

↓

```txt
pop()
```

---

Operation:

```txt
D
```

↓

```txt
push(top × 2)
```

---

Operation:

```txt
+
```

↓

```txt
push(
last
+
second last
)
```

At end:

```txt
sum(stack)
```

---

# Why Stack Works

Every operation depends on:

```txt
latest scores
```

Examples:

```txt
C → remove latest

D → duplicate latest

+ → use latest two
```

This matches:

```txt
LIFO
```

---

# Visualization

Input:

```txt
["5","2","C","D","+"]
```

Process:

```txt
[]

↓

[5]

↓

[5,2]

↓

[5]

↓

[5,10]

↓

[5,10,15]
```

---

# Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(n)
```

---

# Common Mistakes

- Using running total incorrectly
- Forgetting removed score
- Reading before checking stack
- Confusing "+" and "D"
- Modifying wrong score

Wrong:

```txt
+
=
double
```

Correct:

```txt
+
=
last two sum
```

---

# Edge Cases

```txt
["1","C"]
→ 0
```

---

```txt
["5","D"]
→ 15
```

---

```txt
["5","2","+"]
→ 14
```

---

# Related Problems

Stack:

- Valid Parentheses
- Min Stack
- Next Greater Element I

Simulation:

- Design Browser History

---

# Revision Notes

Key Insight:

This is NOT:

```txt
math
```

This is:

```txt
latest score
↓
update history
```

Mental Model:

```txt
push
push
pop
push
push
```

Whenever you see:

```txt
undo
history
latest state
```

Think:

```txt
Stack
```
