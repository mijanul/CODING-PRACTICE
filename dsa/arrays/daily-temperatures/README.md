# Daily Temperatures

## Difficulty

Medium

---

# Problem Statement

You are given:

```txt
temperatures[]
```

For each day, return:

```txt
how many days
until a warmer temperature
```

If no warmer day exists:

```txt
0
```

Return an array where:

```txt
answer[i]
=
days to wait
```

---

# Examples

## Example 1

Input:

```txt
temperatures =
[73,74,75,71,69,72,76,73]
```

Output:

```txt
[1,1,4,2,1,1,0,0]
```

Explanation:

```txt
73 → wait 1 → 74

74 → wait 1 → 75

75 → wait 4 → 76

71 → wait 2 → 72

69 → wait 1 → 72

72 → wait 1 → 76

76 → none → 0

73 → none → 0
```

---

## Example 2

Input:

```txt
[30,40,50,60]
```

Output:

```txt
[1,1,1,0]
```

---

## Example 3

Input:

```txt
[30,60,90]
```

Output:

```txt
[1,1,0]
```

---

# Constraints

```txt
1 <= temperatures.length <= 100000

30 <= temperatures[i] <= 100
```

---

# Concepts

- Stack
- Monotonic Stack
- Array
- Index Tracking

---

# Recognition Pattern

Common hints:

- next greater
- first larger to right
- nearest greater
- future lookup
- distance calculation

Pattern:

```txt
Monotonic Stack
```

Question:

```txt
Can unresolved values
be solved later?
```

↓

```txt
Use Stack
```

---

# Brute Force Approach

For every day:

1. Look right
2. Find warmer day
3. Calculate distance

Complexity:

Time:

```txt
O(n²)
```

Space:

```txt
O(1)
```

Too slow.

---

# Expected Interview Solution

## Monotonic Decreasing Stack

Store:

```txt
indexes
```

NOT temperatures.

Reason:

Need distance.

Stack keeps:

```txt
decreasing temperatures
```

Current temperature:

```txt
current > stackTop
```

↓

Resolve previous day.

Distance:

```txt
currentIndex
-
previousIndex
```

---

# Why Store Index Instead Of Temperature?

Wrong:

```txt
stack

[73,74]
```

You lose:

```txt
distance
```

Correct:

```txt
stack

[0,1]
```

Then:

```txt
answer =
current - previous
```

---

# Visualization

Input:

```txt
[73,74,75,71,69,72,76,73]
```

Process:

```txt
Index

0

Stack:
[0]

↓

74

74 > 73

answer[0]=1

Stack:
[1]

↓

75

75 > 74

answer[1]=1

Stack:
[2]

↓

71

Stack:
[2,3]

↓

69

Stack:
[2,3,4]

↓

72

72 > 69

answer[4]=1

72 > 71

answer[3]=2
```

Continue.

Final:

```txt
[1,1,4,2,1,1,0,0]
```

---

# Why Monotonic Stack Works

Stack stores:

```txt
days still waiting
```

Whenever warmer temperature appears:

```txt
resolve immediately
```

Each index:

```txt
push once
pop once
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

Reason:

Each day enters stack once.

---

# Common Mistakes

- Storing temperatures instead of indexes
- Using nested loops
- Wrong subtraction order
- Forgetting unresolved days

Wrong:

```txt
temp
```

Correct:

```txt
index
```

---

# Edge Cases

```txt
[90]

→ [0]
```

---

```txt
[70,69,68]

→ [0,0,0]
```

---

```txt
[70,71]

→ [1,0]
```

---

# Related Problems

Stack:

- [Min Stack](../../stacks/min-stack/)
- [Next Greater Element I](../next-greater-element-i/)

Monotonic Stack:

- Next Greater Element II
- Largest Rectangle Histogram

---

# Revision Notes

Key Insight:

This is NOT:

```txt
search future
```

This is:

```txt
store unresolved days
↓
resolve when warmer appears
```

Mental Model:

```txt
wait
↓

wait
↓

warmer appears
↓

resolve
```

Whenever you see:

```txt
next greater
nearest larger
future distance
```

Think:

```txt
Monotonic Stack
```
