# Unique Email Addresses

## Problem

You are given an array of email addresses.

Each email consists of:

- A local name
- An '@' symbol
- A domain name

For the **local name**:

- Ignore every `.` (dot).
- Ignore everything after the first `+`.

The **domain name** remains unchanged.

Return the number of unique email addresses after applying these rules.

---

## Examples

### Example 1

Input:

```txt
emails = [
"test.email+alex@leetcode.com",
"test.e.mail+bob.cathy@leetcode.com",
"testemail+david@lee.tcode.com"
]
```

Output:

```txt
2
```

Explanation:

Normalize the emails:

```txt
testemail@leetcode.com
testemail@leetcode.com
testemail@lee.tcode.com
```

Unique emails:

```txt
2
```

---

### Example 2

Input:

```txt
emails = [
"a@leetcode.com",
"b@leetcode.com",
"c@leetcode.com"
]
```

Output:

```txt
3
```

---

## Approach — String Parsing + Hash Set

Each email must first be converted into its normalized form.

For every email:

1. Split into local name and domain.
2. Remove every `.` from the local name.
3. Ignore everything after the first `+`.
4. Combine the normalized local name with the original domain.
5. Insert the normalized email into a Hash Set.

Since a Hash Set stores only unique values, its final size is the answer.

---

## Steps

1. Traverse every email.
2. Split into local name and domain.
3. Normalize the local name.
4. Reconstruct the email.
5. Insert into a Hash Set.
6. Return the size of the set.

---

## Dry Run

Input:

```txt
[
"test.email+alex@leetcode.com",
"test.e.mail+bob.cathy@leetcode.com",
"testemail+david@lee.tcode.com"
]
```

Normalize:

```txt
testemail@leetcode.com

testemail@leetcode.com

testemail@lee.tcode.com
```

Hash Set:

```txt
{
testemail@leetcode.com,
testemail@lee.tcode.com
}
```

Answer:

```txt
2
```

---

## Complexity Analysis

### Time Complexity

```txt
O(n × m)
```

where:

- `n` = number of emails
- `m` = average length of an email

### Space Complexity

```txt
O(n)
```

For storing normalized emails in the Hash Set.

---

## Pattern

- Hashing
- Hash Set
- String Parsing
- Array Traversal

---

## Related Problems

### Hashing

- Contains Duplicate
- Intersection of Two Arrays
- Top K Frequent Elements
- Kth Distinct String in an Array

### String Parsing

- Number of Senior Citizens
- Encode and Decode Strings

### Similar Thinking

- Valid Anagram
- Group Anagrams

---

## Notes

- Only the local name is modified.
- The domain name is never changed.
- Ignore everything after the first `+`.
- Remove every `.` from the local name.
- Hash Set automatically removes duplicate normalized emails.
- Great beginner problem combining string parsing with hashing.
