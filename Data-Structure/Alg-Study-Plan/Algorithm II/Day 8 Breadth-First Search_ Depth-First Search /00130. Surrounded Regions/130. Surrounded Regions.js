// 130. Surrounded Regions
/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/
{
    // Approach 1: DFS (Depth-First Search)
    // Approach 2: BFS (Breadth-First Search)

    // With using "visited" matrix
    var solve = function (board) {
        if (board.length == 0) return;
        let height = board.length, width = board[0].length;
        let visited = new Array(height).fill(0).map(() => new Array(width).fill(false));
        checkBorders(board, visited);

        for (let row = 1; row < height - 1; row++) {
            for (let col = 1; col < width - 1; col++) {
                if (board[row][col] == 'O') {
                    dfs(row, col, board, visited, true);
                }
            }
        }
        // Time Complexity: O(m*n), we visit all nodes only once
        // Space Complexity: O(m*n), visited matrix
    };

    function checkBorders(board, visited) {
        let height = board.length, width = board[0].length;
        for (let row = 0; row < height; row++) {
            if (board[row][0] === 'O') dfs(row, 0, board, visited, false);
            if (board[row][width - 1] === 'O') dfs(row, width - 1, board, visited, false);
        }
        for (let col = 0; col < width; col++) {
            if (board[0][col] === 'O') dfs(0, col, board, visited, false);
            if (board[height - 1][col] === 'O') dfs(height - 1, col, board, visited, false);
        }
    }

    function dfs(row, col, board, visited, mark) {
        if (row < 0 || row >= board.length || col < 0
            || col >= board[0].length || visited[row][col] == true
            || board[row][col] === 'X') return;
        visited[row][col] = true;
        if (mark) board[row][col] = 'X';
        const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        for (let dir of DIRECTIONS) {
            dfs(row + dir[0], col + dir[1], board, visited, mark);
        }
    }
    // https://leetcode.com/problems/surrounded-regions/discuss/931052/Two-DFS-JS-Solutions

    // Minesweeper
    // Number of Times Binary String Is Prefix-Aligned
    // Sentence Similarity III
}