# Contains Duplicate

## Problem

LeetCode 217

Difficulty:

Easy

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
true
```

if any value appears:

```txt
more than once
```

Otherwise:

```txt
false
```

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

- duplicates
- repeated values
- fast lookup
- existence check

Question:

```txt
Can values
be remembered?
```

↓

```txt
Hash Set
```

---

# Example

Input:

```txt
[1,2,3,1]
```

Output:

```txt
true
```

---

Input:

```txt
[1,2,3,4]
```

Output:

```txt
false
```

---

Input:

```txt
[1,1,1,3,3,4,3,2,4,2]
```

Output:

```txt
true
```

---

# Expected Interview Solution

Process:

```txt
create set

↓

iterate

↓

if exists

return true

↓

insert
```

---

# Visualization

Input:

```txt
[1,2,3,1]
```

Set:

```txt
{}
```

↓

```txt
{1}
```

↓

```txt
{1,2}
```

↓

See:

```txt
1
```

Already exists.

Return:

```txt
true
```

---

# Why It Works

Set lookup:

```txt
O(1)
```

Avoid:

```txt
nested loops
```

Brute force:

```txt
O(n²)
```

Optimized:

```txt
O(n)
```

---

# Notes

- Classic Hash Set problem.
- One of the easiest hashing questions.
- Only existence matters.
- Count is unnecessary.
- Hash Set is enough (Map not required).
- Great introduction to duplicate detection.
- One pass solution.

---

# Related Problems

- Contains Duplicate II
- Contains Duplicate III
- Top K Frequent Elements
- Longest Consecutive Sequence

---

# Revision Notes

Key Insight:

This is NOT:

```txt
count
everything
```

This is:

```txt
remember

↓

check
```
