# Group Anagrams

## Difficulty

Medium

---

# Problem Statement

Given an array of strings:

```txt
strs[]
```

Group the strings into groups where:

```txt
each group
contains anagrams
```

Return groups in any order.

An anagram is formed by rearranging letters using exactly the same characters.

---

# Examples

## Example 1

Input:

```txt
["eat","tea","tan","ate","nat","bat"]
```

Output:

```txt
[
 ["bat"],
 ["nat","tan"],
 ["ate","eat","tea"]
]
```

Explanation:

```txt
eat
tea
ate
```

same characters.

---

## Example 2

Input:

```txt
[""]
```

Output:

```txt
[
 [""]
]
```

---

## Example 3

Input:

```txt
["a"]
```

Output:

```txt
[
 ["a"]
]
```

---

# Constraints

```txt
1 <= strs.length <= 10000

0 <= strs[i].length <= 100

strs[i]
contains lowercase English letters
```

---

# Concepts

- Strings
- Hashing
- Hash Map
- Frequency Counting

---

# Pattern

Related Pattern:

```txt
../../patterns/hashing/README.md
```

Recognition:

```txt
Group
+
Frequency
+
Lookup
```

---

# Recognition Pattern

Common hints:

- group similar values
- same frequency
- reorder characters
- clustering

Question:

```txt
Can multiple values
share one key?
```

↓

```txt
Use Hashing
```

---

# Brute Force Approach

Compare every string with every other string.

Check:

```txt
isAnagram()
```

Complexity:

Time:

```txt
O(n² × k log k)
```

Space:

```txt
O(n)
```

Too slow.

---

# Expected Interview Solution

## Hash Map + Canonical Key

### Idea

Convert each word into:

```txt
same representation
```

Use representation as key.

Example:

```txt
eat
tea
ate
```

↓

```txt
aet
```

Store:

```txt
{
 "aet":
 ["eat","tea","ate"]
}
```

---

# Two Popular Keys

## Sorting Key

Convert:

```txt
eat
```

↓

```txt
aet
```

Complexity:

```txt
O(n × k log k)
```

Easy interview solution.

---

## Frequency Key

Convert:

```txt
eat
```

↓

```txt
a1e1t1
```

Complexity:

```txt
O(n × k)
```

Better optimization.

---

# Visualization

Input:

```txt
["eat","tea","tan","ate"]
```

Build:

```txt
Map

"aet"
↓

["eat"]

↓

["eat","tea"]

↓

["eat","tea","ate"]
```

Result:

```txt
[
["eat","tea","ate"],
["tan"]
]
```

---

# Why Hashing Works

Words that are anagrams produce:

```txt
same key
```

Example:

```txt
eat
tea
ate
```

↓

```txt
aet
```

Same key.

Same group.

---

# Complexity

Sorting Key:

Time:

```txt
O(n × k log k)
```

Space:

```txt
O(n × k)
```

---

Frequency Key:

Time:

```txt
O(n × k)
```

Space:

```txt
O(n × k)
```

---

# Common Mistakes

- Using array instead of map
- Forgetting duplicate groups
- Comparing all pairs
- Building unstable key

Wrong:

```txt
eat
=
tea
```

Compare directly.

Correct:

```txt
eat
↓

aet
```

---

# Edge Cases

```txt
[""]

→ [[""]]
```

---

```txt
["a"]

→ [["a"]]
```

---

```txt
["ab","ba"]

→ [["ab","ba"]]
```

---

# Related Problems

Strings:

- Valid Anagram

Hashing:

- Two Sum
- Top K Frequent Elements

---

# Revision Notes

Key Insight:

This is NOT:

```txt
compare strings
```

This is:

```txt
convert
↓

group
```

Mental Model:

```txt
word
↓

key
↓

bucket
```

Whenever you see:

```txt
group
cluster
same frequency
```

Think:

```txt
Hash Map
```
