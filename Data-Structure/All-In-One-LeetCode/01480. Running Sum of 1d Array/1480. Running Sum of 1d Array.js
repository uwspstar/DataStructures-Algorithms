//1480. Running Sum of 1d Array
/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
{
    // Oracle phone interview 
    // off by "1"
    var runningSum = function (nums) {
        let N = nums.length;
        let preSum = new Array(N + 1).fill(0);
        for (let i = 1; i <= N; i++) { // <= N important
            preSum[i] = preSum[i - 1] + nums[i - 1];
        }
        preSum.shift();
        return preSum;
    }
}

{   // Oracle phone interview
    // Not off by "1"
    var runningSum = function (nums) {
        let preSum = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            preSum[i] = preSum[i - 1] + nums[i];
        }
        return preSum;
    };
}

// Zigzag Iterator
// Set Mismatch
// Maximum Number of Darts Inside of a Circular Dartboard