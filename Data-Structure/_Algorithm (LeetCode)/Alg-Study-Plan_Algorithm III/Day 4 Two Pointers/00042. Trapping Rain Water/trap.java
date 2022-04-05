//42. Trapping Rain Water
/*
基本思路
PS：这道题在《算法小抄》 的第 364 页。

对于任意一个位置 i，能够装的水为：

Copy
water[i] = min(
           # 左边最高的柱子
           max(height[0..i]),
           # 右边最高的柱子
           max(height[i..end])
        ) - height[i]

关键在于，如何能够快速计算出某一个位置左侧所有柱子的最大高度和右侧所有柱子的最大高度。

这道题的解法比较多样，可以预计算数组，可以用 双指技巧，可以用单调栈技巧，这里就说一个最简单的解法，用预计算的方式求解，优化暴力解法的时间复杂度，更多解法请看详细题解。

详细题解：手把手搞懂接雨水问题的多种解法

标签：数组双指针

解法代码
*/
class Solution {
    public int trap(int[] height) {
        if (height.length == 0) {
            return 0;
        }
        int n = height.length;
        int res = 0;
        // 数组充当备忘录
        int[] l_max = new int[n];
        int[] r_max = new int[n];

        // 初始化 base case
        l_max[0] = height[0];
        r_max[n - 1] = height[n - 1];

        // 从左向右计算 l_max
        for (int i = 1; i < n; i++)
            l_max[i] = Math.max(height[i], l_max[i - 1]);

        // 从右向左计算 r_max
        for (int i = n - 2; i >= 0; i--)
            r_max[i] = Math.max(height[i], r_max[i + 1]);

        // 计算答案
        for (int i = 1; i < n - 1; i++)
            res += Math.min(l_max[i], r_max[i]) - height[i];

        return res;
    }
}
