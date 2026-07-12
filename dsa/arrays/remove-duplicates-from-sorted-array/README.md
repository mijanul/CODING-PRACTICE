# Remove Duplicates from Sorted Array

## Problem

You are given a **sorted** integer array `nums`.

Remove the duplicates **in-place** such that each unique element appears only once.

Return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique values in their original order.

---

## Examples

### Example 1

Input:

```txt
nums = [1,1,2]
```

Output:

```txt
k = 2

nums = [1,2,_]
```

Explanation:

The unique elements are:

```txt
1
2
```

So the first `2` positions contain:

```txt
[1,2]
```

---

### Example 2

Input:

```txt
nums = [0,0,1,1,1,2,2,3,3,4]
```

Output:

```txt
k = 5

nums = [0,1,2,3,4,_,_,_,_,_]
```

Explanation:

The unique elements are:

```txt
0
1
2
3
4
```

---

## Approach — Two Pointers

Since the array is already sorted, duplicate values always appear next to each other.

Use two pointers:

- `left` points to the position where the next unique element should be placed.
- `right` scans the array.

Whenever `nums[right]` is different from the previous unique value:

- Place it at `nums[left]`.
- Move `left` forward.

At the end:

- The first `left` elements contain all unique values.

---

## Steps

1. Initialize `left = 1`.
2. Traverse the array using `right`.
3. If the current value differs from the previous value:
   - Copy it to `nums[left]`.
   - Increment `left`.

4. Continue until the end.
5. Return `left`.

---

## Dry Run

Input:

```txt
nums = [0,0,1,1,1,2,2,3,3,4]
```

Process:

```txt
0 ✓

0 ✗

1 ✓

2 ✓

3 ✓

4 ✓
```

Result:

```txt
[0,1,2,3,4]
```

Return:

```txt
5
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

Each element is visited exactly once.

### Space Complexity

```txt
O(1)
```

The array is modified in-place.

---

## Pattern

- Two Pointers
- In-place Array Manipulation
- Array Traversal

---

## Related Problems

### Two Pointers

- [Move Zeroes](../move-zeroes/)
- Remove Element
- [Merge Sorted Array](../merge-sorted-array/)
- [Two Sum II](../2-sum-ii/)

### Arrays

- [Sort Array By Parity](../sort-array-by-parity/)
- [Rotate Array](../rotate-array/)
- [Replace Elements with Greatest Element on Right Side](../replace-elements-with-greatest-element-on-right-side/)

### Similar Thinking

- Remove Duplicates from Sorted Array II
- Squares of a Sorted Array

---

## Notes

- The array is already sorted, making duplicate detection easy.
- Only unique elements are copied forward.
- The first `k` positions contain the final answer.
- The values after index `k` do not matter.
- Great introductory problem for learning the Two Pointer technique.
- A classic in-place array manipulation interview question.
