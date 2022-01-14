//448. Find All Numbers Disappeared in an Array
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]
 
Input: nums = [1,1] Output: [2]
*/
{
    //t: O(N) s: O(N)
    const findDisappearedNumbers = function (nums) {
        const result = [];
        let set = new Set();
        const n = nums.length;

        for (const num of nums) {
            set.has(num) ? {} : set.add(num);
        }

        for (let i = 1; i <= n; i++) {
            set.has(i) ? {} : result.push(i);
        }

        return result;
    };
}
//Find All Duplicates in an Array