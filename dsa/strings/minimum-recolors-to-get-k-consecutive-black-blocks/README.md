# Minimum Recolors to Get K Consecutive Black Blocks

## Problem

You are given a string `blocks` where:

- `B` → Black block
- `W` → White block

You can recolor a white block (`W → B`) in one operation.

Return the minimum number of operations required so that there is at least one occurrence of `k` consecutive black blocks.

---

## Examples

### Example 1

Input:

```txt
blocks = "WBBWWBBWBW"
k = 7
```

Output:

```txt
3
```

Explanation:

Recolor index:

```txt
0, 3, 4
```

Before:

```txt
WBBWWBBWBW
```

After:

```txt
BBBBBBBWBW
```

Minimum operations = `3`

---

### Example 2

Input:

```txt
blocks = "WBWBBBW"
k = 2
```

Output:

```txt
0
```

Explanation:

There is already a group of `2` consecutive black blocks.

---

## Approach — Sliding Window

We need to find:

Among all windows of size `k`, which window contains the fewest white blocks.

Because:

- `W` requires 1 recolor
- `B` requires 0 recolor

So:

```txt
minimum white count
=
minimum operations
```

---

## Steps

1. Count white blocks in the first window
2. Slide window by one position
3. Remove left character contribution
4. Add right character contribution
5. Track minimum white count

---

## Dry Run

Input:

```txt
blocks = "WBBWWBBWBW"
k = 7
```

Window size:

```txt
7
```

Windows:

```txt
WBBWWBB → W = 3
BBWWBBW → W = 3
BWWBBWB → W = 3
WWBBWBW → W = 4
```

Minimum:

```txt
3
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

Single traversal.

### Space Complexity

```txt
O(1)
```

Only counters.

---

## Pattern

- Sliding Window
- Fixed Size Window
- String Traversal

---

## Related Problems

### Sliding Window

- [Find All Anagrams in a String](../find-all-anagrams-in-a-string/)
- Permutation in String
- Maximum Average Subarray
- [Longest Repeating Character Replacement](../longest-repeating-character-replacement/)

### Similar Thinking

- [Contains Duplicate II](../../arrays/contains-duplicate-ii/)
- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)

---

## Notes

- Window size never changes.
- Count only white blocks.
- Do not simulate recoloring.
- Fixed-size window is the key insight.
- Similar idea appears in frequency-based window problems.
