/* Rotate Matrix: Given an image represented by an NxN matrix, 
* where each pixel in the image is 4 bytes, 
* write a method to rotate the image by 90 degrees. Can you do this in place?
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
 * 
 * A better way to do this is to implement the swap index by index. 
 * In this case, we do the following:
1 for i=0 to n
2 temp= top[i];
3 top[i] = left[i]
4 left[i] = bottom[i] 
5 bottom[i]= right[i] 
6 right[i]= temp

*/

const matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var rotate = function(matrix) {
  if (matrix.length== 0 || matrix.length != matrix[0].length) return false;
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; // save top
      // left -> top
      matrix[first][i] = matrix[last-offset][first];
      // bottom -> left 
      matrix[last-offset][first] = matrix[last][last - offset];
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];
      // top -> right 
      matrix[i][last] = top; //right<- saved top
    }
  }
  console.log('matrix = ',matrix);
  return true;
}

console.log(rotate(matrix));
