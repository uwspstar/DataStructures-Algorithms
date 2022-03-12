// 74. Search a 2D Matrix
/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/
{
    var searchMatrix = function (matrix, target) {
        const m = matrix.length
        const n = matrix[0].length;

        let low = 0, high = m * n - 1;

        while (low <= high) {

            let mid = low + parseInt((high - low) / 2);
            let row = parseInt(mid / n);
            let col = mid % n;
            let num = matrix[row][col];

            if (num === target) return true;

            num < target ? low = mid + 1 : high = mid - 1;
        }

        return false;
    }
    // Search a 2D Matrix II
}