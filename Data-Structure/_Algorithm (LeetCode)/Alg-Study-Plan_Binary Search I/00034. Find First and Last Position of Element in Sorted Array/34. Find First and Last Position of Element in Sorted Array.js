{
    const left_bound = (nums, target) => {
        let left = 0, right = nums.length - 1;
        // 搜索区间为 [left, right]
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            if (nums[mid] < target) {
                // 搜索区间变为 [mid+1, right]
                left = mid + 1;
            } else if (nums[mid] > target) {
                // 搜索区间变为 [left, mid-1]
                right = mid - 1;
            } else if (nums[mid] == target) {
                // 收缩右侧边界
                right = mid - 1;
            }
        }
        // 检查出界情况
        if (left >= nums.length || nums[left] != target) {
            return -1;
        }
        return left;
    }

    const right_bound = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] == target) {
                // 这里改成收缩左侧边界即可
                left = mid + 1;
            }
        }
        // 这里改为检查 right 越界的情况，见下图
        if (right < 0 || nums[right] != target) {
            return -1;
        }
        return right;
    }

    const searchRange = (nums, target) => {
        if (nums.length === 0) return [-1, -1];

        return [left_bound(nums, target), right_bound(nums, target)];
    }
}