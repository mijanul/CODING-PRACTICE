# Selection Sort

## Difficulty

Easy

---

# Definition

Selection Sort repeatedly finds the:

```txt
minimum element
```

from the unsorted portion and places it in its correct position.

Array grows:

```txt
sorted
←
unsorted
```

---

# Mental Model

Think:

```txt
find smallest
↓

place it
↓

repeat
```

Example:

```txt
[5,2,4,1]

↓

[1,2,4,5]
```

---

# Example

Input:

```txt
[5,2,3,1]
```

Output:

```txt
[1,2,3,5]
```

---

# How It Works

Pass 1

Find minimum:

```txt
5 2 3 1
      ↑
```

Swap:

```txt
1 2 3 5
```

---

Pass 2

Find minimum from:

```txt
2 3 5
```

Already:

```txt
2
```

---

Pass 3

Find minimum:

```txt
3 5
```

Done.

---

# Algorithm

For every index:

1. Assume current index is minimum
2. Search remaining array
3. Update minimum
4. Swap

Repeat.

---

# Visualization

Input:

```txt
[5,2,4,1]
```

Pass 1:

```txt
min=1

↓

[1,2,4,5]
```

Pass 2:

```txt
min=2
```

Pass 3:

```txt
min=4
```

Sorted.

---

# Complexity

| Case    | Time  |
| ------- | ----- |
| Best    | O(n²) |
| Average | O(n²) |
| Worst   | O(n²) |

Space:

```txt
O(1)
```

Stable:

```txt
No
```

---

# Recognition Pattern

Common hints:

- find smallest repeatedly
- fixed number of swaps
- simple in-place sorting

Question:

```txt
Can I select
correct element
directly?
```

↓

```txt
Selection Sort
```

---

# Why It Works

Each iteration guarantees:

```txt
left side
is sorted
```

Example:

```txt
[1]
[1,2]
[1,2,3]
```

Build gradually.

---

# Bubble vs Selection

Bubble:

```txt
many swaps
```

Selection:

```txt
few swaps
```

Selection performs:

```txt
≤ n−1 swaps
```

---

# Optimization

Selection sort already performs:

```txt
minimum swaps
```

No major optimization.

---

# Common Mistakes

- Swapping inside loop
- Forgetting minimum index
- Swapping every comparison

Wrong:

```txt
swap immediately
```

Correct:

```txt
swap once
after searching
```

---

# Edge Cases

```txt
[]

→ []
```

---

```txt
[1]

→ [1]
```

---

```txt
[3,3,3]

→ [3,3,3]
```

---

# Related Algorithms

- Bubble Sort
- Insertion Sort
- Merge Sort

---

# Revision Notes

Key Insight:

This is NOT:

```txt
swap continuously
```

This is:

```txt
find minimum
↓

swap once
```

Mental Model:

```txt
search
↓

select
↓

place
```
