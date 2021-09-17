//54. Spiral Matrix
/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/
{
    var spiralOrder = function (matrix) {
        /*
        Input: matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
        
        */
        // Output: [1,2,3,6,9,8,7,4,5]
        if (matrix.length === 0) return [];
        if (matrix.length === 0) return [...matrix[0]];

        let result = [];
        let rowStart = 0, rowEnd = matrix.length - 1, cloStart = 0, cloEnd = matrix[0].length - 1;

        while (rowStart <= rowEnd && cloStart <= cloEnd) {
            for (let i = cloStart; i <= cloEnd; i++) {
                result.push(matrix[rowStart][i]);
            }
            rowStart++;
            for (let i = rowStart; i <= rowEnd; i++) {
                result.push(matrix[i][cloEnd]);
            }
            cloEnd--;

            if (rowStart <= rowEnd) { // Important
                for (let i = cloEnd; i >= cloStart; i--) {
                    result.push(matrix[rowEnd][i]);
                }
                rowEnd--;
            }

            if (cloStart <= cloEnd) { // Important
                for (let i = rowEnd; i >= rowStart; i--) {
                    result.push(matrix[i][cloStart]);
                }
                cloStart++;
            }

        }

        return result;
    };
}