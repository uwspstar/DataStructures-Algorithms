// follow up 3 : return longest/ shortest island position
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

    return ans;
}

var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;

    let allIslands = [];// all islands

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                let island = []; // one island
                res += 1;
                allIslands.push(dfs(grid, i, j, m, n, island));
                console.log('island=', island);
            }
        }
    }
    console.log('allIslands=', allIslands);

    allIslands.sort((a, b) => b.length - a.length)

    console.log('longest island=', allIslands[0]);
    console.log('shortest island=', allIslands[allIslands.length - 1]);

    return res;
};

/*

island= [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ]
island= [ [ 2, 2 ] ]
island= [ [ 3, 3 ], [ 3, 4 ] ]
allIslands= [
  [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ],
  [ [ 2, 2 ] ],
  [ [ 3, 3 ], [ 3, 4 ] ]
]
longest island= [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ]
shortest island= [ [ 2, 2 ] ]


*/