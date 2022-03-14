// regular suggest to use
{
    const binarySearch = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] == target) {
                return mid;
            }
        }
        return -1;
    }
}

/*
本文作者:九章算法令狐冲
官方网站:www.jiuzhang.com/?utm_source=lhc-cheatsheet-v4.0
*/

/*
二分法 Binary Search 
                                                	
使用条件

排序数组 (30-40%是二分)
找一个比 O(n) 更小的时间复杂度算法的时候(99%)
找到数组中的一个分割位置，使得左半部分满足某个条件，右半部分不满足(100%) 
找到一个最大/最小的值使得某个条件被满足(90%)
                	
复杂度
                	
时间复杂度:O(logn) 
空间复杂度:O(1) 
*/
// 代码模版 
{
    const binarySearch = (nums, target) => {
        // corner case 处理
        if (nums === null || nums.length === 0) return -1;

        let start = 0;
        let end = nums.length - 1;

        // 要点1: start + 1 < end
        while (start + 1 < end) {
            // 要点 2:start + (end - start) / 2
            let mid = start + parseInt((end - start) / 2);

            // 要点3:=, <, > 分开讨论，mid 不 +1 也不 -1
            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] < target) {
                start = mid;
            } else {
                end = mid;
            }
        }
        
        // 要点 4: 循环结束后，单独处理 start 和 end
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;

        return -1;
    }
}
