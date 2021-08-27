//487. Max Consecutive Ones II
/*
Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

Input: nums = [1,0,1,1,0] Output: 4
Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
 
Input: nums = [1,0,1,1,0,1] Output: 4
*/
{
    //flip at most one 0.
    //sliding window
    //[1,0,1,1,0]

    var findMaxConsecutiveOnes = function (nums) {
        let fast = 0;
        let slow = 0;
        let zeroCount = 0;
        let max = 0;

        while (fast < nums.length) {
            //only one '0'
            if (nums[fast] == 0) {
                zeroCount++;
            }
            
            //shrink the window
            while (zeroCount == 2) {
                if (nums[slow] == 0) {
                    zeroCount--;
                }
                slow++;
            }

            max = Math.max(max, fast - slow + 1);

            fast++;
        }
        return max;
    };
    //Long Pressed Name
    //Subarrays with K Different Integers
    //Product of Two Run-Length Encoded Arrays
}