---
marp: true
---

# 宽度优先搜索 BFS

### 使用条件

- 拓扑排序(100%)
- 出现连通块的关键词(100%)
- 分层遍历(100%)
- 简单图最短路径(100%)
- 给定一个变换规则，从初始状态变到终止状态最少几步(100%)

---

### 复杂度 n 是点数,m 是边数

- 时间复杂度:O(n + m)
- 空间复杂度:O(n)

---

### 代码模版

```java
// 代码模版
ReturnType bfs(Node startNode) {
    // BFS 必须要用队列 queue，别用栈 stack!
    Queue <Node> queue = new ArrayDeque<>();
    // hashmap 有两个作用，一个是记录一个点是否被丢进过队列了，避免重复访问
    // 另外一个是记录 startNode 到其他所有节点的最短距离
    // 如果只求连通性的话，可以换成 HashSet 就行
    // node 做 key 的时候比较的是内存地址
    Map <Node, Integer> distance = new HashMap<>();
    // 把起点放进队列和哈希表里，如果有多个起点，都放进去
    queue.offer(startNode);
    distance.put(startNode, 0); // or 1 if necessary
    // while 队列不空，不停的从队列里拿出一个点，拓展邻居节点放到队列中
    while (!queue.isEmpty()) {
        Node node = queue.poll();
        // 如果有明确的终点可以在这里加终点的判断
        if (node 是终点) {
            break or return something;
        }
        for (Node neighbor : node.getNeighbors()) {
            if (distance.containsKey(neighbor)) {
                continue;
            }
            queue.offer(neighbor);
            distance.put(neighbor, distance.get(node) + 1);
        }
    }
    // 如果需要返回所有点离起点的距离，就 return hashmap
    return distance;
    // 如果需要返回所有连通的节点, 就 return HashMap 里的所有点
    return distance.keySet();
    // 如果需要返回离终点的最短距离
    return distance.get(endNode);
}
```
