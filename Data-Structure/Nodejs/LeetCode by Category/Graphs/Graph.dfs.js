{
    const graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    }
    //iteration
    const depthFirstPrint = (graph, source) => {
        const stack = [source];

        while (stack.length > 0) {
            const current = stack.pop();
            console.log(current);
            for (let neighbor of graph[current]) {
                stack.push(neighbor);
            }
        }
    }

    depthFirstPrint(graph, 'a'); //acebdf //abdfce
}
{
    const graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    }
    //recursion
    const depthFirstPrint = (graph, source) => {
        console.log(source);
        for (let neighbor of graph[source]) {
            depthFirstPrint(graph, neighbor);
        }
    }

    depthFirstPrint(graph, 'a'); //acebdf //abdfce
}
{
    const graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
    }
    //iteration : not recommend
    const depthFirstPrint = (graph, source, stack = [source]) => {
        if (stack.length === 0) return;

        const current = stack.pop();

        console.log(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }

        depthFirstPrint(graph, stack[0], stack);
    }

    depthFirstPrint(graph, 'a'); //acebdf //abdfce
}

{
    //https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Depth-first-search-DFS-Graph-search
    function* dfs(first) {
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