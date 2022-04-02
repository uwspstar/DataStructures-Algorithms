//https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array

//153. 寻找旋转排序数组中的最小值
/*
已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

输入：nums = [3,4,5,1,2] 输出：1 
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
*/

// 1 <= n <= 5000
{
    var findMin = function (nums) {
        if (nums.length === 1) return nums[0];
        let left = 0;
        let right = nums.length - 1;
        let res = -1;
        // no rotation.Already sorted array.
        if (nums[right] > nums[0]) return nums[0];

        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            // if the mid element is greater than its next element then mid+1 element is the smallest
            if (nums[mid] > nums[mid + 1]) {
                res = mid + 1;
                break;
            }
            // if the mid element is lesser than its previous element then mid element is the smallest
            if (nums[mid - 1] > nums[mid]) {
                res = mid;
                break;
            }
            // nums[mid] > nums[0], the least value is still to the right
            if (nums[mid] > nums[0]) {
                left = mid + 1;
            } else {// nums[mid] < nums[0]value is somewhere to the left
                right = mid - 1;
            }
        }

        return nums[res];
    };
}
{
    var findMin = function (nums) {
        if (nums.length === 1) return nums[0];
        let left = 0;
        let mid = Math.floor(nums.length / 2);
        let right = nums.length - 1;
        while (left < right) {
            if (nums[right] < nums[mid]) {
                left = mid + 1;
                mid = Math.floor((left + right) / 2);
            } else if (nums[right] > nums[mid]) {
                right = mid;
                mid = Math.floor((left + right) / 2);
            } else {
                return Math.min(nums[left], nums[right]);
            }
        }
        return nums[mid];
    };
}