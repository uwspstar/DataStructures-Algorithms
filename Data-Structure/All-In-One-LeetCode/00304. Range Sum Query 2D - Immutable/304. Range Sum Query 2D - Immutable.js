// 304. Range Sum Query 2D - Immutable
/*
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*/
var NumMatrix = function (matrix) {
    const getPreSum = matrix => {
        let M = matrix.length;
        let N = matrix[0].length;

        let preSum = new Array();
        for (let i = 0; i <= M; i++) {
            let tmp = [];
            for (let j = 0; j <= N; j++) {
                tmp.push(0);
            }
            preSum.push(tmp);
        }

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                // 计算每个矩阵 [0, 0, i, j] 的元素和
                preSum[i + 1][j + 1] = preSum[i][j + 1]
                    + preSum[i + 1][j]
                    - preSum[i][j]
                    + matrix[i][j];
            }
        }
        return preSum;
    }
    this.preSum = getPreSum(matrix);
};

NumMatrix.prototype.sumRegion = function (x1, y1, x2, y2) {
    return this.preSum[x2 + 1][y2 + 1]
        - (this.preSum[x2 + 1][y1] + this.preSum[x1][y2 + 1] - this.preSum[x1][y1])
};


console.log(-4%2)
console.log((-6) % 4)