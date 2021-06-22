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
- 我们在遍历nums时，可以获得当前的前缀和，当前的前缀和减去k，可以得到我们需要找的另一个前缀和的大小，如果hash之中有记录，我们只需要获取hash中的记录，就可以知道有多少区间和等于k了。
