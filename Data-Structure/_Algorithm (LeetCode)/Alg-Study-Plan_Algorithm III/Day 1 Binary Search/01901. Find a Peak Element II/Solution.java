class Solution {
    public int[] findPeakGrid(int[][] mat) {
        int m = mat.length;
        int l = 0, r = m - 1;
        while (l < r) {
            int mid = l + r >> 1;
            int maxCol = findMaxCol(mat, mid);
            
            int max1 = mid - 1 >= 0 ? mat[mid - 1][findMaxCol(mat, mid - 1)] : -1; // mid-1行的最大值
            int max2 = mat[mid][maxCol]; // mid行的最大值
            int max3 = mid + 1 < m ? mat[mid + 1][findMaxCol(mat, mid + 1)] : -1; // mid+1行的最大值
            if (max2 > max1 && max2 > max3)
                return new int[] { mid, maxCol };
            if (max1 > max3)
                r = mid - 1;
            else
                l = mid + 1;
        }
        return new int[] { l, findMaxCol(mat, l) };
    }

    int findMaxCol(int[][] mat, int x) { // 返回x行中最大值的那一列
        int maxCol = 0, n = mat[x].length;
        for (int y = 0; y < n; y++) {
            if (mat[x][y] >= mat[x][maxCol]) {
                maxCol = y;
            }
        }
        return maxCol;
    }
}

// Find Smallest Common Element in All Rows (M)
// Minimum Cost to Connect Two Groups of Points (H)
// All Divisions With the Highest Score of a Binary Array (M)

// https://leetcode-cn.com/problems/find-a-peak-element-ii/solution/1901-zhao-chu-ding-feng-yuan-su-ii-er-fe-a8jg/