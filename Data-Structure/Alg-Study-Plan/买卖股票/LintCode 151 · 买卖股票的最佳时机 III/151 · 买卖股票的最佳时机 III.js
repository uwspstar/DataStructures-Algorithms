// 151 · 买卖股票的最佳时机 III
/*
假设你有一个数组，它的第i个元素是一支给定的股票在第i天的价格。设计一个算法来找到最大的利润。你最多可以完成 两笔 交易。

输入 : [4,4,6,1,1,4,2,5]
输出 : 6
*/

// 最多可以完成 两笔 交易
// 双子段问题:隔板法
export class Solution {
    /**
     * @param prices: Given an integer array
     * @return: Maximum profit
     */
    getMaxProfit (prices, start, end) {
        let preMin = Infinity;
        let ans = 0;
        for (let i = start; i < end; i++) {
            preMin = Math.min(preMin, prices[i]);
            ans = Math.max(ans, prices[i] - preMin);
        }
        return ans;
    }
    maxProfit(prices) {
        // write your code here
        let N = prices.length;
        let ans = 0;
        for (let i = 0; i < N; i++) {
            let left = this.getMaxProfit(prices, 0, i);
            let right = this.getMaxProfit(prices, i, N);
            let currMax = left + right;
            ans = Math.max(ans, currMax)
        }
        return ans; 
    }
}