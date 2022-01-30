// follow up 1 : return any island position
/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, i, j, m, n, ans) => {
    //base case;  >= important !!!
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] === '0') return;
    ans.push([i, j]);

    // reached all turn to '0'
    grid[i][j] = '0';
    // 4 directions
    dfs(grid, i + 1, j, m, n, ans);
    dfs(grid, i - 1, j, m, n, ans);
    dfs(grid, i, j + 1, m, n, ans);
    dfs(grid, i, j - 1, m, n, ans);
}

var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;
    let ans = []; // to hold all island
    // one way go to end

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res += 1;
                dfs(grid, i, j, m, n, ans);
                console.log('ans=', ans);
            }
        }
    }
    return res;
};
/*

ans= [
  [ 0, 0 ], [ 1, 0 ],
  [ 2, 0 ], [ 2, 1 ],
  [ 1, 1 ], [ 0, 1 ],
  [ 0, 2 ], [ 0, 3 ],
  [ 1, 3 ]
]


*/