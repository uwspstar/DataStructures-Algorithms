---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

### 最长窗口模板

```
for(枚举选择)
    右边界
    while(不符合条件)
        左边界
    更新结果
```

### 滑动窗口

- https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md
- https://leetcode-cn.com/problems/fruit-into-baskets/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhu-3/

---

### 从类型上说主要有：

- https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md
- 固定窗口大小
- 窗口大小不固定，求解最大的满足条件的窗口
- 窗口大小不固定，求解最小的满足条件的窗口

---

### 前缀和

- https://leetcode-cn.com/problems/fruit-into-baskets/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhu-3/
- 如果题目恰好有连续的限制， 那么滑动窗口和前缀和等技巧就应该被想到。
- 前缀和是一种重要的预处理，能大大降低查询的时间复杂度。我们可以简单理解为“数列的前 n 项的和”。这个概念其实很容易理解，即一个数组中，第 n 位存储的是数组前 n 个数字的和。
- 对 [1,2,3,4,5,6] 来说，其前缀和可以是 pre=[1,3,6,10,15,21]。我们可以使用公式 pre[𝑖]=pre[𝑖−1]+nums[𝑖]得到每一位前缀和的值，从而通过前缀和进行相应的计算和解题。

---

467. 环绕字符串中唯一的子字符串(中等)
468. 区间子数组个数(中等)
469. 水果成篮(中等)
470. K 个不同整数的子数组（困难）
471. 航班预订统计(中等)

---

### Sliding Window

- https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed
- The problem input is a `linear data structure` such as a `linked list`, `array`, or `string`
- You’re asked to find the `longest/shortest substring`, `subarray`, or a desired value
- `specific window size` of a given `array` or `linked list`, such as finding the longest subarray containing all 1s.

---

### Common problems you use the sliding window pattern with:

- Maximum sum subarray of size ‘K’ (easy)
- Longest substring with ‘K’ distinct characters (medium)
- String anagrams (hard)
---
### Sliding Window
- https://www.educative.io/courses/grokking-the-coding-interview

