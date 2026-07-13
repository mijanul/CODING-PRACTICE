# Palindrome Number

## Problem

Given an integer `x`, return:

```txt
true
```

if `x` is a palindrome.

Otherwise return:

```txt
false
```

A palindrome reads the same forward and backward.

---

## Examples

### Example 1

Input:

```txt
x = 121
```

Output:

```txt
true
```

Explanation:

```txt
121
```

reads the same from left to right and right to left.

---

### Example 2

Input:

```txt
x = -121
```

Output:

```txt
false
```

Explanation:

```txt
-121
```

becomes:

```txt
121-
```

when reversed.

They are not the same.

---

### Example 3

Input:

```txt
x = 10
```

Output:

```txt
false
```

Explanation:

Reversed number:

```txt
01
```

which is not equal to:

```txt
10
```

---

## Approach — Reverse Number

A palindrome number remains the same after reversing its digits.

Instead of converting the number into a string, reverse the digits mathematically.

Finally, compare the reversed number with the original number.

If they are equal, the number is a palindrome.

---

## Steps

1. If the number is negative, return `false`.
2. Store the original number.
3. Reverse the digits using modulo and division.
4. Compare the reversed number with the original.
5. Return the result.

---

## Dry Run

Input:

```txt
x = 121
```

Reverse:

```txt
121

↓

1

↓

12

↓

121
```

Compare:

```txt
121 == 121
```

Answer:

```txt
true
```

---

## Complexity Analysis

### Time Complexity

```txt
O(log₁₀ n)
```

Each digit is processed once.

### Space Complexity

```txt
O(1)
```

---

## Pattern

- Math
- Reverse Number
- Digit Manipulation

---

## Related Problems

### Math

- Plus One
- Most Expensive Item That Cannot Be Bought
- Factorial

### Number Manipulation

- Reverse Integer
- Happy Number

### Similar Thinking

- [Valid Palindrome](../../strings/valid-palindrome/)
- [Reverse String](../../strings/reverse-string/)

---

## Notes

- Negative numbers are never palindromes.
- Numbers ending with `0` (except `0` itself) cannot be palindromes.
- The interview-preferred solution avoids string conversion.
- Reverse the number using modulo (`%`) and integer division.
- Great introductory problem for digit manipulation.
