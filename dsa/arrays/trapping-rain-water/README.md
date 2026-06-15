# Trapping Rain Water

## Problem

LeetCode 42

Difficulty:

Hard

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

Expected:

- O(1)

---

# Definition

Given:

```txt
height[]
```

Return:

```txt
total water
```

trapped after rain.

Water at index:

```txt
min(
leftMax,
rightMax
)
-
currentHeight
```

---

# Pattern

```txt
Two Pointers
```

Technique:

```txt
Left Max
+
Right Max
```

Alternative:

```txt
Prefix + Suffix
```

---

# Recognition

Look for:

- trapped water
- elevation map
- left boundary
- right boundary

Question:

```txt
Can water
depend on
both sides?
```

↓

```txt
Two Pointers
```

---

# Example

Input:

```txt
[0,1,0,2,1,0,1,3,2,1,2,1]
```

Output:

```txt
6
```

Explanation:

Water:

```txt
0 0 1 0 1 2 1 0 0 1 0 0
```

Total:

```txt
6
```

---

# Expected Interview Solution

Maintain:

```txt
left
right

leftMax
rightMax
```

Process:

```txt
move smaller side

↓

calculate water

↓

update max
```

---

# Visualization

Input:

```txt
0 1 0 2 1 0 1 3
L             R
```

Track:

```txt
leftMax

rightMax
```

Compute:

```txt
water =
boundary
-
height
```

Accumulate.

---

# Why It Works

Water depends on:

```txt
minimum
boundary
```

If:

```txt
leftMax
<
rightMax
```

Then:

```txt
left side
is decided
```

Move left.

Otherwise:

```txt
move right
```

---

# Formula

```txt
water =
min(
leftMax,
rightMax
)
-
height[i]
```

If negative:

```txt
0
```

---

# Notes

- Classic Hard Two Pointer problem.
- Brute force is O(n²).
- Prefix/Suffix solution is O(n) space.
- Optimal solution uses O(1).
- Track boundaries not volume.
- Water exists only between walls.
- One of the highest ROI hard problems.
- Very common interview question.

---

# Related Problems

- Container With Most Water
- Product of Array Except Self
- Daily Temperatures

---

# Revision Notes

Key Insight:

This is NOT:

```txt
count gaps
```

This is:

```txt
find boundary

↓

calculate water

↓

accumulate
```
