### Backtracking Algorithm

Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point in time. Backtracking is often used for solving constraint satisfaction problems such as puzzles, games, and combinatorial problems.

回溯算法是一种通用的算法技术，通过递归地逐步构建解决方案，一次一个地尝试，并在任何时候删除那些不满足问题约束的解决方案。回溯算法常用于解决约束满足问题，如谜题、游戏和组合问题。

### Example Problems and Node.js Code Examples

#### 1. N-Queens Problem (N皇后问题)

The N-Queens problem is to place N queens on an N×N chessboard such that no two queens attack each other.

N皇后问题是要在N×N的棋盘上放置N个皇后，使得没有两个皇后互相攻击。

##### Node.js Code Example

```javascript
function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const res = [];
    
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            res.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue;
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.';
        }
    }
    
    backtrack(0);
    return res;
}

// Test the N-Queens solution
const solutions = solveNQueens(4);
console.log("N-Queens solutions for N=4:");
console.log(solutions);
```

#### 2. Subsets Problem (子集问题)

The Subsets problem is to find all possible subsets of a given set.

子集问题是要找到给定集合的所有可能子集。

##### Node.js Code Example

```javascript
function subsets(nums) {
    const res = [];
    
    function backtrack(start, path) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    
    backtrack(0, []);
    return res;
}

// Test the Subsets solution
const subsetsResult = subsets([1, 2, 3]);
console.log("Subsets of [1, 2, 3]:");
console.log(subsetsResult);
```

### Detailed Process Explanation (详细过程解释)

#### N-Queens Problem

1. **Initialization (初始化)**: Create an empty board and a result array to store solutions.
   - 创建一个空棋盘和一个结果数组来存储解决方案。

2. **IsValid Function (验证函数)**: Check if a queen can be placed at a given position.
   - 检查是否可以在给定位置放置一个皇后。

3. **Backtrack Function (回溯函数)**: Place queens row by row and backtrack if a solution is not found.
   - 一行一行地放置皇后，如果未找到解决方案则回溯。

4. **Base Case (基准情况)**: If all queens are placed, add the solution to the result array.
   - 如果所有皇后都已放置，则将解决方案添加到结果数组中。

#### Subsets Problem

1. **Initialization (初始化)**: Create a result array to store subsets.
   - 创建一个结果数组来存储子集。

2. **Backtrack Function (回溯函数)**: Generate all subsets by including or excluding each element.
   - 通过包含或排除每个元素来生成所有子集。

3. **Base Case (基准情况)**: Add the current subset to the result array.
   - 将当前子集添加到结果数组中。

### Time and Space Complexity (时间和空间复杂度)

| Problem (问题) | Time Complexity (时间复杂度) | Space Complexity (空间复杂度) |
| --- | --- | --- |
| N-Queens | O(N!) | O(N^2) |
| Subsets | O(2^N) | O(2^N) |

- \( N \): Size of the input (输入的大小)

### Comparison Table (比较表)

| Problem (问题) | Description (描述) | Time Complexity (时间复杂度) | Space Complexity (空间复杂度) |
| --- | --- | --- | --- |
| N-Queens | Place N queens on an N×N chessboard (在N×N的棋盘上放置N个皇后) | O(N!) | O(N^2) |
| Subsets | Find all subsets of a set (找到集合的所有子集) | O(2^N) | O(2^N) |

Backtracking is a powerful technique for solving combinatorial problems where you need to explore all possible solutions and discard those that do not meet the constraints. Understanding and implementing backtracking algorithms can help solve complex problems efficiently.

回溯是一种强大的技术，用于解决组合问题，在这种问题中需要探索所有可能的解决方案并丢弃那些不满足约束条件的解决方案。理解和实现回溯算法可以帮助高效地解决复杂问题。
