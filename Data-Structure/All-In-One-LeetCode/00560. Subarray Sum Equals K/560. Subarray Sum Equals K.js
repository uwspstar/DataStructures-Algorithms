// 560. Subarray Sum Equals K
/*
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
 
// continuous subarrays 
preSum[i] 就是 nums[0..i-1] 的和，如果想求 nums[i..j] 的和，只需要 preSum[j+1] - preSum[i] 即可：
*/
{
    const subarraySum = (nums, k) => {
        let map = new Map();
        map.set(0, 1);
        let sum = 0;
        let res = 0;
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
        let N = nums.length;
        let preSum = [0];
        let map = new Map();
        map.set(0, 1);

        let res = 0;

        for (let i = 0; i < N; i++) {
            let sum = nums[i] + preSum[i];

            preSum.push(sum); // preSum[i + 1];

            let sum_k = sum - k;

            if (map.has(sum_k)) {
                res += map.get(sum_k);
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
/*
const subarraySum = (nums, k) => {
    let N = nums.length;
    let presum = [0];
    let map = new Map();
    map.set(0, 1);
    let res = 0;

    for (let i = 0; i < N; i++) { 
        presum[i + 1] = nums[i] +  presum[i];
        //let sum = nums[i] +  presum[i]; 
        //presum.push(sum); // presum[i + 1];
        //let sum_k = sum - k; 
        let sum_k = presum[i + 1] - k; // 2 sum, hashmap
        
        if (map.has(sum_k)) {
            res += map.get(sum_k);
        }

        if (map.has(presum[i + 1])) {
            map.set(presum[i + 1], map.get(presum[i + 1]) + 1);
        } else {
            map.set(presum[i + 1], 1);
        }      
    }

    return res;
}
*/