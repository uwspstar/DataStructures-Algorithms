---
marp: true
---

# 滑动窗口（Sliding Window）

- https://leetcode.com/problems/frequency-of-the-most-frequent-element/discuss/1175088/C%2B%2B-Maximum-Sliding-Window-Cheatsheet-Template!
- https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md

---

```js
/*
初始化慢指针 i = 0;
初始化 ans;
for (快指针 j in 可迭代集合) {
    更新窗口内信息;
    while (窗口符合题意) {
        更新答案;
        扩展或者收缩窗口;
        慢指针 i 移动;
    }
}
返回 ans;
*/
```

---

```js
/*
初始化慢指针 = 0
初始化 ans

for (快指针 in 可迭代集合) {
    更新窗口内信息
    while (窗口内不符合题意) {
        扩展或者收缩窗口
        慢指针移动
    }
    更新答案
}
返回 ans
*/
```

---

# 209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [nums_l, nums_l+1, ..., nums_r-1, nums_r] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

---

```js
{
  var minSubArrayLen = function (target, A) {
    let i = 0; // 初始化慢指针 i = 0;

    let ans = Infinity; //初始化 ans;

    let sum = 0;

    for (let j = 0; j < A.length; j++) {
      // 快指针 j in 可迭代集合;
      sum += A[j]; // 更新窗口内信息;

      while (sum >= target) {
        // while (窗口内符合题意)
        ans = Math.min(ans, j - i + 1); // 更新答案;

        sum -= A[i]; // 收缩窗口;

        i++; //  慢指针移动;
      }
    }

    //返回 ans
    return ans != Infinity ? ans : 0; // very important
  };
}
```
