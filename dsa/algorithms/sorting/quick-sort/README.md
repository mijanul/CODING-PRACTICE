# Quick Sort

## Time Complexity

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n²)

## Space Complexity

- O(log n)

## Stable

No

## Notes

- Uses Divide and Conquer approach.
- Selects a pivot and partitions the array around it.
- Elements smaller than pivot move left.
- Elements greater than pivot move right.
- Recursively sorts partitions.
- Usually faster than Merge Sort in practice due to cache efficiency.
- Average performance is O(n log n).
- Worst case occurs with poor pivot selection.
- In-place sorting algorithm (requires only recursion stack).
- Not stable (equal elements may change order).
- Randomized pivot selection helps avoid worst-case performance.
- Commonly used in production systems and standard libraries.
- Requires less extra memory than Merge Sort.
- Very efficient for large arrays.

## Pivot Strategies

- First Element
- Last Element
- Middle Element
- Random Pivot
- Median of Three

## Partition Idea

```txt id="ikjlwm"
left < pivot < right
```

## Worst Case

Occurs when partitions become highly unbalanced.

Example situations:

```txt id="eclruy"
already sorted
reverse sorted
bad pivot repeatedly
```

## Complexity Summary

```txt id="5i79gp"
Partition → O(n)

Levels → log n

Total → O(n log n)
```
