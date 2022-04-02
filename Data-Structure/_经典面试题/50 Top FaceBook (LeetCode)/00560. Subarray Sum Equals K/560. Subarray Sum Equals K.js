//560. Subarray Sum Equals K
/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

Example 1: Input: nums = [1,1,1], k = 2 Output: 2

Example 2: Input: nums = [1,2,3], k = 3 Output: 2
*/
{
    const subarraySum = (nums, k) => {
        let map = new Map();
        map.set(0, 1);
        let sum = 0; //preSum
        let res = 0;
        //currSum - preSum = k; --> preSum = currSum - k; ->map.set(preSum, count);
        for (let num of nums) {
            sum += num;
            if (map.has(sum - k)) {
                res += map.get(sum - k);
            }
            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1);
            } else {
                map.set(sum, 1);
            }
        }
        return res;
    }
}
{
    const subarraySum = (nums, k) => {
        //currSum - preSum = k; --> preSum = currSum - k; -> map.set(preSum, count);
        let map = new Map();
        map.set(0, 1);
        let res = 0;
        let preSum = [0];
        for (let i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i]; // preSum[i+1] is currSum
            if (map.has(preSum[i + 1] - k)) {
                res += map.get(preSum[i + 1] - k);
            }
            if (map.has(preSum[i + 1])) {
                map.set(preSum[i + 1], map.get(preSum[i + 1]) + 1);
            } else {
                map.set(preSum[i + 1], 1);
            }
        }
        return res;
    }
}