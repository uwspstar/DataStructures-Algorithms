//寻找右侧边界的二分查找
//搜索区间」是 [left, right) 左闭右开，所以 当 nums[mid] 被检测之后，
//下一步的搜索区间应该去掉 mid 分割成两个区 间，即 [left, mid) 或 [mid + 1, right)。
{
    const rightBoundarySearch = (nums, target) => {
        if (nums.length == 0) return -1;
        let left = 0;
        let right = nums.length;
        while (left < right) { //[left, right)
            let mid = left + parseInt((right - left) / 2);
            if (nums[mid] === target) {
                left = mid + 1; // 注意 mid = left - 1
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid;
            }
        }
        return left - 1; // 注意  mid = left - 1
    }
    var nums = [1, 1, 2, 2, 2, 2, 10, 11];
    console.log(rightBoundarySearch(nums, 2));
}
/*
为什么这个算法能够找到右侧边界
当 nums[mid] == target 时，不要立即返回，而是增大「搜索区间」的下界 left，使得区间不断向右收缩，达到锁定右侧边界的目的。
为什么最后返回 left - 1 而不像左侧边界的函数，返回 left?而且我觉得 这里既然是搜索右侧边界，应该返回 right 才对。
答:首先，while 循环的终止条件是 left == right，所以 left 和 right 是一样 的，你非要体现右侧的特点，返回 right - 1 好了。

为什么要减一，这是搜索右侧边界的一个特殊点，关键在这个条件判断:
if (nums[mid] == target) {
    left = mid + 1;
// 这样想: mid = left - 1


因为我们初始化 right = nums.length 所以决定了我们的「搜索区间」是 [left, right) 所以决定了 while (left < right) 同时也决定了 left = mid + 1 和 right = mid
因为我们需找到 target 的最右侧索引
所以当 nums[mid] == target 时不要立即返回 而要收紧左侧边界以锁定右侧边界
又因为收紧左侧边界时必须 left = mid + 1 所以最后无论返回 left 还是 right，必须减一
*/