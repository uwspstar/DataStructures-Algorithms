const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

var solveSudoku = function (board) {
    function isValid(row, col, val, board) {
        let len = board.length;

        for (let i = 0; i < len; i++) {// 行不能重复
            if (board[row][i] === val) {
                return false;
            }
        }

        for (let i = 0; i < len; i++) {// 列不能重复
            if (board[i][col] === val) {
                return false;
            }
        }

        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        // 3 * 3
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false;
                }
            }
        }

        return true;
    }

    function backTracking() {

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') continue;

                for (let val = 1; val <= 9; val++) {
                    if (isValid(i, j, val.toString(), board)) {

                        console.log('val=', val);

                        board[i][j] = val.toString(); //
                        if (backTracking()) {
                            return true;
                        }
                        board[i][j] = `.`;// BACK
                    }
                }
                return false;
            }
        }
        return true;
    }
    backTracking(board);
    return board;
};

console.log('board = ', solveSudoku(board));