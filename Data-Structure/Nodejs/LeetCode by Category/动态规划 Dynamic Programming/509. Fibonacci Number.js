//1) 确定dp数组以及下标的含义 : dp[i]的定义为：第i个数的斐波那契数值是dp[i]
//2) 确定递推公式 : 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2];
//  从递归公式 dp[i] = dp[i - 1] + dp[i - 2];中可以看出，dp[i]是依赖 dp[i - 1] 和 dp[i - 2]，那么遍历的顺序一定是从前到后遍历的
//3) dp数组如何初始化 : dp[0] = 0;  dp[1] = 1;

{
    //F(0) = 0, F(1) = 1
    //F(n) = F(n - 1) + F(n - 2), for n > 1.

    // 时间复杂度：O(n)
    // 空间复杂度：O(n)

    var fib = function (n) {
        if (n < 2) return n;

        let dp = [];//一维dp数组来保存递归的结果

        dp[0] = 0;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    };
    //Split Array into Fibonacci Sequence
    //Length of Longest Fibonacci Subsequence
    //N-th Tribonacci Number
}
{
    // t : O(n)
    // s : O(1)
    var fib = function (n) {
        if (n < 2) return n;
        let dp = [];//一维dp数组来保存递归的结果
        dp[0] = 0;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            let sum = dp[0] + dp[1];
            dp[0] = dp[1];
            dp[1] = sum;
        }

        return dp[1];
    }

    console.log('fib(10)=', fib(10))
}