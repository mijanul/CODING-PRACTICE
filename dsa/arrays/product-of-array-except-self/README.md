# Product of Array Except Self

## Problem

LeetCode 238

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

Expected:

- O(1)

Output array excluded.

---

# Definition

Given:

```txt id="hxh9wu"
nums[]
```

Return:

```txt id="c2wgci"
answer[]
```

Where:

```txt id="w4jlwm"
answer[i]
=
product of all values
except nums[i]
```

Restriction:

```txt id="4ohjzr"
Do NOT use division
```

---

# Pattern

```txt id="jlwmt6"
Prefix + Suffix
```

Technique:

```txt id="evn6v4"
Left Product
+
Right Product
```

---

# Recognition

Look for:

- except self
- product
- no division
- cumulative result

Question:

```txt id="v4r3l6"
Can left
and right
be reused?
```

↓

```txt id="z6b0g6"
Prefix
+
Suffix
```

---

# Example

Input:

```txt id="lhmjlwm"
[1,2,3,4]
```

Output:

```txt id="j4vs3g"
[24,12,8,6]
```

Explanation:

```txt id="1d0okv"
24 = 2×3×4

12 = 1×3×4

8 = 1×2×4

6 = 1×2×3
```

---

# Expected Interview Solution

Pass 1:

Build:

```txt id="gx2v4m"
prefix
```

Pass 2:

Multiply:

```txt id="ml2rgu"
suffix
```

Process:

```txt id="syc0lm"
left → right

↓

right → left
```

---

# Visualization

Input:

```txt id="cru2qq"
[1,2,3,4]
```

Prefix:

```txt id="zv5l0m"
[1,1,2,6]
```

Suffix:

```txt id="tt9csp"
[24,12,4,1]
```

Combine:

```txt id="85ffqf"
[24,12,8,6]
```

---

# Why It Works

Each index needs:

```txt id="7p33eo"
left product

×

right product
```

No need to recompute.

---

# Notes

- Classic Prefix + Suffix problem.
- Division solution is not accepted.
- Two passes only.
- Output array can store prefix.
- Suffix can be tracked with one variable.
- One of the highest ROI interview problems.
- O(1) extra space trick is important.
- Common follow-up question.

---

# Related Problems

- Trapping Rain Water
- Maximum Product Subarray
- [Best Time To Buy And Sell Stock](../best-time-to-buy-and-sell-stock/)

---

# Revision Notes

Key Insight:

This is NOT:

```txt id="dbccrj"
calculate
each index
```

This is:

```txt id="5gkkaf"
left product

↓

right product

↓

combine
```
