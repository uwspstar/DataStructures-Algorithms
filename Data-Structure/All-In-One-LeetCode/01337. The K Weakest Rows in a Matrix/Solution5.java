class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {

        int m = mat.length;
        int n = mat[0].length;

        int [] indexes = new int[k];
        int nextInsertIndex = 0;

        // This code does the same as the animation above.
        for (int c = 0; c < n && nextInsertIndex < k; c++) {
            for (int r = 0; r < m && nextInsertIndex < k; r++) {
                // If this is the first 0 in the current row.
                if (mat[r][c] == 0 && (c == 0 || mat[r][c - 1] == 1)) {
                    indexes[nextInsertIndex] = r;
                    nextInsertIndex++;
                }
            }
        }

        /* If there aren't enough, it's because some of the first k weakest rows
         * are entirely 1's. We need to include the ones with the lowest indexes
         * until we have at least k. */
        for (int r = 0; nextInsertIndex < k ; r++) {
            /* If index i in the last column is 1, this was a full row and therefore
             * couldn't have been included in the output yet. */
            if (mat[r][n - 1] == 1) {
                indexes[nextInsertIndex] = r;
                nextInsertIndex++;
            }
        }

        return indexes;

    }
}