//485. Max Consecutive Ones
/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1] Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2: Input: nums = [1,0,1,1,0,1]
Output: 2
*/
{
    var findMaxConsecutiveOnes = function (nums) {
        let res = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                count++;
                res = Math.max(res, count);
            } else {
                count = 0;
            }
        }
        return res;
    };
    //Max Consecutive Ones II
    //Consecutive Characters
    //Longer Contiguous Segments of Ones than Zeros
}
{
    //1 <= nums.length <= 105
    //nums[i] is either 0 or 1.
    var findMaxConsecutiveOnes = function (nums) {
        let arr = nums.join('').split('0');
        let res = 0;
        for (let a of arr) {
            res = Math.max(res, a.length);
        }
        return res;
    };
    //Max Consecutive Ones II
    //Consecutive Characters
    //Longer Contiguous Segments of Ones than Zeros
}