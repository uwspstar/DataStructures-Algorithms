---
marp: true
---

# Math

- `Math.floor` - rounds down to nearest integer
- `Math.round` - rounds to nearest integer
- `Math.ceil` - rounds up to nearest integer

```js
Math.floor(0.9); // 0  down to nearest integer
Math.floor(1.1); // 1  down to nearest integer

Math.round(0.49); // 0 rounds to nearest integer
Math.round(0.5); // 1 rounds to nearest integer
Math.round(2.9); // 3 rounds to nearest integer

Math.ceil(0.1); // 1 rounds up to nearest integer
Math.ceil(0.9); // 1 rounds up to nearest integer
Math.ceil(21); // 21 rounds up to nearest integer
Math.ceil(21.01); // 22 rounds up to nearest integer
```

---

# Number.EPSILON

- Number.EPSILON returns the smallest interval between two representable numbers.
- Math.abs(x - y) < Number.EPSILON;

---

# Maximums and Minimums and Infinity

- `Number.MAX_SAFE_INTEGER` returns the largest integer.
- `Number.MIN_SAFE_INTEGER` returns the smallest integer.
- `Number.MAX_VALUE` returns the largest floating-point number possible.
- `Number.MIN_VALUE` returns the smallest floating-point number possible.
- The only thing greater than `Number.MAX_VALUE` is `Infinity` , and the only thing smaller than `Number.MAX_SAFE_INTEGER` is `- Infinity`.

`Infinity > Number.MAX_SAFE_INTEGER; // true`
`-Infinity < Number.MAX_SAFE_INTEGER - // true`
`Infinity - 32323323 == -Infinity - 1; // true`

---

# size

-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
---

# Random
- Math.random() returns a float between 0 and 1.