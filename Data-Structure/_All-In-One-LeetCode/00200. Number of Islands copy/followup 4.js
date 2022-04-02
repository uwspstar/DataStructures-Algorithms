// not modify the original grid
/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, i, j, m, n, ans, visit) => {
    //base case;  >= important !!!
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] === '0') return; // important !!!

    if (visit[i][j]) return;

    ans.push([i, j]);
    // reached all turn to '0'
    //grid[i][j] = '0';

    visit[i][j] = true;
    // 4 directions
    dfs(grid, i + 1, j, m, n, ans, visit);
    dfs(grid, i - 1, j, m, n, ans, visit);
    dfs(grid, i, j + 1, m, n, ans, visit);
    dfs(grid, i, j - 1, m, n, ans, visit);

    return ans;
}

var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;
    let visit = [];
    let allIslands = [];// all islands
    for (let i = 0; i < m; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp[j] = false;
        }
        visit.push(tmp);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visit[i][j]) {
                let island = []; // one island
                res += 1;
                allIslands.push(dfs(grid, i, j, m, n, island, visit));
                console.log('island=', island);
                console.log('visit=', visit);
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
[
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]


island= [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ]
visit= [
  [ true, true, false, false, false ],
  [ true, true, false, false, false ],
  [ false, false, false, false, false ],
  [ false, false, false, false, false ]
]
island= [ [ 2, 2 ] ]
visit= [
  [ true, true, false, false, false ],
  [ true, true, false, false, false ],
  [ false, false, true, false, false ],
  [ false, false, false, false, false ]
]
island= [ [ 3, 3 ], [ 3, 4 ] ]
visit= [
  [ true, true, false, false, false ],
  [ true, true, false, false, false ],
  [ false, false, true, false, false ],
  [ false, false, false, true, true ]
]
allIslands= [
  [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ],
  [ [ 2, 2 ] ],
  [ [ 3, 3 ], [ 3, 4 ] ]
]
longest island= [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 1 ] ]
shortest island= [ [ 2, 2 ] ]

*/