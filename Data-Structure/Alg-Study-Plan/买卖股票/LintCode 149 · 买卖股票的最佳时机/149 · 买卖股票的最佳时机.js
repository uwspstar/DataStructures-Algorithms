// 149 · 买卖股票的最佳时机
/*
假设有一个数组，它的第i个元素是一支给定的股票在第i天的价格。如果你最多只允许完成一次交易(例如,一次买卖股票),设计一个算法来找出最大利润。

输入: [3, 2, 3, 1, 2]
输出: 1
说明：你可以在第三天买入，第四天卖出，利润是 2 - 1 = 1

输入: [1, 2, 3, 4, 5]
输出: 4
说明：你可以在第0天买入，第四天卖出，利润是 5 - 1 = 4
*/

// 最多只允许完成一次交易
export class Solution {
    /**
     * @param prices: Given an integer array
     * @return: Maximum profit
     */
    maxProfit(prices) {
        // write your code here
        let preMin = Infinity;
        let N = prices.length;
        let ans = 0;
        for (let i = 0; i < N; i++) {
            preMin = Math.min(preMin, prices[i]);
            ans = Math.max(ans, prices[i] - preMin);
        }
        return ans;
    }
}