# Merge Sorted Array

## Problem

You are given two sorted integer arrays:

```txt
nums1
nums2
```

- `nums1` has a length of `m + n`, where the last `n` elements are `0` and should be ignored.
- `nums2` has a length of `n`.

Merge `nums2` into `nums1` so that `nums1` becomes a single sorted array.

The merge must be done **in-place**.

---

## Examples

### Example 1

Input:

```txt
nums1 = [1,2,3,0,0,0]
m = 3

nums2 = [2,5,6]
n = 3
```

Output:

```txt
[1,2,2,3,5,6]
```

Explanation:

Initial values:

```txt
nums1 = [1,2,3]
nums2 = [2,5,6]
```

Merge both arrays into `nums1`.

---

### Example 2

Input:

```txt
nums1 = [1]
m = 1

nums2 = []
n = 0
```

Output:

```txt
[1]
```

---

### Example 3

Input:

```txt
nums1 = [0]
m = 0

nums2 = [1]
n = 1
```

Output:

```txt
[1]
```

---

## Approach — Two Pointers (Reverse)

Since `nums1` already has enough space to hold all elements, we should fill it from the end.

Why?

If we merge from the beginning, existing values in `nums1` would be overwritten before being processed.

Instead:

- Compare the largest remaining values from both arrays.
- Place the larger one at the end of `nums1`.
- Move the corresponding pointer backward.

This preserves all unprocessed values.

---

## Steps

1. Initialize three pointers:
   - End of valid elements in `nums1`
   - End of `nums2`
   - End of merged array

2. Compare the current elements.
3. Place the larger value at the merge position.
4. Move the corresponding pointer.
5. Continue until all elements from `nums2` are merged.

---

## Dry Run

Input:

```txt
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
```

Compare:

```txt
3 vs 6

→ place 6
```

```txt
3 vs 5

→ place 5
```

```txt
3 vs 2

→ place 3
```

```txt
2 vs 2

→ place 2
```

Continue until:

```txt
[1,2,2,3,5,6]
```

---

## Complexity Analysis

### Time Complexity

```txt
O(m + n)
```

Each element is processed exactly once.

### Space Complexity

```txt
O(1)
```

The merge is performed in-place.

---

## Pattern

- Two Pointers
- Reverse Traversal
- In-place Array Manipulation

---

## Related Problems

### Two Pointers

- Two Sum II
- Valid Palindrome
- Container With Most Water
- Is Subsequence

### Arrays

- Sort an Array
- Rotate Array
- Product of Array Except Self

### Similar Thinking

- Merge Intervals
- Squares of a Sorted Array

---

## Notes

- The key insight is to merge **from the end**.
- Merging from the front overwrites unprocessed values.
- Three pointers are required.
- No extra array is needed.
- Classic in-place array manipulation problem.
- Frequently asked in coding interviews because it combines arrays with the Two Pointer technique.
