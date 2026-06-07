# Best Time to Buy and Sell Stock

## Problem

Difficulty:

Easy

---

# Time Complexity

- O(n)

## Space Complexity

- O(1)

---

# Definition

Given:

```txt
prices[]
```

Find:

```txt
maximum profit
```

You must:

```txt
buy first
↓

sell later
```

Return:

```txt
0
```

if profit is impossible.

---

# Pattern

```txt
Sliding Window
```

---

# Recognition

Look for:

- maximum profit
- buy before sell
- one pass
- future comparison

Question:

```txt
Can previous
minimum help?
```

↓

```txt
Track Min
+
Sliding Window
```

---

# Example

Input:

```txt
[7,1,5,3,6,4]
```

Output:

```txt
5
```

Explanation:

```txt
buy → 1

sell → 6

profit = 5
```

---

Input:

```txt
[7,6,4,3,1]
```

Output:

```txt
0
```

Explanation:

```txt
No profit
```

---

# Expected Interview Solution

Maintain:

```txt
minPrice
maxProfit
```

Process:

```txt
update min

↓

calculate profit

↓

update answer
```

---

# Visualization

```txt
7 1 5 3 6 4

min=7 profit=0

↓

min=1

↓

6−1=5
```

---

# Notes

- One pass solution.
- Track minimum price seen so far.
- Do NOT compare every pair.
- Usually treated as Sliding Window / Two Pointer style.
- O(n²) brute force is unnecessary.
- One of the highest ROI interview problems.
- Profit only happens after buying.
- Greedy thinking helps.

---

# Related Problems

- Best Time to Buy and Sell Stock II
- Maximum Subarray
- Maximum Average Subarray
