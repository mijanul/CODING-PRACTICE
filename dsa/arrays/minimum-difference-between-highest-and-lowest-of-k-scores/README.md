# Minimum Difference Between Highest and Lowest of K Scores

## Problem

You are given a 0-indexed integer array `nums`, where `nums[i]` represents the score of the `i`th student. You are also given an integer `k`.

Pick the scores of any `k` students so that the difference between the highest and the lowest score is minimized.

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

There is only one possible group:

```txt
[90]
```

Difference:

```txt
90 - 90 = 0
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

Possible groups:

```txt
[9,4] → 5
[9,1] → 8
[9,7] → 2
[4,1] → 3
[4,7] → 3
[1,7] → 6
```

Minimum difference:

```txt
2
```

---

## Approach — Sorting + Fixed Window

Without sorting, we must compare every possible group of `k` students.

For example:

```txt
nums = [9,4,1,7]
k = 2
```

Possible groups:

```txt
[9,4]
[9,1]
[9,7]
[4,1]
[4,7]
[1,7]
```

Checking every combination becomes expensive as the array grows.

Instead, sort the array:

```txt
[1,4,7,9]
```

After sorting, numbers with the smallest difference will always be adjacent.

Now we only need to examine every consecutive window of size `k`.

```txt
[1,4] → 3
[4,7] → 3
[7,9] → 2
```

The minimum difference among all windows is the answer.

---

## Steps

1. Sort the array.
2. Create a fixed-size window of length `k`.
3. For each window, compute:

```txt
lastElement - firstElement
```

4. Track the minimum difference.
5. Return the answer.

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

Window 1:

```txt
[1,4]

Difference = 3
```

Window 2:

```txt
[4,7]

Difference = 3
```

Window 3:

```txt
[7,9]

Difference = 2
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

Sorting dominates the overall complexity.

### Space Complexity

```txt
O(1)
```

Ignoring the space used by the sorting algorithm.

---

## Pattern

* Sorting
* Fixed Sliding Window
* Array Traversal

---

## Related Problems

### Sorting

* Sort an Array
* Merge Sort
* Quick Sort

### Sliding Window

* Minimum Recolors to Get K Consecutive Black Blocks
* Maximum Average Subarray
* Find All Anagrams in a String

### Similar Thinking

* Contains Duplicate
* Top K Frequent Elements

---

## Notes

* Sorting is the key insight.
* The minimum difference will always be found between consecutive elements in the sorted array.
* Window size remains fixed at `k`.
* Only compare the first and last elements of each window.
* Avoid checking every possible combination of students.
* Great introductory problem combining Sorting and Fixed Sliding Window.
