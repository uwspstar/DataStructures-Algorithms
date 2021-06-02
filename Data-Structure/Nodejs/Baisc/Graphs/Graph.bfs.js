{//https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Depth-first-search-DFS-Graph-search
    function *bfs(first) {
        const visited = new Map();
        const visitList = new Queue();//

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