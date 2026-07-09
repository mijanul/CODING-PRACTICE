# Find the Index of the First Occurrence in a String

## Problem

You are given two strings:

```txt
haystack
needle
```

Return the index of the first occurrence of `needle` in `haystack`.

If `needle` does not exist, return:

```txt
-1
```

---

## Examples

### Example 1

Input:

```txt
haystack = "sadbutsad"
needle = "sad"
```

Output:

```txt
0
```

Explanation:

The first occurrence of `"sad"` starts at index `0`.

---

### Example 2

Input:

```txt
haystack = "leetcode"
needle = "leeto"
```

Output:

```txt
-1
```

Explanation:

`"leeto"` does not exist in `"leetcode"`.

---

## Approach — String Matching

We need to determine whether `needle` starts at each position in `haystack`.

For every possible starting position:

- compare characters one by one
- if all characters match, return the current index
- otherwise move to the next starting position

Stop when there are not enough characters left to match `needle`.

---

## Steps

1. Iterate through every possible starting index in `haystack`.
2. Compare characters of `needle`.
3. If every character matches, return the current index.
4. Otherwise continue searching.
5. Return `-1` if no match is found.

---

## Dry Run

Input:

```txt
haystack = "sadbutsad"
needle = "sad"
```

Check:

```txt
index 0

sad == sad ✓
```

Return:

```txt
0
```

---

Input:

```txt
haystack = "leetcode"
needle = "leeto"
```

Check:

```txt
leetc ❌

eetco ❌

etcod ❌
...
```

No match.

Return:

```txt
-1
```

---

## Complexity Analysis

### Time Complexity

```txt
O((n - m + 1) × m)
```

where:

- `n` = length of `haystack`
- `m` = length of `needle`

Worst case:

```txt
O(n × m)
```

---

### Space Complexity

```txt
O(1)
```

---

## Pattern

- String Traversal
- Two Pointers

---

## Related Problems

### Strings

- [Is Subsequence](../is-subsequence/)
- [Reverse String](../reverse-string/)
- [Valid Anagram](../valid-anagram/)
- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)

### String Matching

- Repeated String Match
- Implement strStr()
- Shortest Palindrome

### Advanced Algorithms

- Knuth-Morris-Pratt (KMP)
- Rabin-Karp
- Z Algorithm

---

## Notes

- Expected interview solution is the brute-force string matching approach.
- Compare characters only when the first character matches.
- Stop early if there are fewer remaining characters than `needle.length`.
- KMP is a common follow-up for optimizing to `O(n + m)`.
- Good introductory problem for string matching algorithms.
