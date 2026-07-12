# Kth Distinct String in an Array

## Problem

You are given an array of strings `arr` and an integer `k`.

A **distinct** string is a string that appears **exactly once** in the array.

Return the **kth distinct** string in the order in which it appears.

If there are fewer than `k` distinct strings, return:

```txt
""
```

(an empty string).

---

## Examples

### Example 1

Input:

```txt
arr = ["d","b","c","b","c","a"]
k = 2
```

Output:

```txt
"a"
```

Explanation:

String frequencies:

```txt
d → 1
b → 2
c → 2
a → 1
```

Distinct strings in order:

```txt
["d", "a"]
```

The 2nd distinct string is:

```txt
"a"
```

---

### Example 2

Input:

```txt
arr = ["aaa","aa","a"]
k = 1
```

Output:

```txt
"aaa"
```

Explanation:

All strings appear exactly once.

The first distinct string is:

```txt
"aaa"
```

---

### Example 3

Input:

```txt
arr = ["a","b","a"]
k = 3
```

Output:

```txt
""
```

Explanation:

Only one distinct string exists:

```txt
["b"]
```

There is no 3rd distinct string.

---

## Approach — Hash Map

We need to know how many times each string appears.

A Hash Map allows us to count the frequency of every string in one pass.

After building the frequency map, traverse the array again.

Whenever a string has a frequency of `1`, it is distinct.

Count distinct strings until reaching the `k`th one.

---

## Steps

1. Build a frequency map.
2. Traverse the array again.
3. Check if the current string appears exactly once.
4. Count distinct strings.
5. Return the `k`th distinct string.
6. If fewer than `k` distinct strings exist, return an empty string.

---

## Dry Run

Input:

```txt
arr = ["d","b","c","b","c","a"]
k = 2
```

Frequency Map:

```txt
d → 1
b → 2
c → 2
a → 1
```

Traverse:

```txt
d → Distinct (1st)

b → Skip

c → Skip

a → Distinct (2nd)
```

Answer:

```txt
"a"
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n)
```

One pass to count frequencies and one pass to find the answer.

### Space Complexity

```txt
O(n)
```

For the frequency map.

---

## Pattern

- Hashing
- Hash Map
- String Traversal

---

## Related Problems

### Hashing

- [Valid Anagram](../../strings/valid-anagram/)
- [Group Anagrams](../../strings/group-anagrams/)
- [Top K Frequent Elements](../top-k-frequent-elements/)
- [Contains Duplicate](../contains-duplicate/)

### Strings

- [Find All Anagrams in a String](../../strings/find-all-anagrams-in-a-string/)
- [Permutation in String](../../strings/permutation-in-string/)
- [Encode and Decode Strings](../../strings/encode-and-decode-strings/)

### Similar Thinking

- First Unique Character in a String
- Intersection of Two Arrays

---

## Notes

- A distinct string appears **exactly once**.
- Preserve the original order while searching for the answer.
- Two passes are sufficient:
  - First pass → count frequencies.
  - Second pass → locate the `k`th distinct string.

- Hash Map is the natural choice for frequency counting.
- Common interview problem for practicing Hash Maps and frequency counting.
