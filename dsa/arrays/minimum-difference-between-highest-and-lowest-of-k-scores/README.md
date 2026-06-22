# Minimum Difference Between Highest and Lowest of K Scores

## Problem

LeetCode 1984

You are given:

```txt
nums[]
```

where each value represents a student score.

Choose:

```txt
k
```

scores such that the difference between:

```txt
highest − lowest
```

is minimized.

Return the minimum possible difference.

---

## Examples

### Example 1

Input:

```txt
nums = [90]
k = 1
```

Output:

```txt
0
```

Explanation:

Only one score exists.

Difference:

```txt
90 − 90 = 0
```

---

### Example 2

Input:

```txt
nums = [9,4,1,7]
k = 2
```

Output:

```txt
2
```

Explanation:

After sorting:

```txt
[1,4,7,9]
```

Possible windows:

```txt
[1,4] → 3
[4,7] → 3
[7,9] → 2
```

Minimum:

```txt
2
```

---

## Approach — Sorting + Fixed Window

Since only:

```txt
highest
-
lowest
```

matters,

sorting places close values together.

Then:

Slide a window of size:

```txt
k
```

and compute:

```txt
windowMax
-
windowMin
```

Track the minimum.

---

## Steps

1. Sort the array
2. Create window of size `k`
3. Calculate difference:
   - last value
   - first value

4. Track minimum

---

## Dry Run

Input:

```txt
nums = [9,4,1,7]
k = 2
```

Sort:

```txt
[1,4,7,9]
```

Windows:

```txt
[1,4] → 3
[4,7] → 3
[7,9] → 2
```

Answer:

```txt
2
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n log n)
```

Sorting dominates.

### Space Complexity

```txt
O(1)
```

Ignoring sorting implementation.

---

## Pattern

- Sorting
- Fixed Window
- Array Traversal

---

## Related Problems

### Sorting

- Sort an Array
- Merge Sort
- Quick Sort

### Sliding Window

- Maximum Average Subarray
- [Minimum Recolors to Get K Consecutive Black Blocks](../../strings/minimum-recolors-to-get-k-consecutive-black-blocks/)

### Similar Thinking

- [Contains Duplicate](../contains-duplicate/)
- [Top K Frequent Elements](../top-k-frequent-elements/)

---

## Notes

- Sorting is the key insight.
- Window size never changes.
- Compare only first and last value of each window.
- No need to calculate all pair differences.
- Great beginner Sorting + Window problem.
