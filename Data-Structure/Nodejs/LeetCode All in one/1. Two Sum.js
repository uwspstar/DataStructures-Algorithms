//1. Two Sum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Input: nums = [2,7,11,15], target = 9 Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. 

Input: nums = [3,2,4], target = 6 Output: [1,2] 
Input: nums = [3,3], target = 6 Output: [0,1]
*/
{
    // Hash Table :  If the complement exists, we need to look up its index
    // Time complexity : O(n)
    // Space complexity : O(n)
    var twoSum = function (arr, target) {
        if (arr.length < 2) return [];
        let map = new Map();
        for (let i = 0; i < arr.length; i++) {
            let key = target - arr[i];
            if (map.has(key)) {
                return [map.get(key), i];
            } else {
                map.set(arr[i], i)
            }
        }
        return [];
    };
}
//Two Sum II - Input array is sorted
//Two Sum III - Data structure design
//Two Sum IV - Input is a BST
//Max Number of K-Sum Pairs
//Count Good Meals
/*
Two Sum uses a hashmap to find complement values, and therefore achieves O(N) time complexity.
Two Sum II uses the two pointers pattern and also has O(N) time complexity for a sorted array. **** We can use this approach for any array if we sort it first, which bumps the time complexity to O(nlogn).
*/