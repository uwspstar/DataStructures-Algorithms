// 289. Game of Life
/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
*/
{
    //如上图所示，已更新细胞的状态会影响到周围其他还未更新细胞状态的计算。
    //一个最简单的解决方法就是复制一份原始数组，复制的那一份永远不修改，只作为更新规则的引用。这样原始数组的细胞值就不会被污染了。
    var gameOfLife = function (board) {
        let neighbors = [0, 1, -1];

        let rows = board.length;
        let cols = board[0].length;

        // 创建复制数组 copyBoard
        let copyBoard = [...Array(rows)].map(x => Array(cols));

        // 从原数组复制一份到 copyBoard 中
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                copyBoard[row][col] = board[row][col];
            }
        }

        // 遍历面板每一个格子里的细胞
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // 对于每一个细胞统计其八个相邻位置里的活细胞数量
                let liveNeighbors = 0;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (!(neighbors[i] == 0 && neighbors[j] == 0)) {
                            let r = (row + neighbors[i]);
                            let c = (col + neighbors[j]);
                            // 查看相邻的细胞是否是活细胞
                            if ((r < rows && r >= 0) && (c < cols && c >= 0) && (copyBoard[r][c] == 1)) {
                                liveNeighbors += 1;
                            }
                        }
                    }
                }

                // 规则 1 或规则 3      
                if ((copyBoard[row][col] == 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
                    board[row][col] = 0;
                }
                // 规则 4
                if (copyBoard[row][col] == 0 && liveNeighbors == 3) {
                    board[row][col] = 1;
                }
            }
        } 
        // https://leetcode-cn.com/problems/game-of-life/solution/sheng-ming-you-xi-by-leetcode-solution/

    };
}