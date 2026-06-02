# Valid Parentheses

## Difficulty

Easy

---

# Problem Statement

Given a string containing:

```txt
() [] {}
```

Return:

```txt
true
```

if brackets are valid.

Otherwise:

```txt
false
```

Rules:

1. Every opening bracket must close.
2. Order must be correct.
3. Every close must match latest open.

---

# Examples

### Example 1

Input:

```txt
()
```

Output:

```txt
true
```

---

### Example 2

Input:

```txt
()[]{}
```

Output:

```txt
true
```

---

### Example 3

Input:

```txt
(]
```

Output:

```txt
false
```

---

### Example 4

Input:

```txt
([)]
```

Output:

```txt
false
```

---

## Concepts

- Stack
- String Traversal

---

## Recognition Pattern

Common hints:

- matching symbols
- nested structures
- closing depends on latest opening

Pattern:

```txt
Stack
```

---

## Brute Force Idea

Repeatedly remove:

```txt
()
[]
{}
```

until stable.

Not efficient.

---

## Expected Interview Solution

### Idea

Traverse characters.

Rules:

Opening:

```txt
(
[
{
```

↓

Push.

Closing:

```txt
)
]
}
```

↓

Check top.

If mismatch:

```txt
return false
```

At end:

Stack must be empty.

---

# Complexity

Time:

```txt
O(n)
```

Space:

```txt
O(n)
```

---

# Visualization

Example:

```txt
([{}])
```

Process:

```txt
(
↓

[
↓

{

↓

}
POP

↓

]
POP

↓

)
POP
```

Final:

```txt
[]
```

Valid.

---

# Common Mistakes

- Forget final empty check
- Pop empty stack
- Compare wrong bracket
- Push closing brackets

Wrong:

```txt
([)]
```

Because:

```txt
(
[
)
```

Latest opening:

```txt
[
```

Mismatch.

---

# Edge Cases

```txt
"" → true
"(" → false
"]" → false
"((()))" → true
```

---

# Related Problems

- Min Stack
- Daily Temperatures
- Decode String

---

# Revision Notes

Key Insight:

This is NOT a string problem.

This is:

```txt
latest open
↓
first close
```

That is exactly:

```txt
LIFO
```

Stack.
