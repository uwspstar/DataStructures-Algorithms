# 岛屿题目 Islands

### 二维矩阵本质上是一幅「图」

```js
// return the number of islands
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const dfs = (grid, M, N, i, j, visited) => {
  if (i < 0 || j < 0 || i >= M || j >= N) return;
  if (grid[i][j] === '0') return;
  if (visited[i][j]) return;

  visited[i][j] = true;

  // 递归遍历上下左右的节点
  for (let d of dirs) {
    let nextRow = i + d[0];
    let nextCol = j + d[1];
    dfs(grid, M, N, nextRow, nextCol, visited);
  }

  /*
    dfs (grid, M, N, i + 1, j, visited);
    dfs (grid, M, N, i - 1, j, visited);
    dfs (grid, M, N, i, j + 1, visited);
    dfs (grid, M, N, i, j - 1, visited);
    */
};

var numIslands = function (grid) {
  let res = 0;
  let M = grid.length;
  let N = grid[0].length;
  let visited = [...Array(M)].map((x) => Array(N).fill(false));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        res++;
        dfs(grid, M, N, i, j, visited);
      }
    }
  }
  return res;
};
```

```java
// 方向数组，分别代表上、下、左、右
int[][] dirs = new int[][]{{-1,0}, {1,0}, {0,-1}, {0,1}};

void dfs(int[][] grid, int i, int j, boolean[] visited) {
    int m = grid.length, n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) { // 超出索引边界
        return;
    }
    if (visited[i][j]) {// 已遍历过 (i, j)
        return;
    }

    // 进入节点 (i, j)
    visited[i][j] = true;

    // 递归遍历上下左右的节点
    for (int[] d : dirs) {
        int next_i = i + d[0];
        int next_j = j + d[1];
        dfs(grid, next_i, next_j, visited);
    }
    // 离开节点 (i, j)
}
```

```java
// 二维矩阵遍历框架
void dfs(int[][] grid, int i, int j, boolean[] visited) {
    int m = grid.length, n = grid[0].length;

    if (i < 0 || j < 0 || i >= m || j >= n) {// 超出索引边界
        return;
    }
    if (visited[i][j]) {// 已遍历过 (i, j)
        return;
    }
    // 进入节点 (i, j)
    visited[i][j] = true;

    dfs(grid, i - 1, j, visited); // 上
    dfs(grid, i + 1, j, visited); // 下
    dfs(grid, i, j - 1, visited); // 左
    dfs(grid, i, j + 1, visited); // 右
}
```
