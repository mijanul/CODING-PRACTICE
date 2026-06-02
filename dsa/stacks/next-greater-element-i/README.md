# Examples

## Example 1

Input:

```txt
nums1 = [4,1,2]
nums2 = [1,3,4,2]
```

Output:

```txt
[-1,3,-1]
```

Explanation:

The next greater element for each value of `nums1`:

- `4` is located in:

```txt
nums2 = [1,3,4,2]
```

No greater value exists to its right.

Result:

```txt
-1
```

---

- `1` is located in:

```txt
nums2 = [1,3,4,2]
```

First greater value to the right:

```txt
3
```

Result:

```txt
3
```

---

- `2` is located in:

```txt
nums2 = [1,3,4,2]
```

No greater value exists to the right.

Result:

```txt
-1
```

Final:

```txt
[-1,3,-1]
```

---

## Example 2

Input:

```txt
nums1 = [2,4]
nums2 = [1,2,3,4]
```

Output:

```txt
[3,-1]
```

Explanation:

The next greater element for each value of `nums1`:

- `2` is located in:

```txt
nums2 = [1,2,3,4]
```

First greater value to the right:

```txt
3
```

Result:

```txt
3
```

---

- `4` is located in:

```txt
nums2 = [1,2,3,4]
```

No greater value exists to the right.

Result:

```txt
-1
```

Final:

```txt
[3,-1]
```
