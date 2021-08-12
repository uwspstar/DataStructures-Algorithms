/*
Print out the clockwise spiral traversal of the 2D matrix.

arr = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

The clockwise spiral traversal of this array is:
1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
*/

const matrixSpiral = (arr) => {
    if (arr.length < 2) return arr;

    let colStart = 0;
    let colEnd = arr[0].length - 1;
    let rowStart = 0;
    let rowEnd = arr.length - 1;
    
    let result = [];

    while (colStart < colEnd && rowStart < rowEnd) {

        for (let i = colStart; i <= colEnd; i++) {
            result.push(arr[rowStart][i])
        } 
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(arr[i][colEnd])
        } 
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            result.push(arr[rowEnd][i]);
        } 
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            result.push(arr[i][colStart]);
        } 
        colStart++;
    }
    return result;
}

const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

console.log('matrixSpiral', JSON.stringify(matrixSpiral(arr)));
//[1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]