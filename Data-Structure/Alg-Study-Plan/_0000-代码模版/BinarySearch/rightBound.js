const rightBound = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }
    // 最后要检查 right 越界的情况
    if (right < 0 || nums[right] !== target) {
        return -1;
    }
    return right;
}

console.log(rightBound([0, 1, 1, 1, 2, 2, 2, 3, 4], 1)) //3