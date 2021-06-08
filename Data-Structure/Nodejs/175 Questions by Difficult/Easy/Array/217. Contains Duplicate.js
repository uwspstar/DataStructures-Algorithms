//217. Contains Duplicate
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1] Output: true
Input: nums = [1,2,3,4] Output: false
Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true;

*/
{  //O(N) ?
    var containsDuplicate = function(nums) {
        let set = new Set(nums);
        return nums.length !== set.size;
    };
    //Contains Duplicate II
    //Contains Duplicate III
}

{ // O(NlogN) 
    var containsDuplicate = function(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 1; i < nums.length - 1;i++) {
            if (nums[i -1 ] === nums[i] || nums[i] === nums[i + 1]) return true
        }
        return false;
    };

    console.log(containsDuplicate([1,2,3,1]));
    console.log(containsDuplicate([1,2,3,4]));
    console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
}

{ // O(N) : hashMap
    var containsDuplicate = function(nums) {
        let map = new Map();
        for (let i = 0; i < nums.length ;i++) {
            let key = nums[i];
            if (map.has(key)) {
                map.set(key, map.get(key) + 1);
            } else {
                map.set(key, 1);
            }
        }

        for (let val of map.values()) {
            if (val > 1) return true;
        }

        return false;
    };

    console.log(containsDuplicate([1,2,3,1]));
}