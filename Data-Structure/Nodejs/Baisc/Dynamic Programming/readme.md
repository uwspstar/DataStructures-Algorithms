---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# Masters Theorem in Algorithms 
- https://www.youtube.com/watch?v=OynWkEj0S-s&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=27
- `T(n) = aT(n/b) + f(n)`
---
### Dynamic Programming
- https://www.youtube.com/watch?v=oBt53YbR9Kk&t=891s
```
//t: O(2^n)  
//s: O(n) max stack depth of n
const dib = (n) =>{
    if (n<=1) return;
    dib(n - 1);
    dib(n - 1);
}
```
---
```
// O(dib) <=O(fib) <=O(lob)
//t: O(2^n)  
//s: O(n) max stack depth of n
const fib = (n) =>{
    if (n<=2) return 1;
    return fib(n - 1) + fib(n - 2)
}
```
```
//t: O(2^n)  
//s: O(n) max stack depth of n
const lib = (n) =>{
    if (n<=1) return;
    lib(n - 2);
    lib(n - 2);
}
```
- canSum : Decision Problem
- howSum : Combinatorics Problem
- bestSum : Optimization Problem
--- 
### 动态规划
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md

### 动态规划问题，我将拆解为如下五步曲，这五步都搞清楚了，才能说把动态规划真的掌握了！
- 确定dp数组（dp table）以及下标的含义
- 确定递推公式
- dp数组如何初始化
- 确定遍历顺序
- 举例推导dp数组