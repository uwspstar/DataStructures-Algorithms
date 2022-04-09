// 1192. Critical Connections in a Network
/*
here are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network in any order.

Example 1:
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]] Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
*/

{
    var criticalConnections = function (n, connections) {
        let map = {}
        for (let i = 0; i < n; i++) {
            map[i] = [];
        }
        for (let [a, b] of connections) {
            map[a].push(b), map[b].push(a);
        }
        let disc = new Uint32Array(n), low = new Uint32Array(n), time = 1, ans = [];

        const dfs = (curr, prev) => {
            disc[curr] = low[curr] = time++;

            for (let next of map[curr]) {
                if (!disc[next]) {
                    dfs(next, curr);
                    low[curr] = Math.min(low[curr], low[next]);
                } else if (next !== prev) {
                    low[curr] = Math.min(low[curr], disc[next]);
                }
                if (low[next] > disc[curr]) {
                    ans.push([curr, next]);
                }
            }
        }
        dfs(0, -1);
        return ans
    };
    // Cheapest Flights Within K Stops (M)
    // Sum of Distances in Tree (M)
    // Loud and Rich (H)
}