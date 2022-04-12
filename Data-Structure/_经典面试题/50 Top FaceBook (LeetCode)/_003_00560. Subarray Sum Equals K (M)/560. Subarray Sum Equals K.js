//560. Subarray Sum Equals K
// Subarray means : prefixSum, or sliding window
/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

Example 1: Input: nums = [1,1,1], k = 2 Output: 2
Example 2: Input: nums = [1,2,3], k = 3 Output: 2
*/
{
    // Subarray means : prefixSum, or sliding window
    // sum equals k : two sum, hashmap , sum - target
    const subarraySum = (nums, k) => {
        
        // 前缀和出现的次数
        // map : sum2cnt (key: prefixSum 前缀和, val: cnt 该前缀和出现的次数)
        let map = new Map(); 
        map.set(0, 1);
        let sum = 0; // preSum
        let res = 0;
        //currSum - preSum = k; -> preSum = currSum - k; -> map.set(preSum, count);
        for (let num of nums) {
            sum += num; // sum : currSum

            // preSum = currSum - k
            if (map.has(sum - k)) {
                res += map.get(sum - k);
            }

            // same logic as two sum
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
{
    // return the total number of subarrays whose sum equals to k.
    // nums = [1,2,3], k = 3
    // prefixSum = [ 0, 1, 3, 5];
    var subarraySum = function (nums, k) {
        const N = nums.length;
        const prefixSum = [0];
        const map = new Map(); // sum2cnt (key : prefixSum, val : count)
        map.set(0, 1); // sum2cnt
        let res = 0;
        for (let i = 0; i < N; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];

            let key = prefixSum[i + 1] - k;

            if (map.has(key)) {
                res += map.get(key);
            }

            // same logic as two sum
            if (map.has(prefixSum[i + 1])) {
                map.set(prefixSum[i + 1], map.get(prefixSum[i + 1]) + 1);
            } else {
                map.set(prefixSum[i + 1], 1);
            }
        }
        return res;
    };
    // Minimum Operations to Reduce X to Zero (M)
    // K Radius Subarray Averages (M)
    // Maximum Sum Score of Array (M)
}