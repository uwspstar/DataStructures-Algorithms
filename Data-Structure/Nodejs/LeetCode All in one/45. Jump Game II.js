//45. Jump Game II
/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

Input: nums = [2,3,1,1,4] Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 
Input: nums = [2,3,0,1,4] Output: 2
*/
//https://leetcode-cn.com/problems/jump-game-ii/solution/tiao-yue-you-xi-ii-by-leetcode-solution/

{
    /**
 * @param {number[]} nums
 * @return {number}
 */
    var jump = function (nums) {
        let curIndex = 0;
        let nextIndex = 0;
        let steps = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            nextIndex = Math.max(nums[i] + i, nextIndex)
            if (i === curIndex) {
                curIndex = nextIndex;
                steps++;
            }
        }

        return steps;
    };
    //Jump Game III
    //Jump Game VII
}