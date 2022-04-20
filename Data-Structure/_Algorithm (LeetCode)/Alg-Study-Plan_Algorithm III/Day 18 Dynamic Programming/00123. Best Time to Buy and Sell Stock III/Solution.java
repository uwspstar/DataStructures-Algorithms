/*
https://mp.weixin.qq.com/s/wIxflO1dvXzDlibhEcENcQ

基本思路
提示：股票系列问题有共通性，但难度较大，初次接触此类问题的话很难看懂下述思路，建议直接看 详细题解。

股票系列问题状态定义：

Copy
dp[i][k][0 or 1]
0 <= i <= n - 1, 1 <= k <= K
n 为天数，大 K 为交易数的上限，0 和 1 代表是否持有股票。
股票系列问题通用状态转移方程和 base case：

Copy
状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

base case：
dp[-1][...][0] = dp[...][0][0] = 0
dp[-1][...][1] = dp[...][0][1] = -infinity
之前的几道股票问题，状态 k 都被化简掉了，这道题无法化简 k 的限制，所以就要加一层 for 循环穷举这个状态。

详细思路解析和空间复杂度优化的解法见详细题解。

详细题解：一个方法团灭 LeetCode 股票买卖问题

标签：动态规划，三维动态规划

解法代码
*/
class Solution {
    public int maxProfit(int[] prices) {
        int max_k = 2, n = prices.length;
        int[][][] dp = new int[n][max_k + 1][2];
        for (int i = 0; i < n; i++) {
            for (int k = max_k; k >= 1; k--) {
                if (i - 1 == -1) {
                    // 处理 base case
                    dp[i][k][0] = 0;
                    dp[i][k][1] = -prices[i];
                    continue;
                }
                dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
                dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
            }
        }
        // 穷举了 n × max_k × 2 个状态，正确。
        return dp[n - 1][max_k][0];
    }
}
/*
 * 类似题目：
 * 
 * 121. 买卖股票的最佳时机 🟢
 * 122. 买卖股票的最佳时机 II 🟠
 * 188. 买卖股票的最佳时机 IV 🔴
 * 309. 最佳买卖股票时机含冷冻期 🟠
 * 714. 买卖股票的最佳时机含手续费 🟠
 */