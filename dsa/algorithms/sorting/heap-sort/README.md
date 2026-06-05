# Heap Sort

## Time Complexity

- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

## Space Complexity

- O(1)

## Stable

No

## Notes

- Uses Heap data structure (typically Max Heap).
- Builds a heap before sorting begins.
- Repeatedly extracts the maximum element.
- Places largest elements at the end of the array.
- In-place sorting algorithm.
- Guarantees O(n log n) in all cases.
- Does not require additional merge memory.
- Not stable (equal elements may change order).
- Heap construction takes O(n), not O(n log n).
- Performs better than simple O(n²) algorithms for large datasets.
- Usually slower than Quick Sort in practice because of cache behavior.
- Useful when guaranteed worst-case performance is required.
- Commonly related to Priority Queue concepts.
- Good when memory usage must remain low.

## Heap Type

### Max Heap

Used for ascending order.

Rule:

```txt
parent >= children
```

Example:

```txt
10
/ \
8  6
```

---

### Min Heap

Used for descending order.

Rule:

```txt
parent <= children
```

## Heap Sort Flow

```txt
Build Heap
↓

Swap Root ↔ Last

↓

Heapify

↓

Repeat
```

## Why Build Heap Is O(n)

Although heapify can be:

```txt
O(log n)
```

building heap bottom-up gives:

```txt
O(n)
```

Total sorting:

```txt
O(n log n)
```

## Complexity Summary

```txt
Build Heap → O(n)

Extract Max → O(log n)

Repeat n times

↓

O(n log n)
```
