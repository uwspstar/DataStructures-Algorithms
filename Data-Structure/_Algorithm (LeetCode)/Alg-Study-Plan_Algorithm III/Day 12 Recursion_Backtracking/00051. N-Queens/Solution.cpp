/*基本思路
PS：这道题在《算法小抄》 的第 43 页。

视频讲解回溯算法原理：回溯算法框架套路详解

N 皇后问题就是一个决策问题：对于每一行，我应该选择在哪一列防止皇后呢？

这就是典型的回溯算法题目，回溯算法的框架如下：

Copy
result = []
def backtrack(路径，选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径，选择列表)
        撤销选择
回溯算法框架就是遍历决策树的过程：

关于回溯算法的详细讲解可以看 46. 全排列 或者详细题解。

详细题解：回溯算法详解（修订版）

标签：回溯算法

解法代码
*/
class Solution
{
public:
    vector<vector<string> > res;

    /* 输入棋盘边长 n，返回所有合法的放置 */
    vector<vector<string> > solveNQueens(int n)
    {

        // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
        vector<string> board(n, string(n, '.'));
        backtrack(board, 0);
        return res;
    }

    // 路径：board 中小于 row 的那些行都已经成功放置了皇后
    // 选择列表：第 row 行的所有列都是放置皇后的选择
    // 结束条件：row 超过 board 的最后一行
    void backtrack(vector<string> &board, int row)
    {
        // 触发结束条件
        if (row == board.size())
        {
            res.push_back(board);
            return;
        }

        int n = board[row].size();
        for (int col = 0; col < n; col++)
        {
            // 排除不合法选择
            if (!isValid(board, row, col))
            {
                continue;
            }
            // 做选择
            board[row][col] = 'Q';
            // 进入下一行决策
            backtrack(board, row + 1);
            // 撤销选择
            board[row][col] = '.';
        }
    }

    /* 是否可以在 board[row][col] 放置皇后？ */
    bool isValid(vector<string> &board, int row, int col)
    {
        int n = board.size();
        // 检查列是否有皇后互相冲突
        for (int i = 0; i < n; i++)
        {
            if (board[i][col] == 'Q')
                return false;
        }
        // 检查右上方是否有皇后互相冲突
        for (int i = row - 1, j = col + 1;
             i >= 0 && j < n; i--, j++)
        {
            if (board[i][j] == 'Q')
                return false;
        }
        // 检查左上方是否有皇后互相冲突
        for (int i = row - 1, j = col - 1;
             i >= 0 && j >= 0; i--, j--)
        {
            if (board[i][j] == 'Q')
                return false;
        }
        return true;
    }
};
/*
 * 类似题目：
 * 46. 全排列（中等）
 */