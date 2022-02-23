// Time complexity: O(|V|+|E|)
// Space complexity: O(|V|)
/*
Given an undirected graph of integers graph, represented by an adjacency list, and an integer root, create a function that prints its values in breadth first search, by considering the vertex whose value is root as the arbitrary node.

Example 1:

Input: graph = {"5" : [8, 1, 12], "8" : [5, 12, 14, 4], "12" : [5, 8, 14], "14" : [8, 12, 4], "4" : [8, 14], "1" : [5, 7], "7" : [1, 16], "16" : [7]}, root = 5

Output: 5 8 1 12 14 4 7 16
*/

class Graph {
  constructor(adjList = {}) {
    // the adjacency list is of type Object<Number,Array<Number>>
    this.adjList = adjList;
  }
}


function bfs(graph, root) {
  let queue = [root];
  let visited = new Set([root]);
  let i = 0;
  while (i < queue.length) {
    let vertex = queue[i++];
    console.log(vertex);
    for (let neighbor of graph.adjList[vertex]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}


