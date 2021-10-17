//121. Best Time to Buy and Sell Stock
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
}
{
    //dp[i] : maximize your cash at ith day

    var maxProfit = function (prices) {
        const len = prices.length;
        // 创建dp数组
        const dp = new Array(len).fill([0, 0]);

        // dp数组初始化
        dp[0] = [-prices[0], 0];

        for (let i = 1; i < len; i++) {
            // 更新dp[i]
            dp[i] = [
                Math.max(dp[i - 1][0], -prices[i]), 
                Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
            ];
        }
        return dp[len - 1][1]; // sell
    }
}