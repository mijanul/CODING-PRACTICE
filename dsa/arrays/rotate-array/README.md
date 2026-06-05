# Rotate Array

## Difficulty

Medium

---

# Problem Statement

You are given:

```txt
nums[]
```

Rotate the array to the right by:

```txt
k
```

steps.

Modify:

```txt
nums
```

in-place.

---

# Examples

## Example 1

Input:

```txt
nums = [1,2,3,4,5,6,7]

k = 3
```

Output:

```txt
[5,6,7,1,2,3,4]
```

Explanation:

Rotate:

```txt
[1,2,3,4,5,6,7]

↓

[7,1,2,3,4,5,6]

↓

[6,7,1,2,3,4,5]

↓

[5,6,7,1,2,3,4]
```

---

## Example 2

Input:

```txt
nums = [-1,-100,3,99]

k = 2
```

Output:

```txt
[3,99,-1,-100]
```

Explanation:

```txt
[-1,-100,3,99]

↓

[99,-1,-100,3]

↓

[3,99,-1,-100]
```

---

# Constraints

```txt
1 <= nums.length <= 100000

-2^31 <= nums[i] <= 2^31−1

0 <= k <= 100000
```

---

# Concepts

- Arrays
- In-place Manipulation
- Reversal Technique
- Index Mapping

---

# Recognition Pattern

Common hints:

- rotate
- shift
- circular movement
- modify in-place

Question:

```txt
Can I rearrange
without extra memory?
```

↓

```txt
Reverse
```

---

# Brute Force Approach

Rotate:

```txt
1 step
```

at a time.

Example:

```txt
k = 3
```

Move:

```txt
n
```

elements repeatedly.

Complexity:

```txt
Time → O(n × k)

Space → O(1)
```

Too slow.

---

# Better Approach

## Extra Array

Idea:

Place each element into:

```txt
(i + k) % n
```

Example:

```txt
[1,2,3,4]

k=1
```

Result:

```txt
[4,1,2,3]
```

Complexity:

```txt
Time → O(n)

Space → O(n)
```

---

# Expected Interview Solution

## Reverse Technique

### Step 1

Reverse entire array.

Example:

```txt
[1,2,3,4,5,6,7]

↓

[7,6,5,4,3,2,1]
```

---

### Step 2

Reverse first:

```txt
k
```

elements.

```txt
[5,6,7,4,3,2,1]
```

---

### Step 3

Reverse remaining.

```txt
[5,6,7,1,2,3,4]
```

---

# Why Reverse Works

Original:

```txt
A B
```

Rotate:

```txt
B A
```

Reverse:

```txt
AB

↓

BA
```

without moving repeatedly.

---

# Visualization

Input:

```txt
[1,2,3,4,5,6,7]

k=3
```

Process:

```txt
reverse all

↓

[7,6,5,4,3,2,1]

↓

reverse first 3

↓

[5,6,7,4,3,2,1]

↓

reverse remaining

↓

[5,6,7,1,2,3,4]
```

---

# Important Observation

Always reduce:

```txt
k
```

using:

```txt
k % nums.length
```

Example:

```txt
n = 7

k = 10

↓

3
```

---

# Complexity

Reverse Method:

```txt
Time → O(n)

Space → O(1)
```

---

# Common Mistakes

- Forgetting:

```txt
k % n
```

- Rotating one step repeatedly
- Extra array when in-place required
- Wrong reverse boundaries

Wrong:

```txt
k > n
```

Correct:

```txt
k %= n
```

---

# Edge Cases

```txt
[1]

k=0

→ [1]
```

---

```txt
[1,2]

k=2

→ [1,2]
```

---

```txt
[1,2,3]

k=4

→ [3,1,2]
```

---

# Related Problems

Arrays:

- Move Zeroes
- Product of Array Except Self

Technique:

- Reverse String
- Reverse Linked List

---

# Revision Notes

Key Insight:

This is NOT:

```txt
move values
```

This is:

```txt
change positions
```

Mental Model:

```txt
reverse
↓

split

↓

reverse
```

Whenever you see:

```txt
rotate
circular
shift
```

Think:

```txt
Reverse Technique
```
