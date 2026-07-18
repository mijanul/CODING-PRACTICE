# Merge Strings Alternately

## Problem

You are given two strings `word1` and `word2`.

Merge the strings by adding letters in alternating order, starting with `word1`.

If one string is longer than the other, append the remaining characters to the end of the merged string.

Return the merged string.

---

## Examples

### Example 1

Input:

```text
word1 = "abc"
word2 = "pqr"
```

Output:

```text
"apbqcr"
```

---

### Example 2

Input:

```text
word1 = "ab"
word2 = "pqrs"
```

Output:

```text
"apbqrs"
```

Explanation:

- Merge alternately until `word1` ends.
- Append the remaining characters `"rs"`.

---

### Example 3

Input:

```text
word1 = "abcd"
word2 = "pq"
```

Output:

```text
"apbqcd"
```

Explanation:

- Merge alternately until `word2` ends.
- Append the remaining characters `"cd"`.

---

## Approach — Two Pointers

Traverse both strings simultaneously using two pointers.

At each step:

- Add one character from `word1` if available.
- Add one character from `word2` if available.

Continue until both strings have been completely processed.

This ensures characters are merged alternately while naturally handling strings of different lengths.

---

## Steps

1. Initialize two pointers at the beginning of each string.
2. Create an empty result string.
3. While either string still has characters:
   - Append the current character from `word1` if available.
   - Move the first pointer.
   - Append the current character from `word2` if available.
   - Move the second pointer.
4. Return the merged string.

---

## Dry Run

Input:

```text
word1 = "abc"
word2 = "pqrs"
```

Initial:

```text
result = ""
```

Iteration 1:

```text
result = "ap"
```

Iteration 2:

```text
result = "apbq"
```

Iteration 3:

```text
result = "apbqcr"
```

Remaining characters:

```text
"s"
```

Final result:

```text
"apbqcrs"
```

---

## Complexity Analysis

### Time Complexity

```text
O(n + m)
```

where:

- `n` = length of `word1`
- `m` = length of `word2`

### Space Complexity

```text
O(n + m)
```

The merged string stores all characters from both input strings.

---

## Pattern

- Two Pointers
- String Traversal

---

## Related Problems

### Two Pointers

- [Reverse String](../reverse-string/)
- [Valid Palindrome II](../valid-palindrome-ii/)
- [Is Subsequence](../is-subsequence/)
- [Merge Sorted Array](../../arrays/merge-sorted-array/)

### Strings

- Reverse Words in a String
- Greatest Common Divisor of Strings

---

## Notes

- Use two pointers to traverse both strings simultaneously.
- Always append a character only if the corresponding pointer is still within bounds.
- After one string ends, append all remaining characters from the other string.
- No extra data structures are required apart from the result string.
- This is a straightforward application of the Two Pointers technique.
