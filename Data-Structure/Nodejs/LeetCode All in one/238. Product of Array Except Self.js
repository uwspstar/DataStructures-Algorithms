// /238. Product of Array Except Self
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1: Input: nums = [1,2,3,4] Output: [24,12,8,6]
Example 2: Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]
*/
{
    var productExceptSelf = function (nums) {
        //   [1, 2, 3, 4]
        // L [1, 1, 2, 6]
        // R [24,12,4, 1]
        // A [24,12,8, 6] 
        let R = Array(nums.length).fill(1);
        let Ans = Array(nums.length).fill(1);

        for (let i = 1; i < Ans.length; i++) {
            Ans[i] = Ans[i - 1] * nums[i - 1];
        }

        for (let i = R.length - 2; i >= 0; i--) {
            R[i] = R[i + 1] * nums[i + 1];
            Ans[i] = Ans[i] * R[i];
        }
        return Ans;
    };
    //Maximum Product Subarray
    //Paint House II
}