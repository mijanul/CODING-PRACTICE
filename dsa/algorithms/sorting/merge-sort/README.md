# Merge Sort

## Difficulty

Medium

---

# Definition

Merge Sort uses:

```txt
Divide
↓

Sort
↓

Merge
```

Split the array into smaller arrays.

Sort them recursively.

Merge them back.

---

# Mental Model

Think:

```txt
break problem
↓

solve pieces
↓

combine
```

Example:

```txt
[5,2,4,1]

↓

[5,2]
[4,1]

↓

[5][2]
[4][1]

↓

[2,5]
[1,4]

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

Split:

```txt
[5,2,3,1]

↓

[5,2]
[3,1]
```

Split again:

```txt
[5]
[2]

[3]
[1]
```

Merge:

```txt
[2,5]

[1,3]
```

Final:

```txt
[1,2,3,5]
```

---

# Algorithm

### Step 1

Split until:

```txt
size = 1
```

---

### Step 2

Merge.

Always take:

```txt
smaller value
```

---

### Step 3

Return merged array.

---

# Visualization

Input:

```txt
[8,3,5,4]
```

Split:

```txt
[8,3]
[5,4]
```

↓

```txt
[8]
[3]

[5]
[4]
```

↓

Merge:

```txt
[3,8]

[4,5]
```

↓

Final:

```txt
[3,4,5,8]
```

---

# Why Merge Sort Works

Observation:

If:

```txt
left
=
sorted
```

and

```txt
right
=
sorted
```

Then:

```txt
merge(left,right)
=
sorted
```

---

# Complexity

| Case    | Time       |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n log n) |

Space:

```txt
O(n)
```

Stable:

```txt
Yes
```

---

# Recognition Pattern

Common hints:

- guaranteed O(n log n)
- large input
- divide and conquer
- stable sorting

Question:

```txt
Can I split
the problem?
```

↓

```txt
Merge Sort
```

---

# Why O(n log n)?

Each level:

```txt
merge → O(n)
```

Levels:

```txt
log n
```

Total:

```txt
O(n log n)
```

---

# Visualization Of Levels

Example:

```txt
8 elements
```

Levels:

```txt
8

↓

4

↓

2

↓

1
```

Total:

```txt
log n
```

---

# Merge Operation

Example:

```txt
left

[2,5]
```

```txt
right

[1,4]
```

Result:

```txt
[1,2,4,5]
```

Compare:

```txt
2 vs 1
↓

2 vs 4
↓

5 vs 4
```

---

# Common Mistakes

- Wrong midpoint
- Forgetting remaining values
- Infinite recursion
- Incorrect merge order

Wrong:

```txt
split only
```

Correct:

```txt
split
↓

merge
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

# Bubble vs Merge

Bubble:

```txt
O(n²)
```

Merge:

```txt
O(n log n)
```

---

# Related Algorithms

- Quick Sort
- Binary Search
- Sort an Array

---

# Revision Notes

Key Insight:

This is NOT:

```txt
move values
```

This is:

```txt
divide
↓

sort
↓

merge
```

Mental Model:

```txt
split
↓

split
↓

merge
↓

merge
```
