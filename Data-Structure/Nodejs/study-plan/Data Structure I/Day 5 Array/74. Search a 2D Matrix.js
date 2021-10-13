//74. Search a 2D Matrix
{
    var searchMatrix = function (matrix, target) {
        const m = matrix.length
        const n = matrix[0].length;

        let low = 0, high = m * n - 1;

        while (low <= high) {

            let mid = low + parseInt((high - low) / 2);
            let row = parseInt(mid / n);
            let col = mid % n;
            let num = matrix[row][col];

            if (num === target) return true;

            num < target ? low = mid + 1 : high = mid - 1;
        }

        return false;
    }
}