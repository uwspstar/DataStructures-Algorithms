//36. Valid Sudoku
//https://leetcode.com/problems/valid-sudoku/
//https://baffinlee.com/leetcode-javascript/problem/valid-sudoku.html
//https://dev.to/kaxmoglan/valid-sudoku-solution-in-js-gne
/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Complexity:

Time complexity : O(n^2).
Space complexity : O(n).
*/
{
    var isValidSudoku = function (board) {
        var map = {};
        let m = board.length;
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < m; j++) {
                let tmp = board[i][j];
                if (tmp === '.') continue;

                if (map['row_' + i + '-' + tmp] || map['clo_' + j + '-' + tmp] || map['block_' + Math.floor(i / 3) + '-' + Math.floor(j / 3) + '-' + tmp]) return false;

                map['row_' + i + '-' + tmp] = true;
                map['clo_' + j + '-' + tmp] = true;
                map['block_' + Math.floor(i / 3) + '-' + Math.floor(j / 3) + '-' + tmp] = true;
            }
        }
        return true;
    };

    let board1 = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
    //Output: true
    console.log(isValidSudoku(board1));
}
{
    var isValidSudoku = function (board) {
        var map = {};
        //var tmp = 0;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                let tmp = board[i][j];
                if (tmp === '.') continue;
                if (map['i' + i + tmp] || map['j' + j + tmp] || map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp]) return false;
                console.log('i=>', 'i' + i + tmp, 'j=>', 'j' + j + tmp, 'i=', i, 'j=', j);
                map['i' + i + tmp] = 1;
                map['j' + j + tmp] = 1;
                map['b' + Math.floor(i / 3) + Math.floor(j / 3) + tmp] = 1;
                console.log('map=', map, 'i=', i, 'j=', j);
            }
        }
        return true;
    };

    let board1 = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
    //Output: true
    console.log(isValidSudoku(board1));

    let board2 = [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    //Output: false
    //console.log(isValidSudoku(board2));
}


