//136. Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one. (has duplicate)

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1] Output: 1
Input: nums = [4,1,2,1,2] Output: 4
Input: nums = [1] Output: 1
*/
{
    // (a ^ b) ^ b = a。
    // total b is even number, b is gone
    //O(N)
var singleNumber = function(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        let b = arr[i];
        a = a ^ b;
    }
    return a;
    
};
/*
Single Number II
Single Number III
Missing Number
Find the Duplicate Number
*/
}