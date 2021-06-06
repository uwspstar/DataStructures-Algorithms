//1428. Leftmost Column with at Least a One
{
    var leftMostColumnWithOne = function (binaryMatrix) {
        const [rows, cols] = binaryMatrix.dimensions();

        // Set pointers to the top-right corner.
        let currentRow = 0;
        let currentCol = cols - 1;

        // Repeat the search until it goes off the grid.
        while (currentRow < rows && currentCol >= 0) {
            if (binaryMatrix.get(currentRow, currentCol) === 0) {
                currentRow++;
            } else {
                currentCol--;
            }
        }

        // If we never left the last column, this is because it was all 0's.
        return (currentCol == cols - 1) ? -1 : currentCol + 1;
    };
    //Shortest Word Distance
    //Number of Subarrays with Bounded Maximum
    //Average Waiting Time
}