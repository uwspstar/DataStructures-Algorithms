// 59. Spiral Matrix II
/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:
Input: n = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
*/
{
    var generateMatrix = function (n) {
        if (n === 1) return [[1]];
        let p = 0;
        const res = [...Array(n)].map(x => Array(n));
        let rowStart = 0;
        let rowEnd = n - 1;
        let colStart = 0;
        let colEnd = n - 1;

        while (colStart <= colEnd && rowStart <= rowEnd) {
            for (let i = colStart; i <= colEnd; i++) {
                p++;
                res[rowStart][i] = p;
            }
            rowStart++;

            for (let i = rowStart; i <= rowEnd; i++) {
                p++;
                res[i][colEnd] = p;
            }
            colEnd--;

            for (let i = colEnd; i >= colStart; i--) {
                p++;
                res[rowEnd][i] = p;
            }
            rowEnd--;

            for (let i = rowEnd; i >= rowStart; i--) {
                p++;
                res[i][colStart] = p;
            }
            colStart++;
        }

        return res;
    };
}