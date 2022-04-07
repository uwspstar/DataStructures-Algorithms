// 286. Walls and Gates
/*
You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example 1:
Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]

Example 2:
Input: rooms = [[-1]]
Output: [[-1]]
*/
{
    function dfs(rooms, i, j, dist, isStart, M, N) {
        if (i < 0 || j < 0 || i >= M || j >= N) return;
        if (rooms[i][j] === -1) return;
        if (dist >= rooms[i][j] && !isStart) return;

        rooms[i][j] = dist;

        dfs(rooms, i - 1, j, dist + 1, false, M, N);
        dfs(rooms, i + 1, j, dist + 1, false, M, N);
        dfs(rooms, i, j - 1, dist + 1, false, M, N);
        dfs(rooms, i, j + 1, dist + 1, false, M, N);
    }

    var wallsAndGates = function (rooms) {
        const M = rooms.length;
        const N = rooms[0].length;

        for (var i = 0; i < M; i++) {
            for (var j = 0; j < N; j++) {
                if (rooms[i][j] !== 0) continue;
                dfs(rooms, i, j, 0, true, M, N);
            }
        }
    };
    // Shortest Distance from All Buildings (H)
    // Robot Room Cleaner (H)
}