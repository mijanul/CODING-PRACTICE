# Valid Palindrome II

## Problem

You are given a string `s`.

Return:

```txt
true
```

if the string can become a palindrome after deleting **at most one** character.

Otherwise return:

```txt
false
```

---

## Examples

### Example 1

Input:

```txt
s = "aba"
```

Output:

```txt
true
```

Explanation:

The string is already a palindrome.

---

### Example 2

Input:

```txt
s = "abca"
```

Output:

```txt
true
```

Explanation:

Delete:

```txt
'c'
```

Result:

```txt
"aba"
```

which is a palindrome.

---

### Example 3

Input:

```txt
s = "abc"
```

Output:

```txt
false
```

Explanation:

Deleting one character still cannot make the string a palindrome.

---

## Approach — Two Pointers

A palindrome reads the same from both ends.

Use two pointers:

- `left` starts from the beginning.
- `right` starts from the end.

If characters match, continue moving inward.

When the first mismatch occurs, we have only one chance to delete a character.

So we check:

- Skip the left character.
- Skip the right character.

If either remaining substring is a palindrome, return `true`.

---

## Steps

1. Initialize `left` and `right`.
2. Compare characters.
3. If equal, move both pointers.
4. On the first mismatch:
   - check `left + 1...right`
   - check `left...right - 1`

5. If either is a palindrome, return `true`.
6. Otherwise return `false`.

---

## Dry Run

Input:

```txt
s = "abca"
```

Compare:

```txt
a == a ✓

b != c
```

Try removing:

```txt
b
```

Remaining:

```txt
ca
```

❌

Try removing:

```txt
c
```

Remaining:

```txt
ba
```

Actually compare the remaining substring:

```txt
"aba"
```

✅

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

One traversal plus one additional palindrome check.

### Space Complexity

```txt
O(1)
```

---

## Pattern

- Two Pointers
- Greedy
- String Traversal

---

## Related Problems

### Two Pointers

- [Valid Palindrome](../valid-palindrome/)
- [Reverse String](../reverse-string/)
- [Is Subsequence](../is-subsequence/)
- [Container With Most Water](../../arrays/container-with-most-water/)

### Strings

- [Find the Index of the First Occurrence in a String](../find-the-index-of-the-first-occurrence-in-a-string/)
- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)
- [Permutation in String](../permutation-in-string/)

### Similar Thinking

- Backspace String Compare
- Long Pressed Name

---

## Notes

- Only one deletion is allowed.
- Stop at the first mismatch.
- Check both possible deletions.
- Do not actually create a new string.
- Classic follow-up to Valid Palindrome.
- Great interview problem for mastering the Two Pointer technique.
