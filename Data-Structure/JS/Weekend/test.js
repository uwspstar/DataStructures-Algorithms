
const threeSum = nums => {
    if (nums.length < 3) return [];
    nums.sort((a, b) => {a - b});
    if (nums[0] > 0) return [];
    if (nums[nums.length - 1] < 0) return [];
    let result = [];
    

    return result;
}