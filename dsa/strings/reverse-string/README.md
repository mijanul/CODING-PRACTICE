# Reverse String

## Problem

LeetCode 344

Difficulty:

Easy

---

# Time Complexity

- Best: O(n)
- Average: O(n)
- Worst: O(n)

---

# Space Complexity

- O(1)

---

# Stable

N/A

---

# Problem Statement

Given:

```txt
s[]
```

Reverse the array of characters:

```txt
in-place
```

Do NOT create another array.

Modify original array.

---

# Example 1

Input:

```txt
["h","e","l","l","o"]
```

Output:

```txt
["o","l","l","e","h"]
```

---

# Example 2

Input:

```txt
["H","a","n","n","a","h"]
```

Output:

```txt
["h","a","n","n","a","H"]
```

---

# Constraints

```txt
1 <= s.length <= 100000
```

---

# Concepts

- Strings
- Two Pointers
- In-place Modification

---

# Pattern

```txt
Two Pointers
```

---

# Recognition Pattern

Common hints:

- reverse
- opposite ends
- in-place
- swap

Question:

```txt
Can two ends
move together?
```

↓

```txt
Two Pointers
```

---

# Expected Interview Solution

Use:

```txt
left
right
```

Initialize:

```txt
left = 0
right = n - 1
```

While:

```txt
left < right
```

Swap.

Move:

```txt
left++

right--
```

---

# Visualization

Input:

```txt
h e l l o
```

Swap:

```txt
o e l l h
```

↓

```txt
o l l e h
```

Done.

---

# Why Two Pointers Work

Each swap fixes:

```txt
2 positions
```

Array shrinks:

```txt
outside
↓

inside
```

No extra memory.

---

# Complexity Summary

```txt
Traverse → O(n)

Space → O(1)
```

---

# Common Mistakes

- Creating new array
- Forgetting in-place
- Wrong loop condition

Wrong:

```txt
left <= right
```

Correct:

```txt
left < right
```

---

# Edge Cases

```txt
["a"]

→ ["a"]
```

---

```txt
["a","b"]

→ ["b","a"]
```

---

```txt
["a","a"]

→ ["a","a"]
```

---

# Related Problems

Strings:

- Reverse Words in String
- Reverse Linked List

Patterns:

- Valid Palindrome
- Two Sum II

---

# Notes

- Classic Two Pointer problem.
- One of the cleanest examples of in-place modification.
- No additional array required.
- Swap from both ends simultaneously.
- Useful foundation for many String problems.
- Often appears before Valid Palindrome.
- Interview focus is usually pointer movement.
- Works because each iteration resolves two positions.

---

# Revision Notes

Key Insight:

This is NOT:

```txt
build new string
```

This is:

```txt
swap
↓

move inward
```
