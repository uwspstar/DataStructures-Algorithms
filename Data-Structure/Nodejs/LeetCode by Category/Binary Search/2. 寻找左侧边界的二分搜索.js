//寻找左侧边界的二分搜索
{
    const leftBoundarySearch = (nums, target) => {

        if (nums.length === 0) return -1;

        let left = 0;
        let right = nums.length; // 注意

        while (left < right) { // 注意
            let mid = left + parseInt((right - left) / 2);
            if (nums[mid] === target) {
                right = mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid; // 注意 
            }
        }
        return left;
    }
    var nums = [1, 1, 2, 2, 2, 2, 10, 11];
    console.log(leftBoundarySearch(nums, 2));
    console.log(leftBoundarySearch(nums, 10));
}
/*
因为我们初始化 right = nums.length 所以决定了我们的「搜索区间」是 [left, right) 所以决定了 while (left < right) 同时也决定了 left = mid + 1 和 right = mid

因为我们需找到 target 的最左侧索引
所以当 nums[mid] == target 时不要立即返回 而要收紧右侧边界以锁定左侧边界
*/