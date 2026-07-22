# Plus One

## Problem

You are given a large integer represented as an array of digits, where each element contains a single digit.

The digits are ordered from most significant to least significant.

Increment the integer by one and return the resulting array of digits.

---

## Examples

### Example 1

Input:

```text
digits = [1,2,3]
```

Output:

```text
[1,2,4]
```

Explanation:

```
123 + 1 = 124
```

---

### Example 2

Input:

```text
digits = [4,3,2,1]
```

Output:

```text
[4,3,2,2]
```

Explanation:

```
4321 + 1 = 4322
```

---

### Example 3

Input:

```text
digits = [9]
```

Output:

```text
[1,0]
```

Explanation:

```
9 + 1 = 10
```

---

## Approach — Carry Propagation

Start from the last digit because adding one affects the least significant digit first.

- If the current digit is less than `9`, simply increase it by `1` and return the array.
- If the current digit is `9`, it becomes `0` and generates a carry to the previous digit.
- Continue propagating the carry until:
  - a digit less than `9` is found, or
  - all digits become `0`.

If every digit was `9`, create a new array with a leading `1`.

---

## Steps

1. Traverse the array from right to left.
2. If the current digit is less than `9`:
   - Increment it.
   - Return the array.
3. Otherwise:
   - Set the digit to `0`.
   - Continue to the previous digit.
4. If all digits become `0`, create a new array with:
   - `1` as the first digit.
   - Remaining digits as `0`.
5. Return the new array.

---

## Dry Run

Input:

```text
digits = [1,2,9]
```

Process:

```
[1,2,9]

↓

9 becomes 0

↓

carry to 2

↓

2 becomes 3
```

Result:

```text
[1,3,0]
```

---

Input:

```text
digits = [9,9,9]
```

Process:

```
[9,9,9]

↓

[9,9,0]

↓

[9,0,0]

↓

[0,0,0]

↓

Create new array
```

Result:

```text
[1,0,0,0]
```

---

## Complexity Analysis

### Time Complexity

```text
O(n)
```

In the worst case, every digit is visited once.

### Space Complexity

```text
O(1)
```

If the input array can be modified in place.

If a new array is required (e.g., `[9,9,9]`), the output itself uses `O(n)` space, which is not counted as extra auxiliary space.

---

## Pattern

- Math
- Carry Propagation

---

## Related Problems

### Math

- Palindrome Number
- Happy Number
- Ugly Number
- Factorial

### Number Manipulation

- Add Binary
- Add Strings
- Multiply Strings

---

## Notes

- Start processing from the least significant digit (rightmost).
- A carry is generated only when a digit is `9`.
- Stop as soon as a digit can be incremented.
- If every digit is `9`, the answer has one extra digit.
- This problem is a classic example of **carry propagation** in arithmetic.
