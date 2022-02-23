// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)

class Graph {
  constructor(adjList = {}) {
    // the adjacency list is of type Object<Number,Array<Number>>
    this.adjList = adjList;
  }
}

function dfs(graph, root, visited = new Set()) {
  if (visited.has(root)) return;
  else {
    console.log(root);
    visited.add(root);
    for (let neighbour of graph.adjList[root])
      dfs(graph, neighbour, visited);
  }
}


