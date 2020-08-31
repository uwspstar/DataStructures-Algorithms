/*
You are given an array. Each element represents the price of a stock on that particular day. Calculate and return the maximum profit you can make from buying and selling that stock "only once".

For example: [9, 11, 8, 5, 7, 10] // 5

Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).
*/

//O(N^2) : profit = sell - buy
const baySellStockNaive = (arr) => {
    if (arr.length === 0) return null;
    let maxProfit = 0;
    //outer loop arr[i] = buy price
    for (let i = 0; i < arr.length; i++) {
        // inner loop arr[j] = sell price
        for (let j = i + 1; j < arr.length; j++) {
            maxProfit = Math.max(arr[j] - arr[i], maxProfit);
        }
    }
    return maxProfit;
}
//O(N) -- backward loop, so we find highest price only one time
const buySellStock = (arr) => {
    if (arr.length === 0) return null;
    let currentMaxPrice = 0;
    let maxProfit = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        let currentPrice = arr[i];
        currentMaxPrice = Math.max(currentMaxPrice, currentPrice);
        maxProfit = Math.max(maxProfit, currentMaxPrice - currentPrice);
    }
    return maxProfit;
}

console.log(baySellStockNaive([9, 11, 8, 5, 7, 10]));
console.log(buySellStock([9, 11, 8, 5, 7, 10]));