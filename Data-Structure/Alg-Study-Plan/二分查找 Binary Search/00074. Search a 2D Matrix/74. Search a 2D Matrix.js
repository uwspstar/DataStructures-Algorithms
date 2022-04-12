// 74. Search a 2D Matrix
/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

{
    var searchMatrix = function (matrix, target) {
        let M = matrix.length;
        let N = matrix[0].length;
        let i = 0;
        let j = N - 1;
        while (i < M && j >= 0) {
            if (matrix[i][j] === target) return true;
            matrix[i][j] > target ? j-- : i++;
        }
        return false;
    };
    // Search a 2D Matrix II (M)
    // Image Overlap (M)
    // The Earliest Moment When Everyone Become Friends (M)
    // Find XOR Sum of All Pairs Bitwise AND (H)
}