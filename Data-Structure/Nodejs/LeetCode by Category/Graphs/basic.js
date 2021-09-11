
//邻接表 adjacency list
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

{
    //has path <assume no circle graph>
    const hasPath = (graph, src, dis) => {
        if (src === dis) return true;
        for (let neighbor of graph[src]) {
            let found = hasPath(graph, neighbor, dis);
            if (found) return true;
        }
        return false;
    }

    console.log(hasPath(graph, 'f', 'k')); //true;
}
{
    //has path <assume no circle graph>
    const hasPath = (graph, src, dis) => {
        const queue = [src];
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr === dis) return true;
            for (let neighbor of graph[curr]) {
                queue.push(neighbor);
            }
        }
        return false;
    }
    console.log(hasPath(graph, 'f', 'k')); //true;
}
{
    //convert edges list to adjacency list
    /*
    const graph = {
        i: [j, k],
        j: [i],
        k: [i, m, l],
        m: [k],
        l: [k],
        o: [n],
        n: [o]
    }
    */
    //check cycle with hash set
    const undirectedPath = (edges, nodeA, nodeB) => {
        const graph = buildGraph(edges);
        return hasPath(graph, nodeA, nodeB, new Set())
    }

    const hasPath = (graph, src, dis, visited) => {
        if (src === dis) return true;
        if (visited.has(src)) return false;

        visited.add(src);

        for (let neighbor of graph[src]) {
            let found = hasPath(graph, neighbor, dis, visited);
            if (found) return true;
        }

        return false;
    }

    const buildGraph = edges => {
        const graph = {};

        for (let edge of edges) {
            const [a, b] = edge;
            if (!(a in graph)) graph[a] = [];
            if (!(b in graph)) graph[b] = [];
            graph[a].push(b);
            graph[b].push(a);
        }

        return graph;
    }
    console.log(buildGraph(edges));
    console.log(undirectedPath(edges, 'j', 'm'));
}
{
    //Connect Components Count
    const graph = {
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2]
    }
    const connectComponentsCount = graph => {
        const visited = new Set();
        let count = 0;

        for (let node in graph) {
            if (explore(graph, node, visited) === true) {
                count++;
            }
        }
        return count;
    }
    const explore = (graph, current, visited) => {
        if (visited.has(String(current))) return false;

        visited.add(String(current));

        for (let neighbor of graph[current]) {
            explore(graph, neighbor, visited);
        }

        return true;
    }

    console.log(connectComponentsCount(graph)) // 2
}
{
    //Largest Component Node Count
    const graph = {
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2]
    }
    const largestComponentNodeCount = (graph) => {
        const visited = new Set();
        let largest = 0;
        for (let node in graph) {
            const size = explore(graph, node, visited);
            largest = Math.max(largest, size)
        }
        return largest;
    }
    const explore = (graph, current, visited) => {
        if (visited.has(String(current))) return 0;

        visited.add(String(current));

        let size = 1;
        for (let neighbor of graph[current]) {
            size += explore(graph, neighbor, visited);
        }

        return size;
    }

    console.log(largestComponentNodeCount(graph)) // 4
}
{
    const edges = [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w', 'v']
    ];

    const shortestPath = (edges, nodeA, nodeB) => {
        const graph = buildGraph(edges);
        console.log('graph', graph);
        const visited = new Set([nodeA]);
        const queue = [[nodeA, 0]];

        while (queue.length > 0) {
            const [node, distance] = queue.shift();

            if (node === nodeB) return distance;

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, distance + 1]);
                }
            }

        }

        return -1;
    }

    const buildGraph = (edges) => {
        const graph = {};

        for (let edge of edges) {
            const [a, b] = edge;

            if (!(a in graph)) graph[a] = [];
            if (!(b in graph)) graph[b] = [];

            graph[a].push(b);
            graph[b].push(a);
        }

        return graph;
    }

    console.log('shortestPath=', shortestPath(edges, 'w', 'z'));
}
{
    //r = number of rows
    //c = number of columns
    //Time: O(rc)
    //Space: O(rc)

    const grid = [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
    ];

    const islandCount = (grid) => {
        const visited = new Set();
        let count = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid.length; c++) {
                let found = explore(grid, r, c, visited);
                if (found) count++;
            }
        }

        return count;
    }

    const explore = (grid, r, c, visited) => {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid[0].length;
        if (!rowInbounds || !colInbounds) return false;

        if (grid[r][c] === 'W') return false;

        const pos = r + ',' + c;
        if (visited.has(pos)) return false;
        visited.add(pos);

        explore(grid, r - 1, c, visited);
        explore(grid, r + 1, c, visited);
        explore(grid, r, c - 1, visited);
        explore(grid, r, c + 1, visited);

        return true;
    }

    console.log('islandCount=', islandCount(grid));
}

{
    const grid = [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
    ];

    const minimumIsland = (grid) => {
        const visited = new Set();

        let minSize = Infinity;
        for (let r = 0; r < grid.length; r += 1) {
            for (let c = 0; c < grid[0].length; c += 1) {
                const size = exploreSize(grid, r, c, visited);
                if (size > 0 && size < minSize) {
                    minSize = size;
                }
            }
        }

        return minSize;
    };

    const exploreSize = (grid, r, c, visited) => {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid[0].length;
        if (!rowInbounds || !colInbounds) return 0;

        if (grid[r][c] === 'W') return 0;

        const pos = r + ',' + c;
        if (visited.has(pos)) return 0;
        visited.add(pos);

        let size = 1;
        size += exploreSize(grid, r - 1, c, visited);
        size += exploreSize(grid, r + 1, c, visited);
        size += exploreSize(grid, r, c - 1, visited);
        size += exploreSize(grid, r, c + 1, visited);
        return size;
    };

    console.log(minimumIsland(grid)); // -> 2 
}