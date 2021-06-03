---
marp: true
theme: default
header: 'https://github.com/youngyangyang04/leetcode-master'
footer: 'https://github.com/youngyangyang04/leetcode-master'
paginate: true
size: 16:9
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