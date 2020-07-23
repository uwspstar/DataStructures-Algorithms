/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * 
 *  1  2  3  4 19
 *  5  6  7  8 20
 * 11 12 13 14 21
 * 15 16 17 18 22
 * 15 16 17 18 22
 */
 
//1+6+13+18+22
//19+8+13+16+15

function diagonalDifference(arr) {
    // Write your code here
    //let i = 0;
    //let j = arr[0].length;
    let len = arr.length;
    let resultL = 0;
    let resultR = 0;
    for(let x = 0; x < len; x++) {
        resultL += arr[x][x];
        resultR += arr[x][len-1-x];
    }
    return Math.abs(resultL - resultR);

}

