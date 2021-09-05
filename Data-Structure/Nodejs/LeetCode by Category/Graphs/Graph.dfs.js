{
    const graph = {
        a: ['b','c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    }

    const depthFirstPrint = (graph, source) => {

    }

    depthFirstPrint(graph, 'a'); //abdfce
}


{
    //https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Depth-first-search-DFS-Graph-search
    function *dfs(first) {
        const visited = new Map();
        const visitList = new Stack();//

        visitList.add(first);

        while (!visitList.isEmpty()) {
            const node = visitList.remove();
            if (node && !visited.has(node)) {
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj => visitList.add(adj));
            }
        }
    }
}