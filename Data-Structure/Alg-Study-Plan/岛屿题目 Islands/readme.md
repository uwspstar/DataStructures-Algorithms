---
marp: true
theme: default
size: 16:9
---

# 岛屿题目

- https://labuladong.gitee.io/algo/1/9/

- 二维矩阵本质上是一幅「图」，所以遍历的过程中需要一个 visited 布尔数组防止走回头路

- PS：这类 `DFS` 算法还有个别名叫做 `FloodFill` 算法，现在有没有觉得 `FloodFill` 这个名字还挺贴切的

- https://zh.wikipedia.org/wiki/Flood_fill

- PS：处理这类岛屿题目除了 DFS/BFS 算法之外，Union Find 并查集算法也是一种可选的方法，前文 Union Find 算法运用 就用 Union Find 算法解决了一道类似的问题。

```java
// 二叉树遍历框架
void traverse(TreeNode root) {
    traverse(root.left);
    traverse(root.right);
}

// 二维矩阵遍历框架
void dfs(int[][] grid, int i, int j, boolean[] visited) {
    int m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        // 超出索引边界
        return;
    }
    if (visited[i][j]) {
        // 已遍历过 (i, j)
        return;
    }
    // 进入节点 (i, j)
    visited[i][j] = true;

    // 递归遍历上下左右的节点
    dfs(grid, i - 1, j, visited); // 上
    dfs(grid, i + 1, j, visited); // 下
    dfs(grid, i, j - 1, visited); // 左
    dfs(grid, i, j + 1, visited); // 右
}
```

```java
// 方向数组，分别代表上、下、左、右
int[][] dirs = new int[][]{{-1,0}, {1,0}, {0,-1}, {0,1}};

void dfs(int[][] grid, int i, int j, boolean[] visited) {
    int m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        // 超出索引边界
        return;
    }
    if (visited[i][j]) {
        // 已遍历过 (i, j)
        return;
    }

    // 进入节点 (i, j)
    visited[i][j] = true;
    // 递归遍历上下左右的节点
    // 这种写法无非就是用 for 循环处理上下左右的遍历罢了，你可以按照个人喜好选择写法。
    for (int[] d : dirs) {
        int next_i = i + d[0];
        int next_j = j + d[1];
        dfs(grid, next_i, next_j, visited);
    }
    // 离开节点 (i, j)
}
```

---

### 2 D [n x m] array to 1 D arr

- `(x, y) -> (x * m + y) = curr` 
- `x = curr / m`
- `y = cur  % m`
```java
// 4 x 3
// for [[4,.,.] -> (1, 1) ->  1 * 3 + 1 = 4
// for [[.,5,.] -> (1, 2) ->  1 * 3 + 2 = 5
// for [[.,11,.] -> (3, 2) -> 3 * 3 + 2 = 11
/* [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]
*/
```
---
### 2 D boolean visited
- `let visited = [...Array(M)].map(x => Array(N).fill(false));`