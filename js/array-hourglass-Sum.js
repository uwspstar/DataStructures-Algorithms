/*

a b c
  d
e f g

There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6
*/

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    // we could set this to 3 given the problems constraings, but this allows changes
    
    let maxX = (arr[0].length - 3); //every time only move 1 step ( last 3rd)
    let maxY = (arr.length - 3);
    let total = -Infinity;  // has to be -64, but
   
    // begin at y == 0
    
    for (let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            // sum the top of hourglass
            let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
            // get the middle of hourglass
            sum += arr[y+1][x+1];
            
            // sum the bottom of hourglass
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
            // don't store result to keep space complexity down
            if (total < sum)
                 total = sum;
        }
    }
    
    return total;


}
