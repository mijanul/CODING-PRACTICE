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

- ## Duplicate Elements

- Binary Search does not guarantee returning the first or last occurrence of a duplicate element.
- When duplicate values exist, the returned index depends on how the search space is divided.
- Standard Binary Search stops immediately after finding a matching element.
- To find the leftmost (first occurrence) or rightmost (last occurrence) element, the algorithm must be modified.

### Example

Input:

```js
const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 6));
```

## Future Improvements

- Implement First Occurrence Binary Search.
- Implement Last Occurrence Binary Search.
- Learn Lower Bound and Upper Bound concepts.
- Practice Binary Search on Answer problems.
- Implement Recursive Binary Search.
- Learn Binary Search in Rotated Sorted Arrays.
- Practice searching in 2D matrices.
- Handle edge cases like:
  - Empty array
  - Single element array
  - Duplicate values
  - Negative numbers
  - Large datasets
- Optimize midpoint calculation using:

```js
let mid = left + Math.floor((right - left) / 2);

- Practice LeetCode Binary Search pattern problems.
- Learn how Binary Search is used internally in databases and indexing systems.
- Understand advanced Binary Search variations used in real-world systems and product-based interviews.
```

## Variations of Binary Search

### Uniform Binary Search

- Stores the difference between the current midpoint and the next possible midpoints instead of maintaining start and end indices.
- Reduces repeated midpoint calculations.
- Mostly important from a theoretical and historical perspective.

### Exponential Search

- Extends Binary Search to unbounded or extremely large lists.
- Starts by finding a range using powers of two.
- Finds the first index that is both:
  - a power of two
  - greater than or equal to the target value
- Uses that range as the upper bound and then applies Binary Search.
- Performs better than standard Binary Search when the target lies near the beginning of the collection.

### Interpolation Search

- Estimates the probable position of the target instead of always choosing the middle element.
- Uses:
  - lowest element
  - highest element
  - array length
- Works well when values are uniformly distributed.
- Can outperform Binary Search in ideal distributions.
- Worst-case complexity can degrade to O(n).

### Fractional Cascading

- Optimizes searching the same target across multiple sorted arrays.
- Standard Binary Search across `k` arrays takes:

  O(k log n)

- Fractional Cascading improves this to:

  O(k + log n)

- Achieves this by storing linking information between arrays and their element positions.

### Generalization to Graphs

- Binary Search concepts can be generalized to specific graph structures.
- Binary Search Trees (BST) are a common example.
- Each node comparison determines:
  - whether the current node is the target
  - or which subtree may contain the target value

### Noisy Binary Search

- Handles cases where comparisons may sometimes be incorrect.
- Useful in probabilistic or unreliable systems.
- Assumes there is a probability of incorrect comparison between elements.
- Attempts to find the correct target position with high probability despite noisy comparisons.
