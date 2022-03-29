// 26. Remove Duplicates from Sorted Array
/*
// Sorted Array
// Do not allocate extra space for another array. 
// You must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    var removeDuplicates = function (nums) {
        let p = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[p]) {
                p++;
                swap(nums, i, p);
            }
        }

        return p + 1;
    };
}
{
    // O(N) // O(1)
    var removeDuplicates = function (nums) {
        let fast = 0;
        let slow = 0;
        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast]
            }
            fast++;
        }
        return slow + 1;
    }
    /*
    Maximum Sum of Two Non-Overlapping Subarrays
    Number of Sub-arrays With Odd Sum
    Faulty Sensor
    */
}