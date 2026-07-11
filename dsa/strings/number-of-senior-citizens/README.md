# Number of Senior Citizens

## Problem

You are given an array of strings:

```txt
details[]
```

Each string contains information about a passenger in the following format:

```txt
XXXXXXXXXXGAACC
```

Where:

- First 10 characters → Phone Number
- Next 1 character → Gender
- Next 2 characters → Age
- Last 2 characters → Seat Number

Return the number of passengers whose age is **strictly greater than 60**.

---

## Examples

### Example 1

Input:

```txt
details = [
"7868190130M7522",
"5303914400F9211",
"9273338290F4010"
]
```

Output:

```txt
2
```

Explanation:

Passenger ages:

```txt
75 ✓
92 ✓
40 ✗
```

There are:

```txt
2
```

senior citizens.

---

### Example 2

Input:

```txt
details = [
"1313579440F2036",
"2921522980M5644"
]
```

Output:

```txt
0
```

Explanation:

Passenger ages:

```txt
20 ✗
56 ✗
```

No passenger is older than 60.

---

## Approach — String Parsing

Each passenger's age is always stored at the same position in the string.

For every passenger:

- Extract the age.
- Convert it to a number.
- If the age is greater than `60`, increase the answer.

No complex algorithm is needed.

---

## Steps

1. Traverse the `details` array.
2. Extract the age from each string.
3. Convert it to an integer.
4. If age > 60, increment the count.
5. Return the total count.

---

## Dry Run

Input:

```txt
[
"7868190130M7522",
"5303914400F9211",
"9273338290F4010"
]
```

Extract ages:

```txt
75 ✓
92 ✓
40 ✗
```

Count:

```txt
2
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

where `n` is the number of passengers.

### Space Complexity

```txt
O(1)
```

---

## Pattern

- String Parsing
- String Traversal
- Simulation

---

## Related Problems

### Strings

- [Find the Index of the First Occurrence in a String](../find-the-index-of-the-first-occurrence-in-a-string/)
- [Valid Anagram](../valid-anagram/)
- [Reverse String](../reverse-string/)

### Parsing

- Decode String
- [Encode and Decode Strings](../encode-and-decode-strings/)

### Similar Thinking

- Fizz Buzz
- Baseball Game

---

## Notes

- The age is always stored at a fixed position.
- Compare only the age field.
- Age must be **strictly greater than 60**.
- No sorting or hashing is required.
- Simple string manipulation problem.
- Good beginner practice for parsing formatted strings.
