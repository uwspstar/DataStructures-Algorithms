/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (map[temp] >= 0) {
            return [map[temp], i]
        }
        map[nums[i]] = i;
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));