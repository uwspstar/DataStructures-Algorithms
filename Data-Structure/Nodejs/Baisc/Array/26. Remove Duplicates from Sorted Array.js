//26. Remove Duplicates from Sorted Array
/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
{
    var removeDuplicates = function (nums) {
        if (nums.length < 2) return nums.length;
        //Input: nums = [0,0,1,1,1,2,2,3,3,4]
        //Output: 5, nums = [0,1,2,3,4]
        let p = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[p]) {
                nums[++p] = nums[i];
            }
        }

        return p + 1;

    };
}
/*
Maximum Sum of Two Non-Overlapping Subarrays
Number of Sub-arrays With Odd Sum
Faulty Sensor
*/