---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---
# basic
`O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)`

---
- Eliminating coefficients/constants (coefficient rule)
- Adding up Big-Os (sum rule)
- Multiplying Big-Os (product rule)
- Determining the polynomial of the Big-O notation by looking at loops (polynomial rule)
---
# Masters Theorem in Algorithms 
- https://www.youtube.com/watch?v=OynWkEj0S-s&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=27
- `T(n) = aT(n/b) + f(n)`
---
- https://www.youtube.com/watch?v=oBt53YbR9Kk&t=891s
```js
//t: O(2^n)  
//s: O(n) max stack depth of n
const dib = (n) =>{
    if (n<=1) return;
    dib(n - 1);
    dib(n - 1);
}
```
---
```js
// O(dib) <=O(fib) <=O(lob)
//t: O(2^n)  
//s: O(n) max stack depth of n
const fib = (n) =>{
    if (n<=2) return 1;
    return fib(n - 1) + fib(n - 2)
}
```
```js
//t: O(2^n)  
//s: O(n) max stack depth of n
const lib = (n) =>{
    if (n<=1) return;
    lib(n - 2);
    lib(n - 2);
}
```
---
# Factorial
- https://en.wikipedia.org/wiki/Factorial