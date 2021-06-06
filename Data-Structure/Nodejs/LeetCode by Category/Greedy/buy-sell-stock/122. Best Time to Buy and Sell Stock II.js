//122. Best Time to Buy and Sell Stock II
/*
ou are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Input: prices = [7,1,5,3,6,4] Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Input: prices = [1,2,3,4,5] Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Input: prices = [7,6,4,3,1] Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.
*/
//多次买卖一支股票
{
    // if only can sell more than once
    var maxProfit = function (arr) {
        let maxProfit = 0;
        let preMax = arr[0];

        for (let i = 1; i < arr.length; i++) {
            let curr = arr[i];
            if (preMax > curr) {
                preMax = curr;
            } else if (preMax < curr) {
                maxProfit += curr - preMax;
                preMax = 0;
            }
            if (preMax === 0) {
                preMax = curr;
            }
        }
        return maxProfit;
    };
    //Best Time to Buy and Sell Stock III
    //Best Time to Buy and Sell Stock IV
    //Best Time to Buy and Sell Stock with Cooldown
    //Best Time to Buy and Sell Stock with Transaction Fee
}
{
    var maxProfit = function (prices) {
        let result = 0
        for (let i = 1; i < prices.length; i++) {
            result += Math.max(prices[i] - prices[i - 1], 0)
        }
        return result
    };
}
{
    // if only can sell once
    var maxProfit = function (arr) {
        let maxProfit = 0;
        let maxCurrent = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            let curr = arr[i];
            maxCurrent = Math.max(maxCurrent, curr);
            maxProfit = Math.max(maxProfit, maxCurrent - curr);
        }
        return maxProfit;
    };
}