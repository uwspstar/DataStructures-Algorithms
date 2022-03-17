// 303. Range Sum Query - Immutable
/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/
{  // Off by "1" , save base case when use 2D arr  
    var NumArray = function (nums) {
        const getPreSum = arr => {
            let N = nums.length;
            let preSum = new Array(N + 1).fill(0);
            for (let i = 1; i <= N; i++) { //<= N important !!!
                preSum[i] = preSum[i - 1] + nums[i - 1];
            }
            return preSum;
        }
        this.preSum = getPreSum(nums);
    };

    NumArray.prototype.sumRange = function (i, j) {
        return this.preSum[j + 1] - this.preSum[i];
    };
}

{
    // No off by "1"
    var NumArray = function (nums) {
        const getPreSum = arr => {
            let N = nums.length;
            let preSum = [nums[0]];
            for (let i = 1; i < N; i++) {
                preSum.push(preSum[i - 1] + nums[i]);
            }
            return preSum;
        }
        this.preSum = getPreSum(nums);
    };

    // left <= right.
    NumArray.prototype.sumRange = function (i, j) {
        if (i > 0) {
            return this.preSum[j] - this.preSum[i - 1];
        }
        return this.preSum[j];
    };
}