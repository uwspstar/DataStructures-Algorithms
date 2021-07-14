//1901. Find a Peak Element II
/*
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

Example 1:
Input: mat = [[1,4],[3,2]] Output: [0,1]
Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.

Example 2:
Input: mat = [[10,20,15],[21,30,14],[7,16,32]] Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
*/

{
    //You must write an algorithm that runs in O(m log(n)) or O(n log(m))
    var findPeakGrid = function (mat) {
        let rowStart = 0
        let rowEnd = mat.length - 1;
        let colStart = 0;
        let colEnd = mat[0].length - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {
            if (rowStart + 1 <= rowEnd && mat[rowStart + 1][colStart] > mat[rowStart][colStart]) {
                rowStart += 1;
            } else if (rowStart - 1 >= 0 && mat[rowStart - 1][colStart] > mat[rowStart][colStart]) {
                rowStart -= 1;
            } else if (colStart + 1 >= 0 && mat[rowStart][colStart + 1] > mat[rowStart][colStart]) {
                colStart += 1;
            } else if (colStart - 1 >= 0 && mat[rowStart][colStart - 1] > mat[rowStart][colStart]) {
                colStart -= 1;
            } else {
                return [rowStart, colStart]
            }

        }
    };
    //Search a 2D Matrix II
    //Card Flipping Game
    //Find the Distance Value Between Two Arrays
}
{
    var findPeakGrid = function (mat) {
        let line = 0;
        let row = 0;
        m = mat.length;
        n = mat[0].length;
        while (true) {
            if (line + 1 <= m - 1 && mat[line + 1][row] > mat[line][row]) {
                line += 1;
            } else if (line - 1 >= 0 && mat[line - 1][row] > mat[line][row]) {
                line -= 1;
            } else if (row + 1 <= n - 1 && mat[line][row + 1] > mat[line][row]) {
                row += 1;
            } else if (row - 1 >= 0 && mat[line][row - 1] > mat[line][row]) {
                row -= 1;
            } else {
                return [line, row]
            }
        }
    }
}
{
    const findMaxRowValue = (mat, row) => {
        let val = Math.max(...mat[row]); //O(N)
        let col = [...mat[row]].indexOf(val);
        console.log([row, col]);
        return [row, col];
    }
    var findPeakGrid = function (mat) {
        let rowStart = 0
        let rowEnd = mat.length - 1;
        let colStart = 0;
        let colEnd = mat[0].length - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {

            let [x, y] = findMaxRowValue(mat, rowStart);// not need to check left col and right col, it is the maxVal of the row;

            if (x - 1 >= 0 && mat[x][y] < mat[x - 1][y]) {
                rowStart++;
            } else if (x + 1 <= rowEnd && mat[x][y] < mat[x + 1][y]) {
                rowStart++;
            } else {
                return [x, y];
            }
        }
        return [rowStart, colStart];
    };
    console.log(findPeakGrid([[1, 4], [3, 2]]));
}

{
    var findPeakGrid = function (mat) {
        let left = 0
        let right = mat[0].length
        let max
        let index
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            max = -1
            index = -1
            for (let i = 0; i < mat.length; i++) {
                let val = mat[i][mid]
                if (val > max) {
                    index = i
                    max = val
                }
            }
            let rightCheck = mat[index][mid + 1] || -1
            let leftCheck = mat[index][mid - 1] || -1
            if (leftCheck < max && rightCheck < max) {
                return [index, mid]
            } else if (leftCheck > max) {
                right = mid
            } else {
                left = mid
            }
        }
        return [index, left]
    };

    console.log(findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]]))
}