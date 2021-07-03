---
marp: true
theme: default
header: 'leetcode'
footer: 'Code Interview'
paginate: true
size: 16:9
---

# DIJKSTRA 算法主要解决的是图中任意两点的最短距离

- https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/basic-data-structure#zui-duan-ju-li-zui-duan-lu-jing
- https://www.algorithms-and-technologies.com/dijkstra/javascript
- 算法的基本思想是贪心，每次都遍历所有邻居，并从中找到距离最小的，本质上是一种广度优先遍历。这里我们借助堆这种数据结构，使得可以在 $logN$ 的时间内找到 cost 最小的点。

---

```js
{
  const dijkstra = function (graph, start) {
      var distances = Array(graph.length).fill(Number.MAX_VALUE);
      distances[start] = 0;
      ...
  };
}
{
  const dijkstra = function (graph, start) {
    var distances = []; //This contains the distances from the start node to all other nodes
    for (var i = 0; i < graph.length; i++) {
      //Initializing with a distance of "Infinity"
      distances[i] = Number.MAX_VALUE;
    }
    distances[start] = 0; //The distance from the start node to itself is of course 0
    var visited = [];//This contains whether a node was already visited
    
    while (true) {//While there are nodes left to visit...
      // ... find the node with the currently shortest distance from the start node...
      var shortestDistance = Number.MAX_VALUE;
      var shortestIndex = -1;
      for (var i = 0; i < graph.length; i++) {
        //... by going through all nodes that haven't been visited yet
        if (distances[i] < shortestDistance && !visited[i]) {
          shortestDistance = distances[i];
          shortestIndex = i;
        }
      }

      console.log(
        'Visiting node ' +
          shortestDistance +
          ' with current distance ' +
          shortestDistance
      );

      if (shortestIndex === -1) {
        // There was no node not yet visited --> We are done
        return distances;
      }

      //...then, for all neighboring nodes....
      for (var i = 0; i < graph[shortestIndex].length; i++) {
        //...if the path over this edge is shorter...
        if (
          graph[shortestIndex][i] !== 0 &&
          distances[i] > distances[shortestIndex] + graph[shortestIndex][i]
        ) {
          //...Save this path as new shortest path.
          distances[i] = distances[shortestIndex] + graph[shortestIndex][i];
          console.log('Updating distance of node ' + i + ' to ' + distances[i]);
        }
      }
      // Lastly, note that we are finished with this node.
      visited[shortestIndex] = true;
      console.log('Visited nodes: ' + visited);
      console.log('Currently lowest distances: ' + distances);
    }
  };
}
```
