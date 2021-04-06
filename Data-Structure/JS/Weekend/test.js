{
    const graph = {
        0: [1, 2],
        1: [2],
        2: [0, 3],
        3: [3]
    };

    const visited = new Set();
    const dfs = node => {
        console.log(node);
        visited.add(node);
        graph[node].forEach(c => {
            if (!visited.has(c)) {
                dfs(c)
            }
        })

    }
}