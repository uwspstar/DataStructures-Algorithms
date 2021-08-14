//73. Set Matrix Zeroes
/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place. 

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]] 

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/
{
    var setZeroes = function (matrix) {
        //You must do it in place.
        let row = matrix.length;
        let col = matrix[0].length;


        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {

                if (matrix[i][j] === 0) {
                    let m = row - 1;
                    while (m >= 0) {


                        if (matrix[m][j] !== 0) {
                            matrix[m][j] = null;
                        }
                        m--;
                    }
                    let n = col - 1;
                    while (n >= 0) {

                        if (matrix[i][n] !== 0) {
                            matrix[i][n] = null;
                        }
                        n--;
                    }
                }
            }

        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (matrix[i][j] === null) {
                    matrix[i][j] = 0;
                }
            }
        }

        return matrix;
    };
    let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
    console.log(setZeroes(matrix));
}
