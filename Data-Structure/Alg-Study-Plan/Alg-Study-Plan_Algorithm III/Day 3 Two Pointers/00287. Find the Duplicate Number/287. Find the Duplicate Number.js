// 287. Find the Duplicate Number
/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2] Output: 2

Example 2:
Input: nums = [3,1,3,4,2] Output: 3
*/
{
    // duplicate : hashmap
    // duplicate : sort
    // duplicate : move the number to index, if the index has the same as num

    /*
    
    nums= [ 1, 3, 4, 2, 2 ]
    --------------------------
    nums= [ -1, 3, 4, 2, 2 ] val= 1
    nums= [ -1, -1, 4, 2, 2 ] val= 3
    nums= [ -1, -1, 4, -1, 2 ] val= 2
    nums= [ -1, -1, -1, -1, 2 ] val= 4
    nums= [ -1, -1, -1, -1, -1 ] val= 2
    */
    var findDuplicate = function (nums) {
        let curr = 0;
        // console.log('nums=', nums);
        while (nums[curr] > 0) {
            let val = nums[curr];
            nums[curr] = -1;
            curr = val;
            // console.log('nums=', nums, 'val=', val);
        }
        return curr;
    };
    // Set Mismatch (E)
}