# Quick Sort

## Difficulty

Medium

---

# Definition

Quick Sort uses:

```txt
Choose Pivot
↓

Partition
↓

Recursively Sort
```

Pick one element.

Move:

```txt
smaller → left

greater → right
```

Repeat.

---

# Mental Model

Think:

```txt
put one element
in correct position
↓

solve remaining
```

Example:

```txt
[5,2,4,1]

pivot = 5

↓

[2,4,1][5]

↓

[1][2][4]
```

Final:

```txt
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

Choose:

```txt
pivot = 5
```

Partition:

```txt
[2,3,1]
[5]
```

Sort left:

```txt
[1,2,3]
```

Final:

```txt
[1,2,3,5]
```

---

# Algorithm

### Step 1

Choose pivot.

Example:

```txt
first
last
middle
random
```

---

### Step 2

Partition.

Move:

```txt
smaller → left

greater → right
```

---

### Step 3

Recursively sort.

---

# Visualization

Input:

```txt
[8,3,5,4]
```

Choose:

```txt
pivot=4
```

Partition:

```txt
[3]

[4]

[8,5]
```

Sort:

```txt
[5,8]
```

Final:

```txt
[3,4,5,8]
```

---

# Why Quick Sort Works

After partition:

```txt
pivot
is final
```

Meaning:

```txt
left < pivot < right
```

Only remaining sections need sorting.

---

# Complexity

| Case    | Time       |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n²)      |

Space:

```txt
O(log n)
```

Stable:

```txt
No
```

---

# Recognition Pattern

Common hints:

- in-place sorting
- lower memory
- partitioning
- divide and conquer

Question:

```txt
Can one value
be placed correctly?
```

↓

```txt
Quick Sort
```

---

# Why O(n log n)?

Partition:

```txt
O(n)
```

Levels:

```txt
log n
```

Total:

```txt
O(n log n)
```

Worst:

```txt
bad pivot
```

↓

```txt
O(n²)
```

---

# Partition Visualization

Input:

```txt
[5,2,7,3]
```

Pivot:

```txt
3
```

Move:

```txt
[2]

[3]

[5,7]
```

Now:

```txt
3
```

never moves again.

---

# Choosing Pivot

Common strategies:

### First Element

```txt
simple
```

---

### Last Element

```txt
common
```

---

### Middle

```txt
better
```

---

### Random

```txt
reduces worst case
```

---

# Merge Sort vs Quick Sort

Merge:

```txt
Guaranteed O(n log n)

Space O(n)

Stable
```

Quick:

```txt
Average O(n log n)

Space O(log n)

Not stable
```

---

# Common Mistakes

- Wrong partition
- Infinite recursion
- Bad pivot
- Forgetting boundaries

Wrong:

```txt
sort entire array
again
```

Correct:

```txt
sort left
sort right
```

---

# Edge Cases

```txt
[]
```

↓

```txt
[]
```

---

```txt
[1]
```

↓

```txt
[1]
```

---

```txt
[5,5,5]
```

↓

```txt
[5,5,5]
```

---

```txt
[3,2,1]
```

↓

```txt
[1,2,3]
```

---

# Related Algorithms

- Merge Sort
- Heap Sort
- Sort an Array

---

# Revision Notes

Key Insight:

This is NOT:

```txt
split equally
```

This is:

```txt
place pivot
↓

sort sides
```

Mental Model:

```txt
pivot
↓

partition
↓

repeat
```

Whenever you see:

```txt
in-place
partition
sorting
```

Think:

```txt
Quick Sort
```
