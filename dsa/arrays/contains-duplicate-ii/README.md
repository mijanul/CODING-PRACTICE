# Contains Duplicate II

## Problem

LeetCode 219

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

and:

```txt
k
```

Return:

```txt
true
```

if two equal values exist such that:

```txt
|i-j| <= k
```

Otherwise:

```txt
false
```

---

# Pattern

```txt
Sliding Window
```

Technique:

```txt
Hash Map
```

Alternative:

```txt
Last Seen Index
```

---

# Recognition

Look for:

- duplicate
- distance
- within k
- nearby

Question:

```txt
Can previous
position help?
```

↓

```txt
Hash Map
```

---

# Example

Input:

```txt
nums=[1,2,3,1]

k=3
```

Output:

```txt
true
```

Explanation:

```txt
1

...

1
```

Distance:

```txt
3
```

Valid.

---

Input:

```txt
nums=[1,0,1,1]

k=1
```

Output:

```txt
true
```

---

Input:

```txt
nums=[1,2,3,1,2,3]

k=2
```

Output:

```txt
false
```

---

# Expected Interview Solution

Store:

```txt
value
↓

last index
```

For each number:

Check:

```txt
currentIndex
-
previousIndex
```

If:

```txt
<= k
```

Return:

```txt
true
```

Else:

Update index.

---

# Visualization

Input:

```txt
[1,2,3,1]
```

Map:

```txt
1 → 0
2 → 1
3 → 2
```

See:

```txt
1
```

again.

Distance:

```txt
3−0
=
3
```

Valid.

---

# Why It Works

Need only:

```txt
latest index
```

No need:

```txt
compare
all pairs
```

---

# Notes

- Classic Hash Map problem.
- Store last seen position.
- Distance matters more than count.
- O(n²) brute force unnecessary.
- Similar to Sliding Window thinking.
- One pass solution.
- Very common easy interview problem.

---

# Related Problems

- Contains Duplicate
- Contains Duplicate III
- [Longest Substring Without Repeating Characters](../../strings/longest-substring-without-repeating-characters/)

---

# Revision Notes

Key Insight:

This is NOT:

```txt
count duplicates
```

This is:

```txt
remember position

↓

measure distance
```
