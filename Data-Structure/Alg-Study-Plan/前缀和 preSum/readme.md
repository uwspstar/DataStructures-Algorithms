---
marp: true
---

- https://www.youtube.com/watch?v=-7Dvmu6oxzQ&list=PLbaIOC0vpjNW6V4ZTd5OpURZ6m0mf0G8n&index=11
- https://docs.google.com/presentation/d/14oHMlIK-GXLlADlJIcvPcIx_cHTKWcOv-sOve5L2Aqw/edit#slide=id.p

- https://labuladong.gitee.io/algo/2/21/56/

- https://segmentfault.com/a/1190000025178927

- https://github.com/azl397985856/leetcode/tree/master/thinkings

- https://github.com/changgyhub/leetcode_101/

---

# 前缀和 Prefix Sum

- prefixSum[i] = prefixSum[j + 1] - prefixSum[i]
- 定义 prefixSum[i] = 前 i 个数之和 (index from 0 to i-1) 对于 index from i to j 这一段区间的和 = prefixSum[j + 1] - prefixSum[i]

---

### Subarray O(n^2) 连续 子数组

- A subarray is a contiguous subsequence of the array.

### SubSequence O(2^n) 子字符串 不连续

---

# PreSum 模版

```js
var NumArray = function (nums) {
  const getPreSum = (arr) => {
    let N = nums.length;
    let preSum = new Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
      preSum[i + 1] = preSum[i] + nums[i];
    }
    return preSum;
  };
  this.preSum = getPreSum(nums);
};

NumArray.prototype.sumRange = function (i, j) {
  return this.preSum[j + 1] - this.preSum[i];
};
```

---

# 最大子数组

- 要使得 prefixSum[j + 1] - prefixSum[i] 最大 对于给定 j, 找到 i from 0 to j 之间的“最小”的 prefixSum[i] 算法中经常会出现找最大值时要通过最小值去找

---

# 如果一道题你可以用暴力解决出来，而且题目恰好有连续的限制， 那么滑动窗口和前缀和等技巧就应该被想到。

# 滑动窗口适合在题目要求连续的情况下使用， 而前缀和也是如此。

---

- 在`连续问题`中，滑动窗口, 前缀和 二者对于优化时间复杂度有着很重要的意义。
- `一维的前缀和`，`二维的积分图`，都是把每个位置之前的一维线段或二维矩形预先存储，方便 加速计算。

- 如果需要对前缀和或积分图的值做寻址，则要存在哈希表里;如果要对每个位置记录 前缀和或积分图的值，则可以储存到一维或二维数组里，也常常伴随着动态规划。

---

- 2Sum 题目求出了 2 个数字的和，diff = target - nums[i], 通过简单的变化我们可以同样做到求出 2 数只差等于 target.
- diff = nums[i] - target, 而两数只差的概念在 prefix sum 中就是 subarray 的 sum。这里我们就过渡到了 prefix sum

---

- 滑动窗口 (90%)
- 时间复杂度要求 O(n) (80%是双指针)
- 要求原地操作，只可以使用交换，不能使用额外空间 (80%)
- 有子数组 subarray /子字符串 substring 的关键词 (50%)
- 有回文 Palindrome 关键词(50%)

---

- LintCode 1844: 求和 = k 的最短的子数组
- LintCode 1507: 求和 >=k 最短的子数组
- LintCode 41: Maximum Subarray
- LintCode 545: Top K Largest Number II

---
