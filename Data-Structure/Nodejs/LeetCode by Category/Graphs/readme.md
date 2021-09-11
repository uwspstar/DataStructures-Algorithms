---
marp: true
theme: default
header: ''
footer: 'Code Interview'
paginate: true
size: 16:9
---

# 图 Graph

- https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E5%AD%A6)
- https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

---

# 图的数据结构

- 图的数据结构包含一个有限（可能是可变的）的集合作为`节点`集合，以及一个无序对（对应无向图）或有序对（对应有向图）的集合作为`边`（有向图中也称作弧）的集合。节点可以是图结构的一部分，也可以是用整数下标或引用表示的外部实体。
- 图的数据结构还可能包含和每条边相关联的数值（edge value），例如一个标号或一个数值（即权重，weight；表示花费、容量、长度等）

---

# 图的遍历问题分为四类：

- https://zh.wikipedia.org/wiki/%E5%9B%BE%E7%9A%84%E9%81%8D%E5%8E%86
- 遍历完所有的边而不能有重复，即所謂“欧拉路径问题”（又名一笔画问题）；
- 遍历完所有的顶点而没有重复，即所谓“哈密頓路径问题”。
- 遍历完所有的边而可以有重复，即所谓“中国邮递员问题”；
- 遍历完所有的顶点而可以重复，即所谓“旅行推销员问题”。
- 对于第一和第三类问题已经得到了完满的解决，而第二和第四类问题则只得到了部分解决。

---

# 图的存储形式

- 共享存储
- 分布式存储

---

- DFS 是线，BFS 是面；一般来说在找最短路径的时候使用 BFS，其他时候还是 DFS 使用得多一些
- https://www.youtube.com/watch?v=LX49fuzeaAs&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f&index=146

---

### 「图」的表示方法 : 邻接表 adjacency list vs 邻接矩阵 adjacency matrix vs 关联矩阵

- 「图」的两种表示方法，`邻接表就是链表`，`邻接矩阵就是二维数组`。
- `邻接矩阵`判断连通性迅速，并可以进行矩阵运算解决一些问题，但是如果图比较稀疏的话很耗费空间。
- `邻接表`比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。
- `关联矩阵`一个二维矩阵，行表示顶点，列表示边。矩阵中的数值用于标识顶点和边的关系（是起点、是终点、不在这条边上等）。邻接表在稀疏图上比较有效率。邻接矩阵则常在图比较稠密的时候使用

---

#

n = # nodes
e = edges
Time : O(e)
Space: O(n)

---

# two primary ways of representing a graph:

- Adjacency list : 邻接表
- Adjacency Matrix : 邻接矩阵

---

# graph

```js
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};
```

---

# Breadth-first search (BFS) - Queue (FIFO)

```js
const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(graph, 'a');
```

---

# Depth-first search (DFS) - Stack (LIFO)

```js
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
};

depthFirstPrint(graph, 'a'); //acebdf //abdfce
```

---

```js
//recursion
const depthFirstPrint = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};

depthFirstPrint(graph, 'a'); //acebdf //abdfce
```

---

# Graph Data Structures in JavaScript for Beginners

- https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Depth-first-search-DFS-Graph-search

---

# graphs have many real-world applications like:

- Electronic circuits
- Flight reservations
- Driving directions
- Telecom: Cell tower frequency planning
- Social networks. E.g., Facebook uses a graph for suggesting friends
- Recommendations: Amazon/Netflix uses graphs to make suggestions for products/movies
- Graphs help to plan the logistics of delivering goods
- Airline Traffic
- GPS Navigation
- Networks routing

---

# hasPath

```js
//has path <assume no circle graph>
const hasPath = (graph, src, dis) => {
  if (src === dis) return true;
  for (let neighbor of graph[src]) {
    let found = hasPath(graph, neighbor, dis);
    if (found) return true;
  }
  return false;
};
```

---

```js
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
};
```

---

# undirected path

```js
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];
```

```js
const graph = {
  i: [j, k],
  j: [i],
  k: [i, m, l],
  m: [k],
  l: [k],
  o: [n],
  n: [o],
};
```

---

- convert edges list to adjacency list

```js
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
};
```

---

```js
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};
```

---

- check cycle with hash set

```js
const hasPath = (graph, src, dis, visited) => {
  if (src === dis) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    let found = hasPath(graph, neighbor, dis, visited);
    if (found) return true;
  }

  return false;
};
```

---
