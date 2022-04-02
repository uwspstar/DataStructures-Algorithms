/*
基本思路
怎么样让两个字符串相同？直接全删成空串，肯定是相等了，但是题目又要求删除次数要尽可能少。

那怎么删？就是删成最长公共子序列嘛，换句话说，只要计算出最长公共子序列的长度，就能算出最少的删除次数了。

前文 最长公共子序列问题 讲了计算最长公共子序列的方法，这里就不展开了。

详细题解：详解最长公共子序列问题，秒杀三道动态规划题目

标签：子序列，动态规划，二维动态规划

解法代码
*/
class Solution {
    public int minDistance(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        // 复用前文计算 lcs 长度的函数
        int lcs = longestCommonSubsequence(s1, s2);
        return m - lcs + n - lcs;
    }

    // 计算最长公共子序列的长度
    int longestCommonSubsequence(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        // 定义：s1[0..i-1] 和 s2[0..j-1] 的 lcs 长度为 dp[i][j]
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // 现在 i 和 j 从 1 开始，所以要减一
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    // s1[i-1] 和 s2[j-1] 必然在 lcs 中
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    // s1[i-1] 和 s2[j-1] 至少有一个不在 lcs 中
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }
        return dp[m][n];
    }
}
/*
类似题目：

1143. 最长公共子序列（中等）
712. 两个字符串的最小 ASCII 删除和（中等）
*/