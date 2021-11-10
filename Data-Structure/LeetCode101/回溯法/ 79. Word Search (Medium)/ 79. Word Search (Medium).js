/*
给定一个字母矩阵，所有的字母都与上下左右四个方向上的字母相连。给定一个字符串，求 字符串能不能在字母矩阵中寻找到

Input: word = "ABCCED", board =
[[’A’,’B’,’C’,’E’],
 [’S’,’F’,’C’,’S’],
 [’A’,’D’,’E’,’E’]]
Output: true

不同于排列组合问题，本题采用的并不是修改输出方式，而是修改访问标记。在我们对任意 位置进行深度优先搜索时，我们先标记当前位置为已访问，以避免重复遍历(如防止向右搜索后 又向左返回);在所有的可能都搜索完成后，再回改当前位置为未访问，防止干扰其它位置搜索 到当前位置。使用回溯法，我们可以只对一个二维的访问矩阵进行修改，而不用把每次的搜索状 态作为一个新对象传入递归函数中。

使用回溯法，我们可以只对一个二维的访问矩阵进行修改，而不用把每次的搜索状态作为一个新对象传入递归函数中。

*/

{
    const exist = (board, word) => {
        let ans = false; 
        let M = board.length;
        let N = board[0].length;
        let path = board[0][0];

        let visited = [];
        for (let i = 0; i < M; i++) {
            let tmp = [];
            for (let j = 0; j < N; j++) {
                tmp.push(false);
            }
            visited.push(tmp);
        }

        const backTracking = (i, j) => {

            if (i < 0 || j < 0 || i >= M || j >= N) return;
            //if (word.indexOf(board[i][j]) === -1) return;  // cannot ues this , repeat word
            if (path.length > word.length) return;

            if (visited[i][j]) return;
            if (ans) return; // if found, break the backTracking

            if (path === word) {
                console.log('------> found ans path=', path, word);
                ans = true;
                return;
            }
            console.log('path=', path, word);

            visited[i][j] = true;
            path = path + board[i][j];
            backTracking(i + 1, j);
            backTracking(i - 1, j);
            backTracking(i, j - 1);
            backTracking(i, j + 1);
            path = path.substring(0, path.length - 1)
            visited[i][j] = false;
        }

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                backTracking(i, j);
            }
        }

        return ans;
    }

    let word = 'ABCCED';
    let board =
        [['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']];

    //console.log(exist(board, word))

    //console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],"SEE"));

    console.log(exist([["a"]], "a"));
}
