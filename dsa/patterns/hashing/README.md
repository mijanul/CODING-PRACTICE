# Hashing Pattern

Hashing is a problem-solving pattern where we use a hash-based structure to store and retrieve information efficiently.

Most commonly:

- Object
- Map
- Set
- Frequency Counter

Hashing is usually used to reduce repeated searching and improve lookup speed.

---

# Why Use Hashing?

Without hashing:

```txt
Search → O(n)
```

With hashing:

```txt
Search → O(1)
```

(average case)

This often reduces solutions from:

```txt
O(n²)
↓
O(n)
```

---

# When To Recognize Hashing

Common hints:

- find duplicates
- count occurrences
- fast lookup
- frequency comparison
- unique elements
- previously seen values
- optimize nested loops

If you think:

```txt
"I am repeatedly searching"
```

Hashing is usually a good candidate.

---

# Common Data Structures

## Object

Good for:

- frequency counting
- simple key-value lookup

Example:

```js
{
  a: 2,
  b: 3
}
```

---

## Map

Good for:

- dynamic keys
- insertion order
- non-string keys

Example:

```js
map.set("a", 2);
```

---

## Set

Good for:

- uniqueness
- existence checking

Example:

```js
set.has(value);
```

---

# Common Patterns

## 1. Frequency Counting

Count occurrences.

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
```

Problems:

- [Valid Anagram](../../strings/valid-anagram/)
- Group Anagrams

---

## 2. Seen Before Pattern

Store visited values.

Example:

```txt
Have I seen this before?
```

Problems:

- [Two Sum](../../arrays/2-sum/)
- Contains Duplicate

---

## 3. Lookup Optimization

Replace nested loops.

Example:

```txt
O(n²)
↓
O(n)
```

Problems:

- Two Sum
- Longest Consecutive Sequence

---

# Complexity

Average:

```txt
Insert → O(1)
Lookup → O(1)
Delete → O(1)
```

Worst case:

```txt
O(n)
```

(collision heavy)

---

# Common Problems

## Easy

- [Valid Anagram](../../strings/valid-anagram/)
- [Two Sum](../../arrays/2-sum/)
- Contains Duplicate

---

## Medium

- Group Anagrams
- Top K Frequent Elements
- Longest Consecutive Sequence

---

## Advanced

- LRU Cache
- Design HashMap

---

# Related Problems

## Strings

- [../../strings/valid-anagram](../../strings/valid-anagram/)
- ../../strings/group-anagrams

---

## Arrays

- [../../arrays/two-sum](../../arrays/2-sum/)
- ../../arrays/top-k-frequent-elements

---

# Common Mistakes

- Using array instead of hash lookup
- Forgetting duplicates
- Wrong key generation
- Not checking existence first
- Using Set when frequency count is needed

Wrong:

```txt
Set → frequency
```

Correct:

```txt
Map/Object → frequency
```

---

# Interview Thought Process

Question:

```txt
Can I store previous work?
```

↓

```txt
Yes
```

↓

```txt
Use Hashing
```

Question:

```txt
Can I avoid repeated searching?
```

↓

```txt
Use Hashing
```

---

# Revision Notes

Hashing is NOT a data structure.

Hashing is the technique.

HashMap / Object / Set are tools.

Mental Model:

```txt
Store
 ↓
Lookup
 ↓
Decide
```

---

# Problem Structure

Pattern Folder:

```txt
patterns/
└── hashing/
    └── README.md
```

Actual Problems:

```txt
strings/
arrays/
```

Keep problems in one place.

Use patterns only for revision.
