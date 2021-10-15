var rob = function (nums) {

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    let dp = [];
    let N = nums.length - 1;
    for (let i = 0; i <= N; i++) {
        dp.push([]);
    }

    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for (let i = 1; i <= N; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]); //not rob
        dp[i][1] = dp[i - 1][0] + nums[i]; //rob
    }

    return Math.max(dp[N][0], dp[N][1]);
};