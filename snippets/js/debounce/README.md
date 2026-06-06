# Debounce

Debounce delays execution until the user stops triggering an event.

Common use cases:

- search input
- resize events
- API calls
- autocomplete
- form validation

Difference:

```txt
Debounce
→ execute after stop

Throttle
→ execute every interval
```

Files:

```txt
basic.js
→ standard debounce

with-cancel.js
→ debounce + manual cancel

with-leading.js
→ immediate first execution

react-example.tsx
→ React usage
```
