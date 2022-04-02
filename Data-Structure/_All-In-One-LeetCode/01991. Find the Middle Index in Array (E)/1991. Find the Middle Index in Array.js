// 1991. Find the Middle Index in Array
// 724. Find Pivot Index
/*
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

Example 1:

Input: nums = [2,3,-1,8,4]
Output: 3
Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4
*/
{
    // same as 747

    var findMiddleIndex = function (nums) {
        let sum = 0, leftSum = 0, N = nums.length;
        for (let x of nums) {
            sum += x;
        }

        for (let i = 0; i < N; i++) {
            if (leftSum === sum - leftSum - nums[i]) {
                return i
            } else {
                leftSum += nums[i];
            }
        }
        return -1;
    };
    // Partition Array Into Three Parts With Equal Sum
}