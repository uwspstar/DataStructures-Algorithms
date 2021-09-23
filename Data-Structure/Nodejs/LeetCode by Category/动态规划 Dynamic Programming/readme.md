---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# 动态规划 : 某一问题有很多重叠子问题

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md

# 动态规划 3 steps

1. 确定 dp 数组以及下标的含义
2. 确定递推公式
3. dp 数组如何初始化

---

# 动态规划 vs 贪心

- 动规是由前一个状态推导出来的，而贪心是局部最优的 : `动态规划`中每一个状态一定是由上一个状态推导出来的，这一点就区分于`贪心`，贪心没有状态推导，而是从局部直接选最优的，

---

# Masters Theorem in Algorithms

- https://www.youtube.com/watch?v=OynWkEj0S-s&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=27
- `T(n) = aT(n/b) + f(n)`

---

# debug : 把 dp 数组打印出来

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

---

### 暴力的解法是指数级别的时间复杂度。进而才需要动态规划的解法来进行优化！

---

- https://leetcode-cn.com/problems/longest-arithmetic-subsequence/solution/dong-tai-gui-hua-jie-jue-zi-shu-zu-wen-t-zatn/
- 对于数组问题，如果寻找`连续`子数组，可以使用`双指针法`或`滑动窗口`等方法，但是对于`非连续子数组`，最好使用`动态规划`。

---

### 背包问题 : 01背包和完全背包就够用
- leetcode上没有纯01背包的问题，都是01背包应用方面的题目，也就是需要转化为01背包问题
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.md
- 暴力的解法回溯法