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

### 前缀和

- https://leetcode-cn.com/problems/fruit-into-baskets/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhu-3/
- 如果题目恰好有连续的限制， 那么滑动窗口和前缀和等技巧就应该被想到。

467. 环绕字符串中唯一的子字符串(中等)
468. 区间子数组个数(中等)
469. 水果成篮(中等)
470. K 个不同整数的子数组（困难）
471. 航班预订统计(中等)
