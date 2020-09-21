/*
You are given an array. Each element represents the price of a stock on that particular day. Calculate and return the maximum profit you can make from buying and selling that stock "only once".

For example: [9, 11, 8, 5, 7, 10] // 5

Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).
*/

const buySellStock = (arr) => {
    if (arr.length < 2) return null
    if (arr.length === 2) return arr[1] > arr[0] ? arr[1] - arr[0] : 0;

    let currentMaxPrice = 0;
    let maxProfit = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentPrice = arr[i];
        currentMaxPrice = Math.max(currentMaxPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentMaxPrice - currentPrice);
    }
    return maxProfit;
}

console.log('buySellStock', buySellStock([9, 11, 8, 5, 7, 10])); //5