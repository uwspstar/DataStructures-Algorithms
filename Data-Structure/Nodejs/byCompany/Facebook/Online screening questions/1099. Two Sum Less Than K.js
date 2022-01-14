//1099. Two Sum Less Than K
/*
Given an array nums of integers and integer k, return the *** maximum sum *** such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1. 

Input: nums = [34,23,1,24,75,33,54,8], k = 60 Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60. 

Input: nums = [10,20,30], k = 15 Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.
*/
/*
Two Sum uses a hashmap to find complement values, and therefore achieves O(N) time complexity.
Two Sum II uses the two pointers pattern and also has O(N) time complexity for a sorted array. **** We can use this approach for any array if we sort it first, which bumps the time complexity to O(nlogn).
*/
{
    var twoSumLessThanK = function (nums, k) {
        nums.sort((a, b) => a - b);  //O(NlogN)
        let ans = -1;
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum < k) {
                ans = Math.max(ans, sum);
                left++;
            } else {
                right--;
            }
        }
        return ans;
    };

}
//Two Sum II - Input array is sorted
//3Sum Smaller
//Subarray Product Less Than K
