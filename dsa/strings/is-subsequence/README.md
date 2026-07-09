# Is Subsequence

## Problem

You are given two strings:

```txt
s
t
```

Return:

```txt
true
```

if `s` is a subsequence of `t`.

Otherwise return:

```txt
false
```

A subsequence is formed by deleting some (or no) characters from a string without changing the order of the remaining characters.

---

## Examples

### Example 1

Input:

```txt
s = "abc"
t = "ahbgdc"
```

Output:

```txt
true
```

Explanation:

Characters:

```txt
a → b → c
```

appear in the same order inside `t`.

---

### Example 2

Input:

```txt
s = "axc"
t = "ahbgdc"
```

Output:

```txt
false
```

Explanation:

Character:

```txt
x
```

does not exist in `t`.

---

## Approach — Two Pointers

Traverse both strings simultaneously.

- One pointer scans `s`.
- One pointer scans `t`.

Whenever the characters match:

- move both pointers.

Otherwise:

- move only the pointer in `t`.

If the pointer in `s` reaches the end, then every character was matched in order.

---

## Steps

1. Initialize two pointers.
2. Compare characters.
3. If they match, move both pointers.
4. Otherwise, move only the pointer in `t`.
5. Continue until `t` is exhausted.
6. Return whether all characters of `s` were matched.

---

## Dry Run

Input:

```txt
s = "abc"
t = "ahbgdc"
```

Process:

```txt
a == a ✓

b != h

b == b ✓

c != g

c != d

c == c ✓
```

Result:

```txt
true
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

where `n` is the length of `t`.

### Space Complexity

```txt
O(1)
```

---

## Pattern

- Two Pointers
- String Traversal

---

## Related Problems

### Two Pointers

- [Valid Palindrome](../valid-palindrome/)
- [Reverse String](../reverse-string/)
- [Two Sum II](../../arrays/2-sum-ii/)
- [Container With Most Water](../../arrays/container-with-most-water/)

### Strings

- [Find All Anagrams in a String](../find-all-anagrams-in-a-string/)
- [Permutation in String](../permutation-in-string/)
- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)

### Similar Thinking

- Backspace String Compare
- Long Pressed Name

---

## Notes

- Order matters.
- Characters do not need to be consecutive.
- Extra characters in `t` are allowed.
- Only the pointer in `t` skips characters.
- Classic beginner Two Pointer problem.
- Frequently asked as an easy interview question.
