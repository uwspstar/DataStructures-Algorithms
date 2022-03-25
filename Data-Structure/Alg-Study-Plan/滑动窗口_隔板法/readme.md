---
marp: true
theme: default
size: 16:9
---

# 滑动窗口

- https://labuladong.gitee.io/algo/2/21/60/
- https://docs.google.com/presentation/d/1lGdnMBo_1w50NAPqVMzTTlnlgGBXUxzfHpIToGs2cgE/edit#slide=id.gb533e9b64a_0_17

- 滑动窗口算法可以用以解决数组/字符串的子元素问题，它可以将嵌套的循环问题，转换为单循环问题，降低时间复杂度。

- 如何识别滑动窗口？
- 连续的元素，比如 string, subarray, LinkedList
- min, max, longest, shortest, key word

---

# 滑动窗口基本题型

- https://docs.google.com/presentation/d/1lGdnMBo_1w50NAPqVMzTTlnlgGBXUxzfHpIToGs2cgE/edit#slide=id.gb533e9b64a_0_22

- Easy, size fixed
- 窗口长度确定，比如 max sum of size = k
- Median, size 可变，单限制条件
- 比如找到 subarray sum 比目标值大一点点
- Median, size 可变，双限制条件
- 比如 longest substring with distinct character
- Hard, size fix, 单限制条件
- 比如 sliding window maximum
- 双子段问题:`隔板法`

---

# LeetCode 101

- LeetCode 101:和你一起你轻松刷题(C++) LeetCode 101: A LeetCode Grinding Guide (C++ Version) 作者:高畅 Chang Gao
- github.com/changgyhub/leetcode_101

# int j = 0;

```js
let j =0
for (int i = 0; i < n; i++) {
// 不满足则循环到满足搭配为止
    while (j < n && i 到 j 之间不满足条件) { // j < n important
        j += 1;
    }
    if (i 到 j 之间满足条件) {
        处理 i，j 这次搭配
    }
}
```
