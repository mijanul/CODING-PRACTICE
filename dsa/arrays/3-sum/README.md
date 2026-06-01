# 3Sum

## Problem Statement

Given an integer array `nums`, return all unique triplets:

```txt
[a, b, c]
```

such that:

```txt
a + b + c = 0
```

The solution set must not contain duplicate triplets.

---

## Examples

### Example 1

Input:

```txt
nums = [-1,0,1,2,-1,-4]
```

Output:

```txt
[[-1,-1,2],[-1,0,1]]
```

---

### Example 2

Input:

```txt
nums = [0,1,1]
```

Output:

```txt
[]
```

---

### Example 3

Input:

```txt
nums = [0,0,0]
```

Output:

```txt
[[0,0,0]]
```

---

## Constraints

```txt
3 <= nums.length <= 3000
-100000 <= nums[i] <= 100000
```

---

## Concepts

- [Arrays](../../arrays/)
- [Sorting](../../algorithms//sorting/)
- [Two Pointers](../../patterns/two-pointers/)
- Duplicate Handling

---

## Patterns

- Two Pointers

Related Pattern Notes:

[two-pointers](../../patterns/two-pointers/README.md)

---

## Brute Force Approach

### Idea

Try every possible triplet using three nested loops.

### Complexity

Time:

```txt
O(n³)
```

Space:

```txt
O(1)
```

---

## Optimized Approach

### Idea

1. Sort the array.
2. Fix one element.
3. Use Two Pointers on the remaining portion.
4. Skip duplicates.
5. Store valid triplets.

### Complexity

Time:

```txt
O(n²)
```

Space:

```txt
O(1)
```

(excluding output)

---

## Optimization Insight

Brute Force:

```txt
3 nested loops
O(n³)
```

Optimized:

```txt
Sort
→ Fix one element
→ Solve remaining problem using Two Pointers
```

Result:

```txt
O(n²)
```

---

## Recognition Pattern

Common hints that suggest this approach:

- Find unique triplets
- Sum equals target
- Duplicate handling required
- Need better than O(n³)
- Array can be sorted

Pattern:

```txt
Sort + Fix One Element + Two Pointers
```

---

## Pointer Movement Logic

After sorting:

### If Current Sum < 0

Move:

```txt
left++
```

Reason:

Need a larger value.

Since the array is sorted, moving left rightward increases the sum.

---

### If Current Sum > 0

Move:

```txt
right--
```

Reason:

Need a smaller value.

Since the array is sorted, moving right leftward decreases the sum.

---

### If Current Sum == 0

1. Store triplet.
2. Move both pointers.
3. Skip duplicates.

---

## Why Sort?

Sorting enables:

- Two Pointer traversal
- Duplicate removal
- Predictable pointer movement

Without sorting, the optimized solution is difficult to implement efficiently.

---

## Why Skip Duplicates?

Example:

```txt
[-1, -1, -1, 0, 1, 2]
```

Without duplicate handling:

```txt
[-1, 0, 1]
```

may be added multiple times.

Duplicates must be skipped for:

- Fixed element (`i`)
- Left pointer
- Right pointer

to ensure unique triplets.

---

## Early Exit Optimization

After sorting:

```js
if (nums[i] > 0) break;
```

Reason:

If the current number is positive, all remaining numbers are also positive.

Three positive numbers cannot sum to zero.

---

## Common Mistakes

- Forgetting to sort first
- Not skipping duplicates
- Moving wrong pointer
- Infinite pointer loops
- Incorrect duplicate checks
- Returning duplicate triplets
- Forgetting early exit optimization

---

## Related Problems

### Easier

- Two Sum
- Two Sum II

### Similar

- 3Sum Closest
- 4Sum

### Advanced

- K Sum

---

## Attempt Tracking

| Attempt   | Date | Notes |
| --------- | ---- | ----- |
| attempt-1 |      |       |
| attempt-2 |      |       |
| attempt-3 |      |       |

---

## Revision Notes

### Key Insight

This is essentially:

```txt
Two Sum + One Fixed Element
```

Workflow:

```txt
Sort Array
      ↓
Fix One Number
      ↓
Apply Two Pointers
      ↓
Skip Duplicates
      ↓
Store Result
```

The biggest source of bugs is usually duplicate handling.

Focus on:

- Duplicate skipping
- Pointer movement
- Early exit optimization
- Understanding WHY sorting helps
