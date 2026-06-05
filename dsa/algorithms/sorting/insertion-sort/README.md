# Insertion Sort

## Difficulty

Easy

---

# Definition

Insertion Sort builds a sorted array:

```txt
left → right
```

One element at a time.

For each position:

```txt
pick current
↓

insert
↓

correct position
```

---

# Mental Model

Think:

```txt
playing cards
```

Take one card.

Insert into correct place.

Example:

```txt
5 2 4 1

↓

2 5 4 1

↓

2 4 5 1

↓

1 2 4 5
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

Start:

```txt
[5]
```

Already sorted.

---

Insert:

```txt
2
```

Result:

```txt
[2,5]
```

---

Insert:

```txt
4
```

Result:

```txt
[2,4,5]
```

---

Insert:

```txt
1
```

Result:

```txt
[1,2,4,5]
```

---

# Algorithm

For each element:

1. Store current value
2. Move larger values right
3. Insert current

Repeat.

---

# Visualization

Input:

```txt
[5,2,4,1]
```

Step 1

```txt
[5]
```

↓

Insert:

```txt
2
```

↓

```txt
[2,5]
```

↓

Insert:

```txt
4
```

↓

```txt
[2,4,5]
```

↓

Insert:

```txt
1
```

↓

```txt
[1,2,4,5]
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

- insert into sorted region
- shifting
- almost sorted input

Question:

```txt
Can sorted
portion grow?
```

↓

```txt
Insertion Sort
```

---

# Why It Works

At every step:

```txt
left side
is sorted
```

Insert current element.

Continue.

Example:

```txt
[5]

↓

[2,5]

↓

[2,4,5]

↓

[1,2,4,5]
```

---

# Bubble vs Selection vs Insertion

Bubble:

```txt
swap repeatedly
```

Selection:

```txt
find minimum
```

Insertion:

```txt
shift
insert
```

---

# Optimization

Insertion Sort becomes efficient when:

```txt
array
≈
already sorted
```

Best case:

```txt
O(n)
```

---

# Common Mistakes

- Swapping instead of shifting
- Starting at index 0
- Forgetting insertion step

Wrong:

```txt
swap every move
```

Correct:

```txt
shift
↓

insert
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
[1,2,3]

→ [1,2,3]
```

---

```txt
[3,2,1]

→ [1,2,3]
```

---

# Related Algorithms

- Bubble Sort
- Selection Sort
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
take value
↓

move bigger values
↓

insert
```

Mental Model:

```txt
pick
↓

shift
↓

insert
```
