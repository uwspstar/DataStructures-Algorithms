---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# 前缀和 : nums array only

- 指一个数组的某下标之前的所有数组元素的和（包含其自身）。前缀和分为一维前缀和，以及二维前缀和。前缀和是一种重要的预处理，能够降低算法的时间复杂度.
- 拥有前缀和数组后, 我们可以在 O(1)的时间复杂度内求出区间和。

- https://juejin.cn/post/6944913393627168798

---

### 前缀和

- https://leetcode-cn.com/problems/fruit-into-baskets/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhu-3/
- 如果题目恰好有连续的限制， 那么滑动窗口和前缀和等技巧就应该被想到。
- 前缀和是一种重要的预处理，能大大降低查询的时间复杂度。我们可以简单理解为“数列的前 n 项的和”。这个概念其实很容易理解，即一个数组中，第 n 位存储的是数组前 n 个数字的和。
- 对 `[1,2,3,4,5,6]` 来说，其前缀和可以是 `pre=[1,3,6,10,15,21]`。我们可以使用公式 `pre[𝑖]=pre[𝑖−1]+nums[𝑖]`得到每一位前缀和的值，从而通过前缀和进行相应的计算和解题。

---

- 一维前缀和的公式：`sum[i] = sum[i-1] + arr[i]` ;
- sum 是前缀和数组, arr 是内容数组。拥有前缀和数组后, 我们可以在 O(1)的时间复杂度内求出区间和。
- `[i, j]`的区间和公式: interval `[i, j] = sum[j] - sum[i - 1]`

---

- 和为 K 的子数组
- continuous subarrays

---

# 构建前缀和数组

```js
const preSum = []; // 构建前缀和数组

for (let i = 0; i < nums.length; i++) {
  const a = nums[i];
  const b = preSum[i - 1] === undefined ? 0 : preSum[i - 1];
  preSum[i] = a + b;
}

//作者：dyhtps
//链接：https://juejin.cn/post/6944913393627168798
```

---

### 和为 K 的子数组 : 使用前缀和加哈希的解法

- 我们在遍历 nums 时，可以获得当前的前缀和，当前的前缀和减去 k，可以得到我们需要找的另一个前缀和的大小，如果 hash 之中有记录，我们只需要获取 hash 中的记录，就可以知道有多少区间和等于 k 了。
