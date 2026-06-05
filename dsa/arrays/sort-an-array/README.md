# Sort an Array

## Problem

LeetCode 912

Difficulty:

Medium

---

# Problem Statement

Given an integer array:

```txt
nums[]
```

Sort the array in:

```txt
ascending order
```

Return the sorted array.

Requirements:

- Do NOT use built-in sorting
- Target complexity:

```txt
O(n log n)
```

- Use minimum possible space

---

# Examples

## Example 1

Input:

```txt
nums = [5,2,3,1]
```

Output:

```txt
[1,2,3,5]
```

Explanation:

After sorting:

```txt
5 → moved
1 → moved

2 → unchanged
3 → unchanged
```

---

## Example 2

Input:

```txt
nums = [5,1,1,2,0,0]
```

Output:

```txt
[0,0,1,1,2,5]
```

Explanation:

Values may repeat.

Sorting must preserve duplicates.

---

# Constraints

```txt
1 <= nums.length <= 50000

-50000 <= nums[i] <= 50000
```

---

# Concepts

- Arrays
- Sorting
- Divide and Conquer
- Recursion

---

# Recognition Pattern

Common hints:

- no built-in sort
- O(n log n)
- large input
- optimize memory

Question:

```txt
Need guaranteed
O(n log n)?
```

↓

```txt
Merge Sort
```

Question:

```txt
Need lower memory?
```

↓

```txt
Quick Sort
```

---

# Brute Force Approach

Use simple sorting:

- Bubble Sort
- Selection Sort
- Insertion Sort

Complexity:

```txt
O(n²)
```

Too slow.

---

# Expected Interview Solution

Preferred:

```txt
Merge Sort
```

Reason:

```txt
Guaranteed
O(n log n)
```

Alternative:

```txt
Quick Sort
```

Average:

```txt
O(n log n)
```

Worst:

```txt
O(n²)
```

---

# Approach 1 — Merge Sort

Idea:

Split array.

Sort smaller arrays.

Merge.

Visualization:

```txt
[5,2,3,1]

↓

[5,2]
[3,1]

↓

[5]
[2]

[3]
[1]

↓

[2,5]
[1,3]

↓

[1,2,3,5]
```

Complexity:

```txt
Time → O(n log n)

Space → O(n)
```

Stable:

```txt
Yes
```

---

# Approach 2 — Quick Sort

Idea:

Pick:

```txt
pivot
```

Move:

```txt
smaller ← left

greater ← right
```

Repeat.

Visualization:

```txt
[5,2,3,1]

pivot=5

↓

[2,3,1][5]

↓

[1][2][3]
```

Complexity:

Average:

```txt
O(n log n)
```

Worst:

```txt
O(n²)
```

Space:

```txt
O(log n)
```

Stable:

```txt
No
```

---

# Why Merge Sort Usually Wins Here

Problem explicitly asks:

```txt
O(n log n)
```

Merge Sort guarantees it.

---

# Complexity Comparison

| Algorithm | Time           | Space    | Stable |
| --------- | -------------- | -------- | ------ |
| Bubble    | O(n²)          | O(1)     | Yes    |
| Insertion | O(n²)          | O(1)     | Yes    |
| Merge     | O(n log n)     | O(n)     | Yes    |
| Quick     | Avg O(n log n) | O(log n) | No     |

---

# Common Mistakes

- Using:

```txt
sort()
```

- Wrong merge
- Forgetting duplicates
- Wrong pivot

Wrong:

```txt
return nums.sort()
```

Correct:

```txt
implement sorting
```

---

# Edge Cases

```txt
[1]

→ [1]
```

---

```txt
[2,1]

→ [1,2]
```

---

```txt
[5,5,5]

→ [5,5,5]
```

---

```txt
[-1,-5,0]

→ [-5,-1,0]
```

---

# Related Problems

Arrays:

- Rotate Array
- Merge Sorted Array

Sorting:

- Merge Sort
- Quick Sort

---

# Revision Notes

Key Insight:

This is NOT:

```txt
sort values
```

This is:

```txt
choose
sorting strategy
```

Mental Model:

```txt
split
↓

sort
↓

combine
```

Whenever you see:

```txt
large input
sorting
O(n log n)
```

Think:

```txt
Merge Sort
```
