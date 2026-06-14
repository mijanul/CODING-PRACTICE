# Two Sum II

## Problem

LeetCode 167

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
numbers[]
```

(sorted ascending)

Return:

```txt
[index1,index2]
```

such that:

```txt
numbers[i]
+
numbers[j]
=
target
```

Rules:

```txt
i < j
```

Exactly:

```txt
one solution
```

---

# Pattern

```txt
Two Pointers
```

Technique:

```txt
left
+
right
```

---

# Recognition

Look for:

- sorted array
- pair
- target sum
- one solution

Question:

```txt
Can order
help reduce
search?
```

↓

```txt
Two Pointers
```

---

# Example

Input:

```txt
numbers=[2,7,11,15]

target=9
```

Output:

```txt
[1,2]
```

Explanation:

```txt
2+7=9
```

---

Input:

```txt
numbers=[2,3,4]

target=6
```

Output:

```txt
[1,3]
```

---

# Expected Interview Solution

Start:

```txt
left=0

right=n−1
```

Compute:

```txt
sum
```

If:

```txt
sum > target
```

↓

```txt
right--
```

If:

```txt
sum < target
```

↓

```txt
left++
```

Repeat.

---

# Visualization

Input:

```txt
[2,7,11,15]

L       R
```

```txt
2+15
```

Too big.

↓

```txt
R--
```

↓

```txt
2+11
```

Too big.

↓

```txt
2+7
```

Match.

---

# Why It Works

Array is:

```txt
sorted
```

So:

```txt
increase sum
→ move left

decrease sum
→ move right
```

No need:

```txt
O(n²)
```

search.

---

# Notes

- Sorted version of Two Sum.
- Hash Map not required.
- Two pointers gives O(n).
- One of the cleanest pointer problems.
- Pointer movement depends on sum.
- Uses ordering to eliminate search space.

---

# Related Problems

- [Two Sum](../2-sum/)
- [Container With Most Water](../container-with-most-water/)
- [3Sum](../3-sum/)

---

# Revision Notes

Key Insight:

This is NOT:

```txt
try all pairs
```

This is:

```txt
compare

↓

move pointer

↓

repeat
```
