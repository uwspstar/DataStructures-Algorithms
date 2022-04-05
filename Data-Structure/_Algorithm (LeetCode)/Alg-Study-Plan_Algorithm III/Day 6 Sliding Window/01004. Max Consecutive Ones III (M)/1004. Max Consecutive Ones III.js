// 1004. Max Consecutive Ones III
/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/
{
    // sliding Window
    var longestOnes = function (nums, k) {
        const N = nums.length;
        let res = []; // sliding Window
        let zeroCnt = 0
        let ans = 0;

        for (let i = 0; i < N; i++) {
            // enlarge window
            res.push(nums[i]);
            if (nums[i] === 0) {
                zeroCnt++;
            }
            // shrink window
            while (zeroCnt > k) {
                let tmp = res.shift();
                if (tmp === 0) {
                    zeroCnt--;
                }
            }
            ans = Math.max(ans, res.length);
        }
        return ans;
    };
}
{
    var longestOnes = function (nums, k) {
        let res = 0;
        let fast = 0;
        let slow = 0;
        let zeroCount = 0;
        while (fast < nums.length) {
            if (nums[fast] === 0) {
                zeroCount++;
            }
            while (zeroCount > k) {
                if (nums[slow] === 0) {
                    zeroCount--;
                }
                slow++;
            }
            res = Math.max(res, fast - slow + 1);
            fast++;
        }
        return res;
    };
    // Longest Repeating Character Replacement (M)
}