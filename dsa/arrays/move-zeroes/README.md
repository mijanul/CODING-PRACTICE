# Move Zeroes

## Problem

You are given an integer array `nums`.

Move all `0`s to the end of the array while maintaining the relative order of the non-zero elements.

The operation must be performed **in-place** without making a copy of the array.

---

## Examples

### Example 1

Input:

```txt
nums = [0,1,0,3,12]
```

Output:

```txt
[1,3,12,0,0]
```

Explanation:

Move all non-zero elements to the front while preserving their order.

---

### Example 2

Input:

```txt
nums = [0]
```

Output:

```txt
[0]
```

---

## Approach — Two Pointers

We need to keep all non-zero elements in their original order while moving every zero to the end.

Use two pointers:

- `right` scans every element.
- `left` points to the position where the next non-zero element should be placed.

Whenever `nums[right]` is non-zero:

- Swap `nums[left]` and `nums[right]`.
- Move `left` forward.

By the end:

- All non-zero elements are at the beginning.
- All zeros naturally move to the end.

---

## Steps

1. Initialize `left = 0`.
2. Traverse the array using `right`.
3. If `nums[right]` is non-zero:
   - Swap `nums[left]` and `nums[right]`.
   - Increment `left`.

4. Continue until the end of the array.

---

## Dry Run

Input:

```txt
nums = [0,1,0,3,12]
```

Initial:

```txt
left = 0
```

Process:

```txt
0 → skip

1 → swap with index 0

[1,0,0,3,12]

3 → swap

[1,3,0,0,12]

12 → swap

[1,3,12,0,0]
```

Answer:

```txt
[1,3,12,0,0]
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

Single traversal of the array.

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

- [Two Sum II](../2-sum-ii/)
- [Merge Sorted Array](../merge-sorted-array/)
- [Valid Palindrome](../../strings/valid-anagram/)
- [Container With Most Water](../container-with-most-water/)

### Arrays

- [Rotate Array](../rotate-array/)
- [Replace Elements with Greatest Element on Right Side](../replace-elements-with-greatest-element-on-right-side/)
- [Product of Array Except Self](../product-of-array-except-self/)

### Similar Thinking

- Remove Element
- Remove Duplicates from Sorted Array
- Sort Array By Parity

---

## Notes

- Maintain the relative order of non-zero elements.
- The array must be modified in-place.
- Only non-zero elements are moved.
- A swap may occur even when `left == right`, which is perfectly valid.
- Great beginner problem for mastering the Two Pointer technique.
