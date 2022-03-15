---
marp: true
---

# 前缀和

- https://www.youtube.com/watch?v=-7Dvmu6oxzQ&list=PLbaIOC0vpjNW6V4ZTd5OpURZ6m0mf0G8n&index=11
- https://docs.google.com/presentation/d/14oHMlIK-GXLlADlJIcvPcIx_cHTKWcOv-sOve5L2Aqw/edit#slide=id.p

- https://labuladong.gitee.io/algo/2/21/56/

- https://segmentfault.com/a/1190000025178927

- https://github.com/azl397985856/leetcode/tree/master/thinkings

- https://github.com/changgyhub/leetcode_101/

---

# 如果一道题你可以用暴力解决出来，而且题目恰好有连续的限制， 那么滑动窗口和前缀和等技巧就应该被想到。
# 滑动窗口适合在题目要求连续的情况下使用， 而前缀和也是如此。

- 在`连续问题`中，滑动窗口, 前缀和 二者对于优化时间复杂度有着很重要的意义。
- `一维的前缀和`，`二维的积分图`，都是把每个位置之前的一维线段或二维矩形预先存储，方便 加速计算。

- 如果需要对前缀和或积分图的值做寻址，则要存在哈希表里;如果要对每个位置记录 前缀和或积分图的值，则可以储存到一维或二维数组里，也常常伴随着动态规划。

---
- 2Sum 题目求出了2个数字的和，diff = target - nums[i], 通过简单的变化我们可以同样做到求出2数只差等于target. 
- diff =  nums[i] - target, 而两数只差的概念在prefix sum中就是subarray的sum。这里我们就过渡到了prefix sum

- 滑动窗口 (90%)
- 时间复杂度要求 O(n) (80%是双指针)
- 要求原地操作，只可以使用交换，不能使用额外空间 (80%) 
- 有子数组 subarray /子字符串 substring 的关键词 (50%) 
- 有回文 Palindrome 关键词(50%)