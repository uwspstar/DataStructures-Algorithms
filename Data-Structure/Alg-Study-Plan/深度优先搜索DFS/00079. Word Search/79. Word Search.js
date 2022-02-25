//79. Word Search
/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/
const dfs = (board, word, M, N, row, col, len, visited) => {
    if (len === word.length) {
        return true;
    }
    if (row < 0 || row >= M || col < 0 || col >= N) { // 当前点越界 返回false
        return false;
    }
    if (visited[row][col]) { // 当前点已经访问过，或，非目标点
        return false;
    }

    if (board[row][col] != word[len]) { // 当前点已经访问过，或，非目标点
        return false;
    }
    // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
    visited[row][col] = true;  // 记录一下当前点被访问了

    // canFindRest：基于当前选择的点[row,col]，能否找到剩余字符的路径。
    const res = dfs(board, word, M, N, row + 1, col, len + 1, visited)
        || dfs(board, word, M, N, row - 1, col, len + 1, visited)
        || dfs(board, word, M, N, row, col + 1, len + 1, visited)
        || dfs(board, word, M, N, row, col - 1, len + 1, visited);

    if (res) { // 基于当前点[row,col]，可以为剩下的字符找到路径
        return true;
    }

    visited[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
    return false;
};

const exist = (board, word) => {
    const M = board.length;
    const N = board[0].length;
    const visited = new Array(M);    // 二维矩阵used，存放bool值
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N);
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] == word[0] && dfs(board, word, M, N, i, j, 0, visited)) { // 找到起点且递归结果为真，找到目标路径
                return true;
            }
        }
    }
    return false; // 怎么样都没有返回true，则返回false
};