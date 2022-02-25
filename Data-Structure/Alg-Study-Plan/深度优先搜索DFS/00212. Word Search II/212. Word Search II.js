// 212. Word Search II
/*
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
*/
const getNewList = (words, set, ch) => {
    let worlList = [];
    for (word of words) {
        if (!set.has(word)) {
            if (word[0] === ch) {
                worlList.push(word);
            }
        }
    }
    return worlList;
}
const dfs = (board, word, M, N, i, j, visited, set, arr, idx) => {
    if (arr.length > word.length) return;
    if (arr.length === word.length && arr.join('') === word) {
        set.add(word);
        return;
    }
    if (i < 0 || j < 0 || i >= M || j >= N) return;
    if (visited[i][j]) return;

    if (board[i][j] !== word[idx]) return; // very important 

    visited[i][j] = true;
    arr.push(board[i][j]);

    dfs(board, word, M, N, i + 1, j, visited, set, arr, idx + 1);
    dfs(board, word, M, N, i - 1, j, visited, set, arr, idx + 1);
    dfs(board, word, M, N, i, j + 1, visited, set, arr, idx + 1);
    dfs(board, word, M, N, i, j - 1, visited, set, arr, idx + 1);

    arr.pop();
    visited[i][j] = false;

}
var findWords = function (board, words) {
    let M = board.length;
    let N = board[0].length;
    let set = new Set();
    let visited = new Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = new Array(N).fill(false);
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            let c = board[i][j];
            let newList = getNewList(words, set, c);
            for (let word of newList) {
                if (board[i][j] === word[0] && !set.has(word) && !visited[i][j]) {
                    let arr = [];
                    dfs(board, word, M, N, i, j, visited, set, arr, 0);
                }
            }
        }
    }

    return [...set];
};