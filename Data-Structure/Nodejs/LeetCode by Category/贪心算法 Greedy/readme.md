---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
---

- https://leetcode.com/tag/greedy/

---

### 贪心算法 : 本质是选择每一阶段的局部最优，从而达到全局最优

- 贪心策略，如果不可行，可能需要动态规划
- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md

- Typically, backtracking is used to enumerate all possible solutions for a problem, in a trial-fail-and-fallback strategy.

---

# 数学证明有如下两种方法：

- 数学归纳法
- 反证法

---

# 贪心一般解题步骤 分为如下四步：

- https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.md#%E8%B4%AA%E5%BF%83%E4%B8%80%E8%88%AC%E8%A7%A3%E9%A2%98%E6%AD%A5%E9%AA%A4
- 将问题分解为若干个子问题
- 找出适合的贪心策略
- 求解每一个子问题的最优解
- 将局部最优解堆叠成全局最优解

---

# 实现框架

- https://www.cnblogs.com/yifanrensheng/p/13771879.html

```js
从问题的某一初始解出发：

while (朝给定总目标前进一步)

{

利用可行的决策，求出可行解的一个解元素。

}

由所有解元素组合成问题的一个可行解；
```

---

# 贪心 vs 动态规划比较

- 3.1 相同点
  - 都是一种推导算法
  - 都是分解成子问题来求解，都需要具有最优子结构
- 3.2 不同点
  - `贪心算法`和`动态规划`相比，它既不看前面（也就是说它不需要从前面的状态转移过来），也不看后面（无后效性，后面的选择不会对前面的选择有影响），`因此贪心算法时间复杂度一般是线性的，空间复杂度是常数级别的。`
  - `贪心算法`的每一次操作都对结果产生直接影响，而`动态规划`则不是。`贪心算法`对每个子问题的解决方案都做出选择，`不能回退`；
  - `动态规划`则会根据以前的选择结果对当前进行选择，`有回退功能`。
  - `动态规划`主要运用于二维（也可以一维）问题，而`贪心`一般是处理一维问题。
  - `动态规划`因为要使用子问题顺序结果，因此一般是自底向上，`贪心算法`没有相关要求。`
