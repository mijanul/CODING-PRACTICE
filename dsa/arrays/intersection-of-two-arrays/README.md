# Intersection of Two Arrays

## Problem

You are given two integer arrays:

```txt
nums1
nums2
```

Return an array containing the unique elements that appear in both arrays.

The order of the output does not matter.

---

## Examples

### Example 1

Input:

```txt
nums1 = [1,2,2,1]
nums2 = [2,2]
```

Output:

```txt
[2]
```

Explanation:

The only common unique element is:

```txt
2
```

---

### Example 2

Input:

```txt
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
```

Output:

```txt
[4,9]
```

Explanation:

Both:

```txt
4
9
```

appear in both arrays.

---

## Approach — Hash Set

We need to find the common elements between two arrays while keeping only unique values.

A Hash Set provides:

- O(1) lookup
- Automatic duplicate removal

Store all elements of one array in a set.

Traverse the second array.

If an element exists in the set, add it to the answer set.

Finally, convert the answer set into an array.

---

## Steps

1. Create a Hash Set from `nums1`.
2. Create an empty result set.
3. Traverse `nums2`.
4. If the current number exists in the first set, add it to the result set.
5. Convert the result set into an array.

---

## Dry Run

Input:

```txt
nums1 = [1,2,2,1]
nums2 = [2,2]
```

Set:

```txt
{1,2}
```

Traverse:

```txt
2 ✓

2 ✓
```

Result Set:

```txt
{2}
```

Answer:

```txt
[2]
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n + m)
```

where:

- `n` = length of `nums1`
- `m` = length of `nums2`

### Space Complexity

```txt
O(n)
```

---

## Pattern

- Hashing
- Hash Set
- Array Traversal

---

## Related Problems

### Hashing

- [Contains Duplicate](../../arrays/contains-duplicate/)
- [Contains Duplicate II](../../arrays/contains-duplicate-ii/)
- [Valid Anagram](../../strings/valid-anagram/)
- [Group Anagrams](../../strings/group-anagrams/)
- [Top K Frequent Elements](../../arrays/top-k-frequent-elements/)

### Set Operations

- Intersection of Two Arrays II
- [Longest Consecutive Sequence](../longest-consecutive-sequence/)

### Similar Thinking

- [Two Sum](../../arrays/2-sum/)
- [Find All Anagrams in a String](../../strings//find-all-anagrams-in-a-string/)

---

## Notes

- Only unique common elements should be returned.
- Hash Set automatically removes duplicates.
- Order of the result does not matter.
- Using nested loops results in O(n × m) time.
- One of the simplest Hash Set interview problems.
