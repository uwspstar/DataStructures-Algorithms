/*
基本思路
PS：这道题在《算法小抄》 的第 96 页。

dp 数组的定义：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。

那么 dp 数组中最大的那个值就是最长的递增子序列长度。

详细题解：从最长递增子序列学会如何推状态转移方程

标签：动态规划，子序列，一维动态规划

解法代码
*/
class Solution {
    public int lengthOfLIS(int[] nums) {
        // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
        int[] dp = new int[nums.length];

        // base case：dp 数组全都初始化为 1
        Arrays.fill(dp, 1);

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j])
                    dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        int res = 0;
        for (int i = 0; i < dp.length; i++) {
            res = Math.max(res, dp[i]);
        }
        return res;
    }
}