# Longest Consecutive Sequence

## Problem

LeetCode 128

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
nums[]
```

Return:

```txt
length
```

of the longest consecutive sequence.

Sequence values must be:

```txt
continuous
```

Order in array does NOT matter.

---

# Pattern

```txt
Hashing
```

Technique:

```txt
Hash Set
```

---

# Recognition

Look for:

- longest sequence
- consecutive
- O(n)
- fast lookup

Question:

```txt
Can existence
be checked
instantly?
```

↓

```txt
Hash Set
```

---

# Example

Input:

```txt
[100,4,200,1,3,2]
```

Output:

```txt
4
```

Explanation:

```txt
1 2 3 4
```

Length:

```txt
4
```

---

Input:

```txt
[0,3,7,2,5,8,4,6,0,1]
```

Output:

```txt
9
```

---

# Expected Interview Solution

Process:

```txt
Convert → Set

↓

Find sequence start

↓

Expand
```

Start only when:

```txt
num−1
does NOT exist
```

Then count:

```txt
num+1
num+2
...
```

---

# Visualization

Input:

```txt
[100,4,200,1,3,2]
```

Set:

```txt
{
100
4
200
1
3
2
}
```

Start:

```txt
1
```

Build:

```txt
1
↓

2
↓

3
↓

4
```

Answer:

```txt
4
```

---

# Why It Works

Do NOT start from:

```txt
every value
```

Only start from:

```txt
sequence start
```

This avoids:

```txt
O(n²)
```

---

# Notes

- Sorting solution is O(n log n).
- Expected interview solution is O(n).
- Hash Set provides O(1) lookup.
- Only expand from sequence start.
- One of the highest ROI hashing problems.
- Consecutive does NOT mean adjacent.

---

# Related Problems

- [Top K Frequent Elements](../top-k-frequent-elements/)
- Contains Duplicate
- [Group Anagrams](../../strings/group-anagrams/)

---

# Revision Notes

Key Insight:

This is NOT:

```txt
sort
```

This is:

```txt
store

↓

detect start

↓

expand
```
