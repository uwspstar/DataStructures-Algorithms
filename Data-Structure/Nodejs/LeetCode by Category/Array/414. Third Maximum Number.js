//414. Third Maximum Number
/*
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

Input: nums = [3,2,1] Output: 1
Explanation: The third maximum is 1.

Input: nums = [1,2] Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Input: nums = [2,2,3,1] Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
{
    //brute force O(NlogN, sort) O(N, space, set->O(N), arr->O(N))
    var thirdMax = function (nums) {
        if (nums.length < 2) return nums[0];
        let set = new Set(nums);
        let arr = [...set].sort((a, b) => b - a);
        let k = 3;
        if (k <= arr.length) {
            return arr[k - 1];
        }
        return arr[0];
    };
    //Transform to Chessboard
    //Add to Array-Form of Integer
    //Decrease Elements To Make Array Zigzag
}