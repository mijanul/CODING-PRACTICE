# Merge Sort

## Time Complexity

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

## Space Complexity

- O(n)

## Stable

Yes

## Notes

- Uses Divide and Conquer approach.
- Splits the array recursively until subarrays contain one element.
- Merges sorted subarrays into one final sorted array.
- Guarantees O(n log n) in all cases.
- Stable sorting algorithm (preserves relative order of equal elements).
- Performs well for large datasets.
- Requires additional memory for merging.
- Commonly used in external sorting and linked list sorting.
- Easier to parallelize than many simple sorting algorithms.
- Suitable when predictable performance is required.
- Not an in-place sorting algorithm.
- Performs better than Bubble / Selection / Insertion for large inputs.
