# Container With Most Water

## Problem

LeetCode 11

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

- O(1)

---

# Definition

Given:

```txt
height[]
```

Choose:

```txt
left wall
+
right wall
```

to store:

```txt
maximum water
```

Area:

```txt
width × min(height)
```

---

# Pattern

```txt
Two Pointers
```

Technique:

```txt
Greedy
```

---

# Recognition

Look for:

- maximize area
- opposite ends
- move inward
- container

Question:

```txt
Can both ends
help decide?
```

↓

```txt
Two Pointers
```

---

# Example

Input:

```txt
[1,8,6,2,5,4,8,3,7]
```

Output:

```txt
49
```

Explanation:

Choose:

```txt
8     7
```

Width:

```txt
7
```

Height:

```txt
7
```

Area:

```txt
49
```

---

# Formula

```txt
area =
(right-left)
×

min(
height[left],
height[right]
)
```

---

# Expected Interview Solution

Start:

```txt
left = 0

right = n−1
```

Compute:

```txt
area
```

Move:

```txt
smaller height
```

Continue.

---

# Visualization

Input:

```txt
1 8 6 2 5 4 8 3 7
L               R
```

Area:

```txt
8 × 1
```

Move:

```txt
left++
```

↓

```txt
8 6 2 5 4 8 3 7
  L           R
```

Eventually:

```txt
49
```

---

# Why Move Smaller Pointer

Area depends on:

```txt
width
×

minimum height
```

Width always decreases.

Only chance:

```txt
increase height
```

Move smaller wall.

---

# Notes

- Classic Two Pointer problem.
- Greedy movement.
- Brute force O(n²).
- Expected solution O(n).
- Width decreases every iteration.
- Move smaller pointer only.
- One of the highest ROI interview problems.
- Great example of proof-based optimization.

---

# Related Problems

- Two Sum II
- Trapping Rain Water
- Best Time To Buy And Sell Stock

---

# Revision Notes

Key Insight:

This is NOT:

```txt
check all pairs
```

This is:

```txt
calculate

↓

move smaller wall

↓

repeat
```
