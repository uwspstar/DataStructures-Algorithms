// 79. Word Search
/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/
{
    const dfs = (board, word, M, N, row, col, i, visited) => {
        // 判断当前点是否是目标路径上的点
        if (i === word.length) {
            return true;
        }

        if (row < 0 || row >= M || col < 0 || col >= N) {
            // 当前点越界 返回false
            return false;
        }

        if (visited[row][col]) {
            // 当前点已经访问过，或，非目标点
            return false;
        }

        if (board[row][col] != word[i]) {
            // 当前点已经访问过，或，非目标点
            return false;
        }

        // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
        visited[row][col] = true;  // 记录一下当前点被访问了

        // 基于当前选择的点[row,col]，能否找到剩余字符的路径。retrun true/false
        const res = dfs(board, word, M, N, row + 1, col, i + 1, visited)
            || dfs(board, word, M, N, row - 1, col, i + 1, visited)
            || dfs(board, word, M, N, row, col + 1, i + 1, visited)
            || dfs(board, word, M, N, row, col - 1, i + 1, visited);

        if (res) {
            // 基于当前点[row,col]，可以为剩下的字符找到路径
            return true;
        }

        // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
        visited[row][col] = false;

        return false;
    };

    const exist = (board, word) => {
        const M = board.length;
        const N = board[0].length;

        // 二维矩阵used，存放bool值
        const visited = [...Array(M)].map(x => Array(N).fill(false));

        for (let i = 0; i < M; i++) { // 遍历找起点，作为递归入口
            for (let j = 0; j < N; j++) {
                // 找到起点且递归结果为真，找到目标路径
                if (board[i][j] == word[0] && dfs(board, word, M, N, i, j, 0, visited)) {
                    return true;
                }
            }
        }
        return false;
    };

    // Robot Room Cleaner (H)
    // Maximum Number of Accepted Invitations (M)
    // Minimum Skips to Arrive at Meeting On Time (H)
}