//217. Contains Duplicate
/*

**** read carefully **** 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
 
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
//1 : sort T: O(NlogN); S: O(1)
//2 : hash Set
{
    //T: O(N); 
    //S: O(N)
    var containsDuplicate = function (nums) {
        let set = new Set(nums);
        return set.size !== nums.length;
    }
}

{
    // give arr, from num 1 ~ n has duplicate
}