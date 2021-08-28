//1235. Maximum Profit in Job Scheduling
/*
你打算利用空闲时间来做兼职工作赚些零花钱。

这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

注意，时间上出现重叠的 2 份工作不能同时进行。

如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。 

输入：startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
输出：120
解释：
我们选出第 1 份和第 4 份工作， 
时间范围是 [1-3]+[3-6]，共获得报酬 120 = 50 + 70。

*/
{
    var jobScheduling = function (startTime, endTime, profit) {
        let jobs = [[0, 0, 0]];

        for (let i = 0; i < startTime.length; i++) {
            jobs.push([startTime[i], endTime[i], profit[i]]);
        }

        // sort
        jobs = jobs.sort(([a1, a2], [b1, b2]) => { return a2 - b2 });

        // DP
        let dp = [0];

        let prev = new Array(jobs.length).fill(0);

        for (let i = 1; i < jobs.length; i++) {
            for (let j = i - 1; j >= 1; j--) {
                if (jobs[j][1] <= jobs[i][0]) {
                    prev[i] = j;
                    break;
                }
            }
        }

        for (let i = 1; i < jobs.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[prev[i]] + jobs[i][2]);
        }

        return dp.pop();
    };
}