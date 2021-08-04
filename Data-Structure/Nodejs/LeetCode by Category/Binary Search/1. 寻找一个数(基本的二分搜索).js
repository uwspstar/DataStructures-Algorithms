//寻找一个数(基本的二分搜索)
//搜索一个数，如果存在， 返回其索引，否则返回 -1。
{


    const binarySearch = (nums, target) => {
        let left = 0;
        let right = nums.length - 1; // 注意
        while (left <= right) {
            let mid = left + (right - left) / 2;
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            }
        }
        return -1;
    }
}
/*

因为我们初始化 right = nums.length - 1 所以决定了我们的「搜索区间」是 [left, right] 所以决定了 while (left <= right) 同时也决定了 left = mid+1 和 right = mid-1
因为我们只需找到一个 target 的索引即可 所以当 nums[mid] == target 时可以立即返回
*/