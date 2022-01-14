//169. Majority Element
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3] Output: 3
Input: nums = [2,2,1,1,1,2,2] Output: 2
*/
{
    //Follow-up: Could you solve the problem in linear time and in O(1) space?
    //The majority element is the element that appears more than ⌊n / 2⌋ times. 
    // O(NlogN)
    var majorityElement = function (nums) {
        nums.sort(); // O(NlogN)
        let i = nums.length >> 1;
        return nums[i];
    }
}
{
    //brute force O(N)
    var majorityElement = function (nums) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let key = nums[i];
            map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
        }

        let val = Math.max(...map.values());
        
        for (let key of map.keys()) {
            if (map.get(key) === val) {
                return key;
            }
        }
    };
    
}
//Majority Element II