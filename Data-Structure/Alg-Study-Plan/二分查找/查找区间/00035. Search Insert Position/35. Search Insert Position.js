//35. Search Insert Position
var searchInsert = function (nums, target) {
    if (nums.length === 0) return 1;
    if (nums[0] >= target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        nums[mid] > target ? right = mid - 1 : left = mid + 1;
    }

    return left;
};