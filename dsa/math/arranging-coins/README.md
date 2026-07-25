# Arranging Coins

## Problem

You have `n` coins.

You want to build a staircase where:

- The first row has `1` coin.
- The second row has `2` coins.
- The third row has `3` coins.
- And so on.

Each row must be completely filled.

Return the number of **complete rows** that can be formed.

---

## Examples

### Example 1

Input:

```text
n = 5
```

Output:

```text
2
```

Explanation:

```
Row 1 → 1 coin
Row 2 → 2 coins
Row 3 → Needs 3 coins but only 2 remain
```

Only two complete rows can be formed.

---

### Example 2

Input:

```text
n = 8
```

Output:

```text
3
```

Explanation:

```
Row 1 → 1
Row 2 → 2
Row 3 → 3
Remaining → 2
```

The fourth row cannot be completed.

---

## Approach — Math

Build the staircase one row at a time.

Start with the first row.

For every row:

- If enough coins remain, subtract the required number of coins.
- Increase the completed row count.
- Move to the next row.

Stop when there are not enough coins to complete the next row.

---

## Steps

1. Initialize:
   - `row = 1`
   - `completedRows = 0`
2. While enough coins remain:
   - Subtract `row` coins.
   - Increase `completedRows`.
   - Increase `row`.
3. Return `completedRows`.

---

## Dry Run

Input:

```text
n = 8
```

Process:

```
Coins = 8

Row 1

8 - 1 = 7

↓

Row 2

7 - 2 = 5

↓

Row 3

5 - 3 = 2

↓

Row 4

Need 4

Only 2 remain
```

Answer:

```text
3
```

---

## Complexity Analysis

### Time Complexity

```text
O(√n)
```

The number of completed rows grows approximately as `√n`.

### Space Complexity

```text
O(1)
```

---

## Optimized Approach — Binary Search

Instead of simulating every row, observe that the total number of coins required for `k` complete rows is:

```
k × (k + 1) / 2
```

Use Binary Search to find the largest `k` such that:

```
k × (k + 1) / 2 ≤ n
```

This reduces the time complexity to:

```text
O(log n)
```

---

## Pattern

- Math
- Binary Search (Optimized)

---

## Related Problems

### Math

- Plus One
- Ugly Number
- Happy Number
- Palindrome Number

### Binary Search

- Sqrt(x)
- Guess Number Higher or Lower
- First Bad Version

---

## Notes

- The straightforward solution repeatedly subtracts row sizes.
- The optimized solution uses the triangular number formula.
- Binary Search efficiently finds the largest valid row count.
- Remember the formula:

```
1 + 2 + 3 + ... + k = k(k + 1) / 2
```

- The optimal solution runs in **O(log n)** time.
