# Top K Frequent Elements

## Problem

LeetCode 347

Difficulty:

Medium

---

# Time Complexity

Expected:

- O(n)

Alternative:

- O(n log k)

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
k
```

most frequent elements.

Order does NOT matter.

---

# Pattern

```txt
Hashing
```

Technique:

```txt
Bucket Sort
```

Alternative:

```txt
Heap
```

---

# Recognition

Look for:

- frequency
- top K
- most common
- repeated values

Question:

```txt
Can frequency
be stored?
```

↓

```txt
Hash Map
```

---

# Example

Input:

```txt
nums=[1,1,1,2,2,3]

k=2
```

Output:

```txt
[1,2]
```

Explanation:

```txt
1 → 3 times

2 → 2 times

3 → 1 time
```

Top:

```txt
1
2
```

---

Input:

```txt
nums=[1]

k=1
```

Output:

```txt
[1]
```

---

# Expected Interview Solution

Process:

```txt
Count Frequency

↓

Group By Count

↓

Take Top K
```

---

# Visualization

Input:

```txt
[1,1,1,2,2,3]
```

Build:

```txt
{
1:3
2:2
3:1
}
```

↓

Buckets:

```txt
3 → [1]

2 → [2]

1 → [3]
```

↓

Result:

```txt
[1,2]
```

---

# Approaches

## Hash Map + Bucket Sort

Complexity:

```txt
O(n)
```

Most common interview solution.

---

## Hash Map + Min Heap

Complexity:

```txt
O(n log k)
```

Useful when:

```txt
k << n
```

---

# Notes

- Frequency counting problem.
- Hash Map is usually required.
- Bucket Sort achieves O(n).
- Heap is a common follow-up.
- Order of output does not matter.
- One of the highest ROI hashing problems.
- Similar thinking appears in many Top K problems.

---

# Related Problems

- Group Anagrams
- Valid Anagram
- K Closest Points
- Top K Frequent Words

---

# Revision Notes

Key Insight:

This is NOT:

```txt
sort values
```

This is:

```txt
count

↓

group

↓

extract top
```
