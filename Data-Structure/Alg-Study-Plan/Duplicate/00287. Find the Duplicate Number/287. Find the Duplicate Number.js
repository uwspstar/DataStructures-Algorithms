// 287. Find the Duplicate Number
/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

Approach 1: Sort
Approach 2: Set
Approach 3: Negative Marking
Approach 4.1: Array as HashMap (Recursion)
Approach 4.2: Array as HashMap (Iterative)
Approach 5: Binary Search
Approach 6: Sum of Set Bits
Approach 7: Floyd's Tortoise and Hare (Cycle Detection)
*/
{
    // duplicate : hashmap
    // duplicate : sort
    // duplicate : move the number to index, if the index has the same as num
    var findDuplicate = function (nums) {
        let current = 0;
        while (nums[current] > 0) {
            let val = nums[current];
            nums[current] = -1;
            current = val;
        }
        return current;
    };
    // Set Mismatch (E)
}