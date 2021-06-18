---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# 连续子数组 vs 非连续子数组

- https://leetcode-cn.com/problems/longest-arithmetic-subsequence/solution/dong-tai-gui-hua-jie-jue-zi-shu-zu-wen-t-zatn/
- 对于数组问题，如果寻找连续子数组，可以使用双指针法或滑动窗口等方法，但是对于非连续子数组，最好使用动态规划。
- 对于需要知道历史信息的遍历过程，我们使用哈希表作为暂存器，达到快速检索的功能。

---

# Array : sorted or not

- remove duplicate : think about sort first

---

### In-place Array operations : reduce space complexity

- interviewer often expects you to minimize the time and space complexity of your implementation. In-place Array operations help to reduce space complexity, and so are a class of techniques that pretty much everybody encounters regularly in interviews.

---

# two pointers : fast / slow, left / right

- 905. Sort Array By Parity

# backward

- 1299. Replace Elements with Greatest Element on Right Side

---

# Circular Array

---

# sorted array : O(NlogN)

- merge sort (firefox)
- quick sort (chrome)

---

# Array Transformation

- 26. Remove Duplicates from Sorted Array
- 283. Move Zeroes

---

# Strassens Matrix Multiplication (divide and conquer)

- https://www.youtube.com/watch?v=0oJyNmEbS4w&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=38
