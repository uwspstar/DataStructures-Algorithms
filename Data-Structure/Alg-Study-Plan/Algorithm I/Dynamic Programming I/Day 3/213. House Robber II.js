//213. House Robber II

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/
{
    //dp[i][j] : maximum amount of money you can rob
    //if rob first one : i = 0 ~ i = n - 2
    //if not rob first one : i = 1 ~ i = n - 1

    var rob = function (nums) {
        if (nums.length === 0) return 0;
        if (nums.length < 2) return nums[0];
        if (nums.length === 2) return Math.max(...nums);

        let res = 0;
        let N = nums.length;
        let dp = [];
        for (let i = 0; i < N; i++) {
            dp.push([]);
        }

        //case 1 rob first one
        dp[0][1] = nums[0];
        dp[0][0] = 0;

        for (let i = 1; i < N - 1; i++) {
            dp[i][1] = dp[i - 1][0] + nums[i];
            dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
            res = Math.max(res, dp[i][1], dp[i][0])
            console.log('res1=', res, dp);
        }


        //case 2 not rob first one
        dp[1][1] = nums[1];
        dp[1][0] = 0;

        for (let i = 2; i < N; i++) {
            dp[i][1] = dp[i - 1][0] + nums[i];
            dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0]);
            res = Math.max(res, dp[i][1], dp[i][0]);
            console.log('res2=', res, dp)
        }

        return res;
    };
}
{
    function helper(arr) {
        let prev = 0;
        let curr = 0;
        let temp;

        for (let num of arr) {
            temp = curr;
            curr = Math.max(num + prev, curr);
            prev = temp;
        }
        return curr;
    }

    function rob(nums) {
        if (nums.length === 1) return nums[0];
        let rob1 = nums.slice(0, nums.length - 1);
        let rob2 = nums.slice(1);

        rob1 = helper(rob1);
        rob2 = helper(rob2);

        return rob1 >= rob2 ? rob1 : rob2;
    };
}