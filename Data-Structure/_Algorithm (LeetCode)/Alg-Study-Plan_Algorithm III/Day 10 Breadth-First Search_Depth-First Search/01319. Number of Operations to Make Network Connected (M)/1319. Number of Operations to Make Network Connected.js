// 1319. Number of Operations to Make Network Connected
/*
There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

Example 1:
Input: n = 4, connections = [[0,1],[0,2],[1,2]] Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
*/
{
    // UnionFind
    var makeConnected = function (n, connections) {
        if (connections.length < n - 1) return -1; // We need n-1 lines to connect n computers.
        const unionFind = new UnionFind(n);
        for (const c of connections) {
            unionFind.union(c[0], c[1]);
        }
        return unionFind.countUnion() - 1; // We need n-1 changes to connect n union of computers.
    };

    class UnionFind {
        constructor(n) {
            this.parents = [...Array(n).keys()];
        }

        union(x, y) {
            const px = this.find(x);
            const py = this.find(y);

            if (px !== py) {
                this.parents[py] = px;
            }
        }

        find(x) {
            if (this.parents[x] === x) return x;
            const p = this.find(this.parents[x]);
            this.parents[x] = p;
            return p;
        }

        countUnion() {
            return this.parents.reduce((prev, p) => {
                prev.add(this.find(p));
                return prev;
            }, new Set()).size;
        }
    }
    // Minimize Malware Spread (H)
    // Escape a Large Maze (H)
    // Find a Corresponding Node of a Binary Tree in a Clone of That Tree (M)
}
{
    let dfs = (n, checked, map) => {
        checked[n] = true;
        for (let i of map[n]) {
            if (!checked[i]) {
                dfs(i, checked, map);
            }
        }
    }

    var makeConnected = function (n, connections) {
        if (connections.length < n - 1)
            return -1;
        let checked = new Array(n).fill(false);
        let map = [];
        for (let i = 0; i < n; i++)
            map[i] = [];
        let cluster = 0;
        for (let conn of connections) {
            map[conn[0]].push(conn[1]);
            map[conn[1]].push(conn[0]);
        }
        for (let i = 0; i < n; i++) {
            if (!checked[i]) {
                dfs(i, checked, map);
                cluster++;
            }
        }
        return cluster - 1;
    };
    // Minimize Malware Spread (H)
    // Escape a Large Maze (H)
    // Find a Corresponding Node of a Binary Tree in a Clone of That Tree (M)
}
{
    //dfs
    const dfs = (n,checked,map) => {
        checked[n] = true;
        for(let i of map[n]){
            if(!checked[i]){
                dfs(i,checked,map);
            }
        }
    }
    
    var makeConnected = function(n, connections) {
        if(connections.length < n-1)
            return -1;
        let checked = new Array(n).fill(false);
        let map = [];
        for(let i = 0; i < n;i++)
            map[i] = [];
        let cluster = 0;
        for(let conn of connections){
            map[conn[0]].push(conn[1]);
            map[conn[1]].push(conn[0]);
        }
        for(let i = 0; i < n;i++){
            if(!checked[i]){
                dfs(i,checked,map);
                cluster++;
            }
        }
        return cluster-1;
    };
    // Minimize Malware Spread (H)
    // Escape a Large Maze (H)
    // Find a Corresponding Node of a Binary Tree in a Clone of That Tree (M)
}