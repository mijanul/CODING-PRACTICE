# Bubble Sort

## Difficulty

Easy

---

# Definition

Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

Largest values gradually move to the end.

---

# Mental Model

Think:

```txt
big numbers
bubble upward
```

Example:

```txt
[5,2,4,1]

↓

[2,5,4,1]

↓

[2,4,5,1]

↓

[2,4,1,5]
```

Largest reaches end.

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

Pass 1:

```txt
[5,2,3,1]

↓

[2,5,3,1]

↓

[2,3,5,1]

↓

[2,3,1,5]
```

Largest fixed.

---

Pass 2:

```txt
[2,3,1,5]

↓

[2,1,3,5]
```

---

Pass 3:

```txt
[2,1,3,5]

↓

[1,2,3,5]
```

Sorted.

---

# Algorithm

Repeat:

1. Compare neighbors
2. Swap if left > right
3. Largest settles at end

Stop after:

```txt
n−1
```

passes.

---

# Visualization

```txt
5 2 3 1

↓

2 5 3 1

↓

2 3 5 1

↓

2 3 1 5
```

---

# Complexity

| Case    | Time  |
| ------- | ----- |
| Best    | O(n)  |
| Average | O(n²) |
| Worst   | O(n²) |

Space:

```txt
O(1)
```

Stable:

```txt
Yes
```

---

# Recognition Pattern

Common hints:

- simple sorting
- adjacent swaps
- educational implementation

Question:

```txt
Can values move
one step at a time?
```

↓

```txt
Bubble Sort
```

---

# Why It Works

After each pass:

```txt
largest element
is fixed
```

No need to revisit.

---

# Optimization

Use:

```txt
swapped
```

flag.

If no swaps:

```txt
stop early
```

Example:

```txt
[1,2,3]
```

Already sorted.

---

# Common Mistakes

- Extra loop
- Wrong swap
- Iterating entire array repeatedly
- Missing optimization

Wrong:

```txt
always run
```

Correct:

```txt
stop if sorted
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

- Selection Sort
- Insertion Sort
- Merge Sort

---

# Revision Notes

Key Insight:

This is NOT:

```txt
find minimum
```

This is:

```txt
push maximum
to the end
```

Mental Model:

```txt
compare
↓

swap
↓

bubble
```
