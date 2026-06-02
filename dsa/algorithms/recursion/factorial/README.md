# Factorial

## Difficulty

Easy

---

# Definition

Factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

Notation:

```txt
n!
```

Formula:

```txt
n! = n × (n − 1)!
```

Base Case:

```txt
0! = 1
1! = 1
```

---

# Examples

## Example 1

Input:

```txt
5
```

Output:

```txt
120
```

Explanation:

```txt
5 × 4 × 3 × 2 × 1
= 120
```

---

## Example 2

Input:

```txt
3
```

Output:

```txt
6
```

Explanation:

```txt
3 × 2 × 1
= 6
```

---

## Example 3

Input:

```txt
0
```

Output:

```txt
1
```

---

# Concepts

- Recursion
- Base Case
- Call Stack
- Mathematical Recurrence

---

# Recognition Pattern

You may consider recursion when:

- current problem depends on smaller version of itself
- repeated self-calls occur
- natural divide into subproblems

Factorial follows:

```txt
Problem(n)
↓
Problem(n−1)
↓
Problem(n−2)
```

---

# Iterative Approach

### Idea

Multiply numbers using loop.

Example:

```txt
5
↓
1×2×3×4×5
```

### Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(1)
```

---

# Recursive Approach (Learning Approach)

### Idea

Break into smaller problem.

Formula:

```txt
factorial(n)
=
n × factorial(n−1)
```

Stop recursion at:

```txt
n <= 1
```

### Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(n)
```

(call stack)

---

# Recursion Visualization

Example:

```txt
factorial(5)
```

Execution:

```txt
5 × factorial(4)
↓
5 × 4 × factorial(3)
↓
5 × 4 × 3 × factorial(2)
↓
5 × 4 × 3 × 2 × factorial(1)
↓
5 × 4 × 3 × 2 × 1
```

Result:

```txt
120
```

---

# Call Stack Visualization

```txt
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

Unwind:

```txt
1
↓
2
↓
6
↓
24
↓
120
```

---

# Common Mistakes

- Missing base case
- Infinite recursion
- Returning wrong value
- Stack overflow for large input
- Forgetting `0! = 1`

Wrong:

```js
function factorial(n) {
  return n * factorial(n - 1);
}
```

No stopping condition.

---

# Edge Cases

```txt
factorial(0) → 1
factorial(1) → 1
factorial(2) → 2
```

---

# Related Algorithms

- Fibonacci
- Power Function
- Recursion Tree
- Backtracking

---

# Real Uses

Factorial appears in:

- Permutations
- Combinations
- Probability
- Dynamic Programming
- Recursion learning

---

# Revision Notes

Key Insight:

Factorial is not about multiplication.

Factorial is used to understand:

```txt
Base Case
↓
Recursive Call
↓
Call Stack
↓
Return Phase
```

Mental Model:

```txt
Go Down
↓
Hit Base Case
↓
Come Back
```
