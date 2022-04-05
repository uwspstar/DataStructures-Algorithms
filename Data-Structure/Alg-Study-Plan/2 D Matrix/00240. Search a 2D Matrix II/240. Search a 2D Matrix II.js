// 240. Search a 2D Matrix II
// https://zhuanlan.zhihu.com/leetcode1024

/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 
Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
*/
{
    var searchMatrix = function (matrix, target) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        let row = 0;
        let col = matrix[0].length - 1;
        while (row < matrix.length && col >= 0) {
            if (target > matrix[row][col]) {
                row++;
            } else if (target < matrix[row][col]) {
                col--;
            } else {
                return true;
            }
        }
        return false;
        // https://zhuanlan.zhihu.com/p/110119842
        // Minimum Area Rectangle II (M)
        // Path With Maximum Minimum Value (M)
        // Watering Plants (M)
    }
}
{
    // 看到有序，第一反应就是二分查找。最直接的做法，一行一行的进行二分查找即可。
    // 此外，结合有序的性质，一些情况可以提前结束。
    // 比如某一行的第一个元素大于了 target ，当前行和后边的所有行都不用考虑了，直接返回 false。
    // 某一行的最后一个元素小于了 target ，当前行就不用考虑了，换下一行。
    // https://leetcode-cn.com/problems/search-a-2d-matrix-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-5-4/

    var searchMatrix = function (matrix, target) {

        if (matrix.length === 0 || matrix[0].length === 0) {
            return false;
        }

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] > target) {
                break;
            }
            if (matrix[i][matrix[i].length - 1] < target) {
                continue;
            }

            let col = binarySearch(matrix[i], target);
            if (col != -1) {
                return true;
            }
        }
        return false;
    }

    //二分查找
    const binarySearch = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = (start + end) >>> 1;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    // Minimum Area Rectangle II (M)
    // Path With Maximum Minimum Value (M)
    // Watering Plants (M)
}
