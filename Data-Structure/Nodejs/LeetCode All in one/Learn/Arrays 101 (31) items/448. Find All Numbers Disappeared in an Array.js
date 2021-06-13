//448. Find All Numbers Disappeared in an Array
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]*/
{
    const findDisappearedNumbers = function (nums) {
        const n = nums.length;
        let set = new Set();
        const result = [];

        for (const num of nums) {
            set.has(num) ? {} : set.add(num);
        }

        for (let i = 1; i <= n; i++) {
            set.has(i) ? {} : result.push(i);
        }
        return result;
    };
    //Find All Duplicates in an Array
}