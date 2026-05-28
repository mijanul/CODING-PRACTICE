# Two Pointers Pattern

The Two Pointers pattern is a common problem-solving technique where two pointers are used to traverse a data structure efficiently.

This pattern is frequently used to reduce time complexity from O(n²) to O(n).

---

# Common Use Cases

- Sorted arrays
- Palindrome checking
- Pair problems
- Subarray problems
- Linked list traversal
- Partitioning problems

---

# Types of Two Pointers

## 1. Opposite Direction Pointers

Pointers start from opposite ends and move toward each other.

### Example Problems

- [Valid Palindrome](../../strings/valid-palindrome/)
- Two Sum II
- Container With Most Water

### Example

```txt
left →          ← right
[1, 2, 3, 4, 5]
```

---

## 2. Same Direction Pointers

Both pointers move in the same direction.

Usually:

- slow & fast pointers
- window expansion/contraction

### Example Problems

- Remove Duplicates
- Move Zeroes
- Linked List Cycle

---

# Recognition Signals

Common hints that suggest Two Pointers:

- sorted array
- pair finding
- palindrome
- reverse traversal
- in-place modification
- contiguous range problems

---

# Common Problems

## Arrays / Strings

- Two Sum II
- [Valid Palindrome](../../strings/valid-palindrome/)
- Container With Most Water
- 3Sum
- Remove Duplicates From Sorted Array
- Move Zeroes

## Linked List

- Middle Of Linked List
- Linked List Cycle
- Remove Nth Node From End

---

# Complexity

Typical Complexity:

- Time: O(n)
- Space: O(1)

---

# Advantages

- Optimized traversal
- Reduced nested loops
- Constant extra space
- Cleaner logic for pair problems

---

# Common Mistakes

- Incorrect pointer movement
- Infinite loops
- Off-by-one errors
- Forgetting sorted array assumptions
- Moving wrong pointer after condition

---

# Important Variations

## Fast & Slow Pointer

Used in:

- linked list cycle detection
- middle node problems

---

## Sliding Window

A specialized variation of two pointers.

Window expands/shrinks dynamically.

---

# Related Patterns

- Sliding Window
- Fast & Slow Pointer
- [Binary Search](../../algorithms/searching/binary-search/)
- Prefix Sum

---

# Problem Structure Suggestion

```txt
two-pointers/
└── README.md/
```

---

# Revision Notes

Focus on:

- pointer movement logic
- loop conditions
- edge cases
- when to move left vs right pointer
- sorted vs unsorted assumptions
