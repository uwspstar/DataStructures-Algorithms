// 213. House Robber II
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/
{
    //arranged in a circle
    //dp[i][j] : maximum amount of money you can rob
    //if rob first one : i = 0 -> i = n - 2
    //if not rob first one : i = 1 -> i = n - 1

    var rob = function (nums) {
        if (nums.length === 0) return 0;
        if (nums.length < 2) return nums[0];
        if (nums.length === 2) return Math.max(...nums);

        let res = 0;
        let N = nums.length;
        let dp = [...Array(N)].map(x => []);

        //case 1 rob first one
        dp[0][1] = nums[0];
        dp[0][0] = 0;

        for (let i = 1; i < N - 1; i++) {
            dp[i][1] = dp[i - 1][0] + nums[i]; // rob curr
            dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]); //not rob
            res = Math.max(res, dp[i][1], dp[i][0])
        }

        //case 2 not rob first one
        dp[1][1] = nums[1];
        dp[1][0] = 0;

        for (let i = 2; i < N; i++) {
            dp[i][1] = dp[i - 1][0] + nums[i]; // rob curr
            dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]); //not rob
            res = Math.max(res, dp[i][1], dp[i][0]);
        }

        return res;
    };
    // Paint House (M)
    // Paint Fence (M)
    // Non-negative Integers without Consecutive Ones (H)
    // Coin Path (H)
}