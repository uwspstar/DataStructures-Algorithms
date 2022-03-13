// 162. Find Peak Element
{
    var findPeakElement = function (arr, left = 0, right = arr.length - 1) {

        if (left >= right) return left;

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1])
            return findPeakElement(arr, mid + 1, right);
        else
            return findPeakElement(arr, left, mid);

    };

    /*
    Peak Index in a Mountain Array Easy
    Find a Peak Element II Medium
    Pour Water Between Buckets to Make Water Levels Equal Medium
    */
}
{
    var findPeakElement = function(nums) {
        let idx = 0;
        for (let i = 1; i < nums.length; ++i) {
            if (nums[i] > nums[idx]) {
                idx = i;
            }
        }
        return idx;
    };
}
{
    var findPeakElement = function(nums) {
        const n = nums.length;
        let idx = parseInt(Math.random() * n);
    
        while (!(compare(nums, idx - 1, idx) < 0 && compare(nums, idx, idx + 1) > 0)) {
            if (compare(nums, idx, idx + 1) < 0) {
                idx += 1;
            } else {
                idx -= 1;
            }
        }
        
        return idx;
    }
    
    // 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
    // 方便处理 nums[-1] 以及 nums[n] 的边界情况
    const get = (nums, idx) => {
        if (idx === -1 || idx === nums.length) {
            return [0, 0];
        }
        return [1, nums[idx]];
    }
    
    const compare = (nums, idx1, idx2) => {
        const num1 = get(nums, idx1);
        const num2 = get(nums, idx2);
        if (num1[0] !== num2[0]) {
            return num1[0] > num2[0] ? 1 : -1;
        }
        if (num1[1] === num2[1]) {
            return 0;
        }
        return num1[1] > num2[1] ? 1 : -1;
    }
    //https://leetcode-cn.com/problems/find-peak-element/solution/xun-zhao-feng-zhi-by-leetcode-solution-96sj/
}