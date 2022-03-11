// 136. Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
*/
{
    // (a ^ b) ^ b = a。
    // total b is even number, b is gone

    var singleNumber = function (arr) {
        if (arr.length === 1) return arr[0];
        //a^b^a = b;
        let res = arr[0]
        for (let i = 1; i < arr.length; i++) {
            res = res ^ arr[i];
        }
        return res;
    };
    /*
    Single Number II
    Single Number III
    Missing Number
    Find the Duplicate Number
    */
}