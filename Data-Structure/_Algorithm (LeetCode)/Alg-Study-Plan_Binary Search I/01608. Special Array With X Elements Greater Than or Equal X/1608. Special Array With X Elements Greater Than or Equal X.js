// 1608. Special Array With X Elements Greater Than or Equal X
/*
You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

Example 1:
Input: nums = [3,5] Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 

2.
Example 2:
Input: nums = [0,0] Output: -1

Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.
*/
{
    var specialArray = function (nums, x = 0) {
        let cnt = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= x) {
                cnt++;
            } else {
                continue;
            }
        }

        if (x === cnt) {
            return x;
        } else if (x === nums.length) {
            return -1;
        } else {
            return specialArray(nums, ++x);
        }
    };
    // Shortest Word Distance II (M)
    // Minimum Cost to Connect Two Groups of Points (H)
    // GCD Sort of an Array (H)
}