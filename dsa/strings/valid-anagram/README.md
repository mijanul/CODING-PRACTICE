# Valid Anagram

## Difficulty

Easy

---

## Problem Statement

Given two strings `s` and `t`, return:

```txt
true
```

if `t` is an anagram of `s`.

Otherwise return:

```txt
false
```

An anagram is formed by rearranging the letters of another word using all original characters exactly once.

---

## Examples

### Example 1

Input:

```txt
s = "racecar"
t = "carrace"
```

Output:

```txt
true
```

---

### Example 2

Input:

```txt
s = "jar"
t = "jam"
```

Output:

```txt
false
```

---

## Constraints

```txt
1 <= s.length, t.length <= 50000
s and t consist of lowercase English letters
```

---

## Concepts

- Strings
- Hash Map
- Frequency Counting

---

## Patterns

Related Pattern Notes:

```txt
../../patterns/hashing/README.md
```

---

## Recognition Pattern

Common hints:

- rearrange characters
- same frequency
- compare occurrences
- identical counts

Pattern:

```txt
Count → Compare
```

---

## Brute Force Approach

### Idea

Sort both strings and compare.

Example:

```txt
listen
silent
```

↓

```txt
eilnst
eilnst
```

### Complexity

Time:

```txt
O(n log n)
```

Space:

```txt
O(n)
```

---

## Optimized Approach (Expected Interview Solution)

### Idea

Count character frequencies.

If both strings have identical frequency maps:

```txt
return true
```

Otherwise:

```txt
return false
```

Example:

```txt
aab

a → 2
b → 1
```

Both strings must match exactly.

### Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(1)
```

(assuming fixed lowercase alphabet)

---

## Optimization Insight

Sorting:

```txt
O(n log n)
```

Frequency counting:

```txt
O(n)
```

Use hashing to avoid unnecessary sorting.

---

## Early Exit Optimization

If lengths differ:

```js
if (s.length !== t.length)
```

Immediately:

```txt
return false
```

No further processing needed.

---

## Common Mistakes

- Forgetting length check
- Sorting unnecessarily
- Missing repeated characters
- Using Set instead of frequency count
- Comparing unique characters instead of counts

Incorrect:

```txt
abc
abb
```

Same unique letters ≠ same frequencies

---

## Why Frequency Counting Works

Two strings are anagrams only if:

```txt
Every character appears
same number of times
```

Example:

```txt
listen
silent
```

↓

```txt
l → 1
i → 1
s → 1
t → 1
e → 1
n → 1
```

Matches.

---

## Related Problems

### Similar

- Group Anagrams
- Find All Anagrams in a String

### Advanced

- Permutation in String

---

## Revision Notes

### Key Insight

This problem is not about ordering.

It is about:

```txt
frequency equality
```

Mental model:

```txt
Count
 ↓
Compare
 ↓
Return
```

For interviews:

1. Mention sorting solution
2. Improve to frequency counting
3. Discuss complexity tradeoff
