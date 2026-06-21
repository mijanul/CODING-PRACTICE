# Find All Anagrams in a String

## Problem

LeetCode 438

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

## Space Complexity

- O(1)

Lowercase English letters.

---

# Definition

Given:

```txt
s
```

and:

```txt
p
```

Return:

```txt
indices[]
```

where:

```txt
substring
```

is an anagram of:

```txt
p
```

---

# Pattern

```txt
Sliding Window
```

Technique:

```txt
Fixed Window
+
Frequency Count
```

Secondary:

```txt
Hashing
```

---

# Recognition

Look for:

- all substrings
- same characters
- anagram
- fixed size

Question:

```txt
Can window
stay length p?
```

↓

```txt
Sliding Window
```

---

# Example

Input:

```txt
s="cbaebabacd"

p="abc"
```

Output:

```txt
[0,6]
```

Explanation:

```txt
cba

bac
```

Both are anagrams.

---

Input:

```txt
s="abab"

p="ab"
```

Output:

```txt
[0,1,2]
```

---

# Expected Interview Solution

Build:

```txt
target frequency
```

Move:

```txt
fixed window
```

Compare:

```txt
window
vs
target
```

If equal:

```txt
save index
```

---

# Visualization

Input:

```txt
cbaebabacd
```

Window:

```txt
[cba]
```

↓

Match

↓

Store:

```txt
0
```

Continue.

↓

```txt
[bac]
```

↓

Store:

```txt
6
```

---

# Why It Works

Window size always:

```txt
p.length
```

No need:

```txt
rebuild
every substring
```

Update counts.

Move.

Compare.

---

# Notes

- Classic Fixed Sliding Window problem.
- Hash Map / frequency array commonly used.
- Window size never changes.
- Compare counts not sorted strings.
- Sorting each substring becomes O(n log n).
- Frequency count gives O(n).
- Similar to Permutation In String.
- Great follow-up after Valid Anagram.

---

# Related Problems

- [Valid Anagram](../valid-anagram/)
- [Group Anagrams](../group-anagrams/)
- Permutation In String
- [Longest Substring Without Repeating Characters](../longest-substring-without-repeating-characters/)

---

# Revision Notes

Key Insight:

This is NOT:

```txt
sort
every substring
```

This is:

```txt
count

↓

slide

↓

compare
```
