# Longest Substring Without Repeating Characters

## Problem

LeetCode 3

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

- O(n)

---

# Definition

Given:

```txt
s
```

Return:

```txt
length
```

of the longest substring without duplicate characters.

Substring:

```txt
continuous
```

---

# Pattern

```txt
Sliding Window
```

Technique:

```txt
Hash Set
```

---

# Recognition

Look for:

- longest substring
- no duplicates
- contiguous
- optimize O(n²)

Question:

```txt
Can window
expand
and shrink?
```

↓

```txt
Sliding Window
```

---

# Example

Input:

```txt
"abcabcbb"
```

Output:

```txt
3
```

Explanation:

```txt
abc
```

---

Input:

```txt
"bbbbb"
```

Output:

```txt
1
```

---

Input:

```txt
"pwwkew"
```

Output:

```txt
3
```

Explanation:

```txt
wke
```

---

# Expected Interview Solution

Maintain:

```txt
left
right
set
```

Process:

```txt
expand

↓

duplicate

↓

shrink

↓

update answer
```

---

# Visualization

Input:

```txt
abcabcbb
```

Window:

```txt
abc

↓

bca

↓

cab
```

Longest:

```txt
3
```

---

# Why It Works

Instead of:

```txt
check
all substrings
```

Maintain:

```txt
valid window
```

Each character enters:

```txt
once
```

Leaves:

```txt
once
```

---

# Notes

- Classic Sliding Window problem.
- Hash Set tracks duplicates.
- Substring means contiguous.
- O(n²) brute force unnecessary.
- Window expands and shrinks dynamically.
- One of the highest ROI interview problems.
- Very common follow-up to fixed window.

---

# Related Problems

- Minimum Window Substring
- Longest Repeating Character Replacement
- Permutation In String

---

# Revision Notes

Key Insight:

This is NOT:

```txt
restart
substring
```

This is:

```txt
expand

↓

duplicate

↓

shrink
```
