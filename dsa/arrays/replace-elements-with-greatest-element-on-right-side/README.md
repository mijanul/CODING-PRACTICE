# Replace Elements with Greatest Element on Right Side

## Problem

You are given an integer array `arr`.

Replace every element with the greatest element among the elements to its right.

The last element should always be replaced with:

```txt
-1
```

Return the modified array.

---

## Examples

### Example 1

Input:

```txt
arr = [17,18,5,4,6,1]
```

Output:

```txt
[18,6,6,6,1,-1]
```

Explanation:

```txt
17 → greatest on right = 18
18 → greatest on right = 6
5  → greatest on right = 6
4  → greatest on right = 6
6  → greatest on right = 1
1  → -1
```

---

### Example 2

Input:

```txt
arr = [400]
```

Output:

```txt
[-1]
```

---

## Approach — Reverse Traversal

Each element depends only on the values to its right.

If we traverse from left to right, we don't yet know the greatest value on the right.

Instead, traverse from right to left while maintaining:

```txt
maximum value seen so far
```

For every element:

1. Save the current value.
2. Replace it with the current maximum.
3. Update the maximum if the saved value is larger.

This allows us to process the array in a single pass.

---

## Steps

1. Initialize `maxRight = -1`.
2. Traverse the array from right to left.
3. Store the current element.
4. Replace it with `maxRight`.
5. Update `maxRight` using the stored value.
6. Continue until the beginning of the array.

---

## Dry Run

Input:

```txt
arr = [17,18,5,4,6,1]
```

Start:

```txt
maxRight = -1
```

Process:

```txt
1  → -1      maxRight = 1
6  → 1       maxRight = 6
4  → 6       maxRight = 6
5  → 6       maxRight = 6
18 → 6       maxRight = 18
17 → 18      maxRight = 18
```

Result:

```txt
[18,6,6,6,1,-1]
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

- Array
- Reverse Traversal
- Running Maximum
- In-place Array Manipulation

---

## Related Problems

### Reverse Traversal

- [Merge Sorted Array](../merge-sorted-array/)
- [Daily Temperatures](../daily-temperatures/)

### Arrays

- [Product of Array Except Self](../product-of-array-except-self/)
- [Rotate Array](../rotate-array/)
- [Sort an Array](../sort-an-array/)

### Similar Thinking

- [Trapping Rain Water](../trapping-rain-water/)
- [Best Time to Buy and Sell Stock](../best-time-to-buy-and-sell-stock/)

---

## Notes

- Traverse from right to left.
- Maintain the maximum value seen so far.
- Update the maximum **after** replacing the current element.
- No extra array is required.
- Great introductory problem for Reverse Traversal.
- Common interview problem for learning running maximum techniques.
