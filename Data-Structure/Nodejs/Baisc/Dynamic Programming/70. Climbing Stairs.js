//70. Climbing Stairs
/*
ou are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

Input: n = 2 Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps 

Input: n = 3 Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/*
One can reach i^{th} step in one of the two ways:

Taking a single step from (i-1)^{th} step.

Taking a step of 22 from (i-2)^{th} step.

So, the total number of ways to reach i^{th} is equal to sum of ways of reaching (i-1)^{th}
th step and ways of reaching (i-2)^{th} step.

Let dp[i]dp[i] denotes the number of ways to reach on i th
  step: dp[i]=dp[i-1]+dp[i-2]
*/
/*
https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.md

从dp[i]的定义可以看出，dp[i] 可以有两个方向推出来。

首先是dp[i - 1]，上i-1层楼梯，有dp[i - 1]种方法，那么再一步跳一个台阶不就是dp[i]了么。

还有就是dp[i - 2]，上i-2层楼梯，有dp[i - 2]种方法，那么再一步跳两个台阶不就是dp[i]了么。

那么dp[i]就是 dp[i - 1]与dp[i - 2]之和！

所以dp[i] = dp[i - 1] + dp[i - 2] 。

本题其实就不应该讨论dp[0]的初始化！

我相信dp[1] = 1，dp[2] = 2，这个初始化大家应该都没有争议的。
不考虑dp[0]如果初始化，只初始化dp[1] = 1，dp[2] = 2，然后从i = 3开始递推，这样才符合dp[i]的定义。


*/
{//一个严谨的思考过程，应该是初始化dp[1] = 1，dp[2] = 2，然后i从3开始遍历，代码如下
    var climbStairs = function (n) {
        let dp = [];
        dp[1] = 1;
        dp[2] = 2;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    //Min Cost Climbing Stairs
    //N-th Tribonacci Number
}
{
    var climbStairs = function (n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (n === 3) return 3;
        let dp1 = 1;
        let dp2 = 1;
        for (let i = 2; i <= n; i++) {
            let tmp = dp2;
            dp2 = dp1 + dp2;
            dp1 = tmp;
        }
        return dp2;
    };
}
{
    // backTracking is the 2^N, try to avoid to use it
    var climbStairs = function (n) {
        let res = [];
        let path = [];
        let nums = [1, 2]
        const backTracking = (remain) => {
            if (remain === 0) {
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = 0; i < nums.length; i++) {
                    path.push(nums[i]);
                    backTracking(remain - nums[i]);
                    path.pop();
                }
            }
        }
        backTracking(n);
        return res;
    }
    console.log(climbStairs(2));
    console.log(climbStairs(3));
    console.log(climbStairs(100));//allocation failure scavenge might not succeed
}