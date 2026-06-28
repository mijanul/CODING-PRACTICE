# Permutation in String

## Problem

You are given two strings:

```txt
s1
s2
```

Return:

```txt
true
```

if `s2` contains a permutation of `s1`.

Otherwise return:

```txt
false
```

A permutation is a rearrangement of all characters of a string.

---

## Examples

### Example 1

Input:

```txt
s1 = "ab"
s2 = "eidbaooo"
```

Output:

```txt
true
```

Explanation:

Substring:

```txt
"ba"
```

is a permutation of:

```txt
"ab"
```

---

### Example 2

Input:

```txt
s1 = "ab"
s2 = "eidboaoo"
```

Output:

```txt
false
```

Explanation:

No substring of length `2` is a permutation of `"ab"`.

---

## Approach — Fixed Sliding Window

A permutation must:

- have the same length as `s1`
- contain the same character frequencies

Instead of checking every substring independently, keep a fixed-size window of length:

```txt
s1.length
```

As the window slides:

- remove the left character
- add the right character
- compare the frequency counts

If the frequencies match, a permutation exists.

---

## Steps

1. Build the frequency count for `s1`.
2. Create a window of length `s1.length`.
3. Maintain the frequency count of the current window.
4. Compare both frequency counts.
5. If they match, return `true`.
6. Continue sliding until the end.
7. Return `false` if no match is found.

---

## Dry Run

Input:

```txt
s1 = "ab"
s2 = "eidbaooo"
```

Window size:

```txt
2
```

Windows:

```txt
ei ❌
id ❌
db ❌
ba ✅
```

Answer:

```txt
true
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

where `n` is the length of `s2`.

### Space Complexity

```txt
O(1)
```

Only lowercase English letters are used, so the frequency arrays have a fixed size.

---

## Pattern

- Sliding Window
- Fixed Sliding Window
- Hashing
- Frequency Count
- String Traversal

---

## Related Problems

### Sliding Window

- Find All Anagrams in a String
- Longest Repeating Character Replacement
- Longest Substring Without Repeating Characters
- Minimum Recolors to Get K Consecutive Black Blocks

### Hashing

- Valid Anagram
- Group Anagrams
- Contains Duplicate

### Similar Thinking

- Minimum Window Substring
- Top K Frequent Elements

---

## Notes

- Window size always equals `s1.length`.
- Compare character frequencies instead of sorting each substring.
- Sliding Window reduces repeated work.
- Frequency arrays are more efficient than sorting every window.
- Very similar to **Find All Anagrams in a String**. The only difference is that this problem returns a boolean instead of all starting indices.
