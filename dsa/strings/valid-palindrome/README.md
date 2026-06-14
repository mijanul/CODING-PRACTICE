# Valid Palindrome

## Problem Statement

Given a string `s`, return `true` if it is a palindrome, otherwise return `false`.

A palindrome is a string that reads the same forward and backward after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

---

## Examples

### Example 1

```txt
Input: s = "Was it a car or a cat I saw?"

Output: true
```

### Example 2

```txt
Input: s = "tab a cat"

Output: false
```

---

## Constraints

- `1 <= s.length <= 1000`
- `s` consists of printable ASCII characters.

---

# Approach 1: Brute Force

## Idea

1. Convert the string to lowercase.
2. Remove all non-alphanumeric characters.
3. Reverse the cleaned string.
4. Compare the cleaned string with the reversed string.

---

## JavaScript Solution

```javascript
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}
```

---

## Time Complexity

```txt
O(n)
```

## Space Complexity

```txt
O(n)
```

---

# Approach 2: Two Pointers (Optimized)

## Idea

Use two pointers:

- One starting from the left.
- One starting from the right.

Skip non-alphanumeric characters and compare characters directly without creating a new string.

---

## JavaScript Solution

```javascript
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) {
      left++;
    }

    while (left < right && !/[a-z0-9]/i.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```

---

## Time Complexity

```txt
O(n)
```

## Space Complexity

```txt
O(1)
```

---

# Key Concepts

- Two Pointer Technique
- String Manipulation
- Regular Expressions
- Palindrome Checking

---

# Edge Cases

```txt
Input: " "
Output: true
```

```txt
Input: "a"
Output: true
```

```txt
Input: "0P"
Output: false
```

---

# Interview Follow-up Questions

1. Can you solve it without extra space?
2. Why is the two-pointer approach more optimized?
3. How would you handle Unicode characters?
4. What changes if the string is extremely large?

---

# Related Problems

- [Two Sum](../../arrays/two-sum/)
- [Valid Anagram](../valid-anagram/)
- Reverse String
- Longest Palindromic Substring
