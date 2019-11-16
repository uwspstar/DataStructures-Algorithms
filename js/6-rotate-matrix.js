/**

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/

const matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
const matrix1 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

var rotate = function(matrix) {

    const len = matrix.length;

    for(let i = 0; i < (len / 2); i++){

      const temp = matrix[i];
      const temp2 = matrix[len - 1 - i]; 
      // index[0] ~ index[len - 1]

      matrix[i] = temp2;
      matrix[len - 1 - i] = temp;
    }

    //console.log(matrix);

    for(let i = 0; i<len ;i++){
      for(let j = 0; j<len ;j++){
        if(i<j){
          const temp = matrix[i][j];
          const temp90 = matrix[j][i];
          matrix[i][j] = temp90;
          matrix[j][i] = temp;
        }
      }
    }

    console.log(matrix);

};

console.log(rotate(matrix));
console.log(rotate(matrix1));/**

 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/

const matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
const matrix1 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

var rotate = function(matrix) {

    const len = matrix.length;

    for(let i = 0; i < (len / 2); i++){

      const temp = matrix[i];
      const temp2 = matrix[len - 1 - i]; 
      // index[0] ~ index[len - 1]

      matrix[i] = temp2;
      matrix[len - 1 - i] = temp;
    }

    //console.log(matrix);

    for(let i = 0; i<len ;i++){
      for(let j = 0; j<len ;j++){
        if(i<j){
          const temp = matrix[i][j];
          const temp90 = matrix[j][i];
          matrix[i][j] = temp90;
          matrix[j][i] = temp;
        }
      }
    }

    console.log(matrix);

};

console.log(rotate(matrix));
console.log(rotate(matrix1));
