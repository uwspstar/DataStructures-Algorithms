---
marp: true
---

### The 5 String Interview Patterns You Need to Know

- https://www.youtube.com/watch?v=9clnwaqOU2E
- https://www.byte-by-byte.com/strings/
- `256 ASCII code : Using a Length-256 Integer Array`
- `Using 2 Pointers`
- `string math`
- `string comparison`
- `string algorithm`

---

- These characters can be `ASCII` or `Unicode`, depending on how we choose to do our encoding.
- `256 ASCII code` : Since ASCII is only 256 characters, it can be represented by a single byte.
- `A - Z : 65 - 90`
- `a - z : 97 - 122`
- `Unicode`, on the other hand, is larger and more generalized. We have `UTF-8`, `UTF-16`, and even `UTF-32`, each of which specifies the number of bits per character. That gives us a lot of flexibility

---

### Exp:

- the index in the array represents the `ASCII` value of the character and the value at that index represents the count.

- Therefore, if we had the string `"aaabb"`, `arr[97] = 3 and arr[98] = 2.`
- Why do this instead of using a `hashmap`? Simply put, `arrays are a much simpler data structure`. That means that the computer can manipulate them much faster and you will improve the efficiency of your code.

---

- `two pointers`
- `string math`
- `string comparison`
- `string algorithm`

---

### my mistakes

- `toLowerCase()` is not `toLower()`
- `sort is for arr, not for string`
