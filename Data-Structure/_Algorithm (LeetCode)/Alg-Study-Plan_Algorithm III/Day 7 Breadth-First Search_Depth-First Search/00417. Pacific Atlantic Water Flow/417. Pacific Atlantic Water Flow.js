// 417. Pacific Atlantic Water Flow
/*
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Example 1:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Example 2:
Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
*/
{
    /**
 * @param {number[][]} heights
 * @return {number[][]}
 */
    var pacificAtlantic = function (heights) {
        // 矩阵的行数  列数
        let rows = heights.length,
            cols = heights[0].length;
        // 太平洋队列
        let pacificQueue = [],
            // 大西洋队列
            atlanticQueue = [];
        // 方向数组
        let directions = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
        ];
        // 太平洋已访问过的单元格
        let pacificVisited = new Array(rows)
            .fill(false)
            .map(() => new Array(cols).fill(false));
        // 大西洋已访问过的单元格
        let atlanticVisited = new Array(rows)
            .fill(false)
            .map(() => new Array(cols).fill(false));
        for (let i = 0; i < rows; i++) {
            // 最左边一列
            pacificQueue.push([i, 0]);
            pacificVisited[i][0] = true;
            // 最右边一列
            atlanticQueue.push([i, cols - 1]);
            atlanticVisited[i][cols - 1] = true;
        }
        for (let i = 0; i < cols; i++) {
            // 最上边一行
            pacificQueue.push([0, i]);
            pacificVisited[0][i] = true;
            // 最下边一行
            atlanticQueue.push([rows - 1, i]);
            atlanticVisited[rows - 1][i] = true;
        }
        while (pacificQueue.length) {
            let [x, y] = pacificQueue.shift();
            for (let dir of directions) {
                let curX = x + dir[0],
                    curY = y + dir[1];
                // 没有越界  之前没有访问过  并且当前单元格高度比上一个单元格高度要高
                if (
                    curX >= 0 &&
                    curX < rows &&
                    curY >= 0 &&
                    curY < cols &&
                    !pacificVisited[curX][curY] &&
                    heights[curX][curY] >= heights[x][y]
                ) {
                    pacificQueue.push([curX, curY]);
                    pacificVisited[curX][curY] = true;
                }
            }
        }
        while (atlanticQueue.length) {
            let [x, y] = atlanticQueue.shift();
            for (let dir of directions) {
                let curX = x + dir[0],
                    curY = y + dir[1];
                // 没有越界  之前没有访问过  并且当前单元格高度比上一个单元格高度要高
                if (
                    curX >= 0 &&
                    curX < rows &&
                    curY >= 0 &&
                    curY < cols &&
                    !atlanticVisited[curX][curY] &&
                    heights[curX][curY] >= heights[x][y]
                ) {
                    atlanticQueue.push([curX, curY]);
                    atlanticVisited[curX][curY] = true;
                }
            }
        }
        let res = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // 既能流向太平洋又能流向大西洋
                if (pacificVisited[i][j] && atlanticVisited[i][j]) res.push([i, j]);
            }
        }
        return res;
    };

    // https://leetcode-cn.com/problems/pacific-atlantic-water-flow/solution/si-lu-zhi-you-3bu-dai-ma-zhu-shi-xiang-x-uhbg/
}
{
    const canReachOcean = (heights, row, col, prev, ocean) => {
        if (row < 0 ||
            row > heights.length - 1 ||
            col < 0 ||
            col > heights[row].length - 1) return;

        // This means that water cannot flow out of this location to the previous one
        if (heights[row][col] < prev) return;
        if (ocean[row][col]) return;

        ocean[row][col] = true;

        // Check paths that are in these locations N/S/E/W
        canReachOcean(heights, row + 1, col, heights[row][col], ocean)
        canReachOcean(heights, row - 1, col, heights[row][col], ocean)
        canReachOcean(heights, row, col + 1, heights[row][col], ocean)
        canReachOcean(heights, row, col - 1, heights[row][col], ocean)
    }

    var pacificAtlantic = function (heights) {
        if (heights.length === 0) return [];
        let numRows = heights.length;
        let numCols = heights[0].length;

        let atlantic = [];
        let pacific = [];

        for (let i = 0; i < numRows; i++) {
            atlantic.push(new Array(numCols).fill(false))
            pacific.push(new Array(numCols).fill(false))
        }

        for (let col = 0; col < numCols; col++) {
            canReachOcean(heights, 0, col, -1, pacific);
            canReachOcean(heights, numRows - 1, col, -1, atlantic);
        }

        for (let row = 0; row < numRows; row++) {
            canReachOcean(heights, row, 0, -1, pacific);
            canReachOcean(heights, row, numCols - 1, -1, atlantic);
        }

        let result = [];

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (atlantic[row][col] && pacific[row][col]) {
                    result.push([row, col]);
                }
            }
        }

        return result

    };
    // Partition Array Into Three Parts With Equal Sum (E)
    // Stone Game II (M)
    // Maximum Number of Weeks for Which You Can Work (M)
}