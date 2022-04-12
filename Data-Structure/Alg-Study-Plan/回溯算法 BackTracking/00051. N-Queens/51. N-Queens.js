// 51. N-Queens
/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:
Input: n = 1
Output: [["Q"]]
*/
{
    function isValid(row, col, board, n) {

        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 检查 45度角是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // 检查 135度角是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    }
    var solveNQueens = function (n) {
        let board = new Array(n).fill([]).map(() => new Array(n).fill('.'));
        function transformChessBoard(chessBoard) {
            let chessBoardBack = [];
            board.forEach(row => {
                let rowStr = '';
                row.forEach(value => {
                    rowStr += value;
                })
                chessBoardBack.push(rowStr);
            })

            return chessBoardBack;
        }

        let result = [];

        function backtracking(row, chessBoard) {
            if (row === n) {
                result.push(transformChessBoard(chessBoard));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (isValid(row, col, chessBoard, n)) {
                    chessBoard[row][col] = 'Q';
                    backtracking(row + 1, chessBoard);
                    chessBoard[row][col] = '.';
                }
            }
        }

        backtracking(0, board)
        return result
    };
    // N-Queens II (H)
    // Grid Illumination (H)
}