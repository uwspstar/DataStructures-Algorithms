//977. Squares of a Sorted Array
/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 

Input: nums = [-4,-1,0,3,10] Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 
Input: nums = [-7,-3,2,3,11] Output: [4,9,9,49,121]
*/

//Time Complexity: O(N), where NN is the length of A.
//Space Complexity: O(N) if you take output into account and O(1)O(1) otherwise.

// 0 is mid
// merge
// 2 pointers
{   //O(N) and O(N)
    var sortedSquares = function (nums) {
        let n = nums.length;
        let result = Array(n); // O(N) space
        let left = 0;
        let right = n - 1;
        for (let i = n - 1; i >= 0; i--) { // backward

            if (Math.abs(nums[left]) < Math.abs(nums[right])) {
                result[i] = nums[right] * nums[right];
                right--;
            } else {
                result[i] = nums[left] * nums[left];
                left++;
            }
        }
        return result;
    };
    // Sort Transformed Array
}