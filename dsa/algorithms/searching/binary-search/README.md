# Binary Search

## Time Complexity

- Best: O(1)
- Worst: O(log n)

## Space Complexity

- Iterative: O(1)
- Recursive: O(log n)

## Stable

No

## Notes

- **Works only on sorted arrays or sorted data structures.**
- **Repeatedly divides the search space into half (Divide and Conquer).**
- Much faster than Linear Search for large datasets.
- Uses the middle element to decide which half to continue searching in.
- Efficient for searching in large sorted arrays.
- Commonly implemented using loops or recursion.
- Iterative implementation is generally preferred because it uses less memory.
- Recursive implementation is easier to understand conceptually.
- Worst-case occurs when the target element is absent or located near the ends.
- Best-case occurs when the target element is exactly at the middle index.
- Frequently used in interview problems and competitive programming.
- Forms the foundation of advanced techniques like Binary Search on Answer.
- Commonly used in databases, search engines, and optimized lookup systems.
- Cannot be efficiently applied to unsorted arrays without sorting first.
