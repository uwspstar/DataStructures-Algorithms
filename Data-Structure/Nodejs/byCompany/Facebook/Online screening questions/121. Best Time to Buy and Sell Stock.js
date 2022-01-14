//121. Best Time to Buy and Sell Stock
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4] Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1] Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
{
    var maxProfit = function (arr) {
        if (arr.length < 2) return 0;
        let maxProfit = 0;
        let maxCurr = 0;
        //[7,1,5,3,6,4]
        for (let i = arr.length - 1; i >= 0; i--) {
            let curr = arr[i];
            maxCurr = Math.max(maxCurr, curr);
            maxProfit = Math.max(maxProfit, maxCurr - curr);
        }
        return maxProfit;
    };
    //Best Time to Buy and Sell Stock III
    //Best Time to Buy and Sell Stock IV
    //Best Time to Buy and Sell Stock with Cooldown
}