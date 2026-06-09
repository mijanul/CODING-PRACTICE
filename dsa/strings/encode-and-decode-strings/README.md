# Encode and Decode Strings

## Problem

LeetCode 271

Difficulty:

Medium

---

# Time Complexity

Expected:

- Encode → O(n)
- Decode → O(n)

## Space Complexity

- O(n)

---

# Definition

Design:

```txt
encode()
decode()
```

Convert:

```txt
string[]
```

↓

```txt
string
```

and recover:

```txt
string
```

↓

```txt
string[]
```

without losing information.

---

# Pattern

```txt
Strings
```

Technique:

```txt
Encoding
Parsing
```

---

# Recognition

Look for:

- serialize
- deserialize
- encode
- decode
- preserve structure

Question:

```txt
Can separator
break data?
```

↓

```txt
Store length
```

---

# Example

Input:

```txt
["neet","code","love","you"]
```

Encoded:

```txt
4#neet4#code4#love3#you
```

Decoded:

```txt
["neet","code","love","you"]
```

---

Input:

```txt
[""]
```

Encoded:

```txt
0#
```

Decoded:

```txt
[""]
```

---

# Expected Interview Solution

Store:

```txt
length
+
delimiter
+
value
```

Example:

```txt
cat
```

↓

```txt
3#cat
```

Build:

```txt
3#cat
5#apple
```

Decode by:

```txt
read length

↓

extract string
```

---

# Visualization

```txt
["ab","xyz"]

↓

2#ab3#xyz

↓

["ab","xyz"]
```

---

# Why Length Works

Separator only:

```txt
a,b,c
```

fails.

Because values may contain:

```txt
,
#
:
```

Length avoids ambiguity.

---

# Notes

- Classic system design style string problem.
- Encoding must preserve exact data.
- Delimiter alone is unsafe.
- Length prefix is common interview solution.
- Similar to serialization.
- Parsing carefully is more important than coding.
- Great practice for String manipulation.

---

# Related Problems

- [Group Anagrams](../group-anagrams/)
- Serialize and Deserialize Binary Tree
- Design TinyURL

---

# Revision Notes

Key Insight:

This is NOT:

```txt
join strings
```

This is:

```txt
store metadata

↓

recover safely
```
