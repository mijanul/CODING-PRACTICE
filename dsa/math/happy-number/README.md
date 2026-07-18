# Happy Number

## Problem

Write an algorithm to determine if a number `n` is happy.

A happy number is defined by the following process:

1. Replace the number with the sum of the squares of its digits.
2. Repeat the process.
3. If the number becomes `1`, it is a happy number.
4. If the process enters a cycle, it is not a happy number.

Return:

```txt
true
```

if `n` is happy, otherwise return:

```txt
false
```

---

## Examples

### Example 1

Input:

```txt
n = 19
```

Output:

```txt
true
```

Explanation:

```txt
19
↓

1² + 9² = 82

↓

8² + 2² = 68

↓

6² + 8² = 100

↓

1² + 0² + 0² = 1
```

Since the process reaches `1`, the number is happy.

---

### Example 2

Input:

```txt
n = 2
```

Output:

```txt
false
```

Explanation:

The process enters a cycle and never reaches `1`.

---

## Approach — Hash Set + Math

Repeatedly compute the sum of the squares of the digits.

If the number becomes:

```txt
1
```

return `true`.

If the same number appears again, a cycle has been detected.

Since the sequence will repeat forever, return `false`.

A Hash Set is used to remember previously seen numbers.

---

## Steps

1. Create an empty Hash Set.
2. While the number is not `1`:
   - If the number already exists in the set, return `false`.
   - Add the number to the set.
   - Replace the number with the sum of the squares of its digits.

3. Return `true`.

---

## Dry Run

Input:

```txt
n = 19
```

Process:

```txt
19

↓

82

↓

68

↓

100

↓

1
```

Answer:

```txt
true
```

---

Input:

```txt
n = 2
```

Process:

```txt
2

↓

4

↓

16

↓

37

↓

58

↓

89

↓

145

↓

42

↓

20

↓

4
```

Cycle detected.

Answer:

```txt
false
```

---

## Complexity Analysis

### Time Complexity

```txt
O(log n)
```

Each iteration processes the digits of the number, and the sequence quickly enters either `1` or a cycle.

### Space Complexity

```txt
O(log n)
```

For storing previously seen numbers.

---

## Pattern

- Hashing
- Math
- Cycle Detection

---

## Related Problems

### Hashing

- [Contains Duplicate](../../arrays/contains-duplicate/)
- [Top K Frequent Elements](../../arrays/top-k-frequent-elements/)
- Kth Distinct String in an Array

### Math

- [Palindrome Number](../palindrome-number/)
- Plus One
- Factorial

### Similar Thinking

- Linked List Cycle
- Find the Duplicate Number

---

## Notes

- The key idea is detecting a repeated number.
- Use a Hash Set to avoid infinite loops.
- Each step computes the sum of the squares of the digits.
- Reaching `1` means the number is happy.
- A repeated value means a cycle has been found.
- Floyd's Cycle Detection (Slow & Fast Pointers) is another valid solution with `O(1)` space.
