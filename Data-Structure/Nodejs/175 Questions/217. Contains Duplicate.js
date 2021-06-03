//217. Contains Duplicate
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1] Output: true
Input: nums = [1,2,3,4] Output: false
Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true;

*/
{
    var containsDuplicate = function(nums) {
        let set = new Set(nums);
        return nums.length !== set.size;
    };
    //Contains Duplicate II
    //Contains Duplicate III
}