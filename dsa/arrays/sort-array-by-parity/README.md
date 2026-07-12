# Sort Array By Parity

## Problem

You are given an integer array `nums`.

Move all the even integers to the beginning of the array, followed by all the odd integers.

Return the resulting array.

The relative order of even or odd numbers does **not** matter.

---

## Examples

### Example 1

Input:

```txt
nums = [3,1,2,4]
```

Output:

```txt
[2,4,3,1]
```

Explanation:

Any arrangement where all even numbers appear before all odd numbers is valid.

Examples:

```txt
[2,4,3,1]
[4,2,1,3]
```

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

We need to partition the array into two groups:

- Even numbers
- Odd numbers

Use two pointers:

- `left` starts from the beginning.
- `right` starts from the end.

If:

- `left` points to an even number → move `left`.
- `right` points to an odd number → move `right`.
- Otherwise, swap the two values.

Continue until both pointers meet.

This partitions the array in-place.

---

## Steps

1. Initialize `left` and `right`.
2. Move `left` while it points to an even number.
3. Move `right` while it points to an odd number.
4. Swap when needed.
5. Continue until `left >= right`.

---

## Dry Run

Input:

```txt
nums = [3,1,2,4]
```

Initial:

```txt
left = 0
right = 3
```

Process:

```txt
3 ✗
4 ✓

Swap

[4,1,2,3]
```

Continue:

```txt
1 ✗
2 ✓

Swap

[4,2,1,3]
```

Answer:

```txt
[4,2,1,3]
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

Each element is visited at most once.

### Space Complexity

```txt
O(1)
```

The array is modified in-place.

---

## Pattern

- Two Pointers
- Partitioning
- In-place Array Manipulation

---

## Related Problems

### Two Pointers

- [Move Zeroes](../move-zeroes/)
- [Two Sum II](../2-sum-ii/)
- [Merge Sorted Array](../merge-sorted-array/)
- [Valid Palindrome](../../strings/valid-anagram/)

### Arrays

- [Sort an Array](../sort-an-array/)
- [Rotate Array](../rotate-array/)
- [Replace Elements with Greatest Element on Right Side](../replace-elements-with-greatest-element-on-right-side/)

### Similar Thinking

- Sort Colors
- Remove Element
- Partition Array According to Given Pivot

---

## Notes

- The relative order of even and odd numbers does **not** matter.
- Two pointers naturally partition the array.
- No extra array is required.
- Unlike **Move Zeroes**, this problem does **not** require preserving the original order.
- Great introductory problem for learning in-place partitioning.
