//1428. Leftmost Column with at Least a One
//https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
/*
Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
*/
class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        int rows = binaryMatrix.dimensions().get(0);
        int cols = binaryMatrix.dimensions().get(1);

        // Set pointers to the top-right corner.
        int currRow = 0;
        int currCol = cols - 1;

        // Repeat the search until it goes off the grid.
        while (currRow < rows && currCol >= 0) {
            if (binaryMatrix.get(currRow, currCol) == 0) {
                currRow++;
            } else {
                currCol--;
            }
        }

        // If we never left the last column, this is because it was all 0's.
        return (currCol == cols - 1) ? -1 : currCol + 1;
    }
}
// Shortest Word Distance
// Number of Subarrays with Bounded Maximum
// Average Waiting Time