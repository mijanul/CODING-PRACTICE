# Ugly Number

## Problem

An ugly number is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer `n`, return:

```text
true
```

if `n` is an ugly number.

Otherwise, return:

```text
false
```

---

## Examples

### Example 1

Input:

```text
n = 6
```

Output:

```text
true
```

Explanation:

```
6 = 2 × 3
```

Its prime factors are only `2` and `3`.

---

### Example 2

Input:

```text
n = 1
```

Output:

```text
true
```

Explanation:

`1` is considered an ugly number because it has no prime factors.

---

### Example 3

Input:

```text
n = 14
```

Output:

```text
false
```

Explanation:

```
14 = 2 × 7
```

Since `7` is not one of `2`, `3`, or `5`, the number is not ugly.

---

## Approach — Prime Factorization

An ugly number can only be formed using the prime factors `2`, `3`, and `5`.

Repeatedly divide the number by `2`, `3`, and `5` as long as it is divisible.

If, after removing all these factors, the remaining value is `1`, then the number contains no other prime factors and is ugly.

Otherwise, another prime factor exists, so the number is not ugly.

---

## Steps

1. If `n <= 0`, return `false`.
2. While `n` is divisible by `2`, divide it by `2`.
3. While `n` is divisible by `3`, divide it by `3`.
4. While `n` is divisible by `5`, divide it by `5`.
5. If the final value is `1`, return `true`; otherwise, return `false`.

---

## Dry Run

Input:

```text
n = 30
```

Process:

```
30

↓

15   (÷2)

↓

5    (÷3)

↓

1    (÷5)
```

Final value:

```text
1
```

Answer:

```text
true
```

---

Input:

```text
n = 14
```

Process:

```
14

↓

7   (÷2)
```

`7` cannot be divided by `2`, `3`, or `5`.

Final value:

```text
7
```

Answer:

```text
false
```

---

## Complexity Analysis

### Time Complexity

```text
O(log n)
```

Each division reduces the value of `n`, so the number of operations is logarithmic.

### Space Complexity

```text
O(1)
```

Only a few variables are used.

---

## Pattern

- Math
- Prime Factorization

---

## Related Problems

### Math

- [Palindrome Number](../palindrome-number/)
- [Happy Number](../happy-number/)
- Plus One
- Factorial

### Number Theory

- Count Primes
- Power of Two
- Power of Three
- Power of Four

---

## Notes

- Ugly numbers are **positive integers** only.
- `1` is considered an ugly number.
- Remove all factors of `2`, `3`, and `5`.
- If anything other than `1` remains, another prime factor exists.
- This problem is a simple application of **prime factorization**.
