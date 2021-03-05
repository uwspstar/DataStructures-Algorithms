var searchInsert = function (nums, val) {
    if (nums.length === 0) return 0;
    if (nums[0] > val) return 0;
    let len = nums.length;
    if (nums[len - 1] < val) return len;
    // binary [left, right]
    let left = 0;
    let right = len - 1;
    while (left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if (nums[mid] === val) return mid;
        nums[mid] > val ? right = mid - 1 : left = mid + 1;
    }
    return right + 1;
};
console.log('searchInsert', searchInsert([1, 3], 3)); //1
console.log('searchInsert', searchInsert([4, 5], 3)); //0
console.log('searchInsert', searchInsert([0, 1, 2, 4, 5], 3)); //3 
console.log('searchInsert', searchInsert([1, 2, 3], 3));//2
console.log('searchInsert', searchInsert([0, 1, 2, 4], 3));//3
console.log('searchInsert', searchInsert([0, 1, 2, 4], 5));//4
/*
{
    if (nums.length === 0) return 1;
    if (nums[0] >= target) return 0;
    if (nums[nums.length - 1] <= target) return nums.length;

    let start = 0;
    let end = nums.length - 1;

    while (end >= start) {
        const i = parseInt((end + start) / 2);

        if (nums[i] === target) {
            return i;
        }

        nums[i] > target ? end = i - 1 : start = i + 1;
    }

    return start;
}
*/