// 905. Sort Array By Parity
/*

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
*/

{
    var sortArrayByParity = function (nums) {
        const N = nums.length;
        let left = 0;
        let right = N - 1;
        // [3,1,2,4] -> [4,1,2,3]-> [4,1,2,3]
        //  l     r      l   r         l r
        while (left < right) {
            if (nums[left] % 2 === 0) {
                left++;
            } else {
                if (nums[right] % 2 === 0) {
                    swap(nums, left, right);
                }
                right--;
            }
        }
        return nums;
    };
}
{
    var sortArrayByParity = function (nums) {
        nums.sort((a, b) => a % 2 - b % 2);
        return nums
    };
}