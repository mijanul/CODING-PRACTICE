# Sliding Window

## Type

Pattern

## Time Complexity

Usually:

- O(n)

## Space Complexity

Usually:

- O(1)
- O(k)

## Definition

Process a:

```txt
continuous range
```

without recalculating previous work.

Move:

```txt
expand
↓

shrink
```

Reuse previous computation.

## Recognition

Look for:

- subarray
- substring
- contiguous
- longest
- shortest
- at most K
- exactly K

Question:

```txt
Can previous work
be reused?
```

↓

```txt
Sliding Window
```

## Template

```ts
let left = 0;

for (let right = 0; right < arr.length; right++) {
  // expand

  while (condition) {
    left++;
  }

  // update answer
}
```

## Types

### Fixed Window

```txt
window size = constant
```

Example:

```txt
[1,2,3]
↓

[2,3,4]
```

---

### Dynamic Window

```txt
window size changes
```

Example:

```txt
expand
↓

shrink
```

## Related Problems

- Maximum Average Subarray
- [Best Time to Buy Stock](../../arrays/best-time-to-buy-and-sell-stock/)
- Longest Substring Without Repeating Characters
- Minimum Window Substring

## Notes

- Usually converts O(n²) → O(n)
- Uses two pointers
- Works on contiguous data
- One of the highest ROI interview patterns
