# Longest Repeating Character Replacement

## Problem

LeetCode 424

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

- O(1)

English uppercase letters only.

---

# Definition

Given:

```txt
s
```

and

```txt
k
```

Replace at most:

```txt
k
```

characters.

Return:

```txt
longest substring
```

that can become:

```txt
all same character
```

---

# Pattern

```txt
Sliding Window
```

Technique:

```txt
Frequency Count
```

---

# Recognition

Look for:

- longest substring
- replace at most K
- contiguous
- maximize window

Question:

```txt
Can window
stay valid?
```

↓

```txt
Sliding Window
```

---

# Example

Input:

```txt
s = "ABAB"

k = 2
```

Output:

```txt
4
```

Explanation:

```txt
ABAB

↓

AAAA
```

---

Input:

```txt
s = "AABABBA"

k = 1
```

Output:

```txt
4
```

Explanation:

```txt
AABA
```

or

```txt
ABBA
```

---

# Expected Interview Solution

Maintain:

```txt
left
right

maxFrequency
```

Window is valid when:

```txt
windowSize
-
maxFrequency
<=
k
```

If invalid:

```txt
left++
```

---

# Visualization

Input:

```txt
AABABBA
```

Window:

```txt
AABA
```

Count:

```txt
A = 3

B = 1
```

Replace:

```txt
1
```

Valid.

Length:

```txt
4
```

---

# Why It Works

Keep:

```txt
largest count
inside window
```

Everything else:

```txt
replace
```

If replacements exceed:

```txt
k
```

Shrink.

---

# Formula

```txt
windowSize
-
maxFrequency
<=
k
```

Meaning:

```txt
characters to replace
```

must stay valid.

---

# Notes

- Classic Dynamic Sliding Window problem.
- Frequency map tracks counts.
- Window expands and shrinks.
- Do NOT rebuild substring.
- O(n²) brute force unnecessary.
- One of the highest ROI string problems.
- Similar thinking to LeetCode 3.
- Important insight is keeping max frequency.

---

# Related Problems

- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)
- Minimum Window Substring
- Permutation In String

---

# Revision Notes

Key Insight:

This is NOT:

```txt
replace
every substring
```

This is:

```txt
expand

↓

check validity

↓

shrink
```
