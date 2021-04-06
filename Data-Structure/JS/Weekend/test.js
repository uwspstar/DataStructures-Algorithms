{
    const graph = {
        0: [1, 2],
        1: [2],
        2: [0, 3],
        3: [3]
    };

    const bfs = node => {
        const visited = new Set();
        visited.add(node)
        const q = [node];

        while (q.length) {
            let n = q.shift();
            console.log(n);

            graph[n].forEach(c => {
                if (!visited.has(c)) {
                    q.push(c);
                    visited.add(node);
                }
            })
        }
    }
    bfs(2);
    //console.log(dfs(2));
}
{
    
}